"use client";

// components/player/PlayerProvider.tsx
//
// One recording player for the whole archive.
//
// The <video> element is mounted once, in the root layout, so a reader can
// start a recording on the coercion page, keep it playing while they read the
// timeline, and land on a third page with the audio uninterrupted. Nothing
// here unmounts it: theater and mini are the same element in a different box.
//
// Two ways in:
//   1. <Moment ulid="…" t="10:36" /> in authored pages.
//   2. Click delegation over every anchor in the document whose href carries
//      a ?t= and points at a page that presents a recording. That upgrades
//      every timestamp citation already written into the archive, including
//      the generated ones in data/sunlight.ts, without touching them.
import {
    createContext, useCallback, useContext, useEffect, useMemo, useRef, useState,
} from "react";
import PlayerChrome from "@/components/player/PlayerChrome";
import {
    parseTimestamp, recordingByPage, recordingByUlid, type Recording,
} from "@/lib/recordings";

export type PlayerMode = "closed" | "theater" | "mini";

interface OpenRequest {
    ulid: string;
    /** Seconds, or a "mm:ss" string. Omitted resumes where the reader was. */
    t?: number | string | null;
    autoplay?: boolean;
}

interface PlayerApi {
    mode: PlayerMode;
    recording: Recording | null;
    open: (req: OpenRequest) => void;
    close: () => void;
    minimize: () => void;
    expand: () => void;
    videoRef: React.RefObject<HTMLVideoElement | null>;
}

const PlayerContext = createContext<PlayerApi | null>(null);

export function usePlayer(): PlayerApi {
    const ctx = useContext(PlayerContext);
    if (!ctx) {
        throw new Error("usePlayer must be used inside <PlayerProvider>");
    }
    return ctx;
}

/** Survives a full page load (an external link, a refresh, a deploy). */
const STORAGE_KEY = "archive-player";

interface Persisted {
    ulid: string;
    time: number;
    mode: Exclude<PlayerMode, "closed">;
}

function readPersisted(): Persisted | null {
    try {
        const raw = sessionStorage.getItem(STORAGE_KEY);
        if (!raw) return null;
        const parsed = JSON.parse(raw) as Persisted;
        if (!parsed?.ulid || !recordingByUlid(parsed.ulid)) return null;
        return parsed;
    } catch {
        return null;
    }
}

export default function PlayerProvider({ children }: { children: React.ReactNode }) {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [mode, setMode] = useState<PlayerMode>("closed");
    const [recording, setRecording] = useState<Recording | null>(null);
    // The seek a caller asked for, applied once the element has metadata.
    const [pendingSeek, setPendingSeek] = useState<number | null>(null);
    const [autoplay, setAutoplay] = useState(true);

    const open = useCallback((req: OpenRequest) => {
        const found = recordingByUlid(req.ulid);
        if (!found) return;
        const seconds = typeof req.t === "string" ? parseTimestamp(req.t) : (req.t ?? null);
        setRecording((prev) => (prev?.ulid === found.ulid ? prev : found));
        setAutoplay(req.autoplay !== false);
        setPendingSeek(seconds);
        // A reader who put the player in the corner keeps it there: a new
        // citation re-seeks the window they already chose.
        setMode((m) => (m === "mini" ? "mini" : "theater"));
    }, []);

    const close = useCallback(() => {
        const video = videoRef.current;
        if (video) video.pause();
        setMode("closed");
        setRecording(null);
        setPendingSeek(null);
        try { sessionStorage.removeItem(STORAGE_KEY); } catch { /* private mode */ }
    }, []);

    const minimize = useCallback(() => setMode((m) => (m === "theater" ? "mini" : m)), []);
    const expand = useCallback(() => setMode((m) => (m === "mini" ? "theater" : m)), []);

    // Restore after a full page load: same recording, same second, paused, in
    // the box it was in. A reader who followed an outside link back into the
    // archive does not lose their place.
    useEffect(() => {
        const saved = readPersisted();
        if (!saved) return;
        const found = recordingByUlid(saved.ulid);
        if (!found) return;
        setRecording(found);
        setPendingSeek(saved.time);
        setAutoplay(false);
        setMode(saved.mode);
    }, []);

    // Keep the restore point current without writing on every timeupdate.
    useEffect(() => {
        if (mode === "closed" || !recording) return;
        const id = window.setInterval(() => {
            const video = videoRef.current;
            if (!video) return;
            try {
                sessionStorage.setItem(STORAGE_KEY, JSON.stringify({
                    ulid: recording.ulid,
                    time: video.currentTime,
                    mode,
                } satisfies Persisted));
            } catch { /* private mode */ }
        }, 2000);
        return () => window.clearInterval(id);
    }, [mode, recording]);

    // Apply a requested seek as soon as the element can accept one. Two
    // waits, not one: opening from closed mounts the <video> a tick after the
    // request lands, and a fresh source has no duration until metadata
    // arrives. Dropping either wait silently starts the recording at zero.
    useEffect(() => {
        if (pendingSeek == null) return;

        let cancelled = false;
        let timer = 0;

        const apply = (video: HTMLVideoElement) => {
            if (cancelled) return;
            // An evidence page carries its own copy of the recording. Two
            // players talking over each other is the worst thing this could
            // do, so the overlay silences every other element when it takes
            // the floor.
            document.querySelectorAll("video").forEach((other) => {
                if (other !== video) other.pause();
            });
            video.currentTime = pendingSeek;
            if (autoplay) {
                // Autoplay refusal is fine: the seek landed and the reader
                // can press play. Nothing here depends on the promise.
                void video.play().catch(() => {});
            }
            setPendingSeek(null);
        };

        const arm = () => {
            if (cancelled) return;
            const video = videoRef.current;
            if (!video) {
                timer = window.setTimeout(arm, 100);
                return;
            }
            if (video.readyState >= 1) apply(video);
            else video.addEventListener("loadedmetadata", () => apply(video), { once: true });
        };

        arm();
        return () => {
            cancelled = true;
            if (timer) window.clearTimeout(timer);
        };
    }, [pendingSeek, autoplay, recording]);

    // Every ?t= link in the archive, upgraded in place. An anchor pointing at
    // a page that presents a recording opens the player at that second instead
    // of navigating; an anchor with an explicit data-recording does the same
    // regardless of where it points. Modified clicks (new tab, download) and
    // anything outside the archive are left alone.
    useEffect(() => {
        const onClick = (event: MouseEvent) => {
            // Capture phase: Next's <Link> calls preventDefault in its own
            // handler, so a bubble-phase listener would only ever see an
            // event another handler had already claimed.
            if (event.button !== 0) return;
            if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

            const anchor = (event.target as HTMLElement | null)?.closest?.("a");
            if (!anchor) return;

            const href = anchor.getAttribute("href");
            if (!href) return;

            let url: URL;
            try {
                url = new URL(href, window.location.origin);
            } catch {
                return;
            }
            if (url.origin !== window.location.origin) return;

            const explicit = anchor.getAttribute("data-recording");
            const seconds = parseTimestamp(url.searchParams.get("t") ?? anchor.getAttribute("data-t"));
            if (!explicit && seconds == null) return;

            const found = explicit
                ? recordingByUlid(explicit)
                : recordingByPage(url.pathname);
            if (!found) return;

            event.preventDefault();
            event.stopPropagation();
            open({ ulid: found.ulid, t: seconds });
        };

        document.addEventListener("click", onClick, true);
        return () => document.removeEventListener("click", onClick, true);
    }, [open]);

    // Deep entry: /evidence/coercion/?t=10:36 loaded cold should also play,
    // not just seek the page's own copy. Runs once, after restore.
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const seconds = parseTimestamp(params.get("t"));
        if (seconds == null) return;
        const found = recordingByPage(window.location.pathname);
        if (!found) return;
        open({ ulid: found.ulid, t: seconds, autoplay: false });
    }, [open]);

    const api = useMemo<PlayerApi>(() => ({
        mode, recording, open, close, minimize, expand, videoRef,
    }), [mode, recording, open, close, minimize, expand]);

    return (
        <PlayerContext.Provider value={api}>
            {children}
            <PlayerChrome />
        </PlayerContext.Provider>
    );
}

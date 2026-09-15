"use client";

// components/player/PlayerChrome.tsx
//
// The box around the one <video> element: a theater overlay, a mini window,
// and the controls. The element itself never moves between React trees —
// only the classes around it change — so switching boxes never interrupts
// playback or drops the buffer.
import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Icon from "@/components/Icon";
import { usePlayer } from "@/components/player/PlayerProvider";
import { formatTime, libraryUrl, longDate, mediaUrl } from "@/lib/recordings";
import { fetchSignal, type SignalRecord } from "@/lib/qp";
import Prose from "@/components/reflections/Prose";

const SPEEDS = [0.75, 1, 1.25, 1.5, 2];

export default function PlayerChrome() {
    const { mode, recording, close, minimize, expand, videoRef } = usePlayer();

    const [playing, setPlaying] = useState(false);
    const [time, setTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [buffered, setBuffered] = useState(0);
    const [muted, setMuted] = useState(false);
    const [volume, setVolume] = useState(1);
    const [rate, setRate] = useState(1);
    const [speedOpen, setSpeedOpen] = useState(false);
    const [error, setError] = useState(false);
    const [nonce, setNonce] = useState(0);
    const [scrubbing, setScrubbing] = useState(false);
    const barRef = useRef<HTMLDivElement | null>(null);

    // The record over the video: chapters, analysis, reflections, fetched
    // live from the realm the first time a reader opens one of them.
    const [panel, setPanel] = useState<null | "chapters" | "analysis" | "reflections">(null);
    const [sig, setSig] = useState<SignalRecord | null>(null);
    const [sigState, setSigState] = useState<"idle" | "loading" | "error">("idle");
    const [sigError, setSigError] = useState<string | null>(null);

    const open = mode !== "closed" && !!recording;

    // Element events → state. Bound once per mounted element; the element is
    // mounted for as long as the player is open, across page navigations.
    useEffect(() => {
        const video = videoRef.current;
        if (!video || !open) return;

        const onTime = () => {
            if (!scrubbing) setTime(video.currentTime);
            const ranges = video.buffered;
            setBuffered(ranges.length ? ranges.end(ranges.length - 1) : 0);
        };
        const onMeta = () => setDuration(video.duration || 0);
        const onPlay = () => setPlaying(true);
        const onPause = () => setPlaying(false);
        const onVolume = () => { setMuted(video.muted); setVolume(video.volume); };
        const onRate = () => setRate(video.playbackRate);
        const onError = () => setError(true);

        video.addEventListener("timeupdate", onTime);
        video.addEventListener("progress", onTime);
        video.addEventListener("loadedmetadata", onMeta);
        video.addEventListener("play", onPlay);
        video.addEventListener("pause", onPause);
        video.addEventListener("volumechange", onVolume);
        video.addEventListener("ratechange", onRate);
        video.addEventListener("error", onError);
        return () => {
            video.removeEventListener("timeupdate", onTime);
            video.removeEventListener("progress", onTime);
            video.removeEventListener("loadedmetadata", onMeta);
            video.removeEventListener("play", onPlay);
            video.removeEventListener("pause", onPause);
            video.removeEventListener("volumechange", onVolume);
            video.removeEventListener("ratechange", onRate);
            video.removeEventListener("error", onError);
        };
    }, [open, scrubbing, videoRef]);

    // A new recording is a new source: clear the old element's readings so the
    // scrubber never shows the previous recording's duration.
    useEffect(() => {
        setError(false);
        setTime(0);
        setDuration(0);
        setBuffered(0);
        setPanel(null);
        setSig(null);
        setSigState("idle");
    }, [recording?.ulid]);

    // Lazy: fetch the signal's QP record the first time a panel is opened for
    // this recording, and reuse it across the three panels.
    useEffect(() => {
        if (!panel || !recording) return;
        if (sig && sig.ulid === recording.ulid) return;
        let cancelled = false;
        const controller = new AbortController();
        setSigState("loading");
        setSigError(null);
        fetchSignal(recording.ulid, controller.signal).then(
            (r) => { if (!cancelled) { setSig(r); setSigState("idle"); } },
            (e) => {
                if (cancelled || controller.signal.aborted) return;
                const m = e instanceof Error ? e.message : String(e);
                setSigError(
                    /\b(404|403)\b/.test(m) ? "This recording's reading is not public."
                    : /\b5\d\d\b/.test(m) ? `The realm returned an error (${m}).`
                    : /failed to fetch|networkerror|load failed/i.test(m) ? "Could not reach the realm."
                    : `Could not load (${m}).`
                );
                setSigState("error");
            }
        );
        return () => { cancelled = true; controller.abort(); };
    }, [panel, recording, sig]);

    const toggle = useCallback(() => {
        const video = videoRef.current;
        if (!video) return;
        if (video.paused) void video.play().catch(() => {});
        else video.pause();
    }, [videoRef]);

    const skip = useCallback((delta: number) => {
        const video = videoRef.current;
        if (!video) return;
        video.currentTime = Math.max(0, Math.min((video.duration || 0), video.currentTime + delta));
    }, [videoRef]);

    const seekTo = useCallback((seconds: number) => {
        const video = videoRef.current;
        if (!video) return;
        video.currentTime = Math.max(0, Math.min(video.duration || seconds, seconds));
        setTime(video.currentTime);
    }, [videoRef]);

    const fromPointer = useCallback((clientX: number) => {
        const bar = barRef.current;
        const video = videoRef.current;
        if (!bar || !video || !video.duration) return;
        const rect = bar.getBoundingClientRect();
        const ratio = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
        seekTo(ratio * video.duration);
    }, [seekTo, videoRef]);

    // Drag anywhere once the scrub starts, including off the bar.
    useEffect(() => {
        if (!scrubbing) return;
        const move = (e: PointerEvent) => fromPointer(e.clientX);
        const up = () => setScrubbing(false);
        window.addEventListener("pointermove", move);
        window.addEventListener("pointerup", up);
        return () => {
            window.removeEventListener("pointermove", move);
            window.removeEventListener("pointerup", up);
        };
    }, [scrubbing, fromPointer]);

    // Keyboard, while the player owns the screen. Typing in a field is never
    // stolen; the archive has a newsletter input in the sidebar.
    useEffect(() => {
        if (!open) return;
        const onKey = (e: KeyboardEvent) => {
            const el = e.target as HTMLElement | null;
            if (el && (el.tagName === "INPUT" || el.tagName === "TEXTAREA" || el.isContentEditable)) return;
            const video = videoRef.current;
            if (!video) return;
            switch (e.key) {
                case " ": case "k": e.preventDefault(); toggle(); break;
                case "ArrowRight": e.preventDefault(); skip(e.shiftKey ? 30 : 5); break;
                case "ArrowLeft": e.preventDefault(); skip(e.shiftKey ? -30 : -5); break;
                case "m": video.muted = !video.muted; break;
                case "f": void requestFullscreen(); break;
                case "Escape":
                    if (mode === "theater") { e.preventDefault(); minimize(); }
                    break;
                default: break;
            }
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [open, mode, toggle, skip, minimize]);

    const requestFullscreen = useCallback(async () => {
        const video = videoRef.current;
        if (!video) return;
        try {
            if (document.fullscreenElement) await document.exitFullscreen();
            else await video.requestFullscreen();
        } catch { /* iOS Safari on <video> only; nothing to recover */ }
    }, [videoRef]);

    if (!open || !recording) return null;

    const theater = mode === "theater";
    const src = `${mediaUrl(recording.ulid, "video")}${nonce ? `?r=${nonce}` : ""}`;
    const pct = duration ? (time / duration) * 100 : 0;
    const bufferedPct = duration ? (buffered / duration) * 100 : 0;
    const long = duration >= 3600;

    return (
        <>
            {/* Backdrop, theater only. Clicking it minimizes rather than
                closes: a reader who taps outside has not asked to lose the
                recording, only to get the page back. */}
            {theater && (
                <div
                    className="fixed inset-0 z-[90] bg-slate-900/70 backdrop-blur-sm"
                    onClick={minimize}
                    aria-hidden
                />
            )}

            <div
                className={
                    theater
                        ? "fixed inset-x-0 bottom-0 top-auto z-[95] mx-auto w-full max-w-5xl px-0 sm:bottom-auto sm:top-1/2 sm:-translate-y-1/2 sm:px-4"
                        : "fixed bottom-3 right-3 z-[95] w-[min(92vw,22rem)]"
                }
                role="dialog"
                aria-modal={theater}
                aria-label={`Recording: ${recording.title}`}
            >
                <div className="overflow-hidden rounded-t-2xl border border-slate-300 bg-white shadow-2xl sm:rounded-2xl">

                    {/* ── Header ── */}
                    <div className="flex items-start gap-3 border-b border-slate-200 bg-emerald-50/70 px-3 py-2 sm:px-4 sm:py-2.5">
                        <Icon
                            name="Video"
                            className="mt-0.5 hidden shrink-0 text-emerald-700 sm:block"
                            size={18}
                            strokeWidth={1.75}
                        />
                        <div className="min-w-0 flex-1">
                            <div className="text-[10px] font-bold uppercase tracking-widest text-emerald-700">
                                The recording
                            </div>
                            <div className={`truncate font-semibold text-slate-900 ${theater ? "text-sm sm:text-base" : "text-xs"}`}>
                                {recording.title}
                            </div>
                            {theater && (
                                <div className="mt-0.5 flex flex-wrap items-center gap-x-3 gap-y-0.5 text-[11px] text-slate-500">
                                    <span>{longDate(recording.date)}</span>
                                    <span className="font-mono tracking-widest">{recording.ulid}</span>
                                </div>
                            )}
                        </div>
                        {theater && (
                            <div className="hidden shrink-0 items-center gap-3 self-center pr-1 sm:flex">
                                <HeaderLink label="Chapters" active={panel === "chapters"} onClick={() => setPanel((p) => (p === "chapters" ? null : "chapters"))} />
                                <HeaderLink label="AI Analysis" active={panel === "analysis"} onClick={() => setPanel((p) => (p === "analysis" ? null : "analysis"))} />
                                <HeaderLink label="Reflections" active={panel === "reflections"} onClick={() => setPanel((p) => (p === "reflections" ? null : "reflections"))} />
                            </div>
                        )}
                        <div className="flex shrink-0 items-center gap-1">
                            <button
                                onClick={theater ? minimize : expand}
                                aria-label={theater ? "Minimize the player" : "Expand the player"}
                                className="rounded-md p-1.5 text-slate-500 hover:bg-white hover:text-slate-900"
                            >
                                <Icon name={theater ? "ChevronDown" : "ChevronUp"} size={18} strokeWidth={2} />
                            </button>
                            <button
                                onClick={close}
                                aria-label="Close the player"
                                className="rounded-md p-1.5 text-slate-500 hover:bg-white hover:text-slate-900"
                            >
                                <Icon name="X" size={18} strokeWidth={2} />
                            </button>
                        </div>
                    </div>

                    {/* ── Stage ── */}
                    <div className="relative bg-slate-900">
                        {error ? (
                            <div className="flex aspect-video w-full flex-col items-center justify-center gap-3 px-4 text-center">
                                <span className="font-mono text-[11px] uppercase tracking-widest text-slate-400">
                                    The recording did not load
                                </span>
                                <button
                                    onClick={() => { setError(false); setNonce((n) => n + 1); }}
                                    className="rounded-md border border-emerald-400 px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-emerald-300 hover:bg-emerald-900/40"
                                >
                                    Retry
                                </button>
                            </div>
                        ) : (
                            <video
                                ref={videoRef}
                                src={src}
                                poster={mediaUrl(recording.ulid, "thumbnail")}
                                preload="metadata"
                                playsInline
                                onClick={toggle}
                                className={`mx-auto w-auto max-w-full cursor-pointer object-contain ${
                                    theater ? "max-h-[42vh] sm:max-h-[58vh]" : "max-h-[9.5rem]"
                                }`}
                            />
                        )}

                        {/* The record over the video, in the same overlay idiom
                            as every other citation in the archive: a white card,
                            an emerald header strip, 13px prose. Opened from the
                            header; the dim behind it keeps the recording in view
                            rather than blanking it. */}
                        {theater && panel && (
                            <div className="absolute inset-0 flex items-stretch justify-center bg-slate-900/70 p-3 backdrop-blur-sm sm:items-center sm:p-6" onClick={() => setPanel(null)}>
                                <div
                                    className="flex max-h-full w-full max-w-lg flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <div className="flex items-center gap-3 border-b border-emerald-200 bg-emerald-50 px-4 py-2.5">
                                        <Icon name={panel === "chapters" ? "ChartNoAxesGantt" : panel === "analysis" ? "Bot" : "MessageSquare"} className="shrink-0 text-emerald-700" size={18} strokeWidth={2} />
                                        <div className="min-w-0 flex-1 text-[10px] font-bold uppercase tracking-widest text-emerald-700">
                                            {panel === "chapters" ? "Chapters" : panel === "analysis" ? "AI Analysis" : "Reflections"}
                                        </div>
                                        <button onClick={() => setPanel(null)} aria-label="Close panel" className="rounded-md p-1.5 text-slate-500 hover:bg-white hover:text-slate-900">
                                            <Icon name="X" size={18} strokeWidth={2} />
                                        </button>
                                    </div>
                                    <div className="min-h-0 flex-1 overflow-y-auto px-4 py-3">
                                        {sigState === "loading" && <div className="py-10 text-center text-[13px] text-slate-400">Loading…</div>}
                                        {sigState === "error" && <div className="mx-auto max-w-xs py-10 text-center text-[13px] leading-relaxed text-slate-500">{sigError}</div>}
                                        {sigState === "idle" && sig && (
                                            <PanelBody panel={panel} sig={sig} seekTo={(s) => { seekTo(s); setPanel(null); }} />
                                        )}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* ── Controls ── */}
                    <div
                        className="px-2 pb-2 pt-1.5 sm:px-3 sm:pb-2.5"
                        style={theater ? { paddingBottom: "calc(0.5rem + env(safe-area-inset-bottom))" } : undefined}
                    >
                        {/* Scrubber */}
                        <div
                            ref={barRef}
                            onPointerDown={(e) => { setScrubbing(true); fromPointer(e.clientX); }}
                            className="group relative h-4 cursor-pointer select-none"
                            role="slider"
                            aria-label="Seek"
                            aria-valuemin={0}
                            aria-valuemax={Math.round(duration)}
                            aria-valuenow={Math.round(time)}
                            tabIndex={0}
                            onKeyDown={(e) => {
                                if (e.key === "ArrowRight") { e.preventDefault(); skip(5); }
                                if (e.key === "ArrowLeft") { e.preventDefault(); skip(-5); }
                            }}
                        >
                            <div className="absolute inset-x-0 top-1/2 h-1 -translate-y-1/2 rounded-full bg-slate-200">
                                <div className="h-full rounded-full bg-slate-300" style={{ width: `${bufferedPct}%` }} />
                            </div>
                            <div
                                className="absolute left-0 top-1/2 h-1 -translate-y-1/2 rounded-full bg-emerald-600"
                                style={{ width: `${pct}%` }}
                            />
                            <div
                                className="absolute top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-700 opacity-0 shadow transition-opacity group-hover:opacity-100"
                                style={{ left: `${pct}%`, opacity: scrubbing ? 1 : undefined }}
                            />
                        </div>

                        <div className="mt-0.5 flex items-center gap-1 sm:gap-2">
                            <button
                                onClick={toggle}
                                aria-label={playing ? "Pause" : "Play"}
                                className="rounded-md p-1.5 text-slate-700 hover:bg-slate-100"
                            >
                                {playing ? <PauseGlyph /> : <PlayGlyph />}
                            </button>

                            <button
                                onClick={() => skip(-10)}
                                aria-label="Back ten seconds"
                                className="hidden rounded-md p-1.5 font-mono text-[10px] uppercase tracking-widest text-slate-600 hover:bg-slate-100 sm:block"
                            >
                                &minus;10s
                            </button>
                            <button
                                onClick={() => skip(10)}
                                aria-label="Forward ten seconds"
                                className="hidden rounded-md p-1.5 font-mono text-[10px] uppercase tracking-widest text-slate-600 hover:bg-slate-100 sm:block"
                            >
                                +10s
                            </button>

                            <span className="ml-1 font-mono text-[11px] tabular-nums text-slate-600">
                                {formatTime(time, long)}
                                <span className="text-slate-400"> / {formatTime(duration, long)}</span>
                            </span>

                            <div className="ml-auto flex items-center gap-1">
                                {/* Speed */}
                                <div className="relative">
                                    <button
                                        onClick={() => setSpeedOpen((s) => !s)}
                                        aria-label="Playback speed"
                                        className="rounded-md px-2 py-1 font-mono text-[11px] tabular-nums text-slate-600 hover:bg-slate-100"
                                    >
                                        {rate}&times;
                                    </button>
                                    {speedOpen && (
                                        <div className="absolute bottom-full right-0 mb-1 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-lg">
                                            {SPEEDS.map((s) => (
                                                <button
                                                    key={s}
                                                    onClick={() => {
                                                        const video = videoRef.current;
                                                        if (video) video.playbackRate = s;
                                                        setSpeedOpen(false);
                                                    }}
                                                    className={`block w-full px-3 py-1.5 text-left font-mono text-[11px] tabular-nums hover:bg-slate-50 ${
                                                        s === rate ? "text-emerald-700" : "text-slate-600"
                                                    }`}
                                                >
                                                    {s}&times;
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* Volume: the slider is desktop-only, the mute
                                    button is everywhere. Phones have hardware. */}
                                <button
                                    onClick={() => { const v = videoRef.current; if (v) v.muted = !v.muted; }}
                                    aria-label={muted ? "Unmute" : "Mute"}
                                    className="rounded-md p-1.5 text-slate-600 hover:bg-slate-100"
                                >
                                    {muted || volume === 0 ? <MutedGlyph /> : <SoundGlyph />}
                                </button>
                                <input
                                    type="range"
                                    min={0}
                                    max={1}
                                    step={0.05}
                                    value={muted ? 0 : volume}
                                    onChange={(e) => {
                                        const v = videoRef.current;
                                        if (!v) return;
                                        v.volume = Number(e.target.value);
                                        v.muted = Number(e.target.value) === 0;
                                    }}
                                    aria-label="Volume"
                                    className="hidden h-1 w-16 cursor-pointer accent-emerald-600 lg:block"
                                />

                                <button
                                    onClick={() => void requestFullscreen()}
                                    aria-label="Fullscreen"
                                    className="hidden rounded-md p-1.5 text-slate-600 hover:bg-slate-100 sm:block"
                                >
                                    <FullscreenGlyph />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* ── Footer: where this recording lives ── */}
                    {theater && (
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 border-t border-slate-200 bg-slate-50 px-3 py-2 text-[11px] sm:px-4">
                            {recording.page && (
                                <Link
                                    href={recording.page}
                                    onClick={minimize}
                                    className="font-semibold uppercase tracking-widest text-emerald-800 hover:underline"
                                >
                                    The page it belongs to
                                </Link>
                            )}
                            <a
                                href={libraryUrl(recording.ulid)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-semibold uppercase tracking-widest text-emerald-800 hover:underline"
                            >
                                The signal, with its transcript
                            </a>
                            <span className="ml-auto hidden font-mono uppercase tracking-widest text-slate-400 sm:block">
                                Space · &larr; &rarr; · Esc
                            </span>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

function HeaderLink({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
    return (
        <button
            onClick={onClick}
            className={`font-mono text-[10px] font-bold uppercase tracking-widest ${active ? "text-emerald-700" : "text-emerald-800/60 hover:text-emerald-800"}`}
        >
            {label}
        </button>
    );
}

function PanelBody({ panel, sig, seekTo }: { panel: "chapters" | "analysis" | "reflections"; sig: SignalRecord; seekTo: (s: number) => void }) {
    if (panel === "chapters") {
        if (!sig.chapters.length) return <div className="py-10 text-center text-[13px] text-slate-400">No chapters for this recording.</div>;
        return (
            <div className="-mx-2 space-y-0.5">
                {sig.chapters.map((c, i) => (
                    <button
                        key={i}
                        onClick={() => seekTo(c.start)}
                        className="flex w-full items-baseline gap-3 rounded-md px-2 py-1.5 text-left hover:bg-slate-50"
                    >
                        <span className="shrink-0 font-mono text-[11px] tabular-nums text-emerald-700">{formatTime(c.start)}</span>
                        <span className="min-w-0">
                            <span className="text-[13px] text-slate-800">{c.title}</span>
                            {c.summary && <span className="mt-0.5 block text-[12px] leading-snug text-slate-500">{c.summary}</span>}
                        </span>
                    </button>
                ))}
            </div>
        );
    }
    if (panel === "analysis") {
        const text = [sig.environment, sig.substrate].filter(Boolean).join("\n\n");
        if (!text) return <div className="py-10 text-center text-[13px] text-slate-400">No analysis for this recording.</div>;
        return <Prose text={text} accent="emerald" />;
    }
    // reflections
    if (!sig.reflections.length) return <div className="py-10 text-center text-[13px] text-slate-400">No public reflection for this recording.</div>;
    return (
        <div className="space-y-4">
            {sig.reflections.map((r, i) => (
                <div key={i} className={i > 0 ? "border-t border-slate-100 pt-4" : undefined}>
                    <div className="mb-1 text-[10px] font-bold uppercase tracking-widest text-emerald-700">{r.type.toLowerCase()}</div>
                    <Prose text={r.content} accent="emerald" />
                </div>
            ))}
        </div>
    );
}

/* Inline glyphs: the control bar needs shapes that read at 14px, and these
   are simpler than pulling five more icon names into the registry. */
const PlayGlyph = () => (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden><path d="M8 5v14l11-7z" /></svg>
);
const PauseGlyph = () => (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden><path d="M6 5h4v14H6zM14 5h4v14h-4z" /></svg>
);
const SoundGlyph = () => (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
        <path d="M4 9v6h4l5 4V5L8 9H4zm12.5 3a4.5 4.5 0 0 0-2.5-4v8a4.5 4.5 0 0 0 2.5-4z" />
    </svg>
);
const MutedGlyph = () => (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
        <path d="M4 9v6h4l5 4V5L8 9H4zm15.6 3 2.2-2.2-1.4-1.4-2.2 2.2-2.2-2.2-1.4 1.4 2.2 2.2-2.2 2.2 1.4 1.4 2.2-2.2 2.2 2.2 1.4-1.4z" />
    </svg>
);
const FullscreenGlyph = () => (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
        <path d="M4 9V4h5v2H6v3H4zm11-5h5v5h-2V6h-3V4zM4 15h2v3h3v2H4v-5zm14 3v-3h2v5h-5v-2h3z" />
    </svg>
);

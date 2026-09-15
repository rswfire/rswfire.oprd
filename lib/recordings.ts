// lib/recordings.ts
//
// The recordings the archive can play, and the arithmetic for citing a second
// of one. A recording is a signal on Autonomy Realms: the bytes stream from
// the media proxy, the title and date come from the manifest that already
// describes the cluster, and the ULID is the identity everywhere.
import { PRIMARY_SIGNALS } from "@/lib/qpManifest";
import { REALM_RECORDINGS } from "@/data/realmRecordings";

export interface Recording {
    ulid: string;
    title: string;
    date: string;        // YYYY-MM-DD
    /** The archive page that presents this recording in context, if one does. */
    page: string | null;
    /** Seconds, where the realm knows it. */
    seconds?: number | null;
}

// Every public recording in the realm is playable. The ten in the manifest
// are the ones an evidence page presents in context, so they carry a page;
// the rest are citable all the same, which is what the testimony needs.
const MANIFEST_PAGES = new Map(
    PRIMARY_SIGNALS.map((s) => [s.ulid, s.archive_page] as const),
);

export const RECORDINGS: Recording[] = REALM_RECORDINGS.map((r) => ({
    ulid: r.u,
    title: r.t,
    date: r.d,
    page: MANIFEST_PAGES.get(r.u) ?? null,
    seconds: r.s,
})).concat(
    // A manifest entry the catalogue does not know about still plays.
    PRIMARY_SIGNALS
        .filter((s) => !REALM_RECORDINGS.some((r) => r.u === s.ulid))
        .map((s) => ({ ulid: s.ulid, title: s.title, date: s.date, page: s.archive_page, seconds: null })),
);

const BY_ULID = new Map(RECORDINGS.map((r) => [r.ulid, r]));

/** Archive page → the recording it presents, for upgrading old ?t= links. */
const BY_PAGE = new Map(
    RECORDINGS.filter((r) => r.page).map((r) => [r.page as string, r]),
);

export function recordingByUlid(ulid: string): Recording | undefined {
    return BY_ULID.get(ulid.toUpperCase());
}

export function recordingByPage(pathname: string): Recording | undefined {
    return BY_PAGE.get(pathname.replace(/\/+$/, "") || "/");
}

// The Autonomy media proxy: /media/{ulid}/{item} enforces the signal's
// visibility floor and 302s to a freshly-signed S3 URL on every load, so the
// archive never holds a signed URL and never expires one.
const MEDIA_ORIGIN = process.env.NEXT_PUBLIC_MEDIA_ORIGIN || "https://rswfire.com";

export function mediaUrl(ulid: string, item: "video" | "thumbnail"): string {
    return `${MEDIA_ORIGIN}/media/${ulid}/${item}`;
}

export function libraryUrl(ulid: string): string {
    return `https://rswfire.com/library/signal/${ulid}`;
}

/**
 * "10:36" → 636. "1:02:03" → 3723. "636" → 636. Anything unparseable → null,
 * so a malformed citation opens the recording at the start instead of at NaN.
 */
export function parseTimestamp(raw: string | null | undefined): number | null {
    if (!raw) return null;
    const parts = raw.trim().split(":");
    if (parts.some((p) => p === "" || !/^\d+(\.\d+)?$/.test(p))) return null;
    const seconds = parts.map(Number).reduce((acc, n) => acc * 60 + n, 0);
    return Number.isFinite(seconds) && seconds >= 0 ? seconds : null;
}

/** 636 → "10:36". 3723 → "1:02:03". Used for both labels and the scrubber. */
export function formatTime(seconds: number, forceHours = false): string {
    if (!Number.isFinite(seconds) || seconds < 0) seconds = 0;
    const whole = Math.floor(seconds);
    const h = Math.floor(whole / 3600);
    const m = Math.floor((whole % 3600) / 60);
    const s = whole % 60;
    const pad = (n: number) => String(n).padStart(2, "0");
    return h > 0 || forceHours ? `${h}:${pad(m)}:${pad(s)}` : `${m}:${pad(s)}`;
}

/** "March 5, 2025" from "2025-03-05", without dragging in a date library. */
const MONTHS = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

export function longDate(iso: string): string {
    const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso);
    if (!m) return iso;
    return `${MONTHS[Number(m[2]) - 1]} ${Number(m[3])}, ${m[1]}`;
}

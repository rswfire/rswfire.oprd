"use client";

// components/player/Moment.tsx
//
// A cited second of a recording. This is the unit the evidence pages are
// rebuilt from: the claim in the prose, and next to it the moment in the
// recording where the claim can be heard.
//
//   <Moment ulid="01JNK2TKG01JTERAMB7J6AKPK1" t="10:36" />
//   <Moment ulid="…" t="10:36">the call log, recited back to me</Moment>
//
// With no children it renders the timestamp itself, in mono, the way a
// citation reads. It degrades to a real link when JavaScript is gone: the
// href points at the page that presents the recording, with ?t=, which the
// page already honours.
import Icon from "@/components/Icon";
import { usePlayer } from "@/components/player/PlayerProvider";
import { formatTime, parseTimestamp, recordingByUlid } from "@/lib/recordings";

export default function Moment({
    ulid,
    t,
    children,
    className,
}: {
    ulid: string;
    t: string | number;
    children?: React.ReactNode;
    className?: string;
}) {
    // A bare timestamp is a parenthetical citation and stays unadorned; a
    // phrase carries the video mark, so the reader can see which claims can
    // be heard and which ones are on paper.
    const { open } = usePlayer();
    const recording = recordingByUlid(ulid);
    const seconds = typeof t === "number" ? t : parseTimestamp(t);

    if (!recording || seconds == null) {
        // A citation that does not resolve renders as plain text rather than
        // as a link that goes nowhere.
        return <span className={className}>{children ?? String(t)}</span>;
    }

    const bare = children === undefined;
    const label = children ?? formatTime(seconds);
    const href = recording.page
        ? `${recording.page}?t=${encodeURIComponent(String(t))}`
        : `https://rswfire.com/library/signal/${recording.ulid}?t=${seconds}`;

    return (
        <a
            href={href}
            data-recording={recording.ulid}
            data-t={seconds}
            onClick={(e) => {
                if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
                e.preventDefault();
                open({ ulid: recording.ulid, t: seconds });
            }}
            className={
                className ??
                (bare
                    // A parenthetical: mono, the way a timestamp reads in the
                    // sunlight entries.
                    ? "font-mono text-[0.9em] text-emerald-800 underline decoration-emerald-300 underline-offset-2 hover:text-emerald-600"
                    : "text-emerald-800 underline decoration-emerald-300 underline-offset-2 hover:text-emerald-600")
            }
            title={`${recording.title} · ${formatTime(seconds)}`}
        >
            {!bare && (
                <Icon
                    name="Video"
                    className="mr-0.5 inline-block -mt-0.5 text-emerald-700"
                    size={14}
                    strokeWidth={2}
                    aria-hidden
                />
            )}
            {label}
        </a>
    );
}

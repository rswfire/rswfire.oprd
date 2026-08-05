"use client";

// Chapter marks for a transmission, from the platform's analysis.
//
// Clicking one seeks the video and plays from there, so a 62-minute recording
// can be entered at the moment a reader is looking for rather than scrubbed
// blind. Open by default and capped to a few rows: the point is that a reader
// sees the recording has parts before deciding whether to press play.

import { useEffect, useRef, useState } from "react";
import type { SignalChapter } from "@/lib/qp";
import { ACCENT, BODY, INK, MONO, MUTED, RULE, TINT } from "@/components/signalChrome";

/** h:mm:ss past an hour, mm:ss below it — matching the player's own clock. */
function stamp(seconds: number, longForm: boolean): string {
    const s = Math.max(0, Math.floor(seconds));
    const h = Math.floor(s / 3600);
    const m = Math.floor((s % 3600) / 60);
    const sec = s % 60;
    return longForm
        ? `${h}:${String(m).padStart(2, "0")}:${String(sec).padStart(2, "0")}`
        : `${m}:${String(sec).padStart(2, "0")}`;
}

export default function SignalChapters({
    chapters,
    videoRef,
}: {
    chapters: SignalChapter[];
    videoRef: React.RefObject<HTMLVideoElement | null>;
}) {
    const [open, setOpen] = useState(true);
    const [active, setActive] = useState(-1);
    const listRef = useRef<HTMLUListElement>(null);
    const rowRefs = useRef<(HTMLLIElement | null)[]>([]);

    // Follow playback: mark the chapter the video is inside, and keep it in
    // view. Only fires on a change of chapter, not on every timeupdate.
    useEffect(() => {
        const video = videoRef.current;
        if (!video || chapters.length === 0) return;

        const onTime = () => {
            const t = video.currentTime;
            let index = -1;
            for (let i = 0; i < chapters.length; i += 1) {
                if (t >= chapters[i].start) index = i;
                else break;
            }
            const current = chapters[index];
            if (current?.end != null && t > current.end) index = -1;
            setActive((prev) => (prev === index ? prev : index));
        };

        video.addEventListener("timeupdate", onTime);
        video.addEventListener("seeked", onTime);
        return () => {
            video.removeEventListener("timeupdate", onTime);
            video.removeEventListener("seeked", onTime);
        };
    }, [chapters, videoRef]);

    // Scroll inside the list only. scrollIntoView would drag the whole page
    // along with it every time the video crossed a boundary.
    useEffect(() => {
        if (!open || active < 0) return;
        const list = listRef.current;
        const row = rowRefs.current[active];
        if (!list || !row) return;

        const top = row.offsetTop - list.offsetTop;
        const bottom = top + row.offsetHeight;
        if (top < list.scrollTop || bottom > list.scrollTop + list.clientHeight) {
            list.scrollTo({ top: top - list.clientHeight / 3, behavior: "smooth" });
        }
    }, [active, open]);

    if (chapters.length === 0) return null;

    const longForm = chapters.some((c) => c.start >= 3600 || (c.end ?? 0) >= 3600);

    const seek = (start: number) => {
        const video = videoRef.current;
        if (!video) return;
        video.currentTime = start;
        video.play().catch(() => {
            // Autoplay refusal is fine — the seek still landed, and the
            // reader can press play themselves.
        });
        video.scrollIntoView({ behavior: "smooth", block: "center" });
    };

    return (
        <div style={{ borderBottom: `1px solid ${RULE}` }}>
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-center justify-between px-3 py-2 hover:opacity-70 transition-opacity"
                style={{ backgroundColor: TINT, border: "none", cursor: "pointer", textAlign: "left" }}
                aria-expanded={open}
            >
                <span style={{ fontFamily: MONO, fontSize: "10px", letterSpacing: "0.15em", color: ACCENT, textTransform: "uppercase" }}>
                    Chapters ({chapters.length})
                </span>
                <span
                    style={{
                        fontFamily: MONO,
                        fontSize: "11px",
                        color: MUTED,
                        transform: open ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.2s ease",
                        display: "inline-block",
                    }}
                >
                    &darr;
                </span>
            </button>

            {open && (
                <ul ref={listRef} className="m-0 p-0" style={{ listStyle: "none", maxHeight: "11rem", overflowY: "auto" }}>
                    {chapters.map((chapter, i) => (
                        <li
                            key={i}
                            ref={(el) => { rowRefs.current[i] = el; }}
                            style={{ borderTop: `1px solid ${RULE}` }}
                        >
                            <button
                                onClick={() => seek(chapter.start)}
                                className="w-full flex items-baseline gap-3 px-3 py-2.5 text-left hover:bg-[rgba(26,58,74,0.04)] transition-colors"
                                style={{
                                    background: i === active ? "rgba(196,98,45,0.08)" : "transparent",
                                    border: "none",
                                    borderLeft: `2px solid ${i === active ? ACCENT : "transparent"}`,
                                    cursor: "pointer",
                                }}
                            >
                                <span
                                    style={{
                                        fontFamily: MONO,
                                        fontSize: "11px",
                                        color: ACCENT,
                                        flexShrink: 0,
                                        width: longForm ? "58px" : "44px",
                                        fontVariantNumeric: "tabular-nums",
                                    }}
                                >
                                    {stamp(chapter.start, longForm)}
                                </span>
                                <span style={{ fontSize: "13px", lineHeight: 1.5, color: INK }}>
                                    {chapter.title}
                                    {chapter.summary && (
                                        <span className="block" style={{ fontSize: "12px", color: BODY, marginTop: "2px" }}>
                                            {chapter.summary}
                                        </span>
                                    )}
                                </span>
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

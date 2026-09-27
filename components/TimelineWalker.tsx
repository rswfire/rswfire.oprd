"use client";
// components/TimelineWalker.tsx
//
// Walks the major timeline entries on the homepage, one at a time, in the
// site idiom: white card, gray border, uppercase labels, emerald accents.
// The last step links to the full timeline.
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { MAJORS } from "@/data/timeline";
import TimelineBody from "@/components/TimelineBody";
import Icon from "@/components/Icon";

// The visitor's place in the walk survives leaving for a record and
// coming back; sessionStorage dies with the tab, so a fresh visit
// starts at the newest entry again.
const KEY = "timeline-walker-position";

export default function TimelineWalker() {
    const [i, setI] = useState(0);
    const card = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const saved = Number(sessionStorage.getItem(KEY));
        if (!(Number.isInteger(saved) && saved > 0 && saved < MAJORS.length)) return;
        setI(saved);
        // Arriving by the browser's back button: the page is tall and its
        // sections load at different heights, so the restored pixel offset
        // lands elsewhere. If the visitor was mid-walk, put the card back
        // in front of them.
        const nav = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming | undefined;
        if (nav?.type === "back_forward") card.current?.scrollIntoView({ block: "center" });
    }, []);

    const go = (n: number) => {
        setI(n);
        sessionStorage.setItem(KEY, String(n));
    };
    const entry = MAJORS[i];
    const atStart = i === 0;
    const atEnd = i === MAJORS.length - 1;

    return (
        <div ref={card} className="mb-4 bg-white border border-gray-300 rounded-2xl shadow-sm p-6">
            <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                    <span className="rounded-lg bg-emerald-50 p-2 text-emerald-700">
                        <Icon name="CalendarDays" size={22} strokeWidth={1.75} />
                    </span>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">The timeline.</h2>
                </div>
                <div className="text-xs uppercase tracking-wider text-gray-400">{i + 1} / {MAJORS.length}</div>
            </div>

            <div className="mt-4 min-h-[9rem]">
                <div className="font-semibold text-emerald-800">{entry.date}</div>
                {entry.title && <div className="mt-1 font-semibold">{entry.title}</div>}
                <div className="mt-2 text-sm leading-relaxed">
                    <TimelineBody body={entry.body} />
                </div>
            </div>

            <div className="mt-5 flex items-center justify-between gap-4 border-t border-gray-200 pt-4">
                <button type="button" onClick={() => go(i - 1)} disabled={atStart}
                        className="text-xs uppercase tracking-wider text-emerald-800 hover:text-emerald-600 disabled:text-gray-300">
                    ← Previous
                </button>
                <Link href="/timeline" className="text-xs uppercase tracking-wider underline text-emerald-800 hover:text-emerald-600">
                    Open the full timeline
                </Link>
                <button type="button" onClick={() => go(i + 1)} disabled={atEnd}
                        className="text-xs uppercase tracking-wider text-emerald-800 hover:text-emerald-600 disabled:text-gray-300">
                    Next →
                </button>
            </div>
        </div>
    );
}

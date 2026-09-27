"use client";
// components/TimelineWalker.tsx
//
// Walks the major timeline entries on the homepage, newest first, as a
// snap carousel in the site idiom: white card, gray border, uppercase
// labels, emerald accents. Same mechanism as the case strip — a native
// horizontal scroller with centre snapping, so touch, trackpad, keyboard
// and the arrow buttons all drive the one scroll position.
import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { MAJORS } from "@/data/timeline";
import TimelineBody from "@/components/TimelineBody";
import Icon from "@/components/Icon";

// The visitor's place in the walk survives leaving for a record and
// coming back; sessionStorage dies with the tab, so a fresh visit
// starts at the newest entry again.
const KEY = "timeline-walker-position";

// "September 26, 2026" -> "September 2026", for the rail's end labels.
const monthYear = (date: string) => {
    const p = date.split(" ");
    return p.length === 3 ? `${p[0]} ${p[2]}` : date;
};

export default function TimelineWalker() {
    const [i, setI] = useState(0);
    const card = useRef<HTMLDivElement>(null);
    const scroller = useRef<HTMLDivElement>(null);
    const iRef = useRef(0);
    const last = MAJORS.length - 1;

    const slides = useCallback(
        () => Array.from(scroller.current?.querySelectorAll<HTMLElement>("[data-walk-stop]") ?? []),
        [],
    );

    // Scroll the strip itself rather than calling scrollIntoView, which
    // would also move the page under a visitor who only clicked an arrow.
    const centerOn = useCallback(
        (n: number, smooth: boolean) => {
            const s = scroller.current;
            if (!s) return;
            const els = slides();
            const clamped = Math.max(0, Math.min(n, els.length - 1));
            const el = els[clamped];
            if (!el) return;
            const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
            s.scrollTo({
                left: el.offsetLeft - (s.clientWidth - el.offsetWidth) / 2,
                behavior: smooth && !reduced ? "smooth" : "auto",
            });
        },
        [slides],
    );

    // Which entry owns the centre of the strip right now. The ends are
    // read off the scroll extremes: the first and last cards cannot reach
    // the centre, so nearest-centre alone would never select them.
    const compute = useCallback(() => {
        const s = scroller.current;
        if (!s) return;
        const max = s.scrollWidth - s.clientWidth;
        const els = slides();
        let best = 0;
        if (s.scrollLeft <= 1) best = 0;
        else if (s.scrollLeft >= max - 1) best = els.length - 1;
        else {
            const mid = s.scrollLeft + s.clientWidth / 2;
            let bestDist = Infinity;
            els.forEach((el, n) => {
                const dist = Math.abs(el.offsetLeft + el.offsetWidth / 2 - mid);
                if (dist < bestDist) {
                    bestDist = dist;
                    best = n;
                }
            });
        }
        if (best === iRef.current) return;
        iRef.current = best;
        setI(best);
        try { sessionStorage.setItem(KEY, String(best)); } catch {}
    }, [slides]);

    useEffect(() => {
        const s = scroller.current;
        if (!s) return;
        let raf = 0;
        const onScroll = () => {
            cancelAnimationFrame(raf);
            raf = requestAnimationFrame(compute);
        };
        s.addEventListener("scroll", onScroll, { passive: true });
        return () => {
            s.removeEventListener("scroll", onScroll);
            cancelAnimationFrame(raf);
        };
    }, [compute]);

    useEffect(() => {
        let saved = 0;
        try { saved = Number(sessionStorage.getItem(KEY)); } catch {}
        if (!(Number.isInteger(saved) && saved > 0 && saved <= last)) return;
        iRef.current = saved;
        setI(saved);
        centerOn(saved, false);
        // Arriving by the browser's back button: the page is tall and its
        // sections load at different heights, so the restored pixel offset
        // lands elsewhere. If the visitor was mid-walk, put the card back
        // in front of them.
        const nav = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming | undefined;
        if (nav?.type === "back_forward") card.current?.scrollIntoView({ block: "center" });
    }, [centerOn, last]);

    // Clicking a neighbouring entry brings it to the centre. A click on a
    // link inside the entry is the visitor going to the record, not
    // choosing the card, so it passes through untouched.
    const onSelect = (n: number) => (e: React.MouseEvent) => {
        if (n === iRef.current) return;
        if ((e.target as HTMLElement).closest("a")) return;
        centerOn(n, true);
    };

    const onKeyDown = (e: React.KeyboardEvent) => {
        if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
        e.preventDefault();
        centerOn(iRef.current + (e.key === "ArrowRight" ? 1 : -1), true);
    };

    // (100% − slide width) ÷ 2, at each of the slide's three widths.
    const gutter =
        "shrink-0 w-[max(0px,calc(7%_-_1rem))] sm:w-[max(0px,calc(22%_-_1rem))] lg:w-[max(0px,calc(34%_-_1rem))]";

    const arrow =
        "shrink-0 flex items-center justify-center w-9 h-9 rounded-full bg-white border border-gray-300 text-gray-600 hover:text-emerald-800 hover:border-emerald-600 transition-colors cursor-pointer disabled:opacity-30 disabled:pointer-events-none";

    return (
        <div ref={card} className="mb-4 bg-white border border-gray-300 rounded-2xl shadow-sm overflow-hidden">
            <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 px-6 pt-6">
                <div className="flex items-center gap-3">
                    <span className="rounded-lg bg-emerald-50 p-2 text-emerald-700">
                        <Icon name="CalendarDays" size={22} strokeWidth={1.75} />
                    </span>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">The timeline.</h2>
                </div>
                <div className="flex items-center gap-4">
                    <Link
                        href="/sunlight"
                        className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-orange-800 underline decoration-orange-300 underline-offset-2 hover:text-orange-600"
                    >
                        <Icon name="Sun" size={14} strokeWidth={2} className="text-orange-600" aria-hidden />
                        Compare to their timeline
                    </Link>
                    <div className="text-xs uppercase tracking-wider text-gray-400 tabular-nums">
                        {i + 1} / {MAJORS.length}
                    </div>
                </div>
            </div>

            <div
                ref={scroller}
                tabIndex={0}
                onKeyDown={onKeyDown}
                aria-label="The timeline — the major events, newest first"
                className="mt-4 flex items-stretch gap-4 overflow-x-auto overscroll-x-contain snap-x snap-mandatory py-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
                {/* The gutters that let the first and last entry sit in the
                    centre like every entry between them — half the leftover
                    width, less the flex gap the spacer itself contributes. */}
                <div aria-hidden className={gutter} />

                {MAJORS.map((entry, n) => (
                    <div
                        key={entry.d + entry.date}
                        data-walk-stop
                        onClick={onSelect(n)}
                        className={`snap-center shrink-0 w-[86%] sm:w-[56%] lg:w-[32%] min-h-[13rem] flex flex-col rounded-xl border p-5 transition-[border-color,box-shadow,opacity] duration-300 ${
                            n === i
                                ? "border-emerald-600 shadow-md opacity-100"
                                : "border-gray-200 shadow-none opacity-60 cursor-pointer"
                        }`}
                    >
                        <div className="flex items-baseline justify-between gap-3">
                            <div className="text-xs uppercase tracking-wider font-semibold text-emerald-800">
                                {entry.date}
                            </div>
                            <div className="text-[10px] uppercase tracking-widest text-gray-400 tabular-nums">
                                {String(n + 1).padStart(2, "0")}
                            </div>
                        </div>
                        {entry.title && (
                            <div className="mt-2 text-lg font-semibold tracking-tight text-gray-900">
                                {entry.title}
                            </div>
                        )}
                        <div className="mt-2 text-sm leading-relaxed text-gray-700">
                            <TimelineBody body={entry.body} />
                        </div>
                    </div>
                ))}

                <div aria-hidden className={gutter} />
            </div>

            {/* Progress rail — one tick per major event, newest at the left. */}
            <div className="px-6 pt-3 pb-5">
                <div className="flex items-center gap-3">
                    <button
                        type="button"
                        onClick={() => centerOn(iRef.current - 1, true)}
                        disabled={i <= 0}
                        aria-label="Previous"
                        className={arrow}
                    >
                        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-2" aria-hidden>
                            <path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                    <div className="relative h-8 flex-1">
                        <div className="absolute left-0 right-0 top-[15px] h-px bg-gray-200" />
                        <div
                            className="absolute left-0 top-[15px] h-px bg-emerald-700 transition-[width] duration-300"
                            style={{ width: `${(i / last) * 100}%` }}
                        />
                        <div className="absolute inset-0 flex justify-between">
                            {MAJORS.map((entry, n) => (
                                <button
                                    key={entry.d + entry.date}
                                    type="button"
                                    onClick={() => centerOn(n, true)}
                                    aria-label={`${entry.date}${entry.title ? ` — ${entry.title}` : ""}`}
                                    title={`${entry.date}${entry.title ? ` — ${entry.title}` : ""}`}
                                    className="group relative flex flex-1 items-center justify-center h-8 cursor-pointer"
                                >
                                    <span
                                        className={`rounded-full border transition-all ${
                                            n === i
                                                ? "w-3 h-3 bg-emerald-700 border-emerald-700"
                                                : n < i
                                                  ? "w-2 h-2 bg-emerald-200 border-emerald-400 group-hover:bg-emerald-400"
                                                  : "w-2 h-2 bg-white border-gray-400 group-hover:border-emerald-600"
                                        }`}
                                    />
                                </button>
                            ))}
                        </div>
                    </div>
                    <button
                        type="button"
                        onClick={() => centerOn(iRef.current + 1, true)}
                        disabled={i >= last}
                        aria-label="Next"
                        className={arrow}
                    >
                        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-2" aria-hidden>
                            <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
                <div className="mt-1 flex items-center justify-between gap-4 text-[10px] uppercase tracking-widest text-gray-400">
                    <span>{monthYear(MAJORS[0].date)}</span>
                    <Link href="/timeline" className="underline text-emerald-800 hover:text-emerald-600">
                        Open the full timeline
                    </Link>
                    <span>{monthYear(MAJORS[last].date)}</span>
                </div>
            </div>
        </div>
    );
}

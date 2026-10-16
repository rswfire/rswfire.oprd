"use client";

// components/map/MapTabs.tsx
//
// The moves as tabs, built for a phone first. Under md the control is one
// sticky row: previous, the current move (its number of the total and its
// short name), next. Tapping the middle opens a full-screen list of every
// move: number, short name, and the sentence it arrives in. From md up the
// same tabs are a row of numbers with the current name beside them. A hash
// (#no-records) selects the move, so the index cards land on it.
import { useEffect, useState } from "react";
import type { ReactNode } from "react";

export interface MapTab {
    id: string;
    name: string;      // short, their words
    sentence?: string; // the sentence it arrives in
    panel: ReactNode;
}

export default function MapTabs({ tabs }: { tabs: MapTab[] }) {
    const [active, setActive] = useState(tabs[0]?.id);
    const [open, setOpen] = useState(false);
    const idx = Math.max(0, tabs.findIndex((t) => t.id === active));

    const scrollToTop = () => {
        const el = document.getElementById("map-tabs");
        if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 64, behavior: "smooth" });
    };

    useEffect(() => {
        const go = () => {
            const id = decodeURIComponent(window.location.hash.replace(/^#/, ""));
            if (!id || !tabs.some((t) => t.id === id)) return;
            setActive(id);
            requestAnimationFrame(scrollToTop);
        };
        go();
        window.addEventListener("hashchange", go);
        return () => window.removeEventListener("hashchange", go);
    }, [tabs]);

    useEffect(() => {
        if (!open) return;
        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
        window.addEventListener("keydown", onKey);
        return () => { document.body.style.overflow = prev; window.removeEventListener("keydown", onKey); };
    }, [open]);

    const pick = (id: string) => {
        setActive(id);
        setOpen(false);
        history.replaceState(null, "", `#${id}`);
        scrollToTop();
    };

    const arrow = "flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-slate-300 bg-white text-xl text-slate-700 disabled:opacity-30";

    return (
        <div id="map-tabs" className="mt-10 scroll-mt-16">
            <div className="sticky top-0 z-10 -mx-4 border-b border-slate-200 bg-white/95 px-4 py-2 backdrop-blur">
                <div className="flex items-center gap-2 md:hidden">
                    <button type="button" className={arrow} aria-label="Previous" disabled={idx === 0} onClick={() => pick(tabs[idx - 1].id)}>&lsaquo;</button>
                    <button
                        type="button"
                        onClick={() => setOpen(true)}
                        aria-haspopup="dialog"
                        className="flex h-11 min-w-0 flex-1 items-center gap-3 rounded-lg border border-slate-300 bg-white px-3 text-left"
                    >
                        <span className="shrink-0 font-mono text-[13px] text-teal-700">{idx + 1} / {tabs.length}</span>
                        <span className="min-w-0 flex-1 truncate text-[15px] font-semibold text-gray-900">{tabs[idx]?.name}</span>
                        <span aria-hidden className="text-slate-400">&#9662;</span>
                    </button>
                    <button type="button" className={arrow} aria-label="Next" disabled={idx === tabs.length - 1} onClick={() => pick(tabs[idx + 1].id)}>&rsaquo;</button>
                </div>
                <div role="tablist" className="hidden items-center gap-1 md:flex">
                    {tabs.map((t, i) => (
                        <button
                            key={t.id}
                            role="tab"
                            type="button"
                            aria-selected={active === t.id}
                            title={t.name}
                            onClick={() => pick(t.id)}
                            className={`h-10 min-w-10 rounded-lg px-3 font-mono text-[14px] font-bold transition-colors ${
                                active === t.id ? "bg-teal-700 text-white" : "text-slate-600 hover:bg-slate-100"
                            }`}
                        >
                            {i + 1}
                        </button>
                    ))}
                    <span className="ml-3 truncate text-[15px] font-semibold text-gray-900">{tabs[idx]?.name}</span>
                </div>
            </div>

            {open ? (
                <div role="dialog" aria-modal="true" aria-label="Moves" className="fixed inset-0 z-50 flex flex-col bg-white">
                    <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3">
                        <span className="font-mono text-[12px] font-bold uppercase tracking-widest text-slate-500">Go to</span>
                        <button type="button" onClick={() => setOpen(false)} className="h-10 rounded-lg px-3 text-[15px] text-slate-700">Close</button>
                    </div>
                    <ol className="flex-1 overflow-y-auto">
                        {tabs.map((t, i) => (
                            <li key={t.id} className="border-b border-slate-100">
                                <button
                                    type="button"
                                    onClick={() => pick(t.id)}
                                    className={`flex w-full gap-3 px-4 py-3 text-left ${active === t.id ? "bg-teal-50" : ""}`}
                                >
                                    <span className="w-6 shrink-0 pt-0.5 font-mono text-[13px] text-teal-700">{i + 1}</span>
                                    <span className="min-w-0">
                                        <span className="block text-[16px] font-semibold text-gray-900">{t.name}</span>
                                        {t.sentence ? <span className="mt-0.5 block text-[13px] leading-snug text-slate-600">{t.sentence}</span> : null}
                                    </span>
                                </button>
                            </li>
                        ))}
                    </ol>
                </div>
            ) : null}

            <div role="tabpanel" className="mt-4">{tabs[idx]?.panel}</div>
            <div className="mt-8 flex items-center justify-between gap-2 border-t border-slate-200 pt-4">
                <button type="button" className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-[14px] text-slate-700 disabled:opacity-30" disabled={idx === 0} onClick={() => pick(tabs[idx - 1].id)}>&lsaquo; {idx > 0 ? tabs[idx - 1].name : ""}</button>
                <button type="button" className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-[14px] text-slate-700 disabled:opacity-30" disabled={idx === tabs.length - 1} onClick={() => pick(tabs[idx + 1].id)}>{idx < tabs.length - 1 ? tabs[idx + 1].name : ""} &rsaquo;</button>
            </div>
        </div>
    );
}

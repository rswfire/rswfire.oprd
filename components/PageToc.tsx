"use client";

// components/PageToc.tsx
//
// The Key Individuals contents bar, for any page: every element carrying
// data-toc (and data-toc-num, a part's number), read off the page in order,
// with the one the reader is at shown in the bar. Opening the list jumps to
// one. Used by the poem's preamble and parts, and by sunlight's entries.
import { useCallback, useEffect, useRef, useState } from "react";
import Icon, { type IconName } from "@/components/Icon";

interface Entry {
    id: string;
    label: string;
    /** A part's number; an entry without one has none. */
    num: string;
}

export default function PageToc({ title, icon }: { title: string; icon: IconName }) {
    const [entries, setEntries] = useState<Entry[]>([]);
    const [active, setActive] = useState<number | null>(null);
    const [open, setOpen] = useState(false);
    const listRef = useRef<HTMLDivElement | null>(null);

    // Read the parts from the rendered page, in order, once, after mount.
    useEffect(() => {
        const out: Entry[] = [{ id: "__top", label: "Top", num: "" }];
        document.querySelectorAll<HTMLElement>("[data-toc]").forEach((el) => {
            out.push({ id: el.id, label: el.dataset.toc ?? el.id, num: el.dataset.tocNum ?? "" });
        });
        setEntries(out);
    }, []);

    // The entry the reader is at: the last one whose top has passed the middle of the screen.
    useEffect(() => {
        if (entries.length === 0) return;
        let raf = 0;
        const measure = () => {
            raf = 0;
            const line = window.innerHeight / 2;
            let a: number | null = null;
            entries.forEach((e, i) => {
                if (i === 0) return;
                const el = document.getElementById(e.id);
                if (el && el.getBoundingClientRect().top <= line) a = i;
            });
            setActive(a);
        };
        const onScroll = () => { if (!raf) raf = window.requestAnimationFrame(measure); };
        measure();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => { window.removeEventListener("scroll", onScroll); if (raf) window.cancelAnimationFrame(raf); };
    }, [entries]);

    // Open list: the page behind it is frozen.
    useEffect(() => {
        if (!open) return;
        const { overflow } = document.body.style;
        document.body.style.overflow = "hidden";
        return () => { document.body.style.overflow = overflow; };
    }, [open]);

    // Keep the open list scrolled to the entry the reader is at.
    useEffect(() => {
        if (!open || !listRef.current) return;
        const row = listRef.current.querySelector<HTMLElement>(`[data-i="${active ?? 0}"]`);
        row?.scrollIntoView({ block: "nearest", behavior: "smooth" });
    }, [open, active]);

    const jump = useCallback((id: string) => {
        setOpen(false);
        if (id === "__top") {
            window.scrollTo({ top: 0, behavior: "smooth" });
            return;
        }
        const el = document.getElementById(id);
        if (!el) return;
        window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: "smooth" });
    }, []);

    const current = active === null ? null : entries[active];

    return (
        <>
            {open && <div onClick={() => setOpen(false)} className="fixed inset-0 z-[69] bg-slate-900/10" aria-hidden />}
            <div className="pointer-events-none fixed inset-x-0 bottom-0 z-[70] flex justify-center px-2 pb-2 sm:px-4 sm:pb-4">
                <div className="pointer-events-auto w-full max-w-3xl overflow-hidden rounded-2xl border border-slate-300 bg-white/95 shadow-lg backdrop-blur">
                    {open && (
                        <div ref={listRef} className="max-h-[45vh] overflow-y-auto border-b border-slate-200 py-1">
                            {entries.map((e, i) => (
                                <button
                                    key={e.id}
                                    data-i={i}
                                    onClick={() => jump(e.id)}
                                    className={`flex w-full items-center gap-3 px-4 py-2 text-left text-[13px] hover:bg-slate-50 ${i === active ? "text-emerald-800" : "text-slate-700"}`}
                                >
                                    {i === 0 ? (
                                        <Icon name="ChevronUp" className="shrink-0 text-slate-400" size={16} strokeWidth={2.5} />
                                    ) : (
                                        <span className={`w-6 shrink-0 text-center font-mono text-[11px] font-bold ${i === active ? "text-emerald-700" : "text-slate-400"}`}>
                                            {e.num}
                                        </span>
                                    )}
                                    <span className="min-w-0">
                                        <span className={`block leading-snug ${i === active ? "font-semibold" : ""}`}>
                                            {e.label}
                                        </span>
                                    </span>
                                </button>
                            ))}
                        </div>
                    )}
                    <button
                        onClick={() => setOpen((o) => !o)}
                        className="flex w-full items-center gap-3 px-4 py-2.5 text-left"
                        aria-expanded={open}
                        aria-label="Contents"
                    >
                        <Icon name={icon} className="shrink-0 text-emerald-700" size={16} strokeWidth={2} />
                        <span className="min-w-0 flex-1">
                            <span className="block text-[10px] font-bold uppercase tracking-widest text-slate-400">
                                {current ? title : "Contents"}
                            </span>
                            <span className="block truncate font-mono text-[13px] text-slate-900">
                                {current ? (current.num ? `${current.num} · ${current.label}` : current.label.toUpperCase()) : title.toUpperCase()}
                            </span>
                        </span>
                        <Icon name={open ? "ChevronDown" : "ChevronUp"} className="shrink-0 text-slate-500" size={18} strokeWidth={2} />
                    </button>
                </div>
            </div>
        </>
    );
}

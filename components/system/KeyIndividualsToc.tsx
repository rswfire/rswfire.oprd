"use client";

// components/system/KeyIndividualsToc.tsx
//
// The Key Individuals version of the testimony's floating contents: the
// page's three sections and every seat in them, read off the page itself, with
// the section and seat the reader is at shown in the bar. Opening the list
// jumps to a section or a seat.
import { useCallback, useEffect, useRef, useState } from "react";
import { Building2, Newspaper, UserRound } from "lucide-react";
import Icon from "@/components/Icon";

interface Entry {
    id: string;
    label: string;
    name: string;
    /** The section a seat sits in; a section's own row has none. */
    section?: string;
    /** The seat's face, as its card shows it. */
    face?: string;
}

function Face({ face, className }: { face?: string; className?: string }) {
    const I = face === "building" ? Building2 : face === "office" ? Newspaper : UserRound;
    return <I aria-hidden size={16} strokeWidth={2} className={className} />;
}


export default function KeyIndividualsToc() {
    const [entries, setEntries] = useState<Entry[]>([]);
    const [active, setActive] = useState<number | null>(null);
    const [open, setOpen] = useState(false);
    const listRef = useRef<HTMLDivElement | null>(null);
    const [drawer, setDrawer] = useState(false);

    // While a drawer is open over the page, the bar steps aside for it.
    useEffect(() => {
        const read = () => setDrawer(Boolean(document.querySelector(".fixed.inset-0.z-40")));
        read();
        const mo = new MutationObserver(read);
        mo.observe(document.body, { childList: true, subtree: true });
        return () => mo.disconnect();
    }, []);

    // Read the sections and seats from the rendered page, in order, once, after mount.
    useEffect(() => {
        const out: Entry[] = [{ id: "__top", label: "TOP", name: "" }];
        let section: string | undefined;
        document.querySelectorAll<HTMLElement>("[data-toc-section], [data-toc]").forEach((el) => {
            if (el.dataset.tocSection) {
                section = el.dataset.tocSection;
                if (!el.id) el.id = `toc-${section}`;
                out.push({ id: el.id, label: (el.textContent ?? section).trim(), name: "" });
            } else {
                out.push({ id: el.id, label: el.dataset.toc ?? el.id, name: el.dataset.tocName ?? "", section, face: el.dataset.tocFace });
            }
        });
        setEntries(out);
    }, []);

    // The seat the reader is at: the last card whose top has passed the middle of the screen.
    useEffect(() => {
        if (entries.length === 0) return;
        let raf = 0;
        const measure = () => {
            raf = 0;
            const line = window.innerHeight / 2;
            let a: number | null = null;
            entries.forEach((e, i) => {
                if (i === 0 || !e.section) return;
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

    // Keep the open list scrolled to the seat the reader is at.
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
    const sectionRow = current?.section ? entries.find((e) => e.id === `toc-${current.section}`) : undefined;
    if (drawer) return null;

    return (
        <>
            {open && <div onClick={() => setOpen(false)} className="fixed inset-0 z-[69] bg-slate-900/10" aria-hidden />}
            <div className="pointer-events-none fixed inset-x-0 bottom-0 z-[70] flex justify-center px-2 pb-2 sm:px-4 sm:pb-4">
                <div className="pointer-events-auto w-full max-w-3xl overflow-hidden rounded-2xl border border-slate-300 bg-white/95 shadow-lg backdrop-blur">
                    {open && (
                        <div ref={listRef} className="max-h-[45vh] overflow-y-auto border-b border-slate-200 py-1">
                            {entries.map((e, i) =>
                                e.id !== "__top" && !e.section ? (
                                    <button
                                        key={e.id}
                                        data-i={i}
                                        onClick={() => jump(e.id)}
                                        className="mt-1 flex w-full items-center border-t border-slate-100 px-4 pb-1.5 pt-3 text-left text-[11px] font-bold uppercase tracking-widest text-emerald-800 first:mt-0 first:border-t-0 hover:bg-slate-50"
                                    >
                                        {e.label}
                                    </button>
                                ) : (
                                    <button
                                        key={e.id}
                                        data-i={i}
                                        onClick={() => jump(e.id)}
                                        className={`flex w-full items-center gap-3 px-4 py-2 text-left text-[13px] hover:bg-slate-50 ${i === active ? "text-emerald-800" : "text-slate-700"}`}
                                    >
                                        {e.section ? (
                                            <Face face={e.face} className={`shrink-0 ${i === active ? "text-emerald-700" : "text-slate-400"}`} />
                                        ) : (
                                            <Icon name="ChevronUp" className="shrink-0 text-slate-400" size={16} strokeWidth={2.5} />
                                        )}
                                        <span className="min-w-0">
                                            <span className={`block leading-snug ${i === active ? "font-semibold" : ""}`}>{e.label}</span>
                                            {e.name ? <span className="block text-[12px] leading-snug text-slate-400">{e.name}</span> : null}
                                        </span>
                                    </button>
                                ),
                            )}
                        </div>
                    )}
                    <button
                        onClick={() => setOpen((o) => !o)}
                        className="flex w-full items-center gap-3 px-4 py-2.5 text-left"
                        aria-expanded={open}
                        aria-label="Key individuals"
                    >
                        {current?.section ? <Face face={current.face} className="shrink-0 text-emerald-700" /> : <Icon name="Users" className="shrink-0 text-emerald-700" size={16} strokeWidth={2} />}
                        <span className="min-w-0 flex-1">
                            <span className="block text-[10px] font-bold uppercase tracking-widest text-slate-400">
                                {current && sectionRow ? sectionRow.label : "Contents"}
                            </span>
                            <span className="block truncate font-mono text-[13px] text-slate-900">
                                {current ? `${current.label}${current.name ? ` · ${current.name}` : ""}` : "KEY INDIVIDUALS"}
                            </span>
                        </span>
                        <Icon name={open ? "ChevronDown" : "ChevronUp"} className="shrink-0 text-slate-500" size={18} strokeWidth={2} />
                    </button>
                </div>
            </div>
        </>
    );
}

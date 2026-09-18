"use client";

// components/testimony/TestimonyToc.tsx
//
// A floating table of contents for a long account. It reads the section
// headings out of the page itself, so adding a part to the testimony adds it
// here with no second list to keep in sync, and it tracks which part the
// reader is in.
//
// Desktop and tablet: a rail along the bottom, collapsed to the current part
// until opened. Phone: the same control, full width, because a rail of twelve
// items does not fit a 375px screen.
import { useCallback, useEffect, useRef, useState } from "react";
import Icon from "@/components/Icon";
import { CURRENT_VERSION } from "@/data/testimonyVersions";
import { useTestimonyVersion } from "@/components/testimony/versionContext";

interface Entry {
    id: string;
    label: string;
}

export default function TestimonyToc() {
    const [entries, setEntries] = useState<Entry[]>([]);
    const [active, setActive] = useState<number | null>(null);
    const [para, setPara] = useState<number | null>(null);
    const [open, setOpen] = useState(false);
    const listRef = useRef<HTMLDivElement | null>(null);
    const paraEls = useRef<HTMLElement[]>([]);
    const { version, isCurrent } = useTestimonyVersion();

    // Read the parts from the rendered page, once, after mount.
    useEffect(() => {
        const parts = [...document.querySelectorAll<HTMLElement>("section[data-part]")].map((el) => ({
            id: el.id,
            label: el.dataset.toc ?? el.dataset.part ?? el.id,
        }));
        setEntries([{ id: "__top", label: "TOP" }, ...parts]);
        paraEls.current = [...document.querySelectorAll<HTMLElement>("p[id]")].filter((el) =>
            /^p\d+$/.test(el.id)
        );
    }, []);

    // Track where the reader is: the last chapter and the last paragraph whose
    // top has passed the middle of the viewport.
    useEffect(() => {
        if (entries.length === 0) return;
        let raf = 0;
        const measure = () => {
            raf = 0;
            const line = window.innerHeight / 2;
            // The chapter is read off the paragraph the reader is in, not
            // measured separately, so the two can never disagree at a
            // chapter boundary.
            let p: number | null = null;
            let sec = "";
            for (const el of paraEls.current) {
                if (el.getBoundingClientRect().top > line) break;
                p = Number(el.id.slice(1));
                sec = el.closest("section[data-part]")?.id ?? sec;
            }
            setPara(p);
            const i = sec ? entries.findIndex((e) => e.id === sec) : -1;
            setActive(p === null || i < 1 ? null : i);
        };
        const onScroll = () => { if (!raf) raf = window.requestAnimationFrame(measure); };
        measure();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => { window.removeEventListener("scroll", onScroll); if (raf) window.cancelAnimationFrame(raf); };
    }, [entries]);

    // Open list: the page behind it is frozen, so a scroll gesture moves the
    // list rather than the testimony under it.
    useEffect(() => {
        if (!open) return;
        const { overflow } = document.body.style;
        document.body.style.overflow = "hidden";
        return () => { document.body.style.overflow = overflow; };
    }, [open]);

    // Keep the open list scrolled to the part the reader is in.
    useEffect(() => {
        if (!open || !listRef.current) return;
        const row = listRef.current.querySelector<HTMLElement>(`[data-i="${active ?? 0}"]`);
        row?.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" });
    }, [open, active]);

    const jump = useCallback((id: string) => {
        if (id === "__top") {
            window.scrollTo({ top: 0, behavior: "smooth" });
            setOpen(false);
            return;
        }
        const el = document.getElementById(id);
        if (!el) return;
        const y = el.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: y, behavior: "smooth" });
        setOpen(false);
    }, []);

    if (entries.length === 0) return null;

    return (
        <>
            {open && (
                <div
                    onClick={() => setOpen(false)}
                    className="fixed inset-0 z-[69] bg-slate-900/10"
                    aria-hidden
                />
            )}
        <div className="pointer-events-none fixed inset-x-0 bottom-0 z-[70] flex justify-center px-2 pb-2 sm:px-4 sm:pb-4">
            <div className="pointer-events-auto w-full max-w-3xl overflow-hidden rounded-2xl border border-slate-300 bg-white/95 shadow-lg backdrop-blur">
                {!isCurrent && (
                    <button
                        onClick={() =>
                            document.dispatchEvent(new CustomEvent("testimony:open-revisions"))
                        }
                        className="flex w-full items-center gap-2 border-b border-amber-200 bg-amber-50 px-4 py-2 text-left text-[12px] text-amber-900 hover:bg-amber-100"
                    >
                        <span className="min-w-0 flex-1">
                            You are reading{" "}
                            <span className="font-mono font-semibold">v{version}</span>. The current
                            version is{" "}
                            <span className="font-mono font-semibold">v{CURRENT_VERSION.version}</span>.
                        </span>
                        <span className="shrink-0 font-bold uppercase tracking-wide underline">
                            Revisions
                        </span>
                    </button>
                )}
                {open && (
                    <div
                        ref={listRef}
                        className="max-h-[45vh] overflow-y-auto border-b border-slate-200 py-1"
                    >
                        {entries.map((e, i) => (
                            <button
                                key={e.id}
                                data-i={i}
                                onClick={() => jump(e.id)}
                                className={`flex w-full items-baseline gap-3 px-4 py-2 text-left text-[13px] hover:bg-slate-50 ${
                                    i === active ? "text-violet-800" : "text-slate-700"
                                }`}
                            >
                                <span className="flex w-6 shrink-0 items-center justify-start font-mono text-[11px] text-slate-400">
                                    {e.id === "__top" ? (
                                        <Icon name="ChevronUp" size={14} strokeWidth={2.5} />
                                    ) : (
                                        String(i).padStart(2, "0")
                                    )}
                                </span>
                                <span className={i === active ? "font-semibold" : undefined}>{e.label}</span>
                            </button>
                        ))}
                    </div>
                )}

                <button
                    onClick={() => setOpen((o) => !o)}
                    className="flex w-full items-center gap-3 px-4 py-2.5 text-left"
                    aria-expanded={open}
                    aria-label="Table of contents"
                >
                    <Icon name="Sprout" className="shrink-0 text-violet-700" size={16} strokeWidth={2} />
                    <span className="min-w-0 flex-1">
                        <span className="block text-[10px] font-bold uppercase tracking-widest text-slate-400">
                            {active === null ? "Contents" : `Chapter ${active} of ${entries.length - 1}`}
                        </span>
                        <span className="block truncate font-mono text-[13px] text-slate-900">
                            {active === null ? "Testimony" : entries[active]?.label}
                        </span>
                    </span>
                    {active !== null && para !== null && (
                        <span className="shrink-0 font-mono text-xl font-bold text-gray-900">
                            &sect;{active} &para;{para}
                        </span>
                    )}
                    <Icon
                        name={open ? "ChevronDown" : "ChevronUp"}
                        className="shrink-0 text-slate-500"
                        size={18}
                        strokeWidth={2}
                    />
                </button>
            </div>
        </div>
        </>
    );
}

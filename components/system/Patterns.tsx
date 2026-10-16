"use client";

// components/system/Patterns.tsx
//
// The seven patterns. Each is a statement, then the documents that show it,
// with the tactics it is made of named inside it. A bar stays at the top of
// the section with the pattern in view and the list of all seven. On a wide
// page the statement stays beside its documents.
import { useEffect, useRef, useState } from "react";
import { PATTERNS } from "@/data/system";
import type { Group } from "@/data/system";
import { DocList, Source } from "@/components/system/Docs";
import Figure from "@/components/system/Figures";

function GroupBlock({ g }: { g: Group }) {
    return (
        <div>
            {g.tactic ? <h4 className="m-0 font-mono text-[12px] font-bold uppercase tracking-widest text-slate-500">{g.tactic}</h4> : null}
            {g.words ? (
                <blockquote className={`m-0 border-l-4 border-rose-600 pl-4 text-[19px] font-medium not-italic leading-snug text-slate-950 ${g.tactic ? "mt-3" : ""}`}>
                    {g.wordsSrc ? <Source src={g.wordsSrc}>{g.words}</Source> : g.words}
                </blockquote>
            ) : null}
            {g.figure ? (
                <div className={g.tactic || g.words ? "mt-5" : ""}>
                    <Figure id={g.figure} />
                </div>
            ) : null}
            {g.docs.length ? (
                <div className={g.tactic || g.words || g.figure ? "mt-5" : ""}>
                    <DocList docs={g.docs} />
                </div>
            ) : null}
        </div>
    );
}

function useStickyTop(ref: React.RefObject<HTMLElement | null>) {
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const set = () => {
            const header = document.querySelector("header");
            const sticky = header && getComputedStyle(header).position === "sticky";
            el.style.setProperty("--sys-top", `${sticky ? header.getBoundingClientRect().height : 0}px`);
        };
        set();
        window.addEventListener("resize", set);
        return () => window.removeEventListener("resize", set);
    }, [ref]);
}

export default function Patterns() {
    const root = useRef<HTMLElement>(null);
    const [at, setAt] = useState(0);
    const [open, setOpen] = useState(false);
    useStickyTop(root);

    useEffect(() => {
        const els = PATTERNS.map((p) => document.getElementById(`pattern-${p.id}`)).filter(Boolean) as HTMLElement[];
        const io = new IntersectionObserver(
            (entries) => {
                for (const e of entries) {
                    if (e.isIntersecting) setAt(els.indexOf(e.target as HTMLElement));
                }
            },
            { rootMargin: "-30% 0px -60% 0px" },
        );
        els.forEach((el) => io.observe(el));
        return () => io.disconnect();
    }, []);

    useEffect(() => {
        if (!open) return;
        const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [open]);

    const go = (i: number) => {
        setOpen(false);
        document.getElementById(`pattern-${PATTERNS[i].id}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    const p = PATTERNS[at];

    return (
        <section ref={root} id="patterns" aria-label="The patterns" className="@container relative">
            <div className="sticky top-[var(--sys-top,0px)] z-30 -mx-4 border-b border-slate-200 bg-white/95 backdrop-blur sm:-mx-8">
                <div className="flex items-center gap-1 pl-4 pr-20 sm:pl-8 md:pr-8">
                    <button
                        type="button"
                        onClick={() => setOpen((o) => !o)}
                        aria-expanded={open}
                        aria-controls="pattern-list"
                        className="flex min-h-14 min-w-0 flex-1 items-center gap-3 py-2 text-left focus-visible:outline-2 focus-visible:outline-emerald-600"
                    >
                        <span className="shrink-0 font-mono text-[13px] font-bold text-emerald-700">
                            {at + 1}<span className="text-slate-400"> / {PATTERNS.length}</span>
                        </span>
                        <span className="min-w-0 flex-1 truncate text-[15px] font-semibold text-slate-900">{p.title}</span>
                        <svg viewBox="0 0 16 16" className={`h-4 w-4 shrink-0 text-slate-500 transition-transform ${open ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                            <path d="M3.5 6 8 10.5 12.5 6" />
                        </svg>
                    </button>
                    <button
                        type="button"
                        onClick={() => go(Math.max(0, at - 1))}
                        disabled={at === 0}
                        aria-label="Previous pattern"
                        className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full text-slate-600 hover:bg-slate-100 disabled:opacity-30 @xl:flex"
                    >
                        <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M10 3.5 5.5 8l4.5 4.5" /></svg>
                    </button>
                    <button
                        type="button"
                        onClick={() => go(Math.min(PATTERNS.length - 1, at + 1))}
                        disabled={at === PATTERNS.length - 1}
                        aria-label="Next pattern"
                        className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full text-slate-600 hover:bg-slate-100 disabled:opacity-30 @xl:flex"
                    >
                        <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M6 3.5 10.5 8 6 12.5" /></svg>
                    </button>
                </div>
                {open ? (
                    <ol id="pattern-list" className="m-0 max-h-[70vh] list-none overflow-y-auto border-t border-slate-200 bg-white p-0 py-2">
                        {PATTERNS.map((q, i) => (
                            <li key={q.id} className="m-0">
                                <button
                                    type="button"
                                    onClick={() => go(i)}
                                    aria-current={i === at ? "true" : undefined}
                                    className={`flex min-h-12 w-full items-start gap-3 px-4 py-3 text-left hover:bg-slate-50 sm:px-8 ${i === at ? "bg-emerald-50" : ""}`}
                                >
                                    <span className={`w-5 shrink-0 font-mono text-[13px] font-bold ${i === at ? "text-emerald-700" : "text-slate-400"}`}>{i + 1}</span>
                                    <span className="text-[16px] leading-snug text-slate-900">{q.title}</span>
                                </button>
                            </li>
                        ))}
                    </ol>
                ) : null}
            </div>

            <div className="mt-10 space-y-20 @2xl:space-y-24">
                {PATTERNS.map((q, i) => (
                    <article
                        key={q.id}
                        id={`pattern-${q.id}`}
                        className="scroll-mt-[calc(var(--sys-top,0px)+5rem)] @2xl:grid @2xl:grid-cols-[14rem_1fr] @2xl:gap-x-10"
                    >
                        <header className="@2xl:sticky @2xl:top-[calc(var(--sys-top,0px)+5.5rem)] @2xl:self-start">
                            <div className="font-mono text-[13px] font-bold text-slate-400">{String(i + 1).padStart(2, "0")}</div>
                            <h3 className="m-0 mt-2 text-[24px] font-semibold leading-[1.2] tracking-tight text-slate-950 @2xl:text-[26px]">{q.title}</h3>
                        </header>
                        <div className="@container mt-6 min-w-0 space-y-12 @2xl:mt-1">
                            {q.figure ? <Figure id={q.figure} /> : null}
                            {q.groups.map((g, j) => (
                                <GroupBlock key={j} g={g} />
                            ))}
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}

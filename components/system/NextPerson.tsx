"use client";

// components/system/NextPerson.tsx
//
// The card at the top of System: "For the next person." The words rise one
// at a time, a rule draws beneath them, and an empty outline comes in last
// and stays, breathing. It plays when the card comes into view. Still under
// reduced motion; fully visible without JavaScript.
import { useEffect, useRef, useState } from "react";

const WORDS = ["For", "the", "next", "person."];
const LINES = ["This is the map.", "This is the pattern.", "This is the mirror."];

export default function NextPerson() {
    const ref = useRef<HTMLDivElement>(null);
    const [state, setState] = useState<"" | "np-armed" | "np-armed np-play">("");

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        setState("np-armed");
        const io = new IntersectionObserver(
            (entries) => {
                if (entries.some((e) => e.isIntersecting)) {
                    setState("np-armed np-play");
                    io.disconnect();
                }
            },
            { threshold: 0.6 },
        );
        io.observe(el);
        return () => io.disconnect();
    }, []);

    return (
        <div ref={ref} className={`${state} -mx-4 mt-6 overflow-hidden bg-slate-950 px-6 py-12 sm:mx-0 sm:rounded-2xl sm:px-10 sm:py-16`}>
            <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-end sm:justify-between">
                <div className="min-w-0">
                    <p className="text-[40px] font-semibold leading-[1.05] tracking-tight text-white sm:text-[64px]">
                        {WORDS.map((w, i) => (
                            <span key={i} className="np-word mr-[0.25em]" style={{ animationDelay: `${300 + i * 380}ms` }}>
                                {w}
                            </span>
                        ))}
                    </p>
                    <div className="np-rule mt-6 h-[3px] w-40 rounded-full bg-gradient-to-r from-teal-300 via-teal-500 to-teal-700 sm:w-64" style={{ animationDelay: "1900ms" }} />
                    <div className="mt-6 space-y-1 font-mono text-[14px] font-bold uppercase tracking-[0.2em] text-teal-200 sm:text-[16px]">
                        {LINES.map((l, i) => (
                            <div key={i}>
                                <span className="np-word" style={{ animationDelay: `${2700 + i * 700}ms` }}>{l}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <svg viewBox="0 0 48 56" className="np-figure h-28 w-24 shrink-0 sm:h-36 sm:w-32" style={{ animationDelay: "4600ms, 6000ms" }} aria-hidden>
                    <circle cx={24} cy={14} r={10} fill="none" stroke="#5eead4" strokeWidth={1.5} strokeDasharray="3 3" />
                    <path d="M4 54 C4 36 14 30 24 30 C34 30 44 36 44 54 Z" fill="none" stroke="#5eead4" strokeWidth={1.5} strokeDasharray="3 3" />
                </svg>
            </div>
        </div>
    );
}

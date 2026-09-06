"use client";

import { useEffect, useState } from "react";

const recognitionLines = [
    "You sent a professional email. It was used against you.",
    "You tried to fix it. The pressure got worse.",
    "Someone listened. Then reported what you said.",
    "You were called into a meeting with no agenda and no witness.",
    "You were told to leave before your term ended.",
    "No paperwork. No process. No explanation that made sense.",
    "You were told it was a personality conflict.",
    "You started to wonder if you imagined it.",
];

export default function VolunteersIntro() {
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const t = setTimeout(() => setVisible(true), 100);
        return () => clearTimeout(t);
    }, []);

    return (
        <section
            className={`transition-opacity duration-700 ${visible ? "opacity-100" : "opacity-0"}`}
        >
            {/* The hook — a lead paragraph, not a quote */}
            <p className="text-lg sm:text-xl leading-relaxed text-gray-900">
                Something happened to you. You are trying to find the words for it. This page
                exists because what happened to you has a name &mdash; and because you deserve
                to find it before you internalize the shame they are shaping you to feel.
            </p>

            {/* Recognition list — compact, two columns */}
            <div className="mt-8">
                <div className="text-xs font-semibold uppercase tracking-widest text-gray-400">
                    If any of this is familiar
                </div>
                <ul className="mt-3 grid grid-cols-1 gap-x-8 gap-y-2.5 sm:grid-cols-2">
                    {recognitionLines.map((line, i) => (
                        <li
                            key={i}
                            className={`flex items-baseline gap-2.5 text-[15px] leading-snug text-gray-700 transition-all duration-500 ${visible ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0"}`}
                            style={{ transitionDelay: `${100 + i * 55}ms` }}
                        >
                            <span aria-hidden className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-red-600" />
                            <span>{line}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Pivot */}
            <div className="mt-8 space-y-3 text-base leading-relaxed">
                <p className="font-semibold text-gray-900">You did not imagine it.</p>
                <p className="text-gray-700">
                    What you experienced is a documented sequence &mdash; nine stages, applied
                    in order, designed to remove a volunteer who created a record before the
                    institution could contain it.
                </p>
                <p className="text-gray-700">
                    It is called the displacement framework. Every stage below is documented in
                    this archive with recordings, correspondence, and primary evidence. Your
                    experience may not match every stage. But if it matches any of them, you are
                    in the right place.
                </p>
            </div>
        </section>
    );
}

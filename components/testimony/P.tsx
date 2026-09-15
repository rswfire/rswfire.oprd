"use client";

// components/testimony/P.tsx
//
// A numbered paragraph of the testimony.
//
// Two identifiers, doing two different jobs. `id` is canonical: minted once,
// never reused, never changed, and it is what a link points at. `n` is the
// paragraph's current position in the document, recomputed every time
// scripts/number-testimony.mjs runs, and it exists so a reader can find their
// place and say where they are.
//
// The consequence is the right one: editing the document renumbers what is
// displayed and breaks nothing that was linked. A paragraph that is deleted
// takes its anchor with it, which is the same thing that happens to any
// address for something that no longer exists.
import Icon from "@/components/Icon";
import { useState } from "react";

export default function P({
    id,
    n,
    children,
}: {
    id: string;
    n: number;
    children: React.ReactNode;
}) {
    const [copied, setCopied] = useState(false);

    const copy = (e: React.MouseEvent) => {
        // Let a modified click do what the browser would normally do.
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
        const url = `${window.location.origin}${window.location.pathname}#${id}`;
        navigator.clipboard?.writeText(url).then(
            () => { setCopied(true); window.setTimeout(() => setCopied(false), 1400); },
            () => {}
        );
    };

    return (
        <p id={id} className="scroll-mt-24">
            <a
                href={`#${id}`}
                onClick={copy}
                aria-label={`Copy a link to paragraph ${n}`}
                title="Copy link to this paragraph"
                className="group mr-2 select-none align-baseline font-mono text-[13px] text-slate-400 no-underline hover:text-emerald-700"
            >
                {n}
                {copied ? (
                    <Icon
                        name="Check"
                        className="ml-0.5 inline-block -mt-0.5 text-emerald-700"
                        size={12}
                        strokeWidth={2.5}
                        aria-hidden
                    />
                ) : null}
            </a>
            {children}
        </p>
    );
}

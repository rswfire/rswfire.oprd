"use client";

// components/testimony/P.tsx
//
// A numbered paragraph of the testimony.
//
// Two anchors, doing two different jobs. The paragraph's element id is its
// NUMBER (`p27`), because links always carry the version and every version is
// frozen at a permanent address: v1.4/#p27 means the same words forever. The
// minted `id` slug stays as a second anchor inside the paragraph so links
// copied before numbers became the address keep resolving. `n` itself is
// recomputed by scripts/number-testimony.mjs whenever the current draft
// changes; on a frozen version it never changes again.
import Icon from "@/components/Icon";
import { useState } from "react";
import { useTestimonyVersion, versionedHref } from "@/components/testimony/versionContext";

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
    const { version } = useTestimonyVersion();

    const copy = (e: React.MouseEvent) => {
        // Let a modified click do what the browser would normally do.
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
        const url = `${window.location.origin}${versionedHref(version, `p${n}`)}`;
        navigator.clipboard?.writeText(url).then(
            () => { setCopied(true); window.setTimeout(() => setCopied(false), 1400); },
            () => {}
        );
    };

    return (
        <p id={`p${n}`} className="scroll-mt-24">
            <span id={id} aria-hidden className="scroll-mt-24" />
            <a
                href={`#p${n}`}
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

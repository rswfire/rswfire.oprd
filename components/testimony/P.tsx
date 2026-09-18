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
import { useState } from "react";
import ShareOverlay from "@/components/testimony/ShareOverlay";
import { useTestimonyVersion } from "@/components/testimony/versionContext";
import { useChapter } from "@/components/testimony/chapterContext";

export default function P({
    id,
    n,
    children,
}: {
    id: string;
    n: number;
    children: React.ReactNode;
}) {
    const [sharing, setSharing] = useState(false);
    const { version } = useTestimonyVersion();
    const chapter = useChapter();
    const citeRef = chapter
        ? `${chapter.word === "Addendum" ? "Addendum" : `Chapter ${chapter.word}`}, ${chapter.title}, ¶${n}`
        : `¶${n}`;

    const open = (e: React.MouseEvent) => {
        // Let a modified click do what the browser would normally do.
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
        e.preventDefault();
        setSharing(true);
    };

    return (
        <p id={`p${n}`} className="scroll-mt-24">
            <span id={id} aria-hidden className="scroll-mt-24" />
            <a
                href={`#p${n}`}
                onClick={open}
                aria-label={`Share paragraph ${n}`}
                title="Share this paragraph"
                className="group mr-2 select-none align-baseline font-mono text-[13px] text-slate-400 no-underline hover:text-emerald-700"
            >
                {n}
            </a>
            {sharing ? (
                <ShareOverlay
                    version={version}
                    anchor={`p${n}`}
                    label={`paragraph ${n}`}
                    citeRef={citeRef}
                    onClose={() => setSharing(false)}
                />
            ) : null}
            {children}
        </p>
    );
}

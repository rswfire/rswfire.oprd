"use client";

// components/testimony/Hash.tsx
//
// An anchor for the things in the document that are not paragraphs: part
// titles, headings, anything a reader might want to point at that has no
// number of its own.
//
// It behaves exactly like the number on a paragraph — click opens the share
// overlay for the section, a modified click does what the browser would
// normally do — and it sits after the words rather than before them, because
// a heading reads first and gets its address second.
import { useState } from "react";
import ShareOverlay from "@/components/testimony/ShareOverlay";
import { useTestimonyVersion } from "@/components/testimony/versionContext";

export default function Hash({ id, label }: { id: string; label?: string }) {
    const [sharing, setSharing] = useState(false);
    const { version } = useTestimonyVersion();

    const open = (e: React.MouseEvent) => {
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
        e.preventDefault();
        setSharing(true);
    };

    const name = label ?? "this section";

    return (
        <>
            <a
                href={`#${id}`}
                onClick={open}
                aria-label={`Share ${name}`}
                title="Share this section"
                className="ml-2 select-none align-baseline font-mono text-[15px] font-normal text-slate-400 no-underline hover:text-emerald-700"
            >
                #
            </a>
            {sharing ? (
                <ShareOverlay
                    version={version}
                    anchor={id}
                    label={name}
                    citeRef={name}
                    onClose={() => setSharing(false)}
                />
            ) : null}
        </>
    );
}

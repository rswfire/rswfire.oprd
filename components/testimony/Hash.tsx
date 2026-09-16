"use client";

// components/testimony/Hash.tsx
//
// An anchor for the things in the document that are not paragraphs: part
// titles, headings, anything a reader might want to point at that has no
// number of its own.
//
// It behaves exactly like the number on a paragraph — click copies the full
// link, a modified click does what the browser would normally do — and it sits
// after the words rather than before them, because a heading reads first and
// gets its address second.
import Icon from "@/components/Icon";
import { useState } from "react";
import { useTestimonyVersion, versionedHref } from "@/components/testimony/versionContext";

export default function Hash({ id, label }: { id: string; label?: string }) {
    const [copied, setCopied] = useState(false);
    const { version } = useTestimonyVersion();

    const copy = (e: React.MouseEvent) => {
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
        const url = `${window.location.origin}${versionedHref(version, id)}`;
        navigator.clipboard?.writeText(url).then(
            () => { setCopied(true); window.setTimeout(() => setCopied(false), 1400); },
            () => {}
        );
    };

    return (
        <a
            href={`#${id}`}
            onClick={copy}
            aria-label={label ? `Copy a link to ${label}` : "Copy a link to this section"}
            title="Copy link to this section"
            className="ml-2 select-none align-baseline font-mono text-[15px] font-normal text-slate-400 no-underline hover:text-emerald-700"
        >
            #
            {copied ? (
                <Icon
                    name="Check"
                    className="ml-0.5 inline-block -mt-0.5 text-emerald-700"
                    size={13}
                    strokeWidth={2.5}
                    aria-hidden
                />
            ) : null}
        </a>
    );
}

"use client";

// components/testimony/ShareOverlay.tsx
//
// The share overlay for anything addressable on the testimony: a paragraph
// (opened from its number), a part title, or a heading (opened from their #).
// Three things, nothing sophisticated: the permanent address in an input,
// share buttons that are plain URL intents, and a ready citation in a
// textarea.
import { useEffect, useState } from "react";
import Icon from "@/components/Icon";
import { TESTIMONY_VERSIONS } from "@/data/testimonyVersions";

export default function ShareOverlay({
    version,
    anchor,
    label,
    citeRef,
    onClose,
}: {
    version: string;
    anchor: string;   // the fragment: "p27", "the-shedding"
    label: string;    // for the header: "paragraph 27", "Part One, THE SHEDDING"
    citeRef: string;  // for the citation line: "¶27", "Part One, THE SHEDDING"
    onClose: () => void;
}) {
    const [copiedUrl, setCopiedUrl] = useState(false);
    const [copiedCite, setCopiedCite] = useState(false);

    const v = TESTIMONY_VERSIONS.find((x) => x.version === version) ?? TESTIMONY_VERSIONS[0];
    const url = `https://oprdvolunteerabuse.org/testimony/v${version}/#${anchor}`;
    const title = `Testimony of Robert Samuel White, ${citeRef}`;
    const citation = `Testimony of Robert Samuel White, v${version} (${v.date}), ${citeRef}.\n${url}`;

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
        document.addEventListener("keydown", onKey);
        return () => document.removeEventListener("keydown", onKey);
    }, [onClose]);

    const copy = (text: string, mark: (v: boolean) => void) => {
        navigator.clipboard?.writeText(text).then(
            () => { mark(true); window.setTimeout(() => mark(false), 1400); },
            () => {}
        );
    };

    const enc = encodeURIComponent;
    const targets: { label: string; href: string }[] = [
        { label: "X", href: `https://x.com/intent/post?text=${enc(title)}&url=${enc(url)}` },
        { label: "Facebook", href: `https://www.facebook.com/sharer/sharer.php?u=${enc(url)}` },
        { label: "Bluesky", href: `https://bsky.app/intent/compose?text=${enc(`${title}\n${url}`)}` },
        { label: "Reddit", href: `https://www.reddit.com/submit?url=${enc(url)}&title=${enc(title)}` },
        { label: "LinkedIn", href: `https://www.linkedin.com/sharing/share-offsite/?url=${enc(url)}` },
        { label: "Email", href: `mailto:?subject=${enc(title)}&body=${enc(citation)}` },
    ];

    return (
        <div
            className="fixed inset-0 z-[90] flex items-center justify-center bg-slate-950/40 p-4"
            onClick={onClose}
        >
            <div
                className="w-full max-w-md rounded-2xl border border-slate-200 bg-white shadow-xl"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex items-center justify-between border-b border-slate-200 px-5 py-3">
                    <div className="text-[11px] font-bold uppercase tracking-widest text-slate-500">
                        Share {label}
                    </div>
                    <button
                        onClick={onClose}
                        aria-label="Close"
                        className="rounded-md p-1 text-slate-500 hover:bg-slate-100 hover:text-slate-800"
                    >
                        <Icon name="X" size={16} strokeWidth={2} />
                    </button>
                </div>

                <div className="space-y-4 px-5 py-4">
                    <div>
                        <div className="mb-1 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                            Permanent address
                        </div>
                        <div className="flex gap-2">
                            <input
                                readOnly
                                value={url}
                                onFocus={(e) => e.currentTarget.select()}
                                className="min-w-0 flex-1 rounded-lg border border-slate-300 bg-slate-50 px-3 py-2 font-mono text-[12px] text-slate-800"
                            />
                            <button
                                onClick={() => copy(url, setCopiedUrl)}
                                className="shrink-0 rounded-lg border border-slate-300 px-3 py-2 text-[10px] font-bold uppercase tracking-widest text-slate-700 hover:bg-slate-50"
                            >
                                {copiedUrl ? "Copied" : "Copy"}
                            </button>
                        </div>
                    </div>

                    <div>
                        <div className="mb-1 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                            Share to
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {targets.map((t) => (
                                <a
                                    key={t.label}
                                    href={t.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="rounded-lg border border-slate-300 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-slate-700 hover:bg-emerald-50 hover:text-emerald-800"
                                >
                                    {t.label}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <div className="mb-1 flex items-center justify-between">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                                Citation
                            </span>
                            <button
                                onClick={() => copy(citation, setCopiedCite)}
                                className="rounded-md border border-slate-300 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-slate-600 hover:bg-slate-50"
                            >
                                {copiedCite ? "Copied" : "Copy"}
                            </button>
                        </div>
                        <textarea
                            readOnly
                            value={citation}
                            rows={3}
                            onFocus={(e) => e.currentTarget.select()}
                            className="w-full resize-none rounded-lg border border-slate-300 bg-slate-50 px-3 py-2 font-mono text-[12px] leading-relaxed text-slate-800"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

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
            className="fixed inset-0 z-[90] flex items-center justify-center bg-slate-950/50 p-4 backdrop-blur-sm"
            onClick={onClose}
        >
            <div
                className="w-full max-w-md overflow-hidden rounded-2xl border border-emerald-200 bg-white shadow-xl"
                onClick={(e) => e.stopPropagation()}
            >
                {/* ── The head: what is being shared ── */}
                <div className="bg-gradient-to-b from-emerald-50/90 to-white px-5 pt-4 pb-3">
                    <div className="flex items-start justify-between gap-4">
                        <div className="min-w-0">
                            <div className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-emerald-700">
                                <Icon name="Sprout" size={12} strokeWidth={2} aria-hidden />
                                Share
                            </div>
                            <div className="mt-1 font-mono text-lg font-bold text-gray-900">
                                {citeRef}
                            </div>
                            <div className="mt-0.5 text-[12px] text-gray-500">
                                Testimony of Robert Samuel White &middot;{" "}
                                <span className="font-mono">v{version}</span> &middot; {v.date}
                            </div>
                        </div>
                        <button
                            onClick={onClose}
                            aria-label="Close"
                            className="shrink-0 rounded-md p-1 text-slate-400 hover:bg-emerald-50 hover:text-slate-700"
                        >
                            <Icon name="X" size={16} strokeWidth={2} />
                        </button>
                    </div>
                </div>

                <div className="h-px w-full bg-gradient-to-r from-emerald-600 via-emerald-300 to-emerald-100" />

                <div className="space-y-4 px-5 py-4">
                    {/* ── The permanent address ── */}
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
                                className="shrink-0 rounded-lg bg-emerald-700 px-3.5 py-2 text-[10px] font-bold uppercase tracking-widest text-white shadow-sm hover:bg-emerald-600"
                            >
                                {copiedUrl ? "Copied" : "Copy"}
                            </button>
                        </div>
                    </div>

                    {/* ── The doors out ── */}
                    <div>
                        <div className="mb-1.5 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                            Share to
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {targets.map((t) => (
                                <a
                                    key={t.label}
                                    href={t.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="rounded-full border border-emerald-300 bg-white px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-widest text-emerald-800 shadow-sm transition-colors hover:border-emerald-400 hover:bg-emerald-50"
                                >
                                    {t.label}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* ── The citation ── */}
                    <div className="rounded-xl border border-emerald-100 bg-emerald-50/50 p-3">
                        <div className="mb-1 flex items-center justify-between">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-700">
                                Citation
                            </span>
                            <button
                                onClick={() => copy(citation, setCopiedCite)}
                                className="rounded-md border border-emerald-300 bg-white px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-emerald-800 hover:bg-emerald-50"
                            >
                                {copiedCite ? "Copied" : "Copy"}
                            </button>
                        </div>
                        <textarea
                            readOnly
                            value={citation}
                            rows={3}
                            onFocus={(e) => e.currentTarget.select()}
                            className="w-full resize-none rounded-lg border border-emerald-200 bg-white px-3 py-2 font-mono text-[12px] leading-relaxed text-slate-800"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

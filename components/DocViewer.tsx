// components/DocViewer.tsx
//
// The document viewer: a modal that shows the in-page HTML rendering of one
// register document — same redaction layer and same content as the PDF —
// with every file format available beneath it as a download. The rendering
// is fetched from /records/<register>/html/<id>.html, generated alongside
// the PDFs by the sync pipeline.
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import EmlNotice, { requestEml } from "@/components/EmlNotice";

export interface ViewDoc {
    slug: string; // register slug: oprd | osp | das | usfs
    id: string; // filing id — anchor on the register, filename of the rendering
    title: string;
    date: string;
    time?: string;
    kindLabel: string;
    counterparty?: string; // "To X" / "From X"
    ulid: string;
    docs: { label: string; href: string }[];
    eml?: string;
}

// Runtime fetches follow the same prefix as every other asset, so one
// build serves the apex, a test subdomain, or a local serve of out/.
const PREFIX = process.env.NEXT_PUBLIC_ASSET_PREFIX ?? "";

export const THREAD_LABEL: Record<string, string> = {
    oprd: "OPRD",
    usfs: "USFS",
    osp: "OSP",
    das: "DAS",
    legislation: "LEGISLATURE",
};

function fileExt(href: string): string {
    const m = href.toLowerCase().match(/\.([a-z0-9]+)$/);
    return m ? m[1].toUpperCase() : "FILE";
}

export default function DocViewer({
    doc,
    onClose,
    onPrev,
    onNext,
}: {
    doc: ViewDoc | null;
    onClose: () => void;
    onPrev?: () => void;
    onNext?: () => void;
}) {
    const [html, setHtml] = useState<string | null>(null);
    const [failed, setFailed] = useState(false);
    const [emlOpen, setEmlOpen] = useState<string | null>(null);

    useEffect(() => {
        setHtml(null);
        setFailed(false);
        if (!doc) return;
        let alive = true;
        // no-store: the render files appear after deploys, and a browser that
        // cached a 404 from before a deploy would otherwise show the download
        // fallback forever.
        fetch(`${PREFIX}/records/${doc.slug}/html/${doc.id}.html`, { cache: "no-store" })
            .then((r) => (r.ok ? r.text() : Promise.reject(new Error(String(r.status)))))
            .then((t) => alive && setHtml(t))
            .catch(() => alive && setFailed(true));
        return () => {
            alive = false;
        };
    }, [doc]);

    useEffect(() => {
        if (!doc) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                onClose();
                return;
            }
            if (e.key === "ArrowLeft" && onPrev) onPrev();
            if (e.key === "ArrowRight" && onNext) onNext();
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [doc, onClose, onPrev, onNext]);

    if (!doc) return null;

    // Attachments are what the correspondent sent; the rendering and the
    // original are what the archive made of it.
    const attachments = doc.docs.filter((d) => d.href.includes("/attachments/"));
    const renderings = doc.docs.filter((d) => !d.href.includes("/attachments/"));

    return (
        <div
            className="fixed inset-0 z-50 flex items-stretch justify-center bg-black/50 sm:items-center sm:p-6"
            onClick={onClose}
        >
            {/* Full screen on a phone; a fixed 90vh panel above that, so the
                document does not resize the window as you page through. */}
            <div
                className="w-full h-full flex flex-col bg-white sm:h-[90vh] sm:max-w-3xl sm:rounded-2xl sm:border sm:border-gray-300 overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                {/* header */}
                <div className="px-5 py-4 border-b border-gray-200 flex items-start justify-between gap-4">
                    <div className="min-w-0">
                        <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-gray-400">
                            <span className="text-emerald-700 border border-emerald-200 rounded px-1.5 py-0.5">
                                {THREAD_LABEL[doc.slug] ?? doc.slug}
                            </span>
                            <span>{doc.kindLabel}</span>
                        </div>
                        <div className="mt-1 text-base font-semibold text-gray-900 leading-snug">{doc.title}</div>
                        <div className="mt-0.5 text-sm text-gray-600">
                            {doc.date}
                            {doc.time ? `, ${doc.time}` : ""}
                            {doc.counterparty ? ` · ${doc.counterparty}` : ""}
                        </div>
                    </div>
                    <button
                        type="button"
                        onClick={onClose}
                        aria-label="Close"
                        className="cursor-pointer shrink-0 rounded-lg border border-gray-300 px-2.5 py-1 text-sm text-gray-600 hover:bg-gray-50"
                    >
                        ✕
                    </button>
                </div>

                {/* document */}
                <div className="flex-1 overflow-y-auto px-5 py-5 bg-gray-50/50">
                    {html === null && !failed && (
                        <div className="flex items-center gap-3 text-sm text-gray-500 py-8 justify-center">
                            <span className="inline-block h-4 w-4 rounded-full border-2 border-gray-300 border-t-emerald-600 animate-spin" />
                            Loading the document…
                        </div>
                    )}
                    {failed && (
                        <div className="text-sm text-gray-600 py-8 text-center">
                            This document is available in the files below.
                        </div>
                    )}
                    {html !== null && (
                        <div
                            className="bg-white border border-gray-200 rounded-lg p-5 sm:p-7"
                            dangerouslySetInnerHTML={{ __html: html }}
                        />
                    )}
                    {(attachments.length > 0 || renderings.length > 0 || doc.eml) && (
                        <div className="mt-4 bg-white border border-gray-200 rounded-lg overflow-hidden">
                            {attachments.length > 0 && (
                                <>
                                    <div className="px-4 py-2 border-b border-gray-100 text-[10px] font-bold uppercase tracking-widest text-gray-500">
                                        Attachments ({attachments.length})
                                    </div>
                                    <ul className="divide-y divide-gray-100">
                                        {attachments.map((d) => (
                                            <li key={d.href} className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1.5 px-4 py-2">
                                                <span className="min-w-0 text-sm text-gray-800">
                                                    {d.label}
                                                    <span className="ml-2 font-mono text-[10px] uppercase tracking-widest text-gray-400">{fileExt(d.href)}</span>
                                                </span>
                                                <span className="flex shrink-0 items-center gap-2">
                                                    <a href={d.href} target="_blank" rel="noopener"
                                                       className="rounded-md border border-emerald-300 bg-emerald-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-emerald-800 hover:bg-emerald-100">
                                                        View
                                                    </a>
                                                    <a href={d.href} download
                                                       className="rounded-md border border-gray-300 bg-gray-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-gray-700 hover:bg-gray-100">
                                                        Download
                                                    </a>
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </>
                            )}
                            <div className={attachments.length > 0 ? "border-t border-gray-200" : ""}>
                                <ul className="divide-y divide-gray-100">
                                    {renderings.map((d) => (
                                        <li key={d.href} className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1.5 px-4 py-2 bg-gray-50/60">
                                            <span className="min-w-0 text-sm text-gray-600">
                                                The record
                                                <span className="ml-2 font-mono text-[10px] uppercase tracking-widest text-gray-400">{fileExt(d.href)}</span>
                                            </span>
                                            <span className="flex shrink-0 items-center gap-2">
                                                <a href={d.href} target="_blank" rel="noopener"
                                                   className="rounded-md border border-emerald-300 bg-emerald-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-emerald-800 hover:bg-emerald-100">
                                                    View
                                                </a>
                                                <a href={d.href} download
                                                   className="rounded-md border border-gray-300 bg-gray-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-gray-700 hover:bg-gray-100">
                                                    Download
                                                </a>
                                            </span>
                                        </li>
                                    ))}
                                    {doc.eml && (
                                        <li className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1.5 px-4 py-2 bg-gray-50/60">
                                            <span className="min-w-0 text-sm text-gray-600">
                                                The unmodified original
                                                <span className="ml-2 font-mono text-[10px] uppercase tracking-widest text-gray-400">EML</span>
                                            </span>
                                            <button type="button"
                                                onClick={() => requestEml(doc.eml!, setEmlOpen)}
                                                className="cursor-pointer shrink-0 rounded-md border border-gray-300 bg-gray-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-gray-700 hover:bg-gray-100">
                                                Download
                                            </button>
                                        </li>
                                    )}
                                </ul>
                            </div>
                        </div>
                    )}

                </div>

                {/* footer */}
                <div className="px-5 py-3 border-t border-gray-200 bg-white flex items-center gap-3">
                    <div className="ml-auto flex items-center gap-2">
                        <button
                            type="button"
                            onClick={onPrev}
                            disabled={!onPrev}
                            title="Previous document"
                            className="cursor-pointer flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-700 border border-emerald-700 rounded px-2.5 py-1.5 hover:bg-emerald-700 hover:text-white transition-colors disabled:cursor-default disabled:border-gray-200 disabled:text-gray-300 disabled:hover:bg-transparent disabled:hover:text-gray-300"
                        >
                            <span aria-hidden>&larr;</span>
                            <span className="hidden sm:inline">Prev</span>
                        </button>

                        <Link
                            href={`/accountability/${doc.slug}/${doc.ulid}`}
                            title="This document, on its own page"
                            className="hidden md:block font-mono text-[10px] tracking-widest text-gray-400 hover:text-emerald-700 transition-colors"
                        >
                            {doc.ulid}
                        </Link>

                        <button
                            type="button"
                            onClick={onNext}
                            disabled={!onNext}
                            title="Next document"
                            className="cursor-pointer flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-700 border border-emerald-700 rounded px-2.5 py-1.5 hover:bg-emerald-700 hover:text-white transition-colors disabled:cursor-default disabled:border-gray-200 disabled:text-gray-300 disabled:hover:bg-transparent disabled:hover:text-gray-300"
                        >
                            <span className="hidden sm:inline">Next</span>
                            <span aria-hidden>&rarr;</span>
                        </button>
                    </div>
                </div>
            </div>

            <EmlNotice key={emlOpen ?? "none"} href={emlOpen} onClose={() => setEmlOpen(null)} />
        </div>
    );
}

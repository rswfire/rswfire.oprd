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
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        setHtml(null);
        setFailed(false);
        if (!doc) return;
        if (!doc.eml) {
            setFailed(true);
            return;
        }
        let alive = true;
        fetch(`${PREFIX}/records/${doc.slug}/html/${doc.id}.html`)
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
                if (menuOpen) setMenuOpen(false);
                else onClose();
                return;
            }
            if (menuOpen) return;
            if (e.key === "ArrowLeft" && onPrev) onPrev();
            if (e.key === "ArrowRight" && onNext) onNext();
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [doc, onClose, menuOpen, onPrev, onNext]);

    useEffect(() => {
        setMenuOpen(false);
    }, [doc]);

    if (!doc) return null;

    // Attachments are what the correspondent sent; the rendering and the
    // original are what the archive made of it.
    const attachments = doc.docs.filter((d) => d.href.includes("/attachments/"));
    const renderings = doc.docs.filter((d) => !d.href.includes("/attachments/"));

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-3 sm:p-6"
            onClick={onClose}
        >
            <div
                className="w-full max-w-3xl max-h-[90vh] flex flex-col rounded-2xl bg-white border border-gray-300 overflow-hidden"
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
                            This document is available as a download below.
                        </div>
                    )}
                    {html !== null && (
                        <div
                            className="bg-white border border-gray-200 rounded-lg p-5 sm:p-7"
                            dangerouslySetInnerHTML={{ __html: html }}
                        />
                    )}
                </div>

                {/* downloads */}
                <div className="px-5 py-3 border-t border-gray-200 bg-white flex items-center gap-3">
                    <div className="relative">
                        <button
                            type="button"
                            onClick={() => setMenuOpen((v) => !v)}
                            aria-expanded={menuOpen}
                            className="cursor-pointer flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-white bg-emerald-700 border border-emerald-700 rounded px-3 py-1.5 hover:bg-emerald-800 transition-colors"
                        >
                            Download
                            <span className="text-[9px] leading-none">{menuOpen ? "▲" : "▼"}</span>
                        </button>

                        {menuOpen && (
                            <>
                                <div className="fixed inset-0 z-10" onClick={() => setMenuOpen(false)} />
                                <div className="absolute z-20 bottom-full left-0 mb-1.5 w-64 rounded-lg border border-gray-300 bg-white shadow-lg overflow-hidden">
                                    {attachments.map((d) => (
                                        <a
                                            key={d.href}
                                            href={d.href}
                                            download
                                            title={d.label}
                                            onClick={() => setTimeout(() => setMenuOpen(false), 0)}
                                            className="cursor-pointer flex items-baseline justify-between gap-3 px-3 py-2 text-sm text-gray-800 hover:bg-emerald-50 border-b border-gray-100"
                                        >
                                            <span className="min-w-0 truncate">{d.label}</span>
                                            <span className="shrink-0 font-mono text-[10px] uppercase tracking-widest text-gray-400">
                                                {fileExt(d.href)}
                                            </span>
                                        </a>
                                    ))}

                                    <div className={attachments.length > 0 ? "border-t-2 border-gray-300" : ""}>
                                        {renderings.map((d) => (
                                            <a
                                                key={d.href}
                                                href={d.href}
                                                download
                                                title={d.label}
                                                onClick={() => setTimeout(() => setMenuOpen(false), 0)}
                                                className="cursor-pointer flex items-baseline justify-between gap-3 px-3 py-2 text-sm text-gray-800 hover:bg-emerald-50"
                                            >
                                                <span className="min-w-0 truncate">The record</span>
                                                <span className="shrink-0 font-mono text-[10px] uppercase tracking-widest text-gray-400">
                                                    {fileExt(d.href)}
                                                </span>
                                            </a>
                                        ))}
                                        {doc.eml && (
                                            <button
                                                type="button"
                                                onClick={() => {
                                                    setMenuOpen(false);
                                                    requestEml(doc.eml!, setEmlOpen);
                                                }}
                                                className="cursor-pointer w-full flex items-baseline justify-between gap-3 px-3 py-2 text-left text-sm text-gray-800 hover:bg-emerald-50"
                                            >
                                                <span className="min-w-0 truncate">The unmodified original</span>
                                                <span className="shrink-0 font-mono text-[10px] uppercase tracking-widest text-gray-400">
                                                    EML
                                                </span>
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </>
                        )}
                    </div>

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

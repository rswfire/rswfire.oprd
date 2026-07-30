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

export const THREAD_LABEL: Record<string, string> = {
    oprd: "OPRD",
    usfs: "USFS",
    osp: "OSP",
    das: "DAS",
};

function fileExt(href: string): string {
    const m = href.toLowerCase().match(/\.([a-z0-9]+)$/);
    return m ? m[1].toUpperCase() : "FILE";
}

export default function DocViewer({ doc, onClose }: { doc: ViewDoc | null; onClose: () => void }) {
    const [html, setHtml] = useState<string | null>(null);
    const [failed, setFailed] = useState(false);
    const [emlOpen, setEmlOpen] = useState<string | null>(null);

    useEffect(() => {
        setHtml(null);
        setFailed(false);
        if (!doc) return;
        if (!doc.eml) {
            setFailed(true);
            return;
        }
        let alive = true;
        fetch(`/records/${doc.slug}/html/${doc.id}.html`)
            .then((r) => (r.ok ? r.text() : Promise.reject(new Error(String(r.status)))))
            .then((t) => alive && setHtml(t))
            .catch(() => alive && setFailed(true));
        return () => {
            alive = false;
        };
    }, [doc]);

    useEffect(() => {
        if (!doc) return;
        const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [doc, onClose]);

    if (!doc) return null;

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
                        className="shrink-0 rounded-lg border border-gray-300 px-2.5 py-1 text-sm text-gray-600 hover:bg-gray-50"
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
                <div className="px-5 py-3 border-t border-gray-200 bg-white flex flex-wrap items-center gap-2">
                    {doc.docs.map((d) => (
                        <a
                            key={d.href}
                            href={d.href}
                            download
                            title={d.label}
                            className="text-xs font-semibold uppercase tracking-wider text-emerald-700 border border-emerald-700 rounded px-2.5 py-1 hover:bg-emerald-700 hover:text-white transition-colors"
                        >
                            Download {fileExt(d.href)}
                        </a>
                    ))}
                    {doc.eml && (
                        <button
                            type="button"
                            onClick={() => requestEml(doc.eml!, setEmlOpen)}
                            title="Unmodified email original"
                            className="text-xs font-semibold uppercase tracking-wider text-emerald-700 border border-emerald-700 rounded px-2.5 py-1 hover:bg-emerald-700 hover:text-white transition-colors"
                        >
                            Download EML
                        </button>
                    )}
                    <Link
                        href={`/accountability/${doc.slug}/#${doc.ulid}`}
                        title="This document on its accountability page"
                        className="ml-auto font-mono text-[10px] tracking-widest text-gray-400 hover:text-emerald-700 transition-colors"
                    >
                        {doc.ulid}
                    </Link>
                </div>
            </div>

            <EmlNotice key={emlOpen ?? "none"} href={emlOpen} onClose={() => setEmlOpen(null)} />
        </div>
    );
}

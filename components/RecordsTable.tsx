// components/RecordsTable.tsx
//
// The communications table for one register: searchable, filterable by type,
// sortable by date, built to hold hundreds of documents. Flagged filings are
// accented and show their note; every row keeps its anchor id, its downloads,
// and the unmodified original behind the disclosure.
"use client";

import { useMemo, useState } from "react";
import type { Filing, FilingKind } from "@/components/RecordsThread";
import { KIND_LABEL } from "@/components/RecordsThread";

function ext(href: string): string {
    const m = href.toLowerCase().match(/\.([a-z0-9]+)$/);
    return m ? m[1].toUpperCase() : "FILE";
}

function Chip({ label }: { label: string }) {
    return (
        <span className="shrink-0 text-xs font-semibold uppercase tracking-wider text-emerald-700 border border-emerald-700 rounded px-2 py-0.5 group-hover:bg-emerald-700 group-hover:text-white transition-colors">
            {label}
        </span>
    );
}

export default function RecordsTable({ filings }: { filings: Filing[] }) {
    const [query, setQuery] = useState("");
    const [kind, setKind] = useState<FilingKind | "all" | "flagged">("all");
    const [asc, setAsc] = useState(true);
    const [emlOpen, setEmlOpen] = useState<string | null>(null);

    const kinds = useMemo(
        () => Array.from(new Set(filings.map((f) => f.kind))),
        [filings]
    );

    const rows = useMemo(() => {
        const q = query.trim().toLowerCase();
        let out = filings.filter((f) => {
            if (kind === "flagged" && !f.flagged) return false;
            if (kind !== "all" && kind !== "flagged" && f.kind !== kind) return false;
            if (!q) return true;
            const hay = [f.title, f.summary, f.date, f.d, KIND_LABEL[f.kind], f.from, f.to]
                .filter(Boolean)
                .join(" ")
                .toLowerCase();
            return hay.includes(q);
        });
        out = out.slice().sort((a, b) => (asc ? a.d.localeCompare(b.d) : b.d.localeCompare(a.d)));
        return out;
    }, [filings, query, kind, asc]);

    return (
        <div>
            {/* controls */}
            <div className="flex flex-col min-[480px]:flex-row gap-3 min-[480px]:items-center">
                <input
                    type="search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search the record"
                    className="w-full min-[480px]:max-w-xs rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600"
                />
                <select
                    value={kind}
                    onChange={(e) => setKind(e.target.value as FilingKind | "all" | "flagged")}
                    className="rounded-lg border border-gray-300 px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600"
                >
                    <option value="all">All types</option>
                    <option value="flagged">Flagged</option>
                    {kinds.map((k) => (
                        <option key={k} value={k}>
                            {KIND_LABEL[k]}
                        </option>
                    ))}
                </select>
                <button
                    type="button"
                    onClick={() => setAsc(!asc)}
                    className="rounded-lg border border-gray-300 px-3 py-2 text-sm bg-white hover:bg-gray-50 text-gray-700 text-left min-[480px]:text-center"
                >
                    Date {asc ? "↑" : "↓"}
                </button>
                <span className="text-xs text-gray-500 min-[480px]:ml-auto">
                    {rows.length} of {filings.length} documents
                </span>
            </div>

            {/* table */}
            <div className="mt-4 border border-gray-300 rounded-lg overflow-hidden bg-white divide-y divide-gray-200">
                {/* header (sm+) */}
                <div className="hidden sm:grid grid-cols-[7.5rem_1fr_auto] gap-4 px-4 py-2 bg-gray-50 text-xs font-semibold uppercase tracking-wider text-gray-500">
                    <span>Date</span>
                    <span>Document</span>
                    <span className="text-right">Files</span>
                </div>

                {rows.length === 0 && (
                    <div className="px-4 py-6 text-sm text-gray-500">No documents match.</div>
                )}

                {rows.map((f) => (
                    <div
                        key={f.id}
                        id={f.id}
                        className={`scroll-mt-48 grid grid-cols-1 sm:grid-cols-[7.5rem_1fr_auto] gap-2 sm:gap-4 px-4 py-3 ${
                            f.flagged ? "border-l-4 border-l-emerald-600 bg-emerald-50/40" : ""
                        }`}
                    >
                        <div className="text-sm text-gray-600">
                            <div>{f.date.replace(/, \d{4}$/, "")}</div>
                            <div className="mt-0.5 text-xs uppercase tracking-wider text-gray-400">
                                {KIND_LABEL[f.kind]}
                            </div>
                        </div>

                        <div className="min-w-0">
                            <div className={`text-sm ${f.flagged ? "font-semibold text-gray-900" : "text-gray-800"}`}>
                                {f.title}
                            </div>
                            {(f.from || f.to) && (
                                <div className="mt-0.5 text-xs text-gray-500">
                                    {f.from && <span>From: {f.from}</span>}
                                    {f.from && f.to && <span> &middot; </span>}
                                    {f.to && <span>To: {f.to}</span>}
                                </div>
                            )}
                            {f.flagged && f.summary && (
                                <div className="mt-1 text-sm text-gray-700 leading-relaxed">{f.summary}</div>
                            )}
                        </div>

                        <div className="flex sm:justify-end items-start gap-1.5 flex-wrap sm:max-w-[14rem]">
                            {(f.docs ?? []).map((d) => (
                                <a key={d.href} href={d.href} download title={d.label} className="group">
                                    <Chip label={ext(d.href)} />
                                </a>
                            ))}
                            {f.eml && (
                                <button
                                    type="button"
                                    onClick={() => setEmlOpen(f.eml!)}
                                    title="Unmodified email original"
                                    className="group"
                                >
                                    <Chip label="EML" />
                                </button>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* disclosure modal */}
            {emlOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
                    onClick={() => setEmlOpen(null)}
                >
                    <div
                        className="w-full max-w-lg rounded-2xl bg-white border border-gray-300 p-6 sm:p-8"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h2 className="text-base font-semibold uppercase tracking-widest text-gray-900">
                            Unmodified Email Original
                        </h2>

                        <div className="mt-4 space-y-3 text-sm leading-relaxed text-gray-700">
                            <p>
                                This is a raw email file, exactly as sent or received. Its full
                                headers, addresses, and authentication signatures can be examined
                                with{" "}
                                <a
                                    href="https://toolbox.googleapps.com/apps/messageheader/"
                                    target="_blank"
                                    className="underline text-emerald-700 hover:text-emerald-600"
                                >
                                    standard tools
                                </a>
                                . Nothing in it has been altered.
                            </p>
                            <p>
                                This archive refers to the local staff by role. That is a choice
                                about emphasis, not concealment.
                            </p>
                            <p>
                                In an unmodified record, identity is not protected, because it
                                cannot be.{" "}
                                <a
                                    href="https://github.com/rswfire/rswfire.oprd"
                                    target="_blank"
                                    className="underline text-emerald-700 hover:text-emerald-600"
                                >
                                    Everything here is public
                                </a>
                                , including the open-source repository this archive is published
                                from.
                            </p>
                        </div>

                        <div className="mt-6 flex flex-col sm:flex-row gap-3">
                            <a
                                href={emlOpen}
                                download
                                onClick={() => setEmlOpen(null)}
                                className="inline-block px-4 py-2 text-center text-sm font-semibold uppercase tracking-wider text-white bg-emerald-700 border border-emerald-700 rounded-lg hover:bg-emerald-800 transition-colors"
                            >
                                Download the Original
                            </a>
                            <button
                                type="button"
                                onClick={() => setEmlOpen(null)}
                                className="inline-block px-4 py-2 text-sm font-semibold uppercase tracking-wider text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

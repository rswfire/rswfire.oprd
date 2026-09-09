// components/AgencyRequestCard.tsx
//
// One agency on the records-request tracker, its sections organized into
// tabs: asked, claimed, produced, withheld, clocks, process. Produced
// documents get a view link and a download link apiece.

"use client";

import { useState } from "react";
import Link from "next/link";
import type { AgencyRequests } from "@/data/recordsRequests";

const TABS = ["asked", "claimed", "produced", "withheld", "clocks", "process"] as const;
type Tab = (typeof TABS)[number];

function BasisChip({ basis }: { basis: "statute" | "fee" | "silence" }) {
    if (basis === "statute")
        return (
            <span className="shrink-0 rounded-full border border-amber-300 bg-amber-50 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-amber-800">
                Statute
            </span>
        );
    if (basis === "fee")
        return (
            <span className="shrink-0 rounded-full border border-sky-300 bg-sky-50 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-sky-800">
                Fee
            </span>
        );
    return (
        <span className="shrink-0 rounded-full border border-red-300 bg-red-50 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-red-800">
            Silence
        </span>
    );
}

export default function AgencyRequestCard({ a }: { a: AgencyRequests }) {
    const [tab, setTab] = useState<Tab>("asked");

    const label = (t: Tab) => {
        if (t === "produced" && a.produced.length > 0) return `Produced (${a.produced.length})`;
        if (t === "withheld" && a.withheld.length > 0) return `Withheld (${a.withheld.length})`;
        return t;
    };

    return (
        <section className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
            {/* agency header */}
            <div className="flex flex-wrap items-start justify-between gap-3 border-b border-gray-100 px-5 py-4 sm:px-6">
                <div>
                    <h2 className="text-lg font-bold text-gray-900">{a.agency}</h2>
                    <div className="mt-0.5 text-[11px] font-mono uppercase tracking-widest text-gray-400">{a.refs}</div>
                </div>
                <div className="text-right">
                    <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Status</div>
                    <div className="text-sm font-semibold text-gray-900">{a.status}</div>
                </div>
            </div>

            {/* tabs */}
            <div className="flex flex-wrap gap-x-1 gap-y-1 border-b border-gray-200 bg-gray-50/60 px-3 pt-2 sm:px-4">
                {TABS.map((t) => (
                    <button
                        key={t}
                        type="button"
                        onClick={() => setTab(t)}
                        className={`rounded-t-lg border-b-2 px-3 py-2 text-[10px] font-bold uppercase tracking-widest transition-colors ${
                            tab === t
                                ? "border-emerald-700 bg-white text-emerald-900"
                                : "border-transparent text-gray-500 hover:bg-white/70 hover:text-gray-800"
                        }`}
                    >
                        {label(t)}
                    </button>
                ))}
            </div>

            <div className="px-5 py-4 sm:px-6">
                {tab === "asked" && (
                    <ul className="space-y-1.5 text-sm text-gray-700">
                        {a.asked.map((x, i) => (
                            <li key={i} className="flex gap-2">
                                <span aria-hidden className="mt-[7px] h-px w-3 shrink-0 bg-emerald-600" />
                                <span>{x}</span>
                            </li>
                        ))}
                    </ul>
                )}

                {tab === "claimed" && (
                    <ul className="space-y-2 text-sm text-gray-700">
                        {a.claims.map((x, i) => (
                            <li key={i} className="flex gap-2">
                                <span aria-hidden className="mt-[7px] h-px w-3 shrink-0 bg-sky-600" />
                                <span>{x}</span>
                            </li>
                        ))}
                    </ul>
                )}

                {tab === "produced" &&
                    (a.produced.length === 0 ? (
                        <div className="text-sm text-gray-500">{a.producedNote ?? "Nothing produced yet."}</div>
                    ) : (
                        <ul className="divide-y divide-gray-100">
                            {a.produced.map((doc, i) => (
                                <li key={i} className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 py-2">
                                    <span className="text-sm text-gray-800">{doc.label}</span>
                                    <span className="flex shrink-0 items-center gap-2">
                                        <a
                                            href={doc.href}
                                            target="_blank"
                                            rel="noopener"
                                            className="rounded-md border border-emerald-300 bg-emerald-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-emerald-800 hover:bg-emerald-100"
                                        >
                                            View
                                        </a>
                                        <a
                                            href={doc.href}
                                            download
                                            className="rounded-md border border-gray-300 bg-gray-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-gray-700 hover:bg-gray-100"
                                        >
                                            Download
                                        </a>
                                    </span>
                                </li>
                            ))}
                        </ul>
                    ))}

                {tab === "withheld" &&
                    (a.withheld.length === 0 ? (
                        <div className="text-sm text-gray-500">Nothing withheld yet.</div>
                    ) : (
                        <ul className="space-y-2.5">
                            {a.withheld.map((w, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <BasisChip basis={w.basis} />
                                    <div className="text-sm">
                                        <div className="text-gray-800">{w.item}</div>
                                        <div className="text-gray-500">{w.detail}</div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    ))}

                {tab === "clocks" &&
                    (a.deadlines.length === 0 ? (
                        <div className="text-sm text-gray-500">No clocks running.</div>
                    ) : (
                        <ul className="space-y-2.5">
                            {a.deadlines.map((dl, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    {dl.who === "me" ? (
                                        <span className="shrink-0 rounded-full border border-violet-300 bg-violet-50 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-violet-800">Mine</span>
                                    ) : (
                                        <span className="shrink-0 rounded-full border border-emerald-300 bg-emerald-50 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-emerald-800">Theirs</span>
                                    )}
                                    <div className="text-sm">
                                        <span className="font-semibold text-gray-900">{dl.date}</span>
                                        <span className="text-gray-700"> &mdash; {dl.what}.</span>
                                        {dl.recurs && <span className="text-gray-500"> Recurs {dl.recurs}.</span>}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    ))}

                {tab === "process" && (
                    <ol className="space-y-2">
                        {a.timeline.map((t, i) => (
                            <li key={i} className="flex gap-3 text-sm">
                                <span className="w-32 shrink-0 font-mono text-[11px] uppercase tracking-wide text-gray-400 pt-0.5">{t.date}</span>
                                <span className="text-gray-700">{t.event}</span>
                            </li>
                        ))}
                    </ol>
                )}
            </div>

            {/* footer */}
            <div className="border-t border-gray-100 px-5 py-3 sm:px-6 bg-gray-50/60">
                <Link
                    href={`/accountability/${a.slug}`}
                    className="text-sm font-medium text-emerald-700 underline hover:text-emerald-600"
                >
                    The full register &rarr;
                </Link>
            </div>
        </section>
    );
}

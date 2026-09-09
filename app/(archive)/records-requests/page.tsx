// app/(archive)/records-requests/page.tsx
//
// The records-request tracker: per agency, what was asked, what the agency
// claims it holds, what it is withholding and on what basis (statute or
// silence), and the process it took. The registers hold the documents;
// this page is the scoreboard across them.

import type { Metadata } from "next";
import Link from "next/link";
import SectionPage from "@/components/SectionPage";
import { RECORDS_REQUESTS } from "@/data/recordsRequests";

export const metadata: Metadata = {
    title: "Records Requests",
    description:
        "What each agency was asked for, what it claims it holds, what it is withholding and on what basis, and the process it took to get the records.",
};

function BasisChip({ basis }: { basis: "statute" | "silence" }) {
    return basis === "statute" ? (
        <span className="shrink-0 rounded-full border border-amber-300 bg-amber-50 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-amber-800">
            Statute
        </span>
    ) : (
        <span className="shrink-0 rounded-full border border-red-300 bg-red-50 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-red-800">
            Silence
        </span>
    );
}

export default function RecordsRequestsPage() {
    return (
        <SectionPage
            title="RECORDS REQUESTS"
            subtitle="ASKED. CLAIMED. WITHHELD."
            previousPage={{ href: "/", label: "Overview" }}
        >
            <div className="mb-8 text-base">
                Every request below was made under the Oregon Public Records Law, ORS 192.311 to 192.478.
                For each agency: what was asked, what the agency has said it holds, what it is withholding
                and on what basis, and the process it took. The documents themselves live in the{" "}
                <Link href="/accountability" className="underline text-emerald-800 hover:text-emerald-600">accountability registers</Link>;
                this page keeps the score.
            </div>

            <div className="space-y-10">
                {RECORDS_REQUESTS.map((a) => (
                    <section key={a.slug} className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
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

                        <div className="grid gap-0 lg:grid-cols-2">
                            {/* asked */}
                            <div className="border-b border-gray-100 px-5 py-4 sm:px-6 lg:border-r">
                                <div className="text-[10px] font-bold uppercase tracking-widest text-emerald-800 mb-2">What was asked</div>
                                <ul className="space-y-1.5 text-sm text-gray-700">
                                    {a.asked.map((x, i) => (
                                        <li key={i} className="flex gap-2">
                                            <span aria-hidden className="mt-[7px] h-px w-3 shrink-0 bg-emerald-600" />
                                            <span>{x}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* claims */}
                            <div className="border-b border-gray-100 px-5 py-4 sm:px-6">
                                <div className="text-[10px] font-bold uppercase tracking-widest text-sky-800 mb-2">What the agency has said it holds</div>
                                <ul className="space-y-2 text-sm text-gray-700">
                                    {a.claims.map((x, i) => (
                                        <li key={i} className="flex gap-2">
                                            <span aria-hidden className="mt-[7px] h-px w-3 shrink-0 bg-sky-600" />
                                            <span>{x}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* withheld */}
                        <div className="border-b border-gray-100 px-5 py-4 sm:px-6">
                            <div className="text-[10px] font-bold uppercase tracking-widest text-red-800 mb-2">
                                Withheld {a.withheld.length > 0 ? `(${a.withheld.length})` : ""}
                            </div>
                            {a.withheld.length === 0 ? (
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
                            )}
                        </div>

                        {/* process timeline */}
                        <div className="px-5 py-4 sm:px-6 bg-gray-50/60">
                            <div className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-3">The process</div>
                            <ol className="space-y-2">
                                {a.timeline.map((t, i) => (
                                    <li key={i} className="flex gap-3 text-sm">
                                        <span className="w-32 shrink-0 font-mono text-[11px] uppercase tracking-wide text-gray-400 pt-0.5">{t.date}</span>
                                        <span className="text-gray-700">{t.event}</span>
                                    </li>
                                ))}
                            </ol>
                            <div className="mt-4">
                                <Link
                                    href={`/accountability/${a.slug}`}
                                    className="text-sm font-medium text-emerald-700 underline hover:text-emerald-600"
                                >
                                    The full register &rarr;
                                </Link>
                            </div>
                        </div>
                    </section>
                ))}
            </div>
        </SectionPage>
    );
}

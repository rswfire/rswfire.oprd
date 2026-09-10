// app/(archive)/records-requests/page.tsx
//
// The records-request tracker: per agency, what was asked, what the agency
// claims it holds, what was produced, what it is withholding and on what
// basis (statute, fee, or silence), the clocks, and the process it took.
// The registers hold the documents; this page is the scoreboard across them.

import type { Metadata } from "next";
import Link from "next/link";
import SectionPage from "@/components/SectionPage";
import AgencyRequestCard from "@/components/AgencyRequestCard";
import { RECORDS_REQUESTS, ANSWERED_AGENCIES } from "@/data/recordsRequests";

export const metadata: Metadata = {
    title: "Records Requests",
    description:
        "What each agency was asked for, what it claims it holds, what it produced, what it is withholding and on what basis, and the process it took to get the records.",
};

export default function RecordsRequestsPage() {
    return (
        <SectionPage
            title="RECORDS REQUESTS"
            subtitle="ASKED. CLAIMED. WITHHELD."
            previousPage={{ href: "/", label: "Overview" }}
        >
            <div className="mb-8 space-y-4 text-base">
                <div>
                    When an institution chooses silence, you can force a response through public records.
                    A letter can be ignored; a records request cannot be ignored quietly. Its deadlines
                    are statutory. Every answer becomes a public record. Every refusal must name its
                    basis. Every silence gets a date.
                </div>
                <div>
                    Each of their moves is now on this page: what was asked, what they said they hold,
                    what they withhold and on what basis, and the clocks running on both sides. The
                    documents themselves live in the{" "}
                    <Link href="/accountability" className="underline text-emerald-800 hover:text-emerald-600">accountability registers</Link>;
                    this page keeps the score.
                </div>
            </div>

            <div className="space-y-10">
                {RECORDS_REQUESTS.map((a) => (
                    <AgencyRequestCard key={a.slug} a={a} />
                ))}
            </div>

            {/* the other side of the ledger */}
            <div className="mt-14">
                <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">Answered and closed</div>
                <p className="mb-4 text-sm text-gray-500">The exit was always available. Two agencies took it.</p>
                <div className="space-y-4">
                    {ANSWERED_AGENCIES.map((a) => (
                        <section key={a.agency} className="rounded-2xl border border-gray-200 bg-gray-50/70 px-5 py-4 sm:px-6 opacity-75">
                            <div className="flex flex-wrap items-start justify-between gap-2">
                                <div>
                                    <h2 className="text-base font-semibold text-gray-600">{a.agency}</h2>
                                    <div className="mt-0.5 text-[11px] font-mono uppercase tracking-widest text-gray-400">{a.refs}</div>
                                </div>
                                <div className="text-right">
                                    <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Status</div>
                                    <div className="text-sm font-semibold text-gray-600">{a.status}</div>
                                </div>
                            </div>
                            <p className="mt-2 text-sm text-gray-500">{a.note}</p>
                            <div className="mt-2">
                                <Link href={a.href} className="text-sm text-gray-500 underline hover:text-gray-700">The documents &rarr;</Link>
                            </div>
                        </section>
                    ))}
                </div>
            </div>
        </SectionPage>
    );
}

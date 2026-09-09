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
import { RECORDS_REQUESTS } from "@/data/recordsRequests";

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
        </SectionPage>
    );
}

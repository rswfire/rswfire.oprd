// app/(archive)/page.tsx

import Link from "next/link";
import Icon from "@/components/Icon";
import ArchiveVideos from "@/components/ArchiveVideos";
import PrimaryTransmission from "@/components/PrimaryTransmission";
import DeadmanReveal from "@/components/DeadmanReveal";
import LegalFund from "@/components/LegalFund";
import RecordIndexCard from "@/components/RecordIndexCard";
import RecordsRequestsCard from "@/components/RecordsRequestsCard";
import QueryableRecord from "@/components/QueryableRecord";
import CaseTimeline from "@/components/CaseTimeline";
import { FAILURE_TRANSMISSION } from "@/data/20260405";
import { LEGAL_FUND_TRANSMISSION } from "@/data/20260829";
import { THREADS } from "@/data/threads";

export default function OverviewPage() {
    return (
        <section className="w-full mx-auto">

            {/* DEADMAN RELEASE — renders nothing until the switch fires */}
            <DeadmanReveal />

            {/* THE QUESTION EVERY PROSPECTIVE HOST RESEARCHES */}
            <div className="mb-4 p-8 bg-white border border-gray-200 rounded-2xl shadow-sm">
                <p className="text-lg leading-relaxed text-gray-800">
                    This archive was written by a camp host. It answers the question you
                    don&rsquo;t think to ask until it matters: <span className="font-semibold">what
                    happens if something goes wrong?</span>
                </p>
                <p className="mt-4 text-lg leading-relaxed text-gray-800">
                    The record&rsquo;s answer: there is no process. There is a handwritten note at
                    a picnic table, a two-day statewide review, a permanent bar for public
                    comments, and thirteen months later, police at your door.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-gray-800">
                    Director Lisa Sumption has stewarded this agency for more than a decade.
                    I wrote her{" "}
                    <a href="https://rswfire.com/library/signal/01M1YH9QSRTJYYQCC4QKX81T7N" target="_blank" rel="noopener" className="text-emerald-800 underline hover:text-emerald-600">a letter</a>{" "}
                    documenting her choices, past and future. She is the one who can protect
                    you. She is the one choosing not to.
                </p>
            </div>

            {/* THE CASE, IN THEIR DOCUMENTS */}
            <CaseTimeline />


            {/* THE LEGAL FUND — announcement, thermometer, and door in one card */}
            <LegalFund />


            {/* THE OPRD RECORD — door to the live cluster and its six readings */}
            <RecordIndexCard />


            {/* THE QUERYABLE RECORD — human door and machine door */}
            <div className="mt-4">
                <QueryableRecord />
            </div>


            {/* RECORDS REQUESTS — the scoreboard across the agencies */}
            <RecordsRequestsCard />



            {/* ARCHIVE VIDEOS */}
            <ArchiveVideos/>

            <div className="mt-4 p-8 bg-emerald-50 border border-emerald-200 rounded-2xl shadow-sm">

                <div className="font-bold">This archive is not for revenge.</div>

                <div className="mt-4">It is for those who have been told they imagined it.</div>
                <div>It is for those about to walk into something similar.</div>
                <div>It is for the future, when denial no longer holds.</div>

                <div className="mt-4">It does not ask for apology.</div>
                <div>It does not ask for repair.</div>
                <div><Link href="/faq#epistemic" className="text-emerald-700 hover:underline hover:text-emerald-600">It exists so that the next distortion cannot pretend it was the first</Link>.</div>

            </div>

        </section>
    );
}

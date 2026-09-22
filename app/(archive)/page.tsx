// app/(archive)/page.tsx

import Link from "next/link";
import Icon from "@/components/Icon";
import ArchiveVideos from "@/components/ArchiveVideos";
import PrimaryTransmission from "@/components/PrimaryTransmission";
import DeadmanReveal from "@/components/DeadmanReveal";
import LegalFund from "@/components/LegalFund";
import SunlightCard from "@/components/SunlightCard";
import OutreachNavigation from "@/components/OutreachNavigation";
import TestimonyCard from "@/components/TestimonyCard";
import WhatVolunteersDeserve from "@/components/WhatVolunteersDeserve";
import PriceOfTheRecord from "@/components/PriceOfTheRecord";
import RecordIndexCard from "@/components/RecordIndexCard";
import QueryableRecord from "@/components/QueryableRecord";
import CaseTimeline from "@/components/CaseTimeline";
import { FAILURE_TRANSMISSION } from "@/data/20260405";
import { LEGAL_FUND_TRANSMISSION } from "@/data/20260829";
import { THREADS } from "@/data/threads";
import { FAQ_QUESTIONS } from "@/data/faq";

export default function OverviewPage() {
    return (
        <section className="w-full mx-auto">

            {/* DEADMAN RELEASE — renders nothing until the switch fires */}
            <DeadmanReveal />

            {/* WELCOME AND TESTIMONY — one introduction to the complete account */}
            <TestimonyCard />


            {/* THE PRICE OF THE RECORD — what each agency is holding, and how */}
            <PriceOfTheRecord />


            {/* WHAT EVERY VOLUNTEER DESERVES — five empty boxes */}
            <WhatVolunteersDeserve />


            {/* THE CASE, IN THEIR DOCUMENTS */}
            <CaseTimeline />


            {/* SUNLIGHT — their words, next to the record */}
            <SunlightCard />


            {/* INSTITUTIONAL OUTREACH — routes for the record */}
            <OutreachNavigation homepage />


            {/* THE LEGAL FUND — announcement, thermometer, and door in one card */}
            <LegalFund />

            {/* QUESTIONS */}
            <div className="mt-4 rounded-xl border border-slate-200 bg-white p-6">
                <h2 className="text-center text-lg font-bold tracking-wide">
                    <Link href="/faq" className="text-emerald-900 transition-colors hover:text-emerald-700">COMMON QUESTIONS ANSWERED HERE</Link>
                </h2>
                <div className="mt-4 sm:pl-10">
                    <div className="grid grid-cols-1 gap-y-2.5 text-base">
                        {FAQ_QUESTIONS.map((q) => (
                            <Link
                                key={q.id}
                                href={`/faq#${q.id}`}
                                className="block text-emerald-700 underline decoration-emerald-200 transition-colors hover:text-emerald-600 hover:decoration-emerald-500"
                            >
                                {q.question}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>


            {/* THE OPRD RECORD — door to the live cluster and its six readings */}
            <RecordIndexCard />


            {/* THE QUERYABLE RECORD — human door and machine door */}
            <div className="mt-4">
                <QueryableRecord />
            </div>



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

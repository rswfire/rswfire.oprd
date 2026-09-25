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
import AiCard from "@/components/AiCard";
import SpreadCard from "@/components/SpreadCard";
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



            {/* Everything from here down runs the full width of the page.
                The sidebar column has ended by this point, so the cards
                reach back across the 280px nav column and its 2rem gutter
                rather than leaving that space empty. Desktop only; the
                single-column layout below md is untouched. */}
            <div className="md:-ml-[312px]">

            {/* WHAT EVERY VOLUNTEER DESERVES — five empty boxes */}
            <WhatVolunteersDeserve />


            {/* HOW IT SPREAD — a job application to nine institutions */}
            <SpreadCard />


            {/* THE CASE, IN THEIR DOCUMENTS */}
            <CaseTimeline />


            {/* THE PRICE OF THE RECORD — what each agency is holding, and how */}
            <PriceOfTheRecord />


            {/* SUNLIGHT — their words, next to the record */}
            <SunlightCard />


            {/* INSTITUTIONAL OUTREACH — routes for the record */}
            <OutreachNavigation homepage />


            {/* THE LEGAL FUND — announcement, thermometer, and door in one card */}
            <LegalFund />

            {/* DOES THIS PROJECT USE AI — the question, answered directly */}
            <AiCard />


            {/* THE OPRD RECORD — door to the live cluster and its six readings */}
            <RecordIndexCard />


            {/* THE QUERYABLE RECORD — human door and machine door */}
            <div className="mt-4">
                <QueryableRecord />
            </div>



            {/* ARCHIVE VIDEOS */}
            <ArchiveVideos/>

            <div className="mt-4 p-8 bg-emerald-50 border border-emerald-200 rounded-2xl shadow-sm">

                <div className="mx-auto w-full max-w-4xl">
                <h2 className="text-lg font-bold tracking-wide">
                    <Link href="/faq" className="text-emerald-900 transition-colors hover:text-emerald-700">FREQUENTLY ASKED QUESTIONS</Link>
                </h2>
                <div className="mt-4 grid grid-cols-1 gap-y-2.5 text-base">
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

                <hr className="my-6 border-t border-emerald-200" />

                <h2 className="text-lg font-bold tracking-wide text-emerald-900">
                    THIS ARCHIVE IS NOT FOR REVENGE.
                </h2>

                <div className="mt-4">It is for those who have been told they imagined it.</div>
                <div>It is for those about to walk into something similar.</div>
                <div>It is for the future, when denial no longer holds.</div>

                <div className="mt-4">It does not ask for apology. It does not ask for repair.</div>
                <div>It exists so that the next distortion cannot pretend it was the first.</div>
                </div>

            </div>

            </div>

        </section>
    );
}

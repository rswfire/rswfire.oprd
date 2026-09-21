// app/(archive)/page.tsx

import Link from "next/link";
import Icon from "@/components/Icon";
import ArchiveVideos from "@/components/ArchiveVideos";
import PrimaryTransmission from "@/components/PrimaryTransmission";
import DeadmanReveal from "@/components/DeadmanReveal";
import LegalFund from "@/components/LegalFund";
import SunlightCard from "@/components/SunlightCard";
import TestimonyCard from "@/components/TestimonyCard";
import WhatVolunteersDeserve from "@/components/WhatVolunteersDeserve";
import PriceOfTheRecord from "@/components/PriceOfTheRecord";
import RecordIndexCard from "@/components/RecordIndexCard";
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
                <div className="mb-4 text-xs font-bold uppercase tracking-widest text-emerald-700">
                    Welcome
                </div>
                <p className="text-lg leading-relaxed text-gray-800">
                    I&rsquo;m Sam. I was a Boy Scout in my youth. I have lived by what it taught
                    me ever since, and I brought that to a state park that claims to be the same
                    thing. I was a volunteer park host for the Oregon Parks &amp; Recreation
                    Department, and it
                    is not that.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-gray-800">
                    This archive answers the
                    question: <span className="font-semibold">what happens if something goes
                    wrong?</span>{" "}
                    The record&rsquo;s answer: there is no process. A supervisor&rsquo;s account
                    is the only account, and there is no mechanism by which it can be questioned.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-gray-800">
                    Volunteers serve with no written standards, no notice, no hearing, no appeal,
                    no protection from retaliation. There are characterizations. There are
                    accusations never put in writing. There is a permanent statewide ban. And
                    where there is contemporaneous documentation the institution cannot disappear,
                    there is force: investigation, police at the door.</p>
                <p className="mt-4 text-lg leading-relaxed text-gray-800">
                    Director Lisa Sumption has stewarded this agency for more than a decade.
                    I wrote her{" "}
                    <a href="https://rswfire.com/library/signal/01M1YH9QSRTJYYQCC4QKX81T7N" target="_blank" rel="noopener" className="text-emerald-800 underline hover:text-emerald-600">a letter</a>{" "}
                    documenting her choices, past and future. She is the one who can protect
                    you. She is the one choosing not to.
                </p>
            </div>

            {/* TESTIMONY — his life, every chapter a door */}
            <TestimonyCard />


            {/* THE PRICE OF THE RECORD — what each agency is holding, and how */}
            <PriceOfTheRecord />


            {/* WHAT EVERY VOLUNTEER DESERVES — five empty boxes */}
            <WhatVolunteersDeserve />


            {/* THE CASE, IN THEIR DOCUMENTS */}
            <CaseTimeline />


            {/* SUNLIGHT — their words, next to the record */}
            <SunlightCard />


            {/* THE LEGAL FUND — announcement, thermometer, and door in one card */}
            <LegalFund />


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

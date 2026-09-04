// app/(archive)/page.tsx

import Link from "next/link";
import Icon from "@/components/Icon";
import ArchiveVideos from "@/components/ArchiveVideos";
import PrimaryTransmission from "@/components/PrimaryTransmission";
import DeadmanReveal from "@/components/DeadmanReveal";
import NewsletterSignup from "@/components/NewsletterSignup";
import LegalFund from "@/components/LegalFund";
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

            {/* THE CASE, IN THEIR DOCUMENTS */}
            <CaseTimeline />

            {/* THE LEGAL FUND — announcement, thermometer, and door in one card */}
            <LegalFund />


            {/* THE QUERYABLE RECORD — human door and machine door */}
            <div className="mt-4">
                <QueryableRecord />
            </div>


            {/* THE LEGAL FUND ANNOUNCEMENT — the video, with transcript */}
            <div className="mt-4">
                <PrimaryTransmission transmission={LEGAL_FUND_TRANSMISSION} />
            </div>

            {/* ACCOUNTABILITY */}
            <div className="mt-4 p-6 rounded-xl bg-emerald-50 border border-emerald-200">

                <div className="rounded-lg overflow-hidden border border-emerald-200 divide-y divide-emerald-100 bg-white">
                    {THREADS.map((t) => (
                        <Link
                            key={t.slug}
                            href={`/accountability/${t.slug}`}
                            className="group flex flex-col min-[400px]:flex-row min-[400px]:items-center min-[400px]:justify-between gap-1.5 min-[400px]:gap-6 px-4 py-3.5 hover:bg-emerald-50 transition-colors"
                        >
                            <span className="min-w-0">
                                <span className="block text-sm font-semibold text-emerald-900 group-hover:text-emerald-700 transition-colors">{t.title}</span>
                                <span className="mt-0.5 block text-xs uppercase tracking-wider text-gray-400">{t.filings.length} documents</span>
                            </span>
                            <span className="text-sm text-gray-800 min-[400px]:text-right">
                                {t.status}
                                <span className="ml-1.5 text-emerald-700 group-hover:translate-x-0.5 inline-block transition-transform">&rarr;</span>
                            </span>
                        </Link>
                    ))}
                </div>

            </div>

            {/* NEWSLETTER */}
            <NewsletterSignup />

            {/* QUESTIONS */}
            <div className="mt-4 p-6 rounded-xl bg-white border border-slate-200">

                <h2 className="font-bold text-lg tracking-wide text-center">
                    <Link href="/faq" className="text-emerald-900 hover:text-emerald-700 transition-colors">COMMON QUESTIONS ANSWERED HERE</Link>
                </h2>

                <div className="mt-4 sm:pl-10">
                    <div className="grid grid-cols-1 gap-y-2.5 text-base">
                        {FAQ_QUESTIONS.map((q) => (
                            <Link
                                key={q.id}
                                href={`/faq#${q.id}`}
                                className="block text-emerald-700 underline decoration-emerald-200 hover:text-emerald-600 hover:decoration-emerald-500 transition-colors"
                            >
                                {q.question}
                            </Link>
                        ))}
                    </div>
                </div>

            </div>
            {/* THE DISPLACEMENT FRAMEWORK */}
            <div className="mt-4 p-6 rounded-xl bg-red-50 border border-red-200">

                <h2 className="font-bold text-lg tracking-wide">
                    <Link href="/displacement" className="text-red-900 hover:text-red-700 transition-colors">THE DISPLACEMENT FRAMEWORK</Link>
                </h2>

                <div className="mt-4 text-base leading-relaxed">
                    <strong>This is not a story about one park.</strong> It is about the architecture that made it possible. The structure underneath the individual choices. The mechanism that runs on volunteers at state parks and libraries and hospitals and schools &mdash; anywhere unpaid labor meets institutional authority and there is no one whose job it is to protect the person giving the labor freely.
                </div>

                <div className="mt-6 space-y-2 text-sm">
                    <Link href="/displacement#origin" className="block text-red-700 underline hover:text-red-600">1. The Origin Event</Link>
                    <Link href="/displacement#escalation" className="block text-red-700 underline hover:text-red-600">2. The Escalation Response</Link>
                    <Link href="/displacement#trust" className="block text-red-700 underline hover:text-red-600">3. Trust Recruitment</Link>
                    <Link href="/displacement#coercion" className="block text-red-700 underline hover:text-red-600">4. The Coercion Meeting</Link>
                    <Link href="/displacement#surveillance" className="block text-red-700 underline hover:text-red-600">5. Assessment &amp; Surveillance</Link>
                    <Link href="/displacement#dismissal" className="block text-red-700 underline hover:text-red-600">6. Dismissal Without Process</Link>
                    <Link href="/displacement#expulsion" className="block text-red-700 underline hover:text-red-600">7. Expulsion &amp; Retaliation</Link>
                    <Link href="/displacement#containment" className="block text-red-700 underline hover:text-red-600">8. Institutional Containment</Link>
                    <Link href="/displacement#police" className="block text-red-700 underline hover:text-red-600">9. Police Intimidation</Link>
                </div>

                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 rounded-lg overflow-hidden border border-red-200">
                    <Link href="/displacement#requires" className="block py-2.5 text-center text-xs font-semibold uppercase tracking-widest text-red-700 bg-white hover:bg-red-100 transition-colors sm:border-r border-b sm:border-b-0 border-red-200">What It Requires</Link>
                    <Link href="/displacement#breaks" className="block py-2.5 text-center text-xs font-semibold uppercase tracking-widest text-red-700 bg-white hover:bg-red-100 transition-colors">What Breaks It</Link>
                </div>

                <div className="mt-4">
                    <Link href="/for-volunteers" className="block text-lg text-red-700 hover:text-red-600 font-semibold text-center">If this happened to you, it has a name.</Link>
                </div>

            </div>

            {/* ARCHIVE VIDEOS */}
            <ArchiveVideos/>

            <div className="mt-8 p-8 bg-emerald-50 border border-emerald-200 rounded-2xl shadow-sm">

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

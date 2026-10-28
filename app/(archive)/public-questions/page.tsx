// app/(archive)/public-questions/page.tsx
//
// The public questions: one at a time, put to the State of Oregon in public
// records requests. Each has its own register and its own page.

import type { Metadata } from "next";
import Link from "next/link";
import SectionPage from "@/components/SectionPage";
import { QUESTIONS } from "@/data/questions";
import { AGENCIES } from "@/data/tracker";
import { QUESTION_2_AGENCIES } from "@/data/questions";

export const metadata: Metadata = {
    title: "Public Questions",
    description: "Questions put to the State of Oregon in public records requests, each tracked from the day it is sent to the day it is answered.",
};

const CLOSED = new Set(["no-records", "denied", "produced"]);

function Count({ n }: { n: number }) {
    const rows = n === 1 ? AGENCIES : QUESTION_2_AGENCIES;
    const sent = rows.filter((a) => a.entry.status !== "not-sent").length;
    const answered = rows.filter((a) => CLOSED.has(a.entry.status)).length;
    return (
        <span className="tabular-nums">
            {sent} {sent === 1 ? "request" : "requests"} sent · {answered} answered
        </span>
    );
}

export default function PublicQuestionsPage() {
    return (
        <SectionPage
            emblem="MailQuestionMark" tone="sky"
            title="PUBLIC QUESTIONS"
            subtitle="RECORDS REQUESTS"
        >
            <div className="mb-8 text-base">
                A question is asked of the State of Oregon in public records requests, and every answer is published: the acknowledgment, the estimate, the denial, the production, or the silence.
            </div>

            <ol className="not-prose space-y-5">
                {QUESTIONS.map((q) => (
                    <li key={q.n}>
                        <Link
                            href={q.href}
                            className="group block rounded-2xl border border-gray-300 bg-white p-6 transition-colors hover:border-sky-400 hover:bg-sky-50/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-600"
                        >
                            <div className="text-[10px] font-bold uppercase tracking-widest text-sky-700">Public Question {q.n}</div>
                            <h2 className="mt-2 text-xl sm:text-2xl font-semibold leading-snug text-gray-900 group-hover:text-emerald-800">
                                {q.question}
                            </h2>
                            <p className="mt-3 text-sm leading-relaxed text-gray-700">{q.asked}</p>
                            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-gray-500">
                                <span>Opened {q.opened}</span>
                                <Count n={q.n} />
                                <span className="ml-auto font-semibold text-emerald-800 group-hover:underline">The question →</span>
                            </div>
                        </Link>
                    </li>
                ))}
            </ol>
        </SectionPage>
    );
}

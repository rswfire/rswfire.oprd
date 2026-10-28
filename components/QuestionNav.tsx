// components/QuestionNav.tsx
//
// The row of questions at the top of each question's page: which one this
// is, and a step to every other. The index at /public-questions lists them
// in full.

import Link from "next/link";
import { QUESTIONS } from "@/data/questions";

export default function QuestionNav({ n }: { n: number }) {
    return (
        <nav aria-label="Public questions" className="not-prose mb-6 flex flex-wrap items-center gap-2 text-xs">
            <Link href="/public-questions" className="font-semibold uppercase tracking-widest text-gray-500 hover:text-emerald-700">
                Public Questions
            </Link>
            {QUESTIONS.map((q) => (
                q.n === n ? (
                    <span key={q.n} aria-current="page" className="rounded-full bg-sky-700 px-2.5 py-1 font-semibold text-white">
                        Question {q.n}
                    </span>
                ) : (
                    <Link key={q.n} href={q.href} className="rounded-full bg-white px-2.5 py-1 font-semibold text-gray-600 ring-1 ring-inset ring-gray-200 hover:bg-gray-50">
                        Question {q.n}
                    </Link>
                )
            ))}
        </nav>
    );
}

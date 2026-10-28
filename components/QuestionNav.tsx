// components/QuestionNav.tsx
//
// At the top of each question's page: the way back to the list, and every
// question by name, the current one marked. The list itself is at
// /public-questions.

import Link from "next/link";
import Icon from "@/components/Icon";
import { QUESTIONS } from "@/data/questions";

export default function QuestionNav({ n }: { n: number }) {
    return (
        <nav aria-label="Public questions" className="not-prose mb-10 rounded-2xl border border-sky-200 bg-sky-50/50 p-5 sm:p-6">
            <Link
                href="/public-questions"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-sky-800 hover:text-emerald-800"
            >
                <Icon name="MailQuestionMark" size={16} strokeWidth={2.25} aria-hidden />
                <span className="underline decoration-sky-300 underline-offset-4 group-hover:decoration-emerald-600">All public questions</span>
            </Link>

            <ol className="mt-4 space-y-2.5">
                {QUESTIONS.map((q) => {
                    const current = q.n === n;
                    const inner = (
                        <>
                            <span
                                className={`mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[11px] font-bold ${
                                    current ? "bg-sky-700 text-white" : "bg-white text-sky-800 ring-1 ring-inset ring-sky-300"
                                }`}
                            >
                                {q.n}
                            </span>
                            <span className={`text-[15px] leading-snug ${current ? "font-semibold text-gray-900" : "text-gray-700"}`}>
                                {q.question}
                            </span>
                        </>
                    );
                    return (
                        <li key={q.n}>
                            {current ? (
                                <div aria-current="page" className="flex items-start gap-3 rounded-xl bg-white px-3.5 py-2.5 ring-1 ring-inset ring-sky-300">
                                    {inner}
                                </div>
                            ) : (
                                <Link href={q.href} className="flex items-start gap-3 rounded-xl px-3.5 py-2.5 transition-colors hover:bg-white hover:ring-1 hover:ring-inset hover:ring-sky-200">
                                    {inner}
                                </Link>
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
}

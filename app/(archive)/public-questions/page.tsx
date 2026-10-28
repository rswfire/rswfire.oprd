// app/(archive)/public-questions/page.tsx
//
// Public Questions has its own site. This page sends the reader there and
// keeps the archive's registers for the two questions linked, since the
// documents are cited throughout the archive by their ULIDs.

import type { Metadata } from "next";
import SectionPage from "@/components/SectionPage";
import Icon from "@/components/Icon";

export const metadata: Metadata = {
    title: "Public Questions",
    description: "Questions put to the State of Oregon in public records requests, every answer published. Now at openrecordsoregon.org.",
};

const SITE = "https://openrecordsoregon.org";

export default function PublicQuestionsPage() {
    return (
        <SectionPage
            emblem="MailQuestionMark" tone="sky"
            title="PUBLIC QUESTIONS"
            subtitle="RECORDS REQUESTS"
        >
            <a
                href={SITE}
                className="not-prose group block rounded-2xl border border-sky-300 bg-gradient-to-br from-sky-50 to-white p-6 sm:p-8 shadow-sm transition-shadow hover:shadow-md"
            >
                <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-sky-700 text-white">
                        <Icon name="MailQuestionMark" size={28} strokeWidth={1.75} aria-hidden />
                    </div>
                    <div className="min-w-0">
                        <div className="text-[10px] font-bold uppercase tracking-widest text-sky-700">Now at its own address</div>
                        <div className="mt-1 text-2xl font-semibold leading-tight text-gray-900 group-hover:text-sky-800">openrecordsoregon.org</div>
                        <p className="mt-3 text-sm leading-relaxed text-gray-700">
                            The questions are not about one volunteer. They are about how the state answers anyone, and they have outgrown this archive. Every question, its tracker, and its register now live there, with the case for reform coming soon.
                        </p>
                        <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-sky-800 group-hover:underline">
                            Go to Open Records Oregon
                            <Icon name="ChevronDown" size={16} className="-rotate-90" aria-hidden />
                        </div>
                    </div>
                </div>
            </a>

        </SectionPage>
    );
}

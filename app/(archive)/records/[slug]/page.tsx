import type { Metadata } from "next";
import SectionPage from "@/components/SectionPage";
import RecordsThread from "@/components/RecordsThread";
import { THREADS } from "@/data/threads";
import Icon from "@/components/Icon";

// Public Questions moved to the records project. Its registers are kept
// there; this archive's copies stopped on October 28, 2026.
const MOVED: Record<string, string> = {
    "public-question-1": "https://openrecordsoregon.org/records/public-question-1",
    "public-question-2": "https://openrecordsoregon.org/records/public-question-2",
};

export function generateStaticParams() {
    return THREADS.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const thread = THREADS.find((t) => t.slug === slug);
    if (!thread) return {};
    return {
        title: thread.title,
        description: thread.summary[0],
    };
}

export default async function ThreadPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const idx = THREADS.findIndex((t) => t.slug === slug);
    const thread = THREADS[idx];
    if (!thread) return null;
    const next = THREADS[idx + 1];

    return (
        <SectionPage
            emblem="Newspaper" tone="emerald"
            title={thread.agency.toUpperCase()}
            subtitle={thread.matter.toUpperCase()}
            previousPage={{ href: "/records", label: "The Records" }}
            nextPage={next ? { href: `/records/${next.slug}`, label: next.title } : undefined}
        >
            {MOVED[slug] ? (
                <a
                    href={MOVED[slug]}
                    className="not-prose group block rounded-2xl border border-sky-300 bg-gradient-to-br from-sky-50 to-white p-6 sm:p-8 shadow-sm transition-shadow hover:shadow-md"
                >
                    <div className="text-[10px] font-bold uppercase tracking-widest text-sky-700">This register has moved</div>
                    <p className="mt-2 text-sm leading-relaxed text-gray-700">
                        {thread.title} is kept at OpenRecordsOregon.org, where every answer is filed as it arrives.
                    </p>
                    <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-sky-800 group-hover:underline">
                        Go to the {thread.title} register
                        <Icon name="ChevronDown" size={16} className="-rotate-90" aria-hidden />
                    </div>
                </a>
            ) : (
                <RecordsThread thread={thread} />
            )}
        </SectionPage>
    );
}

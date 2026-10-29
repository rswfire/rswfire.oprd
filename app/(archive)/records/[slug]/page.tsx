import type { Metadata } from "next";
import SectionPage from "@/components/SectionPage";
import RecordsThread from "@/components/RecordsThread";
import { THREADS } from "@/data/threads";
import RecordsProjectCard from "@/components/RecordsProjectCard";

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
                <RecordsProjectCard href={MOVED[slug]} label="This register has moved" cta={`Go to the ${thread.title} register`}>
                    {thread.title} is kept at OpenRecordsOregon.org, where every answer is filed as it arrives.
                </RecordsProjectCard>
            ) : (
                <RecordsThread thread={thread} />
            )}
        </SectionPage>
    );
}

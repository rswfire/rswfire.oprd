import type { Metadata } from "next";
import SectionPage from "@/components/SectionPage";
import RecordsThread from "@/components/RecordsThread";
import { THREADS } from "@/data/threads";

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
            title={thread.agency.toUpperCase()}
            subtitle={thread.matter.toUpperCase()}
            previousPage={{ href: "/accountability", label: "Accountability" }}
            nextPage={next ? { href: `/accountability/${next.slug}`, label: next.title } : undefined}
        >
            <RecordsThread thread={thread} />
        </SectionPage>
    );
}

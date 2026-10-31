// app/(archive)/public-questions/[n]/page.tsx
//
// Each question moved to the records project with the rest of Public
// Questions. Its old address here says so and links to it there.

import type { Metadata } from "next";
import { withShare } from "@/lib/share";
import SectionPage from "@/components/SectionPage";
import RecordsProjectCard from "@/components/RecordsProjectCard";

const QUESTIONS = ["1", "2"];

export function generateStaticParams() {
    return QUESTIONS.map((n) => ({ n }));
}

export async function generateMetadata({ params }: { params: Promise<{ n: string }> }): Promise<Metadata> {
    const { n } = await params;
    return withShare({ title: `Public Question ${n}`, description: `Public Question ${n} is kept at OpenRecordsOregon.org.` });
}

export default async function MovedQuestionPage({ params }: { params: Promise<{ n: string }> }) {
    const { n } = await params;
    const href = `https://openrecordsoregon.org/records/r${n}/`;
    return (
        <SectionPage emblem="MailQuestionMark" tone="sky" title={`PUBLIC QUESTION ${n}`}>
            <RecordsProjectCard href={href} label="This question has moved" cta={`Go to Public Question ${n}`}>
                Public Question {n} is kept at OpenRecordsOregon.org, where every answer is filed as it arrives.
            </RecordsProjectCard>
        </SectionPage>
    );
}

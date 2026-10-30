// app/(archive)/public-questions/page.tsx
//
// Public Questions has its own site. This page sends the reader there and
// keeps the archive's registers for the two questions linked, since the
// documents are cited throughout the archive by their ULIDs.

import type { Metadata } from "next";
import { withShare } from "@/lib/share";
import SectionPage from "@/components/SectionPage";
import RecordsProjectCard, { SiteName } from "@/components/RecordsProjectCard";

export const metadata: Metadata = withShare({
    title: "Public Questions",
    description: "Questions put to the State of Oregon in public records requests, every answer published. Now at OpenRecordsOregon.org.",
});

const SITE = "https://openrecordsoregon.org";

export default function PublicQuestionsPage() {
    return (
        <SectionPage
            emblem="MailQuestionMark" tone="sky"
            title="PUBLIC QUESTIONS"
        >
            <RecordsProjectCard href={SITE} label="Now at its own address" cta={<>Go to <SiteName bold={false} /></>}>
                The questions are not about one volunteer. They are about how the state answers anyone, and they have outgrown this archive. The case for reform is coming.
            </RecordsProjectCard>

        </SectionPage>
    );
}

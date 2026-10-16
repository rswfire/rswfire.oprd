// components/system/SystemBody.tsx
//
// System: the State of Oregon, mapped as a system. The opening card. The
// patterns and the side-by-side are stashed in SystemStash for later; the
// seats are on Key Individuals. Versioned like the Testimony.
import SectionPage from "@/components/SectionPage";
import NextPerson from "@/components/system/NextPerson";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function SystemBody(_: { version: string; isCurrent: boolean }) {
    return (
        <SectionPage
            emblem="Map"
            tone="emerald"
            title="THE STATE OF OREGON"
            subtitle="MAPPED AS A SYSTEM"
        >
            <div className="not-prose">
                <NextPerson />
            </div>
        </SectionPage>
    );
}

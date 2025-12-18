// app/(archive)/correspondence/page.tsx
import type { Metadata } from "next";
import SectionPage from "@/components/SectionPage";

export const metadata: Metadata = {
    title: "Correspondence",
    description: "External outreach, press contacts, and formal complaints documenting institutional escalation.",
};

export default function CorrespondencePage() {
    return (
        <SectionPage
            title="CORRESPONDENCE"
            subtitle="PRESS OUTREACH & FORMAL COMPLAINTS"
        >
            <div className="mt-8 p-6 bg-emerald-50 border-l-4 border-emerald-600 rounded-r-lg">
                <div className="text-base">
                    This section documents external escalation following institutional failure.
                </div>
                <div className="mt-2">
                    Every contact, every filing, every outreach attempt is recorded here with full correspondence viewable.
                </div>
            </div>

            <hr className="my-6 border-t border-gray-300" />

            <div className="mt-8 text-center text-gray-500 italic">
                Content in progress.
            </div>
        </SectionPage>
    );
}
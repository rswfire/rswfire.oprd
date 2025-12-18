// app/(archive)/correspondence/general/page.tsx
import type { Metadata } from "next";
import SectionPage from "@/components/SectionPage";
import CorrespondenceTable from "@/components/CorrespondenceTable";
import correspondenceData from "@/public/correspondence/index.json";

export const metadata: Metadata = {
    title: "General Correspondence",
    description: "Communication with advocacy organizations, research contacts, and other parties with relevant interest in documented institutional dysfunction and systemic accountability failures.",
};

export default function GeneralPage() {
    return (
        <SectionPage
            title="GENERAL CORRESPONDENCE"
            subtitle="ADVOCACY AND RESEARCH OUTREACH"
        >
            <div className="mt-8 p-6 bg-emerald-50 border-l-4 border-emerald-600 rounded-r-lg">
                <div className="text-base">
                    Communication with advocacy organizations, research contacts, and other parties with relevant interest in documented institutional dysfunction and systemic accountability failures.
                </div>
            </div>

            <hr className="my-6 border-t border-gray-300" />

            <CorrespondenceTable items={correspondenceData.general} category="general" />
        </SectionPage>
    );
}
// app/(archive)/correspondence/complaints/page.tsx
import type { Metadata } from "next";
import SectionPage from "@/components/SectionPage";
import CorrespondenceTable from "@/components/CorrespondenceTable";
import correspondenceData from "@/public/correspondence/index.json";

export const metadata: Metadata = {
    title: "Formal Complaints",
    description: "Official filings with oversight bodies, civil rights organizations, and legal advocacy groups.",
};

export default function ComplaintsPage() {
    return (
        <SectionPage
            title="FORMAL COMPLAINTS"
            subtitle="OFFICIAL FILINGS WITH OVERSIGHT BODIES"
        >
            <div className="mt-8 p-6 bg-emerald-50 border-l-4 border-emerald-600 rounded-r-lg">
                <div className="text-base">
                    Official complaints filed with civil rights organizations, legal advocacy groups, and government oversight agencies documenting institutional failure to address documented abuse and retaliation.
                </div>
            </div>

            <hr className="my-6 border-t border-gray-300" />

            <CorrespondenceTable items={correspondenceData.complaints} category="complaints" />
        </SectionPage>
    );
}
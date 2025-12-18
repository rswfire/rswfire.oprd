// app/(archive)/correspondence/institution/page.tsx
import type { Metadata } from "next";
import SectionPage from "@/components/SectionPage";
import CorrespondenceTable from "@/components/CorrespondenceTable";
import correspondenceData from "@/public/correspondence/index.json";

export const metadata: Metadata = {
    title: "Institutional Dialogue",
    description: "Communication with OPRD leadership, Governor Kotek's office, and state officials documenting every attempt at internal resolution and the institutional responses that followed.",
};

export default function InstitutionPage() {
    return (
        <SectionPage
            title="INSTITUTIONAL DIALOGUE"
            subtitle="DIRECT COMMUNICATION WITH STATE OFFICIALS"
        >
            <div className="mt-8 p-6 bg-emerald-50 border-l-4 border-emerald-600 rounded-r-lg">
                <div className="text-base">
                    Communication with OPRD leadership, Governor Kotek's office, and state officials documenting every attempt at internal resolution and the institutional responses that followed.
                </div>
            </div>

            <hr className="my-6 border-t border-gray-300" />

            <CorrespondenceTable items={correspondenceData.institution} category="institution" />
        </SectionPage>
    );
}
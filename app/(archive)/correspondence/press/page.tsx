// app/(archive)/correspondence/press/page.tsx
import type { Metadata } from "next";
import SectionPage from "@/components/SectionPage";
import CorrespondenceTable from "@/components/CorrespondenceTable";
import correspondenceData from "@/public/correspondence/index.json";

export const metadata: Metadata = {
    title: "Press Communications",
    description: "Outreach to journalists, editorial boards, and news organizations covering state government, LGBTQ+ issues, and institutional accountability in Oregon.",
};

export default function PressPage() {
    return (
        <SectionPage
            title="PRESS COMMUNICATIONS"
            subtitle="MEDIA OUTREACH AND JOURNALISM CONTACT"
        >
            <div className="mt-8 p-6 bg-emerald-50 border-l-4 border-emerald-600 rounded-r-lg">
                <div className="text-base">
                    Outreach to journalists, editorial boards, and news organizations covering state government, LGBTQ+ issues, and institutional accountability in Oregon.
                </div>
            </div>

            <hr className="my-6 border-t border-gray-300" />

            <CorrespondenceTable items={correspondenceData.press} category="press" />
        </SectionPage>
    );
}
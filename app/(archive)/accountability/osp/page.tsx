import type { Metadata } from "next";
import SectionPage from "@/components/SectionPage";
import RecordsThread from "@/components/RecordsThread";
import { OSP_THREAD } from "@/data/threads";

export const metadata: Metadata = {
    title: "Oregon State Police — PR27478",
    description:
        "The public records concerning the March 24, 2026 visit — request, denial, the record that surfaced anyway, and the petition before the Oregon Attorney General.",
};

export default function OspThreadPage() {
    return (
        <SectionPage
            title="OREGON STATE POLICE"
            subtitle="PUBLIC RECORDS REQUEST PR27478"
            previousPage={{ href: "/accountability", label: "Accountability" }}
            nextPage={{ href: "/evidence/police", label: "Police Intimidation" }}
        >
            <RecordsThread thread={OSP_THREAD} />
        </SectionPage>
    );
}

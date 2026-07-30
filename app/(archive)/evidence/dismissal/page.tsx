import type { Metadata } from "next";
import SectionPage from "@/components/SectionPage";
import PrimaryTransmission from "@/components/PrimaryTransmission";
import EvidenceTabs from "@/components/EvidenceTabs";
import AccountabilityRecord, { byUlids } from "@/components/AccountabilityRecord";
import { DISMISSAL_EXPLOITATION } from "@/data/exploitation";
import { DISMISSAL_TRANSMISSION } from "@/data/20250324";

export const metadata: Metadata = {
    title: "Dismissal",
    description: "March 24, 2025 - Dismissed without paperwork or cause, six days before scheduled completion.",
};

export default function DismissalPage() {
    return (
        <SectionPage
            title="DISMISSAL WITHOUT PROCESS"
            subtitle="PARK MANAGER"
            previousPage={{ href: "/evidence/surveillance", label: "Assessment & Surveillance" }}
            nextPage={{ href: "/evidence/expulsion", label: "Expulsion & Retaliation" }}
            summary="The park manager dismissed me by phone six days before my scheduled completion, using fabricated pretenses with no formal documentation."

        >

            <EvidenceTabs exploitation={DISMISSAL_EXPLOITATION} stage="dismissal" />

            <PrimaryTransmission transmission={DISMISSAL_TRANSMISSION} defaultExpanded />

            <AccountabilityRecord
                heading="The dismissal, on the accountability pages"
                intro="The written record of March 24–26, 2025. Each document opens here and links to its place on the accountability pages."
                items={byUlids(
                    "01JQ4J1GCGYPQ669RHG3WCHFT4",
                    "01JQ51JFPRZVFQ28F1R1ASPWNE",
                    "01JQ5ES9ZGPRFAZ2AFRK83PCV8",
                    "01JQ8HA5JRRCWX12W7B52YRVAT",
                )}
            />

        </SectionPage>
    );
}

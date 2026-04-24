import type { Metadata } from "next";
import SectionPage from "@/components/SectionPage";
import PrimaryTransmission from "@/components/PrimaryTransmission";
import DisplacementStage from "@/components/DisplacementStage";
import ExploitationSection from "@/components/ExploitationSection";
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
            subtitle="RYAN WARREN, PARK MANAGER"
            previousPage={{ href: "/evidence/surveillance", label: "Assessment & Surveillance" }}
            nextPage={{ href: "/evidence/expulsion", label: "Expulsion & Retaliation" }}
            summary="Ryan Warren dismissed me by phone six days before my scheduled completion, using fabricated pretenses with no formal documentation."

        >

            <ExploitationSection content={DISMISSAL_EXPLOITATION} />

            <DisplacementStage stage="dismissal" />

            <PrimaryTransmission transmission={DISMISSAL_TRANSMISSION} defaultExpanded />


        </SectionPage>
    );
}

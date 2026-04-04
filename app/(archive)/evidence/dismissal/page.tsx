import type { Metadata } from "next";
import SectionPage from "@/components/SectionPage";
import TransmissionDisclosure from "@/components/TransmissionDisclosure";
import DisplacementBanner from "@/components/DisplacementBanner";
import ForVolunteersCallout from "@/components/ForVolunteersCallout";
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
            systemMap={{ href: "/system-map#stage-six", label: "Stage Six — Dismissal Without Process", blurb: "The real reason — that the volunteer documented abuse and refused to stop — is never stated. Because stating it creates liability." }}
        >

            <DisplacementBanner stage="dismissal" />
            <ForVolunteersCallout stage={6} summary="No documentation. No cause. No appeal. You were given hours — not days — to vacate. The absence of process is intentional. It leaves you with nothing to challenge and no record to point to." />

            <TransmissionDisclosure transmission={DISMISSAL_TRANSMISSION} defaultExpanded />


        </SectionPage>
    );
}

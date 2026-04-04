// app/(archive)/evidence/coercion/page.tsx
import type { Metadata } from "next";
import SectionPage from "@/components/SectionPage";
import TransmissionDisclosure from "@/components/TransmissionDisclosure";
import DisplacementStage from "@/components/DisplacementStage";
import Link from "next/link";
import { COERCION_TRANSMISSION } from "@/data/20250305";

export const metadata: Metadata = {
    title: "Coercion",
    description: "March 5, 2025 - Over an hour of recorded psychological pressure by Ryan Warren and Kati Baker.",
};

export default function CoercionPage() {
    return (
        <SectionPage
            title="THE COERCION MEETING"
            subtitle="RYAN WARREN, PARK MANAGER &amp; KATI BAKER, PARK SUPERVISOR"
            previousPage={{ href: "/evidence/trust", label: "Trust Recruitment" }}
            nextPage={{ href: "/evidence/surveillance", label: "Assessment & Surveillance" }}
            summary="Ryan Warren and Kati Baker summoned me to a public picnic table for over an hour of psychological pressure designed to force my resignation."

        >

            <DisplacementStage stage="coercion" />

            <h2 className="text-xl font-semibold">MARCH 5, 2025</h2>

            <div className="mt-4">
                Ryan Warren and Kati Baker called me to a meeting at a public picnic table in <Link href="https://stateparks.oregon.gov/index.cfm?do=park.profile&parkId=95" target="_blank" className="underline text-emerald-800 hover:text-emerald-600">Honeyman State Park</Link>'s day-use area. <strong>The entire meeting was recorded</strong>.
            </div>

            <hr className="my-6 border-t border-gray-300" />

            <TransmissionDisclosure transmission={COERCION_TRANSMISSION} defaultExpanded />


        </SectionPage>
    );
}

import type { Metadata } from "next";
import SectionPage from "@/components/SectionPage";
import TransmissionDisclosure from "@/components/TransmissionDisclosure";
import { POLICE_INTIMIDATION_TRANSMISSION } from "@/data/20260324";

export const metadata: Metadata = {
    title: "Police Intimidation",
    description: "March 24, 2026 — One year to the day after dismissal, police arrived behind a locked federal gate.",
};

export default function PoliceIntimidationPage() {
    return (
        <SectionPage
            title="POLICE INTIMIDATION"
            subtitle="BEHIND A LOCKED FEDERAL GATE"
            previousPage={{ href: "/evidence/containment", label: "Institutional Containment" }}
            nextPage={{ href: "/attorney", label: "Seeking Representation" }}
            summary="On March 24, 2026 — exactly one year after Ryan Warren dismissed me from Honeyman State Park — police showed up at my door behind a locked federal gate to intimidate me. I recorded them leaving."
            systemMap={{ href: "/system-map#stage-eleven", label: "Stage Eleven — Police Intimidation", blurb: "When silence fails — when the documentation is public, the archive is growing, and the institution has exhausted every internal mechanism of containment — the system reaches beyond its own walls." }}
        >

            <h2 className="text-xl font-semibold">MARCH 24, 2026 — DAY 365</h2>

            <div className="mt-4">
                One year ago today, Ryan Warren called to dismiss me from Honeyman State Park. One hour later he arrived at my RV, collected the keys, and told me to vacate within 24 hours. No paperwork. No documentation. Just the conversation we had.
            </div>

            <div className="mt-4">
                That was March 24, 2025.
            </div>

            <div className="mt-4">
                On the anniversary of that dismissal, police arrived at a locked federal gate — the entrance to the corridor where I serve as caretaker for the U.S. Forest Service — and came to my door.
            </div>

            <div className="mt-4">
                This is not a public road. It is behind a locked gate on federal land. Access requires authorization.
            </div>

            <div className="mt-4">
                Three officers. No agency identified. They told me they were concerned about what I was posting online. They said I was not in trouble.
            </div>

            <div className="mt-4">
                I recorded them leaving.
            </div>

            <hr className="my-6 border-t border-gray-300" />

            <TransmissionDisclosure transmission={POLICE_INTIMIDATION_TRANSMISSION} defaultExpanded />

        </SectionPage>
    );
}

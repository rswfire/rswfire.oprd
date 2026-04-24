import type { Metadata } from "next";
import SectionPage from "@/components/SectionPage";
import PrimaryTransmission from "@/components/PrimaryTransmission";
import IdentityTracker from "@/components/IdentityTracker";
import PersonLink from "@/components/PersonLink";
import EvidenceTabs from "@/components/EvidenceTabs";
import { POLICE_EXPLOITATION } from "@/data/exploitation";
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
            nextPage={{ href: "/lisa-sumption", label: "The Director's Decisions" }}
            summary="On March 24, 2026 — exactly one year after Ryan Warren dismissed me from Honeyman State Park — police showed up at my door behind a locked federal gate to intimidate me. I recorded them leaving."

        >

            <EvidenceTabs exploitation={POLICE_EXPLOITATION} stage="police" />

            <h2 className="text-xl font-semibold">MARCH 24, 2026</h2>

            <div className="mt-4">
                One year ago today, <PersonLink name="Ryan Warren" /> called to dismiss me from Honeyman State Park. One hour later he arrived at my RV, collected the keys, and told me to vacate within 24 hours. No paperwork. No documentation. Just the conversation we had.
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

            <PrimaryTransmission transmission={POLICE_INTIMIDATION_TRANSMISSION} />

            <hr className="my-6 border-t border-gray-300" />

            <h2 className="text-xl font-semibold">THE INCIDENT REPORT</h2>

            <div className="mt-4 space-y-4 text-base leading-relaxed">
                <p>On March 27, 2026, I filed an official Siuslaw National Forest Host/Caretaker Incident Report documenting the visit as intimidation. The report includes the date, time, location, a narrative description of the encounter, and the license plate number of one of the vehicles: 731 QRV.</p>
            </div>

            <div className="mt-4">
                <a href="/usfs-incident-report.jpg" download className="inline-block px-4 py-2 text-sm font-semibold text-emerald-700 border border-emerald-700 rounded-lg hover:bg-emerald-700 hover:text-white transition-colors">Download Incident Report (JPG) &darr;</a>
            </div>

            <hr className="my-6 border-t border-gray-300" />

            <IdentityTracker />

            <hr className="my-6 border-t border-gray-300" />

            <h2 className="text-xl font-semibold">OREGON STATE POLICE: NO RECORDS</h2>

            <div className="mt-4 space-y-4 text-base leading-relaxed">
                <p>On April 3, 2026, I filed a public records request with Oregon State Police requesting all records related to the March 24 visit — names, badge numbers, unit assignments, all communications related to planning, authorization, or coordination, all communications referencing my name, the archive, or the domain oprdvolunteerabuse.org, any incident reports, case files, or after-action documentation, and all communications between any OSP officer and U.S. Forest Service <PersonLink name="Matthew Oliver" label="Special Agent Matthew Oliver" /> or any Oregon Parks and Recreation Department employee in connection with the visit.</p>
                <p>Oregon State Police responded the same day with a blanket denial: no records responsive to the request.</p>
                <p>The full response from Oregon State Police is available below.</p>
            </div>

            <div className="mt-4">
                <a href="/osp-foia-response-1.pdf" download className="inline-block px-4 py-2 text-sm font-semibold text-emerald-700 border border-emerald-700 rounded-lg hover:bg-emerald-700 hover:text-white transition-colors">Download OSP Public Records Response (PDF) &darr;</a>
            </div>

        </SectionPage>
    );
}

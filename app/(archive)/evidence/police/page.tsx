import type { Metadata } from "next";
import Link from "next/link";
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
            nextPage={{ href: "/accountability", label: "Accountability" }}
            summary="On March 24, 2026 — exactly one year after the park manager dismissed me from Honeyman State Park — police showed up at my door behind a locked federal gate to intimidate me. I recorded them leaving."

        >

            <EvidenceTabs exploitation={POLICE_EXPLOITATION} stage="police" />

            <h2 className="text-xl font-semibold">MARCH 24, 2026</h2>

            <div className="mt-4">
                On March 24, 2025, the <PersonLink name="park manager" /> called to dismiss me from Honeyman State Park. One hour later he arrived at my RV, collected the keys, and told me to vacate within 24 hours. No paperwork. No documentation. &ldquo;Just the conversation we had.&rdquo;
            </div>

            <div className="mt-4">
                One year later, to the day — March 24, 2026 — police came onto the federal land where I live and work as caretaker for the U.S. Forest Service, through a locked gate posted against public access, and knocked on my door.
            </div>

            <div className="mt-4">
                Three officers. No agency identified. They told me they were concerned about what I was posting online. They said I was not in trouble. I declined to speak with them without an attorney and closed my door.
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
                <a href="/usfs-incident-report.jpg" download className="inline-block px-4 py-2 text-sm font-semibold text-emerald-700 border border-emerald-700 rounded-lg hover:bg-emerald-700 hover:text-white transition-colors">Download Incident Report &darr;</a>
            </div>

            <hr className="my-6 border-t border-gray-300" />

            <IdentityTracker />

            <hr className="my-6 border-t border-gray-300" />

            <div className="mt-4 p-6 bg-emerald-50 border-l-4 border-emerald-600 rounded-r-lg">
                <div className="text-xs font-semibold uppercase tracking-widest text-emerald-800">The public record of this visit</div>
                <p className="mt-2 text-base leading-relaxed">
                    I asked Oregon State Police for the records of this visit. What followed &mdash; a &ldquo;no records&rdquo; denial, a record that surfaced anyway, the state&rsquo;s own account of it, and a petition to the Oregon Attorney General &mdash; is documented in full on its own page.
                </p>
                <div className="mt-4">
                    <Link href="/accountability/osp" className="inline-block px-4 py-2 text-sm font-semibold text-emerald-700 border border-emerald-700 rounded-lg hover:bg-emerald-700 hover:text-white transition-colors">Oregon State Police &rarr;</Link>
                </div>
            </div>

        </SectionPage>
    );
}

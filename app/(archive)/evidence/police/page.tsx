import type { Metadata } from "next";
import SectionPage from "@/components/SectionPage";
import PrimaryTransmission from "@/components/PrimaryTransmission";
import IdentityTracker from "@/components/IdentityTracker";
import PersonLink from "@/components/PersonLink";
import EvidenceTabs from "@/components/EvidenceTabs";
import CadRecord from "@/components/CadRecord";
import AccountabilityRecord, { flaggedIn } from "@/components/AccountabilityRecord";
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

            <h2 className="text-xl font-semibold">THE STATE&rsquo;S OWN RECORD</h2>

            <div className="mt-4 text-base leading-relaxed">
                CAD record SP26097765 was the state&rsquo;s first account of this visit: two pages, released in full
                on July 14, 2026, 112 days after the event. This is what it says.
            </div>

            <CadRecord />

            <hr className="my-6 border-t border-gray-300" />

            <h2 className="text-xl font-semibold">THE OPERATION, IN THEIR DOCUMENTS</h2>

            <div className="mt-4 space-y-4 text-base leading-relaxed">
                <p>
                    On September 3, 2026, under public records request PR27478, Oregon State Police produced
                    sixteen files: the case report, a second CAD record, dispatch audio, and the emails in which
                    the visit was planned. The production is filed in full in the{" "}
                    <a href="/accountability/osp/01M1M4WF78XJPEJJ48D1JZ4SJ8" className="underline text-emerald-800 hover:text-emerald-600">accountability record</a>.
                    This is what their documents say.
                </p>
                <p>
                    It began at Oregon Parks and Recreation. On March 3, 2026, OPRD Emergency Manager Jamen Lee
                    wrote to OSP Captain Kyle Kennedy of Government and Media Relations, copying Deputy Director
                    JR Collier: &ldquo;Fyi - sharing for situational awareness since he is now including the Governor
                    as well as our Director.&rdquo; The next morning the order came down: &ldquo;Capt. Kennedy is
                    requesting that a threat assessment be conducted asap.&rdquo;
                </p>
                <p>
                    The case went to the Major Crimes Section and to Detective Jake Hyde, a task force officer with
                    the Portland FBI-JTTF, who forwarded my name to FBI personnel and obtained my DMV record. A DOJ
                    fusion center analyst documented the activity. On March 6, after reviewing this archive, Hyde
                    wrote: &ldquo;Based on the website nothing is standing out to me more than what Parks and Rec
                    sent you. Sounds like this person does have a grievance with the former employer.&rdquo; They
                    came anyway, eighteen days later.
                </p>
                <p>
                    On March 23, Detective Jerred Nelson opened CAD event SP26096984 naming me{" "}
                    <em>Suspect</em>, with a narrative stating the basis: sending &ldquo;concerning emails to former
                    supervisors in parks department and publicly airing grievances.&rdquo; The same day he sent his
                    sergeant the &ldquo;Hasty Plan for Robert White knock and talk.&rdquo; My Forest Service
                    supervisor &ldquo;was told not to advise WHITE that FS LE was inquiring about his
                    whereabouts.&rdquo;
                </p>
                <p>
                    Nelson&rsquo;s own report closes it: no direct threats, no &ldquo;leakage towards violence or
                    violent behavior,&rdquo; and &ldquo;no evidence White has committed any crimes.&rdquo; The
                    report references body-worn camera video of the encounter. It was not produced.{" "}
                    <a href="/accountability/osp/01M1M6H4RR51K8RXNASW5AB9RC" className="underline text-emerald-800 hover:text-emerald-600">My response demanding it, and everything else the production identifies and does not include, is on the record</a>.
                </p>
            </div>

            <hr className="my-6 border-t border-gray-300" />

            <IdentityTracker />

            <AccountabilityRecord
                heading="The record of this visit"
                intro="The key documents. Each opens here and links to its place on the accountability pages."
                items={flaggedIn("osp", "usfs")}
            />

        </SectionPage>
    );
}

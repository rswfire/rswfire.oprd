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
            nextPage={{ href: "/lisa-sumption", label: "The Director's Decisions" }}
            summary="On March 24, 2026 — exactly one year after Ryan Warren dismissed me from Honeyman State Park — police showed up at my door behind a locked federal gate to intimidate me. I recorded them leaving."
            systemMap={{ href: "/system-map#stage-eleven", label: "Stage Eleven — Police Intimidation", blurb: "When silence fails — when the documentation is public, the archive is growing, and the institution has exhausted every internal mechanism of containment — the system reaches beyond its own walls." }}
        >

            <h2 className="text-xl font-semibold">MARCH 24, 2026</h2>

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

            <hr className="my-6 border-t border-gray-300" />

            <h2 className="text-xl font-semibold">THE FOREST SERVICE RESPONSE</h2>

            <div className="mt-4 space-y-4 text-base leading-relaxed">
                <p>On March 30, 2026, Patrol Captain Felicia Sloan &mdash; the supervisory law enforcement officer for the Willamette and Siuslaw National Forests &mdash; responded to my inquiry.</p>

                <p>She confirmed that Special Agent Matthew Oliver is employed by the United States Forest Service, Law Enforcement &amp; Investigations. He is assigned to the Willamette and Siuslaw National Forests as part of their investigative branch.</p>

                <p>She confirmed that Agent Oliver does not have an obligation to coordinate with local Forest Service law enforcement prior to conducting investigative work in the area.</p>

                <p>She provided a link to file a formal complaint with the Office of Professional Responsibility.</p>
            </div>

            <div className="mt-6 p-6 bg-gray-50 border border-gray-200 rounded-lg">
                <div className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-3">Correspondence &mdash; March 30, 2026</div>
                <div className="text-sm space-y-3 leading-relaxed">
                    <p>Good morning Mr. White,</p>
                    <p>I am writing in response to the email you sent to the Willamette National Forest yesterday morning. My name is Patrol Captain Felicia Sloan and I am the supervisory law enforcement officer for the Willamette and Siuslaw National Forests. I supervise all the law enforcement officers who patrol both of these forests, to include the officer whose area of patrol responsibility covers the Siltcoos Work Center.</p>
                    <p>I can confirm that Special Agent Matthew Oliver is employed by the United States Forest Service &mdash; Law Enforcement &amp; Investigations. He is assigned to the Willamette and Siuslaw National Forests as part of our investigative branch. Agent Oliver does not have an obligation to coordinate with the local Forest Service law enforcement officer prior to conducting investigative work in the area.</p>
                    <p>If you would like to file a complaint against Agent Oliver, this link will take you to the complaint form with our Office of Professional Responsibility.</p>
                    <p>Respectfully,</p>
                    <p className="font-semibold">Patrol Captain Felicia Sloan</p>
                </div>
            </div>

            <div className="mt-6 p-6 bg-gray-50 border border-gray-200 rounded-lg">
                <div className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-3">Reply &mdash; March 30, 2026</div>
                <div className="text-sm space-y-3 leading-relaxed">
                    <p>Captain Sloan,</p>
                    <p>Thank you for the prompt response and for confirming Agent Oliver&apos;s employment and role.</p>
                    <p>I want to be direct about what your response clarifies and what it does not.</p>
                    <p>You have confirmed that a Special Agent from the investigative branch visited my federal work center on March 24, 2026. That is a significant clarification. Investigators do not conduct welfare checks. If this was an investigative action, there is a record of it &mdash; who authorized it, what its purpose was, and why it occurred on the one-year anniversary of my dismissal from Oregon State Parks.</p>
                    <p>Agent Oliver refused to identify the two state law enforcement officers who accompanied him. In a legitimate investigation, identifying participating officers is routine. His refusal to do so &mdash; and his subsequent hang-up &mdash; raises questions your response does not address.</p>
                    <p>I am asking directly: who authorized Agent Oliver&apos;s visit to my work center on March 24, 2026, and what was the stated purpose of that visit?</p>
                    <p>I am also requesting the names and contact information of the two state officers who accompanied him.</p>
                    <p>I will note that this correspondence, along with the official Siuslaw Host/Caretaker Incident Report filed on March 27, 2026, is part of a documented public record.</p>
                    <p className="font-semibold">Robert Samuel White</p>
                </div>
            </div>

            <div className="mt-6 space-y-4 text-base leading-relaxed">
                <p>This letter establishes that the Forest Service sent a <em>Special Agent</em> from their <em>investigative branch</em> to the door of a volunteer caretaker behind a locked federal gate on the anniversary of his retaliatory dismissal from Oregon State Parks.</p>
                <p>Not a patrol officer conducting a welfare check. An investigator.</p>
            </div>

        </SectionPage>
    );
}

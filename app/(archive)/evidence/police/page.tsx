import type { Metadata } from "next";
import SectionPage from "@/components/SectionPage";
import TransmissionDisclosure from "@/components/TransmissionDisclosure";
import DisplacementStage from "@/components/DisplacementStage";
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

            <DisplacementStage stage="police" />

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

            <h2 className="text-xl font-semibold">THE INCIDENT REPORT</h2>

            <div className="mt-4 space-y-4 text-base leading-relaxed">
                <p>On March 27, 2026, I filed an official Siuslaw National Forest Host/Caretaker Incident Report documenting the visit as intimidation. The report includes the date, time, location, a narrative description of the encounter, and the license plate number of one of the vehicles: 731 QRV.</p>
            </div>

            <div className="mt-4">
                <a href="/usfs-incident-report.jpg" download className="inline-block px-4 py-2 text-sm font-semibold text-emerald-700 border border-emerald-700 rounded-lg hover:bg-emerald-700 hover:text-white transition-colors">Download Incident Report (JPG) &darr;</a>
            </div>

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

            <div className="mt-6 p-6 bg-gray-50 border border-gray-200 rounded-lg">
                <div className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-3">Reply &mdash; March 30, 2026</div>
                <div className="text-sm space-y-3 leading-relaxed">
                    <p>Mr. White,</p>
                    <p>Any request for federal records must be obtained through FOIA. The link for to submit a FOIA request is here: https://www.fs.usda.gov/about-agency/foia</p>
                    <p>Respectfully,</p>
                    <p className="font-semibold">Patrol Captain Felicia Sloan</p>
                </div>
            </div>

            <div className="mt-4 space-y-4 text-base leading-relaxed">
                <p>I asked who authorized the visit and what its purpose was. She redirected me to FOIA.</p>
                <p>A direct question to the supervisory officer about why a Special Agent from the investigative branch was sent to a volunteer caretaker&apos;s door &mdash; and the answer is: file a federal records request.</p>
            </div>

            <div className="mt-6 p-6 bg-gray-50 border border-gray-200 rounded-lg">
                <div className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-3">Reply &mdash; March 30, 2026</div>
                <div className="text-sm space-y-3 leading-relaxed">
                    <p>Captain Sloan,</p>
                    <p>Thank you for your time today. I will follow through on each link you provided.</p>
                    <p>Kind Regards,</p>
                    <p className="font-semibold">Robert Samuel White</p>
                </div>
            </div>

            <div className="mt-6 space-y-4 text-base leading-relaxed">
                <p>This is the Forest Service&apos;s version of institutional silence. Not no comment. Not we can&apos;t discuss an ongoing investigation. A form link.</p>
                <p>The visit happened. The investigative branch sent him. And the question of why requires a FOIA request to answer.</p>
            </div>

            <hr className="my-6 border-t border-gray-300" />

            <h2 className="text-xl font-semibold">OREGON STATE POLICE: NO RECORDS</h2>

            <div className="mt-4 space-y-4 text-base leading-relaxed">
                <p>On April 3, 2026, I filed a public records request with Oregon State Police requesting all records related to the March 24 visit &mdash; names, badge numbers, unit assignments, all communications related to planning, authorization, or coordination, all communications referencing my name, the archive, or the domain oprdvolunteerabuse.org, any incident reports, case files, or after-action documentation, and all communications between any OSP officer and U.S. Forest Service Special Agent Matthew Oliver or any Oregon Parks and Recreation Department employee in connection with the visit.</p>
                <p>Oregon State Police responded the same day.</p>
            </div>

            <div className="mt-6 p-6 bg-gray-50 border border-gray-200 rounded-lg">
                <div className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-3">Oregon State Police &mdash; April 3, 2026</div>
                <div className="text-sm space-y-3 leading-relaxed">
                    <p>REF#: PR27478</p>
                    <p>RE: PUBLIC RECORDS REQUEST REGARDING &ldquo;ROBERT SAMUEL WHITE&rdquo;</p>
                    <p>Dear Robert White,</p>
                    <p>This is in response to the above referenced request, which Oregon State Police received on April 3, 2026.</p>
                    <p>The Department has conducted a search which identified no records responsive to your request.</p>
                    <p>Sincerely,</p>
                    <p className="font-semibold">Marni L. Carlson</p>
                    <p>AS 1 | Central Records Section<br />Oregon State Police</p>
                </div>
            </div>

            <div className="mt-6 space-y-4 text-base leading-relaxed">
                <p>No records. Three officers arrived at a locked federal gate on restricted federal land. One was confirmed as a USFS Special Agent. Oregon plate 731 QRV is visible on camera. The visit was documented in a formal incident report. A litigation preservation notice was issued to Oregon State Police on April 2, 2026.</p>
                <p>And Oregon State Police says it has no records responsive to a request about its own officers at that visit.</p>
                <p>Either the two state officers were not Oregon State Police &mdash; in which case the question of which agency sent them remains open &mdash; or OSP has records it is not producing.</p>
            </div>

            <div className="mt-6 p-6 bg-gray-50 border border-gray-200 rounded-lg">
                <div className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-3">Reply &mdash; April 3, 2026</div>
                <div className="text-sm space-y-3 leading-relaxed">
                    <p>RE: Follow-Up to Public Records Request REF# PR27478</p>
                    <p>Dear Ms. Carlson,</p>
                    <p>Thank you for your response dated April 3, 2026. I am writing to follow up on the search conducted in response to my request.</p>
                    <p>My request concerned a specific law enforcement visit that occurred on March 24, 2026 at 82900 Highway 101, Florence, Oregon 97439 &mdash; a locked U.S. Forest Service facility on restricted federal land. The visit involved at least two officers and Oregon plate 731 QRV was recorded on camera at the scene.</p>
                    <p>Before I determine whether to pursue further remedies available under Oregon public records law, I am asking that you provide the following information in writing:</p>
                    <ol className="list-decimal list-outside ml-6 space-y-1">
                        <li>What records systems were searched in response to this request?</li>
                        <li>Were dispatch logs for March 24, 2026 searched?</li>
                        <li>Were vehicle activity records or motor pool logs for plate 731 QRV searched?</li>
                        <li>Were officer duty logs or activity reports for March 24, 2026 searched?</li>
                        <li>Were any records located and withheld rather than produced? If so, please identify the specific statutory exemption claimed for each withheld record.</li>
                    </ol>
                    <p>I want to be direct: I have video documentation of this visit. A U.S. Forest Service Special Agent present at the same visit has been confirmed by name by Forest Service supervisory staff. Multiple Forest Service employees name in writing that state police were present at this incident. A same-day determination that no responsive records exist is not consistent with a thorough search of the records I have described.</p>
                    <p>I am preserving all rights and remedies available to me under Oregon public records law, including the right to seek review through the District Attorney&apos;s office under ORS 192.401 if this matter is not resolved to my satisfaction.</p>
                    <p>Please respond in writing within five business days.</p>
                    <p className="font-semibold">Robert Samuel White</p>
                    <p>P.O. Box 334<br />Reedsport, Oregon 97467</p>
                </div>
            </div>

            <div className="mt-4">
                <a href="/osp-foia-response-1.pdf" download className="inline-block px-4 py-2 text-sm font-semibold text-emerald-700 border border-emerald-700 rounded-lg hover:bg-emerald-700 hover:text-white transition-colors">Download OSP Public Records Response (PDF) &darr;</a>
            </div>

        </SectionPage>
    );
}

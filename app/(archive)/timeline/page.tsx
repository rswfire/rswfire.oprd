// app/(archive)/timeline/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import SectionPage from "@/components/SectionPage";

export const metadata: Metadata = {
    title: "Timeline",
    description: "Chronological documentation of systematic abuse and institutional retaliation, February 2025 — ongoing.",
};

export default function TimelinePage() {
    return (
        <SectionPage
            title="TIMELINE"
            subtitle="FEBRUARY 9, 2025 — ONGOING"
            previousPage={{ href: "/key-individuals", label: "Key Individuals" }}
            nextPage={{ href: "/system-map", label: "Mapping the System" }}
        >

            <h2 className="text-xl font-semibold"><strong>FEBRUARY — MARCH 2025</strong>: ABUSE AND DISMISSAL</h2>

            <ul className="space-y-6 border-l-2 border-emerald-600 ml-6 pl-6 mt-4">
                <li>
                    <div className="font-semibold">February 9, 2025</div>
                    <div className="mt-2 text-sm">
                        <Link href="/evidence/origin" className="underline text-emerald-800 hover:text-emerald-600">
                            Kati Baker responds dismissively
                        </Link> to operational questions about power outage protocols. I send follow-up email naming her tone. Same day: <Link href="/evidence/escalation" className="underline text-emerald-800 hover:text-emerald-600">Ryan Warren confronts me alone</Link>, cataloging first-week mistakes. I try to reset.
                    </div>
                </li>

                <li>
                    <div className="font-semibold">February (ongoing)</div>
                    <div className="mt-2 text-sm">
                        Systematic undermining of supervisor relationships. Logan Bliss elicits trust through reciprocal vulnerability, then distances himself. I document the pattern with the <Link href="/evidence/trust" className="underline text-emerald-800 hover:text-emerald-600">"Trust" email</Link> on March 2.
                    </div>
                </li>

                <li>
                    <div className="font-semibold">March 5, 2025</div>
                    <div className="mt-2 text-sm">
                        <Link href="/evidence/coercion" className="underline text-emerald-800 hover:text-emerald-600">
                            Ryan Warren and Kati Baker summon me to public picnic table
                        </Link> for over an hour of psychological pressure. Ryan tells me to "chew glass and swallow it," admits I was never given benefit of the doubt, repeatedly suggests I leave. Entire meeting recorded.
                    </div>
                </li>

                <li>
                    <div className="font-semibold">March 10, 2025</div>
                    <div className="mt-2 text-sm">
                        Allison Watson calls about the March 5 recording. Informs me I was "acting as an agent of the state" — reframing my self-protection as a violation. Follow-up call the same day: tells me to "get through my time," dismisses documented abuse.
                    </div>
                </li>

                <li>
                    <div className="font-semibold">March 18, 2025</div>
                    <div className="mt-2 text-sm">
                        <Link href="/evidence/surveillance" className="underline text-emerald-800 hover:text-emerald-600">
                            Unidentified man approaches me
                        </Link> while cleaning yurts alone during a regional event when all rangers are away. Interrogates me about leadership treatment. I document immediately with Kati. Explained as "IT photo documentation" — no photos ever produced. Kati was at the regional event. She had told me earlier that week she would be. She responded within the hour with a fully-formed justification.
                    </div>
                </li>

                <li>
                    <div className="font-semibold">March 24, 2025</div>
                    <div className="mt-2 text-sm">
                        <Link href="/evidence/dismissal" className="underline text-emerald-800 hover:text-emerald-600">
                            Ryan Warren dismisses me by phone
                        </Link>, six days before scheduled completion. Stated reason: homeless man's lost journal. One hour later: arrives at my RV to collect keys, admits on camera no formal documentation exists.
                    </div>
                </li>

                <li>
                    <div className="font-semibold">March 25, 2025</div>
                    <div className="mt-2 text-sm">
                        <Link href="/evidence/expulsion" className="underline text-emerald-800 hover:text-emerald-600">
                            Allison Watson calls to contain the situation
                        </Link>. Logan's disclosures weaponized as "concerning behavior." Complete refusal to engage with documented abuse. I record the call.
                    </div>
                </li>

                <li>
                    <div className="font-semibold">March 26, 2025</div>
                    <div className="mt-2 text-sm">
                        I send <Link href="/evidence/expulsion" className="underline text-emerald-800 hover:text-emerald-600">detailed letter to Allison</Link> attempting accountability. Hours later: permanent dismissal from all Oregon State Parks volunteer programs, explicitly citing my public speech about the abuse.
                    </div>
                </li>
            </ul>

            <hr className="my-6 border-t border-gray-300" />

            <h2 className="text-xl font-semibold"><strong>MAY — DECEMBER 2025</strong>: SILENCE AND ESCALATION</h2>

            <ul className="space-y-6 border-l-2 border-emerald-600 ml-6 pl-6 mt-4">
                <li>
                    <div className="font-semibold">May 26, 2025</div>
                    <div className="mt-2 text-sm">
                        <Link href="/evidence/surveillance" className="underline text-emerald-800 hover:text-emerald-600">
                            Name the March 18 surveillance encounter directly to Allison Watson
                        </Link>. Document what the email thread proves. Name the cover story as cover. No response.
                    </div>
                </li>

                <li>
                    <div className="font-semibold">August 15, 2025</div>
                    <div className="mt-2 text-sm">
                        <Link href="/evidence/surveillance" className="underline text-emerald-800 hover:text-emerald-600">
                            Escalate March 18 encounter to Director Lisa Sumption
                        </Link> with full documentation. Ask three direct questions: do those photos exist, were they published, was the encounter logged. No response.
                    </div>
                </li>

                <li>
                    <div className="font-semibold">August 22, 2025</div>
                    <div className="mt-2 text-sm">
                        <Link href="/lisa-sumption/public-records-request" className="underline text-emerald-800 hover:text-emerald-600">
                            Submit comprehensive public records request
                        </Link>. OPRD remains silent for 90 days.
                    </div>
                </li>

                <li>
                    <div className="font-semibold">August 25, 2025</div>
                    <div className="mt-2 text-sm">
                        <Link href="/lisa-sumption/open-letter" className="underline text-emerald-800 hover:text-emerald-600">
                            Send open letter to Director Lisa Sumption
                        </Link> with comprehensive documentation. She responds within 12 hours with procedural language, no commitments.
                    </div>
                </li>

                <li>
                    <div className="font-semibold">November 15, 2025</div>
                    <div className="mt-2 text-sm">
                        <Link href="/lisa-sumption/public-records-request" className="underline text-emerald-800 hover:text-emerald-600">
                            Issue Notice of Violation
                        </Link> for OPRD's failure to respond to public records request.
                    </div>
                </li>

                <li>
                    <div className="font-semibold">November 18, 2025</div>
                    <div className="mt-2 text-sm">
                        Governor Tina Kotek's office <Link href="https://www.oprdvolunteerabuse.org/correspondence/complaints/governor-kotek-2025-11-18" className="underline text-emerald-800 hover:text-emerald-600">sent formal complaint</Link>.
                    </div>
                </li>

                <li>
                    <div className="font-semibold">November 20, 2025</div>
                    <div className="mt-2 text-sm">
                        OPRD responds claiming they posted response to inaccessible internal portal on August 29. Cost estimate: tens of thousands of dollars. I withdraw the request.
                    </div>
                </li>

            </ul>

            <hr className="my-6 border-t border-gray-300" />

            <h2 className="text-xl font-semibold"><strong>DECEMBER 2025</strong>: THE ARCHIVE LAUNCHES</h2>

            <ul className="space-y-6 border-l-2 border-emerald-600 ml-6 pl-6 mt-4">
                <li>
                    <div className="font-semibold">December 7, 2025</div>
                    <div className="mt-2 text-sm">
                        Send <Link href="/lisa-sumption/closure" className="underline text-emerald-800 hover:text-emerald-600">final message to Director Sumption</Link>, including supplemental surveillance evidence and video documentation. She responds December 8, reframing documentation as emotional processing, closes communication.
                    </div>
                </li>

                <li>
                    <div className="font-semibold">December 8, 2025</div>
                    <div className="mt-2 text-sm">
                        Director Sumption calls comprehensive documented evidence "emotional processing" and closes communication. I register <Link href="/" className="underline text-emerald-800 hover:text-emerald-600">oprdvolunteerabuse.org</Link> with my last $7 and begin building the public evidentiary archive.
                    </div>
                </li>

                <li>
                    <div className="font-semibold">December 10, 2025</div>
                    <div className="mt-2 text-sm">
                        Send <Link href="/evidence/trust" className="underline text-emerald-800 hover:text-emerald-600">letter naming Logan's betrayal</Link> to Logan Bliss. CC: Kati Baker, Ryan Warren, Allison Watson, Lisa Sumption.
                    </div>
                </li>

                <li>
                    <div className="font-semibold">December 11, 2025</div>
                    <div className="mt-2 text-sm">
                        Build dedicated section documenting <Link href="/lisa-sumption" className="underline text-emerald-800 hover:text-emerald-600">Director Lisa Sumption's decisions</Link>. Send message: "I will continue my accountability work where it will have the greatest institutional effect."
                    </div>
                </li>

                <li>
                    <div className="font-semibold">December 13, 2025</div>
                    <div className="mt-2 text-sm">
                        Governor Tina Kotek's campaign contacted.
                    </div>
                </li>
            </ul>

            <hr className="my-6 border-t border-gray-300" />

            <h2 className="text-xl font-semibold"><strong>JANUARY — FEBRUARY 2026</strong>: LEGAL NOTICE AND INSTITUTIONAL RESPONSE</h2>

            <ul className="space-y-6 border-l-2 border-emerald-600 ml-6 pl-6 mt-4">
                <li>
                    <div className="font-semibold">January 16, 2026</div>
                    <div className="mt-2 text-sm">
                        <Link href="/correspondence/institution/allison-watson-2026-01-16/" className="underline text-emerald-800 hover:text-emerald-600">Send formal notice</Link> to Allison Watson citing 42 U.S.C. § 1983, documenting personal liability for First Amendment retaliation. Demand written reversal of expulsion, independent investigation, and acknowledgment of constitutional violation. Deadline: March 26, 2026 — one year from expulsion date.
                    </div>
                </li>

                <li>
                    <div className="font-semibold">February 9, 2026</div>
                    <div className="mt-2 text-sm">
                        <Link href="/correspondence/institution/allison-watson-2026-02-09/" className="underline text-emerald-800 hover:text-emerald-600">Send additional letter</Link> to Allison Watson, subject "Harm." Name the full pattern of abuse and retaliation directly. Establish that institutional silence and reframing are themselves ongoing harm.
                    </div>
                </li>

                <li>
                    <div className="font-semibold">February 13, 2026</div>
                    <div className="mt-2 text-sm">
                        Deputy Director J.R. Collier writes to <Link href="/correspondence/institution/jr-collier-2026-02-14/" className="underline text-emerald-800 hover:text-emerald-600">redirect all correspondence</Link> away from Allison Watson and other named staff. Letter characterizes documented First Amendment retaliation as dissatisfaction with "the decision to end volunteer service." Makes no substantive response to 1983 notice. Instructs that any legal filing will be forwarded to Department of Justice counsel. A senior official mobilized to insulate the person whose own written words document the constitutional violation.
                    </div>
                </li>

                <li>
                    <div className="font-semibold">February 13, 2026</div>
                    <div className="mt-2 text-sm">
                        <Link href="/correspondence/institution/jr-collier-2026-02-14/" className="underline text-emerald-800 hover:text-emerald-600">Respond same day</Link> to Deputy Director Collier's letter. Reject the premise that a public agency can dictate the terms of a citizen's correspondence. Name the "structured process" as an internal routing matter with no authority over constitutionally protected contact with a public agency.
                    </div>
                </li>

                <li>
                    <div className="font-semibold">February 14, 2026</div>
                    <div className="mt-2 text-sm">
                        <Link href="/correspondence/institution/jr-collier-2026-02-14/" className="underline text-emerald-800 hover:text-emerald-600">Send full declaration</Link> to Collier, all named individuals, and Governor Kotek. Name every tactic in sequence: the recording, the retaliation, the surveillance, the weaponized disclosures, the sexuality mockery, the portal delay, the containment attempts. Establish that the archive stands because truth is absolute defense and nothing in it has been disputed or challenged. 325 days of constitutional violation named directly to every person responsible.
                    </div>
                </li>

                <li>
                    <div className="font-semibold">February 16, 2026</div>
                    <div className="mt-2 text-sm">
                        <Link href="/correspondence/institution/defining-abuse-2026-02-16/" className="underline text-emerald-800 hover:text-emerald-600">Send "Defining Abuse" email</Link> to all named individuals, OPRD Commissioners, and Governor Kotek. Document the full pattern: abuse, retaliation, intimidation, and now institutional mobilization in response to named legal exposure. Constitutional violation at 327 days ongoing.
                    </div>
                </li>

            </ul>

            <hr className="my-6 border-t border-gray-300" />

            <h2 className="text-xl font-semibold"><strong>FEBRUARY — MARCH 2026</strong>: SECOND ENCOUNTER</h2>

            <ul className="space-y-6 border-l-2 border-emerald-600 ml-6 pl-6 mt-4">
                <li>
                    <div className="font-semibold">Late February 2026</div>
                    <div className="mt-2 text-sm">
                        <Link href="/evidence/surveillance" className="underline text-emerald-800 hover:text-emerald-600">
                            Second encounter with the operative
                        </Link> on a Forest Service trail that was part of my regular route. He had been visiting it regularly. He was surprised. He did not know I worked there. He has not returned. He is local. He is not IT. He drives a state vehicle with no identifying agency markings. Kati's cover story collapsed without argument.
                    </div>
                </li>

                <li>
                    <div className="font-semibold">March 2, 2026</div>
                    <div className="mt-2 text-sm">
                        <Link href="/evidence/surveillance" className="underline text-emerald-800 hover:text-emerald-600">
                            Second encounter documented in correspondence
                        </Link> to all named individuals. Name what his presence on that trail proves: he is local, not IT, driving an unmarked state vehicle. This required authorization above the park level. The institution has never explained it. It cannot.
                    </div>
                </li>

                <li>
                    <div className="font-semibold">March 11, 2026</div>
                    <div className="mt-2 text-sm">
                        <Link href="/evidence/surveillance" className="underline text-emerald-800 hover:text-emerald-600">
                            Final correspondence sent
                        </Link> to all named individuals. The operative addressed directly. The door closed. Communication ended.
                    </div>
                </li>
            </ul>

            <hr className="my-6 border-t border-gray-300" />

            <h2 className="text-xl font-semibold"><strong>MARCH 2026</strong>: ONE YEAR ANNIVERSARY</h2>

            <ul className="space-y-6 border-l-2 border-emerald-600 ml-6 pl-6 mt-4">
                <li>
                    <div className="font-semibold">March 23, 2026</div>
                    <div className="mt-2 text-sm">
                        The eve of the anniversary of the dismissal.&nbsp;
                        <Link href="https://autonomyrealms.com" target="_blank" className="underline text-emerald-800 hover:text-emerald-600">
                            Launch of Autonomy Realms
                        </Link> &mdash; a sovereign platform with Atlas mode, geotagged signals, and traces mapped to <Link href="https://rswfire.com/?mode=atlas&center=43.93035%2C-124.10868&zoom=15" target="_blank" className="underline text-emerald-800 hover:text-emerald-600">the exact ground where events occured</Link>.
                        Anniversary email sent with map screenshot showing signals linked to their park. Video recorded seeking legal representation. ACLU of Oregon intake submitted.
                    </div>
                </li>

                <li>
                    <div className="font-semibold">March 24, 2026</div>
                    <div className="mt-2 text-sm">
                        One year after the dismissal.&nbsp;
                        <Link href="/evidence/police/" className="underline text-emerald-800 hover:text-emerald-600">
                            Three police officers arrive at a locked federal gate.
                        </Link> on federal land where I serve as a volunteer caretaker. They state they are concerned about what I am posting online. I decline to speak without an attorney and shut the door. I record them leaving.
                    </div>
                </li>
            </ul>

        </SectionPage>
    );
}

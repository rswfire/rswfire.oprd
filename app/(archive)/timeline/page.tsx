// app/(archive)/timeline/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import PersonLink from "@/components/PersonLink";
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
            previousPage={{ href: "/records-requests", label: "Records Requests" }}
            nextPage={{ href: "/evidence", label: "Evidence" }}
        >

            <h2 className="text-xl font-semibold"><strong>FEBRUARY — MARCH 2025</strong>: ABUSE AND DISMISSAL</h2>

            <ul className="space-y-6 border-l-2 border-emerald-600 ml-6 pl-6 mt-4">
                <li>
                    <div className="font-semibold">February 9, 2025</div>
                    <div className="mt-2 text-sm">
                        <Link href="/evidence/origin" className="underline text-emerald-800 hover:text-emerald-600">
                            The park supervisor responds dismissively
                        </Link> to operational questions about power outage protocols. I send follow-up email naming her tone. Same day: <Link href="/evidence/escalation" className="underline text-emerald-800 hover:text-emerald-600">the park manager confronts me alone</Link>, cataloging first-week mistakes. I try to reset.
                    </div>
                </li>

                <li>
                    <div className="font-semibold">February (ongoing)</div>
                    <div className="mt-2 text-sm">
                        Systematic undermining of supervisor relationships. The <PersonLink name="volunteer services lead" /> elicits trust through reciprocal vulnerability, then distances himself. I document the pattern with the <Link href="/evidence/trust" className="underline text-emerald-800 hover:text-emerald-600">"Trust" email</Link> on March 2.
                    </div>
                </li>

                <li>
                    <div className="font-semibold">March 5, 2025</div>
                    <div className="mt-2 text-sm">
                        <Link href="/evidence/coercion" className="underline text-emerald-800 hover:text-emerald-600">
                            The park manager and the park supervisor summon me to public picnic table
                        </Link> for over an hour of psychological pressure. The park manager tells me to "chew glass and swallow it," admits I was never given benefit of the doubt, repeatedly suggests I leave. Entire meeting recorded.
                    </div>
                </li>

                <li>
                    <div className="font-semibold">March 10, 2025</div>
                    <div className="mt-2 text-sm">
                        The <PersonLink name="program manager" /> calls about the March 5 recording. Informs me I was "acting as an agent of the state" — reframing my self-protection as a violation. Follow-up call the same day: tells me to "get through my time," dismisses documented abuse.
                    </div>
                </li>

                <li>
                    <div className="font-semibold">March 18, 2025</div>
                    <div className="mt-2 text-sm">
                        <Link href="/evidence/surveillance" className="underline text-emerald-800 hover:text-emerald-600">
                            Unidentified man approaches me
                        </Link> while cleaning yurts alone during a regional event when all rangers are away. Interrogates me about leadership treatment. I document immediately with the park supervisor. Explained as "IT photo documentation" — no photos ever produced. The park supervisor was at the regional event. She had told me earlier that week she would be. She responded within the hour with a fully-formed justification.
                    </div>
                </li>

                <li>
                    <div className="font-semibold">March 24, 2025</div>
                    <div className="mt-2 text-sm">
                        <Link href="/evidence/dismissal" className="underline text-emerald-800 hover:text-emerald-600">
                            The park manager dismisses me by phone
                        </Link>, six days before scheduled completion. Stated reason: homeless man's lost journal. One hour later: arrives at my RV to collect keys, admits on camera no formal documentation exists.
                    </div>
                </li>

                <li>
                    <div className="font-semibold">March 25, 2025</div>
                    <div className="mt-2 text-sm">
                        <Link href="/evidence/expulsion" className="underline text-emerald-800 hover:text-emerald-600">
                            The program manager calls to contain the situation
                        </Link>. The volunteer services lead's disclosures weaponized as "concerning behavior." Complete refusal to engage with documented abuse. I record the call.
                    </div>
                </li>

                <li>
                    <div className="font-semibold">March 26, 2025</div>
                    <div className="mt-2 text-sm">
                        I send <Link href="/evidence/expulsion" className="underline text-emerald-800 hover:text-emerald-600">detailed letter to the program manager</Link> attempting accountability. Hours later: permanent dismissal from all Oregon State Parks volunteer programs, explicitly citing my public speech about the abuse.
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
                            Name the March 18 surveillance encounter directly to the program manager
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
                        <Link href="/record/oprd/01K399TM7GG3FNAXSR4BX9TB1X" className="underline text-emerald-800 hover:text-emerald-600">
                            Submit comprehensive public records request
                        </Link>. OPRD remains silent for 90 days.
                    </div>
                </li>

                <li>
                    <div className="font-semibold">August 24, 2025</div>
                    <div className="mt-2 text-sm">
                        <Link href="/record/oprd/01K3FDT5P09S9N9QSZYWS9KN7A" className="underline text-emerald-800 hover:text-emerald-600">
                            Send open letter to Director Lisa Sumption
                        </Link> with comprehensive documentation. She <Link href="/record/oprd/01K3HPAXBG8F4QZG4DJNDY5QY8" className="underline text-emerald-800 hover:text-emerald-600">responds within 12 hours</Link> with procedural language, no commitments.
                    </div>
                </li>

                <li>
                    <div className="font-semibold">November 15, 2025</div>
                    <div className="mt-2 text-sm">
                        <Link href="/record/oprd/01KA45NDXG8VA4XB2YG7M8G0F5" className="underline text-emerald-800 hover:text-emerald-600">
                            Issue Notice of Violation
                        </Link> for OPRD's failure to respond to public records request.
                    </div>
                </li>

                <li>
                    <div className="font-semibold">November 18, 2025</div>
                    <div className="mt-2 text-sm">
                        Send <Link href="/record/governor/01KACE2348G8VG3XPB3BGW3F1N" className="underline text-emerald-800 hover:text-emerald-600">formal complaint</Link> to <PersonLink name="Tina Kotek" label="Governor Tina Kotek" />'s office.
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
                        Send <Link href="/record/oprd/01KBY6KNMGEGV4MZ98QEK6R8JP" className="underline text-emerald-800 hover:text-emerald-600">final message to Director Sumption</Link>, including supplemental surveillance evidence and video documentation. She responds December 8 in therapeutic language and closes communication.
                    </div>
                </li>

                <li>
                    <div className="font-semibold">December 8, 2025</div>
                    <div className="mt-2 text-sm">
                        Director Sumption answers comprehensive documented evidence with therapeutic language and closes communication. I register <Link href="/" className="underline text-emerald-800 hover:text-emerald-600">oprdvolunteerabuse.org</Link> with my last $7 and begin building the public evidentiary archive.
                    </div>
                </li>

                <li>
                    <div className="font-semibold">December 10, 2025</div>
                    <div className="mt-2 text-sm">
                        Send <Link href="/evidence/trust" className="underline text-emerald-800 hover:text-emerald-600">letter naming the volunteer services lead's betrayal</Link> to the <PersonLink name="volunteer services lead" />. CC: the <PersonLink name="park supervisor" />, the <PersonLink name="park manager" />, the <PersonLink name="program manager" />, and <PersonLink name="Lisa Sumption" />.
                    </div>
                </li>

                <li>
                    <div className="font-semibold">December 11, 2025</div>
                    <div className="mt-2 text-sm">
                        Build dedicated section documenting <Link href="/testimony/#the-director-and-her-deputy" className="underline text-emerald-800 hover:text-emerald-600">Director Lisa Sumption's decisions</Link>. Send message: "I will continue my accountability work where it will have the greatest institutional effect."
                    </div>
                </li>

                <li>
                    <div className="font-semibold">December 13, 2025</div>
                    <div className="mt-2 text-sm">
                        <PersonLink name="Tina Kotek" label="Governor Tina Kotek" />'s campaign contacted.
                    </div>
                </li>
            </ul>

            <hr className="my-6 border-t border-gray-300" />

            <h2 className="text-xl font-semibold"><strong>JANUARY — FEBRUARY 2026</strong>: LEGAL NOTICE AND INSTITUTIONAL RESPONSE</h2>

            <ul className="space-y-6 border-l-2 border-emerald-600 ml-6 pl-6 mt-4">
                <li>
                    <div className="font-semibold">January 16, 2026</div>
                    <div className="mt-2 text-sm">
                        <Link href="/record/oprd/01KF4NTAT878BQNBK345SZCJQS" className="underline text-emerald-800 hover:text-emerald-600">Send formal notice</Link> to the <PersonLink name="program manager" /> documenting First Amendment retaliation. Demand written reversal of the expulsion, an independent investigation, and acknowledgment of the constitutional violation. Deadline: March 26, 2026 — one year from expulsion date.
                    </div>
                </li>

                <li>
                    <div className="font-semibold">February 9, 2026</div>
                    <div className="mt-2 text-sm">
                        <Link href="/record/oprd/01KH32THCG9NNRQCG0B07353AR" className="underline text-emerald-800 hover:text-emerald-600">Send additional letter</Link> to the <PersonLink name="program manager" />, subject "Harm." Name the full pattern of abuse and retaliation directly. Establish that institutional silence and reframing are themselves ongoing harm.
                    </div>
                </li>

                <li>
                    <div className="font-semibold">February 13, 2026</div>
                    <div className="mt-2 text-sm">
                        Deputy Director J.R. Collier writes to <Link href="/record/oprd/01KHFDVVV82TVEJPHPYAMAD3JH" className="underline text-emerald-800 hover:text-emerald-600">redirect all correspondence</Link> away from the <PersonLink name="program manager" /> and other named staff. Letter characterizes documented First Amendment retaliation as dissatisfaction with "the decision to end volunteer service." Makes no substantive response to the notice. Instructs that any legal filing will be forwarded to Department of Justice counsel. A senior official mobilized to insulate the official whose own written words document the constitutional violation.
                    </div>
                </li>

                <li>
                    <div className="font-semibold">February 13, 2026</div>
                    <div className="mt-2 text-sm">
                        <Link href="/record/oprd/01KHFDVVV82TVEJPHPYAMAD3JH" className="underline text-emerald-800 hover:text-emerald-600">Respond same day</Link> to Deputy Director Collier's letter. Reject the premise that a public agency can dictate the terms of a citizen's correspondence. Name the "structured process" as an internal routing matter with no authority over constitutionally protected contact with a public agency.
                    </div>
                </li>

                <li>
                    <div className="font-semibold">February 14, 2026</div>
                    <div className="mt-2 text-sm">
                        <Link href="/record/oprd/01KHFDVVV82TVEJPHPYAMAD3JH" className="underline text-emerald-800 hover:text-emerald-600">Send full declaration</Link> to Collier, all named individuals, and Governor Kotek. Name every tactic in sequence: the recording, the retaliation, the surveillance, the weaponized disclosures, the sexuality mockery, the portal delay, the containment attempts. Establish that the archive stands because truth is absolute defense and nothing in it has been disputed or challenged. 325 days of constitutional violation named directly to every person responsible.
                    </div>
                </li>

                <li>
                    <div className="font-semibold">February 16, 2026</div>
                    <div className="mt-2 text-sm">
                        <Link href="/record/oprd/01KHK1EBD8ZSWHRRWT7Y69NDA1" className="underline text-emerald-800 hover:text-emerald-600">Send "Defining Abuse" email</Link> to all named individuals, OPRD Commissioners, and Governor Kotek. Document the full pattern: abuse, retaliation, intimidation, and now institutional mobilization in response to named legal exposure. Constitutional violation at 327 days ongoing.
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
                        </Link> on a Forest Service trail that was part of my regular route. He had been visiting it regularly. He was surprised. He did not know I worked there. He has not returned. He is local. He is not IT. He drives a state vehicle with no identifying agency markings. The park supervisor's cover story collapsed without argument.
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
                    <div className="font-semibold">March 3, 2026</div>
                    <div className="mt-2 text-sm">
                        OPRD Emergency Manager Jamen Lee <Link href="/record/osp/01M1M4WF78XJPEJJ48D1JZ4SJ8" className="underline text-emerald-800 hover:text-emerald-600">sends my letters to Captain Kyle Kennedy, OSP Government and Media Relations</Link>, copying Deputy Director J.R. Collier: &ldquo;Fyi &mdash; sharing for situational awareness since he is now including the Governor as well as our Director.&rdquo; His email closes: &ldquo;We can discuss more details if need be after our check-in with involved staff today.&rdquo; No crime alleged, no threat quoted. The entire chain below was unknown to me until OSP produced the file on September 3, 2026.
                    </div>
                </li>
                <li>
                    <div className="font-semibold">March 4, 2026</div>
                    <div className="mt-2 text-sm">
                        A threat assessment is ordered: the dispatch record reads &ldquo;Capt. Kennedy is requesting that a threat assessment be conducted asap.&rdquo; Kennedy <Link href="/record/osp/01M1M4WF78XJPEJJ48D1JZ4SJ8" className="underline text-emerald-800 hover:text-emerald-600">forwards Lee&rsquo;s email to Lieutenant Haley McQuillan</Link>, Criminal Investigations Division: &ldquo;Would you take a look at the info below?&rdquo;
                    </div>
                </li>
                <li>
                    <div className="font-semibold">March 6, 2026</div>
                    <div className="mt-2 text-sm">
                        Lieutenant McQuillan <Link href="/record/osp/01M1M4WF78XJPEJJ48D1JZ4SJ8" className="underline text-emerald-800 hover:text-emerald-600">routes it to Detective Jake Hyde</Link>, OSP Portland, a Task Force Officer with the Portland FBI Joint Terrorism Task Force: &ldquo;some concerns in the Florence area.&rdquo; Before noon, Hyde forwards my name from his FBI account to FBI personnel Rebecca Long and Jared Russell: &ldquo;Name is Robert Samuel White out of Florence Oregon. But I don&rsquo;t have a DOB.&rdquo; At 1:14 PM Hyde reports back to McQuillan: &ldquo;Based on the website nothing is standing out to me more than what Parks and Rec sent you. Sounds like this person does have a grievance with the former employer.&rdquo; That afternoon Lee sends Hyde the documents &mdash; the dismissal letter, the Timeline of Events, a February 2026 email chain &mdash; copying Deputy Director Collier, and offers more: &ldquo;If your department would like to see any of the add&rsquo;l correspondence that&rsquo;s been directed to JR recently just let us know.&rdquo;
                    </div>
                </li>
                <li>
                    <div className="font-semibold">March 10, 2026</div>
                    <div className="mt-2 text-sm">
                        Hyde <Link href="/record/osp/01M1M4WF78XJPEJJ48D1JZ4SJ8" className="underline text-emerald-800 hover:text-emerald-600">forwards the OPRD documents to Detective Jerred Nelson</Link>, Major Crimes Section: &ldquo;FYI for the guy in Florence. Give me a call later this week and we can talk about heading down there.&rdquo;
                    </div>
                </li>
                <li>
                    <div className="font-semibold">March 11, 2026</div>
                    <div className="mt-2 text-sm">
                        Dianne Greenlee, Criminal Intelligence Analyst at the Oregon TITAN Fusion Center, Oregon Department of Justice, <Link href="/record/osp/01M1M4WF78XJPEJJ48D1JZ4SJ8" className="underline text-emerald-800 hover:text-emerald-600">writes to Hyde</Link>: &ldquo;Jamen Lee with OPRD shared the information about Mr. White&rsquo;s activities with the fusion center. I&rsquo;m documenting this activity for our internal awareness since Mr. White&rsquo;s actions border on harassment due to the volume of emails that he has forwarded to OPRD staff over the last year. However, I wanted to check with you to confirm that FBI/OSP is handling this and that OTFC does not need to conduct additional research on Mr. White.&rdquo; Hyde answers: &ldquo;Yes, that is correct. Just OSP it is not an FBI case.&rdquo; Her records sit in systems I cannot see or correct.
                    </div>
                </li>
                <li>
                    <div className="font-semibold">March 13, 2026</div>
                    <div className="mt-2 text-sm">
                        Hyde sends Nelson my case: from his FBI account, <Link href="/record/osp/01M1M4WF78XJPEJJ48D1JZ4SJ8" className="underline text-emerald-800 hover:text-emerald-600">my DMV record and a report</Link> &mdash; &ldquo;WHITE,ROBERT SAMUEL DMV.pdf&rdquo; and &ldquo;ReportRobertWhite.pdf&rdquo; &mdash; &ldquo;still waiting from USFS guy to get back to me on the volunteer status.&rdquo;
                    </div>
                </li>
                <li>
                    <div className="font-semibold">March 17 — 22, 2026</div>
                    <div className="mt-2 text-sm">
                        Hyde works with Forest Service Special Agent Matthew Oliver to locate me. On March 22 Oliver <Link href="/record/osp/01M1M4WF78XJPEJJ48D1JZ4SJ8" className="underline text-emerald-800 hover:text-emerald-600">delivers the reconnaissance</Link>: my volunteer schedule, my duties, my RV and Jeep, two screenshots from the onX Hunt hunting application with a waypoint pinned on the work center where I live, the gate and its lock, and the note that my Forest Service supervisor &ldquo;was told not to advise WHITE that FS LE was inquiring about his whereabouts.&rdquo;
                    </div>
                </li>

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
                    <div className="font-semibold">March 23, 2026</div>
                    <div className="mt-2 text-sm">
                        At 2:21 PM Detective Nelson <Link href="/record/osp/01M1M4WF78XJPEJJ48D1JZ4SJ8" className="underline text-emerald-800 hover:text-emerald-600">opens the dispatch event naming me &ldquo;Suspect&rdquo;</Link>, with the basis: sending &ldquo;concerning emails to former supervisors in parks department and publicly airing grievances.&rdquo; At 2:33 PM he sends Sergeant Sean Henderson the &ldquo;Hasty Plan for Robert White knock and talk.&rdquo;
                    </div>
                </li>

                <li>
                    <div className="font-semibold">March 24, 2026 (morning)</div>
                    <div className="mt-2 text-sm">
                        Sergeant Henderson <Link href="/record/osp/01M1M4WF78XJPEJJ48D1JZ4SJ8" className="underline text-emerald-800 hover:text-emerald-600">notifies Lieutenant McQuillan</Link>: &ldquo;Just FYI, Jerred is going with Jake Hyde to Florence today in attempt to do a knock and talk with the guy who was upset with the state parks.&rdquo;
                    </div>
                </li>

                <li>
                    <div className="font-semibold">March 24, 2026</div>
                    <div className="mt-2 text-sm">
                        One year after the dismissal.&nbsp;
                        <Link href="/evidence/police" className="underline text-emerald-800 hover:text-emerald-600">
                            Three men with guns arrive at a locked federal gate
                        </Link> on federal land where I serve as a volunteer caretaker. They state they are concerned about what I am posting online. I decline to speak without an attorney and shut the door. I record them leaving. Twenty minutes later, a man identifying himself as Forest Service calls — hostile, tells me this isn&rsquo;t going away. He is later confirmed as <PersonLink name="Matthew Oliver" label="Special Agent Matthew Oliver" />, Law Enforcement &amp; Investigations.
                    </div>
                </li>

                <li>
                    <div className="font-semibold">March 27, 2026</div>
                    <div className="mt-2 text-sm">
                        File official Siuslaw National Forest Host/Caretaker Incident Report documenting the <Link href="/evidence/police" className="underline text-emerald-800 hover:text-emerald-600">March 24 visit as intimidation</Link>. Report includes date, time, location, narrative description, and license plate number of one vehicle: 731 QRV.
                    </div>
                </li>

                <li>
                    <div className="font-semibold">March 30, 2026</div>
                    <div className="mt-2 text-sm">
                        Patrol Captain Felicia Sloan confirms <PersonLink name="Matthew Oliver" label="Special Agent Matthew Oliver" /> is employed by USFS Law Enforcement &amp; Investigations, assigned to Willamette and Siuslaw National Forests. Confirms he does not need to coordinate with local law enforcement. When asked who authorized the visit and its purpose, she redirects to FOIA.
                    </div>
                </li>
            </ul>

            <hr className="my-6 border-t border-gray-300" />

            <h2 className="text-xl font-semibold"><strong>APRIL 2026</strong>: THE DISPLACEMENT FRAMEWORK</h2>

            <ul className="space-y-6 border-l-2 border-emerald-600 ml-6 pl-6 mt-4">
                <li>
                    <div className="font-semibold">April 2, 2026</div>
                    <div className="mt-2 text-sm">
                        Issue formal litigation preservation notice to Oregon State Police.
                    </div>
                </li>

                <li>
                    <div className="font-semibold">April 3, 2026</div>
                    <div className="mt-2 text-sm">
                        File <Link href="/evidence/police" className="underline text-emerald-800 hover:text-emerald-600">public records request with Oregon State Police</Link> requesting all records related to the March 24 visit &mdash; names, badge numbers, unit assignments, dispatch logs, communications, incident reports, and all coordination between OSP and USFS Special Agent Matthew Oliver or any OPRD employee. OSP responds same day: &ldquo;no records responsive to your request.&rdquo;
                    </div>
                </li>

                <li>
                    <div className="font-semibold">April 3, 2026</div>
                    <div className="mt-2 text-sm">
                        While walking the Waxmyrtle Trail in the Oregon Dunes,&nbsp;
                        <Link href="/displacement" className="underline text-emerald-800 hover:text-emerald-600">
                            the displacement framework is named
                        </Link>. One year after the first displacement was executed, and one week after the second when they brought police to his door. The weapon that connects all nine stages of documented institutional conduct — from the origin event through police intimidation — is identified, named, and <Link href="https://rswfire.com/library/signal/01KN9KDSG0H3W0WZ9GBCJDJMG5" target="_blank" className="underline text-emerald-800 hover:text-emerald-600">recorded on the trail</Link>. The archive is restructured around it. A <Link href="/resources/volunteers" className="underline text-emerald-800 hover:text-emerald-600">resource page for volunteers</Link> is created to give the pattern a name for those still inside it.
                    </div>
                </li>

                <li>
                    <div className="font-semibold">April 13, 2026</div>
                    <div className="mt-2 text-sm">
                        Ten days after the &ldquo;no records&rdquo; denial, and after I ask how the search was conducted, a <Link href="/evidence/police" className="underline text-emerald-800 hover:text-emerald-600">CAD dispatch record for the March 24 visit</Link> is printed inside OSP&rsquo;s Central Records Section. It is then withheld for three more months behind a fee I could not pay.
                    </div>
                </li>

                <li>
                    <div className="font-semibold">April 15, 2026</div>
                    <div className="mt-2 text-sm">
                        Detective Nelson <Link href="/record/osp/01M1M4WF78XJPEJJ48D1JZ4SJ8" className="underline text-emerald-800 hover:text-emerald-600">closes the threat assessment</Link>: &ldquo;there is no evidence White has committed any crimes.&rdquo; The file remains: &ldquo;Case and assessment to be documented for information only at this time. Closed 4-15-26.&rdquo;
                    </div>
                </li>
            </ul>

            <hr className="my-6 border-t border-gray-300" />

            <h2 className="text-xl font-semibold"><strong>MAY 2026</strong>: FINAL STATEMENT</h2>

            <ul className="space-y-6 border-l-2 border-emerald-600 ml-6 pl-6 mt-4">
                <li>
                    <div className="font-semibold">May 4, 2026</div>
                    <div className="mt-2 text-sm">
                        Send <a href="/final-statement-to-oprd.pdf" className="underline text-emerald-800 hover:text-emerald-600">A Final Statement to the Oregon Parks and Recreation Department</a>. Name every actor in sequence. Name what each did. Close the chapter on my own terms. Abandon all future contact with the institution. The archive remains. It is complete. It is factual. It has never been legally challenged.
                    </div>
                </li>
            </ul>

            <hr className="my-6 border-t border-gray-300" />

            <h2 className="text-xl font-semibold"><strong>JULY 2026</strong>: THE RECORD SURFACES</h2>

            <ul className="space-y-6 border-l-2 border-emerald-600 ml-6 pl-6 mt-4">
                <li>
                    <div className="font-semibold">July 14, 2026</div>
                    <div className="mt-2 text-sm">
Oregon State Police release <Link href="/evidence/police" className="underline text-emerald-800 hover:text-emerald-600">CAD record SP26097765</Link> with counsel&rsquo;s certification of no exempt material. Record: no call type, priority low, officer initiated, no action taken; criminal unit; role &ldquo;Other&rdquo;; comment &ldquo;FOR THE FOREST SERVICE // FOLLOWUP INTERVIEW W/ ROBERT WHITE&rdquo;; primary unit Trooper Jake Hyde, badge 56397. Same day, send <Link href="/evidence/police" className="underline text-emerald-800 hover:text-emerald-600">six questions</Link> to the responding unit&rsquo;s supervisor.
                    </div>
                </li>

                <li>
                    <div className="font-semibold">July 21, 2026</div>
                    <div className="mt-2 text-sm">
The four named staff &mdash; the park manager, the park supervisor, the volunteer services lead, and the program manager &mdash; are identified by role rather than by name throughout the archive. <Link href="https://x.com/rswfire/status/2079630338322760159" target="_blank" className="underline text-emerald-800 hover:text-emerald-600">Reasoning stated publicly</Link>.
                    </div>
                </li>

                <li>
                    <div className="font-semibold">July 22, 2026</div>
                    <div className="mt-2 text-sm">
<Link href="/evidence/police" className="underline text-emerald-800 hover:text-emerald-600">Petition for Public Records Order filed with the Oregon Attorney General</Link> under ORS 192.411, concerning PR27478 and CAD event SP26097765 &mdash; 110 days after the request. Petition and twenty-five exhibits published in full.
                    </div>
                </li>

                <li>
                    <div className="font-semibold">July 24, 2026</div>
                    <div className="mt-2 text-sm">
<Link href="/evidence/police" className="underline text-emerald-800 hover:text-emerald-600">The District Ranger</Link>, U.S. Forest Service, writes that the Forest Service did not initiate the March 24 interview and only unlocked the gate for OSP, which &ldquo;does not have keys to Forest Service gates.&rdquo; Same day, filed with the Attorney General as a supplemental exhibit.
                    </div>
                </li>

                <li>
                    <div className="font-semibold">July 27, 2026</div>
                    <div className="mt-2 text-sm">
Oregon State Police <Link href="/evidence/police" className="underline text-emerald-800 hover:text-emerald-600">reopens PR27478</Link>, citing a &ldquo;thorough review&rdquo; that found &ldquo;additional records, not in our system at the time of the original request,&rdquo; with production estimated at three weeks. Second supplemental filed with the Attorney General.
                    </div>
                </li>

                <li>
                    <div className="font-semibold">July 29, 2026</div>
                    <div className="mt-2 text-sm">
Phyllis Nelson, Oregon Department of Justice, issues the <Link href="/record/osp/01KYR0GMBRR83WH7FTFC90Y6DB" className="underline text-emerald-800 hover:text-emerald-600">Attorney General order, DOJ File No. 257001-GA0140-26</Link>, on the petition. Same day, I <Link href="/record/osp/01KYR9AFWRGCR1B546XC2YK3EP" className="underline text-emerald-800 hover:text-emerald-600">request the recorded video of the March 24 contact</Link>.
                    </div>
                </li>

                <li>
                    <div className="font-semibold">July 30, 2026</div>
                    <div className="mt-2 text-sm">
Holly Bolton, OSP, answers the order by <Link href="/record/osp/01KYSZGF6GK4HMAJ6KRCDBAY46" className="underline text-emerald-800 hover:text-emerald-600">providing a fee letter as the exemption assertion</Link>. David Pitcher, Department of Justice, <Link href="/record/osp/01KYSZQ430YWS431STFM7QVWAD" className="underline text-emerald-800 hover:text-emerald-600">supplies the source of the exemption reference</Link>. I answer with <Link href="/record/osp/01KYT3WXB0SQYDSBMW57E9RFSA" className="underline text-emerald-800 hover:text-emerald-600">the checklist with one item</Link> and a <Link href="/record/osp/01KYTC9F30N5YX1ZNDM5A0563G" className="underline text-emerald-800 hover:text-emerald-600">records request on the fee letter itself</Link>, acknowledged as PR36445.
                    </div>
                </li>
            </ul>

            <hr className="my-6 border-t border-gray-300" />

            <h2 className="text-xl font-semibold"><strong>AUGUST 2026</strong>: THE PRICE OF THE FILE</h2>

            <ul className="space-y-6 border-l-2 border-emerald-600 ml-6 pl-6 mt-4">
                <li>
                    <div className="font-semibold">August 11, 2026</div>
                    <div className="mt-2 text-sm">
Micah Hubbard, OSP Central Records, identifies the PR27478 records and <Link href="/record/osp/01KZS0AAY88AYPJ32PDEZABW03" className="underline text-emerald-800 hover:text-emerald-600">names a fee</Link>. The same day he prices PR36445, the request about the fee letter itself, at <Link href="/record/osp/01KZS0AEV8KA95QQZVJBCKBQEM" className="underline text-emerald-800 hover:text-emerald-600">$16,315: approximately 27,000 letters, 650 hours, release 130 weeks after payment</Link>.
                    </div>
                </li>

                <li>
                    <div className="font-semibold">August 14 &mdash; 29, 2026</div>
                    <div className="mt-2 text-sm">
I pay the PR27478 fee by money order. The payment crosses the state <Link href="/record/osp/01M0K3ECVRYYT8H5HSWTXV9475" className="underline text-emerald-800 hover:text-emerald-600">with a tracking number</Link>, is <Link href="/record/osp/01M0WVWBE0W125DD461TGHSTXG" className="underline text-emerald-800 hover:text-emerald-600">held at the post office</Link>, and <Link href="/record/osp/01M17CQRV0SHYB8VS0NYPP06B0" className="underline text-emerald-800 hover:text-emerald-600">USPS resolves the delivery</Link> on August 29.
                    </div>
                </li>
            </ul>

            <hr className="my-6 border-t border-gray-300" />

            <h2 className="text-xl font-semibold"><strong>SEPTEMBER 2026</strong>: THE PRODUCTION, THE CLAIM, AND THE FEES</h2>

            <ul className="space-y-6 border-l-2 border-emerald-600 ml-6 pl-6 mt-4">
                <li>
                    <div className="font-semibold">September 1, 2026</div>
                    <div className="mt-2 text-sm">
Chelsea Bradley, OSP Risk, <Link href="/record/osp/01M1EVZDA0BRTQTJ9JET9VCS8Y" className="underline text-emerald-800 hover:text-emerald-600">confirms preservation of the records, except item seven</Link>, which she calls beyond the scope of the process. I answer that <Link href="/record/osp/01M1EWKHV0WY1DBBNKH2RZVC0F" className="underline text-emerald-800 hover:text-emerald-600">item seven is a record</Link>. She <Link href="/record/osp/01M1EXBBJ0PB7VJXJA7FPVT6NZ" className="underline text-emerald-800 hover:text-emerald-600">forwards it to the CJIS team</Link>.
                    </div>
                </li>

                <li>
                    <div className="font-semibold">September 3, 2026</div>
                    <div className="mt-2 text-sm">
Micah Hubbard <Link href="/record/osp/01M1M4WF78XJPEJJ48D1JZ4SJ8" className="underline text-emerald-800 hover:text-emerald-600">produces the PR27478 file</Link>. I publish it in full the same day. The production is the first sight of the March 3 email, the &ldquo;asap&rdquo; order, the task force distribution, the March 11 Department of Justice characterization, the &ldquo;Suspect&rdquo; dispatch event, and the &ldquo;Hasty Plan.&rdquo; The same day I <Link href="/record/osp/01M1M6H4RR51K8RXNASW5AB9RC" className="underline text-emerald-800 hover:text-emerald-600">state the production is not sufficient</Link>, serve <Link href="/record/osp/01M1N523F0WNM96C18DTDMK0NP" className="underline text-emerald-800 hover:text-emerald-600">formal notice of tort claim</Link>, and write to the Governor: <Link href="/record/governor/01M1MEQP4GVGV0ED9D555043P2" className="underline text-emerald-800 hover:text-emerald-600">your office was the reason</Link>.
                    </div>
                </li>

                <li>
                    <div className="font-semibold">September 4, 2026</div>
                    <div className="mt-2 text-sm">
DAS Risk Management assigns <Link href="/record/osp/01M1PJ5NSR125CJQ606QX5ZXM1" className="underline text-emerald-800 hover:text-emerald-600">claim number P195403 and an adjuster</Link>.
                    </div>
                </li>

                <li>
                    <div className="font-semibold">September 5, 2026</div>
                    <div className="mt-2 text-sm">
I file <Link href="/record/governor/01M1SQ1ZF04E04FHP6PEEXPVH2" className="underline text-emerald-800 hover:text-emerald-600">a public records request with the Office of the Governor</Link> and <Link href="/record/oprd/01M1SWHHM8QSPN71SK56Q97F8C" className="underline text-emerald-800 hover:text-emerald-600">one with OPRD for the Director&rsquo;s and Deputy Director&rsquo;s records</Link>, and write to <Link href="/record/oprd/01M1S53NH8C3YG644R0W1TG0DS" className="underline text-emerald-800 hover:text-emerald-600">the emergency manager</Link> and <Link href="/record/osp/01M1S5AS2G1PK98P6VYW8M9RSQ" className="underline text-emerald-800 hover:text-emerald-600">Captain Kennedy</Link> about what each set in motion.
                    </div>
                </li>

                <li>
                    <div className="font-semibold">September 8, 2026</div>
                    <div className="mt-2 text-sm">
ODOT <Link href="/record/oprd/01M20YMVX0Y7FBDFVH6QPR70RQ/" className="underline text-emerald-800 hover:text-emerald-600">closes a records request as not the custodian</Link>, <Link href="/record/oprd/01M211VD50GEMFA0115K4FSWF6" className="underline text-emerald-800 hover:text-emerald-600">&ldquo;confirmed with Lisa Sumption&rdquo;</Link>. I put <Link href="/record/oprd/01M21706K0KZKPM48E0E14936B/" className="underline text-emerald-800 hover:text-emerald-600">ODOT&rsquo;s statement, attributed to her, on the record</Link>. The Governor&rsquo;s office <Link href="/record/governor/01M2130110ZFY7MYKJHFN7X6RA" className="underline text-emerald-800 hover:text-emerald-600">begins gathering records</Link>, with its Government Accountability Attorney as contact.
                    </div>
                </li>

                <li>
                    <div className="font-semibold">September 9, 2026</div>
                    <div className="mt-2 text-sm">
Patrol Captain Felicia Sloan confirms the Forest Service officer&rsquo;s referral to the Office of Professional Responsibility is <Link href="/record/usfs/01M23VZK3887N5QPA6F01CSFH4" className="underline text-emerald-800 hover:text-emerald-600">an administrative investigation</Link>. I notify all records officers that <Link href="/record/osp/01M23HPNPR6XQVRBZHPF2F1HYD" className="underline text-emerald-800 hover:text-emerald-600">the requests are now tracked publicly</Link>. I <Link href="/record/usfs/01M23SJK7GFQVZK7TBD2XQSVTG/" className="underline text-emerald-800 hover:text-emerald-600">correct the record on Special Agent Oliver&rsquo;s March 27 email</Link>.
                    </div>
                </li>

                <li>
                    <div className="font-semibold">September 18, 2026</div>
                    <div className="mt-2 text-sm">
Katie Gauthier, OPRD, prices the September 5 request for the Director&rsquo;s and Deputy Director&rsquo;s records at <Link href="/record/oprd/01M2VE25T0WZXS6PE4BXJK0693" className="underline text-emerald-800 hover:text-emerald-600">$1,728</Link>, and the Timeline of Events version histories at <Link href="/record/oprd/01M2VEFTARQHQW029628GQA1Y7" className="underline text-emerald-800 hover:text-emerald-600">$80</Link>. Under OAR 736-001-0030 the fee waiver decision belongs to the Director, the subject of the request. I <Link href="/record/oprd/01M2VF2JXGC49DZZZDFKKMXS2J" className="underline text-emerald-800 hover:text-emerald-600">dispute both estimates; neither will be paid</Link>, send <Link href="/record/oprd/01M2VMP7Y86Z7WBP079M7NP6WZ/" className="underline text-emerald-800 hover:text-emerald-600">the same letter as a PDF</Link>, and then <Link href="/record/oprd/01M2VPA710TYH54HFAQ7T3SFYM/" className="underline text-emerald-800 hover:text-emerald-600">say plainly what I had softened</Link>.
                    </div>
                </li>

                <li>
                    <div className="font-semibold">September 20, 2026</div>
                    <div className="mt-2 text-sm">
I serve OPRD <Link href="/record/oprd/01M30GCBNRZCAEMX90B6T5D710" className="underline text-emerald-800 hover:text-emerald-600">notice of conclusion of direct correspondence</Link>, and ask Dianne Greenlee <Link href="/record/osp/01M30EACB8FXZB4SQ3TA1ED1N3" className="underline text-emerald-800 hover:text-emerald-600">what exactly she documented about me, where it is maintained, and who received it</Link>.
                    </div>
                </li>

                <li>
                    <div className="font-semibold">September 23, 2026</div>
                    <div className="mt-2 text-sm">
                        I write to the Governor&rsquo;s attorney: <Link href="/record/oprd/01M37EHDX8XTVS3H3STMBSXZD8/" className="underline text-emerald-800 hover:text-emerald-600">you named a price, and I accepted it</Link>. I had not read his letter in full when I agreed to pay, and having read it, I name what it was built to do.
                    </div>
                </li>

                <li>
                    <div className="font-semibold">September 23, 2026</div>
                    <div className="mt-2 text-sm">
                        The March 13 transfer goes to federal oversight. I place it before <Link href="/record/outreach/01M37K9WT8ZHPBH432JWXH3TYV/" className="underline text-emerald-800 hover:text-emerald-600">Senator Wyden&rsquo;s whistleblower intake, the FBI, and the Department of Justice Inspector General</Link>, with every named officer copied; the Senator&rsquo;s office <Link href="/record/outreach/01M37MX2GGH83G886B89A9Y0H6/" className="underline text-emerald-800 hover:text-emerald-600">forwards it for review</Link> twenty-eight minutes later. I file the <Link href="/record/outreach/01M37MV4ZRW7F535J16WXD8TJ4/" className="underline text-emerald-800 hover:text-emerald-600">complaint with the Inspector General</Link>, and then the <Link href="/record/outreach/01M382W278SJK9CDV86VW0PM2A/" className="underline text-emerald-800 hover:text-emerald-600">complaint to the Special Agent in Charge of the FBI&rsquo;s Portland field office</Link> naming Task Force Officer Jake Hyde.
                    </div>
                </li>

                <li>
                    <div className="font-semibold">September 23, 2026</div>
                    <div className="mt-2 text-sm">
                        Oregon Department of Justice: I file <Link href="/record/doj/01M36H37GR1NF6QE4JC7TEMVSE/" className="underline text-emerald-800 hover:text-emerald-600">a public records request for everything the institution holds about me</Link>, nine categories, from the fusion center to counsel&rsquo;s files.
                    </div>
                </li>

                <li>
                    <div className="font-semibold">September 23, 2026</div>
                    <div className="mt-2 text-sm">
                        The audit request reaches the legislature. I ask the co-chairs of the Joint Committee on Legislative Audits to <Link href="/record/outreach/01M36JQV3RZHQCT4RRPP35JRJC/" className="underline text-emerald-800 hover:text-emerald-600">recommend the audit of OPRD volunteer-program controls</Link>. Representative Sanchez&rsquo;s office answers in eight hours, <Link href="/record/outreach/01M37F6ZBRRW96CRGD4JMJQSSY/" className="underline text-emerald-800 hover:text-emerald-600">directing it to the Audits Division</Link>; Senator Lieber&rsquo;s office <Link href="/record/outreach/01M37Q8QD8TK4MTAZ78C320WMR/" className="underline text-emerald-800 hover:text-emerald-600">concurs</Link> three hours after that.
                    </div>
                </li>

                <li>
                    <div className="font-semibold">September 5 — 7, 2026</div>
                    <div className="mt-2 text-sm">
                        I write to OPRD that <Link href="/record/oprd/01M1SFPP5GMVGVEX6CR6G74FK1/" className="underline text-emerald-800 hover:text-emerald-600">the record says you lied</Link>, and send the Director <Link href="/record/oprd/01M1T0PHFRWQNERYJENF7MVRZV/" className="underline text-emerald-800 hover:text-emerald-600">The choices are still yours</Link>. The <Link href="/record/oprd/01M1YH9QSR0JAGXR04DGFYV7VD/" className="underline text-emerald-800 hover:text-emerald-600">final version goes on September 7</Link>: tell the truth, withdraw the bar, build a real process.
                    </div>
                </li>

                <li>
                    <div className="font-semibold">September 10 — 11, 2026</div>
                    <div className="mt-2 text-sm">
                        I send OSP <Link href="/record/osp/01M2670AB06W82K8B7XVZ9D5RW/" className="underline text-emerald-800 hover:text-emerald-600">Report SP26096984, and what all of you have been doing</Link>. On September 11 I publish <Link href="/record/oprd/01M29ZRKJ8KB38SPR38V64HH2C/" className="underline text-emerald-800 hover:text-emerald-600">sunlight: the collapse of the story you told the police and yourselves</Link>, OPRD&rsquo;s Timeline of Events answered claim by claim.
                    </div>
                </li>

                <li>
                    <div className="font-semibold">September 22, 2026</div>
                    <div className="mt-2 text-sm">
I tell Greenlee <Link href="/record/osp/01M34REGP0WY727F9TQGS959Q7" className="underline text-emerald-800 hover:text-emerald-600">a response is expected</Link>. The Governor&rsquo;s office estimates $572.50 for its records and <Link href="/record/governor/01M35TPA3RXRP0HY3NM9JHDJ8F" className="underline text-emerald-800 hover:text-emerald-600">denies the fee waiver</Link>, finding the request personal and the archive an undemonstrated means of dissemination. My answer, two minutes later, in full: <Link href="/record/governor/01M35TT090PFYFTHZ1GFFA5MKA" className="underline text-emerald-800 hover:text-emerald-600">&ldquo;I will pay it. Send the instructions.&rdquo;</Link>
                    </div>
                </li>

                <li>
                    <div className="font-semibold">September 24, 2026</div>
                    <div className="mt-2 text-sm">
                        The instructions never come. I <Link href="/record/governor/01M3ABNN38T76YFJBZQ510DPD8/" className="underline text-emerald-800 hover:text-emerald-600">petition the Attorney General</Link> on two grounds: the waiver denial, and a fee set at $572.50 with the means to pay it withheld. The denial found I had not shown I could disseminate the records. That office&rsquo;s own letters were published here on the days it sent them. <Link href="/record/governor/01M3AJNQ0RYYQSV41172KZJYDZ/" className="underline text-emerald-800 hover:text-emerald-600">The payment instructions arrive</Link>. The Attorney General&rsquo;s office <Link href="/record/governor/01M3AMJFBGZ3MHAAPFM82QTEFV/" className="underline text-emerald-800 hover:text-emerald-600">acknowledges the petition</Link>, then <Link href="/record/governor/01M3AW7K3GZCPA4CD5YQ0FR2R6/" className="underline text-emerald-800 hover:text-emerald-600">refuses to decide the petition</Link>: ORS 192.427 turns on an elected official claiming the right to withhold a record, no record was withheld, and the Governor claimed nothing. I <Link href="/record/governor/01M3AZD078K7HBZ71XR4Z0XJ9P/" className="underline text-emerald-800 hover:text-emerald-600">ask for reconsideration</Link>: the statute turns on a denial, and no record was denied. That night I write to Oregon State Police that <Link href="/record/osp/01M3BEJ1PR4JHJ2X3VRPT2Z9V5/" className="underline text-emerald-800 hover:text-emerald-600">September 3 was the closest thing to integrity I have had from a state agency</Link>, and that what they withheld is where the characterizations live. The same afternoon, the Department of Justice <Link href="/record/doj/01M3APMQF8Z8NRH088RB9N765Z/" className="underline text-emerald-800 hover:text-emerald-600">calls my request for my own records very broad in scope</Link> and invites me to narrow it. I <Link href="/record/doj/01M3ARW6JRNP6YE36HCJ5A6CAC/" className="underline text-emerald-800 hover:text-emerald-600">ask which of the nine categories carry the burden</Link>, and how a request bounded by one person&rsquo;s name becomes very broad.
                    </div>
                </li>

                <li>
                    <div className="font-semibold">September 25, 2026</div>
                    <div className="mt-2 text-sm">
                        The statute provides no mechanism for reconsideration, so I file <Link href="/record/governor/01M3CP80C8CQTHRYGGJ0X91VBJ/" className="underline text-emerald-800 hover:text-emerald-600">a second petition on the fee waiver: custody is not the test</Link>.
                    </div>
                </li>

                <li>
                    <div className="font-semibold">September 26, 2026</div>
                    <div className="mt-2 text-sm">
                        I send all four agencies one letter: <Link href="/record/oprd/01M3FDMFP0VRBZCTGXQRXJ7CM3/" className="underline text-emerald-800 hover:text-emerald-600">Follow the Statute.</Link> What each did, in its own words, from the record, and what following the statute means for each.
                    </div>
                </li>
            </ul>

        </SectionPage>
    );
}

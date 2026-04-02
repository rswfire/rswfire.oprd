// app/(archive)/page.tsx

import Link from "next/link";
import Icon from "@/components/Icon";
import VideoEmbed from "@/components/archive/VideoEmbed";
import ArchiveVideos from "@/components/ArchiveVideos";
import PrimaryDocuments from "@/components/PrimaryDocuments";
import ResourcesOverview from "@/components/resources/ResourcesOverview";
import TransmissionDisclosure from "@/components/TransmissionDisclosure";

import { SEEKING_ATTORNEY_TRANSMISSION } from "@/data/20260323";

export default function OverviewPage() {
    return (
        <section className="w-full mx-auto">

            {/* RESOURCES */}
            <div className="mb-4">
                <ResourcesOverview />
            </div>

            {/* INTRODUCTION */}
            <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm">

                <div className="bg-white p-4">

                    <div className="p-4 bg-gray-50 border-l-4 border-emerald-600 text-sm">
                        <div className="font-semibold">
                            <div>Any institution that doesn't protect the people who serve it for free <em>do not deserve them</em>.</div>
                        </div>
                    </div>

                    <div className=" text-base sm:text-lg tracking-tight border-slate-200 border-t">
                        <div className="md:mx-8 md:p-4 space-y-4">
                            <div className="mt-4">In early 2025, I served as an unpaid volunteer at <Link href="https://stateparks.oregon.gov/index.cfm?do=park.profile&amp;parkId=95" target="_blank" className="underline text-emerald-800 hover:text-emerald-600">Honeyman State Park</Link>.</div>
                            <div>What began as a routine volunteer assignment quickly escalated into two months of systematic psychological pressure, coercive tactics, and institutional retaliation, followed by dismissal and expulsion from all <Link href="https://www.oregon.gov/oprd/AO/Pages/AU-about.aspx" target="_blank" className="underline text-emerald-800 hover:text-emerald-600">Oregon State Parks</Link>.</div>
                            <div>This archive is not a story about me.</div>
                            <div>It is a story about <em>them</em> &mdash; the choices they made when given evidence of abuse, when given the opportunity to stop, when given time to self-correct. And every mechanism of accountability &mdash; instead used to shield themselves.</div>
                        </div>
                    </div>

                    <div className="mt-4 ml-0 sm:ml-8 text-base text-gray-600">

                        <div className="mt-2 ml-0 sm:ml-8 pl-0 sm:pl-4 border-0 sm:border-l-4 border-emerald-700 space-y-1">
                            <div><strong>Why I built this archive</strong>: to correct an <Link href="/faq#epistemic" className="text-emerald-700 underline hover:text-emerald-600"><em>epistemic violation</em></Link>.</div>
                            <div>It is not designed to <em>win attention</em>.</div>
                            <div>It is designed to <em className="font-bold">outlast denial</em>.</div>
                        </div>

                        <div className="p-4 mt-4 text-lg tracking-tight"><Link href="/faq" className="text-emerald-700 hover:underline hover:text-emerald-600">Common questions answered here</Link>.</div>
                    </div>

                </div>
            </div>

            {/* PRIMARY DOCUMENTS */}
            <div className="mt-4">
                <PrimaryDocuments />
            </div>

            {/* MAPPING THE SYSTEM */}
            <div className="mt-4 p-6 rounded-xl bg-emerald-50 border border-emerald-300">

                <h2 className="font-bold text-lg tracking-wide">
                    <Link href="/system-map" className="hover:text-emerald-700 transition-colors">MAPPING THE SYSTEM</Link>
                </h2>

                <div className="mt-4 text-base leading-relaxed">
                    <strong>This is not a story about one park.</strong> It is about the architecture that made it possible. The structure underneath the individual choices. The mechanism that runs on volunteers at state parks and libraries and hospitals and schools &mdash; anywhere unpaid labor meets institutional authority and there is no one whose job it is to protect the person giving the labor freely.
                </div>

                <div className="mt-6 flex flex-col sm:flex-row gap-6 text-sm">
                    <div className="flex-1 space-y-2">
                        <Link href="/system-map#stage-one" className="block text-emerald-700 underline hover:text-emerald-600">1. The Origin Event</Link>
                        <Link href="/system-map#stage-two" className="block text-emerald-700 underline hover:text-emerald-600">2. The Escalation Response</Link>
                        <Link href="/system-map#stage-three" className="block text-emerald-700 underline hover:text-emerald-600">3. Trust Recruitment</Link>
                        <Link href="/system-map#stage-four" className="block text-emerald-700 underline hover:text-emerald-600">4. The Coercion Meeting</Link>
                        <Link href="/system-map#stage-five" className="block text-emerald-700 underline hover:text-emerald-600">5. Assessment &amp; Surveillance</Link>
                        <Link href="/system-map#stage-six" className="block text-emerald-700 underline hover:text-emerald-600">6. Dismissal Without Process</Link>
                    </div>
                    <div className="flex-1 space-y-2">
                        <Link href="/system-map#stage-seven" className="block text-emerald-700 underline hover:text-emerald-600">7. The Containment Call</Link>
                        <Link href="/system-map#stage-eight" className="block text-emerald-700 underline hover:text-emerald-600">8. Retaliation in Writing</Link>
                        <Link href="/system-map#stage-nine" className="block text-emerald-700 underline hover:text-emerald-600">9. Institutional Containment</Link>
                        <Link href="/system-map#stage-ten" className="block text-emerald-700 underline hover:text-emerald-600">10. The Silence Strategy</Link>
                        <Link href="/system-map#stage-eleven" className="block text-emerald-700 underline hover:text-emerald-600">11. Police Intimidation</Link>
                    </div>
                </div>

                <div className="mt-4 grid grid-cols-2 rounded-lg overflow-hidden border border-emerald-300">
                    <Link href="/system-map#requires" className="block py-2.5 text-center text-xs font-semibold uppercase tracking-widest text-emerald-700 bg-white hover:bg-emerald-100 transition-colors border-r border-emerald-300">What It Requires</Link>
                    <Link href="/system-map#breaks" className="block py-2.5 text-center text-xs font-semibold uppercase tracking-widest text-emerald-700 bg-white hover:bg-emerald-100 transition-colors">What Breaks It</Link>
                </div>

            </div>

            {/* Video */}
            <div className="mt-4">
                <TransmissionDisclosure transmission={SEEKING_ATTORNEY_TRANSMISSION} />
            </div>

            {/* THE VERDICT */}
            <div className="mt-8 w-full p-8 rounded-xl bg-white border border-slate-200 text-base">

                <h2 className="font-bold text-lg text-center tracking-wide">
                    THIS IS WHAT THEY DID
                </h2>

                <div className="mt-2 text-center text-sm font-bold">
                    Independently verifiable. Never legally challenged. Not going away.
                </div>

                <hr className="my-6 border-t border-gray-300" />

                {/* KATI BAKER */}
                <div className="mt-6">
                    <div className="font-bold text-lg"><Link href="/key-individuals" className="underline text-emerald-800 hover:text-emerald-600">Kati Baker</Link>, Park Supervisor</div>
                    <div className="mt-3 ml-3 pl-3 border-l-2 border-emerald-600">
                        <ul className="text-sm text-emerald-700 space-y-1 list-none">
                            <li><Link href="/evidence/origin" className="underline hover:text-emerald-600">Evidence: The Origin Event</Link></li>
                            <li><Link href="/evidence/escalation" className="underline hover:text-emerald-600">Evidence: The Escalation Response</Link></li>
                            <li><Link href="/evidence/trust" className="underline hover:text-emerald-600">Evidence: Trust Recruitment</Link></li>
                            <li><Link href="/evidence/coercion" className="underline hover:text-emerald-600">Evidence: The Coercion Meeting</Link></li>
                            <li><Link href="/evidence/surveillance" className="underline hover:text-emerald-600">Evidence: Assessment &amp; Surveillance</Link></li>
                            <li><Link href="/evidence/dismissal" className="underline hover:text-emerald-600">Evidence: Dismissal Without Process</Link></li>
                        </ul>
                    </div>
                    <div className="mt-3 space-y-2 text-base">
                        <div>At 6:00 AM, after I had been managing distressed guests alone since 3:00 AM during a power outage, I asked my supervisor for operational clarity. Her response felt dismissive. I named her tone in a follow-up email &mdash; a professional, documented request for the guidance I needed to do my job.</div>
                        <div>That email became the origin point of everything that followed.</div>
                        <div>Not because I did anything wrong. Because I said it in writing, and it created a record.</div>
                        <div>At the picnic table on March 5, she sat silently while Ryan Warren told me to chew glass and swallow it. She endorsed every word with her presence. When he began making admissions &mdash; that I had never been given the benefit of the doubt from day one &mdash; she stepped in to reverse it, turning his admission into a accusation: that I hadn't given <em>her</em> the benefit of the doubt.</div>
                        <div>When I documented the unidentified man who interrogated me alone, she provided cover &mdash; claiming he was IT, that photos were being taken &mdash; a claim she never substantiated and has never been asked to verify.</div>
                    </div>
                </div>

                <hr className="my-4 border-t border-gray-300" />

                {/* RYAN WARREN */}
                <div className="mt-4">
                    <div className="font-bold text-lg"><Link href="/key-individuals" className="underline text-emerald-800 hover:text-emerald-600">Ryan Warren</Link>, Park Manager</div>
                    <div className="mt-3 ml-3 pl-3 border-l-2 border-emerald-600">
                        <ul className="text-sm text-emerald-700 space-y-1 list-none">
                            <li><Link href="/evidence/escalation" className="underline hover:text-emerald-600">Evidence: The Escalation Response</Link></li>
                            <li><Link href="/evidence/coercion" className="underline hover:text-emerald-600">Evidence: The Coercion Meeting</Link></li>
                            <li><Link href="/evidence/dismissal" className="underline hover:text-emerald-600">Evidence: Dismissal Without Process</Link></li>
                        </ul>
                    </div>
                    <div className="mt-3 space-y-2 text-base">
                        <div>On February 9 &mdash; the same day Kati Baker responded dismissively to operational questions and I named her tone in a follow-up email &mdash; Ryan Warren confronted me alone and cataloged every minor mistake I had made in my first week learning the job. Not to correct me. To establish that there would be consequences for documentation.</div>
                        <div>On March 5, he summoned me to a public picnic table for over an hour of sustained psychological pressure. For the second time, he told me to &ldquo;chew glass and swallow it.&rdquo; He admitted &mdash; on recording &mdash; that he had never given me the benefit of the doubt. He repeatedly suggested I leave.</div>
                        <div>He mocked my sexuality, suggesting I &ldquo;thought I had a future&rdquo; with my male supervisor after I had explicitly set a boundary with that supervisor and told him our relationship was not romantic. He reframed every documented communication I had sent as concerning behavior. He refused to engage with a single substantive claim.</div>
                        <div>When I wouldn't quit, he called me on March 24 and dismissed me over the phone. Stated reason: a homeless man's lost journal, and a claim that I had made inappropriate comments about staff. One hour later he arrived at my RV to collect my keys. I recorded the interaction. On camera, he admitted no formal documentation existed for my removal. He gave me 24 hours to vacate the premises.</div>
                        <div>Six days before my scheduled completion. No paperwork. No process. No cause.</div>
                    </div>
                </div>

                <hr className="my-4 border-t border-gray-300" />

                {/* LOGAN BLISS */}
                <div className="mt-4">
                    <div className="font-bold text-lg"><Link href="/key-individuals" className="underline text-emerald-800 hover:text-emerald-600">Logan Bliss</Link>, Volunteer Services Lead</div>
                    <div className="mt-3 ml-3 pl-3 border-l-2 border-emerald-600">
                        <ul className="text-sm text-emerald-700 space-y-1 list-none">
                            <li><Link href="/evidence/trust" className="underline hover:text-emerald-600">Evidence: Trust Recruitment</Link></li>
                            <li><Link href="/evidence/coercion" className="underline hover:text-emerald-600">Evidence: The Coercion Meeting</Link></li>
                            <li><Link href="/evidence/expulsion" className="underline hover:text-emerald-600">Evidence: Expulsion &amp; Retaliation</Link></li>
                        </ul>
                    </div>
                    <div className="mt-3 space-y-2 text-base">
                        <div>My direct supervisor approached me alone at night in the Welcome Center, where I was working my volunteer shift. He spent 90 minutes drawing me out &mdash; his background, his concerns, his perspectives &mdash; creating the conditions for reciprocal disclosure.</div>
                        <div>The following day, at the start of a walk with him, I set a clear boundary: I told him explicitly this was not romantic. Then I shared why I had moved into an RV and relocated to the coast. My analysis of systemic instability. My concerns as a queer person about identity-based targeting through institutional actors.</div>
                        <div>He disclosed all of it to Kati Baker, Ryan Warren, and Allison Watson.</div>
                        <div>Ryan Warren used it to mock my sexuality at the March 5 meeting. Allison Watson used it to construct a psychological profile during dismissal proceedings &mdash; reframing my analysis of systemic instability as &ldquo;apocalyptic thinking,&rdquo; distorting what I said about institutional targeting of queer people into a claim that I feared Logan would kill me, pathologizing every disclosure I had shared in confidence as evidence of instability. She did this using information a supervisor had a professional obligation to protect.</div>
                        <div>He elicited trust. He extracted disclosures. He delivered them to people who were already working to remove me.</div>
                    </div>
                </div>

                <hr className="my-4 border-t border-gray-300" />

                {/* UNIDENTIFIED MAN */}
                <div className="mt-4">
                    <div className="font-bold text-lg">Unidentified Man</div>
                    <div className="mt-3 ml-3 pl-3 border-l-2 border-emerald-600">
                        <ul className="text-sm text-emerald-700 space-y-1 list-none">
                            <li><Link href="/evidence/surveillance" className="underline hover:text-emerald-600">Evidence: Assessment &amp; Surveillance</Link></li>
                        </ul>
                    </div>
                    <div className="mt-3 space-y-2 text-base">
                        <div>And that is how they justified March 18 internally. While all the rangers were away for a regional event. And I was cleaning yurts alone in A Loop.</div>
                        <div>A man appeared. No uniform. No identification. No name. He said he was &ldquo;with the park service&rdquo; and began photographing the yurts while they were still dirty &mdash; doors propped open, trash cans holding doors ajar. Then, without transition, he pressed me with direct personal questions: how do you like the park, how are you being treated, is leadership treating you well. When I didn't engage, he reframed the questions and stepped closer.</div>
                        <div>I documented the encounter with Kati Baker the same day. She explained it as IT photo documentation. No photos have ever been produced. The questions about leadership treatment were never addressed.</div>
                        <div>Six days later, I was removed.</div>
                    </div>
                </div>

                <hr className="my-4 border-t border-gray-300" />

                {/* ALLISON WATSON */}
                <div className="mt-4">
                    <div className="font-bold text-lg"><Link href="/key-individuals" className="underline text-emerald-800 hover:text-emerald-600">Allison Watson</Link>, Engagement Programs Manager</div>
                    <div className="mt-3 ml-3 pl-3 border-l-2 border-emerald-600">
                        <ul className="text-sm text-emerald-700 space-y-1 list-none">
                            <li><Link href="/evidence/trust" className="underline hover:text-emerald-600">Evidence: Trust Recruitment</Link></li>
                            <li><Link href="/evidence/coercion" className="underline hover:text-emerald-600">Evidence: The Coercion Meeting</Link></li>
                            <li><Link href="/evidence/surveillance" className="underline hover:text-emerald-600">Evidence: Assessment &amp; Surveillance</Link></li>
                            <li><Link href="/evidence/expulsion" className="underline hover:text-emerald-600">Evidence: Expulsion &amp; Retaliation</Link></li>
                        </ul>
                    </div>
                    <div className="mt-3 space-y-2 text-base">
                        <div>On March 10, Allison Watson called to tell me I had been &ldquo;acting as an agent of the state&rdquo; when I recorded the March 5 meeting &mdash; reframing my self-protection as a violation. She told me to &ldquo;get through my time.&rdquo; She dismissed documented abuse.</div>
                        <div>On March 25, she called to contain the situation after my dismissal. She used Logan's disclosures to pathologize my character. She questioned me about &ldquo;the end of the world&rdquo; in a mocking tone. She claimed I had said I was worried Logan would kill me &mdash; a deliberate distortion of what I actually said about institutional targeting of queer people. She used these disclosures to construct a narrative justifying permanent removal. I recorded the call.</div>
                        <div>I sent her a detailed letter documenting the full pattern of misconduct. Hours later, she permanently expelled me from all Oregon State Parks volunteer programs. She put the reason in writing: <em>&ldquo;the public comments made about staff regarding your volunteer service, were not in line with expectations.&rdquo;</em></div>
                        <div>That is First Amendment retaliation. On agency letterhead. In her own words.</div>
                        <div>Her professional background is in Diversity, Equity, and Inclusion. She held an institutional position specifically meant to protect vulnerable people from exactly what she did. She knew better. That makes it worse.</div>
                    </div>
                </div>

                <hr className="my-4 border-t border-gray-300" />

                {/* LISA SUMPTION */}
                <div className="mt-4">
                    <div className="font-bold text-lg"><Link href="/lisa-sumption" className="underline text-emerald-800 hover:text-emerald-600">Lisa Sumption</Link>, Director</div>
                    <div className="mt-3 ml-3 pl-3 border-l-2 border-emerald-600">
                        <ul className="text-sm text-emerald-700 space-y-1 list-none">
                            <li><Link href="/evidence/surveillance" className="underline hover:text-emerald-600">Evidence: Assessment &amp; Surveillance</Link></li>
                            <li><Link href="/evidence/containment" className="underline hover:text-emerald-600">Evidence: Institutional Containment</Link></li>
                            <li><Link href="/lisa-sumption/open-letter" className="underline hover:text-emerald-600">The Open Letter</Link></li>
                            <li><Link href="/lisa-sumption/public-records-request" className="underline hover:text-emerald-600">The Public Records Request</Link></li>
                            <li><Link href="/lisa-sumption/closure" className="underline hover:text-emerald-600">The Closure</Link></li>
                        </ul>
                    </div>
                    <div className="mt-3 space-y-2 text-base">
                        <div>On August 15, I notified the director directly of the covert surveillance encounter &mdash; an unidentified man sent to interrogate me while I was alone, during a regional event when all rangers were away. I asked three direct questions. She never responded. On December 7, I sent supplemental evidence including video documentation. She never responded.</div>
                        <div>On August 25, I sent Lisa Sumption a comprehensive open letter with audio recordings, video documentation, email chains, and written evidence of First Amendment retaliation. She responded within 12 hours with procedural language and no commitments. No investigation was ordered. No employees were held accountable. No protections were implemented.</div>
                        <div>On August 22, I submitted a comprehensive public records request. OPRD went silent for 90 days &mdash; a violation of Oregon public records law. After a formal Notice of Violation, they claimed to have responded through an internal portal I had no access to. Cost estimate for fulfillment: tens of thousands of dollars.</div>
                        <div>On December 8, she responded by reframing my comprehensive documented record as &ldquo;emotional processing&rdquo; and closed communication. Every person who abused their authority remains in their position. She shielded all of them.</div>
                        <div>She had the evidence. She had the authority. She made a choice.</div>
                    </div>
                </div>

                <hr className="my-4 border-t border-gray-300" />

                {/* JR COLLIER */}
                <div className="mt-4">
                    <div className="font-bold text-lg"><Link href="/evidence/containment" className="underline text-emerald-800 hover:text-emerald-600">J.R. Collier</Link>, Deputy Director</div>
                    <div className="mt-3 ml-3 pl-3 border-l-2 border-emerald-600">
                        <ul className="text-sm text-emerald-700 space-y-1 list-none">
                            <li><Link href="/evidence/containment" className="underline hover:text-emerald-600">Evidence: Institutional Containment</Link></li>
                        </ul>
                    </div>
                    <div className="mt-3 space-y-2 text-base">
                        <div>On January 16, 2026, I sent Allison Watson formal notice of personal liability under 42 U.S.C. § 1983 for First Amendment retaliation. Her own expulsion letter is the evidence. Qualified immunity does not apply.</div>
                        <div>On February 13, Deputy Director J.R. Collier wrote to redirect all correspondence away from Watson and other named staff. His letter described documented constitutional retaliation as dissatisfaction with &ldquo;the decision to end volunteer service.&rdquo; He made no substantive response to the 1983 notice. He instructed that any legal filing would be forwarded to Department of Justice counsel.</div>
                        <div>A senior official mobilized to insulate the person whose own written words document the constitutional violation. Not to investigate. Not to correct. To contain.</div>
                    </div>
                </div>

                <hr className="my-4 border-t border-gray-300" />

                {/* GOVERNOR KOTEK */}
                <div className="mt-4">
                    <div className="font-bold text-lg"><Link href="/governor-kotek" className="underline text-emerald-800 hover:text-emerald-600">Governor Tina Kotek</Link></div>
                    <div className="mt-3 ml-3 pl-3 border-l-2 border-emerald-600">
                        <ul className="text-sm text-emerald-700 space-y-1 list-none">
                            <li><Link href="/governor-kotek" className="underline hover:text-emerald-600">The Governor's Silence</Link></li>
                        </ul>
                    </div>
                    <div className="mt-3 space-y-2 text-base">
                        <div>Oregon's first openly LGBTQ+ governor. A gay volunteer documented identity-based targeting by her state employees. Her appointed director shielded the abusers. Her office received a formal complaint on November 18, 2025. Her campaign received comprehensive documentation on December 13, 2025.</div>
                        <div>Silence.</div>
                    </div>
                </div>

                <hr className="my-4 border-t border-gray-300" />

                {/* POLICE INTIMIDATION */}
                <div className="mt-4">
                    <div className="font-bold text-lg"><Link href="/evidence/police-intimidation" className="underline text-emerald-800 hover:text-emerald-600">Police Intimidation</Link></div>
                    <div className="mt-3 ml-3 pl-3 border-l-2 border-emerald-600">
                        <ul className="text-sm text-emerald-700 space-y-1 list-none">
                            <li><Link href="/evidence/police-intimidation" className="underline hover:text-emerald-600">Evidence: Police Intimidation</Link></li>
                        </ul>
                    </div>
                    <div className="mt-3 space-y-2 text-base">
                        <div>On March 24, 2026 &mdash; the one year anniversary of my dismissal from Honeyman State Park &mdash; three officers arrived at a locked federal gate on restricted federal land where I serve as U.S. Forest Service caretaker. They did not identify their agency. They said they were concerned about what I was posting online.</div>
                        <div>I declined to speak without an attorney and closed the door. I recorded them leaving. One license plate is clearly visible on camera.</div>
                        <div>Twenty minutes later, an officer identifying himself as Forest Service called me. He was hostile. He told me this wasn&apos;t going away. He acknowledged the visit could have been handled differently. When I called back two days later to request the names of all three officers, he refused and hung up.</div>
                        <div>He gave his name as Matt Oliver. The Forest Service has since confirmed he is Special Agent Matthew Oliver, Law Enforcement &amp; Investigations &mdash; part of their investigative branch, assigned to the Willamette and Siuslaw National Forests. Not a patrol officer. An investigator.</div>
                        <div>A year of institutional silence. And then police behind a locked gate on the anniversary.</div>
                        <div>And still the governor is silent.</div>
                    </div>
                </div>

                <hr className="my-6 border-t border-gray-300" />

                <div className="mt-4 text-lg font-bold">What they took:</div>

                <div className="mt-4">Volunteer service is not charity labor.</div>
                <div>It is civic participation.</div>
                <div>It is how citizens engage directly with the function of government.</div>

                <div className="mt-4">I chose to serve Oregon State Parks.</div>
                <div>I maintained trails. I cleaned facilities. I engaged with visitors.</div>
                <div>I participated in government as a citizen directly stewarding public land &mdash; until they took that away from me.</div>

                <div className="mt-4">On March 26, 2025, Allison Watson permanently expelled me from all Oregon State Parks volunteer programs.</div>

                <div className="mt-4">She put the reason in writing:</div>
                <div className="ml-4 italic">&ldquo;the public comments made about staff regarding your volunteer service, were not in line with expectations.&rdquo;</div>

                <div className="mt-4">That is retaliation for protected speech.</div>
                <div>That is denial of civic participation as punishment for exercising constitutional rights.</div>

                <hr className="my-6 border-t border-gray-300" />

                <div className="mt-4 text-lg font-bold">Why it matters:</div>

                <div className="mt-4">This archive exists because institutional accountability failed at every level.</div>

                <div className="mt-4">When government denies citizens the right to participate because they spoke about abuse &mdash;</div>
                <div className="ml-4">that government has stopped functioning as a democracy.</div>

                <div className="mt-4">When constitutional violations go uncorrected through every layer of escalation &mdash;</div>
                <div className="ml-4">your rights stop being real and become theoretical.</div>

                <div className="mt-4">When silence becomes the institutional response to documented harm &mdash;</div>
                <div className="ml-4">the system protects power, not people.</div>

                <div className="mt-4 font-bold">That is what this archive documents.</div>
                <div className="font-bold">That is what continues right now.</div>
                <div className="font-bold">That will not be absolved by silence, or by time.</div>

                <div className="mt-6 flex">
                    <div className="mr-2">&mdash;</div>
                    <div>
                        <div className="font-bold">Robert Samuel White</div>
                        <div className="text-gray-700">Former Oregon State Parks Volunteer</div>
                    </div>
                </div>

            </div>

            {/* ARCHIVE VIDEOS */}
            <ArchiveVideos/>

            <div className="mt-8 p-8 bg-white border border-slate-200 rounded-2xl shadow-sm">

                <div className="font-bold">This archive is not for revenge.</div>

                <div className="mt-4">It is for those who have been told they imagined it.</div>
                <div>It is for those about to walk into something similar.</div>
                <div>It is for the future, when denial no longer holds.</div>

                <div className="mt-4">It does not ask for apology.</div>
                <div>It does not ask for repair.</div>
                <div><Link href="/faq#epistemic" className="text-emerald-700 hover:underline hover:text-emerald-600">It exists so that the next distortion cannot pretend it was the first</Link>.</div>

            </div>

        </section>
    );
}

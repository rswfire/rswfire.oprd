// app/(archive)/page.tsx

import Link from "next/link";
import Icon from "@/components/Icon";
import VideoEmbed from "@/components/archive/VideoEmbed";
import ArchiveVideos from "@/components/ArchiveVideos";
import PrimaryDocuments from "@/components/PrimaryDocuments";
import ResourcesOverview from "@/components/resources/ResourcesOverview";
import DisplacementQuote from "@/components/DisplacementQuote";
import PrimaryTransmission from "@/components/PrimaryTransmission";
import { FAILURE_TRANSMISSION } from "@/data/20260405";

export default function OverviewPage() {
    return (
        <section className="w-full mx-auto">

            {/* INTRODUCTION */}
            <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm">

                <div className="bg-white p-4">

                    <blockquote className="md:p-8 border-l-4 border-red-700 pl-6 py-4 shadow-md">
                        <p className="text-lg italic text-gray-800 leading-relaxed">
                            &ldquo;Ask them why I was dismissed with less than a week to go. Ask them why I was expelled from the entire volunteer program. Ask them why silence has been their only answer.&rdquo;
                        </p>
                        <footer className="mt-3 text-sm text-gray-500 not-italic text-right mr-8">
                            — Robert Samuel White
                        </footer>
                    </blockquote>

                    {/* FOR VOLUNTEERS */}
                    <Link
                        href="/resources/volunteers"
                        className="mt-4 block rounded-xl overflow-hidden border border-red-200 shadow-sm bg-white hover:bg-red-50 transition-colors p-4"
                    >
                        <div className="flex items-center gap-3">
                            <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-red-700 shrink-0">
                                <Icon name="Shield" className="text-white" size={18} strokeWidth={1.5} />
                            </div>
                            <div>
                                <div className="text-sm font-semibold text-red-900">For Volunteers</div>
                                <div className="text-xs text-gray-500 mt-0.5">If this happened to you, it has a name.</div>
                            </div>
                        </div>
                    </Link>

                    {/* RESOURCES */}
                    <div className="mt-4">
                        <ResourcesOverview />
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

            {/* THE DISPLACEMENT FRAMEWORK */}
            <div className="mt-4 p-6 rounded-xl bg-red-50 border border-red-200">

                <h2 className="font-bold text-lg tracking-wide">
                    <Link href="/displacement" className="text-red-900 hover:text-red-700 transition-colors">THE DISPLACEMENT FRAMEWORK</Link>
                </h2>

                <div className="mt-4 text-base leading-relaxed">
                    <strong>This is not a story about one park.</strong> It is about the architecture that made it possible. The structure underneath the individual choices. The mechanism that runs on volunteers at state parks and libraries and hospitals and schools &mdash; anywhere unpaid labor meets institutional authority and there is no one whose job it is to protect the person giving the labor freely.
                </div>

                <div className="mt-6 space-y-2 text-sm">
                    <Link href="/displacement#origin" className="block text-red-700 underline hover:text-red-600">1. The Origin Event</Link>
                    <Link href="/displacement#escalation" className="block text-red-700 underline hover:text-red-600">2. The Escalation Response</Link>
                    <Link href="/displacement#trust" className="block text-red-700 underline hover:text-red-600">3. Trust Recruitment</Link>
                    <Link href="/displacement#coercion" className="block text-red-700 underline hover:text-red-600">4. The Coercion Meeting</Link>
                    <Link href="/displacement#surveillance" className="block text-red-700 underline hover:text-red-600">5. Assessment &amp; Surveillance</Link>
                    <Link href="/displacement#dismissal" className="block text-red-700 underline hover:text-red-600">6. Dismissal Without Process</Link>
                    <Link href="/displacement#expulsion" className="block text-red-700 underline hover:text-red-600">7. Expulsion &amp; Retaliation</Link>
                    <Link href="/displacement#containment" className="block text-red-700 underline hover:text-red-600">8. Institutional Containment</Link>
                    <Link href="/displacement#police" className="block text-red-700 underline hover:text-red-600">9. Police Intimidation</Link>
                </div>

                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 rounded-lg overflow-hidden border border-red-200">
                    <Link href="/displacement#requires" className="block py-2.5 text-center text-xs font-semibold uppercase tracking-widest text-red-700 bg-white hover:bg-red-100 transition-colors sm:border-r border-b sm:border-b-0 border-red-200">What It Requires</Link>
                    <Link href="/displacement#breaks" className="block py-2.5 text-center text-xs font-semibold uppercase tracking-widest text-red-700 bg-white hover:bg-red-100 transition-colors">What Breaks It</Link>
                </div>

                <div className="mt-4">
                    <Link href="/resources/volunteers" className="block text-lg text-red-700 hover:text-red-600 font-semibold text-center">If this happened to you, it has a name.</Link>
                </div>

            </div>

            {/* PRIMARY TRANSMISSION */}
            <div className="mt-4">
                <PrimaryTransmission transmission={FAILURE_TRANSMISSION} />
            </div>

            {/* PRIMARY DOCUMENTS */}
            <div className="mt-4">
                <PrimaryDocuments />
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
                    <div className="font-bold text-lg"><Link href="/key-individuals/kati-baker" className="underline text-emerald-800 hover:text-emerald-600">Kati Baker</Link>, Park Supervisor</div>
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
                    <div className="font-bold text-lg"><Link href="/key-individuals/ryan-warren" className="underline text-emerald-800 hover:text-emerald-600">Ryan Warren</Link>, Park Manager</div>
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
                    <div className="font-bold text-lg"><Link href="/key-individuals/logan-bliss" className="underline text-emerald-800 hover:text-emerald-600">Logan Bliss</Link>, Volunteer Services Lead</div>
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
                        <div>Ryan Warren used it to mock my sexuality at the March 5 meeting. Allison Watson used it to construct a psychological profile during dismissal proceedings &mdash; weaponizing my disclosures to frame me as paranoid and delusional, claiming on a recorded call that I had shared &ldquo;a staff member would be used to kill you when the end of the world occurs&rdquo; &mdash; a fabrication. I have never believed the world was ending. I have never said anything resembling this to anyone. She pathologized every disclosure I had shared in confidence as evidence of instability. She did this using information a supervisor had a professional obligation to protect.</div>
                        <div>He elicited trust. He extracted disclosures. He delivered them to people who were already working to remove me.</div>
                    </div>
                </div>

                <hr className="my-4 border-t border-gray-300" />

                {/* ALLISON WATSON */}
                <div className="mt-4">
                    <div className="font-bold text-lg"><Link href="/key-individuals/allison-watson" className="underline text-emerald-800 hover:text-emerald-600">Allison Watson</Link>, Engagement Programs Manager</div>
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
                        <div>On March 25, she called to contain the situation after my dismissal. I recorded the call. I told her I was still processing. She said okay and proceeded with her agenda. She weaponized Logan's disclosures to frame me as paranoid and delusional. She claimed I had shared that &ldquo;a staff member would be used to kill you when the end of the world occurs&rdquo; &mdash; a fabrication. I have never believed the world was ending. I have never said anything resembling this to anyone. I told her about the glass, the benefit of the doubt admission, the coercive exit attempts. She responded to each with &ldquo;okay&rdquo; and moved on. She promised a review process. She confirmed I could go to Tugman &mdash; as a citizen. She knew the volunteer placement was the entire point. The next day she cancelled everything.</div>
                        <div>I sent her a detailed letter documenting the full pattern of misconduct. Hours later, she permanently expelled me from all Oregon State Parks volunteer programs. She put the reason in writing: <em>&ldquo;the public comments made about staff regarding your volunteer service, were not in line with expectations.&rdquo;</em></div>
                        <div>That is First Amendment retaliation. On agency letterhead. In her own words.</div>
                        <div>Her professional background is in Diversity, Equity, and Inclusion &mdash; she held that role at a university before joining OPRD. She built a career on protecting vulnerable people from exactly what she did to me. She knew better. That makes it worse.</div>
                    </div>
                </div>

                <hr className="my-4 border-t border-gray-300" />

                {/* LISA SUMPTION */}
                <div className="mt-4">
                    <div className="font-bold text-lg"><Link href="/key-individuals/lisa-sumption" className="underline text-emerald-800 hover:text-emerald-600">Lisa Sumption</Link>, Director</div>
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
                        <div>On December 8, she closed communication. Her letter deployed therapeutic language to neutralize a factual record &mdash; &ldquo;deeply painful for you,&rdquo; &ldquo;frustration and hurt in your words,&rdquo; &ldquo;healing&rdquo; &mdash; without addressing a single piece of evidence. She converted documented institutional abuse into a narrative about a person who needs to heal. Every person who abused their authority remains in their position. She shielded all of them.</div>
                        <div>She had the evidence. She had the authority. She made a choice.</div>
                    </div>
                </div>

                <hr className="my-4 border-t border-gray-300" />

                {/* GOVERNOR KOTEK */}
                <div className="mt-4">
                    <div className="font-bold text-lg"><Link href="/key-individuals/tina-kotek" className="underline text-emerald-800 hover:text-emerald-600">Governor Tina Kotek</Link></div>
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

            <div className="mt-8 p-8 bg-emerald-50 border border-emerald-200 rounded-2xl shadow-sm">

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

// app/(archive)/page.tsx

import Link from "next/link";
import VideoEmbed from "@/components/archive/VideoEmbed";
import ArchiveVideos from "@/components/ArchiveVideos";

export default function OverviewPage() {
    return (
        <section className="w-full mx-auto">

            <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-sm">

                <div className="mt-6 flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                    <div className="flex-1 flex justify-center text-2xl sm:text-3xl font-bold tracking-tight text-gray-800 italic">
                        &ldquo;Chew glass and swallow it.&rdquo;
                    </div>
                    <div className="text-sm text-gray-500 flex gap-2 sm:ml-8 justify-end sm:justify-start">
                        <div className="mt-4 text-lg">&mdash;</div>
                        <div className="text-left mt-4">
                            <div className="font-bold text-lg">Ryan Warren</div>
                            <div className="text-lg">Park Manager</div>
                            <div className="italic text-lg">Oregon State Parks</div>
                            <div className="text-lg italic">Said: <Link href="/evidence/compliance/" className="underline text-emerald-700 hover:text-emerald-600">February 9</Link> and <Link href="/evidence/coercion/" className="underline text-emerald-700 hover:text-emerald-600">March 5, 2025</Link></div>
                        </div>
                    </div>
                </div>

                <hr className="my-6 border-t border-gray-300" />

                <div className="mx-8 text-base sm:text-lg tracking-tight space-y-4">
                    <div className="mt-4">In early 2025, I served as an unpaid volunteer at <Link href="https://stateparks.oregon.gov/index.cfm?do=park.profile&parkId=95" target="_blank" className="underline text-emerald-800 hover:text-emerald-600">Honeyman State Park</Link>.</div>
                    <div>What began as a routine volunteer assignment quickly escalated into two months of systematic psychological pressure, coercive tactics, and institutional retaliation, followed by dismissal and expulsion from all <Link href="https://www.oregon.gov/oprd/AO/Pages/AU-about.aspx" target="_blank" className="underline text-emerald-800 hover:text-emerald-600">Oregon State Parks</Link>.</div>
                    <div>This archive is not a story about me.</div>
                    <div>It is a story about <em>them</em> &mdash; the choices they made when given evidence of abuse, when given the opportunity to stop, when given time to self-correct. And every mechanism of accountability &mdash; instead used to shield themselves.</div>
                </div>

                <hr className="my-6 border-t border-gray-300" />

                <VideoEmbed
                    s3Url="https://hel1.your-objectstorage.com/autonomyrealms/01KE634HWNGQBK7D0CVDFYEFK0/transmissions/01KCYZ8E1GTHBZCDNYA57AM2Q0/video.mp4"
                />

                <div className="text-right text-xs"><Link href="https://rswfire.com/signal/01KCYZ8E1GTHBZCDNYA57AM2Q0" className="mr-4 hover:underline">AUTONOMY REALMS: 01KCYZ8E1GTHBZCDNYA57AM2Q0</Link></div>

                <div className="mt-4 ml-0 sm:ml-8 text-base text-gray-600">
                    <div className="mt-4 text-md tracking-tight"><strong>Five days before Christmas, 2025</strong>.</div>
                    <div className="text-md tracking-tight">My full testimony &mdash; in one take, no edits, enduring the sniffles &mdash; while walking a forest trail.</div>

                    <div className="mt-2 ml-0 sm:ml-8 pl-0 sm:pl-4 border-0 sm:border-l-4 border-emerald-700 space-y-1">
                        <div><strong>Why I built this archive</strong>: to correct an <Link href="/faq#epistemic" className="text-emerald-700 underline hover:text-emerald-600"><em>epistemic violation</em></Link>.</div>
                        <div>It is not designed to <em>win attention</em>.</div>
                        <div>It is designed to <em className="font-bold">outlast denial</em>.</div>
                    </div>

                    <div className="mt-4 text-base tracking-tight"><Link href="/faq" className="text-emerald-700 hover:underline hover:text-emerald-600">Common questions answered here</Link>.</div>
                </div>
            </div>

            {/* THE VERDICT */}
            <div className="mt-8 w-full p-8 rounded-xl bg-green-50 border border-green-300 text-base">

                <h2 className="font-bold text-lg text-center tracking-wide">
                    THIS IS WHAT THEY DID
                </h2>

                <div className="mt-2 text-center text-sm text-gray-600">
                    A documented record.<br/>Not disputed. Not investigated. Not going away.
                </div>

                <hr className="my-6 border-t border-gray-300" />

                {/* KATI BAKER */}
                <div className="mt-6">
                    <div className="font-bold text-lg"><Link href="/key-individuals" className="underline text-emerald-800 hover:text-emerald-600">Kati Baker</Link>, Park Supervisor</div>
                    <div className="mt-3 ml-3 pl-3 border-l-2 border-emerald-600">
                        <ul className="text-sm text-emerald-700 space-y-1 list-none">
                            <li><Link href="/evidence/confrontation" className="underline hover:text-emerald-600">Evidence: Confrontation</Link></li>
                            <li><Link href="/evidence/coercion" className="underline hover:text-emerald-600">Evidence: Coercion</Link></li>
                            <li><Link href="/evidence/surveillance" className="underline hover:text-emerald-600">Evidence: Surveillance</Link></li>
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

                <hr className="my-4 border-t border-gray-200" />

                {/* RYAN WARREN */}
                <div className="mt-4">
                    <div className="font-bold text-lg"><Link href="/key-individuals" className="underline text-emerald-800 hover:text-emerald-600">Ryan Warren</Link>, Park Manager</div>
                    <div className="mt-3 ml-3 pl-3 border-l-2 border-emerald-600">
                        <ul className="text-sm text-emerald-700 space-y-1 list-none">
                            <li><Link href="/evidence/coercion" className="underline hover:text-emerald-600">Evidence: Coercion</Link></li>
                            <li><Link href="/evidence/dismissal" className="underline hover:text-emerald-600">Evidence: Dismissal</Link></li>
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

                <hr className="my-4 border-t border-gray-200" />

                {/* LOGAN BLISS */}
                <div className="mt-4">
                    <div className="font-bold text-lg"><Link href="/key-individuals" className="underline text-emerald-800 hover:text-emerald-600">Logan Bliss</Link>, Volunteer Services Lead</div>
                    <div className="mt-3 ml-3 pl-3 border-l-2 border-emerald-600">
                        <ul className="text-sm text-emerald-700 space-y-1 list-none">
                            <li><Link href="/evidence/betrayal" className="underline hover:text-emerald-600">Evidence: Betrayal</Link></li>
                            <li><Link href="/evidence/coercion" className="underline hover:text-emerald-600">Evidence: Coercion</Link></li>
                            <li><Link href="/evidence/expulsion" className="underline hover:text-emerald-600">Evidence: Expulsion</Link></li>
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

                <hr className="my-4 border-t border-gray-200" />

                {/* UNIDENTIFIED OPERATIVE */}
                <div className="mt-4">
                    <div className="font-bold text-lg">Unidentified Operative</div>
                    <div className="mt-3 ml-3 pl-3 border-l-2 border-emerald-600">
                        <ul className="text-sm text-emerald-700 space-y-1 list-none">
                            <li><Link href="/evidence/surveillance" className="underline hover:text-emerald-600">Evidence: Surveillance</Link></li>
                        </ul>
                    </div>
                    <div className="mt-3 space-y-2 text-base">
                        <div>March 18. All rangers were away for a regional event. I was cleaning yurts alone in A Loop.</div>
                        <div>A man appeared. No uniform. No identification. No name. He said he was &ldquo;with the park service&rdquo; and began photographing the yurts while they were still dirty &mdash; doors propped open, trash cans holding doors ajar. Then, without transition, he pressed me with direct personal questions: how do you like the park, how are you being treated, is leadership treating you well. When I didn't engage, he reframed the questions and stepped closer.</div>
                        <div>I documented the encounter with Kati Baker the same day. She explained it as IT photo documentation. No photos have ever been produced. The questions about leadership treatment were never addressed.</div>
                        <div>Six days later, I was removed.</div>
                    </div>
                </div>

                <hr className="my-4 border-t border-gray-200" />

                {/* ALLISON WATSON */}
                <div className="mt-4">
                    <div className="font-bold text-lg"><Link href="/key-individuals" className="underline text-emerald-800 hover:text-emerald-600">Allison Watson</Link>, Engagement Programs Manager</div>
                    <div className="mt-3 ml-3 pl-3 border-l-2 border-emerald-600">
                        <ul className="text-sm text-emerald-700 space-y-1 list-none">
                            <li><Link href="/evidence/coercion" className="underline hover:text-emerald-600">Evidence: Coercion</Link></li>
                            <li><Link href="/evidence/expulsion" className="underline hover:text-emerald-600">Evidence: Expulsion</Link></li>
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

                <hr className="my-4 border-t border-gray-200" />

                {/* LISA SUMPTION */}
                <div className="mt-4">
                    <div className="font-bold text-lg"><Link href="/lisa-sumption" className="underline text-emerald-800 hover:text-emerald-600">Lisa Sumption</Link>, Director</div>
                    <div className="mt-3 ml-3 pl-3 border-l-2 border-emerald-600">
                        <ul className="text-sm text-emerald-700 space-y-1 list-none">
                            <li><Link href="/lisa-sumption/open-letter" className="underline hover:text-emerald-600">The Open Letter</Link></li>
                            <li><Link href="/lisa-sumption/public-records-request" className="underline hover:text-emerald-600">The Public Records Request</Link></li>
                            <li><Link href="/lisa-sumption/closure" className="underline hover:text-emerald-600">The Closure</Link></li>
                            <li><Link href="/evidence/containment" className="underline hover:text-emerald-600">Evidence: Containment</Link></li>
                        </ul>
                    </div>
                    <div className="mt-3 space-y-2 text-base">
                        <div>On August 25, I sent Lisa Sumption a comprehensive open letter with audio recordings, video documentation, email chains, and written evidence of First Amendment retaliation. She responded within 12 hours with procedural language and no commitments. No investigation was ordered. No employees were held accountable. No protections were implemented.</div>
                        <div>On August 22, I submitted a comprehensive public records request. OPRD went silent for 90 days &mdash; a violation of Oregon public records law. After a formal Notice of Violation, they claimed to have responded through an internal portal I had no access to. Cost estimate for fulfillment: tens of thousands of dollars.</div>
                        <div>On December 8, she responded by reframing my comprehensive documented record as &ldquo;emotional processing&rdquo; and closed communication. Every person who abused their authority remains in their position. She shielded all of them.</div>
                        <div>She had the evidence. She had the authority. She made a choice.</div>
                    </div>
                </div>

                <hr className="my-4 border-t border-gray-200" />

                {/* JR COLLIER */}
                <div className="mt-4">
                    <div className="font-bold text-lg"><Link href="/evidence/containment" className="underline text-emerald-800 hover:text-emerald-600">J.R. Collier</Link>, Deputy Director</div>
                    <div className="mt-3 ml-3 pl-3 border-l-2 border-emerald-600">
                        <ul className="text-sm text-emerald-700 space-y-1 list-none">
                            <li><Link href="/evidence/containment" className="underline hover:text-emerald-600">Evidence: Containment</Link></li>
                        </ul>
                    </div>
                    <div className="mt-3 space-y-2 text-base">
                        <div>On January 16, 2026, I sent Allison Watson formal notice of personal liability under 42 U.S.C. § 1983 for First Amendment retaliation. Her own expulsion letter is the evidence. Qualified immunity does not apply.</div>
                        <div>On February 13, Deputy Director J.R. Collier wrote to redirect all correspondence away from Watson and other named staff. His letter described documented constitutional retaliation as dissatisfaction with &ldquo;the decision to end volunteer service.&rdquo; He made no substantive response to the 1983 notice. He instructed that any legal filing would be forwarded to Department of Justice counsel.</div>
                        <div>A senior official mobilized to insulate the person whose own written words document the constitutional violation. Not to investigate. Not to correct. To contain.</div>
                    </div>
                </div>

                <hr className="my-4 border-t border-gray-200" />

                {/* GOVERNOR KOTEK */}
                <div className="mt-4">
                    <div className="font-bold text-lg"><Link href="/governor-kotek" className="underline text-emerald-800 hover:text-emerald-600">Governor Tina Kotek</Link></div>
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

            <div className="mt-8 p-8 bg-white border border-slate-200 rounded-2xl shadow-sm">
                <div className="text-xl text-black font-bold mb-4">THIS IS THE MAP. THIS IS THE PATTERN. THIS IS THE MIRROR.</div>

                <div className="mb-6 pb-4 border-b border-gray-300">
                    <div>Oregon state government can never again abuse a volunteer this way without documented precedent &mdash; or what they would euphemistically call liability.</div>
                    <div className="mt-4">When the Governor's office was directly notified and chose silence, this stopped being one agency's failure and became shared across the state structure.</div>
                    <div className="mt-4">It became pattern evidence for every volunteer program across Oregon's executive branch.</div>
                    <div className="mt-4">Their institutional silence does not erase the pattern. It confirms it.</div>
                </div>

                <div className="mt-4 font-bold">This archive is not for revenge.</div>

                <div className="mt-4">It is for those who have been told they imagined it.</div>
                <div>It is for those about to walk into something similar.</div>
                <div>It is for the future, when denial no longer holds.</div>

                <div className="mt-4">It does not ask for apology.</div>
                <div>It does not ask for repair.</div>
                <div><Link href="/faq#epistemic" className="text-emerald-700 underline hover:text-emerald-600">It exists so that the next distortion cannot pretend it was the first</Link>.</div>

            </div>

        </section>
    );
}

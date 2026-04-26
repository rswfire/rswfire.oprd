// app/(archive)/page.tsx

import {Landmark, Map} from "lucide-react";
import Link from "next/link";
import Icon from "@/components/Icon";
import ArchiveVideos from "@/components/ArchiveVideos";
import PrimaryDocuments from "@/components/PrimaryDocuments";
import ResourcesOverview from "@/components/resources/ResourcesOverview";
import PrimaryTransmission from "@/components/PrimaryTransmission";
import PersonLink from "@/components/PersonLink";
import { FAILURE_TRANSMISSION } from "@/data/20260405";

export default function OverviewPage() {
    return (
        <section className="w-full mx-auto">

            {/* INTRODUCTION */}
            <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm">

                <div className="bg-white p-4">

                    {/* OPENING STATEMENT */}
                    <div className="pt-4 sm:pt-6 px-2 text-xl sm:text-2xl font-semibold tracking-tight text-gray-900 leading-normal">
                        Oregon State Parks exploits free labor.<br/>This archive is my response.
                    </div>

                    <blockquote className="mt-4 mx-4 sm:mx-6 md:px-8 border-l-4 border-red-700 pl-6 py-2">
                        <p className="text-lg text-gray-800 leading-relaxed">
                            <span className="block">Ask them why I was dismissed with days to go.</span>
                            <span className="block mt-2 md:ml-2">Ask them why I was banned from every state park.</span>
                            <span className="block mt-2 md:ml-4">Ask them what I did that could justify either decision.</span>
                            <span className="block mt-2 md:ml-6">Then ask them why silence has been their only answer &mdash; </span>
                            <span className="block mt-2 md:ml-8">and their only defense.</span>
                        </p>
                    </blockquote>

                    {/* RESOURCES SECTION */}
                    <div className="mt-4 py-4 border-t border-b border-gray-300 space-y-4">
                        {/* FOR VOLUNTEERS */}
                        <Link
                            href="/resources/volunteers"
                            className="block rounded-xl overflow-hidden border border-red-200 shadow-sm bg-white hover:bg-red-50 transition-colors p-4"
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

                        <ResourcesOverview />
                    </div>

                    <div className=" text-base sm:text-lg tracking-tight border-slate-200 border-t">
                        <div className="md:mx-8 md:p-4 space-y-4">
                            <div className="mt-4">In early 2025, I served as an unpaid volunteer at <Link href="https://rswfire.com/?center=43.92593%2C-124.11341&zoom=15" target="_blank" className="inline-flex items-baseline gap-1 text-emerald-800 hover:text-emerald-600 underline decoration-emerald-300"><span>Honeyman State Park</span><Map size={13} strokeWidth={1.5} className="relative top-[2px] shrink-0" /></Link>.</div>
                            <div>What began as a routine volunteer assignment quickly escalated into two months of systematic psychological pressure, coercive tactics, and institutional retaliation, followed by dismissal and expulsion from all <Link href="https://www.oregon.gov/oprd/AO/Pages/AU-about.aspx" target="_blank" className="inline-flex items-baseline gap-1 text-emerald-800 hover:text-emerald-600 underline decoration-emerald-300"><span>Oregon State Parks</span><Landmark size={13} strokeWidth={1.5} className="relative top-[2px] shrink-0" /></Link>.</div>
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

                <div className="space-y-4 text-base">

                    <div>In early 2025, an unpaid volunteer at Honeyman State Park asked his supervisor a straightforward operational question during a power outage. He followed up with an email that named her dismissive tone. That email &mdash; a professional, documented request for guidance &mdash; became the origin point of everything that followed. Not because anything in it was wrong. Because it created a record.</div>

                    <div>That same day, park management escalated. The volunteer was confronted alone and cataloged for every minor first-week mistake &mdash; not to correct him, but to make clear what happens when you put things in writing.</div>

                    <div>In the weeks that followed, trust was manufactured. A supervisor spent 90 minutes drawing the volunteer out in a late-night conversation, creating the conditions for personal disclosure. Everything shared in confidence was transmitted up the chain.</div>

                    <div>Then came the meeting &mdash; a public picnic table, over an hour of sustained psychological pressure. The volunteer was told to &ldquo;chew glass and swallow it.&rdquo; His sexuality was mocked. He was repeatedly pressured to resign. On recording, park management admitted he had never been given the benefit of the doubt from day one.</div>

                    <div>The disclosures his supervisor had extracted were later weaponized &mdash; used to construct a psychological profile that framed the volunteer as paranoid and delusional, including fabricated claims he never made to anyone.</div>

                    <div>When the volunteer still wouldn&rsquo;t quit, he was dismissed by phone six days before his scheduled completion. No paperwork. No formal process. No documented cause. One hour later, the park manager arrived at his RV to collect keys and gave him 24 hours to vacate.</div>

                    <div>The volunteer sent a detailed letter documenting the full pattern of misconduct. Hours later, the program manager permanently expelled him from all Oregon State Parks volunteer programs. She put the reason in writing: <em>&ldquo;the public comments made about staff regarding your volunteer service, were not in line with expectations.&rdquo;</em> That is First Amendment retaliation. On agency letterhead. In her own words.</div>

                </div>

                <div className="mt-6 space-y-4 text-base">

                    <div className="text-lg font-bold">The institutional response</div>

                    <div>Every mechanism of accountability was used to shield the institution, not the person it harmed. The agency director received comprehensive evidence &mdash; audio recordings, video documentation, email chains, and written proof of constitutional retaliation. She responded with procedural language and no commitments. No investigation was ordered. No employees were held accountable. When she closed communication months later, she deployed therapeutic framing &mdash; &ldquo;deeply painful for you,&rdquo; &ldquo;healing&rdquo; &mdash; to convert documented abuse into a narrative about a person who needs help. Every person who abused their authority remains in their position.</div>

                    <div>A public records request went unanswered for 90 days &mdash; a violation of Oregon public records law. The Governor&rsquo;s office received a formal complaint. Oregon&rsquo;s first openly LGBTQ+ governor was told that a gay volunteer had been targeted by her state employees. Silence.</div>

                    <div>On the one-year anniversary of the volunteer&rsquo;s dismissal, a federal law enforcement agent coordinated a state police visit to his location &mdash; cross-agency pressure delivered to someone who had done nothing but document what was done to him.</div>

                </div>

                <div className="mt-6 ml-0 sm:ml-4 pl-4 border-l-2 border-emerald-600">
                    <div className="text-sm font-semibold text-emerald-800 mb-2">The people responsible are documented individually:</div>
                    <div className="text-sm space-y-1">
                        <div><PersonLink name="Kati Baker" />, Park Supervisor</div>
                        <div><PersonLink name="Ryan Warren" />, Park Manager</div>
                        <div><PersonLink name="Logan Bliss" />, Volunteer Services Lead</div>
                        <div><PersonLink name="Allison Watson" />, Engagement Programs Manager</div>
                        <div><PersonLink name="Lisa Sumption" />, Director</div>
                        <div><PersonLink name="Tina Kotek" label="Governor Tina Kotek" /></div>
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

                <div className="mt-4">On March 26, 2025, <PersonLink name="Allison Watson" /> permanently expelled me from all Oregon State Parks volunteer programs.</div>

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

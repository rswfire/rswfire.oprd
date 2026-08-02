// app/(archive)/page.tsx

import {Landmark, Map} from "lucide-react";
import Link from "next/link";
import Icon from "@/components/Icon";
import ArchiveVideos from "@/components/ArchiveVideos";
import ResourcesOverview from "@/components/resources/ResourcesOverview";
import PrimaryTransmission from "@/components/PrimaryTransmission";
import PersonLink from "@/components/PersonLink";
import DeadmanReveal from "@/components/DeadmanReveal";
import { FAILURE_TRANSMISSION } from "@/data/20260405";
import { THREADS } from "@/data/threads";
import { FAQ_QUESTIONS } from "@/data/faq";

export default function OverviewPage() {
    return (
        <section className="w-full mx-auto">

            {/* DEADMAN RELEASE — renders nothing until the switch fires */}
            <DeadmanReveal />

            {/* INTRODUCTION */}
            <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm">

                <div className="bg-white p-4">

                    {/* OPENING STATEMENT */}
                    <div className="mt-4 sm:mt-6 px-2 md:text-center text-xl sm:text-2xl font-semibold tracking-tight text-gray-900 leading-normal">
                        <span className="block">The State of Oregon has been asked for one thing:</span>
                        <span className="block">integrity.</span>
                    </div>

                    <div className="mt-4 flex flex-col gap-6 md:flex-row md:items-center md:gap-8 md:px-6 lg:px-10">
                        <blockquote className="mx-4 sm:mx-6 md:mx-0 md:order-2 md:flex-1 border-l-4 border-red-700 pl-6 py-2">
                            <p className="text-lg md:text-base text-gray-800 leading-relaxed">
                                <span className="block">The same integrity they require of a volunteer.</span>
                                <span className="block mt-2">This archive is the record of how each one answered.</span>
                                <span className="block mt-2">And how I answered back.</span>
                            </p>
                        </blockquote>

                        {/* FOR VOLUNTEERS */}
                        <Link
                            href="/resources/volunteers"
                            className="group md:order-1 shrink-0 flex flex-col w-full h-48 md:w-56 md:h-56 rounded-2xl border border-red-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden"
                        >
                            <div className="flex h-1/2 w-full items-center justify-center bg-red-700 group-hover:bg-red-800 transition-colors">
                                <Icon name="Shield" className="text-white" size={56} strokeWidth={1.5} />
                            </div>
                            <div className="flex h-1/2 w-full flex-col items-center justify-center bg-white px-4 text-center">
                                <div className="text-sm sm:text-base font-bold uppercase tracking-widest text-red-900">For Volunteers</div>
                                <div className="mt-1.5 text-xs leading-snug text-gray-600">If this happened to you,<br/>it has a name.</div>
                            </div>
                        </Link>
                    </div>

                    <div className="mt-6 text-base sm:text-lg tracking-tight border-slate-200 border-t">
                        <div className="md:mx-8 md:p-4 space-y-4">
                            <div className="mt-4">In early 2025, I served as an unpaid volunteer at <Link href="https://rswfire.com/?center=43.92593%2C-124.11341&zoom=15" target="_blank" className="inline-flex items-baseline gap-1 text-emerald-800 hover:text-emerald-600 underline decoration-emerald-300"><span>Honeyman State Park</span><Map size={13} strokeWidth={1.5} className="relative top-[2px] shrink-0" /></Link>.</div>
                            <div>What began as a routine volunteer assignment quickly escalated into two months of systematic psychological pressure, coercive tactics, and institutional retaliation, followed by dismissal and expulsion from all <Link href="https://www.oregon.gov/oprd/AO/Pages/AU-about.aspx" target="_blank" className="inline-flex items-baseline gap-1 text-emerald-800 hover:text-emerald-600 underline decoration-emerald-300"><span>Oregon State Parks</span><Landmark size={13} strokeWidth={1.5} className="relative top-[2px] shrink-0" /></Link>.</div>
                            <div>This archive is not a story about me.</div>
                            <div>It is a story about <em>them</em> &mdash; the choices they made when given evidence of abuse, when given the opportunity to stop, when given time to self-correct. And every mechanism of accountability instead used to shield themselves.</div>
                        </div>
                    </div>

                    <div className="mt-4 pb-6 ml-0 sm:ml-8 text-base text-gray-600">

                        <div className="mt-2 ml-0 sm:ml-8 pl-0 sm:pl-4 border-0 sm:border-l-4 border-emerald-700 space-y-1">
                            <div><strong>Why I built this archive</strong>: to correct an <Link href="/faq#epistemic" className="text-emerald-700 underline hover:text-emerald-600"><em>epistemic violation</em></Link>.</div>
                            <div>It is not designed to <em>win attention</em>.</div>
                            <div>It is designed to <em className="font-bold">outlast denial</em>.</div>
                        </div>

                        {/* FINAL STATEMENT */}
                        <div className="mt-8">
                            <Link
                                href="/tombstone"
                                className="inline-block text-base text-gray-900 font-serif hover:text-emerald-700 underline underline-offset-4 decoration-gray-400 hover:decoration-emerald-600 transition-colors"
                            >
                                A final statement to the Oregon Parks and Recreation Department.
                            </Link>
                        </div>

                    </div>

                </div>
            </div>

            {/* ACCOUNTABILITY */}
            <div className="mt-4 p-6 rounded-xl bg-emerald-50 border border-emerald-200">

                <div className="rounded-lg overflow-hidden border border-emerald-200 divide-y divide-emerald-100 bg-white">
                    {THREADS.map((t) => (
                        <Link
                            key={t.slug}
                            href={`/accountability/${t.slug}`}
                            className="group flex flex-col min-[400px]:flex-row min-[400px]:items-center min-[400px]:justify-between gap-1.5 min-[400px]:gap-6 px-4 py-3.5 hover:bg-emerald-50 transition-colors"
                        >
                            <span className="min-w-0">
                                <span className="block text-sm font-semibold text-emerald-900 group-hover:text-emerald-700 transition-colors">{t.title}</span>
                                <span className="mt-0.5 block text-xs uppercase tracking-wider text-gray-400">{t.filings.length} documents</span>
                            </span>
                            <span className="text-sm text-gray-800 min-[400px]:text-right">
                                {t.status}
                                <span className="ml-1.5 text-emerald-700 group-hover:translate-x-0.5 inline-block transition-transform">&rarr;</span>
                            </span>
                        </Link>
                    ))}
                </div>

            </div>

            {/* QUESTIONS */}
            <div className="mt-4 p-6 rounded-xl bg-white border border-slate-200">

                <h2 className="font-bold text-lg tracking-wide text-center">
                    <Link href="/faq" className="text-emerald-900 hover:text-emerald-700 transition-colors">COMMON QUESTIONS ANSWERED HERE</Link>
                </h2>

                <div className="mt-4 sm:pl-10">
                    <div className="grid grid-cols-1 gap-y-2.5 text-base">
                        {FAQ_QUESTIONS.map((q) => (
                            <Link
                                key={q.id}
                                href={`/faq#${q.id}`}
                                className="block text-emerald-700 underline decoration-emerald-200 hover:text-emerald-600 hover:decoration-emerald-500 transition-colors"
                            >
                                {q.question}
                            </Link>
                        ))}
                    </div>
                </div>

            </div>

            {/* WHAT THE WORD VOLUNTEER CONCEALS */}
            <div className="mt-8 w-full p-8 rounded-xl bg-white border border-slate-200 text-base">

                <h2 className="font-bold text-lg text-center tracking-wide">
                    WHAT THE WORD VOLUNTEER CONCEALS
                </h2>

                <hr className="my-6 border-t border-gray-300" />

                <div className="space-y-4">

                    <div>The word smuggles something in. It suggests that because you are there of your own volition, you do not need structural protections. That whatever happens to you, you chose it, and can simply choose otherwise.</div>

                    <div>That is not what volunteering in a public agency is.</div>

                    <div>Volunteers provide a public service to public institutions that need them. It is civic participation. It is how a citizen engages directly with the function of government, on public land, in the open, for no pay.</div>

                    <div>For the institution, it is labor they could not otherwise afford. Volunteers cover the shortfall. We clean the facilities, maintain the trails, meet the visitors, and hold the ground the agency cannot staff. The work is not incidental to how these places operate. In many parks and forests, it is how they operate.</div>

                    <div>And we receive none of the benefits or protections that the people supervising us receive.</div>

                    <div>No union. No human resources access. No grievance process. No appeal. No progressive discipline. No requirement that a reason be given. A supervisor&rsquo;s account of you is the only account, and there is no mechanism by which it can be questioned.</div>

                </div>

                <h3 className="mt-8 text-lg font-bold">You cannot always leave</h3>

                <div className="mt-4 space-y-4">

                    <div>The idea that a volunteer can simply walk away assumes a relationship that ends at the property line. Many of these do not.</div>

                    <div>We live on the land we steward. The position comes with a site, a hookup, a place to live. It is arranged months in advance and often built around a long-term commitment. Leaving is not resignation from a role. It is losing your housing, on a date you did not choose, with somewhere to be next and no time to arrange it.</div>

                    <div>Every park and every forest is different. What does not vary is the dependence. Your entire experience, and often your entire situation, rests on fair supervision. On the assumption that the person with authority over your placement will not use that authority against you.</div>

                    <div>When that assumption fails, there is nothing underneath it.</div>

                </div>

                <h3 className="mt-8 text-lg font-bold">What happened to me</h3>

                <div className="mt-4 space-y-4">

                    <div>I served as an unpaid volunteer at Honeyman State Park in early 2025. I asked an operational question during a power outage and followed up with an email that named a dismissive tone. That email created a record, and the record is what everything after it responded to.</div>

                    <div>I was confronted alone. Personal disclosures were drawn out of me and passed up the chain. I was held at a picnic table for sixty-two minutes and told to chew glass and swallow it. My sexuality was used against me. I was pressured to resign and I did not.</div>

                    <div>I was dismissed by phone six days before my term ended. The park manager arrived at my RV within the hour to collect keys and gave me twenty-four hours to vacate. Two days later I was permanently expelled from every Oregon State Parks volunteer program, in writing, on agency letterhead, for documenting my treatment.</div>

                    <div>A year later, on the anniversary of that dismissal, armed officers arrived at a locked gate where I live and work. My date of birth reached the police record from a volunteer file.</div>

                    <div>Every mechanism that could have protected me was pointed the other way.</div>

                </div>

                <h3 className="mt-8 text-lg font-bold">The instrument</h3>

                <div className="mt-4 space-y-4">

                    <div>Oregon has a statewide policy, 50.010.02, Violence-Free Workplace. It applies to every executive branch agency.</div>

                    <div>Section 7 names volunteers among those who may be barred and terminated under it.</div>

                    <div>Section 8 prohibits retaliation against those who report workplace violence. It names employees only.</div>

                    <div>The same document brings volunteers inside its enforcement reach and leaves them outside its protection. It can be pointed at us. It offers us nothing pointed back.</div>

                    <div>Twice I reported conduct that meets that policy&rsquo;s own definition of workplace violence. Once in writing. Once on the call where I was dismissed. Both times, the half of the instrument that would have protected me did not reach me. The half that could remove me did.</div>

                </div>

                <h3 className="mt-8 text-lg font-bold">Why this is here</h3>

                <div className="mt-4 space-y-4">

                    <div>This is not a claim that volunteers deserve special treatment. It is a claim that we are inside the structure, doing the work the structure depends on, and that the protections stop at a line drawn around the people who are paid.</div>

                    <div>That line is not an oversight in one park. It is written into a policy that governs an entire executive branch, and it has been in force since at least November 1, 2024.</div>

                    <div>I am one volunteer who kept the records, and that is the only reason this archive is possible.</div>

                    <div>If you volunteer for a public agency, document what happens to you, and do it with integrity, and you will already be on the right side of any action they take against you.</div>

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

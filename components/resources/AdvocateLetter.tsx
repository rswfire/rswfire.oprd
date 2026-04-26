// components/resources/AdvocateLetter.tsx
"use client";

import { useState } from "react";
import { Map } from "lucide-react";
import Link from "next/link";

export default function AdvocateLetter() {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className="my-6 rounded-lg overflow-hidden border border-slate-200 shadow-sm bg-white">

            {/* ── Header bar ── */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200 bg-white">
                <div className="text-xs font-semibold uppercase tracking-widest text-emerald-700">Open Letter</div>
                <div className="text-xs uppercase tracking-widest text-gray-400">Robert Samuel White</div>
            </div>

            {/* ── Preview (always visible) ── */}
            <div className="px-4 py-4">
                <p className="text-base leading-relaxed">
                    <strong>My name is Robert Samuel White.</strong> I am a U.S. Forest Service volunteer caretaker on the Oregon Coast, and I am writing to you because what Oregon State Parks did to me &mdash; and what they did when I wouldn&apos;t stop talking about it &mdash; raises questions about First Amendment retaliation and the constitutional rights of volunteers that deserve public attention.
                </p>
            </div>

            {/* ── Expanded content ── */}
            {expanded && (
                <div className="px-4 pb-4 max-h-[500px] overflow-y-auto" style={{ borderTop: '1px solid rgba(26,58,74,0.1)' }}>
                    <div className="space-y-4 text-base leading-relaxed pt-4">

                        <p>
                            I am writing to you from the federal land where I currently serve. On March 24, 2026 &mdash; the one-year anniversary of my retaliatory dismissal from Oregon State Parks &mdash; a U.S. Forest Service Special Agent from the investigative branch arrived at the locked gate of my federal work center with two unidentified state officers.
                        </p>

                        <p>
                            They told me they were concerned about what I was posting online. I maintain a professional archive of my experience &mdash; <Link href="/" className="underline text-emerald-800 hover:text-emerald-600">oprdvolunteerabuse.org</Link> &mdash; which is publicly accessible and has never been legally challenged. The supervisory officer has confirmed the investigative branch contact but will not disclose who authorized the visit, what its purpose was, or who the state officers were.
                        </p>

                        <p>
                            And there is no mechanism &mdash; legal, institutional, or constitutional &mdash; that has protected me. Not from Oregon State Parks. And now not from the United States Forest Service.
                        </p>

                        <hr className="my-6 border-t" style={{ borderColor: 'rgba(26,58,74,0.1)' }} />

                        <h3 style={{ fontFamily: 'var(--font-dm-mono), monospace', fontSize: '11px', letterSpacing: '0.2em', color: '#4a6475', textTransform: 'uppercase' }}>What They Did</h3>

                        <p>
                            In February 2025, I was a volunteer at <Link href="https://rswfire.com/?center=43.92593%2C-124.11341&zoom=15" target="_blank" className="inline-flex items-baseline gap-1 text-emerald-800 hover:text-emerald-600 underline decoration-emerald-300"><span>Honeyman State Park</span><Map size={13} strokeWidth={1.5} className="relative top-[2px] shrink-0" /></Link> on the Oregon Coast. I sent an email at 6AM asking for operational clarity during a power outage. My supervisor responded dismissively. I named her tone in a follow-up email.
                        </p>

                        <p>That email became the origin of everything that followed.</p>

                        <p>
                            They sat me down at a public picnic table for over an hour. The park manager told me to <em>chew glass and swallow it</em>. He admitted I was never given the benefit of the doubt from day one. He suggested repeatedly that I leave. He framed my emails as unprofessional and my interactions with everyone as problematic, while never once engaging with a single fact. I recorded all <Link href="/evidence/coercion" className="underline text-emerald-800 hover:text-emerald-600">62 minutes</Link>.
                        </p>

                        <p>
                            While I was cleaning yurts alone &mdash; while all rangers were away at a regional event &mdash; an unidentified man arrived out of uniform, with no credentials, in an unmarked state vehicle, with the demeanor of an off-duty law enforcement officer. He interrogated me about how leadership was treating me. He reframed the questions each time I refused to answer them. I documented the encounter the same day. Oregon State Parks provided a cover story within hours and then that man appeared on a Forest Service trail a year later &mdash; he is local, not IT, and has not returned since he realized who I was.
                        </p>

                        <p>
                            They <Link href="/evidence/dismissal" className="underline text-emerald-800 hover:text-emerald-600">dismissed me by phone</Link> six days before my scheduled completion, citing a homeless man&apos;s lost journal. One hour later the park manager arrived at my RV to collect the keys and admitted on camera that no formal documentation existed. I immediately recorded a video recounting the retaliation I experienced over the previous two months and posted it online.
                        </p>

                        <p>
                            The following day, Allison Watson called to contain the situation. She weaponized personal disclosures I had made in trust to paint me as unstable. She ignored every declaration I made about the inappropriate treatment I had received and instead framed me as paranoid and delusional. And this from someone with explicit DEI training and employment background. I recorded <Link href="/evidence/expulsion" className="underline text-emerald-800 hover:text-emerald-600">30 minutes and 56 seconds</Link> of that call.
                        </p>

                        <p>
                            The day after, they permanently expelled me from every Oregon State Parks volunteer program in the state. The <a href="/oprd-dismissal.pdf" download className="underline text-emerald-800 hover:text-emerald-600">expulsion letter</a> &mdash; on agency letterhead, signed &mdash; cited my public documentation of the abuse as the sole reason. Every excuse they had made for two months, and every justification they made about why I was removed, absent from that letter. And at the bottom, a designation the letter was to be kept secret.
                        </p>

                        <p className="font-semibold">
                            That is First Amendment retaliation. In writing. On state letterhead.
                        </p>

                        <hr className="my-6 border-t" style={{ borderColor: 'rgba(26,58,74,0.1)' }} />

                        <h3 style={{ fontFamily: 'var(--font-dm-mono), monospace', fontSize: '11px', letterSpacing: '0.2em', color: '#4a6475', textTransform: 'uppercase' }}>Why They Did It</h3>

                        <p>
                            They expelled me because I documented what they did. That&apos;s not an allegation. That&apos;s what the letter says.
                        </p>

                        <hr className="my-6 border-t" style={{ borderColor: 'rgba(26,58,74,0.1)' }} />

                        <h3 style={{ fontFamily: 'var(--font-dm-mono), monospace', fontSize: '11px', letterSpacing: '0.2em', color: '#4a6475', textTransform: 'uppercase' }}>What Happened When I Tried to Get Accountability</h3>

                        <p>I spent a year trying every legitimate channel available to me. Every one failed.</p>

                        <p>
                            <Link href="/lisa-sumption/closure" className="underline text-emerald-800 hover:text-emerald-600">Director Lisa Sumption</Link> closed communication by characterizing my comprehensive documented evidence as <em>emotional processing</em>. <Link href="/governor-kotek" className="underline text-emerald-800 hover:text-emerald-600">Governor Tina Kotek</Link> never responded &mdash; not once, not even an acknowledgment. Deputy Director <Link href="/evidence/containment" className="underline text-emerald-800 hover:text-emerald-600">J.R. Collier</Link> characterized documented constitutional violation as <em>dissatisfaction with a volunteer management decision</em>.
                        </p>

                        <p>
                            I served formal &sect;1983 notices citing personal liability for First Amendment retaliation. They remained silent. For a full year.
                        </p>

                        <p className="font-semibold">And then.</p>

                        <hr className="my-6 border-t" style={{ borderColor: 'rgba(26,58,74,0.1)' }} />

                        <h3 style={{ fontFamily: 'var(--font-dm-mono), monospace', fontSize: '11px', letterSpacing: '0.2em', color: '#4a6475', textTransform: 'uppercase' }}>What They Did on the Anniversary</h3>

                        <p>
                            On March 24, 2026 &mdash; the one year anniversary of my dismissal &mdash; three officers arrived at a locked federal gate on restricted federal land where I serve as U.S. Forest Service caretaker. They did not identify their agency. They told me they were <em>concerned about what I was posting online</em>.
                        </p>

                        <p>
                            I declined to speak without an attorney and closed the door. Twenty minutes later, one of the officers called. He was hostile. He told me <em>this matter was not going away</em> and that the state police wanted to talk to me.
                        </p>

                        <p>
                            The Forest Service has since confirmed that officer &mdash; Matthew Oliver, badge 555 &mdash; is a Special Agent from the investigative branch, assigned to both the Willamette and Siuslaw National Forests. When I asked the supervisory officer who authorized the visit and what its stated purpose was, she redirected me to FOIA. When I asked for the names of the two state officers who accompanied him, she redirected me to FOIA.
                        </p>

                        <p>
                            I still do not know who the two state cops were who tried to intimidate me on protected federal land.
                        </p>

                        <p>
                            And I still do not have confirmation this was sanctioned activity by any of them. The visit is <Link href="/evidence/police" className="underline text-emerald-800 hover:text-emerald-600">documented</Link>.
                        </p>

                        <hr className="my-6 border-t" style={{ borderColor: 'rgba(26,58,74,0.1)' }} />

                        <h3 style={{ fontFamily: 'var(--font-dm-mono), monospace', fontSize: '11px', letterSpacing: '0.2em', color: '#4a6475', textTransform: 'uppercase' }}>What This Case Is Actually About</h3>

                        <p className="font-semibold">There was no mechanism that kept me safe in their parks.</p>

                        <p>That sentence is the whole story.</p>

                        <p>
                            Volunteers have no protection from institutional retaliation. No HR. No grievance process. No due process requirement before removal. A state agency can sit an unpaid laborer down at a picnic table, tell them to <em>chew glass and swallow it</em>, expel them for speaking publicly about it &mdash; and then send police to their door a year later on the very anniversary of their retaliatory dismissal &mdash; behind a locked gate on restricted federal land.
                        </p>

                        <p>
                            This lack of protection is not an oversight. It is a deliberate design choice that serves every institution that depends on unpaid labor.
                        </p>

                        <p>
                            I am seeking an attorney willing to take this case to the United States Supreme Court to establish that volunteers retain First Amendment protections and cannot be subjected to institutional retaliation without recourse. I am not seeking a settlement. I am not willing to sign an NDA. I want the structural gap closed. For everyone.
                        </p>

                        <hr className="my-6 border-t" style={{ borderColor: 'rgba(26,58,74,0.1)' }} />

                        <div className="space-y-1 text-sm text-gray-600">
                            <div className="font-semibold text-gray-900">Robert Samuel White</div>
                            <div>Founder, Autonomy Realms</div>
                            <div>Owner, eNetwizard, Inc.</div>
                            <div>Former Oregon State Parks Volunteer</div>
                            <div>Current U.S. Forest Service Caretaker</div>
                            <div>Steward, oprdvolunteerabuse.org</div>
                        </div>

                    </div>
                </div>
            )}

            {/* ── Toggle ── */}
            <button
                onClick={() => setExpanded(!expanded)}
                className="w-full flex items-center justify-between px-4 py-2.5 border-t border-slate-200 bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer"
            >
                <span className="text-xs font-semibold uppercase tracking-widest text-emerald-700">
                    {expanded ? "Collapse Letter" : "Read Full Letter"}
                </span>
                <svg
                    className="w-3.5 h-3.5 text-gray-400 transition-transform duration-200"
                    style={{ transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)' }}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                </svg>
            </button>

        </div>
    );
}

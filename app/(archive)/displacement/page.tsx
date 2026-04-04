// app/(archive)/displacement/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import SectionPage from "@/components/SectionPage";

export const metadata: Metadata = {
    title: "The Displacement Framework",
    description: "Displacement is not a single act. It is a sequence — applied in stages, escalating in force, designed to remove a person from the ground they stand on before they can build a record that holds.",
};

const stages = [
    { id: "origin", number: "1", title: "The Origin Event" },
    { id: "escalation", number: "2", title: "The Escalation Response" },
    { id: "trust", number: "3", title: "Trust Recruitment" },
    { id: "coercion", number: "4", title: "The Coercion Meeting" },
    { id: "surveillance", number: "5", title: "Assessment & Surveillance" },
    { id: "dismissal", number: "6", title: "Dismissal Without Process" },
    { id: "expulsion", number: "7", title: "Expulsion & Retaliation" },
    { id: "containment", number: "8", title: "Institutional Containment" },
    { id: "police", number: "9", title: "Police Intimidation" },
]

export default function DisplacementPage() {
    return (
        <SectionPage
            title="THE DISPLACEMENT FRAMEWORK"
            subtitle="THE MACHINE AND THE WEAPON"
            previousPage={{ href: "/ethics", label: "A Note About Ethics" }}
            nextPage={{ href: "/faq", label: "Frequently Asked Questions" }}
        >

            <blockquote className="border-l-4 border-red-700 pl-6 py-4 mb-12">
                <p className="text-lg italic text-gray-800 leading-relaxed">
                    &ldquo;The threat of displacement is the institution&rsquo;s ultimate weapon. It is why volunteers stay silent. It is why abuse goes undocumented. It is why this problem persists.&rdquo;
                </p>
                <footer className="mt-3 text-sm text-gray-500 not-italic">
                    — Robert Samuel White, oprdvolunteerabuse.org
                </footer>
            </blockquote>

            <p className="text-base text-gray-700 leading-relaxed mb-4">
                Displacement is not a single act. It is a sequence — applied in stages, escalating in force, designed to remove a person from the ground they stand on before they can build a record that holds.
            </p>

            <p className="text-base text-gray-700 leading-relaxed mb-4">
                This page names both the machine and the weapon. The machine is the architecture that makes it possible — the structure underneath the individual choices, the mechanism that runs on volunteers at state parks and libraries and hospitals and schools, anywhere unpaid labor meets institutional authority and there is no one whose job it is to protect the person giving the labor freely. The weapon is displacement — the specific sequence the machine uses to remove the person who created a record.
            </p>

<p className="text-base text-gray-700 leading-relaxed mb-12 italic text-gray-600">
                If you recognize what follows, you are not imagining it.
            </p>

            <div className="p-6 bg-red-50 border-l-4 border-red-700 rounded-r-lg mb-16">
                <div className="text-base font-semibold mb-4">THE STAGES:</div>
                <ul className="space-y-2">
                    {stages.map((stage) => (
                        <li key={stage.id}><a href={`#${stage.id}`} className="text-red-700 underline hover:text-red-600">{stage.number}. {stage.title}</a></li>
                    ))}
                    <li><a href="#requires" className="text-red-700 underline hover:text-red-600">What the System Requires of You</a></li>
                    <li><a href="#breaks" className="text-red-700 underline hover:text-red-600">What Breaks the System</a></li>
                </ul>
            </div>

            {/* STAGE 1 — ORIGIN */}
            <section id="origin" className="scroll-mt-48 mb-16">
                <div className="flex items-baseline gap-3 mb-3">
                    <span className="text-xs font-mono text-red-700 uppercase tracking-widest">Stage 1</span>
                </div>
                <h2 className="text-xl font-serif font-semibold text-gray-900 mb-4">The Origin Event</h2>
                <div className="border-l-4 border-red-700 pl-6 mb-6">
                    <p className="text-base text-gray-700 leading-relaxed">
                        Documentation itself became the threat. The record — not the behavior it documented — was what they needed to eliminate. Displacement begins the moment a volunteer creates a paper trail.
                    </p>
                </div>

                <div className="space-y-4 text-base text-gray-700 leading-relaxed">
                    <p>It begins with something small.</p>
                    <p>A dismissive response. A boundary named. A communication that creates a record. Something that in a healthy institution would be unremarkable — a volunteer asking for clarity, naming a concern, documenting an interaction.</p>
                    <p>In this system, that small thing becomes the origin of everything that follows. Not because of what it was. Because of what it created.</p>
                    <p>A record.</p>
                    <p>The record is the threat. Not the behavior it documented. The record itself. Because the record means the institution can no longer control the narrative. And narrative control is how this system survives.</p>
                    <p>In this case: a 6AM text asking for operational clarity during a power outage. A follow-up email naming a supervisor&rsquo;s dismissive tone. <Link href="/evidence/origin" className="text-red-700 hover:underline">That email became the origin of everything.</Link></p>
                </div>
            </section>

            <hr className="my-6 border-t border-gray-300" />

            {/* STAGE 2 — ESCALATION */}
            <section id="escalation" className="scroll-mt-48 mb-16">
                <div className="flex items-baseline gap-3 mb-3">
                    <span className="text-xs font-mono text-red-700 uppercase tracking-widest">Stage 2</span>
                </div>
                <h2 className="text-xl font-serif font-semibold text-gray-900 mb-4">The Escalation Response</h2>
                <div className="border-l-4 border-red-700 pl-6 mb-6">
                    <p className="text-base text-gray-700 leading-relaxed">
                        Good faith compliance was met with escalation. This is how displacement works: the target&rsquo;s behavior is irrelevant. The decision to remove has already been made. The institution is building justification, not responding to conduct.
                    </p>
                </div>

                <div className="space-y-4 text-base text-gray-700 leading-relaxed">
                    <p>The institution does not respond to the record by addressing what the record documents.</p>
                    <p>It responds by escalating.</p>
                    <p>A supervisor shows up unannounced. A manager gets involved. The volunteer is confronted alone, without their direct supervisor present, without notice, without any of the procedural protections that would exist for an employee.</p>
                    <p>The escalation is designed to accomplish one thing: make the volunteer understand that documentation has consequences. That naming concerns creates problems. That the path forward requires silence, not record-keeping.</p>
                    <p>Most volunteers receive this message and absorb it. They recalibrate. They stop documenting. They get through their time. The system worked.</p>
                    <p>Some people respond to the escalation by creating a record of good faith. A documented attempt to resolve the tension on the institution&rsquo;s terms — not because resolution is expected, but because the institution&rsquo;s response to that attempt reveals what the escalation actually was.</p>
                    <p>A healthy institution resolves after that response.</p>
                    <p>This system escalates further.</p>
                    <p>The failure to resolve is the evidence. The escalation that follows a documented good faith attempt doesn&rsquo;t just prove bad faith. It proves the issue was never the behavior the institution claimed to be addressing.</p>
                    <p><Link href="/evidence/escalation" className="text-sm text-red-700 hover:underline font-mono">Read the evidence →</Link></p>
                </div>
            </section>

            <hr className="my-6 border-t border-gray-300" />

            {/* STAGE 3 — TRUST */}
            <section id="trust" className="scroll-mt-48 mb-16">
                <div className="flex items-baseline gap-3 mb-3">
                    <span className="text-xs font-mono text-red-700 uppercase tracking-widest">Stage 3</span>
                </div>
                <h2 className="text-xl font-serif font-semibold text-gray-900 mb-4">Trust Recruitment</h2>
                <div className="border-l-4 border-red-700 pl-6 mb-6">
                    <p className="text-base text-gray-700 leading-relaxed">
                        Personal disclosures were extracted through manufactured intimacy and weaponized to construct a psychological profile. Pathologizing the volunteer is the mechanism that makes displacement look like protection.
                    </p>
                </div>

                <div className="space-y-4 text-base text-gray-700 leading-relaxed">
                    <p>The system needs material.</p>
                    <p>It cannot build its case on documentation alone because the documentation doesn&rsquo;t support the case. It needs something more personal. Something that can be reframed. Something extracted from trust.</p>
                    <p>This is where a specific role activates. Not the aggressive supervisor. Not the distant manager. Someone warm. Someone who seems safe. Someone whose position is specifically meant to support the volunteer.</p>
                    <p>They elicit trust through reciprocal vulnerability. They create the conditions for disclosure. They receive what the volunteer shares — the context, the history, the analysis, the fears — and they deliver it to management.</p>
                    <p>In this case: 90 minutes of reciprocal conversation in the Welcome Center. A walk the following day. A clear boundary set before any disclosure. A cautious hour of genuine context shared in good faith. <Link href="/evidence/trust" className="text-red-700 hover:underline">Delivered to management.</Link></p>
                </div>
            </section>

            <hr className="my-6 border-t border-gray-300" />

            {/* STAGE 4 — COERCION */}
            <section id="coercion" className="scroll-mt-48 mb-16">
                <div className="flex items-baseline gap-3 mb-3">
                    <span className="text-xs font-mono text-red-700 uppercase tracking-widest">Stage 4</span>
                </div>
                <h2 className="text-xl font-serif font-semibold text-gray-900 mb-4">The Coercion Meeting</h2>
                <div className="border-l-4 border-red-700 pl-6 mb-6">
                    <p className="text-base text-gray-700 leading-relaxed">
                        Sixty-two minutes of sustained pressure designed to produce a resignation. Voluntary displacement — the target removes themselves — is the cleanest outcome for the institution. No paperwork. No process. No record.
                    </p>
                </div>

                <div className="space-y-4 text-base text-gray-700 leading-relaxed">
                    <p>Now the system has what it needs.</p>
                    <p>It calls a meeting. Not a formal disciplinary meeting with documentation and process and the procedural protections that would apply to an employee. An informal meeting. A public space. No paperwork. No witness for the volunteer. Just the institution&rsquo;s representatives and the person they&rsquo;ve decided to remove.</p>
                    <p>The meeting is not designed to resolve conflict. It is designed to apply pressure until the volunteer resigns voluntarily. Voluntary resignation is cleaner than dismissal. It requires no documentation. It produces no record of institutional misconduct. It allows the system to reset for the next person.</p>
                    <p>The pressure takes specific forms. Reframing normal communication as threatening behavior. Weaponizing personal disclosures. Suggesting repeatedly that leaving would be easier. Refusing to engage with any substantive claim. Turning every attempt at honest dialogue back into evidence of the problem.</p>
                    <p>When the volunteer names what the meeting actually is — when they refuse to be managed out of what they know — the meeting fails. The system moves to the next stage.</p>
                    <p>In this case: <Link href="/evidence/coercion" className="text-red-700 hover:underline">62 minutes at a public picnic table.</Link> Recorded. Every word preserved.</p>
                </div>
            </section>

            <hr className="my-6 border-t border-gray-300" />

            {/* STAGE 5 — SURVEILLANCE */}
            <section id="surveillance" className="scroll-mt-48 mb-16">
                <div className="flex items-baseline gap-3 mb-3">
                    <span className="text-xs font-mono text-red-700 uppercase tracking-widest">Stage 5</span>
                </div>
                <h2 className="text-xl font-serif font-semibold text-gray-900 mb-4">Assessment &amp; Surveillance</h2>
                <div className="border-l-4 border-red-700 pl-6 mb-6">
                    <p className="text-base text-gray-700 leading-relaxed">
                        A covert assessment was conducted to determine whether displacement could be justified. An unidentified man was sent while all rangers were away. The institution needed to know if the case it was building would hold.
                    </p>
                </div>

                <div className="space-y-4 text-base text-gray-700 leading-relaxed">
                    <p>The system needs to understand what it&rsquo;s dealing with.</p>
                    <p>It sends someone to assess. Not officially. Not in uniform. Not with identification. Someone who can approach the volunteer in isolation and ask direct questions about how they&rsquo;re being treated. Who can evaluate whether the volunteer is likely to escalate, go public, contact officials.</p>
                    <p>The questions are designed to elicit a response that confirms the profile the system has been building. Paranoid. Unstable. Disconnected from reality. Something that makes the documentation look like pathology rather than accuracy.</p>
                    <p>When the assessment fails — when the volunteer doesn&rsquo;t take the bait, documents the encounter professionally, and asks their supervisor about it the same day — the system produces a cover story. Immediately. Before the volunteer has time to investigate.</p>
                    <p>In this case: <Link href="/evidence/surveillance" className="text-red-700 hover:underline">an unidentified man, no uniform, no credentials, photographing dirty yurts mid-clean</Link>, asking how leadership was treating me while all rangers were away. Cover story provided within two hours.</p>
                </div>
            </section>

            <hr className="my-6 border-t border-gray-300" />

            {/* STAGE 6 — DISMISSAL */}
            <section id="dismissal" className="scroll-mt-48 mb-16">
                <div className="flex items-baseline gap-3 mb-3">
                    <span className="text-xs font-mono text-red-700 uppercase tracking-widest">Stage 6</span>
                </div>
                <h2 className="text-xl font-serif font-semibold text-gray-900 mb-4">Dismissal Without Process</h2>
                <div className="border-l-4 border-red-700 pl-6 mb-6">
                    <p className="text-base text-gray-700 leading-relaxed">
                        Physical displacement executed without documentation, without cause, with 24 hours to vacate. No paperwork. No process. The absence of process is intentional — it leaves the volunteer with nothing to appeal.
                    </p>
                </div>

                <div className="space-y-4 text-base text-gray-700 leading-relaxed">
                    <p>When the volunteer cannot be pressured into resigning and the assessment has failed, the system removes them.</p>
                    <p>Not through formal process. Not with documentation. Not with cause that would survive scrutiny. With a phone call and a knock on the door and a request to return the keys.</p>
                    <p>The stated reason is always minor. A complaint from a guest. A comment someone overheard. Something so small it cannot be the real reason and so vague it cannot be effectively contested. The real reason — that the volunteer documented abuse and refused to stop — is never stated. Because stating it creates liability.</p>
                    <p>The timing matters. Six days before scheduled completion. One shift remaining. When the economic cost of fighting it is highest and the institutional cost of the dismissal appears lowest.</p>
                    <p>In this case: <Link href="/evidence/dismissal" className="text-red-700 hover:underline">a phone call, then a knock on the RV door, then keys collected, no paperwork, 24 hours to vacate.</Link> Recorded on camera.</p>
                </div>
            </section>

            <hr className="my-6 border-t border-gray-300" />

            {/* STAGE 7 — EXPULSION */}
            <section id="expulsion" className="scroll-mt-48 mb-16">
                <div className="flex items-baseline gap-3 mb-3">
                    <span className="text-xs font-mono text-red-700 uppercase tracking-widest">Stage 7</span>
                </div>
                <h2 className="text-xl font-serif font-semibold text-gray-900 mb-4">Expulsion &amp; Retaliation</h2>
                <div className="border-l-4 border-red-700 pl-6 mb-6">
                    <p className="text-base text-gray-700 leading-relaxed">
                        Permanent displacement from all Oregon State Parks — not just Honeyman. The scope of expulsion was designed to eliminate future footholds. And the reason was put in writing: protected speech. That is the mistake that made this case.
                    </p>
                </div>

                <div className="space-y-4 text-base text-gray-700 leading-relaxed">
                    <p>When the volunteer goes public — when they document the dismissal before the institution has finished constructing its narrative — the system deploys its most sophisticated instrument.</p>
                    <p>Someone with a professional background in human engagement calls. Not to investigate. Not to offer help. To contain.</p>
                    <p>The call deploys specific techniques. Clinical reframing of political analysis as pathology. Distortion of disclosures extracted through trust into evidence of instability. Repeated attempts to get the volunteer to inhabit a false frame. Expressions of concern designed to establish that the institution tried while producing nothing that requires action.</p>
                    <p>The goal is to gather information about what the volunteer has, what they plan to do with it, and whether they can be redirected toward a resolution that disappears the record. The goal is never stated as such.</p>
                    <p>And then the system makes its most catastrophic error.</p>
                    <p>The institution puts the real reason in writing.</p>
                    <p>Not always. Most of the time the system is careful enough to cite vague conduct concerns that cannot be easily disproven. But when the institution is confident enough — when it believes the volunteer has no recourse and no audience and no platform — it sometimes names the actual reason.</p>
                    <p>Protected speech. Public comments about staff. The video. The documentation. The thing the volunteer was constitutionally entitled to do.</p>
                    <p>On agency letterhead. With a signature. With a typo in the date because it was produced in haste by someone who was not confident in what they were doing but did it anyway.</p>
                    <p>In this case: <Link href="/evidence/expulsion" className="text-red-700 hover:underline">30 minutes and 56 seconds. Recorded. The expulsion letter was signed the following day</Link> — permanent expulsion from all Oregon State Parks volunteer programs citing public comments about staff. That is First Amendment retaliation documented by the institution itself.</p>
                </div>
            </section>

            <hr className="my-6 border-t border-gray-300" />

            {/* STAGE 8 — CONTAINMENT */}
            <section id="containment" className="scroll-mt-48 mb-16">
                <div className="flex items-baseline gap-3 mb-3">
                    <span className="text-xs font-mono text-red-700 uppercase tracking-widest">Stage 8</span>
                </div>
                <h2 className="text-xl font-serif font-semibold text-gray-900 mb-4">Institutional Containment</h2>
                <div className="border-l-4 border-red-700 pl-6 mb-6">
                    <p className="text-base text-gray-700 leading-relaxed">
                        When displacement failed to silence the record, every escalation channel was used to contain it. The director, the deputy director, the governor&rsquo;s office — each chose institutional protection over accountability. Silence is displacement by another name.
                    </p>
                </div>

                <div className="space-y-4 text-base text-gray-700 leading-relaxed">
                    <p>When the volunteer continues to document and escalate, the institution builds walls.</p>
                    <p>A senior official redirects all correspondence through a single channel. The channel produces no substantive responses. Evidence of constitutional violations is described as dissatisfaction with a personnel decision. Requests for investigation are met with procedural language and no commitments. Public records requests are slow-walked past statutory deadlines then fulfilled through inaccessible portals at prohibitive cost.</p>
                    <p>The director closes communication by reframing comprehensive documented evidence as emotional processing.</p>
                    <p>Every mechanism of accountability is redirected to shield the people accountability was built to reach.</p>
                    <p>Then silence. The institution stops responding entirely. Not because there is nothing to say. Because everything it might say creates additional exposure. The surveillance cannot be explained. The cover story cannot be substantiated. The expulsion letter reaches up to someone who approved it. The containment wall is evidence of knowing something needed to be contained.</p>
                    <p>Silence feels like distance. The institution believes that if it stops engaging, the situation stops existing. That the volunteer will eventually exhaust themselves. That the documentation will fade when the intensity fades.</p>
                    <p>What silence actually produces is a timestamped record of institutional knowledge and inaction. Every letter unanswered. Every question ignored. Every opportunity to self-correct declined. All of it documented. All of it permanent. All of it discoverable.</p>
                    <p>Silence is not the end of the system. It is the system&rsquo;s final gift to the record.</p>
                    <p>In this case: <Link href="/evidence/containment" className="text-red-700 hover:underline">a Deputy Director containment wall, seven months of institutional silence, and a director who called documented evidence of constitutional violations emotional processing.</Link></p>
                </div>
            </section>

            <hr className="my-6 border-t border-gray-300" />

            {/* STAGE 9 — POLICE */}
            <section id="police" className="scroll-mt-48 mb-16">
                <div className="flex items-baseline gap-3 mb-3">
                    <span className="text-xs font-mono text-red-700 uppercase tracking-widest">Stage 9</span>
                </div>
                <h2 className="text-xl font-serif font-semibold text-gray-900 mb-4">Police Intimidation</h2>
                <div className="border-l-4 border-red-700 pl-6 mb-6">
                    <p className="text-base text-gray-700 leading-relaxed">
                        The final displacement attempt. Three officers at a locked federal gate on the anniversary of dismissal — designed to make the cost of continuing feel unsurvivable. It failed. And in failing, it became the loudest evidence of everything that came before it.
                    </p>
                </div>

                <div className="space-y-4 text-base text-gray-700 leading-relaxed">
                    <p>When silence fails — when the documentation is public, the archive is growing, and the institution has exhausted every internal mechanism of containment — the system reaches beyond its own walls.</p>
                    <p>It does not reach toward accountability. It reaches toward force.</p>
                    <p>Law enforcement arrives. Not with a warrant. Not with a complaint. Not with any legal instrument that would create a record the institution would have to answer for. Just officers at the door, citing concern about what someone is posting online.</p>
                    <p>The location matters. Not a public sidewalk. Not a shared space. A locked federal gate on federal land — a place that requires authorization to access. The timing matters. Not a random Tuesday. The anniversary of the dismissal. One year to the day.</p>
                    <p>The message is not in what the officers say. The message is in the fact that they are there at all. That the system can send people with badges and weapons to the place where you live, behind a gate that is supposed to protect you, on the day that means the most — and call it concern.</p>
                    <p>This is what the system does when documentation cannot be contained, silence cannot be enforced, and the archive will not disappear.</p>
                    <p>It sends police.</p>
                    <p>In this case: <Link href="/evidence/police" className="text-red-700 hover:underline">three officers behind a locked federal gate, on the one-year anniversary of dismissal, citing online posts.</Link> Recorded on camera.</p>
                </div>
            </section>

            <hr className="my-6 border-t border-gray-300" />

            {/* WHAT IT REQUIRES */}
            <section id="requires" className="scroll-mt-48 mb-16">
                <h2 className="text-xl font-serif font-semibold text-gray-900 mb-6">What the System Requires of You</h2>

                <div className="space-y-4 text-base text-gray-700 leading-relaxed">
                    <p>If you are reading this because you recognize what you just read — here is what the system needs from you to work.</p>
                    <p>It needs you to stop documenting when the escalation begins.</p>
                    <p>It needs you to absorb the pressure and recalibrate quietly.</p>
                    <p>It needs you to trust the person who elicits your trust before delivering your disclosures to management.</p>
                    <p>It needs you to resign voluntarily rather than forcing a documented dismissal.</p>
                    <p>It needs you to accept the check if one is offered.</p>
                    <p>It needs you to believe that the mechanisms of accountability — the director, the governor, the public records process — will work for you the way they claim to.</p>
                    <p>It needs you to move on.</p>
                    <p>It needs you to believe you are alone.</p>
                    <p>You are not alone.</p>
                </div>
            </section>

            <hr className="my-6 border-t border-gray-300" />

            {/* WHAT BREAKS IT */}
            <section id="breaks" className="scroll-mt-48 mb-16">
                <h2 className="text-xl font-serif font-semibold text-gray-900 mb-6">What Breaks the System</h2>

                <div className="space-y-4 text-base text-gray-700 leading-relaxed">
                    <p>Documentation that begins before the system knows it needs to worry about documentation.</p>
                    <p>A record that is published before the institution finishes constructing its narrative.</p>
                    <p>A volunteer who understands that the coercion meeting is a coercion meeting while they are sitting in it.</p>
                    <p>A camera running when the keys are collected without paperwork.</p>
                    <p>A call recorded before the institution knows the call is being recorded.</p>
                    <p>A compliance email that proves good faith before the system can claim bad faith.</p>
                    <p>An archive that is independently verifiable, never legally challenged, and not going away.</p>
                    <p>A plaintiff who cannot be bought, cannot be silenced, and is prepared to argue the constitutional question at the highest level.</p>
                    <p>And the knowledge that what was done to you was not personal.</p>
                    <p>It was structural.</p>
                    <p>Which means it can be documented.</p>
                    <p>Which means it can be proven.</p>
                    <p>Which means it can be changed.</p>
                </div>
            </section>

            <hr className="my-6 border-t border-gray-300" />

            <div className="text-md text-gray-500 leading-relaxed">
                <Link href="https://rswfire.com/signal/01KN9KDSG0H3W0WZ9GBCJDJMG5" target="_blank" className="text-emerald-700 underline hover:text-emerald-600">This framework was identified on April 3, 2026</Link> — one year after the first displacement was executed, and one week after the second when they brought police to my door. <Link href="https://rswfire.com/?mode=atlas&center=43.87501%2C-124.15273&zoom=17&url=https%3A%2F%2Frswfire.com%2Fsignal%2F01KN9KDSG0H3W0WZ9GBCJDJMG5%3F_overlay%3D1" target="_blank" className="text-emerald-700 underline hover:text-emerald-600">It was named on a beach</Link> on the Oregon coast. It will not be unnamed.
            </div>

        </SectionPage>
    )
}

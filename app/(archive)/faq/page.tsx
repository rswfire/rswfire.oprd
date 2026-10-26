// app/(archive)/faq/page.tsx
import type { Metadata } from "next";
import { Landmark, Map } from "lucide-react";
import Link from "next/link";
import SectionPage from "@/components/SectionPage";
import { FAQ_QUESTIONS } from "@/data/faq";

export const metadata: Metadata = {
    title: "Frequently Asked Questions",
    description: "Common questions about the documentation, decisions, and institutional responses.",
};

export default function FAQPage() {
    return (
        <SectionPage
            emblem="Ghost" tone="cyan"
            title="FREQUENTLY ASKED QUESTIONS"
            previousPage={{ href: "/displacement", label: "The Displacement Framework" }}
            nextPage={{ href: "/volunteers", label: "For Volunteers" }}
        >
            <div className="mt-8 space-y-8">

                <div className="mt-8 p-6 bg-emerald-50 border-l-4 border-emerald-600 rounded-r-lg">
                    <div className="text-base font-semibold mb-4">QUESTIONS:</div>
                    <ul className="space-y-2">
                        {FAQ_QUESTIONS.map((q) => (
                            <li key={q.id}>
                                <a href={`#${q.id}`} className="text-emerald-700 underline hover:text-emerald-600">
                                    {q.question}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <hr className="border-t border-gray-300" />

                {/* Question 1 */}
                <div id="sue" className="scroll-mt-48">
                    <h2 className="text-xl font-semibold mb-3">
                        Why haven't you sued them?
                    </h2>
                    <div className="space-y-4">
                        <div>Because what matters to me is building the complete public record, and I did not need court when I could do it myself.</div>
                    </div>
                </div>

                <hr className="border-t border-gray-300" />

                {/* Question 2 */}
                <div id="target" className="scroll-mt-48">
                    <h2 className="text-xl font-semibold mb-3">
                        Why would they target you?
                    </h2>
                    <div className="space-y-4">
                        <div>This question implies I did something to justify what happened.</div>
                        <div>Ask yourself this instead: what could I have done that justifies sustained psychological pressure over two months, dismissal without cause, a permanent statewide ban from volunteer service, three men with guns at my home and workplace one year later, and the institution&rsquo;s continuing refusal to account for any of it?</div>
                        <div>The answer is nothing.</div>
                        <div>Because the question itself is backwards.</div>
                        <div>The issue isn't what I did &mdash; the issue is what <em>they did</em> when someone documented their behavior and refused to accept their behavior as normal.</div>
                    </div>
                </div>

                <hr className="border-t border-gray-300" />

                {/* Question 3 */}
                <div id="leave" className="scroll-mt-48">
                    <h2 className="text-xl font-semibold mb-3">
                        Why didn't you leave?
                    </h2>
                    <div className="space-y-4">
                        <div>I had a year of volunteer assignments lined up across Oregon's coast. I had restructured my entire life around this trajectory.</div>
                        <div>I had economic constraints that made the volunteer housing model workable when other options weren't.</div>
                        <div>I quietly looked for alternatives during the weeks of escalating pressure. Nothing materialized in time.</div>
                        <div>But none of these reasons matter.</div>
                        <div>I was volunteering for a state park. A public institution. Offering unpaid labor to support Oregon's natural spaces.</div>
                        <div>I should be able to do that without being subjected to psychological abuse, identity-based targeting, and supervisory betrayal.</div>
                        <div>And if that standard fails &mdash; if someone reports documented harm &mdash; there should be corrective pathways that protect the person reporting, not the people who caused the harm.</div>
                        <div>The question isn't why I didn't leave.</div>
                        <div>The question is: why should anyone have to leave a volunteer position because park supervisors targeted them and the institution shielded the supervisors instead?</div>
                        <div>That's the institutional failure this archive documents.</div>
                        <div>Not my decision to stay. Their decision to make staying untenable through systematic abuse &mdash; then punish me for documenting it.</div>
                    </div>
                </div>

                <hr className="border-t border-gray-300" />

                {/* Question 4 */}
                <div id="move-on" className="scroll-mt-48">
                    <h2 className="text-xl font-semibold mb-3">
                        Why not move on?
                    </h2>
                    <div className="space-y-4">
                        <div>Because moving on means accepting that institutions can target volunteers, weaponize their identities, retaliate for protected speech, and face no consequences.</div>
                        <div>And it also means the next person who reports abuse gets the same treatment I did.</div>
                        <div>I will not stand apart from abuse I can prevent.</div>
                        <div>I came to serve Oregon's public lands without compensation. I was targeted, dismissed, and banned for documenting what was done to me.</div>
                        <div>If that's acceptable, then the volunteer program itself is fundamentally broken and people deserve to know that before they give their time and labor to them.</div>
                    </div>
                </div>

                <hr className="border-t border-gray-300" />

                {/* Question 5 */}
                <div id="contact" className="scroll-mt-48">
                    <h2 className="text-xl font-semibold mb-3">
                        Why did you keep contacting them?
                    </h2>
                    <div className="space-y-4">
                        <div>{"This question implies it was wrong to contact public officials. It was not. That is your right under the Constitution. I was building a record and placing it in the inboxes where I felt that record belonged. It's that simple. I never needed nor sought their responses to those records. What they did with them is a different question, and one you'll have to ask them."}</div>
                    </div>
                </div>

                <hr className="border-t border-gray-300" />

                {/* Question 6 */}
                <div id="response" className="scroll-mt-48">
                    <h2 className="text-xl font-semibold mb-3">
                        Have they responded to any of this?
                    </h2>

                    <div className="space-y-4">
                        <div>Director Lisa Sumption <Link href="/lisa-sumption/open-letter" className="text-emerald-700 underline hover:text-emerald-600">responded in August 2025</Link> with procedural language and no commitments. She <Link href="/lisa-sumption/closure" className="text-emerald-700 underline hover:text-emerald-600">closed communication in December 2025</Link>, answering comprehensive documentation of misconduct and retaliation with therapeutic language.</div>
                        <div>This is a common institutional response to documented harm: evidence is reduced to emotion, documentation is treated as distress, and continued reporting is framed as the problem rather than the conduct being reported.</div>
                        <div>The effects of this response are predictable and harmful. It delegitimizes documented abuse, discourages others from reporting, and shields the people who caused the harm by recasting accountability requests as instability.</div>
                        <div>No investigation was ordered. No findings were issued. No corrective action was taken.</div>
                        <div>Governor Kotek&rsquo;s office has been contacted repeatedly and copied on the later record. There has been no response and no acknowledgment of receipt. <Link href="/governor-kotek" className="text-emerald-700 underline hover:text-emerald-600">That complete silence is documented here</Link>.</div>
                    </div>
                </div>

                <hr className="border-t border-gray-300" />

                {/* Question 6 */}
                <div id="verify" className="scroll-mt-48">
                    <h2 className="text-xl font-semibold mb-3">
                        How can people verify this documentation?
                    </h2>
                    <div className="space-y-4">
                        <div>This is the right question.</div>
                        <div>Audio recordings, video documentation, and email correspondence are embedded throughout this archive.</div>
                        <div>The <Link href="/records" className="text-emerald-700 underline hover:text-emerald-600">correspondence section</Link> stores all external communications in unmodified .eml format in my <Link href="https://github.com/rswfire/rswfire.oprd" target="_blank" className="text-emerald-700 underline hover:text-emerald-600">public repository</Link>.</div>
                        <div>Everything claimed here is independently verifiable. Names, dates, specific statements &mdash; all documented.</div>
                        <div>I invite you to request further information from <Link href="https://www.oregon.gov/oprd/AO/Pages/AU-about.aspx" target="_blank" className="inline-flex items-baseline gap-1 text-emerald-800 hover:text-emerald-600 underline decoration-emerald-300"><span>Oregon State Parks</span><Landmark size={13} strokeWidth={1.5} className="relative top-[2px] shrink-0" /></Link> directly. I will note I tried the <Link href="/lisa-sumption/public-records-request" className="text-emerald-700 underline hover:text-emerald-600">public records</Link> route myself but that route resulted in no records being produced despite statutory timelines.</div>
                        <div>But as far as the record is concerned: everything you need is already here.</div>
                        <div>This isn't a narrative. It's a record, and I have always treated it as such.</div>
                    </div>
                </div>

                <hr className="border-t border-gray-300" />

                <div id="ai" className="scroll-mt-48">
                    <h2 className="text-xl font-semibold mb-3">
                        Does any of this use AI?
                    </h2>
                    <div className="space-y-4">
                        <div>Yes. I&rsquo;ve used machines all of my life. AI is no different.</div>
                        <div>AI is in all of my writing, this site included, and I am not ashamed of that. It works from my intent. Directing it is the job: I decide what needs to be said, and I make sure the language is accurate and says it. Nothing is published here that I have not read, corrected, and stood behind.</div>
                        <div>None of this touches the record. The state&rsquo;s letters are preserved as received. The recordings are unedited. The emails carry cryptographic signatures. Download any original and verify it yourself. You do not have to trust me, and you do not have to trust a machine.</div>
                    </div>
                </div>

                <hr className="border-t border-gray-300" />

                {/* Question 7 */}
                <div id="accountability" className="scroll-mt-48">
                    <h2 className="text-xl font-semibold mb-3">
                        What do you want to happen?
                    </h2>
                    <div className="space-y-4">
                        <div>Accountability. The same thing you would want.</div>
                        <div>More precisely:</div>
                        <div className="space-y-2">
                            <ul className="list-disc list-outside ml-8">
                                <li>Independent investigation into documented misconduct at <Link href="https://rswfire.com/?center=43.92593%2C-124.11341&zoom=15" target="_blank" className="inline-flex items-baseline gap-1 text-emerald-800 hover:text-emerald-600 underline decoration-emerald-300"><span>Honeyman State Park</span><Map size={13} strokeWidth={1.5} className="relative top-[2px] shrink-0" /></Link>.</li>
                                <li>Accountability for supervisors who betrayed trust and weaponized identity.</li>
                                <li>Systemic protections preventing retaliation against volunteers who report abuse.</li>
                                <li>Public commitment to volunteer program integrity and LGBTQ+ safety backed by action, not rhetoric.</li>
                                <li>Appropriate consequences for Director Lisa Sumption's choice to protect documented abusers rather than the volunteer they targeted.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <hr className="border-t border-gray-300" />

                {/* Question 8 */}
                <div id="retaliation" className="scroll-mt-48">
                    <h2 className="text-xl font-semibold mb-3">
                        Aren't you worried about retaliation?
                    </h2>

                    <div className="space-y-4">
                        <div>No.</div>
                        <div>They already retaliated.</div>
                        <div>That's documented in <Link href="/evidence/expulsion" className="text-emerald-700 underline hover:text-emerald-600">the program manager's removal letter</Link>, which explicitly states I was banned for speaking publicly about what happened.</div>
                        <div>The retaliation did not end with expulsion. On March 24, 2026 &mdash; exactly one year after the dismissal &mdash; three men with guns came through a locked gate to the federal land where I live and work because of what I published about OPRD. I declined to speak without an attorney and <Link href="/evidence/police" className="text-emerald-700 underline hover:text-emerald-600">recorded them leaving</Link>.</div>
                        <div>I am not worried about further retaliation.</div>
                        <div>Any further act will enter the same public, independently verifiable record.</div>
                    </div>
                </div>

                <hr className="border-t border-gray-300" />

                {/* Question 9 */}
                <div id="proper-channels" className="scroll-mt-48">
                    <h2 className="text-xl font-semibold mb-3">
                        Why make this public instead of going through proper channels?
                    </h2>
                    <div className="space-y-4">
                        <div>Because I used the available channels, and the record shows what each one produced.</div>
                        <div>The program manager had the opportunity to protect me when I <Link href="/timeline" className="text-emerald-700 underline hover:text-emerald-600">reported what was happening</Link> &mdash; on March 10, the day she called to intimidate me about recording the day-use area meeting.</div>
                        <div>That was her job. There was <em>no one else</em> to escalate to if you experienced a problem. I was isolated. That is a design choice.</div>
                        <div>Instead, when I <Link href="/evidence/dismissal" className="text-emerald-700 underline hover:text-emerald-600">documented the abuse</Link> publicly (something I only did after I'd <em>already</em> been dismissed by the park manager and told to &quot;get through my time&quot; by the program manager), she <Link href="/evidence/expulsion" className="text-emerald-700 underline hover:text-emerald-600">retaliated in writing</Link>, explicitly citing my protected speech as the reason for expulsion.</div>
                        <div>After that I wrote to the Director, the Deputy Director, the Commission, and the Governor. I made public records requests to OPRD, Oregon State Police, and the Department of Administrative Services. I filed petitions with the Attorney General, a federal incident report, and an inquiry with the U.S. Forest Service. I notified legislators about the statewide policy gap that exposes volunteers to retaliation. The <Link href="/records" className="text-emerald-700 underline hover:text-emerald-600">accountability pages</Link> preserve the requests and the responses in date order.</div>
                        <div>A &quot;proper channel&quot; is meaningful only if it can produce accountability. Here, every available channel preserved the institution&rsquo;s authority while exhausting, isolating, or dismissing the person reporting harm.</div>
                        <div>But here's the better question: why shouldn't I document in public?</div>
                        <div>Who are we protecting by keeping institutional abuse private? The answer is the institution &mdash; not the people it harms.</div>
                        <div>And I know this is shocking, but institutions don't have to harm people.</div>
                    </div>
                </div>

                <hr className="border-t border-gray-300" />

                {/* Question 10 */}
                <div id="silence" className="scroll-mt-48">
                    <h2 className="text-xl font-semibold mb-3">
                        What does their silence mean?
                    </h2>
                    <div className="space-y-4">
                        <div>Their silence is a choice.</div>
                        <div>Director Lisa Sumption <Link href="/lisa-sumption/open-letter" className="text-emerald-700 underline hover:text-emerald-600">received comprehensive evidence</Link> in August 2025 &mdash; audio recordings, video documentation, written proof of retaliation. She responded with procedural language and took no action.</div>
                        <div>Governor Kotek's office has been notified repeatedly and copied on the later interagency record. There has been no response and no acknowledgment of receipt.</div>
                        <div>OPRD&rsquo;s silence rests on a judgment about standing. In the institution&rsquo;s view of itself, a former volunteer it expelled has no recognized position from which to require an answer: no employment relationship, no grievance right, no place inside the institution. It treats the removal as if it also removed its obligation to account for what it did.</div>
                        <div>That is an inversion of what a public institution is.</div>
                        <div>A public institution does not decide who has standing to question its use of public power. Its authority comes from the public. I do not need an ongoing role inside OPRD, or OPRD&rsquo;s recognition of me, to require it to answer for the conduct of its officials.</div>
                        <div>If expelling someone also extinguishes the institution&rsquo;s obligation to answer them, removal becomes a mechanism for escaping accountability. The institution could create its own silence by first excluding the person to whom it owes an answer.</div>
                        <div>This is not standing in the technical sense required by a court. It is the relationship between a public institution and the public from which its authority derives. OPRD answers to the public. The public does not answer to OPRD.</div>
                    </div>
                </div>

                <hr className="border-t border-gray-300" />

                {/* Question 11 */}
                <div id="tone" className="scroll-mt-48">
                    <h2 className="text-xl font-semibold mb-3">
                        Why is your tone so direct?
                    </h2>
                    <div className="space-y-4">
                        <div>Because I am direct. There is nothing wrong with that.</div>
                        <div>Direct communication is not misconduct. It does not justify coercion, surveillance, dismissal, expulsion, retaliation, or any other treatment documented in this archive.</div>
                        <div>My tone does not alter the recordings, the correspondence, the dates, or the agency&rsquo;s own documents. The evidence either supports what I say or it does not.</div>
                        <div>Using my directness to explain or excuse what happened would invert responsibility: it would make my manner of describing institutional conduct more important than the conduct itself.</div>
                    </div>
                </div>

                <hr className="border-t border-gray-300" />

                {/* Question 12 */}
                <div id="epistemic" className="scroll-mt-48">
                    <h2 className="text-xl font-semibold mb-3">
                        What is an epistemic violation?
                    </h2>
                    <div className="space-y-4">
                        <div>An epistemic violation is when someone colonizes your interior. They use their standing to trespass where they have none. It is a form of theft, and I do not consent to it.</div>
                        <div>It is the act of deciding what is inside another person &mdash; what they feel, what they believe, what they intend &mdash; and writing it down as fact. The institution then acts on the person it wrote, not the one standing in front of it.</div>
                        <div>Here is the person they wrote.</div>
                        <div>At the picnic table, the park manager assigned me a desire: &ldquo;you believe that [Volunteer Services Lead] is part of your future&rdquo; (<Link href="/evidence/coercion?t=19:49" className="text-emerald-700 underline hover:text-emerald-600">19:49</Link>).</div>
                        <div>In the timeline the program manager kept on me for a year, never shown to me, she assigned me a belief: &ldquo;he believes the world is going to end and that&rsquo;s one of the reasons he came to Honeyman.&rdquo; She assigned me a memory: &ldquo;Sam would act like he never said that and has no recollection of saying that&rdquo; (<Link href="/sunlight" className="text-emerald-700 underline hover:text-emerald-600">the Timeline of Events</Link>).</div>
                        <div>The Director assigned me feelings: &ldquo;deeply painful,&rdquo; &ldquo;a sense of purpose and healing&rdquo; (<Link href="/record/oprd/01KBZ9S95G2W5B44TTGT6HA69N" className="text-emerald-700 underline hover:text-emerald-600">December 8, 2025</Link>).</div>
                        <div>Then it went to the police, and it did not begin with anything I did. It began with a link. A man I have never met sent this archive to the state police press captain, &ldquo;since he is now including the Governor as well as our Director&rdquo; (<Link href="/record/osp/01M1M4WF78XJPEJJ48D1JZ4SJ8" className="text-emerald-700 underline hover:text-emerald-600">the email</Link>). He alleged no crime and quoted no threat. The program manager&rsquo;s timeline followed it.</div>
                        <div>A detective read my archive and assigned me the rest: &ldquo;upset,&rdquo; &ldquo;perceived grievances,&rdquo; &ldquo;a clear and obvious change in attitude and demeanor.&rdquo; No post, no sentence and no date stands behind any of it. His report names no threat and no act. He came to my door anyway, &ldquo;in an effort to interrupt, deescalate,&rdquo; with nothing on record to interrupt and nothing to de-escalate: armed, through a locked federal gate, on the anniversary of the dismissal, to tell me I was &ldquo;not in trouble&rdquo; (<a href="/records/osp/attachments/01m1m4wf78xjpejj48d1jz4sj8-Report-and-Attachements-from-Niche-RMS-SP26096984.pdf" className="text-emerald-700 underline hover:text-emerald-600">the report</a>).</div>
                        <div>When I called to ask for the officers&rsquo; names, the Forest Service Special Agent assigned me agitation: &ldquo;WHITE became agitated raising his voice and rambling about restricted Federal Lands&rdquo; (<a href="/records/osp/attachments/01m1m4wf78xjpejj48d1jz4sj8-Report-and-Attachements-from-Niche-RMS-email-from-FS-SA-Siltcoos-WC-Volunteer.pdf" className="text-emerald-700 underline hover:text-emerald-600">his email</a>).</div>
                        <div>Not one of those sentences is mine. Each is someone else speaking for my interior, in a document I did not write and was not shown.</div>
                        <div>Here is what it costs.</div>
                        <div>It costs you yourself on paper. The person they wrote becomes the file, and the file is who everyone after meets.</div>
                        <div>It costs you your answer. Once they hold your interior, everything you do is read through it. Documentation becomes &ldquo;perceived grievances.&rdquo; A website becomes a &ldquo;change in attitude and demeanor.&rdquo; Asking for an officer&rsquo;s name becomes agitation. Nothing you say corrects the account, because the account is about what is inside you, and they have already decided what that is.</div>
                        <div>And it costs you the truth of what is done to you. Every step stood on the one before it, and none of them stood on anything I did. A link became a police file. A belief assigned to me in a Word document became a reason to search my words. A search that found nothing became armed men at my door. That falsity is the cost: once your interior is theirs, they can act against it without evidence, because the evidence is what they wrote.</div>
                        <div>It costs whoever comes next. An institution that gives itself standing over one person&rsquo;s interior has given itself standing over every volunteer&rsquo;s.</div>
                        <div>This archive puts their sentences next to the record. It does not argue with them. It shows who wrote them.</div>
                        <div>There is one counterexample in the record, and it comes from the park manager.</div>
                        <div>After the origin event and their first escalation, I asked for a reset. He answered in writing, and he kept both of our accounts intact: &ldquo;Thanks for sharing your perspective, my hope it you are able to believe what I am sharing about mine.&rdquo; He did not tell me what I meant. He told me what he meant, and left mine as mine. &ldquo;A reset sounds good to me&rdquo; (<Link href="/record/oprd/01JKXHEPAR0PEQMPJXJGG9GZJ4" className="text-emerald-700 underline hover:text-emerald-600">February 12, 2025</Link>).</div>
                        <div>I respected him immensely for it, and I told him so at the picnic table: &ldquo;your email changed my opinion&hellip; it was a big deal to me&rdquo; (<Link href="/evidence/coercion?t=58:01" className="text-emerald-700 underline hover:text-emerald-600">58:01</Link>). By then he had spent most of an hour doing the opposite, telling me what I believed and what I wanted. The respect I gave him for keeping my interior intact went when he stopped keeping it.</div>
                        <div>That email proves they can do it. Any one of them could have left my account as mine and set theirs beside it. One of them did, once. Everything else in this record was done by people capable of not doing it.</div>
                        <div>This is my whole dispute with them. Not the dismissal, not the exclusion, not the police. It is that they would not leave my interior as mine. They replaced it with a fictional one, in official records, and then went silent, or escalated because I would not. That is the harm I have been pointing at. It is a theft, and I do not consent.</div>
                    </div>
                </div>

                <hr className="border-t border-gray-300" />

                {/* Question 14 */}
                <div id="next" className="scroll-mt-48">
                    <h2 className="text-xl font-semibold mb-3">
                        What happens next?
                    </h2>
                    <div className="space-y-4">
                        <div>What happens next is nothing.</div>
                        <div>I spent over a year measuring the institution and I did not find accountability anywhere. I can tell you what would have prevented every major event that happened in this record. I can even tell you what may fix it. But it requires an incompatible ontology, so getting there is not guaranteed. These are the rules I would adopt to establish the ground floor for any functioning system that values personhood.</div>
                        <div><em>No interior without a source.</em> A public body may record what a person said and did. It may record what a person felt, believed or intended only in that person&rsquo;s own words, quoted, dated and sourced. An unsourced statement about someone&rsquo;s interior is a records violation, and is marked as one wherever the record goes.</div>
                        <div><em>The person&rsquo;s own account travels with the record.</em> Anyone a public record describes may see what it says about them and attach a written response, which goes with every copy, transfer and referral. A request to correct a false statement of fact is answered in writing within 30 days: corrected, or refused with reasons.</div>
                        <div><em>No referral to the police for speech.</em> No public body refers a person to law enforcement for their speech, complaints, petitions, records requests or criticism of the body. A referral names the suspected crime and the facts behind it, in writing, goes through a designated channel and never a press office, and the person is told within 30 days unless a court orders otherwise.</div>
                        <div><em>No collection on speech without suspicion.</em> ORS 181A.250 already forbids Oregon police to collect information on a person&rsquo;s political or social views or activities without reasonable grounds to suspect a crime. Those grounds are written down before anything is collected. No visit to a person&rsquo;s home or workplace without a stated, articulable threat. A case closed &ldquo;for information only&rdquo; is purged, and the person is told.</div>
                        <div><em>Protections for volunteers.</em> Written standards before service begins. Written notice of any concern, and a chance to answer it. A hearing before dismissal and an appeal after it. No dismissal or exclusion for reporting misconduct or for speaking about service.</div>
                        <div><em>Remedy and daylight.</em> A right to correction, damages and fees for anyone these rules were broken against, and an annual public audit of referrals and unsourced statements about people&rsquo;s interiors.</div>
                        <div>These rules would constrain the oldest tools institutions have, so adopting them would be hard. But language models are learning from those same institutions, and can carry out their patterns at a scale no institution could. As that happens, how we treat personhood may become a question everyone has to face. When that day comes, this case study will already be written.</div>
                    </div>
                </div>

            </div>
        </SectionPage>
    );
}

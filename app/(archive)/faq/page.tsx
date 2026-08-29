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
            title="FREQUENTLY ASKED QUESTIONS"
            previousPage={{ href: "/displacement", label: "The Displacement Framework" }}
            nextPage={{ href: "/resources", label: "Resources" }}
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
                        <div>Because I chose to establish the public record first. Litigation can limit what becomes public and end in a settlement with an NDA. I will not sign one.</div>
                        <div>But I will sue. OPRD&rsquo;s statewide exclusion remains in force. It is an ongoing prohibition on volunteer service imposed in writing for public speech. I have a claim under 42 U.S.C. &sect; 1983 against Director Lisa Sumption.</div>
                        <div>I also intend to sue over the police operation of March 24, 2026, when three men with guns came through a locked federal gate to my home and workplace because of what I published about OPRD. I served <Link href="/accountability/oprd/01KYFER0GR6CQHWMTVNTBJV58S" className="text-emerald-700 underline hover:text-emerald-600">notice under the Oregon Tort Claims Act</Link>. Once the records identify who initiated the operation, I expect the &sect; 1983 claim to include that person.</div>
                        <div>The public-records dispute with Oregon State Police is separate. Oregon State Police confirmed that it holds incident reports and attachments, officer notes, dispatch records, electronic communications, and body-camera footage of the March 24 police operation. I paid its $157.50 production fee for the records it agreed to process. If the agency redacts those records or claims that any record covered by my payment is exempt, I will file a public-records action against Oregon State Police. The agency is already withholding the body-camera footage. I will challenge that withholding in court. The <Link href="/accountability/osp" className="text-emerald-700 underline hover:text-emerald-600">complete records process</Link> is public.</div>
                        <div>The record came first. Litigation comes next.</div>
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
                        <div>The <Link href="/accountability" className="text-emerald-700 underline hover:text-emerald-600">correspondence section</Link> stores all external communications in unmodified .eml format in my <Link href="https://github.com/rswfire/rswfire.oprd" target="_blank" className="text-emerald-700 underline hover:text-emerald-600">public repository</Link>.</div>
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
                        <div>The retaliation did not end with expulsion. On March 24, 2026 &mdash; exactly one year after my dismissal &mdash; three men with guns came through a locked gate to the federal land where I live and work because of what I published about OPRD. I declined to speak without an attorney and <Link href="/evidence/police" className="text-emerald-700 underline hover:text-emerald-600">recorded them leaving</Link>.</div>
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
                        <div>After that I wrote to the Director, the Deputy Director, the Commission, and the Governor. I made public records requests to OPRD, Oregon State Police, and the Department of Administrative Services. I filed petitions with the Attorney General, a federal incident report, and an inquiry with the U.S. Forest Service. I notified legislators about the statewide policy gap that exposes volunteers to retaliation. The <Link href="/accountability" className="text-emerald-700 underline hover:text-emerald-600">accountability pages</Link> preserve the requests and the responses in date order.</div>
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
                        <div>OPRD&rsquo;s silence rests on a judgment about standing. In the institution&rsquo;s view of itself, a former volunteer it expelled has no recognized position from which to require an answer: no employment relationship, no grievance right, no place inside the institution. It treats my removal as if it also removed its obligation to account for what it did.</div>
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
                        <div>The institutional assertion of authority over what is considered real, even when it conflicts with lived experience.</div>
                        <div>An epistemic violation is when someone with institutional power attempts to overwrite your direct experience with their preferred narrative &mdash; and demands you accept their version.</div>
                        <div>It's not just lying. It's the insistence that <em>their</em> account has more authority than what actually happened to you. This is what the park manager meant <Link href="/evidence/coercion" className="text-emerald-700 underline hover:text-emerald-600">by &quot;chew glass and swallow it.&quot;</Link></div>
                        <div>When Director Lisa Sumption answered comprehensive documentation with therapeutic language, <Link href="/lisa-sumption/closure" className="text-emerald-700 underline hover:text-emerald-600">that was an epistemic violation</Link>. She was asserting institutional authority to define what my evidence means &mdash; over what the evidence actually shows.</div>
                        <div>When the park manager told me I was &quot;never given the benefit of the doubt&quot; while simultaneously claiming <em>I</em> was the problem, <Link href="/evidence/coercion" className="text-emerald-700 underline hover:text-emerald-600">that was an epistemic violation</Link>. The contradiction remains in the recording. Their version nevertheless became the institutional account.</div>
                        <div>When the volunteer services lead spent 90 minutes eliciting vulnerability through reciprocal disclosure, then transmitted everything I shared to the park supervisor and the park manager, who weaponized it against me &mdash; and then the program manager used those same disclosures to construct a psychological profile weaponizing my disclosures to frame me as paranoid and delusional &mdash; <Link href="/evidence/trust" className="text-emerald-700 underline hover:text-emerald-600">that was an epistemic violation</Link>. They extracted private disclosures under false pretenses, then rewrote them as pathology.</div>
                        <div>When the program manager stated in writing that I was removed for speaking publicly about what happened &mdash; then the institution acts as if retaliation didn't occur &mdash; <Link href="/evidence/expulsion" className="text-emerald-700 underline hover:text-emerald-600">that's an epistemic violation at scale</Link>.</div>
                        <div>This is why documentation matters. Not just to prove what happened, but to refuse the institutional demand that I live inside their fiction.</div>
                        <div>They wanted me to accept their narrative: that I was unstable, that I misunderstood, that they acted appropriately, that my removal was justified.</div>
                        <div>This archive is my refusal.</div>
                        <div>Because once you let an institution overwrite reality with their preferred story, you've given them permission to do it again. To you. To others. Without limit.</div>
                        <div>An epistemic violation isn't just about one person's experience. It's about whose account is permitted to become knowledge &mdash; and what happens when documentation disproves the institutional account.</div>
                    </div>
                </div>

                <hr className="border-t border-gray-300" />

                {/* Question 13 */}
                <div id="egregious" className="scroll-mt-48">
                    <h2 className="text-xl font-semibold mb-3">
                        What made this case particularly egregious?
                    </h2>
                    <div className="space-y-4">
                        <div className="italic">Their actions were designed to deliberately distort the public record: institutional accusations were preserved while the evidence needed to contest them was excluded. A public agency did this to one of its own people. This lives at the <span className="not-italic">heart of identity-based targeting</span>.</div>
                        <div>They tried to dismiss and expel me with a story I could not correct.</div>
                        <div>The park manager <Link href="/evidence/dismissal" className="text-emerald-700 underline hover:text-emerald-600">dismissed me by phone with a fabricated pretext</Link>. No documentation. No formal process. Just his word against mine.</div>
                        <div>The program manager <Link href="/evidence/expulsion" className="text-emerald-700 underline hover:text-emerald-600">formalized my expulsion in writing</Link>, citing my protected speech &mdash; but <Link href="/evidence/trust" className="text-emerald-700 underline hover:text-emerald-600">framing it through the volunteer services lead's betrayed disclosures</Link> and their own institutional interpretation of my motives, my psychology, my reality.</div>
                        <div>If I had not <Link href="/evidence/coercion" className="text-emerald-700 underline hover:text-emerald-600">recorded the March 5th meeting</Link>, the park manager's abuse would have been my word against his and the park supervisor's institutional authority.</div>
                        <div>If I had not <Link href="/evidence/dismissal" className="text-emerald-700 underline hover:text-emerald-600">recorded my dismissal</Link>, there would be no evidence that the park manager admitted he had no documentation for what he was doing.</div>
                        <div>If I had not <Link href="/evidence/expulsion" className="text-emerald-700 underline hover:text-emerald-600">recorded the program manager's calls</Link> and preserved her written correspondence, the retaliation would exist only as my account &mdash; which carries no institutional weight against her documented authority.</div>
                        <div>They were constructing a reality where <em>they</em> held all the evidence, <em>they</em> controlled the narrative, and <em>I</em> had no proof of what actually happened.</div>
                        <div>That is the deepest form of epistemic violation: the systematic erasure of someone's capacity to prove their own experience.</div>
                        <div>It's not just asserting a false narrative. It's ensuring the target has no way to demonstrate the truth.</div>
                        <div>This archive exists because I refused that erasure.</div>
                        <div>I documented in real time. I preserved everything. I made the record they didn't want to exist.</div>
                        <div>And now their preferred story &mdash; the one where I'm the problem and they acted appropriately &mdash; cannot stand unchallenged.</div>
                        <div>Because the evidence proves otherwise.</div>
                        <div>That's what makes an epistemic violation intolerable: it's an attempt to strip someone of their ability to be believed about their own life.</div>
                        <div>And in institutional contexts, where power is already asymmetric, it's an abuse of that power to ensure the abuse itself cannot be proven.</div>
                        <div>I will not accept that. I will not live in their fiction. And this documented pattern now exists so the next person doesn't have to be the first to prove it.</div>
                    </div>
                </div>

                <hr className="border-t border-gray-300" />

                {/* Question 14 */}
                <div id="next" className="scroll-mt-48">
                    <h2 className="text-xl font-semibold mb-3">
                        What happens next?
                    </h2>
                    <div className="space-y-4">
                        <div>The archive is no longer waiting on a single institutional response. Several tracks are now documented in parallel.</div>
                        <div>They could order an independent investigation tomorrow. They could hold people accountable. They could implement the protections volunteers deserve. They could demonstrate that institutional failure gets corrected, not protected.</div>
                        <div>Meanwhile, Oregon State Police has confirmed additional records concerning the March 24 visit. The production fee has been funded and mailed; the body-camera withholding remains disputed. The legislative record also asks lawmakers to correct a statewide policy that authorizes action against volunteers while extending its express anti-retaliation protection only to employees.</div>
                        <div>The <Link href="/accountability" className="text-emerald-700 underline hover:text-emerald-600">correspondence section</Link> will continue to record each response, refusal, production, and correction.</div>
                        <div>But I can say this much: the archive is permanent. The evidence is independently verifiable. The institutional failure is documented.</div>
                        <div>What happens next is partly their choice. Whether their choice is preserved in public is mine.</div>
                        <div>They either act or they don't. Both choices have consequences. Only one of them protects the next volunteer.</div>
                        <div>If that matters to you, ask <em>them</em> this question.</div>
                    </div>
                </div>

            </div>
        </SectionPage>
    );
}

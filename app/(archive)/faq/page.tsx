// app/(archive)/faq/page.tsx
import type { Metadata } from "next";
import { Landmark, Map } from "lucide-react";
import Link from "next/link";
import SectionPage from "@/components/SectionPage";
import PersonLink from "@/components/PersonLink";
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
                        <div>Because a court decides what becomes part of the record. I wanted the whole record, so I built it myself from primary sources, one public records request at a time.</div>
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
                        <div>The answer is nothing. Because the question itself is backwards. The issue isn't what I did &mdash; the issue is what <em>they did</em> when someone documented their behavior and refused to accept their behavior as normal.</div>
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
                        <div>Director <PersonLink name="Lisa Sumption" /> <Link href="/lisa-sumption/open-letter" className="text-emerald-700 underline hover:text-emerald-600">responded in August 2025</Link> with procedural language and no commitments. She <Link href="/lisa-sumption/closure" className="text-emerald-700 underline hover:text-emerald-600">closed communication in December 2025</Link>, answering comprehensive documentation of misconduct and retaliation with therapeutic language.</div>
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
                                <li>Appropriate consequences for Director <PersonLink name="Lisa Sumption" />'s choice to protect documented abusers rather than the volunteer they targeted.</li>
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
                        <div>The <PersonLink name="program manager" /> had the opportunity to protect me when I <Link href="/timeline" className="text-emerald-700 underline hover:text-emerald-600">reported what was happening</Link> &mdash; on March 10, the day she called to intimidate me about recording the day-use area meeting.</div>
                        <div>That was her job. There was <em>no one else</em> to escalate to if you experienced a problem. I was isolated. That is a design choice.</div>
                        <div>Instead, when I <Link href="/evidence/dismissal" className="text-emerald-700 underline hover:text-emerald-600">documented the abuse</Link> publicly (something I only did after I'd <em>already</em> been dismissed by the <PersonLink name="park manager" /> and told to &quot;get through my time&quot; by the <PersonLink name="program manager" />), she <Link href="/evidence/expulsion" className="text-emerald-700 underline hover:text-emerald-600">retaliated in writing</Link>, explicitly citing my protected speech as the reason for expulsion.</div>
                        <div>After that I wrote to the <PersonLink name="Director" seat="director" />, the <PersonLink name="Deputy Director" seat="deputy" />, the Commission, and the Governor. I made public records requests to OPRD, Oregon State Police, and the Department of Administrative Services. I filed petitions with the Attorney General, a federal incident report, and an inquiry with the U.S. Forest Service. I notified legislators about the statewide policy gap that exposes volunteers to retaliation. The <Link href="/records" className="text-emerald-700 underline hover:text-emerald-600">accountability pages</Link> preserve the requests and the responses in date order.</div>
                        <div>A &quot;proper channel&quot; is meaningful only if it can produce accountability. Here, every available channel preserved the institution&rsquo;s authority while exhausting, isolating, or dismissing the person reporting harm.</div>
                        <div>But here's the better question: why shouldn't I document in public?</div>
                        <div>Who are we protecting by keeping institutional abuse private? The answer is the institution &mdash; not the people it harms.</div>
                        <div>And I know this is shocking, but institutions don't have to harm people.</div>
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
                        <div><em>An epistemic violation is when someone colonizes your interior. They use their standing to trespass where they have none. It is a form of theft, and I do not consent to it.</em></div>
                        <div>It is the act of deciding what is inside another person &mdash; what they feel, what they believe, what they intend &mdash; and writing it down as fact. The institution then acts on the person it wrote, and the real one pays for it.</div>
                        <div>Here is the person they wrote.</div>
                        <div>At the picnic table, the <PersonLink name="park manager" /> spent an hour telling him what was inside him, and every word of it was false. For nine minutes the park manager was told there was no conflict with a ranger. Then he <Link href="/evidence/coercion?t=9:12" className="text-emerald-700 underline hover:text-emerald-600">told him there was</Link>: &ldquo;I understand you have a conflict with [Park Ranger 2].&rdquo; He <Link href="/evidence/coercion?t=9:22" className="text-emerald-700 underline hover:text-emerald-600">invented triggers</Link>: &ldquo;it sounds like you have an understanding of maybe what some triggers are for you.&rdquo; He <Link href="/evidence/coercion?t=18:59" className="text-emerald-700 underline hover:text-emerald-600">invented a tone</Link>, &ldquo;a negative or threatening tone,&rdquo; and <Link href="/evidence/coercion?t=21:31" className="text-emerald-700 underline hover:text-emerald-600">then threats</Link>, &ldquo;those things come across as threats.&rdquo; He <Link href="/evidence/coercion?t=19:49" className="text-emerald-700 underline hover:text-emerald-600">invented a desire</Link>: &ldquo;you believe that [Volunteer Services Lead] is part of your future.&rdquo; The park manager took a poem about the ocean, sent to the volunteer services lead with a request for help finding placements on the coast, and <Link href="/evidence/coercion?t=36:20" className="text-emerald-700 underline hover:text-emerald-600">invented feelings for his supervisor</Link>, an &ldquo;unprofessional relationship outside of work,&rdquo; then <Link href="/evidence/coercion?t=37:41" className="text-emerald-700 underline hover:text-emerald-600">refused the truth of it</Link>: &ldquo;I don&rsquo;t necessarily need explanation for that.&rdquo; He <Link href="/evidence/coercion?t=45:30" className="text-emerald-700 underline hover:text-emerald-600">invented an accusation</Link>, that the park supervisor &ldquo;purposely asked you what your plans were because she knew that you applied for the job,&rdquo; condemned the accusation he had invented, &ldquo;the most false thing I&rsquo;ve ever heard,&rdquo; and when the volunteer told him it had never been made, kept it: &ldquo;that is how it came across.&rdquo; He <Link href="/evidence/coercion?t=47:27" className="text-emerald-700 underline hover:text-emerald-600">invented their feelings in him</Link>: &ldquo;the way that you&rsquo;re feeling is exactly the same way is how we&rsquo;re feeling.&rdquo; And four times in the last two minutes he <Link href="/evidence/coercion?t=59:31" className="text-emerald-700 underline hover:text-emerald-600">invented a reason to leave</Link>: &ldquo;if you&rsquo;re feeling a certain way I understand.&rdquo;</div>
                        <div>In a <Link href="/sunlight" className="text-emerald-700 underline hover:text-emerald-600">Word document</Link> the <PersonLink name="program manager" /> spent a year privately editing, she invented a belief: &ldquo;he believes the world is going to end and that&rsquo;s one of the reasons he came to Honeyman.&rdquo; She invented a memory: &ldquo;Sam would act like he never said that and has no recollection of saying that.&rdquo;</div>
                        <div>Every letter they have written him does it. Every one.</div>
                        <div>On March 26, 2025, the <PersonLink name="program manager" /> took a <Link href="/evidence/dismissal/" className="text-emerald-700 underline hover:text-emerald-600">video</Link> of a volunteer telling what was done to him, sent to her for review, and wrote it into the <Link href="/record/oprd/01JQA2WM60RX7MSJQ5QPFD8AR2" className="text-emerald-700 underline hover:text-emerald-600">letter</Link> excluding him from every state parks volunteer program as an attack: &ldquo;the disparaging public comments made about staff,&rdquo; without addressing anything that was in the video.</div>
                        <div>On August 25, 2025, the <PersonLink name="Director" seat="director" /> <Link href="/record/oprd/01K3HPAXBG8F4QZG4DJNDY5QY8" className="text-emerald-700 underline hover:text-emerald-600">answered</Link> an <Link href="/record/oprd/01K3FDT5P09S9N9QSZYWS9KN7A" className="text-emerald-700 underline hover:text-emerald-600">open letter</Link> that documented misconduct with recordings and asked for protections for every volunteer by inventing a feeling for the volunteer: &ldquo;I hear the depth of your concern.&rdquo; She converted documented misconduct into &ldquo;your perspective.&rdquo; She converted audio recordings of coercive meetings and video evidence of a dismissal without cause into &ldquo;documenting and expressing your experience.&rdquo; She refused to answer any of it: &ldquo;I cannot respond here to the specific claims you have outlined.&rdquo;</div>
                        <div>On December 8, 2025, the <PersonLink name="Director" seat="director" /> <Link href="/record/oprd/01KBZ9S95G2W5B44TTGT6HA69N" className="text-emerald-700 underline hover:text-emerald-600">answered</Link> an <Link href="/record/oprd/01KBY6KNMGEGV4MZ98QEK6R8JP" className="text-emerald-700 underline hover:text-emerald-600">account</Link> of nine months with the United States Forest Service, two promotions, and &ldquo;access to their work trucks and a 25 mile daily route&rdquo; by inventing feelings for the volunteer: &ldquo;deeply painful,&rdquo; &ldquo;the frustration and hurt in your words.&rdquo; She converted a public archive of their own records, every document of it theirs, into something he merely believes: &ldquo;advocating for what you believe is right.&rdquo; She invented an aim for the volunteer: &ldquo;the resolution you&rsquo;re seeking.&rdquo; She converted nine months and two promotions into &ldquo;a sense of purpose and healing.&rdquo;</div>
                        <div>On February 13, 2026, the <PersonLink name="Deputy Director" seat="deputy" /> was given <Link href="/record/oprd/01KGJDNF98R4SNG4Z967DX4BMD" className="text-emerald-700 underline hover:text-emerald-600">notice</Link> of &ldquo;a permanent, system-wide expulsion&rdquo; and &ldquo;documented retaliation for protected speech, under color of law.&rdquo; He <Link href="/record/oprd/01KHCRFBDG3DMYZSSTGV5WC7E7" className="text-emerald-700 underline hover:text-emerald-600">answered</Link> retaliation by inventing a mood for the volunteer: &ldquo;We understand you are not satisfied with the decision to end your volunteer service.&rdquo; He converted an expulsion into a decision, and retaliation into dissatisfaction.</div>
                        <div>Then it went to the police, and it did not begin with anything he did. It began with a link. <PersonLink name="A man he has never met" seat="emergency-manager" /> <Link href="/record/osp/01M1M4WF78XJPEJJ48D1JZ4SJ8" className="text-emerald-700 underline hover:text-emerald-600">sent</Link> a citizen&rsquo;s archive to the state police <PersonLink name="press captain" seat="press-captain" /> because the citizen had written to the Governor: &ldquo;since he is now including the Governor as well as our Director.&rdquo; The <PersonLink name="program manager" />&rsquo;s Word document followed it.</div>
                        <div><PersonLink name="A detective" seat="case-detective" /> read his archive and invented the rest: &ldquo;upset,&rdquo; &ldquo;perceived grievances,&rdquo; &ldquo;a clear and obvious change in attitude and demeanor.&rdquo; His <a href="/records/osp/attachments/01m1m4wf78xjpejj48d1jz4sj8-Report-and-Attachements-from-Niche-RMS-SP26096984.pdf" className="text-emerald-700 underline hover:text-emerald-600">report</a> names no threat and no act. The detective came to his door anyway, &ldquo;in an effort to interrupt, deescalate,&rdquo; with nothing on record to interrupt and nothing to de-escalate: armed, through a locked federal gate, on the anniversary of the dismissal, to tell him he was &ldquo;not in trouble.&rdquo;</div>
                        <div>The <PersonLink name="Forest Service Special Agent" seat="forest-service-agent" /> <a href="/records/osp/attachments/01m1m4wf78xjpejj48d1jz4sj8-Report-and-Attachements-from-Niche-RMS-email-from-FS-SA-Siltcoos-WC-Volunteer.pdf" className="text-emerald-700 underline hover:text-emerald-600">emailed a county deputy</a> with his date of birth and driver&rsquo;s license number. He invented threats: &ldquo;due to multiple veil threats.&rdquo; He invented a countdown: &ldquo;he created his own website with a countdown to his one-year anniversary of being fired from Oregon Parks and Rec.&rdquo; The website counts up. It counts the days of an ongoing constitutional violation, and it is still counting. He invented a dismissal: &ldquo;fired due to his negative interactions with the public while performing his duties.&rdquo; No record says it. No one, in any record, has ever put a single interaction with the public against him.</div>
                        <div>Then he asked for the records of what they had done to him, and the men who hold them did it too.</div>
                        <div>The <PersonLink name="Governor&rsquo;s accountability attorney" seat="government-accountability-attorney" /> <Link href="/record/governor/01M35TPA3RXRP0HY3NM9JHDJ8F" className="text-emerald-700 underline hover:text-emerald-600">assigned him a private interest</Link> in the state police threat assessment that had put armed officers at his door: &ldquo;The requester has demonstrated that this request relates to a personal, rather than a public interest.&rdquo; He assigned him a motive he never gave: &ldquo;a general interest in transparency.&rdquo;</div>
                        <div>The <PersonLink name="Public Records Counsel" seat="public-records-counsel" /> <Link href="/record/doj/01M50S7NEG8CQV2R6TF6Y6BKXZ" className="text-emerald-700 underline hover:text-emerald-600">assigned him a private interest</Link> in the police file his own government had built on him for writing to it: &ldquo;the records you seek pertain primarily to you and your private interests.&rdquo;</div>
                        <div>The <PersonLink name="Public Records Advocate" seat="public-records-advocate" /> <Link href="/record/governor/01M5G1X2X8EEZJZ8R1ZNQRF8CX" className="text-emerald-700 underline hover:text-emerald-600">erased a statutory demand</Link> and wrote a plea in its place: &ldquo;you are seeking assistance.&rdquo; He was handed the statute, and <Link href="/record/governor/01M5MN2F3G7610PG7DJJGQR8KH" className="text-emerald-700 underline hover:text-emerald-600">erased it three more times</Link>. He could not answer the statute, so he invented a tone: his office requires &ldquo;agreeable interactions.&rdquo; The citizen had been direct. He made directness a defect, and the defect the reason. It is the gravest violation in this record, and every one of them has done it: when they cannot answer, they fabricate a reason not to.</div>
                        <div>Not one of those sentences is his. Each is someone else speaking for his interior, some in documents he was never shown, the rest in letters addressed to him.</div>
                        <div>Here is what it costs.</div>
                        <div>It costs you yourself on paper. The person they wrote becomes the file, and the file is who everyone after meets.</div>
                        <div>It costs you your answer. Once they hold your interior, everything you do is read through it. Documentation becomes &ldquo;perceived grievances.&rdquo; A website becomes a &ldquo;change in attitude and demeanor.&rdquo; Asking for an officer&rsquo;s name becomes &ldquo;agitated.&rdquo; Nothing you say corrects the account, because the account is about what is inside you, and they have already decided what that is.</div>
                        <div>And it costs you the truth of what is done to you. Every step stood on the one before it, and none of them stood on anything he did. A link became a police file. A belief assigned to him in a Word document became a reason to search his words. A search that found nothing became armed men at his door. That falsity is the cost: once your interior is theirs, they can act against it without evidence, because the evidence is what they wrote.</div>
                        <div>It costs whoever comes next. An institution that gives itself standing over one person&rsquo;s interior has given itself standing over every volunteer&rsquo;s.</div>
                        <div>This archive puts their sentences next to the record. It does not argue with them. It shows who wrote them.</div>
                        <div>There is one counterexample in the record, and it comes from the <PersonLink name="park manager" />.</div>
                        <div>After the <Link href="/evidence/origin/" className="text-emerald-700 underline hover:text-emerald-600">origin event</Link> and their <Link href="/evidence/escalation/" className="text-emerald-700 underline hover:text-emerald-600">first escalation</Link>, the park manager <Link href="/record/oprd/01JKXHEPAR0PEQMPJXJGG9GZJ4" className="text-emerald-700 underline hover:text-emerald-600">answered his request for a reset</Link> in writing, and kept both of their accounts intact: &ldquo;Thanks for sharing your perspective, my hope it [is] you are able to believe what I am sharing about mine.&rdquo; The park manager did not tell him what he meant. He spoke only for himself, and left the volunteer&rsquo;s account as the volunteer&rsquo;s. &ldquo;A reset sounds good to me.&rdquo;</div>
                        <div>He respected the park manager immensely for it, and <Link href="/evidence/coercion?t=58:01" className="text-emerald-700 underline hover:text-emerald-600">told him so</Link> at the picnic table: &ldquo;your email changed my opinion&hellip; it was a big deal to me.&rdquo; By then the park manager had spent most of an hour doing the opposite, telling him what he believed and what he wanted. The respect he had given him for keeping his interior intact went when he stopped keeping it.</div>
                        <div>That email proves they can do it. Any one of them could have left his account as his and set theirs beside it. One of them did, once.</div>
                        <div>This is his whole dispute with them. Not the dismissal, not the exclusion, not the police. It is that they would not leave his interior as his. They replaced it with a fictional one, in official records, and then went silent, or escalated because he would not. That is the harm he has been pointing at. It is a theft, and he does not consent.</div>
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

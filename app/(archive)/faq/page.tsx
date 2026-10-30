// app/(archive)/faq/page.tsx
import type { Metadata } from "next";
import { withShare } from "@/lib/share";
import { Landmark, Map } from "lucide-react";
import Link from "next/link";
import SectionPage from "@/components/SectionPage";
import PersonLink from "@/components/PersonLink";
import { FAQ_QUESTIONS } from "@/data/faq";

export const metadata: Metadata = withShare({
    title: "Frequently Asked Questions",
    description: "Common questions about the documentation, decisions, and institutional responses.",
});

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

                {/* Question 14 */}
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

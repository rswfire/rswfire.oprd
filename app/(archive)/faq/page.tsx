// app/(archive)/faq/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import SectionPage from "@/components/SectionPage";

export const metadata: Metadata = {
    title: "Frequently Asked Questions",
    description: "Common questions about the documentation, decisions, and institutional responses.",
};

export default function FAQPage() {
    return (
        <SectionPage
            title="FREQUENTLY ASKED QUESTIONS"
            previousPage={{ href: "/ethics", label: "A Note About Ethics" }}
            nextPage={{ href: "/key-individuals", label: "Key Individuals" }}
        >
            <div className="mt-8 space-y-8">

                <div className="mt-8 p-6 bg-emerald-50 border-l-4 border-emerald-600 rounded-r-lg">
                    <div className="text-base font-semibold mb-4">QUESTIONS:</div>
                    <ul className="space-y-2">
                        <li><a href="#sue" className="text-emerald-700 underline hover:text-emerald-600">Why didn't you sue them?</a></li>
                        <li><a href="#target" className="text-emerald-700 underline hover:text-emerald-600">Why would they target you?</a></li>
                        <li><a href="#leave" className="text-emerald-700 underline hover:text-emerald-600">Why didn't you just leave?</a></li>
                        <li><a href="#move-on" className="text-emerald-700 underline hover:text-emerald-600">Why not just move on?</a></li>
                        <li><a href="#response" className="text-emerald-700 underline hover:text-emerald-600">Have they responded to any of this?</a></li>
                        <li><a href="#verify" className="text-emerald-700 underline hover:text-emerald-600">How can people verify this documentation?</a></li>
                        <li><a href="#accountability" className="text-emerald-700 underline hover:text-emerald-600">What do you want to happen?</a></li>
                        <li><a href="#retaliation" className="text-emerald-700 underline hover:text-emerald-600">Aren't you worried about retaliation?</a></li>
                        <li><a href="#proper-channels" className="text-emerald-700 underline hover:text-emerald-600">Why make this public instead of going through proper channels?</a></li>
                        <li><a href="#silence" className="text-emerald-700 underline hover:text-emerald-600">What does their silence mean?</a></li>
                        <li><a href="#tone" className="text-emerald-700 underline hover:text-emerald-600">Why is your tone so direct?</a></li>
                        <li><a href="#epistemic" className="text-emerald-700 underline hover:text-emerald-600">What is an epistemic violation?</a></li>
                        <li><a href="#next" className="text-emerald-700 underline hover:text-emerald-600">What happens next?</a></li>
                    </ul>
                </div>

                <hr className="border-t border-gray-300" />

                {/* Question 1 */}
                <div id="sue" className="scroll-mt-48">
                    <h2 className="text-xl font-semibold mb-3">
                        Why didn't you sue them?
                    </h2>
                    <div className="space-y-4">
                        <div>Because suing them would have allowed them to disappear the evidence.</div>
                        <div>It would have potentially required my silence during the litigation and it often ends in settlements with NDAs &mdash; and I will <em>never</em> agree to sign one.</div>
                        <div>Litigation favors institutions with resources and time. Public documentation favors truth that can't be sealed or settled away.</div>
                        <div>This doesn't mean I won't. I'm tracking statutes of limitations. I'm considering every option. And I'm giving them every opportunity to prevent it.</div>
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
                        <div>Ask yourself this instead: what could I have done that justifies sustained psychological pressure over two months, dismissal without cause, permanent ban from volunteer service, and seven months of institutional silence after comprehensive evidence was provided?</div>
                        <div>The answer is nothing.</div>
                        <div>Because the question itself is backwards.</div>
                        <div>The issue isn't what I did &mdash; the issue is what <em>they did</em> when someone documented their behavior and refused to accept their behavior as normal.</div>
                    </div>
                </div>

                <hr className="border-t border-gray-300" />

                {/* Question 3 */}
                <div id="leave" className="scroll-mt-48">
                    <h2 className="text-xl font-semibold mb-3">
                        Why didn't you just leave?
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
                        Why not just move on?
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
                        <div>Director Lisa Sumption <Link href="/lisa-sumption/open-letter" className="text-emerald-700 underline hover:text-emerald-600">responded in August 2025</Link> with procedural language and no commitments. She <Link href="/lisa-sumption/closure" className="text-emerald-700 underline hover:text-emerald-600">closed communication in December 2025</Link>, reframing comprehensive documentation of misconduct and retaliation as &quot;emotional processing.&quot;</div>
                        <div>This is a common institutional response to documented harm: evidence is reduced to emotion, documentation is treated as distress, and continued reporting is framed as the problem rather than the conduct being reported.</div>
                        <div>The effects of this response are predictable and harmful. It delegitimizes documented abuse, discourages others from reporting, and shields the people who caused the harm by recasting accountability requests as instability.</div>
                        <div>No investigation was ordered. No findings were issued. No corrective action was taken.</div>
                        <div>Governor Kotek’s office and campaign have been contacted multiple times. No response. Not even an acknowledgement of receipt.</div>
                        <div><Link href="/governor-kotek" className="text-emerald-700 underline hover:text-emerald-600">They have been silent</Link>.</div>
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
                        <div>The <Link href="/correspondence" className="text-emerald-700 underline hover:text-emerald-600">correspondence section</Link> stores all external communications in unmodified .eml format in my <Link href="https://github.com/rswfire/rswfire.oprd" target="_blank" className="text-emerald-700 underline hover:text-emerald-600">public repository</Link>.</div>
                        <div>Everything claimed here is independently verifiable. Names, dates, specific statements &mdash; all documented.</div>
                        <div>I invite you to request further information from <Link href="https://www.oregon.gov/oprd/AO/Pages/AU-about.aspx" target="_blank" className="underline text-emerald-800 hover:text-emerald-600">Oregon State Parks</Link> directly. I will note I tried the <Link href="/lisa-sumption/public-records-request" className="text-emerald-700 underline hover:text-emerald-600">public records</Link> route myself but that route resulted in no records being produced despite statutory timelines.</div>
                        <div>But as far as the record is concerned: everything you need is already here.</div>
                        <div>This isn't a narrative. It's a record, and I have always treated it as such.</div>
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
                                <li>Independent investigation into documented misconduct at <Link href="https://stateparks.oregon.gov/index.cfm?do=park.profile&parkId=95" target="_blank" className="text-emerald-700 underline hover:text-emerald-600">Honeyman State Park</Link>.</li>
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
                        <div>They already retaliated.</div>
                        <div>That's documented in <Link href="/evidence/expulsion" className="text-emerald-700 underline hover:text-emerald-600">Allison Watson's removal letter</Link>, which explicitly states I was banned for speaking publicly about what happened.</div>
                        <div>This took away any soft leverage they might have held over me.</div>
                        <div>Could they retaliate further? Yes. They could attempt to damage my reputation through back channels. They could use their institutional positions to interfere with future opportunities. They could continue the unethical patterns I've documented across months.</div>
                        <div>They may attempt to pathologize me publicly if institutional pressure increases.</div>
                        <div>All of this is possible. But I will not be silent. That is what they are counting on. Silence serves their interests, and their interests are not aligned with the truth.</div>
                        <div>If they retaliate, it will simply add to this record. More documentation of an institution that protects abusers and punishes those who document abuse.</div>
                        <div>But every action they take now happens in public view. This protects me to an extent.</div>
                        <div>More importantly, it may protect someone else.</div>
                    </div>
                </div>

                <hr className="border-t border-gray-300" />

                {/* Question 9 */}
                <div id="proper-channels" className="scroll-mt-48">
                    <h2 className="text-xl font-semibold mb-3">
                        Why make this public instead of going through proper channels?
                    </h2>
                    <div className="space-y-4">
                        <div>Because there are no such thing as proper channels in an institution like this one.</div>
                        <div>Allison Watson had the opportunity to protect me when I <Link href="/timeline" className="text-emerald-700 underline hover:text-emerald-600">reported what was happening</Link> &mdash; on March 10, the day she called to intimidate me about recording the day-use area meeting.</div>
                        <div>That was her job. There was <em>no one else</em> to escalate to if you experienced a problem. I was isolated. That is a design choice.</div>
                        <div>Instead, when I <Link href="/evidence/dismissal" className="text-emerald-700 underline hover:text-emerald-600">documented the abuse</Link> publicly (something I only did after I'd <em>already</em> been dismissed by Ryan Warren and told to &quot;get through my time&quot; by Allison Watson), she <Link href="/evidence/expulsion" className="text-emerald-700 underline hover:text-emerald-600">retaliated in writing</Link>, explicitly citing my protected speech as the reason for expulsion.</div>
                        <div>&quot;Proper channels&quot; only exist when institutions want accountability. When they don't, those channels become mechanisms to exhaust, isolate, and dismiss the person reporting harm.</div>
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
                        <div>Their silence is a choice. It is also evidence.</div>
                        <div>Director Lisa Sumption <Link href="/lisa-sumption/open-letter" className="text-emerald-700 underline hover:text-emerald-600">received comprehensive evidence</Link> in August 2025 &mdash; audio recordings, video documentation, written proof of retaliation. She responded with procedural language and took no action.</div>
                        <div>Governor Kotek's office has been notified multiple times over months. No response. Not even acknowledgment &mdash; the minimum standard of professional communication.</div>
                        <div>Silence means they believe shielding abusers from accountability is more important than the safety of volunteers who offer their labor freely to support public institutions.</div>
                        <div>It means they've decided the political cost of accountability is higher than the risk of doing nothing. It means every person involved in targeting me remains in their position, free to do this again to someone else &mdash; only next time, with increased liability because I made the pattern visible.</div>
                        <div>Their silence is not neutrality. It's a decision. And it's documented.</div>
                    </div>
                </div>

                <hr className="border-t border-gray-300" />

                {/* Question 11 */}
                <div id="tone" className="scroll-mt-48">
                    <h2 className="text-xl font-semibold mb-3">
                        Why is your tone so direct?
                    </h2>
                    <div className="space-y-4">
                        <div>Because I'm not performing the role they've assigned to me.</div>
                        <div>Because I'm not performing grief or asking for sympathy. I'm documenting institutional failure with precision. And that requires precise language.</div>
                        <div>I was targeted by people in positions of authority. I documented what they did. I reported it through every available channel. They chose silence over accountability.</div>
                        <div>Those are facts.</div>
                        <div>Softening my language doesn't change what happened. It just makes it easier for people to dismiss it. Direct language forces clarity: either the evidence supports the claims or it does not. Either institutions act on documented harm or they don't.</div>
                        <div>I'm not asking anyone to feel sorry for me. The abuse happened. I processed it. Now I'm seeking accountability.</div>
                        <div>This is what accountability sounds like.</div>
                    </div>
                </div>

                <hr className="border-t border-gray-300" />

                {/* Question 12 */}
                <div id="epistemic" className="scroll-mt-48">
                    <h2 className="text-xl font-semibold mb-3">
                        What is an epistemic violation?
                    </h2>
                    <div className="space-y-4">
                        <div>The thing institutions really try to enforce: their "right" to assert what is real, even when it conflicts with reality.</div>
                        <div>An epistemic violation is when someone with institutional power attempts to overwrite your direct experience with their preferred narrative &mdash; and demands you accept their version as truth.</div>
                        <div>It's not just lying. It's the insistence that <em>their</em> account has more authority than what actually happened to you.</div>
                        <div>When Director Lisa Sumption reframed comprehensive documentation as &quot;emotional processing,&quot; <Link href="/lisa-sumption/closure" className="text-emerald-700 underline hover:text-emerald-600">that was an epistemic violation</Link>. She was asserting institutional authority to define what my evidence means &mdash; over what the evidence actually shows.</div>
                        <div>When Ryan Warren told me I was &quot;never given the benefit of the doubt&quot; while simultaneously claiming <em>I</em> was the problem, <Link href="/evidence/coercion" className="text-emerald-700 underline hover:text-emerald-600">that was an epistemic violation</Link>. The contradiction doesn't matter to them. What matters is that their version becomes the official record.</div>
                        <div>When Logan Bliss spent 90 minutes eliciting vulnerability through reciprocal disclosure, then transmitted everything I shared to Kati Baker and Ryan Warren, who weaponized it against me &mdash; and then Allison Watson used those same disclosures to construct a psychological profile framing my analysis as &quot;apocalyptic thinking&quot; &mdash; <Link href="/evidence/betrayal" className="text-emerald-700 underline hover:text-emerald-600">that was an epistemic violation</Link>. They extracted my interior reality under false pretenses, then rewrote it as pathology.</div>
                        <div>When Allison Watson stated in writing that I was removed for speaking publicly about what happened &mdash; then the institution acts as if retaliation didn't occur &mdash; <Link href="/evidence/expulsion" className="text-emerald-700 underline hover:text-emerald-600">that's an epistemic violation at scale</Link>.</div>
                        <div>This is why documentation matters. Not just to prove what happened, but to refuse the institutional demand that I live inside their fiction.</div>
                        <div>They wanted me to accept their narrative: that I was unstable, that I misunderstood, that they acted appropriately, that my removal was justified.</div>
                        <div>This archive is my refusal.</div>
                        <div>Because once you let an institution overwrite reality with their preferred story, you've given them permission to do it again. To you. To others. Without limit.</div>
                        <div>An epistemic violation isn't just about one person's experience. It's about who gets to say what's real &mdash; and what happens when documentation proves the institution wrong.</div>
                        <div className="mt-6 font-semibold">But here's what makes this violation particularly severe:</div>
                        <div>They tried to dismiss and expel me with a story I could not correct.</div>
                        <div>Ryan Warren dismissed me by phone with a fabricated pretext. No documentation. No formal process. Just his word against mine.</div>
                        <div>Allison Watson formalized my expulsion in writing, citing my protected speech &mdash; but framing it through Logan's betrayed disclosures and their own institutional interpretation of my motives, my psychology, my reality.</div>
                        <div>If I had not recorded the March 5th meeting, Ryan Warren's abuse would have been my word against his and Kati Baker's institutional authority.</div>
                        <div>If I had not recorded my dismissal, there would be no evidence that Ryan admitted he had no documentation for what he was doing.</div>
                        <div>If I had not recorded Allison Watson's calls and preserved her written correspondence, the retaliation would exist only in my memory &mdash; which she was already working to discredit.</div>
                        <div>They were constructing a reality where <em>they</em> held all the evidence, <em>they</em> controlled the narrative, and <em>I</em> had no proof of what actually happened.</div>
                        <div>That is the deepest form of epistemic violation: the systematic erasure of someone's capacity to prove their own experience.</div>
                        <div>It's not just asserting a false narrative. It's ensuring the target has no way to demonstrate the truth.</div>
                        <div>This archive exists because I refused that erasure.</div>
                        <div>I documented in real time. I preserved everything. I made the record they didn't want to exist.</div>
                        <div>And now their preferred story &mdash; the one where I'm the problem and they acted appropriately &mdash; cannot stand unchallenged.</div>
                        <div>Because the evidence proves otherwise.</div>
                        <div>That's what makes an epistemic violation intolerable: it's an attempt to strip someone of their ability to be believed about their own life.</div>
                        <div>And in institutional contexts, where power is already asymmetric, it's an abuse of that power to ensure the abuse itself cannot be proven.</div>
                        <div>I will not accept that. I will not live in their fiction. And I will not allow them to do this to someone else without a documented pattern they cannot deny.</div>
                    </div>
                </div>

                <hr className="border-t border-gray-300" />

                {/* Question 13 */}
                <div id="next" className="scroll-mt-48">
                    <h2 className="text-xl font-semibold mb-3">
                        What happens next?
                    </h2>
                    <div className="space-y-4">
                        <div>That depends on them.</div>
                        <div>They could order an independent investigation tomorrow. They could hold people accountable. They could implement the protections volunteers deserve. They could demonstrate that institutional failure gets corrected, not protected.</div>
                        <div>Or they can continue choosing silence.</div>
                        <div>If they do, the <Link href="/correspondence" className="text-emerald-700 underline hover:text-emerald-600">correspondence section</Link> will keep growing. External scrutiny may increase. Independent actors might engage. Oversight mechanisms may activate. Federal oversight might intervene.</div>
                        <div>Or not. Time will tell.</div>
                        <div>But I can say this much: the archive is permanent. The evidence is independently verifiable. The institutional failure is documented.</div>
                        <div>What happens next is their choice.</div>
                        <div>They either act or they don't. Both choices have consequences. Only one of them protects the next volunteer.</div>
                        <div>If that matters to you, ask <em>them</em> this question.</div>
                    </div>
                </div>

            </div>
        </SectionPage>
    );
}

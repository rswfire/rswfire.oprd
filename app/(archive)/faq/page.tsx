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
                        <div>It would have potentially required my silence during the litigation and it often ends in settlements with NDAs &mdash; and I would never have agreed to one.</div>
                        <div>Litigation favors institutions with resources and time. Public documentation favors truth that can't be sealed or settled away.</div>
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
                        <div>The question is: why should anyone have to leave a volunteer position because park supervisors targeted them and the institution protected the supervisors instead?</div>
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
                        <div>The effects of this response are predictable and harmful. It delegitimizes documented abuse, discourages others from reporting, and protects the people who caused the harm by recasting accountability requests as instability.</div>
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
                                <li>Removal of Director Lisa Sumption for protecting abusers after receiving evidence.</li>
                                <li>Systemic protections preventing retaliation against volunteers who report abuse.</li>
                                <li>Public commitment to volunteer program integrity and LGBTQ+ safety backed by action, not rhetoric.</li>
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
                        <div>I am banned &mdash; permanently &mdash; from ever volunteering for <Link href="https://www.oregon.gov/oprd/AO/Pages/AU-about.aspx" target="_blank" className="underline text-emerald-800 hover:text-emerald-600">Oregon State Parks</Link> again.</div>
                        <div>Ask yourself: what could I possibly have done to justify that outcome?</div>
                        <div>This took away any soft leverage they might have held over me.</div>
                        <div>Could they retaliate further? Yes. They could attempt to damage my reputation through back channels. They could use their institutional positions to interfere with future opportunities. They could continue the unethical patterns I've documented across months.</div>
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
                        <div>Governor Kotek's office has been notified multiple times over months. No response. Not even an acknowledgement, the most basic form of professional communication we have.</div>
                        <div>Silence means they believe institutional protection is more important than the safety of the people who support the institution with free time and labor.</div>
                        <div>It means they've decided the political cost of accountability is higher than the risk of doing nothing. It means every person involved in targeting me remains in their position, free to do this again to someone else &mdash; only next time, with increased liability because they knew better.</div>
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
                        <div>I was targeted by people in positions of authority. I documented what they did. I reported it through every available channel. They chose silence and protection over accountability.</div>
                        <div>Those are facts.</div>
                        <div>Softening my language doesn't change what happened. It just makes it easier for people to dismiss it. Direct language forces clarity: either the evidence supports the claims or it does not. Either institutions act on documented harm or they don't.</div>
                        <div>I'm not asking anyone to feel sorry for me. The abuse happened. I processed it. Now I'm seeking accountability.</div>
                        <div>And now I'm asking you to look at the evidence and decide whether this is acceptable institutional behavior.</div>
                        <div>That decision now belongs to the reader.</div>
                    </div>
                </div>

                <hr className="border-t border-gray-300" />

                {/* Question 12 */}
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
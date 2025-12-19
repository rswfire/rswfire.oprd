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

                {/* Question 1 */}
                <div>
                    <h2 className="text-xl font-semibold mb-3">
                        Why didn't you sue them?
                    </h2>
                    <div className="text-gray-700">
                        Because suing them would have allowed them to disappear the evidence. It would have required my silence during the litigation and often ends in settlements with NDAs I would never agree to sign. Litigation favors institutions with resources and time. Public documentation favors truth that can't be sealed or settled away.
                    </div>
                </div>

                <hr className="border-t border-gray-300" />

                {/* Question 2 */}
                <div>
                    <h2 className="text-xl font-semibold mb-3">
                        Why would they target you?
                    </h2>
                    <div className="text-gray-700 mb-3">
                        This question implies I did something to justify what happened.</div>
                    Ask yourself this instead: what could I have done that justifies sustained psychological pressure over two months, dismissal without cause, permanent ban from volunteer service, and seven months of institutional silence after comprehensive evidence was provided?
                    <div className="text-gray-700 mb-3"></div>
                    <div className="text-gray-700">
                        The answer is nothing.</div>
                    <div>Because the question itself is backwards.</div>
                    <div className="mt-4">The issue isn't what I did &mdash; the issue is what they did when someone documented their behavior and refused to accept their behavior as normal.
                    </div>
                </div>

                <hr className="border-t border-gray-300" />

                {/* Question 3 */}
                <div>
                    <h2 className="text-xl font-semibold mb-3">
                        Why not just move on?
                    </h2>
                    <div className="text-gray-700">
                        Because moving on means accepting that institutions can target volunteers, weaponize their identities, retaliate for protected speech, and face no consequences.</div>
                    <div>Is that the kind of world you want to live in? I do not.</div>
                    <div>And it means the next person who reports abuse gets the same treatment I did.
                    </div>
                    <div className="mt-4 text-gray-700">
                        I came to serve Oregon's public lands without compensation. I was targeted, dismissed, and banned for documenting what was done to me. If that's acceptable, then the volunteer program itself is fundamentally broken and people deserve to know that before they give their time.
                    </div>
                </div>

                <hr className="border-t border-gray-300" />

                {/* Question 4 */}
                <div>
                    <h2 className="text-xl font-semibold mb-3">
                        Have they responded to any of this?
                    </h2>
                    <div className="text-gray-700 mb-3">
                        Director Lisa Sumption <Link href="/lisa-sumption/open-letter" className="text-emerald-700 underline hover:text-emerald-600">responded in August 2025</Link> with procedural language and no commitments. She <Link href="/lisa-sumption/closure" className="text-emerald-700 underline hover:text-emerald-600">closed communication in December 2025</Link>, reframing comprehensive documentation as &quot;emotional processing.&quot;
                    </div>
                    <div>Is that how responsible adults respond to legitimate requests with indisputable documentation?</div>
                    <div className="text-gray-700 mb-3">
                        Governor Kotek's office and campaign have been contacted multiple times now. No response. Not even an acknowledgement of receipt.
                    </div>
                    <div className="text-gray-700">
                        They have been silent.
                    </div>
                </div>

                <hr className="border-t border-gray-300" />

                {/* Question 5 */}
                <div>
                    <h2 className="text-xl font-semibold mb-3">
                        How can people verify this documentation?
                    </h2>
                    <div className="text-gray-700 mb-3">
                        Audio recordings, video documentation, and email correspondence are embedded throughout this archive.</div>
                    
                    <div>The <Link href="/correspondence" className="text-emerald-700 underline hover:text-emerald-600">correspondence section</Link> stores all external communications in unmodified .eml format in the public repository.
                    </div>
                    <div className="text-gray-700">
                        Everything claimed here is independently verifiable. Names, dates, specific statements &mdash;all documented.</div>
                    <div>This isn't a narrative. It's a record.
                    </div>
                </div>

                <hr className="border-t border-gray-300" />

                {/* Question 6 */}
                <div>
                    <h2 className="text-xl font-semibold mb-3">
                        What do you want to happen?
                    </h2>
                    <div className="space-y-4">
                        <div className="text-gray-700">
                            Accountability. The same thing you would want.
                        </div>
                        <div className="text-gray-700">
                            More precisely:
                        </div>
                        <ul className="list-disc list-outside ml-8 space-y-2 text-gray-700">
                            <li>Independent investigation into documented misconduct at <Link href="https://stateparks.oregon.gov/index.cfm?do=park.profile&parkId=95" target="_blank" className="text-emerald-700 underline hover:text-emerald-600">Honeyman State Park</Link></li>
                            <li>Accountability for supervisors who betrayed trust and weaponized identity</li>
                            <li>Removal of Director Lisa Sumption for protecting abusers after receiving evidence</li>
                            <li>Systemic protections preventing retaliation against volunteers who report abuse</li>
                            <li>Public commitment to volunteer program integrity and LGBTQ+ safety backed by action, not rhetoric</li>
                        </ul>
                    </div>
                </div>

                <hr className="border-t border-gray-300" />

                {/* Question 7 */}
                <div>
                    <h2 className="text-xl font-semibold mb-3">
                        Aren't you worried about retaliation?
                    </h2>
                    <div className="text-gray-700 mb-3">
                        They already retaliated.</div>
                    <div>That's documented in <Link href="/expulsion" className="text-emerald-700 underline hover:text-emerald-600">Allison Watson's removal letter</Link>, which explicitly states I was banned for speaking publicly about what happened.
                    </div>
                    <div>I am banned &mdash; permanently &mdash; from ever volunteering for Oregon State Parks again.</div>
                    <div>Ask yourself: what could I possibly have done to justify that outcome?</div>
                    <div className="text-gray-700 mb-3">
                        Could they retaliate further? Of course. They could contact my current volunteer agency. They could attempt to damage my reputation through back channels. They could use their institutional positions to interfere with future opportunities.
                    </div>
                    <div>They could be doing all of those things right now.</div>
                    <div className="text-gray-700">
                        I've taken steps to counter this as much as anyone can. But I will not be silent. That is what they are counting on. That is what they want.</div>
                    <div>If they retaliate, it will simply add to this record.</div>
                    <div>More documentation of an institution that protects abusers and punishes those who document abuse.</div>
                    <div>But every action they take now happens in public view.
                    </div>
                    <div>This protects me to an extent.</div>
                    <div>More importantly, it protects others.</div>
                </div>

                <hr className="border-t border-gray-300" />

                {/* Question 8 */}
                <div>
                    <h2 className="text-xl font-semibold mb-3">
                        Why make this public instead of going through proper channels?
                    </h2>
                    <div className="text-gray-700 mb-3">
                        Because there are no such thing as proper channels in an institution like this one.</div>
                    <div className="text-gray-700 mb-3">Allison Watson had the opportunity to protect me when I reported what was happening &mdash; in real time, the day she called to intimidate me about recording the day-use area meeting.</div>
                    <div>Wasn't that her job? We had no one else in the chain of command I could reach out to if I had a problem at the park. I was isolated. This is by design.</div>
                    <div>Instead, when I documented the abuse publicly (something I only did after I'd <em>already</em> been dismissed by Ryan Warren), she <Link href="/expulsion" className="text-emerald-700 underline hover:text-emerald-600">retaliated in writing</Link>, explicitly citing my protected speech as the reason for expulsion.
                    </div>
                    <div className="text-gray-700 mb-3">
                        &quot;Proper channels&quot; only exist when institutions want accountability. When they don't, those channels become mechanisms to exhaust, isolate, and dismiss the person reporting harm.
                    </div>
                    <div className="text-gray-700">
                        But here's the better question: why shouldn't I document in public?</div>
                    <div>Who are we protecting by keeping institutional abuse private? The answer is the institution &mdash; not the people it harms.
                    </div>
                </div>

                <hr className="border-t border-gray-300" />

                {/* Question 9 */}
                <div>
                    <h2 className="text-xl font-semibold mb-3">
                        What does their silence mean?
                    </h2>
                    <div className="text-gray-700 mb-3">
                        Their silence is a choice. Director Lisa Sumption received comprehensive evidence in August 2025 &mdash; audio recordings, video documentation, written proof of retaliation. She responded with procedural language and took no action. Governor Kotek's office has been notified multiple times over months. No response.
                    </div>
                    <div className="text-gray-700 mb-3">
                        Silence means they believe institutional protection is more important than the safety of the people who come to support it freely. It means they've decided the political cost of accountability is higher than the risk of doing nothing. It means every person involved in targeting me remains in their position, free to do this again.
                    </div>
                    <div className="text-gray-700">
                        Their silence is not neutrality. It's a decision. And it's documented.
                    </div>
                </div>

                <hr className="border-t border-gray-300" />

                {/* Question 10 */}
                <div>
                    <h2 className="text-xl font-semibold mb-3">
                        Why is your tone so direct?
                    </h2>
                    <div className="text-gray-700 mb-3">
                        Because I'm not performing grief or asking for sympathy. I'm documenting institutional failure with precision.
                    </div>
                    <div className="text-gray-700 mb-3">
                        I was targeted by people in positions of authority. I documented what they did. I reported it through every available channel. They chose silence and protection over accountability. Those are facts.
                    </div>
                    <div className="text-gray-700 mb-3">
                        Softening the language doesn't change what happened. It just makes it easier for people to dismiss. Direct language forces clarity: either the evidence supports the claims or it doesn't. Either institutions act on documented harm or they don't.
                    </div>
                    <div className="text-gray-700">
                        I'm not asking anyone to feel sorry for me. I'm asking them to look at the evidence and decide whether this is acceptable institutional behavior.
                    </div>
                    <div>That decision now belongs to the reader.</div>
                </div>

            </div>
        </SectionPage>
    );
}
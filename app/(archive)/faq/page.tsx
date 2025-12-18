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
        >
            <div className="mt-8 space-y-8">

                {/* Question 1 */}
                <div>
                    <h2 className="text-xl font-semibold mb-3">
                        Why didn't you sue them?
                    </h2>
                    <p className="text-gray-700">
                        Because suing them would have allowed them to disappear the evidence. It would have required my silence during the conflict and often ends in settlements with NDAs I would never agree to sign. Litigation favors institutions with resources and time. Public documentation favors truth that can't be sealed or settled away.
                    </p>
                </div>

                <hr className="border-t border-gray-300" />

                {/* Question 2 */}
                <div>
                    <h2 className="text-xl font-semibold mb-3">
                        Why would they target you?
                    </h2>
                    <p className="text-gray-700 mb-3">
                        This question implies I did something to justify what happened. Ask yourself this instead: what could I have done that justifies sustained psychological pressure over two months, dismissal without cause, permanent ban from volunteer service, and seven months of institutional silence after comprehensive evidence was provided?
                    </p>
                    <p className="text-gray-700">
                        The answer is nothing. Because the question itself is backwards. The issue isn't what I did—the issue is what they did when someone documented their behavior and refused to accept abuse as normal.
                    </p>
                </div>

                <hr className="border-t border-gray-300" />

                {/* Question 3 */}
                <div>
                    <h2 className="text-xl font-semibold mb-3">
                        Why not just move on?
                    </h2>
                    <p className="text-gray-700 mb-3">
                        Because moving on means accepting that institutions can target volunteers, weaponize their identities, retaliate for protected speech, and face no consequences. It means the next person who reports abuse gets the same treatment I did.
                    </p>
                    <p className="text-gray-700">
                        I came to serve Oregon's public lands without compensation. I was targeted, dismissed, and banned for documenting what was done to me. If that's acceptable, then the volunteer program itself is fundamentally broken and people deserve to know that before they give their time.
                    </p>
                </div>

                <hr className="border-t border-gray-300" />

                {/* Question 4 */}
                <div>
                    <h2 className="text-xl font-semibold mb-3">
                        Have they responded to any of this?
                    </h2>
                    <p className="text-gray-700 mb-3">
                        Director Lisa Sumption <Link href="/lisa-sumption/open-letter" className="text-emerald-700 underline hover:text-emerald-600">responded in August 2025</Link> with procedural language and no commitments. She <Link href="/lisa-sumption/closure" className="text-emerald-700 underline hover:text-emerald-600">closed communication in December 2025</Link>, reframing comprehensive documentation as "emotional processing."
                    </p>
                    <p className="text-gray-700 mb-3">
                        Governor Kotek's office and campaign have been contacted multiple times. No response.
                    </p>
                    <p className="text-gray-700">
                        Every person who abused their authority remains in their position. No investigation has been announced. No protections have been implemented.
                    </p>
                </div>

                <hr className="border-t border-gray-300" />

                {/* Question 5 */}
                <div>
                    <h2 className="text-xl font-semibold mb-3">
                        How can people verify this documentation?
                    </h2>
                    <p className="text-gray-700 mb-3">
                        Audio recordings, video documentation, and email correspondence are embedded throughout this archive. The <Link href="/correspondence" className="text-emerald-700 underline hover:text-emerald-600">correspondence section</Link> stores all external communications in unmodified .eml format in the public repository.
                    </p>
                    <p className="text-gray-700">
                        Everything claimed here is independently verifiable. Names, dates, specific statements—all documented. This isn't a narrative. It's a record.
                    </p>
                </div>

                <hr className="border-t border-gray-300" />

                {/* Question 6 */}
                <div>
                    <h2 className="text-xl font-semibold mb-3">
                        What do you want to happen?
                    </h2>
                    <p className="text-gray-700">
                        Independent investigation into documented misconduct at <Link href="https://stateparks.oregon.gov/index.cfm?do=park.profile&parkId=95" target="_blank" className="text-emerald-700 underline hover:text-emerald-600">Honeyman State Park</Link>. Accountability for supervisors who betrayed trust and weaponized identity. Removal of Director Lisa Sumption for protecting abusers after receiving evidence. Systemic protections preventing retaliation against volunteers who report abuse. Public commitment to volunteer program integrity and LGBTQ+ safety backed by action, not rhetoric.
                    </p>
                </div>

                <hr className="border-t border-gray-300" />

                {/* Question 7 */}
                <div>
                    <h2 className="text-xl font-semibold mb-3">
                        Aren't you worried about retaliation?
                    </h2>
                    <p className="text-gray-700 mb-3">
                        They already retaliated. That's documented in <Link href="/expulsion" className="text-emerald-700 underline hover:text-emerald-600">Allison Watson's removal letter</Link>, which explicitly states I was banned for speaking publicly about what happened.
                    </p>
                    <p className="text-gray-700 mb-3">
                        Could they retaliate further? Yes. They could contact my current volunteer agency. They could attempt to damage my reputation through back channels. They could use their institutional positions to interfere with future opportunities.
                    </p>
                    <p className="text-gray-700">
                        I've taken steps to counter this as much as a person can. And if they choose that path, it will simply add to this record—more documentation of an institution that protects abusers and punishes those who document abuse. Every action they take now happens in public view.
                    </p>
                </div>

                <hr className="border-t border-gray-300" />

                {/* Question 8 */}
                <div>
                    <h2 className="text-xl font-semibold mb-3">
                        Why make this public instead of going through proper channels?
                    </h2>
                    <p className="text-gray-700 mb-3">
                        Because there are no such thing as proper channels.</p>
                    <p className="text-gray-700 mb-3">Allison Watson had the opportunity to protect me when I reported what was happening—that was supposedly her job. She didn't. Instead, when I documented the abuse publicly (something I only did after I'd <em>already</em> been dismissed by Ryan Warren), she <Link href="/expulsion" className="text-emerald-700 underline hover:text-emerald-600">retaliated in writing</Link>, explicitly citing my protected speech as the reason for expulsion.
                    </p>
                    <p className="text-gray-700 mb-3">
                        "Proper channels" only exist when institutions want accountability. When they don't, those channels become mechanisms to exhaust, isolate, and dismiss the person reporting harm.
                    </p>
                    <p className="text-gray-700">
                        But here's the better question: why shouldn't I document in public? Who are we protecting by keeping institutional abuse private? The answer is the institution—not the people it harms.
                    </p>
                </div>

                <hr className="border-t border-gray-300" />

                {/* Question 9 */}
                <div>
                    <h2 className="text-xl font-semibold mb-3">
                        What does their silence mean?
                    </h2>
                    <p className="text-gray-700 mb-3">
                        Their silence is a choice. Director Lisa Sumption received comprehensive evidence in August 2025—audio recordings, video documentation, written proof of retaliation. She responded with procedural language and took no action. Governor Kotek's office has been notified repeatedly. No response.
                    </p>
                    <p className="text-gray-700 mb-3">
                        Silence means they believe institutional protection is more important than volunteer safety. It means they've decided the political cost of accountability is higher than the risk of doing nothing. It means every person involved in targeting me remains in their position, free to do this again.
                    </p>
                    <p className="text-gray-700">
                        Their silence is not neutrality. It's a decision. And it's documented.
                    </p>
                </div>

                <hr className="border-t border-gray-300" />

                {/* Question 10 */}
                <div>
                    <h2 className="text-xl font-semibold mb-3">
                        Why is your tone so direct?
                    </h2>
                    <p className="text-gray-700 mb-3">
                        Because I'm not performing grief or asking for sympathy. I'm documenting institutional failure with precision.
                    </p>
                    <p className="text-gray-700 mb-3">
                        I was targeted by people in positions of authority. I documented what they did. I reported it through every available channel. They chose silence and protection over accountability. Those are facts.
                    </p>
                    <p className="text-gray-700 mb-3">
                        Softening the language doesn't change what happened. It just makes it easier for people to dismiss. Direct language forces clarity: either the evidence supports the claims or it doesn't. Either institutions act on documented harm or they don't.
                    </p>
                    <p className="text-gray-700">
                        I'm not asking anyone to feel sorry for me. I'm asking them to look at the evidence and decide whether this is acceptable institutional behavior.
                    </p>
                </div>

            </div>
        </SectionPage>
    );
}
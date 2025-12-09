// app/(archive)/permanent-dismissal/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import SectionPage from "@/components/SectionPage";
import VideoEmbed from "@/components/archive/VideoEmbed";
import Email from "@/components/archive/Email";

export const metadata: Metadata = {
    title: "Permanent Dismissal",
    description: "March 25-27, 2025 - Containment call, vulnerable letter, permanent erasure. The 48-hour sequence that revealed institutional retaliation.",
};

export default function PermanentDismissalPage() {
    return (
        <SectionPage
            title="PERMANENT DISMISSAL"
            subtitle="MARCH 25-27, 2025 — CONTAINMENT, VULNERABILITY, ERASURE"
        >

            <div className="mt-4 text-lg">
                <strong>
                    This was my first attempt at institutional belonging. They didn't just harm a volunteer —
                    they corrupted someone's introduction to civic participation. The betrayal I had to
                    metabolize operates at the level of citizenship itself. That is a stain they will never
                    be able to wash off.
                </strong>
            </div>

            <div className="mt-4">The sequence matters.</div>

            <div className="mt-4">
                Ryan dismissed me from Honeyman on March 24 without paperwork or cause. The next day,
                Allison Watson called to contain the situation. The day after that, I sent her a vulnerable
                letter attempting accountability. Hours later, she dismissed me permanently—explicitly citing
                my public speech as the reason.
            </div>

            <div className="mt-4">
                This is the complete arc of institutional response: phone containment → written accountability
                attempt → retaliation in writing.
            </div>

            {/* MARCH 25: THE CONTAINMENT CALL */}
            <h2 className="mt-8 text-xl font-semibold border-t pt-6">
                March 25: The Containment Call
            </h2>

            <div className="mt-4">This wasn't a conversation. It was a containment protocol.</div>

            <div className="mt-4">
                One day after my dismissal from Honeyman, I received a phone call from Allison Watson,
                Volunteer Engagement Coordinator for Oregon State Parks. I recorded the call for
                documentation and clarity.
            </div>

            <div className="mt-4">
                This call revealed the coordinated nature of my removal. Questions and framing that echoed
                the March 5 meeting. Personal information shared in confidence with Logan now{" "}
                <Link href="/logan/supplemental" className="text-emerald-700 underline">
                    weaponized
                </Link>{" "}
                as "concerning behavior."
            </div>

            <div className="mt-4">What you'll hear is not leadership showing up in presence.</div>
            <div>
                It is institutional posture cloaked in empathy—a soft tone used to reroute accountability,
                a performance that frames legitimacy as disruption.
            </div>

            <div className="mt-4">In this call, you will hear:</div>
            <ul className="list-disc list-outside ml-8">
                <li>Vague, unverifiable third-party reports used to justify my removal</li>
                <li>Reflective statements reframed as misconduct</li>
                <li>Complete refusal to engage the March 5 coercion meeting</li>
                <li>A poem treated as a behavioral issue</li>
                <li>Empathy used not to connect—but to contain</li>
            </ul>

            <div className="mt-4">
                And this from someone who was the <strong>Belonging, Equity & Engagement Coordinator</strong>
                at Washington State University.
            </div>

            <div className="mt-6 border border-gray-200 shadow-sm rounded-md overflow-hidden">
                <div className="bg-gray-100 px-4 py-2 font-semibold">
                    🔊 Full Recording — March 25 Call with Allison Watson
                </div>
                <div className="p-4">
                    <VideoEmbed
                        youtubeId="Px_pCUo78w4"
                        title="March 25, 2025 Call with Allison Watson - Full Recording"
                    />
                </div>
                <div className="text-sm italic text-gray-500 m-0 p-2 ml-6 mb-4">
                    <div>That first breath you hear at the start?</div>
                    <div>It was me centering. I knew I was stepping into distortion—</div>
                    <div className="ml-4">and I held my clarity anyway.</div>
                </div>
            </div>

            {/* MARCH 27: THE LETTER THEY IGNORED */}
            <h2 className="mt-8 text-xl font-semibold border-t pt-6">
                March 27: The Letter They Ignored
            </h2>

            <div className="mt-4">
                After the containment call, I sent Allison a detailed, vulnerable letter that evening.
                It was one of the most direct, honest, and measured attempts to name harm and restore clarity.
            </div>

            <div className="mt-4">It was never acknowledged. It was not referenced in the dismissal.</div>
            <div>And to this day, it has <strong>never been answered</strong>.</div>

            <div className="mt-4">
                Less than 24 hours after I sent this letter, she dismissed me permanently—citing my public
                speech about the abuse as the reason.
            </div>

            <div className="mt-8 border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                <div className="bg-gray-100 px-4 py-2 font-semibold">🎥 Watch the Reading</div>
                <div className="p-4">
                    <VideoEmbed
                        youtubeId="j7awLxjn4_4"
                        title="Reading of Letter to Allison Watson - March 27, 2025"
                    />
                </div>
                <div className="text-sm italic text-gray-500 m-0 p-2 ml-6 mb-4">
                    <div>I recorded this reading after the dismissal.</div>
                    <div>I was calm. Grounded. Documenting what leadership refused to hold.</div>
                </div>
            </div>

            <h3 className="mt-8 text-lg font-semibold">📝 The Letter</h3>

            <Email
                from="Sam White"
                to="Allison Watson, Volunteer Engagement Coordinator"
                date="March 27, 2025"
            >
                <div>Hi Allison,</div>

                <div className="mt-4">
                    Thank you again for taking the time to speak with me. I've reflected on our conversation
                    and want to offer some additional context for the record—both to clarify key points and
                    to express concern about how some of what I shared may be interpreted.
                </div>

                <div className="mt-4">
                    Throughout our conversation, I sensed a familiar pattern—where thoughtful, human
                    interactions were being reframed post hoc as "inappropriate" or "concerning." That
                    reframing is not new to me. I experienced it often during my time at Honeyman, and it
                    appeared again during our call.
                </div>

                <div className="mt-4">Some moments I feel are important to emphasize:</div>

                <ul className="list-disc list-outside ml-8 space-y-2">
                    <li>
                        Ryan telling me to "eat glass" during our March 5 meeting was not a miscommunication—it
                        was inappropriate and aggressive. What I did not mention in the call, but now want to
                        add, is that he used this same phrase in the Welcome Center the very first time he
                        confronted me. That makes it a pattern.
                    </li>
                    <li>
                        At the end of that March 5 meeting, Ryan spent five minutes repeating that "I could
                        just leave" if I felt uncomfortable. That wasn't support—it was pressure.
                    </li>
                    <li>
                        Logan's behavior, including doing stretches in front of me during a long shift at the
                        Welcome Center, created discomfort and blurred boundaries.
                    </li>
                    <li>
                        Logan also told me that Ranger Leaf would train me, a commitment he never followed
                        through on—Leaf had no knowledge of it. That breach was the final breakdown of trust.
                    </li>
                    <li>
                        Ryan admitted in our meeting that he never gave me the benefit of the doubt, beginning
                        with my initial interaction with Kati.
                    </li>
                    <li>
                        The journal incident was misrepresented. My comment to the ranger assistant—"not all
                        rangers are helpful"—was not a criticism of staff. It was an appeal to ensure the
                        journal was not ignored in the lost and found. As someone who has been homeless, I
                        know the emotional significance of a journal.
                    </li>
                    <li>
                        The issue of guest perception was related to my early text message to Kati when the
                        power went out. My statement that "I own this problem in the eyes of guests" was an
                        accurate reflection of how guests see park hosts—as the first point of contact.
                    </li>
                </ul>

                <div className="mt-4">
                    The common thread in all of this is how I've held leadership accountable in writing. The
                    primary concern Ryan raised in that March 5 meeting was not my behavior—it was my emails.
                    The discomfort stemmed not from what I said—but from the fact that I said it in a format
                    that created a record.
                </div>

                <div className="mt-4">
                    Additionally, I am aware of at least three other volunteers who have had similar challenges
                    with Ryan. His behavior is not isolated. His approach to volunteers appears to follow a
                    consistent pattern.
                </div>

                <div className="mt-4">
                    I'm not sharing this to escalate or attack, but to ensure that the story doesn't get
                    flattened into something it never was. I've remained calm, communicative, and reflective
                    throughout my time in this program.
                </div>

                <div className="mt-4">
                    All I ask is that this be viewed with honesty and fairness. I am not asking for special
                    treatment—just integrity in how this is held and assessed.
                </div>

                <div className="mt-4">
                    The integrity of any volunteer program depends not only on the contributions of its
                    volunteers—but on the willingness of leadership to be accountable when trust is compromised.
                </div>

                <div className="mt-4">
                    Please include this message in my file as part of the ongoing review.
                </div>

                <div className="mt-4">Warm Regards,</div>
                <div className="mt-4">Sam White</div>
            </Email>

            {/* MARCH 27: THE FINAL ERASURE */}
            <h2 className="mt-8 text-xl font-semibold border-t pt-6">
                March 27: The Final Erasure
            </h2>

            <div className="mt-4">Hours after I sent that letter, Allison Watson responded.</div>
            <div>Not with acknowledgment. Not with investigation.</div>
            <div>With permanent dismissal from all Oregon State Parks volunteer programs.</div>

            <div className="mt-4">
                The language was vague and polished, but the fingerprint is unmistakable:
            </div>

            <div className="mt-4 ml-4 italic">
                "While you are able to share your opinion, perspective, and experience as an individual
                with the public, the public comments made about staff regarding your volunteer service,
                were not in line with expectations set forth in the agreement."
            </div>

            <div className="mt-4">This was not about conduct at the park.</div>
            <div>This was not about my work—which had been praised.</div>
            <div>This was about the act of speaking.</div>

            <div className="mt-4">I was removed from Honeyman for refusing to fracture.</div>
            <div>I was removed from the program for refusing to stay silent.</div>

            <div className="mt-4">The irony is brutal:</div>
            <div>I documented my dismissal.</div>
            <div>And they dismissed me again for documenting it.</div>

            <h3 className="mt-8 text-lg font-semibold">📝 Dismissal Email from Allison Watson</h3>

            <Email
                from="Allison Watson, Volunteer Engagement Coordinator"
                to="Sam White"
                date="March 27, 2025"
            >
                <div>Hello Sam,</div>

                <div className="mt-4">
                    After reviewing the dismissal as a park host from Jessie M. Honeyman State Park, your
                    service, and communications with and about OPRD these past three months, we've
                    identified that this volunteer relationship is no longer mutually beneficial.
                </div>

                <div className="mt-4">
                    As stated in your volunteer service agreement, we require volunteers to "Engage in
                    welcoming interactions with the public, staff, and other volunteers: volunteers must
                    be … professional towards…other volunteers, employees….at all times." While you are
                    able to share your opinion, perspective, and experience as an individual with the
                    public, the public comments made about staff regarding your volunteer service, were not
                    in line with expectations set forth in the agreement. At this time, OPRD has found that
                    you are not able to professionally represent the volunteer park host program.
                </div>

                <div className="mt-4">
                    As part of your dismissal, any future assignments you had scheduled will be cancelled.
                    If you have not already returned your volunteer uniform items at Honeyman, please drop
                    uniform items off on the bench outside of Umpqua Lighthouse State Park's office door.
                </div>

                <div className="mt-4">
                    Thank you for the time you did dedicate to support our state park system and state park
                    properties. I wish you the best in any other volunteer opportunities you may pursue with
                    other organizations. Please find an official letter of dismissal and your volunteer
                    agreement attached to this email.
                </div>

                <div className="mt-4">Respectfully,</div>
                <div className="mt-4">Allison Watson</div>
            </Email>

            <div className="mt-8 text-center space-y-2">
                <div className="font-bold italic">
                    This is the loop: dismissed, then punished for naming the dismissal.
                </div>
                <div className="italic">
                    A logic so thin it reveals itself.
                </div>
                <div className="mt-4">

                    <a className="text-emerald-700 underline hover:text-emerald-800"
                        href="/oprd-dismissal.pdf"
                        download
                    >
                     Download the Dismissal Letter (PDF)
                     </a>
            </div>
        </div>

    {/* CLOSING */}
    <div className="mt-8 pt-6 border-t">
        <div className="mt-4">
            This letter is proof. It ties my permanent exclusion not to behavior on duty, but to
            public witness afterward.
        </div>

        <div className="mt-4">
            It is a written acknowledgment that Oregon State Parks punishes whistleblowing—not
            misconduct.
        </div>

        <div className="mt-4">
            The 48-hour sequence tells the complete story: containment call, vulnerable letter
            attempting accountability, retaliation in writing citing protected speech.
        </div>

        <div className="mt-4">
            Every piece is documented. Every step is permanent. And the pattern is undeniable.
        </div>
    </div>

</SectionPage>
);
}
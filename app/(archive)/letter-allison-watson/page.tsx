// app/(archive)/letter-allison-watson/page.tsx
import type { Metadata } from "next";
import SectionPage from "@/components/SectionPage";
import VideoEmbed from "@/components/archive/VideoEmbed";
import Email from "@/components/archive/Email";

export const metadata: Metadata = {
    title: "Letter to Allison Watson",
    description: "March 27, 2025 - A direct, honest attempt to name harm and restore clarity. Never acknowledged. Never answered.",
};

export default function LetterAllisonWatsonPage() {
    return (
        <SectionPage
            title="LETTER TO ALLISON WATSON"
            subtitle="MARCH 27, 2025 — THE LETTER THEY COULD NOT METABOLIZE"
        >

            <div className="mt-4">
                This letter was sent to Allison Watson the evening before I was permanently dismissed from
                the Oregon State Parks volunteer program.
            </div>
            <div>
                It was one of the most direct, honest, and measured attempts to name harm and restore
                clarity.
            </div>

            <div className="mt-4">It was never acknowledged. It was not referenced in the dismissal.</div>
            <div>And to this day, it has <strong>never been answered</strong>.</div>

            <div className="mt-8 border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                <div className="bg-gray-100 px-4 py-2 font-semibold">🎥 Watch the Reading</div>
                <div className="p-4">
                    <VideoEmbed
                        youtubeId="j7awLxjn4_4"
                        title="Reading of Letter to Allison Watson - March 27, 2025"
                    />
                </div>
                <div className="text-sm italic text-gray-500 m-0 p-2 ml-6 mb-4">
                    <div>I recorded this on March 27 — after the final dismissal.</div>
                    <div>I was calm. Grounded. Documenting what leadership refused to hold.</div>
                </div>
            </div>

            <h3 className="mt-8 text-lg font-semibold">📝 The Letter Allison Watson Ignored</h3>

            <Email
                from="Sam White"
                to="Allison Watson, Volunteer Engagement Coordinator"
                date="March 27, 2025"
            >
                <div className="mt-4">Hi Allison,</div>

                <div className="mt-4">
                    Thank you again for taking the time to speak with me. I've reflected on our conversation
                    and want to offer some additional context for the record—both to clarify key points and
                    to express concern about how some of what I shared may be interpreted.
                </div>

                <div className="mt-4">
                    Throughout our conversation, I sensed a familiar pattern—where thoughtful, human
                    interactions were being reframed post hoc as "inappropriate" or "concerning." That
                    reframing is not new to me. I experienced it often during my time at Honeyman, and it
                    appeared again during our call. I want to be transparent about what I witnessed, and how
                    it continues to shape my understanding of the institutional dynamics at play.
                </div>

                <div className="mt-4">Some moments I feel are important to emphasize:</div>

                <ul className="list-disc list-outside ml-8">
                    <li className="mt-4">
                        Ryan telling me to "eat glass" during our March 5 meeting was not a miscommunication—it
                        was inappropriate and aggressive. What I did not mention in the call, but now want to
                        add, is that he used this same phrase in the Welcome Center the very first time he
                        confronted me. That makes it a pattern. I have reason to believe this is not an
                        isolated incident.
                    </li>
                    <li className="mt-4">
                        At the end of that March 5 meeting, Ryan spent five minutes repeating that "I could
                        just leave" if I felt uncomfortable. That wasn't support—it was pressure. The
                        interaction felt coercive and deeply unprofessional. And you can hear it clearly in
                        his tone.
                    </li>
                    <li className="mt-4">
                        Logan's behavior, including doing stretches in front of me during a long shift at the
                        Welcome Center, created discomfort and blurred boundaries. As a new volunteer, I didn't
                        know how to respond appropriately to a situation where I felt my professionalism was
                        being tested by someone in a position of authority.
                    </li>
                    <li className="mt-4">
                        Logan also told me that Ranger Leaf would train me, a commitment he never followed
                        through on—Leaf had no knowledge of it. That breach was the final breakdown of trust
                        in what was already a fragile dynamic.
                    </li>
                    <li className="mt-4">
                        Ryan admitted in our meeting that he never gave me the benefit of the doubt, beginning
                        with my initial interaction with Kati. That admission confirms the feeling I carried
                        throughout my time at Honeyman: that I was being judged through a fixed lens,
                        regardless of my conduct.
                    </li>
                    <li className="mt-4">
                        The journal incident was misrepresented. My comment to the ranger assistant—"not all
                        rangers are helpful"—was not a criticism of staff. It was an appeal to ensure the
                        journal was not ignored in the lost and found. As someone who has been homeless, I
                        know the emotional significance of a journal, and I was simply asking that extra care
                        be taken.
                    </li>
                    <li className="mt-4">
                        The issue of guest perception was related to my early text message to Kati when the
                        power went out. My statement that "I own this problem in the eyes of guests" was not
                        a misunderstanding of my role. It was an accurate reflection of how guests see park
                        hosts—as the first point of contact. My message was about optics, not blame or
                        misalignment.
                    </li>
                </ul>

                <div className="mt-4">
                    The common thread in all of this, and what I believe is the real issue, is how I've held
                    leadership accountable in writing. The primary concern Ryan raised in that March 5
                    meeting was not my behavior—it was my emails. The vast majority of that meeting centered
                    on my written communication, which I've always approached with clarity and intent. The
                    discomfort, in my view, stemmed not from what I said—but from the fact that I said it in
                    a format that created a record. This is an undeniable pattern that strikes at the heart
                    of accountability and transparency.
                </div>

                <div className="mt-4">
                    Additionally, I want to acknowledge something I did not bring up on the call: I am aware
                    of at least three other volunteers who have had similar challenges with Ryan. His
                    behavior is not isolated. His approach to volunteers appears to follow a consistent
                    pattern. I raise this not to accuse, but to suggest that what I experienced fits into a
                    broader pattern that may be worth further attention.
                </div>

                <div className="mt-4">
                    I'm not sharing this to escalate or attack, but to ensure that the story doesn't get
                    flattened into something it never was. I've remained calm, communicative, and reflective
                    throughout my time in this program. I've adapted, learned, and tried to contribute with
                    sincerity and care. If there are aspects of my communication style that feel different,
                    that is not a threat—it's a strength. And it should not be weaponized to create distance
                    or distrust.
                </div>

                <div className="mt-4">
                    All I ask is that this be viewed with honesty and fairness. I am not asking for special
                    treatment—just integrity in how this is held and assessed.
                </div>

                <div className="mt-4">
                    The integrity of any volunteer program depends not only on the contributions of its
                    volunteers—but on the willingness of leadership to be accountable when trust is
                    compromised.
                </div>

                <div className="mt-4">Please include this message in my file as part of the ongoing review.</div>

                <div className="mt-4">Warm Regards,</div>

                <div className="mt-4">Sam White</div>
            </Email>

        </SectionPage>
    );
}
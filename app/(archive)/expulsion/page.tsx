// app/(archive)/expulsion/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import SectionPage from "@/components/SectionPage";
import VideoEmbed from "@/components/archive/VideoEmbed";
import Email from "@/components/archive/Email";

export const metadata: Metadata = {
    title: "Expulsion",
    description: "March 25-27, 2025 - Permanent dismissal from all Oregon State Parks volunteer programs for speaking publicly about documented abuse.",
};

export default function ExpulsionPage() {
    return (
        <SectionPage
            title="EXPULSION"
            subtitle="ALLISON WATSON, ENGAGEMENT PROGRAMS MANAGER"
        >
            <div className="mt-4 p-4 bg-gray-50 border-l-4 border-emerald-600 text-sm">
                <div className="font-semibold">
                    Allison Watson issued permanent dismissal from all Oregon State Parks volunteer programs, explicitly citing my public speech about the abuse as the reason.
                </div>
            </div>

            <hr className="my-6 border-t border-gray-300" />

            <h2 className="text-xl font-semibold">THE SEQUENCE</h2>

            <div className="mt-4">
                March 24: Ryan Warren dismissed me from <Link href="https://stateparks.oregon.gov/index.cfm?do=park.profile&parkId=95" target="_blank" className="underline text-emerald-800 hover:text-emerald-600">Honeyman State Park</Link> without paperwork or cause.
            </div>

            <div className="mt-4">
                March 25: Allison Watson called to contain the situation. I recorded the call.
            </div>

            <div className="mt-4">
                March 27: I sent Allison a detailed letter attempting accountability. Hours later, she dismissed me permanently — explicitly citing my public comments about the abuse.
            </div>

            <hr className="my-6 border-t border-gray-300" />

            <h2 className="text-xl font-semibold">MARCH 25 — THE CONTAINMENT CALL</h2>

            <div className="mt-4">
                One day after my dismissal from Honeyman, Allison Watson called. The call revealed coordination between park leadership and regional administration.
            </div>

            <div className="mt-4">
                What you'll hear:
            </div>

            <ul className="list-disc list-outside ml-8 mt-2 space-y-1">
                <li>Vague, unverifiable third-party reports used to justify removal</li>
                <li>Reflective statements reframed as misconduct</li>
                <li>Complete refusal to engage with the March 5 coercion meeting</li>
                <li>Logan's disclosures weaponized as "concerning behavior"</li>
                <li>Empathy used to contain, not to connect</li>
            </ul>

            <div className="mt-6 border border-gray-200 shadow-sm rounded-md overflow-hidden">
                <div className="bg-gray-100 px-4 py-2 font-semibold">
                    Full Recording — March 25, 2025
                </div>
                <div className="p-4">
                    <VideoEmbed
                        youtubeId="Px_pCUo78w4"
                        title="March 25, 2025 Call with Allison Watson"
                    />
                </div>
            </div>

            <hr className="my-6 border-t border-gray-300" />

            <h2 className="text-xl font-semibold">MARCH 27 — THE LETTER THEY IGNORED</h2>

            <div className="mt-4">
                After the containment call, I sent Allison a detailed letter that evening. It documented the pattern of misconduct, named specific incidents, and requested fair assessment.
            </div>

            <div className="mt-4">
                It was never acknowledged. It was not referenced in the dismissal. To this day, it has never been answered.
            </div>

            <div className="mt-8 border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                <div className="bg-gray-100 px-4 py-2 font-semibold">Full Letter — March 27, 2025</div>
                <div className="p-4">
                    <VideoEmbed
                        youtubeId="j7awLxjn4_4"
                        title="Reading of Letter to Allison Watson - March 27, 2025"
                    />
                </div>
            </div>

            <Email
                from="Sam White"
                to="Allison Watson, Volunteer Engagement Coordinator"
                date="March 27, 2025"
            >
<pre className="whitespace-pre-wrap">{`Hi Allison,

Thank you again for taking the time to speak with me. I've reflected on our conversation and want to offer some additional context for the record—both to clarify key points and to express concern about how some of what I shared may be interpreted.

Throughout our conversation, I sensed a familiar pattern—where thoughtful, human interactions were being reframed post hoc as "inappropriate" or "concerning." That reframing is not new to me. I experienced it often during my time at Honeyman, and it appeared again during our call.

Some moments I feel are important to emphasize:

- Ryan telling me to "eat glass" during our March 5 meeting was not a miscommunication—it was inappropriate and aggressive. What I did not mention in the call, but now want to add, is that he used this same phrase in the Welcome Center the very first time he confronted me. That makes it a pattern.

- At the end of that March 5 meeting, Ryan spent five minutes repeating that "I could just leave" if I felt uncomfortable. That wasn't support—it was pressure.

- Logan's behavior, including doing stretches in front of me during a long shift at the Welcome Center, created discomfort and blurred boundaries.

- Logan also told me that Ranger Leaf would train me, a commitment he never followed through on—Leaf had no knowledge of it. That breach was the final breakdown of trust.

- Ryan admitted in our meeting that he never gave me the benefit of the doubt, beginning with my initial interaction with Kati.

- The journal incident was misrepresented. My comment to the ranger assistant—"not all rangers are helpful"—was not a criticism of staff. It was an appeal to ensure the journal was not ignored in the lost and found. As someone who has been homeless, I know the emotional significance of a journal.

- The issue of guest perception was related to my early text message to Kati when the power went out. My statement that "I own this problem in the eyes of guests" was an accurate reflection of how guests see park hosts—as the first point of contact.

The common thread in all of this is how I've held leadership accountable in writing. The primary concern Ryan raised in that March 5 meeting was not my behavior—it was my emails. The discomfort stemmed not from what I said—but from the fact that I said it in a format that created a record.

Additionally, I am aware of at least three other volunteers who have had similar challenges with Ryan. His behavior is not isolated. His approach to volunteers appears to follow a consistent pattern.

I'm not sharing this to escalate or attack, but to ensure that the story doesn't get flattened into something it never was. I've remained calm, communicative, and reflective throughout my time in this program.

All I ask is that this be viewed with honesty and fairness. I am not asking for special treatment—just integrity in how this is held and assessed.

The integrity of any volunteer program depends not only on the contributions of its volunteers—but on the willingness of leadership to be accountable when trust is compromised.

Please include this message in my file as part of the ongoing review.

Warm Regards,
Sam White`}</pre>
            </Email>

            <hr className="my-6 border-t border-gray-300" />

            <h2 className="text-xl font-semibold">MARCH 27 — THE PERMANENT DISMISSAL</h2>

            <div className="mt-4">
                Hours after I sent that letter, Allison Watson responded with permanent dismissal from all <Link href="https://www.oregon.gov/oprd/AO/Pages/AU-about.aspx" target="_blank" className="underline text-emerald-800 hover:text-emerald-600">Oregon State Parks</Link> volunteer programs.
            </div>

            <div className="mt-4">
                The critical language:
            </div>

            <div className="mt-4 ml-4 p-4 bg-gray-50 border-l-4 border-emerald-600 italic">
                "While you are able to share your opinion, perspective, and experience as an individual with the public, the public comments made about staff regarding your volunteer service, were not in line with expectations set forth in the agreement."
            </div>

            <div className="mt-4">
                This was not about conduct at the park. This was about speaking publicly about what happened.
            </div>

            <Email
                from="Allison Watson, Volunteer Engagement Coordinator"
                to="Sam White"
                date="March 27, 2025"
            >
<pre className="whitespace-pre-wrap">{`Hello Sam,

After reviewing the dismissal as a park host from Jessie M. Honeyman State Park, your service, and communications with and about OPRD these past three months, we've identified that this volunteer relationship is no longer mutually beneficial.

As stated in your volunteer service agreement, we require volunteers to "Engage in welcoming interactions with the public, staff, and other volunteers: volunteers must be … professional towards…other volunteers, employees….at all times." While you are able to share your opinion, perspective, and experience as an individual with the public, the public comments made about staff regarding your volunteer service, were not in line with expectations set forth in the agreement. At this time, OPRD has found that you are not able to professionally represent the volunteer park host program.

As part of your dismissal, any future assignments you had scheduled will be cancelled. If you have not already returned your volunteer uniform items at Honeyman, please drop uniform items off on the bench outside of Umpqua Lighthouse State Park's office door.

Thank you for the time you did dedicate to support our state park system and state park properties. I wish you the best in any other volunteer opportunities you may pursue with other organizations. Please find an official letter of dismissal and your volunteer agreement attached to this email.

Respectfully,
Allison Watson`}</pre>
            </Email>

            <div className="mt-4">
                <a
                    className="text-emerald-700 underline hover:text-emerald-800"
                    href="/oprd-dismissal.pdf"
                    download
                >
                    Download the Dismissal Letter (PDF)
                </a>
            </div>

            <hr className="my-6 border-t border-gray-300" />

            <h2 className="text-xl font-semibold">WHAT THIS ESTABLISHES</h2>

            <div className="mt-4">
                Allison Watson's letter is written acknowledgment of retaliatory dismissal based on protected speech.
            </div>

            <div className="mt-4">
                I was not removed for misconduct. I was removed for documenting the abuse and speaking about it publicly.
            </div>

            <div className="mt-4">
                The 48-hour sequence: containment call → vulnerable letter attempting accountability → retaliation in writing citing protected speech.
            </div>

            <div className="mt-4">
                Every piece is documented. Every step is permanent. The pattern is undeniable.
            </div>

        </SectionPage>
    );
}
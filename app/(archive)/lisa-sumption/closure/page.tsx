// app/(archive)/lisa-sumption/closure/page.tsx

import type { Metadata } from "next";
import SectionPage from "@/components/SectionPage";
import Email from "@/components/archive/Email";
import Link from "next/link";

export const metadata: Metadata = {
    title: "The Closure (December 2025)",
    description:
        "Director Lisa Sumption’s decision to end communication following documented evidence of retaliation, misconduct, and systemic failure within OPRD.",
};

export default function LisaClosurePage() {
    return (
        <SectionPage
            title="THE CLOSURE"
            subtitle="DECEMBER 2025"
            supplemental="DIRECTOR LISA SUMPTION ENDS COMMUNICATION"
        >

            <div className="mt-4">
                In December 2025, after months of documented misconduct, retaliatory dismissal,
                and institutional silence, I sent Director Lisa Sumption a final attempt at
                resolution. It was direct, factual, and centered on leadership accountability.
            </div>

            <div className="mt-4">
                Her response did not address the evidence. Instead, she reframed documentation as
                emotional processing and terminated the line of communication entirely. One day later,
                the full record of Logan’s disclosures and the weaponization of queer vulnerability
                was published.
            </div>

            <div className="mt-4">
                What follows is the complete exchange.
            </div>

            <hr className="my-6 border-t border-gray-300" />

            {/* MY MESSAGE */}

            <h2 className="text-xl font-semibold">My Message to Director Sumption</h2>

            <Email
                from="Robert Samuel White <rsw@rswfire.com>"
                to="Director Lisa Sumption"
                date="December 7, 2025"
                subject="There's something you should know."
            >
                <pre className="whitespace-pre-wrap font-mono text-sm">
{`Lisa,

There's something I think you should know.

After I was dismissed from Honeyman, I had nowhere to go. They removed me at my most economically vulnerable moment, and frankly I don't think that was an accident.

As a result, I looked for opportunities nearby and I ended up directly next door in the United States Forest Service. I've been here for nine months. Promoted twice. Now trusted with access to their work trucks and a 25 mile daily route. Facts.

I was never the problem - your leadership is.

Kati and Ryan were abusive for two months. In ways that defy rationality. Your staff acted in ways that made no operational or ethical sense whatsoever. This is why I don't understand why you protect them - they are very clearly liabilities.

Allison covered it up for them. And you protected all of them. Your response to my open letter doesn't make you sound like a responsible leader. It makes you sound avoidant. The number of damning headlines that are inevitable if you don't act? I can't understand it. It's like you're paralyzed.

This doesn't go away until you solve it. One day this story will come out and it has the potential to destroy your reputation completely, something you built over decades, something I have no desire to see happen. You cannot possibly broaden your visibility while this lingers over an institution you stewarded for decades. Surely you recognize that?

You can still fix this, internally, right now, because I'm not threatening you with legal action or media attention or any other kind of action other than documentation that wouldn't even need to exist if you actually protected the people who came to serve you in good faith.

That's the part that still stings for me. The abuse at Honeyman was survivable. Allison's permanent dismissal was retaliatory and the driver behind every action you've seen since. Because I was removed from something I came to serve and I was punished for that. Doesn't that bother you?

I'm still waiting for you to be the ethical leader I needed you to be. I will not reach out to you again. You will either choose to fix this or you won't, and the future will unfold in the light of that choice. And you know I'm right.

Samuel
`}
                </pre>
            </Email>

            <hr className="my-6 border-t border-gray-300" />

            {/* HER RESPONSE */}

            <h2 className="text-xl font-semibold">Director Sumption’s Response</h2>

            <Email
                from="Director Lisa Sumption"
                to="Samuel White"
                date="December 8, 2025"
            >
                <pre className="whitespace-pre-wrap font-mono text-sm">
{`Dear Samuel,

Thank you for taking the time to share your experiences and concerns so thoroughly. I can see that this has been deeply painful for you, and I want to acknowledge the seriousness with which you’ve approached this situation. It’s clear that your time at Honeyman left a lasting impact, and I hear the frustration and hurt in your words. 

I also recognize the effort you’ve put into documenting your experience and advocating for what you believe is right. Your voice matters, and I don’t take lightly the trust it takes to continue reaching out.

That said, I also need to be honest with you: we’ve reached a point where I don’t believe further correspondence will lead to the resolution you’re seeking. While I respect your perspective, I must focus on the responsibilities I carry today and the work ahead for the organization and its people.

I sincerely wish you continued success in your current role and beyond. It sounds like you’ve found a place where your contributions are valued, and I hope that brings you a sense of purpose and healing.

Take care,

Lisa
`}
                </pre>
            </Email>

            <hr className="my-6 border-t border-gray-300" />

            {/* MY ACKNOWLEDGEMENT */}

            <h2 className="text-xl font-semibold">My Acknowledgment</h2>

            <Email
                from="Robert Samuel White"
                to="Director Lisa Sumption"
                date="December 8, 2025"
            >
                <pre className="whitespace-pre-wrap font-mono text-sm">
{`I acknowledge receipt of your message.

Robert Samuel White

oprdvolunteerabuse.org
`}
                </pre>
            </Email>

            <hr className="my-6 border-t border-gray-300" />

            {/* HER FINAL WORD */}

            <h2 className="text-xl font-semibold">Her Final Word</h2>

            <Email
                from="Director Lisa Sumption"
                to="Robert Samuel White"
                date="December 8, 2025"
            >
                <pre className="whitespace-pre-wrap font-mono text-sm">
{`And I yours.

Lisa Sumption
`}
                </pre>
            </Email>

            <hr className="my-6 border-t border-gray-300" />

            {/* MY FINAL WORD */}

            <h2 className="text-xl font-semibold">My Final Word</h2>

            <Email
                from="Robert Samuel White"
                to="Director Lisa Sumption"
                date="December 11, 2025"
            >
                <pre className="whitespace-pre-wrap font-mono text-sm">
{`Lisa,

This message is a courtesy. It is not an attempt to reopen dialogue.

You chose to characterize documented identity-based targeting as emotional processing.
That choice is now documented.

Your role in these proceedings is detailed here:
https://oprdvolunteerabuse.org/lisa-sumption 

I will continue my accountability work where it will have the greatest institutional effect.

Take care,

Sam
`}
                </pre>
            </Email>

            <hr className="my-6 border-t border-gray-300" />

            {/* ANALYSIS */}

            <h2 className="text-xl font-semibold">Why This Exchange Matters</h2>

            <div className="mt-4">
                Director Sumption’s response reframed documented institutional misconduct —
                supported by recordings, emails, and written evidence — as emotional impact and
                personal perspective. This is not acknowledgment. It is minimization through
                reframing and a strategic ending of communication at the moment when institutional
                accountability was required.
            </div>

            <div className="mt-4">
                Her decision to close communication occurred one day before the publication of the
                full record documenting Logan’s disclosures, the breach of supervisory trust, and
                the weaponization of queer vulnerability.
            </div>

            <div className="mt-4">
                This page exists because institutional closure does not erase the record. It becomes
                part of it.
            </div>

            <div className="mt-8 pt-6 border-t border-gray-300">
                <Link href="/lisa-sumption" className="text-emerald-700 hover:underline">
                    ← Back to The Director's Decisions
                </Link>
            </div>

        </SectionPage>
    );
}

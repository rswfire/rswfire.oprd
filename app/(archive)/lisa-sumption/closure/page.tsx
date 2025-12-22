// app/(archive)/lisa-sumption/closure/page.tsx

import type { Metadata } from "next";
import SectionPage from "@/components/SectionPage";
import Email from "@/components/archive/Email";

export const metadata: Metadata = {
    title: "The Closure (December 2025)",
    description:
        "Director Lisa Sumption's decision to end communication following documented evidence of retaliation, misconduct, and systemic failure within OPRD.",
};

export default function LisaClosurePage() {
    return (
        <SectionPage
            title="THE CLOSURE"
            subtitle="DECEMBER 2025"
            supplemental="DIRECTOR LISA SUMPTION ENDS COMMUNICATION"
            previousPage={{ href: "/lisa-sumption/public-records-request", label: "The Public Records Request" }}
            nextPage={{ href: "/governor-kotek", label: "The Governor's Silence" }}
        >

            <div className="mt-4">
                In December 2025, after months of documented misconduct, retaliatory dismissal,
                and institutional silence, I sent Director Lisa Sumption a final attempt at
                resolution. It was direct, factual, and centered on leadership accountability.
            </div>

            <div className="mt-4">
                Her response did not address the evidence. Instead, she reframed documentation as
                emotional processing and terminated the line of communication entirely.
            </div>

            <hr className="my-6 border-t border-gray-300" />

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

Samuel`}
                </pre>
            </Email>

            <hr className="my-6 border-t border-gray-300" />

            <h2 className="text-xl font-semibold">Director Sumption's Response</h2>

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

            <h2 className="text-xl font-semibold">Close of Record</h2>

            <div className="mt-4 mb-6 text-gray-600">
                After Lisa Sumption closed communication, I closed documentation. What follows is the formal termination of institutional engagement.
            </div>

            <Email
                from="Robert Samuel White"
                to="Director Lisa Sumption"
                date="December 22, 2025"
                subject="Close of Record"
            >
                <pre className="whitespace-pre-wrap font-mono text-sm">
{`Lisa,
This is not a request. It is not a plea. It is not an opening for dialogue.

This is the close of record.

You closed communication in December.
I close documentation now.

What began as local abuse by two supervisors reached your desk with comprehensive evidence.
You had the authority to interrupt the pattern.
You refused.

That refusal transformed a containable failure into permanent institutional exposure.

Not because I made it so.
Because you chose to shield abuse over accountability.

You absorbed evidence into bureaucratic deflection.
You reframed documentation as "emotional processing."
You met truth with silence.

And in doing so, you demonstrated exactly what this institution does when confronted with documented abuse:
It protects the abusers. It dismisses the evidence. It erases the target.

I mapped that system.
I made it legible.
I made it permanent.

The archive exists now — not to change your mind, but to ensure the next person knows this pattern has institutional authorization at the director level.

Your silence isn't neutrality.
It's complicity made structural.

Every day you refuse accountability, the evidence speaks louder.

This is reputational collapse in slow motion.

What you refused to name has already named you.

— Robert Samuel White
Former Oregon State Parks Volunteer
`}
                </pre>
            </Email>

            <hr className="my-6 border-t border-gray-300" />

            <h2 className="text-xl font-semibold">Why This Exchange Matters</h2>

            <div className="space-y-4">
                <div>Director Sumption's response reframed documented institutional misconduct &mdash; supported by recordings, emails, and written evidence &mdash; as emotional impact and personal perspective.</div>
                <div>This is not acknowledgment. It is <a href="/faq#epistemic" className="text-emerald-700 underline hover:text-emerald-600">epistemic violation</a>: the laundering of evidence into therapeutic framing to strip it of institutional weight.</div>
                <div>Her decision to close communication was a strategic ending at the moment when institutional accountability was required.</div>
                <div>The &quot;Close of Record&quot; letter is not a continuation of correspondence. It is the formal termination of my institutional engagement and the completion of documentation.</div>
                <div>Institutional closure does not erase the record.</div>
                <div>It becomes part of it.</div>
            </div>

        </SectionPage>
    );
}

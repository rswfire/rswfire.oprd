import type { Metadata } from "next";
import Link from "next/link";
import SectionPage from "@/components/SectionPage";
import Email from "@/components/archive/Email";

export const metadata: Metadata = {
    title: "The Covert Encounter",
    description:
        "Documented covert assessment at Honeyman State Park and Director Lisa Sumption’s non-response.",
};

export default function CovertEncounterPage() {
    return (
        <SectionPage
            title="THE COVERT ENCOUNTER"
            subtitle="MARCH 18, 2025 — ESCALATED TO THE DIRECTOR"
            supplemental="NO RESPONSE RECEIVED"
        >

            <div className="mt-4">
                Six days before my removal from <Link href="https://stateparks.oregon.gov/index.cfm?do=park.profile&parkId=95" target="_blank" className="underline text-emerald-800 hover:text-emerald-600">Honeyman State Park</Link>, an unidentified man approached me
                while I was cleaning the yurts. He was not in uniform. He carried no identification.
                He claimed he was “with the park service,” taking photos of yurts mid-clean — doors
                propped open, sanitizer running, trash cans holding doors ajar.
            </div>

            <div className="mt-4">
                Then he pressed me with direct personal questions:
            </div>

            <ul className="list-disc ml-8 mt-2 space-y-1">
                <li>“How do you like the park?”</li>
                <li>“How are you being treated here?”</li>
                <li>“Is leadership treating you well?”</li>
            </ul>

            <div className="mt-4">
                It was not a casual conversation.
                It was a probe — a manufactured assessment delivered while I was alone, without witnesses,
                during a regional event when all rangers were away.
            </div>

            <hr className="my-6 border-t border-gray-300" />

            {/* ----------------------------------------------------- */}
            {/* INITIAL LETTER TO DIRECTOR LISA SUMPTION (8/16/2025)  */}
            {/* ----------------------------------------------------- */}

            <h2 className="text-xl font-semibold">ESCALATION TO DIRECTOR LISA SUMPTION</h2>

            <div className="mt-4">
                On August 16, 2025, months after my removal and only after exhausting escalation with Allison Watson, I wrote directly to Director Lisa Sumption. <strong>She did not respond to this letter</strong>.
            </div>

            <Email
                from="Robert Samuel White <rsw@rswfire.com>"
                to="Director Lisa Sumption"
                date="August 16, 2025"
                subject="The Setup You Now Own"
            >
                <pre className="whitespace-pre-wrap">
{`Lisa,

Four days before I was removed from Honeyman, a man approached me while I was cleaning the yurts.

He was not in uniform. He offered no name. He carried no identification.

He said he was with the park service and that he was taking photos of the yurts — while they were still dirty, mid-clean, with all doors propped open.

Then, without transition, he pressed me — hard and fast — with direct personal questions:
How do you like the park?
How are you being treated here?
Is the leadership treating you well?

This was not casual.
It was not polite.
It was a calculated psychological pressure test, delivered by a stranger while I was isolated and working. And while all the rangers were away for a regional event.

I recognized it in real time. It was disorienting — because it was meant to be. It didn’t read like routine oversight. It read like a probe. It read like aggression. When I didn’t answer, he asked again — reframed the question, stepped in closer. It was intimate. And it was forced.

I asked Kati about it because I wanted it documented (see attached thread). I understood what this was. She had an immediate justification: he was “from I.T.” taking photos for site documentation. She praised how I “handled it.”

That wasn’t a reassurance. That was a confirmation that I’d been observed and evaluated — and that the probe had failed to elicit the intended response.

Let’s name what this was:

There is no public record of these photos ever being used.
There is no traceable operational need for unannounced photo capture during an active clean.
There was no follow-up, no supervisor debrief, no procedural accountability.

Just Kati — tying off the thread as quickly as possible.

It was a setup. It failed.
And within DAYS, I was removed from my role — using a homeless man’s journal as pretext.
The irony is grotesque.

So I’ll ask directly:

Do those photos exist?
Were they ever published?
Was this encounter logged anywhere in your internal systems?

Because if not, you now have something far worse than negligence.
You have a covert institutional tactic used against a volunteer — followed by a pattern of containment and silence.

Something I endured for two months. I just wanted to get through my time there so I could move onto the other parks in my trajectory. Kati knew that. Ryan knew that. And that's why they were trying so hard to frame me as a problem. It's why they removed me when I only had ONE SHIFT LEFT.

This is what Kati did to someone who was doing his job.
Unpaid. Alone. Professional.

And this is what Allison did in response: nothing.
No inquiry. No accountability. Just silence.

That silence is now part of the record.
And so is this message.

You’ve left the same people in charge at your flagship campground — even after direct, documented, and now expanded evidence of unethical conduct.

What happened at Honeyman is not behind you.
It is with you now.
And every day you choose not to act becomes part of the breach.

I know you don't want to hear from me. I know the institutional reflex to frame this as obsession. This is not that. I need you to be an ethical leader.

Find a way.

—Sam
https://rswfire.com/honeyman

----------------------------------------------------------------------
From: Robert Samuel White <rsw@rswfire.com>
Sent: Monday, May 26, 2025 7:08:05 PM
To: WATSON Allison * OPRD <allison.watson@oprd.oregon.gov>
Subject: For the Record - March 20 Field Encounter

Allison,

This email chain may appear mundane on the surface.
It is not.

What it documents is the outer shell of an orchestrated event — a baited encounter that I now know, without doubt, was sent by Kati.

A man appeared while I was cleaning. No identification. No uniform.
He claimed to be taking photos of the yurts — which were still dirty, mid-clean, doors propped open. No one does that. That was the first tell.

He confronted me immediately with invasive, personal questions — not park-related, not procedural.
When I didn’t engage, he turned and left quickly.

Later, Kati confirmed he was “with IT” and praised how I “handled it.”
That wasn’t a compliment. It was a data point. A probe that failed.

This wasn’t routine.
It was covert assessment, masked as operations.

And I see now what it was meant to be:
A pretext. A setup.
An attempt to provoke a misstep that could justify my removal.
It didn’t work. I didn’t take the bait.

This email chain remains — a quiet record of that moment.
You may want to review it with clearer eyes.

Because what happened at that park is larger than policy.
It speaks to the architecture of how authenticity is policed, how nonconformity is treated as threat, and how systems recruit silence to cover their own fractures.

I am not asking for response.
I am not seeking closure.
But I will not let distortion have the last word.

This message is not about me.
It is about what your park service has become.

—Sam
rswfire.com

----------------------------------------------------------------------
From: Robert Samuel White <rsw@rswfire.com>
Sent: Thursday, March 20, 2025 3:48:24 PM
To: Baker Kati * OPRD <Kati.BAKER@oprd.oregon.gov>
Subject: Re: Question About Unidentified Visitor

Thanks, Kati. Hope it's not a problem he took the photos before I'd cleaned them. All three of my sites were in the little alcove so I had all three open at the same time while I moved around all three doing my different tasks. Like, I had the sanitizer going in all three while I blowed the sites, etc. The trash cans were propping all the doors open. I'd want the photos to look nice of course!

----------------------------------------------------------------------
From: Baker Kati * OPRD <Kati.BAKER@oprd.oregon.gov>
Sent: Thursday, March 20, 2025 3:43:44 PM
To: Robert Samuel White <rsw@rswfire.com>
Subject: RE: Question About Unidentified Visitor

Sam,

Just wanted to let you know I did reach out to the I.T. employee who is spearheading the site photo updates and it was indeed them who was out getting photos of yurts in A loop 😊

Have a great afternoon!

----------------------------------------------------------------------
From: Robert Samuel White <rsw@rswfire.com>
Sent: Tuesday, March 18, 2025 5:35 PM
To: Baker Kati * OPRD <Kati.BAKER@oprd.oregon.gov>
Subject: Re: Question About Unidentified Visitor

Thanks for confirming!

----------------------------------------------------------------------
From: Baker Kati * OPRD <Kati.BAKER@oprd.oregon.gov>
Sent: Tuesday, March 18, 2025 5:31:49 PM
To: Robert Samuel White <rsw@rswfire.com>
Subject: Re: Question About Unidentified Visitor

Hi Sam,

We have had some staff from I.T. working on getting updated photos of sites all over the state. I think you handled it wonderfully asking if they had any other questions. It’s not unusual for folks to want to take a look inside especially if they haven’t seen a yurt before. I can follow up with folks in I.T. to see if anyone was out today :)

-Kati

----------------------------------------------------------------------
From: Robert Samuel White <rsw@rswfire.com>
Sent: Tuesday, March 18, 2025 4:35 PM
To: Baker Kati * OPRD <kati.baker@oprd.oregon.gov>
Subject: Question About Unidentified Visitor

Hi Kati,

I wanted to check in about something from today.

While I was working, a man showed up, said he was with the park service, and started taking photos of the yurts while they were still dirty, since I was in the process of cleaning them. I engaged him briefly—asked if he had any questions—but the interaction felt a little off.

He didn’t introduce himself by name, wasn’t in uniform, and had no visible identification. He only said he was with the park service and that they “needed photos of some of them still.” Then he started asking me questions—how I like the park, how I’m being treated here. It stood out, especially with the timing, since all the rangers were away for meetings.

Was this an official visit that you're aware of? If so, no problem—just seemed a bit odd, and I wasn’t sure if I should have handled it differently. If not, I wanted to flag it in case it’s something to be aware of. Let me know if you have any insight.

Thanks,
Sam
`}
                </pre>
            </Email>


            <hr className="my-6 border-t border-gray-300" />

            {/* ----------------------------------------------------- */}
            {/* SUPPLEMENTAL EMAIL TO LISA (NO RESPONSE)              */}
            {/* ----------------------------------------------------- */}

            <h2 className="text-xl font-semibold">SUPPLEMENTAL EVIDENCE SENT — NO RESPONSE</h2>

            <Email
                from="Robert Samuel White <rsw@rswfire.com>"
                to="Director Lisa Sumption"
                cc="Allison Watson"
                date="December 7, 2025"
                subject="Re: The Setup You Now Own"
            >
                <pre className="whitespace-pre-wrap">
{`Lisa,

You never responded to my August 15th letter about the covert operative encounter.

I'm providing supplemental documentation now.

This is the video I recorded immediately after the March 18th encounter - before I understood what it actually was:
Encounter with Assertive Man Ends in Departure 
https://www.youtube.com/watch?v=EwecWXvc8DE

In it, you'll hear me describe:
  * An assertive man who appeared while I was alone.
  * Someone who kept asking questions I wouldn't answer.
  * My interpretation at the time: a failed romantic encounter.
  
I thought he was interested in me. I thought he struck out because he played power games instead of being authentic.

Six days later, I was removed from my position.

The video proves several things:
  1. I documented the encounter immediately - same day as my email to Kati.
  2. I had no paranoia about institutional targeting in the moment. (I wondered, but it seemed so implausible at the time.)
  3. My later recognition of this as a covert probe came from pattern analysis, not conspiracy thinking.
  4. The encounter was designed as bait - and I didn't take it.
  
The questions from August remain unanswered:
  * Do those yurt photos exist?
  * Were they ever published?
  * Was this encounter logged in your systems?

This supplemental evidence is now part of the permanent record.

The pattern is documented. The timeline is clear. The institutional tactics are visible. And they'll remain so.

I am now working on a supplemental project that will better highlight the volunteer abuse I experienced to future volunteers since you refuse to protect us.

This isn't going away, Lisa.

I have far more evidence than you realize.

Every day you choose silence, the breach deepens.

Why haven't you acted? Why do you allow these abusive tactics to remain a part of your legacy?

https://rswfire.com/honeyman

—Sam
`}
                </pre>
            </Email>

            <hr className="my-6 border-t border-gray-300" />

            {/* ----------------------------------------------------- */}
            {/* CLOSING ANALYSIS                                      */}
            {/* ----------------------------------------------------- */}

            <div className="p-6 bg-emerald-50 border-l-4 border-emerald-600 rounded-r-lg">
                <div className="text-lg font-bold mb-2">WHAT THIS ESTABLISHES</div>

                <div>
                    Director Lisa Sumption was given:
                </div>

                <ul className="list-disc ml-8 mt-2 space-y-1">
                    <li>same-day documentation of the encounter,</li>
                    <li>the full email chain with Kati,</li>
                    <li>a detailed August 16 analysis naming the tactic,</li>
                    <li>a supplemental follow-up with video evidence.</li>
                </ul>

                <div className="mt-4 font-semibold">
                    She responded to none of it.
                </div>

                <div className="mt-2">
                    Her silence is not absence.
                    It is a decision — one that now lives inside the archive as part of the
                    institutional pattern she chose to uphold.
                </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-300">
                <Link href="/lisa-sumption" className="text-emerald-700 hover:underline">
                    ← Back to The Director's Decisions
                </Link>
            </div>

        </SectionPage>
    );
}

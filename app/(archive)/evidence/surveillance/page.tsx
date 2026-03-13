// app/(archive)/evidence/surveillance/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import SectionPage from "@/components/SectionPage";
import Email from "@/components/archive/Email";
import VideoEmbed from "@/components/archive/VideoEmbed";

export const metadata: Metadata = {
    title: "Surveillance",
    description: "Documented covert assessment by unidentified unidentified man at Honeyman State Park, March 18, 2025.",
};

export default function SurveillancePage() {
    return (
        <SectionPage
            title="ASSESSMENT & SURVEILLANCE"
            subtitle="UNIDENTIFIED OPERATIVE"
            previousPage={{ href: "/evidence/coercion", label: "The Coercion Meeting" }}
            nextPage={{ href: "/evidence/dismissal", label: "Dismissal Without Process" }}
            summary="Six days before removal, an unidentified man approached me while I was cleaning yurts alone. He claimed to be with the park service, took photos of dirty yurts mid-clean, then pressed me with direct personal questions about leadership treatment."
        >

            <h2 className="text-xl font-semibold">MARCH 18, 2025</h2>

            <div className="mt-4">
                While cleaning the yurts in A Loop, an unidentified man approached me. He was not in uniform. He carried no identification. He offered no name.
            </div>

            <div className="mt-4">
                He said he was "with the park service" and was taking photos of the yurts &mdash; while they were still dirty, mid-clean, with doors propped open, trash cans holding doors ajar.
            </div>

            <div className="mt-4">
                Then, without transition, he pressed me with direct personal questions:
            </div>

            <ul className="list-disc list-outside ml-8 mt-2 space-y-1">
                <li>"How do you like the park?"</li>
                <li>"How are you being treated here?"</li>
                <li>"Is leadership treating you well?"</li>
            </ul>

            <div className="mt-4">
                When I didn't engage, he asked again &mdash; reframed the questions, stepped closer. It was intimate. It was forced.
            </div>

            <div className="mt-4">
                This occurred during a regional event when all rangers were away.
            </div>

            <div className="mt-4">
                I was alone.
            </div>

            <hr className="my-6 border-t border-gray-300" />

            <h2 className="text-xl font-semibold">IMMEDIATE DOCUMENTATION</h2>

            <div className="mt-4">
                I documented the encounter with Kati Baker the same day. I wanted it on record.
            </div>

            <Email
                from="Robert Samuel White"
                to="Kati Baker, Park Supervisor"
                date="March 18, 2025 4:35 PM"
                subject="Question About Unidentified Visitor"
            >
<pre className="whitespace-pre-wrap">{`Hi Kati,

I wanted to check in about something from today.

While I was working, a man showed up, said he was with the park service, and started taking photos of the yurts while they were still dirty, since I was in the process of cleaning them. I engaged him briefly—asked if he had any questions—but the interaction felt a little off.

He didn't introduce himself by name, wasn't in uniform, and had no visible identification. He only said he was with the park service and that they "needed photos of some of them still." Then he started asking me questions—how I like the park, how I'm being treated here. It stood out, especially with the timing, since all the rangers were away for meetings.

Was this an official visit that you're aware of? If so, no problem—just seemed a bit odd, and I wasn't sure if I should have handled it differently. If not, I wanted to flag it in case it's something to be aware of. Let me know if you have any insight.

Thanks,
Sam
`}</pre>
            </Email>

            <div className="mt-4">
                Kati was at the regional event. She had told me earlier that week she would be. She responded within the hour with a fully-formed justification:
            </div>

            <Email
                from="Kati Baker, Park Supervisor"
                to="Robert Samuel White"
                date="March 18, 2025 5:31 PM"
                subject="Re: Question About Unidentified Visitor"
            >
<pre className="whitespace-pre-wrap">{`Hi Sam,

We have had some staff from I.T. working on getting updated photos of sites all over the state. I think you handled it wonderfully asking if they had any other questions. It's not unusual for folks to want to take a look inside especially if they haven't seen a yurt before. I can follow up with folks in I.T. to see if anyone was out today :)

-Kati
`}</pre>
            </Email>

            <div className="mt-4">
                I replied the same day:
            </div>

            <Email
                from="Robert Samuel White"
                to="Kati Baker, Park Supervisor"
                date="March 18, 2025 5:35 PM"
                subject="Re: Question About Unidentified Visitor"
            >
<pre className="whitespace-pre-wrap">{`Thanks for confirming!
`}</pre>
            </Email>

            <div className="mt-4">
                Two days later, she elaborated — unprompted:
            </div>

            <Email
                from="Kati Baker, Park Supervisor"
                to="Robert Samuel White"
                date="March 20, 2025 3:43 PM"
                subject="RE: Question About Unidentified Visitor"
            >
<pre className="whitespace-pre-wrap">{`Sam,

Just wanted to let you know I did reach out to the I.T. employee who is spearheading the site photo updates and it was indeed them who was out getting photos of yurts in A loop 😊

Have a great afternoon!
`}</pre>
            </Email>

            <div className="mt-4">
                I replied five minutes later. The cover story had not landed. I noted the detail that made it implausible:
            </div>

            <Email
                from="Robert Samuel White"
                to="Kati Baker, Park Supervisor"
                date="March 20, 2025 3:48 PM"
                subject="Re: Question About Unidentified Visitor"
            >
<pre className="whitespace-pre-wrap">{`Thanks, Kati. Hope it's not a problem he took the photos before I'd cleaned them. All three of my sites were in the little alcove so I had all three open at the same time while I moved around all three doing my different tasks. Like, I had the sanitizer going in all three while I blowed the sites, etc. The trash cans were propping all the doors open. I'd want the photos to look nice of course!
`}</pre>
            </Email>

            <div className="mt-4">
                Six days after the encounter, I was dismissed.
            </div>

            <hr className="my-6 border-t border-gray-300" />

            <h2 className="text-xl font-semibold">VIDEO DOCUMENTATION</h2>

            <div className="mt-4">
                I recorded a video immediately after the encounter. The interaction had been so intimate, so forced, so unlike anything routine, that I held the possibility of what it actually was — but it felt too extreme to believe. A state park sending someone after a volunteer? I filed it. I documented it. And I told myself it was more likely he was flirting.
            </div>

            <div className="mt-4">
                In the video, I describe:
            </div>

            <ul className="list-disc list-outside ml-8 mt-2 space-y-1">
                <li>An assertive man who appeared while I was alone.</li>
                <li>Someone who kept asking questions I wouldn't answer.</li>
                <li>My interpretation at the time: a failed romantic encounter.</li>
            </ul>

            <div className="mt-4">
                Six days later, I was removed from my position.
            </div>

            <hr className="my-6 border-t border-gray-300" />

            <VideoEmbed
                s3Url="https://hel1.your-objectstorage.com/autonomyrealms/01KE634HWNGQBK7D0CVDFYEFK0/transmissions/01JPP5GY2GPEZ5F08Q2PF6ZAHG/video.mp4"
                signalUrl="https://rswfire.com/signal/01JPP5GY2GPEZ5F08Q2PF6ZAHG"
            />

            <hr className="my-6 border-t border-gray-300" />

            <h2 className="text-xl font-semibold">NAMED TO ALLISON — MAY 26, 2025</h2>

            <div className="mt-4">
                Two months after the expulsion, I named this encounter directly to Allison Watson. I told her what it was. I told her what the email thread documented.
            </div>

            <div className="mt-4">
                She never responded.
            </div>

            <Email
                from="Robert Samuel White"
                to="Allison Watson, Oregon State Parks"
                date="May 26, 2025 7:08 PM"
                subject="For the Record - March 20 Field Encounter"
            >
<pre className="whitespace-pre-wrap">{`Allison,

This email chain may appear mundane on the surface.
It is not.

What it documents is the outer shell of an orchestrated event — a baited encounter that I now know, without doubt, was sent by Kati.

A man appeared while I was cleaning. No identification. No uniform.
He claimed to be taking photos of the yurts — which were still dirty, mid-clean, doors propped open. No one does that. That was the first tell.

He confronted me immediately with invasive, personal questions — not park-related, not procedural.
When I didn't engage, he turned and left quickly.

Later, Kati confirmed he was "with IT" and praised how I "handled it."
That wasn't a compliment. It was a data point. A probe that failed.

This wasn't routine.
It was covert assessment, masked as operations.

And I see now what it was meant to be:
A pretext. A setup.
An attempt to provoke a misstep that could justify my removal.
It didn't work. I didn't take the bait.

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
`}</pre>
            </Email>

            <hr className="my-6 border-t border-gray-300" />

            <h2 className="text-xl font-semibold">ESCALATED TO LISA — AUGUST 15, 2025</h2>

            <div className="mt-4">
                I escalated this incident to Director Lisa Sumption with comprehensive documentation. I asked three direct questions. She never responded.
            </div>

            <Email
                from="Robert Samuel White"
                to="Lisa Sumption, Director, Oregon State Parks"
                date="August 15, 2025 4:12 PM"
                subject="The Setup You Now Own"
            >
<pre className="whitespace-pre-wrap">{`Lisa,

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

I recognized it in real time. It was disorienting — because it was meant to be. It didn't read like routine oversight. It read like a probe. It read like aggression. When I didn't answer, he asked again — reframed the question, stepped in closer. It was intimate. And it was forced.

I asked Kati about it because I wanted it documented (see attached thread). I understood what this was. She had an immediate justification: he was "from I.T." taking photos for site documentation. She praised how I "handled it."

That wasn't a reassurance. That was a confirmation that I'd been observed and evaluated — and that the probe had failed to elicit the intended response.

Let's name what this was:

There is no public record of these photos ever being used.

There is no traceable operational need for unannounced photo capture during an active clean.

There was no follow-up, no supervisor debrief, no procedural accountability.

Just Kati — tying off the thread as quickly as possible.

It was a setup. It failed.
And within DAYS, I was removed from my role — using a homeless man's journal as pretext.
The irony is grotesque.

So I'll ask directly:

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

You've left the same people in charge at your flagship campground — even after direct, documented, and now expanded evidence of unethical conduct.

What happened at Honeyman is not behind you.
It is with you now.
And every day you choose not to act becomes part of the breach.

I know you don't want to hear from me. I know the institutional reflex to frame this as obsession. This is not that. I need you to be an ethical leader.

Find a way.

—Sam
https://rswfire.com/honeyman
`}</pre>
            </Email>

            <hr className="my-6 border-t border-gray-300" />

            <h2 className="text-xl font-semibold">THE SECOND ENCOUNTER</h2>

            <div className="mt-4">
                Nearly a year after the original encounter, I saw him again. On a Forest Service trail that was part of my regular route. He had been visiting it regularly — like it was part of his normal routine.
            </div>

            <div className="mt-4">
                He was surprised. He did not know I worked there. He did not know the trail was part of my corridor.
            </div>

            <div className="mt-4">
                He has not been back since. He recognized what my uniform and Forest Service truck meant. He stopped coming immediately.
            </div>

            <div className="mt-4">
                His presence there collapsed Kati's cover story entirely. He is local. He is not IT. He drives a state vehicle with no identifying agency markings. He is precisely what I said he was from day one.
            </div>

            <div className="mt-4">
                I did not document the second encounter immediately. I sat with it. I thought through what it meant and what naming it would require. When I was ready, I put it in the record.
            </div>

            <Email
                from="Robert Samuel White"
                to="Kati Baker, Ryan Warren, Allison Watson, Logan Bliss"
                cc="JR Collier, Stefanie Coons, OPRC Public Comment, Tina for Oregon, Lisa Sumption"
                date="March 2, 2026 10:18 AM"
                subject="Fw: The Setup You Now Own"
            >
<pre className="whitespace-pre-wrap">{`I encountered him again.

On a Forest Service trail he had been visiting regularly like it was part of his normal routine.

He hasn't been back since. He knows I recognized him. I now know he's local. I now know he drives a state truck with no identifying agency on it.

This required authorization above the park level. Someone above Kati signed off on this. Which means this isn't one rogue supervisor protecting her position. This is institutional corruption. Coordinated. Deliberate. Directed at a volunteer for doing nothing more than documenting how he was treated.

That's what you most want covered up. That you sent a man after me, alone. And I documented it.

Do you see how disproportionate this was yet? Do you see what it looks like from the outside?

I assume he's told you about the encounter. If he hasn't, you might want to ask him about it.
`}</pre>
            </Email>

            <div className="mt-4">
                Later that day, I clarified that the second encounter was not premeditated on his part — and named precisely what it proved:
            </div>

            <Email
                from="Robert Samuel White"
                to="Kati Baker, Ryan Warren, Allison Watson, Logan Bliss"
                cc="JR Collier, Stefanie Coons, OPRC Public Comment, Tina for Oregon, Lisa Sumption"
                date="March 2, 2026 12:29 PM"
                subject="Re: The Setup You Now Own"
            >
<pre className="whitespace-pre-wrap">{`I want to ensure there is no ambiguity here, so I want to clarify that I do not believe the second encounter was premeditated.

He was clearly surprised to see me there. He did not know he jogged a forest trail that was part of my route. He stopped coming immediately after because I was in uniform, in a forest service truck of my own, and he recognized what that meant.

The point is this - I collapsed Kati's cover story simply by encountering him there.

He is local. He is not IT. He is not in a vehicle that explains his presence a year ago. He is precisely what I have said he was from day one.

A year ago you used that man to intimidate me while everyone was away at a regional event. I documented it. You still have not explained it.

Because you can't. Because it's precisely what it looks like - profound misuse of state resources to intimidate someone with no protection from you as free labor. That abuse is so extreme that you have been completely silent about it from the very beginning.

But now I know who he is.
`}</pre>
            </Email>

            <hr className="my-6 border-t border-gray-300" />

            <h2 className="text-xl font-semibold">FINAL CORRESPONDENCE — MARCH 11, 2026</h2>

            <div className="mt-4">
                On March 11, 2026 — Day 352 — the unidentified man was addressed directly in the final message of this correspondence.
            </div>

            <Email
                from="Robert Samuel White"
                to="Kati Baker, Ryan Warren, Allison Watson, Logan Bliss"
                cc="JR Collier, Stefanie Coons, OPRC Public Comment, Tina for Oregon, Lisa Sumption"
                date="March 11, 2026"
                subject="Re: The Setup You Now Own"
            >
<pre className="whitespace-pre-wrap">{`Your man lost something sacred by participating in what you asked of him. He lost access to something he loved.

Because just like Ryan, just like Allison, just like Lisa, just like JR, just like Stefanie, they walked into something they didn't understand.

Because they took one lying supervisor's word over actual evidence that proved it was a lie.

I'm walking that trail right now.

I feel bad for him.

Do you?

Do any of you?

You never understood what you were dealing with.

Because none of you ever looked at me as a human being.

You saw an economic unit to extract from. A volunteer with no power. Someone you could bully and intimidate into silence, into precarity, into erasure.

You could not have been more wrong.

And Lisa, what I built from $7 is proof.

You tried to abuse a Systems Architect.

Who told you he maps edges and systems.

The door is now closed for all of you.

But tell your man he is welcome on our trails. I would never want him to live without them.

Robert Samuel White
U. S. Forest Service Caretaker
Oregon Dunes National Recreation Area
Siltcoos Corridor
Founder of Autonomy Realms
Owner of eNetwizard, Inc. Since 1998
Former Oregon State Parks Volunteer
Steward of oprdvolunteerabuse.org
`}</pre>
            </Email>

            <hr className="my-6 border-t border-gray-300" />

            <h2 className="text-xl font-semibold">WHAT THIS PROVES</h2>

            <div className="mt-4 space-y-4">
                <div>
                    <strong>I documented the encounter immediately</strong> &mdash; same day email to Kati, same day video documentation.
                </div>
                <div>
                    <strong>I held the possibility of what it was in real time</strong> &mdash; and documented it anyway. It felt too extreme to believe a state park would do this to a volunteer. I filed it. I told myself it was more likely he was flirting. The video shows both interpretations were present from the beginning.
                </div>
                <div>
                    <strong>My recognition of this as surveillance was not constructed after the fact</strong> &mdash; it was felt immediately, documented the same day, and confirmed by a second encounter nearly a year later.
                </div>
                <div>
                    <strong>The encounter was designed as bait</strong> &mdash; personal questions about leadership treatment, delivered while I was isolated, during a regional event when all rangers were away.
                </div>
                <div>
                    <strong>I didn't take the bait</strong> &mdash; I documented professionally, didn't engage the questions, maintained boundaries.
                </div>
                <div>
                    <strong>The cover story collapsed on its own</strong> &mdash; not through argument, but through a second encounter nearly a year later that confirmed he is local, not IT, and drives an unmarked state vehicle.
                </div>
                <div>
                    <strong>This required authorization above the park level</strong> &mdash; an unmarked state vehicle means someone above Kati approved this. The silence from every level of the institution confirms they know it.
                </div>
            </div>

        </SectionPage>
    );
}

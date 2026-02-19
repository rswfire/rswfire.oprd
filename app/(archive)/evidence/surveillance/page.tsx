// app/(archive)/evidence/surveillance/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import SectionPage from "@/components/SectionPage";
import Email from "@/components/archive/Email";
import VideoEmbed from "@/components/archive/VideoEmbed";

export const metadata: Metadata = {
    title: "Surveillance",
    description: "Documented covert assessment by unidentified operative at Honeyman State Park, March 18, 2025.",
};

export default function SurveillancePage() {
    return (
        <SectionPage
            title="SURVEILLANCE"
            subtitle="UNIDENTIFIED OPERATIVE"
            previousPage={{ href: "/evidence/coercion", label: "Coercion" }}
            nextPage={{ href: "/evidence/dismissal", label: "Dismissal" }}
            summary="Six days before removal, an unidentified man approached me while I was cleaning yurts alone. He claimed to be with the park service, took photos of dirty yurts mid-clean, then pressed me with direct personal questions about leadership treatment."
        >

            <h2 className="text-xl font-semibold">MARCH 18, 2025</h2>

            <div className="mt-4">
                While cleaning the yurts in A Loop, an unidentified man approached me. He was not in uniform. He carried no identification. He offered no name.
            </div>

            <div className="mt-4">
                He said he was "with the park service" and was taking photos of the yurts &mdash; while they were still dirty, mid-clean, with doors propped open, sanitizer running, trash cans holding doors ajar.
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

While I was working, a man showed up, said he was with the park service, and started taking photos of the yurts while they were still dirty, since I was in the process of cleaning them. I engaged him briefly&mdash;asked if he had any questions&mdash;but the interaction felt a little off.

He didn't introduce himself by name, wasn't in uniform, and had no visible identification. He only said he was with the park service and that they "needed photos of some of them still." Then he started asking me questions&mdash;how I like the park, how I'm being treated here. It stood out, especially with the timing, since all the rangers were away for meetings.

Was this an official visit that you're aware of? If so, no problem&mdash;just seemed a bit odd, and I wasn't sure if I should have handled it differently. If not, I wanted to flag it in case it's something to be aware of. Let me know if you have any insight.

Thanks,
Sam
`}</pre>
            </Email>

            <div className="mt-4">
                Kati responded within two hours with immediate justification:
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
                Two days later, she confirmed:
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

            <hr className="my-6 border-t border-gray-300" />

            <h2 className="text-xl font-semibold">VIDEO DOCUMENTATION</h2>

            <div className="mt-4">
                I recorded a video immediately after the encounter &mdash; before I understood what it actually was.
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
                I thought he was interested in me. I thought he struck out because he played power games instead of being authentic.
            </div>

            <div className="mt-4">
                Six days later, I was removed from my position.
            </div>

            <hr className="my-6 border-t border-gray-300" />

            <VideoEmbed
                s3Url="https://hel1.your-objectstorage.com/autonomyrealms/01KE634HWNGQBK7D0CVDFYEFK0/transmissions/01JPP5GY2GPEZ5F08Q2PF6ZAHG/video.mp4"
                signalUrl="https://rswfire.com/signal/01JPP5GY2GPEZ5F08Q2PF6ZAHG"
            />

            <hr className="my-6 border-t border-gray-300" />

            <h2 className="text-xl font-semibold">WHAT THIS PROVES</h2>

            <div className="mt-4 space-y-4">
                <div>
                    <strong>I documented the encounter immediately</strong> &mdash; same day email to Kati, same day video documentation.
                </div>
                <div>
                    <strong>I had no paranoia about institutional targeting in the moment</strong> &mdash; the video shows I interpreted it as a failed romantic encounter, not covert assessment.
                </div>
                <div>
                    <strong>My later recognition of this as surveillance came from pattern analysis</strong> &mdash; not conspiracy thinking, but documented institutional behavior.
                </div>
                <div>
                    <strong>The encounter was designed as bait</strong> &mdash; personal questions about leadership treatment, delivered while I was isolated, during regional event when rangers were away.
                </div>
                <div>
                    <strong>I didn't take the bait</strong> &mdash; I documented professionally, didn't engage the questions, maintained boundaries.
                </div>
            </div>

            <hr className="my-6 border-t border-gray-300" />

            <h2 className="text-xl font-semibold">THE UNANSWERED QUESTIONS</h2>

            <div className="mt-4">
                On August 16, 2025, I escalated this incident to <Link href="/lisa-sumption" className="text-emerald-700 underline hover:text-emerald-600">Director Lisa Sumption</Link> with comprehensive documentation.
            </div>

            <div className="mt-4">
                I asked:
            </div>

            <ul className="list-disc list-outside ml-8 mt-2 space-y-1">
                <li>Do those yurt photos exist?</li>
                <li>Were they ever published?</li>
                <li>Was this encounter logged in your internal systems?</li>
            </ul>

            <div className="mt-4">
                She never responded.
            </div>

            <div className="mt-4">
                On December 7, 2025, I sent supplemental documentation including the video evidence.
            </div>

            <div className="mt-4">
                She never responded.
            </div>

            <hr className="my-6 border-t border-gray-300" />

            <div className="mt-6 p-6 bg-emerald-50 border-l-4 border-emerald-600 rounded-r-lg">
                <div className="font-semibold text-lg mb-3">
                    TIMELINE
                </div>
                <div className="space-y-2 text-sm">
                    <div><strong>March 5, 2025:</strong> <Link href="/evidence/coercion" className="text-emerald-700 underline hover:text-emerald-600">Coercive meeting</Link> with Ryan Warren and Kati Baker.</div>
                    <div><strong>March 18, 2025:</strong> Unidentified operative interrogates me while alone.</div>
                    <div><strong>March 24, 2025:</strong> <Link href="/evidence/dismissal" className="text-emerald-700 underline hover:text-emerald-600">Dismissed</Link> six days before scheduled completion.</div>
                    <div><strong>August 16, 2025:</strong> Escalated to Director Lisa Sumption &mdash; no response.</div>
                    <div><strong>December 7, 2025:</strong> Supplemental evidence sent &mdash; no response.</div>
                </div>
            </div>

            <div className="mt-6">
                This was not routine oversight. This was institutional surveillance disguised as operations.
            </div>

            <div className="mt-4">
                And when I documented it, the institution responded with dismissal.
            </div>

        </SectionPage>
    );
}

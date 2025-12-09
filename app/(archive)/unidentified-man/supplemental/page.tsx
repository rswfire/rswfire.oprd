// app/(archive)/unidentified-man/supplemental/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import SectionPage from "@/components/SectionPage";
import VideoEmbed from "@/components/archive/VideoEmbed";
import Email from "@/components/archive/Email";

export const metadata: Metadata = {
    title: "Unidentified Man: Video Documentation",
    description: "Real-time video recorded immediately after the encounter, before I understood what it was.",
};

export default function UnidentifiedManVideoPage() {
    return (
        <SectionPage
            title="VIDEO DOCUMENTATION"
            subtitle="MARCH 18, 2025 — RECORDED IMMEDIATELY AFTER THE ENCOUNTER"
        >

            <div className="mt-4">
                I recorded this video the same day as the encounter with the unidentified man. At the time,
                I thought he might have been flirting with me and failed. I didn't yet understand it was
                institutional surveillance.
            </div>

            <div className="mt-4">
                This footage captures my state of mind immediately after the interaction—calm, analytical,
                unbothered. I wasn't destabilized. I wasn't rattled. I recognized the power dynamics in
                real-time, chose not to engage, and moved on with my day.
            </div>

            <div className="mt-4">
                What this video proves is that the encounter didn't fragment me. It didn't shake my
                composure. It didn't create the institutional crisis they were hoping for.
            </div>

            <div className="mt-4">
                <strong>The probe failed. And I documented it before I even understood what it was.</strong>
            </div>

            <div className="mt-8">
                <VideoEmbed
                    youtubeId="EwecWXvc8DE"
                    title="March 18, 2025 - Immediate aftermath of unidentified man encounter"
                />
            </div>

            <h2 className="mt-8 text-xl font-semibold">What This Video Captures</h2>

            <div className="mt-4">
                <strong>Real-time recognition of interrogation tactics:</strong>
            </div>
            <div className="ml-4">
                "He kept asking me questions I wasn't answering them... he would just ask it a different
                way not even giving me time to formulate an answer before he's asking it another way
                because he's just trying to get an answer out of me and that's not fucking happening."
            </div>

            <div className="mt-4">
                <strong>Immediate awareness of power dynamics:</strong>
            </div>
            <div className="ml-4">
                "He was trying to flex like he was something special... he was in the IT industry and I'm
                just a little volunteer at a park cleaning the yurts... I could run circles around this
                guy. I've been programming since I was in the sixth grade."
            </div>

            <div className="mt-4">
                <strong>The encounter's intimate nature:</strong>
            </div>
            <div className="ml-4">
                "This man was cute and tall and sexy... there could be a connection if they were just real
                with me... but they're always posturing."
            </div>

            <div className="mt-4">
                <strong>His frustration when I didn't engage:</strong>
            </div>
            <div className="ml-4">
                "This man blew up and he left."
            </div>

            <div className="mt-4">
                <strong>My complete composure afterward:</strong>
            </div>
            <div className="ml-4">
                The rest of the video is me casually discussing my Jeep's transmission issues, plans for
                the next park, ATV trails, and whether I should quit vaping. No distress. No destabilization.
                Just processing the day.
            </div>

            <h2 className="mt-8 text-xl font-semibold">Why This Matters</h2>

            <div className="mt-4">
                This wasn't "IT documentation." IT staff don't approach volunteers alone while rangers are
                away, ask intimate personal questions about treatment and satisfaction, then leave abruptly
                when questioned.
            </div>

            <div className="mt-4">
                This was a probe designed to elicit complaints, create admissible statements, or provoke a
                reaction that could justify removal. The fact that I interpreted it as a failed romantic
                encounter shows how inappropriate and personal the interaction was.
            </div>

            <div className="mt-4">
                And the fact that I remained completely unbothered afterward shows exactly why they had to
                manufacture a pretext for my dismissal six days later.
            </div>

            <div className="mt-4">
                <strong>I didn't fragment. I didn't panic. I didn't break.</strong>
            </div>

            <div className="mt-4">
                I documented the encounter with Kati immediately. I recorded my thoughts the same day. And
                I continued doing my job professionally until they removed me using a homeless man's journal
                as justification.
            </div>

            <h2 className="mt-8 text-xl font-semibold">The Three Unanswered Questions</h2>

            <div className="mt-4">Five months later, I asked Director Lisa Sumption directly:</div>

            <ol className="list-decimal list-outside ml-8 mt-4 space-y-2">
                <li><strong>Do those photos exist?</strong></li>
                <li><strong>Were they ever published?</strong></li>
                <li><strong>Was this encounter logged anywhere in your internal systems?</strong></li>
            </ol>

            <div className="mt-4">She never answered.</div>

            <div className="mt-4">
                Because if those photos don't exist—and they don't—then this wasn't IT documentation. It
                was covert assessment masked as routine operations. And that's not just unethical.
            </div>

            <div className="mt-4">
                <strong>It's evidence of institutional tactics deployed against an unpaid volunteer who
                    refused to be managed.</strong>
            </div>

            <h2 className="mt-8 text-xl font-semibold">December 7, 2025: Final Notice to Director Sumption</h2>

            <div className="mt-4">
                Nine months after the encounter, I sent Director Lisa Sumption this video as supplemental
                evidence. I copied Allison Watson because I'm convinced she played a role in deploying the
                operative—and I wanted to apply pressure to her conscience.
            </div>

            <Email
                from="Robert Samuel White"
                to="lisa.sumption@oprd.oregon.gov"
                date="December 7, 2025"
                subject="The Setup You Now Own"
            >
                <div>Lisa,</div>

                <div className="mt-4">
                    You never responded to my August 15th letter about the covert operative encounter.
                </div>

                <div className="mt-4">I'm providing supplemental documentation now.</div>

                <div className="mt-4">
                    This is the video I recorded immediately after the March 18th encounter - before I
                    understood what it actually was:
                </div>

                <div className="mt-4">
                    <a
                        href="https://youtu.be/EwecWXvc8DE"
                        className="text-emerald-700 underline"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Encounter with Assertive Man Ends in Departure
                    </a>
                </div>

                <div className="mt-4">In it, you'll hear me describe:</div>

                <ul className="list-disc list-outside ml-8 mt-2">
                    <li>An assertive man who appeared while I was alone.</li>
                    <li>Someone who kept asking questions I wouldn't answer.</li>
                    <li>My interpretation at the time: a failed romantic encounter.</li>
                </ul>

                <div className="mt-4">
                    I thought he was interested in me. I thought he struck out because he played power games
                    instead of being authentic.
                </div>

                <div className="mt-4">Six days later, I was removed from my position.</div>

                <div className="mt-4">The video proves several things:</div>

                <ul className="list-disc list-outside ml-8 mt-2">
                    <li>I documented the encounter immediately - same day as my email to Kati.</li>
                    <li>
                        I had no paranoia about institutional targeting in the moment. (I wondered, but it
                        seemed so implausible at the time.)
                    </li>
                    <li>
                        My later recognition of this as a covert probe came from pattern analysis, not
                        conspiracy thinking.
                    </li>
                    <li>The encounter was designed as bait - and I didn't take it.</li>
                </ul>

                <div className="mt-4">The questions from August remain unanswered:</div>

                <ol className="list-decimal list-outside ml-8 mt-2">
                    <li>Do those yurt photos exist?</li>
                    <li>Were they ever published?</li>
                    <li>Was this encounter logged in your systems?</li>
                </ol>

                <div className="mt-4">This supplemental evidence is now part of the permanent record.</div>

                <div className="mt-4">
                    The pattern is documented. The timeline is clear. The institutional tactics are visible.
                    And they'll remain so.
                </div>

                <div className="mt-4">
                    I am now working on a supplemental project that will better highlight the volunteer abuse
                    I experienced to future volunteers since you refuse to protect us.
                </div>

                <div className="mt-4">This isn't going away, Lisa.</div>

                <div className="mt-4">I have far more evidence than you realize.</div>

                <div className="mt-4">Every day you choose silence, the breach deepens.</div>

                <div className="mt-4">
                    Why haven't you acted? Why do you allow these abusive tactics to remain a part of your
                    legacy?
                </div>

                <div className="mt-4">
                    <a
                        href="https://rswfire.com/honeyman"
                        className="text-emerald-700 underline"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        https://rswfire.com/honeyman
                    </a>
                </div>

                <div className="mt-4">—Sam</div>
            </Email>

            <div className="mt-4">
                <strong>CC: Allison Watson</strong> (Engagement Programs Manager - the one who formalized
                my retaliation in writing)
            </div>

            <div className="mt-8 p-4 bg-gray-50 border-l-4 border-emerald-600 italic text-sm">
                <strong>Documentation Note:</strong> This video exists as raw, unedited testimony from the
                moment the encounter occurred. My interpretation evolved as I understood the institutional
                context, but my response remained consistent: I recognized the manipulation, refused to
                engage, and held my shape.
            </div>

            <div className="mt-8 pt-6 border-t border-gray-300">
                <Link href="/unidentified-man" className="text-emerald-700 hover:underline">
                    ← Back to The Unidentified Man
                </Link>
            </div>

        </SectionPage>
    );
}
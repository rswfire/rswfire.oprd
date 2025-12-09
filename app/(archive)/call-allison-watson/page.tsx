// app/(archive)/call-allison-watson/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import SectionPage from "@/components/SectionPage";
import VideoEmbed from "@/components/archive/VideoEmbed";

export const metadata: Metadata = {
    title: "Call with Allison Watson",
    description: "March 25, 2025 - Institutional containment protocol disguised as empathy. Recorded in full.",
};

export default function CallAllisonWatsonPage() {
    return (
        <SectionPage
            title="CALL WITH ALLISON WATSON"
            subtitle="MARCH 25, 2025 — THE MOMENT THEY TRIED TO ERASE ME"
        >

            <div className="mt-4">This wasn't a conversation. It was a containment protocol.</div>

            <div>One day after my dismissal from Honeyman —</div>
            <div className="ml-4">and one day before my entire volunteer role was terminated —</div>
            <div>
                I received a phone call from Allison Watson, Volunteer Engagement Coordinator for Oregon
                State Parks.
            </div>
            <div>I recorded the call for documentation and clarity.</div>

            <div className="mt-4">
                This call revealed the coordinated nature of my removal. Questions and framing that echoed
                the March 5 meeting. Personal information shared in confidence with Logan now{" "}
                <Link href="/logan/supplemental" className="text-emerald-700 underline">
                    weaponized
                </Link>{" "}
                as "concerning behavior." Each response I gave was filtered through a predetermined
                narrative of problematic conduct.
            </div>

            <div className="mt-4">What you'll hear is not a leader showing up in presence.</div>
            <div>It is institutional posture cloaked in empathy — a soft tone used to reroute accountability,</div>
            <div>a performance that frames legitimacy as disruption.</div>

            <div className="mt-4">In this call, you will hear:</div>
            <ul className="list-disc list-outside ml-8">
                <li>Vague, unverifiable third-party reports used to justify my removal.</li>
                <li>Reflective statements reframed as misconduct.</li>
                <li>Complete refusal to engage the March 5 coercion meeting.</li>
                <li>A poem treated as a behavioral issue.</li>
                <li>Empathy used not to connect — but to contain.</li>
            </ul>

            <div className="mt-4">That is who Allison Watson revealed herself to be at OPRD.</div>
            <div>
                And this from someone who was the{" "}
                <strong>Belonging, Equity &amp; Engagement Coordinator</strong>
            </div>
            <div className="ml-4">— at Washington State University.</div>

            <div className="mt-4">
                The audio is clear. The subtext is clearer. This is what it sounds like when a system
            </div>
            <div>pretends to listen — while making sure nothing changes.</div>

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
                    <div>It was me centering. I knew I was stepping into distortion —</div>
                    <div className="ml-4">and I held my clarity anyway.</div>
                </div>
            </div>

        </SectionPage>
    );
}
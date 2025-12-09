// app/(archive)/final-hours/page.tsx
import type { Metadata } from "next";
import SectionPage from "@/components/SectionPage";
import VideoEmbed from "@/components/archive/VideoEmbed";

export const metadata: Metadata = {
    title: "The Final Hours",
    description: "March 24, 2025 - Dismissed without paperwork, without cause. Recorded less than an hour after removal.",
};

export default function FinalHoursPage() {
    return (
        <SectionPage
            title="THE FINAL HOURS"
            subtitle="MARCH 24, 2025 — THE MOMENT THE MASK DROPPED"
        >

            <div className="mt-4">This video was recorded less than an hour after I was dismissed</div>
            <div>from Honeyman State Park</div>
            <div>by Park Manager Ryan Warren —</div>
            <div className="ml-4">without paperwork, without cause, and without warning.</div>

            <div className="mt-4">For nearly two months, I held my role with integrity —</div>
            <div className="ml-4">despite being undermined, isolated, and misrepresented.</div>
            <div>But on this day, with just a few days left before my scheduled transfer to another park,</div>
            <div>I was suddenly expelled —</div>
            <div className="ml-4">with nowhere else to go.</div>

            <div className="mt-4">I made this video not as a performance —</div>
            <div className="ml-4">but out of necessity.</div>

            <div className="mt-4">
                Throughout my time volunteering, I had been careful not to blur the line between my work
                and my public platform.
            </div>
            <div>My audience didn't know what was happening behind the scenes —</div>
            <div className="ml-4">because I hadn't shared it.</div>
            <div>But when the rupture came, and I was left without support, I knew I had to speak —</div>
            <div className="ml-4">honestly, fully, and on record.</div>

            <div className="mt-4">This was the first time I told the whole story.</div>
            <div>In the midst of the rupture, while enduring a major shock to my system in real time.</div>
            <div>It was a call for support —</div>
            <div className="ml-4">and an act of survival.</div>

            <div className="mt-4">
                The video begins with a full account of what had unfolded over the past two months —
            </div>
            <div className="ml-4">including the original power-outage text,</div>
            <div className="ml-4">the controversy around my job application,</div>
            <div className="ml-4">the orchestrated confrontation at the picnic table,</div>
            <div className="ml-4">and the final phone call that signaled my removal.</div>

            <div className="mt-4">It ends with a direct recording of Ryan taking my keys,</div>
            <div>stating clearly that no paperwork exists for my dismissal,</div>
            <div>and confirming that I was being given 24 hours to vacate.</div>

            <div className="mt-4">This was not procedure.</div>
            <div>It was erasure disguised as professionalism.</div>
            <div>It was punishment delivered without evidence.</div>
            <div>And it was a severing designed to go undocumented —</div>
            <div className="ml-4">until I documented it.</div>

            <div className="mt-6 border border-gray-200 shadow-sm rounded-md overflow-hidden">
                <div className="bg-gray-100 px-4 py-2 font-semibold">
                    🔊 Watch the Full Video — The Final Hours at Honeyman
                </div>
                <div className="p-4">
                    <VideoEmbed
                        youtubeId="B1oe-qvjmMI"
                        title="The Final Hours at Honeyman State Park - March 24, 2025"
                    />
                </div>
                <div className="text-sm italic text-gray-500 m-0 p-2 ml-6 mb-4">
                    <div>That beeping you hear?</div>
                    <div>It's not background noise.</div>
                    <div>It's my blood pressure monitor —</div>
                    <div>warning me I was in a physiological state of distress.</div>
                    <div>And it didn't stop for hours.</div>
                </div>
            </div>

        </SectionPage>
    );
}
// app/(archive)/day-use-meeting/page.tsx
import type { Metadata } from "next";
import SectionPage from "@/components/SectionPage";
import VideoEmbed from "@/components/archive/VideoEmbed";

export const metadata: Metadata = {
    title: "The Day-Use Meeting",
    description: "March 5, 2025 - Over an hour of recorded psychological pressure at a public picnic table.",
};

export default function DayUseMeetingPage() {
    return (
        <SectionPage
            title="THE HONEYMAN DAY-USE AREA MEETING"
            subtitle="MARCH 5, 2025 — THE MOMENT THEY TRIED TO BREAK ME"
        >

            <div className="mt-4">
                I was summoned to a picnic table tucked into the public quiet of Honeyman's day-use area —
            </div>
            <div>a location chosen not for privacy,</div>
            <div className="ml-4">but for plausible deniability.</div>

            <div>Ryan and Kati sat across from me, postured in calm —</div>
            <div className="ml-4">but it was a calm shaped by performance, not principle.</div>
            <div>The tone shifted often. Ryan's voice grew sharp, his volume raised.</div>
            <div>His interruptions came fast, his control slipping each time I didn't break.</div>
            <div>Kati stepped in when Ryan faltered, using emotional framing to try to destabilize me.</div>

            <div className="mt-4">What followed was not a meeting.</div>
            <div>It was a controlled confrontation —</div>
            <div className="ml-4">over an hour of narrative distortion,</div>
            <div className="ml-4">implied threat,</div>
            <div className="ml-4">and institutional performance.</div>

            <div className="mt-4">Not to understand.</div>
            <div>Not to repair.</div>
            <div>But to coerce —</div>
            <div className="ml-4">just enough destabilization,</div>
            <div className="ml-4">just enough psychological pressure,</div>
            <div className="ml-4">to make my continued presence untenable.</div>

            <div className="mt-6 border border-gray-200 shadow-sm rounded-md overflow-hidden">
                <div className="bg-gray-100 px-4 py-2 font-semibold">
                    🔊 Full Recording — March 5 Meeting with Ryan Warren &amp; Kati Baker
                </div>
                <div className="p-4">
                    <VideoEmbed
                        youtubeId="iOuaufCH_I8"
                        title="March 5, 2025 Day-Use Meeting Recording"
                    />
                </div>
                <div className="text-sm italic text-gray-500 m-0 p-2 ml-4 mb-4">
                    <div>This recording was captured in a public setting, conducted by public employees,</div>
                    <div>involving matters of consequence to my name and trajectory.</div>
                    <div>There was no privacy notice. No warning. No reason to withhold witness.</div>
                    <div>The law can debate its admissibility. But I assert its necessity.</div>
                </div>
            </div>

            <h3 className="mt-8 text-lg font-semibold">WHY THIS WAS PRESERVED</h3>

            <div className="mt-4">Because what happened that day was not a misunderstanding.</div>
            <div>It was deliberate —</div>
            <div className="ml-4">institutional harm executed under the cover of politeness,</div>
            <div className="ml-4">procedural language used as camouflage for psychological coercion.</div>

            <div className="mt-4">This recording is not shared to punish.</div>
            <div>It is shared because erasure is what they counted on.</div>
            <div>It is shared because systems like this survive through unrecorded harm —</div>
            <div>
                through meetings with no witnesses, just enough tone control to call it "professional."
            </div>

            <div className="mt-4">
                But if you listen closely, you'll hear what they never wanted preserved:
            </div>
            <div className="ml-4">Defensiveness when confronted with truth.</div>
            <div className="ml-4">Dismissiveness when integrity is named.</div>
            <div className="ml-4">A rising voice when narrative control slips.</div>

            <div className="mt-4">This is not unique to Honeyman, or to Oregon State Parks as a whole.</div>
            <div>This is how institutional harm works:</div>
            <div className="ml-4">calmly, vaguely, behind picnic tables — until the script is interrupted.</div>

            <div className="mt-4">Now, you can hear it for yourself.</div>

        </SectionPage>
    );
}
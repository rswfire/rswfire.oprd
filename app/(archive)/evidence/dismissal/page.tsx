// app/(archive)/evidence/dismissal/page.tsx
import type { Metadata } from "next";
import SectionPage from "@/components/SectionPage";
import VideoEmbed from "@/components/archive/VideoEmbed";

export const metadata: Metadata = {
    title: "Dismissal",
    description: "March 24, 2025 - Dismissed without paperwork or cause, six days before scheduled completion.",
};

export default function DismissalPage() {
    return (
        <SectionPage
            title="DISMISSAL"
            subtitle="RYAN WARREN, PARK MANAGER"
            previousPage={{ href: "/evidence/surveillance", label: "Surveillance" }}
            nextPage={{ href: "/evidence/expulsion", label: "Expulsion" }}
            summary="Ryan Warren dismissed me by phone six days before my scheduled completion, using fabricated pretenses with no formal documentation."
        >

            <h2 className="text-xl font-semibold">MARCH 24, 2025</h2>

            <div className="mt-4">
                Ryan Warren called requesting another meeting. When I asked why, he became agitated and dismissed me over the phone.
            </div>

            <div className="mt-4">
                The stated reason: a homeless man's lost journal, claiming I had made inappropriate comments about park staff.
            </div>

            <div className="mt-4">
                One hour later, Ryan arrived at my RV to collect keys and site documents.
            </div>

            <div className="mt-4">
                I recorded the interaction.
            </div>

            <div className="mt-6 border border-gray-200 shadow-sm rounded-md overflow-hidden">
                <div className="bg-gray-100 px-4 py-2 font-semibold">
                    Full Documentation — March 24, 2025
                </div>
                <div>
                    <VideoEmbed
                        youtubeId="B1oe-qvjmMI"
                        title="Dismissal from Honeyman State Park - March 24, 2025"
                    />
                </div>
                <div className="text-sm italic text-gray-500 m-0 p-2 ml-4 mb-4">
                    <div>This video documents the full timeline of events leading to dismissal,</div>
                    <div>including the recorded interaction where Ryan admitted no formal documentation existed.</div>
                </div>
            </div>

            <hr className="my-6 border-t border-gray-300" />

            <h2 className="text-xl font-semibold">WHAT THE RECORDING SHOWS</h2>

            <ul className="list-disc list-outside ml-8 mt-4 space-y-2">
                <li>Ryan Warren collecting keys and site documents.</li>
                <li>Admission that no formal documentation existed for my removal.</li>
                <li>Confirmation of 24-hour eviction timeline.</li>
                <li>No written cause, no investigation, no due process.</li>
            </ul>

            <hr className="my-6 border-t border-gray-300" />

            <h2 className="text-xl font-semibold">THE TIMELINE</h2>

            <div className="mt-4">
                I had less than one week remaining before my scheduled completion.
            </div>

            <div className="mt-4">
                Instead of allowing me to finish my service, they removed me using a fabricated pretext and gave me 24 hours to vacate.
            </div>

        </SectionPage>
    );
}
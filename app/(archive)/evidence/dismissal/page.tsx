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

            <hr className="my-6 border-t border-gray-300" />

            <VideoEmbed
                s3Url="https://hel1.your-objectstorage.com/autonomyrealms/01KE634HWNGQBK7D0CVDFYEFK0/transmissions/01JQ51HAK8QR862VWGK0RKTFXN/video.mp4"
                signalUrl="https://rswfire.com/signal/01JQ51HAK8QR862VWGK0RKTFXN"
            />

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

// app/(archive)/evidence/coercion/page.tsx
import type { Metadata } from "next";
import SectionPage from "@/components/SectionPage";
import VideoEmbed from "@/components/archive/VideoEmbed";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Coercion",
    description: "March 5, 2025 - Over an hour of recorded psychological pressure by Ryan Warren and Kati Baker.",
};

export default function CoercionPage() {
    return (
        <SectionPage
            title="COERCION"
            subtitle="RYAN WARREN, PARK MANAGER &amp; KATI BAKER, PARK SUPERVISOR"
            previousPage={{ href: "/evidence/betrayal", label: "Betrayal" }}
            nextPage={{ href: "/evidence/surveillance", label: "Surveillance" }}
        >
            <div className="mt-4 p-4 bg-gray-50 border-l-4 border-emerald-600 text-sm">
                <div className="font-semibold">
                    Ryan Warren and Kati Baker summoned me to a public picnic table for over an hour of psychological pressure designed to force my resignation.
                </div>
            </div>

            <hr className="my-6 border-t border-gray-300" />

            <h2 className="text-xl font-semibold">MARCH 5, 2025</h2>

            <div className="mt-4">
                Ryan Warren and Kati Baker called me to a meeting at a public picnic table in <Link href="https://stateparks.oregon.gov/index.cfm?do=park.profile&parkId=95" target="_blank" className="underline text-emerald-800 hover:text-emerald-600">Honeyman State Park</Link>'s day-use area. <strong>The entire meeting was recorded</strong>.</div>

            <div className="mt-6 border border-gray-200 shadow-sm rounded-md overflow-hidden">
                <div className="bg-gray-100 px-4 py-2 font-semibold">
                    Full Recording — March 5, 2025
                </div>
                <div>
                    <VideoEmbed
                        youtubeId="iOuaufCH_I8"
                        title="March 5, 2025 Meeting with Ryan Warren and Kati Baker"
                    />
                </div>
            </div>

            <hr className="my-6 border-t border-gray-300" />

            <h2 className="text-xl font-semibold">KEY MOMENTS</h2>

            <ul className="list-disc list-outside ml-8 mt-4 space-y-2">
                <li>Ryan Warren told me to &quot;chew glass and swallow it&quot; as leadership advice.</li>
                <li>Admission that I was never given the benefit of the doubt from day one.</li>
                <li>Repeated suggestions that I should "just leave" if uncomfortable.</li>
                <li>Reframing of normal communication as threatening behavior.</li>
                <li>Weaponization of my identity and Logan's disclosures.</li>
                <li>Absolute refusal to engage with substantive claims.</li>
            </ul>

            <hr className="my-6 border-t border-gray-300" />

            <h2 className="text-xl font-semibold">THE PATTERN</h2>

            <div className="mt-4">
                This meeting was not an attempt to resolve conflict. It was designed to apply psychological pressure until I resigned.
            </div>

            <div className="mt-4">
                When that failed, they removed me six days before my scheduled completion using fabricated pretenses.
            </div>

        </SectionPage>
    );
}
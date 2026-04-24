// app/(archive)/evidence/coercion/page.tsx
import type { Metadata } from "next";
import SectionPage from "@/components/SectionPage";
import PrimaryTransmission from "@/components/PrimaryTransmission";
import EvidenceTabs from "@/components/EvidenceTabs";
import { COERCION_EXPLOITATION } from "@/data/exploitation";
import Link from "next/link";
import { COERCION_TRANSMISSION } from "@/data/20250305";

export const metadata: Metadata = {
    title: "Coercion",
    description: "March 5, 2025 - Over an hour of recorded psychological pressure by Ryan Warren and Kati Baker.",
};

export default function CoercionPage() {
    return (
        <SectionPage
            title="THE COERCION MEETING"
            subtitle="RYAN WARREN, PARK MANAGER &amp; KATI BAKER, PARK SUPERVISOR"
            previousPage={{ href: "/evidence/trust", label: "Trust Recruitment" }}
            nextPage={{ href: "/evidence/surveillance", label: "Assessment & Surveillance" }}
            summary="Ryan Warren and Kati Baker summoned me to a public picnic table for over an hour of psychological pressure designed to force my resignation."

        >

            <EvidenceTabs exploitation={COERCION_EXPLOITATION} stage="coercion" />

            <h2 className="text-xl font-semibold">MARCH 5, 2025</h2>

            <div className="mt-4">
                Ryan Warren and Kati Baker called me to a meeting at a public picnic table in <Link href="https://stateparks.oregon.gov/index.cfm?do=park.profile&parkId=95" target="_blank" className="underline text-emerald-800 hover:text-emerald-600">Honeyman State Park</Link>&rsquo;s day-use area. <strong>The entire meeting was recorded</strong>.
            </div>

            <div className="mt-4 space-y-4 text-base text-gray-700 leading-relaxed">
                <div>62 minutes. A public picnic table. Two managers and one unpaid volunteer with no representation.</div>
                <div>Ryan Warren came with a handwritten list. He catalogued every minor interaction from my first weeks &mdash; a text message with Kati, a poem I shared, bolded words in an email, a CC on correspondence &mdash; and presented them as a pattern of concerning behavior. When I corrected him, he moved to the next item. When I pushed back, he claimed things were in my emails that were not there. When I asked him to be specific, he could not.</div>
                <div>He told me to chew glass and swallow it. He mocked my sexuality, suggesting I &ldquo;thought I had a future&rdquo; with my male supervisor &mdash; after I had explicitly set a boundary that the relationship was not romantic. He admitted on tape that he had never given me the benefit of the doubt. He repeatedly suggested I leave.</div>
                <div><Link href="/key-individuals/kati-baker" className="underline text-emerald-800 hover:text-emerald-600">Kati Baker</Link> was silent for the first 19 minutes. Her first word was &ldquo;tone&rdquo; &mdash; spoken once, precisely timed, reframing every email I had ever written as threatening. She said nothing while Warren told me to chew glass. She said nothing while he mocked my sexuality. She said nothing while he admitted he had never given me the benefit of the doubt.</div>
                <div>When Warren&rsquo;s admission destabilized his own argument, she attacked. Fifty minutes in, she returned to the only thing they ever had: a text message from the first week of February that we had already resolved. She confirmed on tape that she had invented an interpretation of my job application withdrawal email &mdash; attaching meaning that was never there, that I had never stated, that existed in no correspondence &mdash; and brought it to that table as evidence against me.</div>
                <div>I told her I liked her. She said &ldquo;okay.&rdquo; That is on the tape.</div>
            </div>

            <hr className="my-6 border-t border-gray-300" />

            <PrimaryTransmission transmission={COERCION_TRANSMISSION} defaultExpanded />


        </SectionPage>
    );
}

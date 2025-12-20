// app/(archive)/correspondence/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import SectionPage from "@/components/SectionPage";

export const metadata: Metadata = {
    title: "Correspondence",
    description: "External outreach, press contacts, and formal complaints documenting institutional escalation.",
};

export default function CorrespondencePage() {
    return (
        <SectionPage
            title="CORRESPONDENCE"
            subtitle="COMPLETE RECORD OF EXTERNAL CONTACT"
            summary="This section contains every external communication made following the institutional failures documented in this archive."
            previousPage={{ href: "/", label: "Home" }}
        >

            <div className="space-y-8">
                <div>
                    <h2 className="text-xl font-semibold mb-2">
                        <Link href="/correspondence/complaints" className="text-emerald-700 hover:underline">
                            Formal Complaints
                        </Link>
                    </h2>
                    <p className="text-gray-700">
                        Official filings with oversight bodies, civil rights organizations, and legal advocacy groups.
                    </p>
                </div>

                <div>
                    <h2 className="text-xl font-semibold mb-2">
                        <Link href="/correspondence/institution" className="text-emerald-700 hover:underline">
                            Institutional Dialogue
                        </Link>
                    </h2>
                    <p className="text-gray-700">
                        Direct communication with OPRD leadership, Governor Kotek's office, and state officials.
                    </p>
                </div>

                <div>
                    <h2 className="text-xl font-semibold mb-2">
                        <Link href="/correspondence/press" className="text-emerald-700 hover:underline">
                            Press Communications
                        </Link>
                    </h2>
                    <p className="text-gray-700">
                        Media outreach to journalists, editorial boards, and news organizations.
                    </p>
                </div>

                <div>
                    <h2 className="text-xl font-semibold mb-2">
                        <Link href="/correspondence/general" className="text-emerald-700 hover:underline">
                            General Correspondence
                        </Link>
                    </h2>
                    <p className="text-gray-700">
                        Outreach to advocacy organizations and other relevant parties.
                    </p>
                </div>
            </div>

            <hr className="my-6 border-t border-gray-300" />

            <div className="mt-8 text-gray-600">
                All correspondence is stored in unmodified .eml format in the <Link href="https://github.com/rswfire/rswfire.oprd/tree/main/public/correspondence" target="_blank" className="underline text-emerald-800 hover:text-emerald-600">public repository</Link> and can be independently verified.
            </div>
        </SectionPage>
    );
}
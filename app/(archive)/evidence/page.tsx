// app/(archive)/evidence/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import SectionPage from "@/components/SectionPage";

export const metadata: Metadata = {
    title: "Evidence",
    description: "Documented proof of systematic abuse, institutional retaliation, and betrayal of supervisory trust.",
};

export default function EvidencePage() {
    return (
        <SectionPage
            title="EVIDENCE"
            subtitle="DOCUMENTED PROOF"
            previousPage={{ href: "/timeline", label: "Timeline" }}
            nextPage={{ href: "/evidence/confrontation", label: "Confrontation" }}
        >
            <div className="mt-8 p-6 bg-emerald-50 border-l-4 border-emerald-600 rounded-r-lg">
                <div className="text-base">
                    <div>
                        This section contains primary source documentation of systematic abuse at <Link href="https://stateparks.oregon.gov/index.cfm?do=park.profile&parkId=95" target="_blank" className="underline text-emerald-800 hover:text-emerald-600">Honeyman State Park</Link> and institutional retaliation by <Link href="https://www.oregon.gov/oprd/AO/Pages/AU-about.aspx" target="_blank" className="underline text-emerald-800 hover:text-emerald-600">Oregon Parks & Recreation Department</Link>.
                    </div>
                    <div className="mt-2">
                        Every claim made in this archive is supported by audio recordings, video documentation, email correspondence, or written evidence.
                    </div>
                </div>
            </div>

            <hr className="my-6 border-t border-gray-300" />

            <h2 className="text-xl font-semibold">THE EVIDENCE SEQUENCE</h2>

            <div className="mt-4">
                These seven documents establish the complete pattern of abuse, betrayal, and retaliation:
            </div>

            <div className="mt-6 space-y-6">
                <div className="p-4 border-l-4 border-gray-400">
                    <Link href="/evidence/confrontation" className="text-lg font-semibold text-emerald-700 hover:underline">
                        1. CONFRONTATION
                    </Link>
                    <div className="mt-2 text-sm text-gray-700">
                        February 9, 2025 — Kati Baker responds dismissively to operational questions. I name her tone. Same day: Ryan Warren confronts me alone, cataloging first-week mistakes.
                    </div>
                    <div className="mt-2 text-sm font-semibold">
                        Format: Email correspondence
                    </div>
                </div>

                <div className="p-4 border-l-4 border-gray-400">
                    <Link href="/evidence/compliance" className="text-lg font-semibold text-emerald-700 hover:underline">
                        2. COMPLIANCE
                    </Link>
                    <div className="mt-2 text-sm text-gray-700">
                        February 12, 2025 — Explicit commitment to institutional conformity. Abuse escalated anyway.
                    </div>
                    <div className="mt-2 text-sm font-semibold">
                        Format: Email correspondence
                    </div>
                </div>

                <div className="p-4 border-l-4 border-gray-400">
                    <Link href="/evidence/betrayal" className="text-lg font-semibold text-emerald-700 hover:underline">
                        3. BETRAYAL
                    </Link>
                    <div className="mt-2 text-sm text-gray-700">
                        February-March 2025 — Logan Bliss elicits trust through reciprocal vulnerability, then transmits confidential disclosures to management who weaponize them against me.
                    </div>
                    <div className="mt-2 text-sm font-semibold">
                        Format: Email correspondence, supplemental documentation
                    </div>
                </div>

                <div className="p-4 border-l-4 border-gray-400">
                    <Link href="/evidence/coercion" className="text-lg font-semibold text-emerald-700 hover:underline">
                        4. COERCION
                    </Link>
                    <div className="mt-2 text-sm text-gray-700">
                        March 5, 2025 — Ryan Warren and Kati Baker summon me to public picnic table for over an hour of psychological pressure. Ryan tells me to "chew glass and swallow it," admits I was never given benefit of the doubt.
                    </div>
                    <div className="mt-2 text-sm font-semibold">
                        Format: Audio recording (complete transcript)
                    </div>
                </div>

                <div className="p-4 border-l-4 border-gray-400">
                    <Link href="/evidence/surveillance" className="text-lg font-semibold text-emerald-700 hover:underline">
                        5. SURVEILLANCE
                    </Link>
                    <div className="mt-2 text-sm text-gray-700">
                        March 18, 2025 — Unidentified operative approaches me while cleaning yurts alone, takes photos of dirty sites mid-clean, presses me with direct personal questions about leadership treatment. Occurs during regional event when all rangers were away.
                    </div>
                    <div className="mt-2 text-sm font-semibold">
                        Format: Email correspondence, video documentation
                    </div>
                </div>

                <div className="p-4 border-l-4 border-gray-400">
                    <Link href="/evidence/dismissal" className="text-lg font-semibold text-emerald-700 hover:underline">
                        6. DISMISSAL
                    </Link>
                    <div className="mt-2 text-sm text-gray-700">
                        March 24, 2025 — Ryan Warren dismisses me by phone using fabricated pretext. One hour later: arrives at my RV to collect keys, admits on camera no formal documentation exists.
                    </div>
                    <div className="mt-2 text-sm font-semibold">
                        Format: Video documentation
                    </div>
                </div>

                <div className="p-4 border-l-4 border-gray-400">
                    <Link href="/evidence/expulsion" className="text-lg font-semibold text-emerald-700 hover:underline">
                        7. EXPULSION
                    </Link>
                    <div className="mt-2 text-sm text-gray-700">
                        March 25-27, 2025 — Allison Watson weaponizes Logan's disclosures, issues permanent ban explicitly citing public speech about abuse. First Amendment retaliation in writing on agency letterhead.
                    </div>
                    <div className="mt-2 text-sm font-semibold">
                        Format: Audio recording, email correspondence, official removal letter
                    </div>
                </div>
            </div>

            <hr className="my-6 border-t border-gray-300" />

            <h2 className="text-xl font-semibold">WHAT THIS EVIDENCE PROVES</h2>

            <div className="mt-4 space-y-4">
                <div>
                    <strong>Pattern of abuse:</strong> Systematic psychological pressure across two months, escalating from dismissive responses to explicit coercion.
                </div>
                <div>
                    <strong>Institutional bad faith:</strong> Targeting continued after explicit commitment to conform, proving it was never about legitimate supervision.
                </div>
                <div>
                    <strong>Betrayal of supervisory trust:</strong> Logan Bliss disclosed confidential personal information to management who weaponized it during dismissal proceedings.
                </div>
                <div>
                    <strong>Covert institutional tactics:</strong> Unidentified operative deployed to interrogate isolated volunteer about leadership treatment, disguised as routine photo documentation.
                </div>
                <div>
                    <strong>Identity-based targeting:</strong> Ryan Warren mocked my sexuality. Allison Watson pathologized my identity-based concerns.
                </div>
                <div>
                    <strong>Dismissal without cause:</strong> Ryan Warren admitted on camera no formal documentation existed justifying removal.
                </div>
                <div>
                    <strong>First Amendment retaliation:</strong> Allison Watson explicitly stated permanent ban was for speaking publicly about abuse.
                </div>
            </div>

            <hr className="my-6 border-t border-gray-300" />

            <h2 className="text-xl font-semibold">VERIFICATION</h2>

            <div className="mt-4">
                Every document in this section is independently verifiable:
            </div>

            <ul className="list-disc list-outside ml-8 mt-2 space-y-1">
                <li>Email correspondence stored in unmodified .eml format in <Link href="https://github.com/rswfire/rswfire.oprd" target="_blank" className="text-emerald-700 underline hover:text-emerald-600">public repository</Link>.</li>
                <li>Audio recordings available for third-party analysis.</li>
                <li>Video documentation with metadata intact.</li>
                <li>Written evidence from official Oregon State Parks communications.</li>
            </ul>

            <div className="mt-4">
                This is not interpretation. This is not speculation. This is documented institutional failure.
            </div>

        </SectionPage>
    );
}
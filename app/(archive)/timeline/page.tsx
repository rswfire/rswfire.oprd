// app/(archive)/timeline/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import SectionPage from "@/components/SectionPage";

export const metadata: Metadata = {
    title: "Timeline",
    description: "Chronological documentation of systematic abuse and institutional retaliation, February-December 2025.",
};

export default function TimelinePage() {
    return (
        <SectionPage
            title="TIMELINE"
            subtitle="FEBRUARY 9 — DECEMBER 13, 2025"
            previousPage={{ href: "/key-individuals", label: "Key Individuals" }}
            nextPage={{ href: "/evidence", label: "Evidence" }}
        >

            <h2 className="text-xl font-semibold"><strong>FEBRUARY — MARCH 2025</strong>: ABUSE AND DISMISSAL</h2>

            <ul className="space-y-6 border-l-2 border-emerald-600 ml-6 pl-6 mt-4">
                <li>
                    <div className="font-semibold">February 9, 2025</div>
                    <div className="mt-2 text-sm">
                        <Link href="/evidence/confrontation" className="underline text-emerald-800 hover:text-emerald-600">
                            Kati Baker responds dismissively
                        </Link> to operational questions about power outage protocols. I send follow-up email naming her tone. Same day: <Link href="/evidence/compliance" className="underline text-emerald-800 hover:text-emerald-600">Ryan Warren confronts me alone</Link>, cataloging first-week mistakes. I try to reset.
                    </div>
                </li>

                <li>
                    <div className="font-semibold">February (ongoing)</div>
                    <div className="mt-2 text-sm">
                        Systematic undermining of supervisor relationships. Logan Bliss elicits trust through reciprocal vulnerability, then distances himself. I document the pattern with the <Link href="/evidence/betrayal" className="underline text-emerald-800 hover:text-emerald-600">"Trust" email</Link> on March 2.
                    </div>
                </li>

                <li>
                    <div className="font-semibold">March 5, 2025</div>
                    <div className="mt-2 text-sm">
                        <Link href="/evidence/coercion" className="underline text-emerald-800 hover:text-emerald-600">
                            Ryan Warren and Kati Baker summon me to public picnic table
                        </Link> for over an hour of psychological pressure. Ryan tells me to "chew glass and swallow it," admits I was never given benefit of the doubt, repeatedly suggests I leave. Entire meeting recorded.
                    </div>
                </li>

                <li>
                    <div className="font-semibold">March 10, 2025</div>
                    <div className="mt-2 text-sm">
                        Allison Watson calls about March 5 recording, informs me I was "acting as an agent of the state," establishes notification requirements. Follow-up call: tells me to "get through my time," dismisses documented abuse.
                    </div>
                </li>

                <li>
                    <div className="font-semibold">March 18, 2025</div>
                    <div className="mt-2 text-sm">
                        <Link href="/evidence/surveillance" className="underline text-emerald-800 hover:text-emerald-600">
                            Unidentified man approaches me
                        </Link> while cleaning yurts alone, interrogates me about leadership treatment. I document immediately with Kati. Explained as "IT photo documentation" — no photos ever produced.
                    </div>
                </li>

                <li>
                    <div className="font-semibold">March 24, 2025</div>
                    <div className="mt-2 text-sm">
                        <Link href="/evidence/dismissal" className="underline text-emerald-800 hover:text-emerald-600">
                            Ryan Warren dismisses me by phone
                        </Link>, six days before scheduled completion. Stated reason: homeless man's lost journal. One hour later: arrives at my RV to collect keys, admits on camera no formal documentation exists.
                    </div>
                </li>

                <li>
                    <div className="font-semibold">March 25, 2025</div>
                    <div className="mt-2 text-sm">
                        <Link href="/evidence/expulsion" className="underline text-emerald-800 hover:text-emerald-600">
                            Allison Watson calls to contain the situation
                        </Link>. Logan's disclosures weaponized as "concerning behavior." Complete refusal to engage with documented abuse. I record the call.
                    </div>
                </li>

                <li>
                    <div className="font-semibold">March 27, 2025</div>
                    <div className="mt-2 text-sm">
                        I send <Link href="/evidence/expulsion" className="underline text-emerald-800 hover:text-emerald-600">detailed letter to Allison</Link> attempting accountability. Hours later: permanent dismissal from all Oregon State Parks volunteer programs, explicitly citing my public speech about the abuse.
                    </div>
                </li>
            </ul>

            <hr className="my-6 border-t border-gray-300" />

            <h2 className="text-xl font-semibold"><strong>AUGUST — DECEMBER 2025</strong>: SILENCE AND ESCALATION</h2>

            <ul className="space-y-6 border-l-2 border-emerald-600 ml-6 pl-6 mt-4">
                <li>
                    <div className="font-semibold">August 16, 2025</div>
                    <div className="mt-2 text-sm">
                        <Link href="/evidence/surveillance" className="underline text-emerald-800 hover:text-emerald-600">
                            Escalate March 18 encounter to Director Lisa Sumption
                        </Link> with full documentation. No response.
                    </div>
                </li>

                <li>
                    <div className="font-semibold">August 22, 2025</div>
                    <div className="mt-2 text-sm">
                        <Link href="/lisa-sumption/public-records-request" className="underline text-emerald-800 hover:text-emerald-600">
                            Submit comprehensive public records request
                        </Link>. OPRD remains silent for 90 days.
                    </div>
                </li>

                <li>
                    <div className="font-semibold">August 25, 2025</div>
                    <div className="mt-2 text-sm">
                        <Link href="/lisa-sumption/open-letter" className="underline text-emerald-800 hover:text-emerald-600">
                            Send open letter to Director Lisa Sumption
                        </Link> with comprehensive documentation. She responds within 12 hours with procedural language, no commitments.
                    </div>
                </li>

                <li>
                    <div className="font-semibold">November 15, 2025</div>
                    <div className="mt-2 text-sm">
                        <Link href="/lisa-sumption/public-records-request" className="underline text-emerald-800 hover:text-emerald-600">
                            Issue Notice of Violation
                        </Link> for OPRD's failure to respond to public records request.
                    </div>
                </li>

                <li>
                    <div className="font-semibold">November 18, 2025</div>
                    <div className="mt-2 text-sm">
                        Governor Tina Kotek's office <Link href="https://www.oprdvolunteerabuse.org/correspondence/complaints/governor-kotek-2025-11-18" className="underline text-emerald-800 hover:text-emerald-600">sent formal complaint</Link>.
                    </div>
                </li>

                <li>
                    <div className="font-semibold">November 20, 2025</div>
                    <div className="mt-2 text-sm">
                        OPRD responds claiming they posted response to inaccessible internal portal on August 29. Cost estimate: tens of thousands of dollars. I withdraw the request.
                    </div>
                </li>

                <li>
                    <div className="font-semibold">December 7, 2025</div>
                    <div className="mt-2 text-sm">
                        Send <Link href="/lisa-sumption/closure" className="underline text-emerald-800 hover:text-emerald-600">final message to Director Sumption</Link>. She responds December 8, reframing documentation as emotional processing, closes communication.
                    </div>
                </li>

                <li>
                    <div className="font-semibold">December 10, 2025</div>
                    <div className="mt-2 text-sm">
                        Send <Link href="/evidence/betrayal" className="underline text-emerald-800 hover:text-emerald-600">letter naming Logan's betrayal</Link> to Logan Bliss. CC: Kati Baker, Ryan Warren, Allison Watson, Lisa Sumption.
                    </div>
                </li>

                <li>
                    <div className="font-semibold">December 11, 2025</div>
                    <div className="mt-2 text-sm">
                        Build dedicated section documenting <Link href="/lisa-sumption" className="underline text-emerald-800 hover:text-emerald-600">Director Lisa Sumption's decisions</Link>. Send final message: "I will continue my accountability work where it will have the greatest institutional effect."
                    </div>
                </li>

                <li>
                    <div className="font-semibold">December 13, 2025</div>
                    <div className="mt-2 text-sm">
                        Governor Tina Kotek's campaign contacted.
                    </div>
                </li>
            </ul>

        </SectionPage>
    );
}
// app/(archive)/lisa-sumption/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import SectionPage from "@/components/SectionPage";

export const metadata: Metadata = {
    title: "Lisa Sumption",
    description: "Director of Oregon State Parks &mdash; documented actions and institutional decisions.",
};

export default function LisaSumptionIndexPage() {
    return (
        <SectionPage
            title="LISA SUMPTION"
            subtitle="THE DIRECTOR'S DECISIONS"
            supplemental="OREGON PARKS &amp; RECREATION DEPARTMENT"
            previousPage={{ href: "/evidence", label: "Evidence" }}
            nextPage={{ href: "/lisa-sumption/open-letter", label: "The Open Letter" }}
        >

            <div className="mt-4">
                This section documents the actions, decisions, and institutional responses of <span className="font-semibold">Director Lisa Sumption</span> &mdash; the highest-level
                authority notified of the abuse, retaliation, and systemic failures that occurred at <Link href="https://stateparks.oregon.gov/index.cfm?do=park.profile&parkId=95" target="_blank" className="underline text-emerald-800 hover:text-emerald-600">Honeyman State Park</Link>.
            </div>

            <div className="mt-4">
                Her role was decisive. Every opportunity for accountability passed through her office.
                Every escalation, every disclosure, every evidentiary packet reached her directly.
                Her responses &mdash; and her refusals &mdash; shaped the outcome of this case.
            </div>

            <hr className="my-6 border-t border-gray-300" />

            <h2 className="text-xl font-semibold">DOCUMENTED ACTIONS</h2>

            <ul className="list-disc list-outside ml-8 mt-4 space-y-3">
                <li>
                    <Link href="/lisa-sumption/open-letter" className="underline text-emerald-800 hover:text-emerald-600">
                        The Open Letter (August 25, 2025)
                    </Link>
                    &mdash; received comprehensive documentation of abuse and retaliation; responded within twelve hours with procedural language and no commitments.
                </li>

                <li>
                    <Link
                        href="/lisa-sumption/public-records-request"
                        className="underline text-emerald-800 hover:text-emerald-600"
                    >
                        The Public Records Request (August–November 2025)
                    </Link>
                    &mdash; OPRD remained silent for ninety days after attempting to narrow the request by phone; later
                    claimed to have “responded” through an undisclosed internal portal system, producing nothing until
                    pressured by a formal compliance demand and a complaint to the Governor’s office.
                </li>

                <li>
                    <Link href="/lisa-sumption/closure" className="underline text-emerald-800 hover:text-emerald-600">
                        The Closure (December 2025)
                    </Link>
                    &mdash; reframed documentation as emotional processing; closed communication one day before
                    the final revelation concerning the weaponization of queer vulnerability was published.
                </li>
            </ul>

            <hr className="my-6 border-t border-gray-300" />

            <div className="mt-4 p-6 bg-emerald-50 border-l-4 border-emerald-600 rounded-r-lg">
                <div className="text-lg font-bold mb-2">WHY HER ACTIONS MATTER</div>
                <div>
                    Directors set institutional culture. They decide whether documented harm is investigated,
                    minimized, or ignored. When a volunteer reports abuse, retaliation, and identity-based targeting,
                    the Director becomes the final safeguard.
                </div>
                <div className="mt-4 font-semibold">
                    Lisa Sumption was given every opportunity to intervene.
                </div>
                <div>She chose institutional protection over volunteer safety.</div>
            </div>

        </SectionPage>
    );
}

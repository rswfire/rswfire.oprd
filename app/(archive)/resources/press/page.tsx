// app/(archive)/resources/press/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import SectionPage from "@/components/SectionPage";
import AdvocateLetter from "@/components/resources/AdvocateLetter";
import ResourceCardGrid from "@/components/resources/ResourceCardGrid";
import ResourceCard from "@/components/resources/ResourceCard";
import PrimaryDocuments from "@/components/PrimaryDocuments";

export const metadata: Metadata = {
    title: "For Press",
    description: "A summary of the case against Oregon State Parks, written for press. First Amendment retaliation, institutional containment, and a structural gap that affects every volunteer in the country.",
};

export default function PressPage() {
    return (
        <SectionPage
            title="FOR PRESS"
            previousPage={{ href: "/resources", label: "Resources" }}
            nextPage={{ href: "/faq", label: "Frequently Asked Questions" }}
        >

            <AdvocateLetter />

            <ResourceCardGrid columns={2}>
                <ResourceCard icon="Mail" title="Contact">
                    <div className="text-sm text-gray-700 space-y-2">
                        <div className="font-semibold text-gray-900">Robert Samuel White</div>
                        <div>
                            <a href="mailto:rsw@rswfire.com" className="underline text-emerald-800 hover:text-emerald-600">rsw@rswfire.com</a>
                        </div>
                        <div className="pt-2 text-xs text-gray-500">Available for on-the-record interviews. All claims independently verifiable. All recordings available for review.</div>
                    </div>
                </ResourceCard>

                <ResourceCard icon="Newspaper" title="Previous Press" placeholder>
                    <div className="text-sm text-gray-700">
                        <p>No press coverage to date. This story has not been told.</p>
                    </div>
                </ResourceCard>

                <ResourceCard icon="MessageSquare" title="Questions to Ask OPRD">
                    <div className="text-sm text-gray-700 space-y-2">
                        <ul className="list-disc pl-4 space-y-1.5">
                            <li>Who authorized the dispatch of an unidentified individual in an unmarked state vehicle to interrogate a volunteer while all rangers were away?</li>
                            <li>Why does the expulsion letter cite public speech as the sole basis for permanent removal?</li>
                            <li>Why was the expulsion letter designated to be kept secret?</li>
                            <li>Why has Director Sumption never responded to direct questions about the surveillance encounter?</li>
                            <li>What volunteer protections exist within OPRD, and what recourse does a volunteer have when they are retaliated against?</li>
                        </ul>
                    </div>
                </ResourceCard>

                <ResourceCard icon="MessageSquare" title="Questions to Ask USFS">
                    <div className="text-sm text-gray-700 space-y-2">
                        <ul className="list-disc pl-4 space-y-1.5">
                            <li>Who authorized Special Agent Matthew Oliver to visit a volunteer caretaker at a locked federal gate on restricted land?</li>
                            <li>What was the stated purpose of the visit?</li>
                            <li>Who were the two unidentified state officers who accompanied him?</li>
                            <li>Why was the visit conducted on the one-year anniversary of the volunteer&apos;s dismissal from Oregon State Parks?</li>
                            <li>Is the Forest Service coordinating with Oregon State Parks regarding this volunteer&apos;s online documentation?</li>
                        </ul>
                    </div>
                </ResourceCard>
            </ResourceCardGrid>

            <hr className="my-8 border-t border-gray-300" />

            <PrimaryDocuments />

        </SectionPage>
    );
}

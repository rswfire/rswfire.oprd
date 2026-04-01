// app/(archive)/resources/legislators/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import SectionPage from "@/components/SectionPage";
import AdvocateLetter from "@/components/resources/AdvocateLetter";
import ResourceCardGrid from "@/components/resources/ResourceCardGrid";
import ResourceCard from "@/components/resources/ResourceCard";
import PrimaryDocuments from "@/components/PrimaryDocuments";

export const metadata: Metadata = {
    title: "For Legislators",
    description: "A request for legislative action to protect volunteers from institutional retaliation. Oregon State Parks exploited a structural gap in volunteer protections — that gap exists in every state.",
};

export default function LegislatorsPage() {
    return (
        <SectionPage
            title="FOR LEGISLATORS"
            previousPage={{ href: "/resources", label: "Resources" }}
            nextPage={{ href: "/faq", label: "Frequently Asked Questions" }}
        >

            <AdvocateLetter />

            <ResourceCardGrid columns={2}>
                <ResourceCard icon="AlertTriangle" title="The Structural Gap">
                    <div className="text-sm text-gray-700 space-y-3">
                        <p className="font-semibold">There was no mechanism that kept me safe in their parks.</p>
                        <p>That sentence is the whole story.</p>
                        <p>Volunteers have no protection from institutional retaliation anywhere in this country. No HR. No grievance process. No due process requirement before removal. No mandatory reporting channel. No whistleblower protection. No recourse of any kind.</p>
                        <p>A state agency can sit an unpaid laborer down at a picnic table, tell them to <em>chew glass and swallow it</em>, expel them for speaking publicly about it &mdash; and then send police to their door a year later on the anniversary of their retaliatory dismissal &mdash; behind a locked gate on restricted federal land.</p>
                        <p>This is not an Oregon problem. This is a structural vacuum that exists in every state. Every institution that depends on unpaid labor operates inside it.</p>
                        <p>The gap is there. And it will be exploited again.</p>
                    </div>
                </ResourceCard>

                <ResourceCard icon="Wrench" title="How to Fix It">
                    <div className="text-sm text-gray-700 space-y-3">
                        <p className="font-semibold">At minimum, volunteers serving state agencies need:</p>
                        <ul className="list-disc pl-4 space-y-1.5">
                            <li>A mandatory grievance process before removal or expulsion</li>
                            <li>Whistleblower protection for reporting abuse, retaliation, or unsafe conditions</li>
                            <li>An independent reporting channel outside the agency chain of command</li>
                            <li>Due process requirements proportional to the duration and nature of service</li>
                            <li>Explicit First Amendment protections for public speech about volunteer service conditions</li>
                            <li>Prohibition on retaliatory expulsion from statewide programs based on speech</li>
                        </ul>
                        <p>None of these protections currently exist for volunteers in Oregon or in most states. The absence is not an oversight. It is a design choice that serves institutional convenience at the expense of the people who serve for free.</p>
                        <p className="font-semibold">I am asking you to change that.</p>
                    </div>
                </ResourceCard>
            </ResourceCardGrid>

            <hr className="my-8 border-t border-gray-300" />

            <PrimaryDocuments />

        </SectionPage>
    );
}

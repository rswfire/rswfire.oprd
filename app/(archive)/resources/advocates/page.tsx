// app/(archive)/resources/advocates/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import SectionPage from "@/components/SectionPage";
import AdvocateLetter from "@/components/resources/AdvocateLetter";
import ResourceCardGrid from "@/components/resources/ResourceCardGrid";
import ResourceCard from "@/components/resources/ResourceCard";
import PrimaryDocuments from "@/components/PrimaryDocuments";

export const metadata: Metadata = {
    title: "For Advocates",
    description: "A request for advocacy and awareness. Oregon State Parks permanently expelled a volunteer for speaking publicly about documented abuse — and sent police to his door a year later.",
};

export default function AdvocatesPage() {
    return (
        <SectionPage
            title="FOR ADVOCATES"
            previousPage={{ href: "/resources", label: "Resources" }}

            nextPage={{ href: "/faq", label: "Frequently Asked Questions" }}
        >

            <AdvocateLetter />

            <ResourceCardGrid columns={3}>
                <ResourceCard icon="Share2" title="Share This">
                    <div className="text-sm text-gray-700 space-y-2">
                        <p>I am not asking you to take on the case. I am writing because this situation belongs in your awareness &mdash; and I hope you will consider sharing it with your network.</p>
                        <p>I have reached out to <Link href="/resources/press" className="underline text-emerald-800 hover:text-emerald-600">press</Link>. I have reached out to <Link href="/resources/legislators" className="underline text-emerald-800 hover:text-emerald-600">legislators</Link>. I have spent an entire year trying to get accountability within the institution itself.</p>
                        <p>And my efforts have revealed this structural gap is so pervasive in our society that it is met with deafening silence far too often.</p>
                        <p className="pt-2 font-semibold">The archive: <Link href="/" className="underline text-emerald-800 hover:text-emerald-600">oprdvolunteerabuse.org</Link></p>
                    </div>
                </ResourceCard>

                <ResourceCard icon="Mail" title="Contact">
                    <div className="text-sm text-gray-700 space-y-2">
                        <div className="font-semibold text-gray-900">Robert Samuel White</div>
                        <div>Founder, Autonomy Realms</div>
                        <div>Owner, eNetwizard, Inc.</div>
                        <div>Former Oregon State Parks Volunteer</div>
                        <div>Current U.S. Forest Service Caretaker</div>
                        <div>Steward, oprdvolunteerabuse.org</div>
                        <div className="pt-2">
                            <a href="mailto:rsw@rswfire.com" className="underline text-emerald-800 hover:text-emerald-600">rsw@rswfire.com</a>
                        </div>
                    </div>
                </ResourceCard>

                <ResourceCard icon="HelpCircle" title="Ask the Governor">
                    <div className="text-sm text-gray-700 space-y-2">
                        <p className="font-semibold"><Link href="/governor-kotek" className="underline text-emerald-800 hover:text-emerald-600">Governor Kotek</Link>, does a gay volunteer who documented retaliation and identity-based targeting by state employees deserve an independent investigation?</p>
                        <p className="font-semibold">Yes or no?</p>
                        <p className="pt-2 text-xs text-gray-500">Oregon&apos;s first openly LGBTQ+ governor has been silent through all of it.</p>
                    </div>
                </ResourceCard>
            </ResourceCardGrid>

            <hr className="my-8 border-t border-gray-300" />

            <PrimaryDocuments />

        </SectionPage>
    );
}

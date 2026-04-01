// app/(archive)/resources/lawyers/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import SectionPage from "@/components/SectionPage";
import AdvocateLetter from "@/components/resources/AdvocateLetter";
import ResourceCardGrid from "@/components/resources/ResourceCardGrid";
import ResourceCard from "@/components/resources/ResourceCard";
import TransmissionDisclosure from "@/components/TransmissionDisclosure";
import PrimaryDocuments from "@/components/PrimaryDocuments";
import { SEEKING_ATTORNEY_TRANSMISSION } from "@/data/20260323";

export const metadata: Metadata = {
    title: "For Lawyers",
    description: "Robert Samuel White is seeking civil rights representation for a First Amendment retaliation case against Oregon State Parks. No settlement. No NDA. United States Supreme Court if necessary.",
};

export default function LawyersPage() {
    return (
        <SectionPage
            title="FOR LAWYERS"
            subtitle="PREPARING THE CASE IN PUBLIC"
            previousPage={{ href: "/resources", label: "Resources" }}
            nextPage={{ href: "/faq", label: "Frequently Asked Questions" }}
        >

            <TransmissionDisclosure transmission={SEEKING_ATTORNEY_TRANSMISSION} />

            <AdvocateLetter />

            <div className="mt-8 p-4 bg-gray-50 border-l-4 border-emerald-600 text-sm">
                <div className="font-semibold">
                    This case does not end in an NDA. There will be no quiet resolution. The archive remains public. The record remains public. I am not seeking a settlement. I am seeking adjudication.
                </div>
                <div className="mt-2">The statute of limitations runs to <strong>March 26, 2027</strong> for the expulsion &mdash; and <strong>March 24, 2028</strong> for the USFS/state police intimidation.</div>
            </div>

            <p className="mt-8 text-sm italic text-gray-500">No filing has been made yet. I am preparing this case in public because the evidence speaks for itself &mdash; and because an institution that cannot withstand transparency was never operating in good faith to begin with.</p>

            <div className="flex flex-col md:flex-row gap-4 mt-4">
                <div className="flex-[2] space-y-4">
                    <ResourceCard icon="Scale" title="White v Watson">
                        <div className="text-sm text-gray-700 space-y-2">
                            <p className="font-semibold">Proving the retaliation.</p>
                            <p>The case begins with Allison Watson individually. One defendant. One letter. One clearly established constitutional violation documented on her own letterhead.</p>
                            <p>The expulsion letter explicitly cites protected public speech as the basis for permanent dismissal. That is the entire case.</p>
                            <p>Their response to every complexity they introduce is the same question: <em>if that was the reason, why isn&apos;t it in the letter?</em></p>
                            <p>A finding against Watson establishes that the retaliation occurred. That finding becomes the foundation for everything that follows.</p>
                            <p className="font-semibold pt-2">If that was the reason, why isn&apos;t it in the letter?</p>
                        </div>
                    </ResourceCard>

                    <ResourceCard icon="Scale" title="White v Sumption">
                        <div className="text-sm text-gray-700 space-y-2">
                            <p className="font-semibold">Supervisory duty.</p>
                            <p>Directors have a responsibility to protect the free labor under them. Lisa Sumption received comprehensive documented evidence of First Amendment retaliation by her employees. She had the authority to investigate. She had the authority to correct. She chose to shield.</p>
                            <p>She closed communication by characterizing documented constitutional violations as <em>emotional processing</em>. She never responded to direct questions about the surveillance. She never ordered an investigation. Every person who abused their authority remains in their position.</p>
                            <p>When a director receives evidence that a subordinate retaliated against a volunteer for protected speech &mdash; and does nothing &mdash; that is not a management decision. That is ratification of the constitutional violation.</p>
                            <p className="font-semibold pt-2">She had the evidence. She had the authority. She made a choice.</p>
                        </div>
                    </ResourceCard>

                    <ResourceCard icon="Landmark" title="White v Oregon State Parks">
                        <div className="text-sm text-gray-700 space-y-2">
                            <p className="font-semibold">The constitutional argument.</p>
                            <p>The question of whether civic participants in government volunteer programs retain First Amendment protections is worth arguing at the highest level.</p>
                            <p>After Watson, the case expands: Lisa Sumption individually, Oregon State Parks as an institution, and every actor whose coordination is documented in this archive.</p>
                            <p>The surveillance. The cover story. The containment wall. The institutional silence. All of it enters discovery once the retaliation finding is established.</p>
                            <p className="font-semibold pt-2">Prepared to go to the United States Supreme Court.</p>
                        </div>
                    </ResourceCard>
                </div>

                <div className="flex-1">
                    <ResourceCard icon="FileText" title="Draft Filings">
                        <div className="text-sm text-gray-700 space-y-2">
                            <p className="font-semibold">Expected countermoves and responses.</p>
                            <p><strong>Their move:</strong> Motion to dismiss on qualified immunity. They will argue the rights at issue were not clearly established.</p>
                            <p><strong>Our response:</strong> The right to speak publicly about government service conditions is clearly established. The letter itself is the evidence.</p>
                            <p><strong>Their move:</strong> Reframe expulsion as pattern of concerning conduct.</p>
                            <p><strong>Our response:</strong> If that was the reason, why isn&apos;t it in the letter? Every justification they introduce that isn&apos;t in the letter proves the letter was pretextual.</p>
                            <p><strong>Their move:</strong> Introduce full correspondence record.</p>
                            <p><strong>Our response:</strong> Welcome to discovery. The surveillance requires explanation under oath. The cover story requires explanation under oath.</p>
                            <p className="font-semibold pt-2">They have been silent for a year because they cannot explain what they did.</p>
                        </div>
                    </ResourceCard>
                </div>
            </div>

            <hr className="my-8 border-t border-gray-300" />

            <h2 className="text-xl font-semibold">WHO THIS PLAINTIFF IS</h2>

            <div className="mt-4 text-base leading-relaxed space-y-4">
                <p>The plaintiff is Robert Samuel White. Nearly 49. Gay. Self-taught programmer since sixth grade. Forest Service volunteer caretaker. Former Oregon State Parks volunteer. Builder of sovereign documentation infrastructure.</p>
                <p>He documented the abuse the night it happened. He published the record before the institution finished constructing its narrative. He has been building the case since March 24, 2025. He has filed &sect;1983 notices. He understands systems. He watches calendars. He has navigated prior pro se litigation. He has been three moves ahead at every stage of this case.</p>
                <p>He is not looking for an attorney to manage him. He is looking for an attorney to go to court with him.</p>
            </div>

            <hr className="my-8 border-t border-gray-300" />

            <h2 className="text-xl font-semibold">THE ARCHIVE</h2>

            <div className="mt-4 space-y-1">
                <div><Link href="/timeline" className="underline text-emerald-800 hover:text-emerald-600">Full Timeline</Link></div>
                <div><Link href="/evidence" className="underline text-emerald-800 hover:text-emerald-600">Evidence Index</Link></div>
                <div><Link href="/key-individuals" className="underline text-emerald-800 hover:text-emerald-600">Key Individuals</Link></div>
                <div><a href="https://github.com/rswfire/rswfire.oprd" target="_blank" className="underline text-emerald-800 hover:text-emerald-600">Source Repository</a></div>
            </div>

            <hr className="my-8 border-t border-gray-300" />

            <div className="mt-4">
                <a href="mailto:rsw@rswfire.com" target="_blank" className="underline text-emerald-800 hover:text-emerald-600">Contact Robert Samuel White</a>
            </div>

            <hr className="my-8 border-t border-gray-300" />

            <PrimaryDocuments />

        </SectionPage>
    );
}

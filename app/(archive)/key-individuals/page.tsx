// app/(archive)/key-individuals/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import SectionPage from "@/components/SectionPage";

export const metadata: Metadata = {
    title: "Key Individuals",
    description: "The central figures at Honeyman State Park and OPRD involved in documented volunteer abuse.",
};

export default function KeyIndividualsPage() {
    return (
        <SectionPage
            title="KEY INDIVIDUALS"
            subtitle="HONEYMAN STATE PARK"
            supplemental="OREGON PARKS & RECREATION DEPARTMENT (OPRD)"
        >
            <div className="mt-4 text-gray-700">
                These are the central figures referenced throughout this archive —
            </div>
            <div className="ml-4 text-gray-700">
                each played a distinct role in the events that unfolded
            </div>
            <div className="ml-4 text-gray-700">
                at Honeyman State Park and within Oregon State Parks as a whole.
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">

                <li className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:border-emerald-300">
                    <h3 className="font-semibold text-lg text-center">KATI BAKER</h3>
                    <div className="text-sm text-gray-700">
                        <div className="font-bold text-center pb-2 border-b-2">
                            Park Supervisor<br />
                            Honeyman State Park
                        </div>
                        <div className="pt-2">
                            The architect of early distortion. After a brief exchange about power outage
                            perception, she withdrew, delegating discomfort through silence and seeding a
                            lasting narrative of dismissal.
                        </div>
                    </div>
                </li>

                <li className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:border-emerald-300">
                    <h3 className="font-semibold text-lg text-center">RYAN WARREN</h3>
                    <div className="text-sm text-gray-700">
                        <div className="font-bold text-center pb-2 border-b-2">
                            Park Manager<br />
                            Honeyman State Park
                        </div>
                        <div className="pt-2">
                            The primary enforcer of coercive tactics — initiated multiple confrontations,
                            including the recorded March 5 meeting and a surprise dismissal phone call. His
                            leadership masked control as professionalism.
                        </div>
                    </div>
                </li>

                <li className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:border-emerald-300">
                    <h3 className="font-semibold text-lg text-center">ALLISON WATSON</h3>
                    <div className="text-sm text-gray-700">
                        <div className="font-bold text-center pb-2 border-b-2">
                            Engagement Programs Manager<br />
                            Oregon Parks &amp; Recreation Department
                        </div>
                        <div className="pt-2">
                            Conducted the post-dismissal call. Framed reflective truth as misconduct. Refused
                            to acknowledge documented abuse, and issued the permanent dismissal without
                            responding to direct concerns.
                        </div>
                    </div>
                </li>
            </ul>

            <div className="px-8">
                <div className="mt-6">
                    <strong>LISA SUMPTION</strong>
                </div>
                <div>
                    <em>
                        Director<br />
                        Oregon Parks &amp; Recreation Department
                    </em>
                </div>
                <ul className="mt-4 list-disc list-outside ml-8 space-y-2">
                    <li>
                        Received documentation of systematic volunteer abuse and responded with procedural
                        language that acknowledged concerns while committing to no specific accountability
                        measures.
                    </li>
                    <li>
                        By directing recorded misconduct into internal "appropriate channels," she maintained
                        institutional protection of those implicated in documented misconduct while appearing
                        responsive to external pressure.
                    </li>
                </ul>
                <div className="mt-4">
                    <Link href="https://rswfire.com/fieldcraft/01K3F8X412D5GEY1CXB4WRRPRK" className="text-emerald-700 hover:underline">
                        Read the Open Letter to Director Sumption →
                    </Link>
                </div>
                <div>
                    <Link href="https://rswfire.com/fieldcraft/01K3J5AW1NGKN285PRRA4RBW6X" className="text-emerald-700 hover:underline">
                        Read Director Sumption's Response &amp; Analysis →
                    </Link>
                </div>
            </div>
        </SectionPage>
    );
}
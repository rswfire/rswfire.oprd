import type { Metadata } from "next";
import Link from "next/link";
import SectionPage from "@/components/SectionPage";
import PrimaryTransmission from "@/components/PrimaryTransmission";
import Email from "@/components/archive/Email";
import EvidenceTabs from "@/components/EvidenceTabs";
import { EXPULSION_EXPLOITATION } from "@/data/exploitation";
import { EXPULSION_TRANSMISSION } from "@/data/20250325";

export const metadata: Metadata = {
    title: "Expulsion",
    description: "March 25-26, 2025 - Permanent dismissal from all Oregon State Parks volunteer programs for speaking publicly about documented abuse.",
};

export default function ExpulsionPage() {
    return (
        <SectionPage
            title="EXPULSION & RETALIATION"
            subtitle="ALLISON WATSON, ENGAGEMENT PROGRAMS MANAGER"
            previousPage={{ href: "/evidence/dismissal", label: "Dismissal Without Process" }}
            nextPage={{ href: "/evidence/containment", label: "Institutional Containment" }}
            summary="Allison Watson issued permanent dismissal from all Oregon State Parks volunteer programs, explicitly citing my public speech about the abuse as the reason."

        >

            <EvidenceTabs exploitation={EXPULSION_EXPLOITATION} stage="expulsion" />

            <h2 className="text-xl font-semibold">THE SEQUENCE</h2>

            <div className="mt-4">
                March 24: Ryan Warren dismissed me from <Link href="https://stateparks.oregon.gov/index.cfm?do=park.profile&parkId=95" target="_blank" className="underline text-emerald-800 hover:text-emerald-600">Honeyman State Park</Link> without paperwork or cause.
            </div>

            <div className="mt-4">
                March 25: Allison Watson called to contain the situation. I recorded the call.
            </div>

            <div className="mt-4">
                March 26: I sent Allison a detailed letter attempting accountability. Hours later, she dismissed me permanently — explicitly citing my public comments about the abuse.
            </div>

            <hr className="my-6 border-t border-gray-300" />

            <h2 className="text-xl font-semibold">MARCH 25 — THE CONTAINMENT CALL</h2>

            <PrimaryTransmission transmission={EXPULSION_TRANSMISSION} defaultExpanded />

            <hr className="my-6 border-t border-gray-300" />

            <h2 className="text-xl font-semibold">MARCH 26 — THE PERMANENT DISMISSAL</h2>

            <div className="mt-4">
                I sent a detailed letter documenting the pattern of misconduct and requesting fair assessment. It was never acknowledged.
            </div>

            <div className="mt-4">
                Hours after I sent that letter, Allison Watson responded with permanent dismissal from all <Link href="https://www.oregon.gov/oprd/AO/Pages/AU-about.aspx" target="_blank" className="underline text-emerald-800 hover:text-emerald-600">Oregon State Parks</Link> volunteer programs.
            </div>

            <div className="mt-4">
                The critical language:
            </div>

            <div className="mt-4 ml-4 p-4 bg-gray-50 border-l-4 border-emerald-600 italic">
                "While you are able to share your opinion, perspective, and experience as an individual with the public, the public comments made about staff regarding your volunteer service, were not in line with expectations set forth in the agreement."
            </div>

            <div className="mt-4">
                This was not about conduct at the park. This was about speaking publicly about what happened.
            </div>

            <Email
                from="Allison Watson, Volunteer Engagement Coordinator"
                to="Sam White"
                date="March 26, 2025"
            >
<pre className="whitespace-pre-wrap">{`Hello Sam,

After reviewing the dismissal as a park host from Jessie M. Honeyman State Park, your service, and communications with and about OPRD these past three months, we've identified that this volunteer relationship is no longer mutually beneficial.

As stated in your volunteer service agreement, we require volunteers to "Engage in welcoming interactions with the public, staff, and other volunteers: volunteers must be … professional towards…other volunteers, employees….at all times." While you are able to share your opinion, perspective, and experience as an individual with the public, the public comments made about staff regarding your volunteer service, were not in line with expectations set forth in the agreement. At this time, OPRD has found that you are not able to professionally represent the volunteer park host program.

As part of your dismissal, any future assignments you had scheduled will be cancelled. If you have not already returned your volunteer uniform items at Honeyman, please drop uniform items off on the bench outside of Umpqua Lighthouse State Park's office door.

Thank you for the time you did dedicate to support our state park system and state park properties. I wish you the best in any other volunteer opportunities you may pursue with other organizations. Please find an official letter of dismissal and your volunteer agreement attached to this email.

Respectfully,
Allison Watson`}</pre>
            </Email>

            <div className="mt-4">
                <a
                    className="text-emerald-700 underline hover:text-emerald-800"
                    href="/oprd-dismissal.pdf"
                    download
                >
                    Download the Dismissal Letter (PDF)
                </a>
            </div>

            <hr className="my-6 border-t border-gray-300" />

            <h2 className="text-xl font-semibold">WHAT THIS ESTABLISHES</h2>

            <div className="mt-4">
                Allison Watson's letter is written acknowledgment of retaliatory dismissal based on protected speech.
            </div>

            <div className="mt-4">
                I was not removed for misconduct. I was removed for documenting the abuse and speaking about it publicly.
            </div>

            <div className="mt-4">
                The 48-hour sequence: containment call → vulnerable letter attempting accountability → retaliation in writing citing protected speech.
            </div>

            <div className="mt-4">
                Every piece is documented. Every step is permanent. The pattern is undeniable.
            </div>


        </SectionPage>
    );
}

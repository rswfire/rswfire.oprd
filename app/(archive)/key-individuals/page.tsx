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
            <div className="mt-4">
                These are the central figures referenced throughout this archive —
            </div>
            <div className="ml-4">
                each played a distinct role in the systematic abuse, betrayal, and institutional protection
            </div>
            <div className="ml-4">
                that unfolded at Honeyman State Park and within Oregon State Parks as a whole.
            </div>

            <hr className="my-6 border-t border-gray-300" />

            <h2 className="mt-8 text-xl font-semibold">LOGAN BLISS</h2>
            <div className="mt-2 italic">
                Volunteer Services Lead<br />
                Honeyman State Park
            </div>
            <ul className="mt-4 list-disc list-outside ml-8 space-y-2">
                <li>My direct supervisor, reported to Kati Baker and Ryan Warren.</li>
                <li>Spent 90 minutes eliciting trust through reciprocal vulnerability.</li>
                <li>Transmitted confidential disclosures to Kati Baker, Ryan Warren, Allison Watson.</li>
                <li>Escalated situation with Kati instead of protecting me.</li>
                <li>Visibly recoiled when confronted with description of his own institutional role.</li>
                <li>Betrayed <a href="/trust-broken" className="underline text-emerald-800 hover:text-emerald-600">supervisory trust</a>.</li>
            </ul>

            <hr className="my-6 border-t border-gray-300" />

            <h2 className="mt-8 text-xl font-semibold">KATI BAKER</h2>
            <div className="mt-2 italic">
                Park Supervisor<br />
                Honeyman State Park
            </div>
            <ul className="mt-4 list-disc list-outside ml-8 space-y-2">
                <li>February 9: responded dismissively to operational questions about power outage protocols, escalated after receiving feedback.</li>
                <li>Receiver of confidential disclosures Logan transmitted from me.</li>
                <li>March 5: present during Ryan Warren's coercive meeting, remained silent, intervened only when Ryan made damaging admissions.</li>
                <li>March 18: received report of unidentified man interrogating me, explained as photo documentation, no photos produced.</li>
                <li>Every institutional action taken against me originated from decisions made under her direct supervision.</li>
                <li>February 9 exchange weaponized repeatedly as justification in subsequent proceedings.</li>
            </ul>

            <hr className="my-6 border-t border-gray-300" />

            <h2 className="mt-8 text-xl font-semibold">RYAN WARREN</h2>
            <div className="mt-2 italic">
                Park Manager<br />
                Honeyman State Park
            </div>
            <ul className="mt-4 list-disc list-outside ml-8 space-y-2">
                <li>February 9: confronted me alone same day as email exchange, catalogued first-week mistakes.</li>
                <li>March 5: told me to &quot;chew glass and swallow it,&quot; admitted I was never given the benefit of the doubt, repeatedly suggested I leave &mdash; <a href="/day-use-meeting" className="underline text-emerald-800 hover:text-emerald-600">entire meeting recorded</a>.</li>
                <li>Weaponized Logan's disclosures to mock my sexuality at day-use meeting.</li>
                <li>March 24: dismissed me by phone six days before completion using fabricated pretext, arrived one hour later to collect keys, <a href="/final-hours" className="underline text-emerald-800 hover:text-emerald-600">admitted on camera</a> no formal documentation existed.</li>
            </ul>

            <hr className="my-6 border-t border-gray-300" />

            <h2 className="mt-8 text-xl font-semibold">ALLISON WATSON</h2>
            <div className="mt-2 italic">
                Engagement Programs Manager<br />
                Oregon Parks &amp; Recreation Department
            </div>
            <ul className="mt-4 list-disc list-outside ml-8 space-y-2">
                <li>March 10: first contact &mdash; called about March 5 recording, informed me I was &quot;acting as an agent of the state,&quot; established notification requirements.</li>
                <li>Follow-up call: told me to &quot;get through my time,&quot; dismissed documented abuse.</li>
                <li>Issued permanent removal letter explicitly stating removal was for speaking publicly about my experience.</li>
                <li>Used Logan's disclosures to construct psychological profile, reframed analysis as &quot;apocalyptic thinking.&quot;</li>
                <li>Named retaliation for protected speech in writing on agency letterhead.</li>
            </ul>

            <hr className="my-6 border-t border-gray-300" />

            <h2 className="mt-8 text-xl font-semibold">LISA SUMPTION</h2>
            <div className="mt-2 italic">
                Director<br />
                Oregon Parks &amp; Recreation Department
            </div>
            <ul className="mt-4 list-disc list-outside ml-8 space-y-2">
                <li>August: received comprehensive open letter with audio and video evidence.</li>
                <li>Responded within twelve hours with procedural language, no specific accountability measures.</li>
                <li>Directed documented misconduct into internal channels.</li>
                <li>All documented individuals remain employed, no investigations announced, no protections implemented.</li>
                <li>December 2025: reduced documentation to emotional processing, stated further correspondence would not "lead to the resolution you're seeking".</li>
                <li>Closed communication one day before full scope of Logan's betrayal and weaponization of queer identity was published.</li>
                <li>Chose institutional protection over volunteer safety.</li>
            </ul>
            <div className="mt-4">
                <Link href="https://rswfire.com/fieldcraft/01K3F8X412D5GEY1CXB4WRRPRK" className="text-emerald-700 hover:underline">
                    Read the Open Letter →
                </Link>
            </div>
            <div>
                <Link href="https://rswfire.com/fieldcraft/01K3J5AW1NGKN285PRRA4RBW6X" className="text-emerald-700 hover:underline">
                    Read her response &amp; my analysis →
                </Link>
            </div>

            <hr className="my-6 border-t border-gray-300" />

            <h2 className="mt-8 text-xl font-semibold">TINA KOTEK</h2>
            <div className="mt-2 italic">
                Governor<br />
                State of Oregon
            </div>
            <div className="mt-4">
                Contacted. No acknowledgment.
            </div>

            <div className="mt-8 p-6 bg-emerald-50 border-l-4 border-emerald-600 rounded-r-lg">
                <div className="font-bold text-lg mb-3">
                    EVERY PERSON IN THIS ARCHIVE HAD THE POWER TO STOP THIS.
                </div>
                <div className="mt-2">Every person chose not to.</div>
                <div>Every person who abused their position remains in their position.</div>
                <div className="mt-4">Those choices are now permanent.</div>
                <div>They don't fade with time.</div>
                <div>They don't disappear because they refuse to act.</div>
                <div>They don't get absolved by silence.</div>
            </div>
        </SectionPage>
    );
}
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

            <div className="mt-8 p-6 bg-emerald-50 border-l-4 border-emerald-600 rounded-r-lg">

                <div className="text-base">
                    <div>
                        These are the central figures referenced throughout this archive —
                    </div>
                    <div>
                        each played a distinct role in the systematic abuse, betrayal, and institutional protection
                    </div>
                    <div>
                        that unfolded at <Link href="https://stateparks.oregon.gov/index.cfm?do=park.profile&parkId=95" target="_blank" className="underline text-emerald-800 hover:text-emerald-600">Honeyman State Park</Link> and within <Link href="https://www.oregon.gov/oprd/AO/Pages/AU-about.aspx" target="_blank" className="underline text-emerald-800 hover:text-emerald-600">Oregon State Parks</Link> as a whole.
                    </div>
                </div>
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
                <li>Betrayed <Link href="/trust-broken" className="underline text-emerald-800 hover:text-emerald-600">supervisory trust</Link>.</li>
            </ul>

            <hr className="my-6 border-t border-gray-300" />

            <h2 className="mt-8 text-xl font-semibold">KATI BAKER</h2>
            <div className="mt-2 italic">
                Park Supervisor<br />
                Honeyman State Park
            </div>
            <ul className="mt-4 list-disc list-outside ml-8 space-y-2">
                <li>February 9: <Link href="/how-it-started" className="underline text-emerald-800 hover:text-emerald-600">responded dismissively to operational questions</Link> about power outage protocols, escalated after receiving feedback about her tone.</li>
                <li>Receiver of confidential disclosures Logan transmitted from me.</li>
                <li>March 5: present during <Link href="/coercion" className="underline text-emerald-800 hover:text-emerald-600">Ryan Warren's coercive meeting</Link>, remained silent, intervened only when Ryan made damaging admissions.</li>
                <li>March 18: <Link href="/lisa-sumption/covert-encounter" className="underline text-emerald-800 hover:text-emerald-600">received report of unidentified man interrogating me</Link>, explained as photo documentation, no photos produced.</li>
                <li>Every institutional action taken against me originated from decisions made under her direct supervision.</li>
                <li>February 9 exchange weaponized repeatedly as justification in subsequent proceedings, in both written and recorded documentation.</li>
            </ul>

            <hr className="my-6 border-t border-gray-300" />

            <h2 className="mt-8 text-xl font-semibold">RYAN WARREN</h2>
            <div className="mt-2 italic">
                Park Manager<br />
                Honeyman State Park
            </div>
            <ul className="mt-4 list-disc list-outside ml-8 space-y-2">
                <li>February 9: confronted me alone same day as email exchange, an immediate escalation, catalogued first-week mistakes.</li>
                <li>March 5: told me to &quot;chew glass and swallow it,&quot; admitted I was never given the benefit of the doubt, repeatedly suggested I leave &mdash; <Link href="/coercion" className="underline text-emerald-800 hover:text-emerald-600">entire meeting recorded</Link>.</li>
                <li><Link href="/trust-broken" className="underline text-emerald-800 hover:text-emerald-600">Weaponized Logan's disclosures</Link> to mock my sexuality at day-use meeting.</li>
                <li>March 24: dismissed me by phone six days before completion using fabricated pretext, arrived one hour later to collect keys, <Link href="/dismissal" className="underline text-emerald-800 hover:text-emerald-600">admitted on camera</Link> no formal documentation existed.</li>
            </ul>

            <hr className="my-6 border-t border-gray-300" />

            <h2 className="mt-8 text-xl font-semibold">ALLISON WATSON</h2>
            <div className="mt-2 italic">
                Engagement Programs Manager<br />
                Oregon Parks &amp; Recreation Department
            </div>
            <ul className="mt-4 list-disc list-outside ml-8 space-y-2">
                <li>March 10: first contact &mdash; called about March 5 recording, informed me I was &quot;acting as an agent of the state,&quot; established notification requirements (recorded).</li>
                <li>Follow-up call: told me to &quot;get through my time,&quot; dismissed documented abuse.</li>
                <li><Link href="/expulsion" className="underline text-emerald-800 hover:text-emerald-600">Issued permanent removal letter</Link> explicitly stating removal was for speaking publicly about my experience.</li>
                <li><Link href="/trust-broken/supplemental" className="underline text-emerald-800 hover:text-emerald-600">Used Logan's disclosures</Link> to construct psychological profile, reframed analysis as &quot;apocalyptic thinking.&quot;</li>
                <li><strong>Named retaliation for protected speech in writing on agency letterhead</strong>.</li>
            </ul>

            <hr className="my-6 border-t border-gray-300" />

            <h2 className="mt-8 text-xl font-semibold">LISA SUMPTION</h2>
            <div className="mt-2 italic">
                Director<br />
                Oregon Parks &amp; Recreation Department
            </div>
            <ul className="mt-4 list-disc list-outside ml-8 space-y-2">
                <li>August: <Link href="/lisa-sumption/open-letter" className="underline text-emerald-800 hover:text-emerald-600">received comprehensive open letter</Link> with audio and video evidence.</li>
                <li><Link href="/lisa-sumption/open-letter" className="underline text-emerald-800 hover:text-emerald-600">Responded within twelve hours</Link> with procedural language, no specific accountability measures.</li>
                <li>Directed documented misconduct into internal channels. No investigations announced, no protections implemented.</li>
                <li>December: <Link href="/lisa-sumption/closure" className="underline text-emerald-800 hover:text-emerald-600">reduced comprehensive documentation to emotional processing</Link>, stated further correspondence would not &quot;lead to the resolution you're seeking.&quot;</li>
                <li><Link href="/lisa-sumption/closure" className="underline text-emerald-800 hover:text-emerald-600">Closed communication one day before full scope of Logan's betrayal and weaponization of queer identity was published</Link>.</li>
                <li><strong>Chose institutional protection over volunteer safety</strong>.</li>
                <li><strong>Failed to protect a queer unpaid volunteer from the targeted abuse of her subordinates</strong>.</li>
            </ul>

            <hr className="my-6 border-t border-gray-300" />

            <h2 className="mt-8 text-xl font-semibold">TINA KOTEK</h2>
            <div className="mt-2 italic">
                Governor<br />
                State of Oregon
            </div>
            <div className="mt-4">
                Contacted. No acknowledgment.
            </div>

            <hr className="my-6 border-t border-gray-300" />

            <div className="mb-6 p-6 border-l-4 border-black rounded-r-lg">
                <div className="text-lg sm:text-xl font-semibold leading-snug">
                    The next escalation path is federal.
                </div>
            </div>

        </SectionPage>
    );
}
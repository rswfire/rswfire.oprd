// app/(archive)/key-individuals/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import PersonLink from "@/components/PersonLink";
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
            previousPage={{ href: "/ethics", label: "A Note About Ethics" }}
            nextPage={{ href: "/timeline", label: "Timeline" }}
        >

            <h2 className="mt-8 text-xl font-semibold"><PersonLink name="Logan Bliss" label="LOGAN BLISS" /></h2>
            <div className="mt-2 italic">
                Volunteer Services Lead<br />
                Honeyman State Park
            </div>
            <ul className="mt-4 list-disc list-outside ml-8 space-y-2">
                <li>My direct supervisor, reported to <PersonLink name="Kati Baker" /> and <PersonLink name="Ryan Warren" />.</li>
                <li>Spent 90 minutes eliciting trust through reciprocal vulnerability.</li>
                <li>Transmitted confidential disclosures to <PersonLink name="Kati Baker" />, <PersonLink name="Ryan Warren" />, <PersonLink name="Allison Watson" />.</li>
                <li>Escalated situation with <PersonLink name="Kati Baker" label="Kati" /> instead of protecting me.</li>
                <li>Visibly recoiled when confronted with description of his own institutional role.</li>
                <li>Betrayed <Link href="/evidence/trust" className="underline text-emerald-800 hover:text-emerald-600">supervisory trust</Link>.</li>
            </ul>

            <hr className="my-6 border-t border-gray-300" />

            <h2 className="mt-8 text-xl font-semibold"><PersonLink name="Kati Baker" label="KATI BAKER" /></h2>
            <div className="mt-2 italic">
                Park Supervisor<br />
                Honeyman State Park
            </div>
            <ul className="mt-4 list-disc list-outside ml-8 space-y-2">
                <li>February 9: <Link href="/evidence/origin" className="underline text-emerald-800 hover:text-emerald-600">responded dismissively to operational questions</Link> about power outage protocols, escalated after receiving feedback about her tone.</li>
                <li>Receiver of confidential disclosures <PersonLink name="Logan Bliss" label="Logan" /> transmitted from me.</li>
                <li>March 5: present during <PersonLink name="Ryan Warren" label="Ryan Warren's coercive meeting" />, remained silent, intervened only when <PersonLink name="Ryan Warren" label="Ryan" /> made damaging admissions.</li>
                <li>March 18: <Link href="/evidence/surveillance" className="underline text-emerald-800 hover:text-emerald-600">received report of unidentified man interrogating me</Link>, explained as photo documentation, no photos produced.</li>
                <li>Every institutional action taken against me originated from decisions made under her direct supervision.</li>
                <li>February 9 exchange weaponized repeatedly as justification in subsequent proceedings, in both written and recorded documentation.</li>
            </ul>

            <hr className="my-6 border-t border-gray-300" />

            <h2 className="mt-8 text-xl font-semibold"><PersonLink name="Ryan Warren" label="RYAN WARREN" /></h2>
            <div className="mt-2 italic">
                Park Manager<br />
                Honeyman State Park
            </div>
            <ul className="mt-4 list-disc list-outside ml-8 space-y-2">
                <li>February 9: confronted me alone same day as email exchange, an immediate escalation, catalogued first-week mistakes.</li>
                <li>March 5: told me to &quot;chew glass and swallow it,&quot; admitted I was never given the benefit of the doubt, repeatedly suggested I leave &mdash; <Link href="/evidence/coercion" className="underline text-emerald-800 hover:text-emerald-600">entire meeting recorded</Link>.</li>
                <li><Link href="/evidence/trust" className="underline text-emerald-800 hover:text-emerald-600">Weaponized Logan's disclosures</Link> to mock my sexuality at day-use meeting.</li>
                <li>March 24: dismissed me by phone six days before completion using fabricated pretext, arrived one hour later to collect keys, <Link href="/evidence/dismissal" className="underline text-emerald-800 hover:text-emerald-600">admitted on camera</Link> no formal documentation existed.</li>
            </ul>

            <hr className="my-6 border-t border-gray-300" />

            <h2 className="mt-8 text-xl font-semibold"><PersonLink name="Allison Watson" label="ALLISON WATSON" /></h2>
            <div className="mt-2 italic">
                Engagement Programs Manager<br />
                Oregon Parks &amp; Recreation Department
            </div>
            <ul className="mt-4 list-disc list-outside ml-8 space-y-2">
                <li>March 10: first contact &mdash; called about March 5 recording, informed me I was &quot;acting as an agent of the state,&quot; established notification requirements (recorded).</li>
                <li>Follow-up call: told me to &quot;get through my time,&quot; dismissed documented abuse.</li>
                <li><Link href="/evidence/expulsion" className="underline text-emerald-800 hover:text-emerald-600">Issued permanent removal letter</Link> explicitly stating removal was for speaking publicly about my experience.</li>
                <li><Link href="/evidence/trust" className="underline text-emerald-800 hover:text-emerald-600">Used Logan's disclosures</Link> to construct psychological profile, weaponized disclosures to frame me as paranoid and delusional.</li>
                <li><strong>Named retaliation for protected speech in writing on agency letterhead</strong>.</li>
            </ul>

            <hr className="my-6 border-t border-gray-300" />

            <h2 className="mt-8 text-xl font-semibold"><PersonLink name="Lisa Sumption" label="LISA SUMPTION" /></h2>
            <div className="mt-2 italic">
                Director<br />
                Oregon Parks &amp; Recreation Department
            </div>
            <ul className="mt-4 list-disc list-outside ml-8 space-y-2">
                <li>August: <Link href="/lisa-sumption/open-letter" className="underline text-emerald-800 hover:text-emerald-600">received comprehensive open letter</Link> with audio and video evidence.</li>
                <li><Link href="/lisa-sumption/open-letter" className="underline text-emerald-800 hover:text-emerald-600">Responded within twelve hours</Link> with procedural language, no specific accountability measures.</li>
                <li>Directed documented misconduct into internal channels. No investigations announced, no protections implemented.</li>
                <li>December: <Link href="/lisa-sumption/closure" className="underline text-emerald-800 hover:text-emerald-600">closed communication</Link> using therapeutic language to neutralize a factual record &mdash; &ldquo;deeply painful for you,&rdquo; &ldquo;healing&rdquo; &mdash; without addressing a single piece of evidence. Stated further correspondence would not &ldquo;lead to the resolution you&rsquo;re seeking.&rdquo;</li>
                <li><Link href="/lisa-sumption/closure" className="underline text-emerald-800 hover:text-emerald-600">Closed communication one day before full scope of Logan's betrayal and weaponization of queer identity was published</Link>.</li>
                <li><strong>Chose institutional shielding over volunteer safety</strong>.</li>
                <li><strong>Failed to protect a queer unpaid volunteer from the targeted abuse of her subordinates</strong>.</li>
            </ul>

            <hr className="my-6 border-t border-gray-300" />

            <h2 className="mt-8 text-xl font-semibold"><PersonLink name="Tina Kotek" label="TINA KOTEK" /></h2>
            <div className="mt-2 italic">
                Governor<br />
                State of Oregon
            </div>
            <div className="mt-4">
                Contacted. No acknowledgment.
            </div>

            <hr className="my-6 border-t border-gray-300" />

            <h2 className="mt-8 text-xl font-semibold"><PersonLink name="Matthew Oliver" label="MATTHEW OLIVER" /></h2>
            <div className="mt-2 italic">
                Special Agent<br />
                U.S. Forest Service Law Enforcement &amp; Investigations<br />
                Willamette and Siuslaw National Forests
            </div>
            <ul className="mt-4 list-disc list-outside ml-8 space-y-2">
                <li>March 24, 2026: arrived at Siltcoos Work Center behind a locked federal gate with two unidentified Oregon State Police officers &mdash; on the one-year anniversary of the dismissal from Honeyman.</li>
                <li>Stated purpose was concern about &ldquo;posts online.&rdquo; Did not identify his agency.</li>
                <li>Called twenty minutes after leaving &mdash; stated &ldquo;this matter isn&rsquo;t going away.&rdquo; Attempted to deescalate after hearing legal vocabulary.</li>
                <li>Acknowledged he &ldquo;could have handled it better&rdquo; &mdash; meaning without the state police.</li>
                <li>Claimed the federal land was not restricted. Hung up when corrected.</li>
                <li>Replied &ldquo;who is this&rdquo; to a text sent minutes after he hung up &mdash; on the same number he had just been speaking on.</li>
                <li><strong>Cross-agency coordination to apply terminal pressure to a First Amendment retaliation case</strong>.</li>
            </ul>

        </SectionPage>
    );
}

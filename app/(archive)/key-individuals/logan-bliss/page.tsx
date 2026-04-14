// app/(archive)/key-individuals/logan-bliss/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import SectionPage from "@/components/SectionPage";
import PersonLink from "@/components/PersonLink";

export const metadata: Metadata = {
    title: "Logan Bliss",
    description: "Volunteer Services Lead, Honeyman State Park — elicited trust, extracted disclosures, delivered them to people who were already working to remove me.",
};

export default function LoganBlissPage() {
    return (
        <SectionPage
            title="LOGAN BLISS"
            subtitle="VOLUNTEER SERVICES LEAD"
            supplemental="HONEYMAN STATE PARK"
            previousPage={{ href: "/key-individuals", label: "Key Individuals" }}
            nextPage={{ href: "/key-individuals/kati-baker", label: "Kati Baker" }}
        >

            <blockquote className="border-l-4 border-gray-900 pl-6 py-2 mb-12 text-lg leading-relaxed">
                He elicited trust. He extracted disclosures. He delivered them to people who were already working to remove me.
            </blockquote>

            <hr className="my-6 border-t border-gray-300" />

            <h2 className="text-xl font-semibold mb-4">ROLE</h2>

            <div className="space-y-4 text-base text-gray-700 leading-relaxed mb-8">
                <div>
                    Logan Bliss was my direct supervisor at <Link href="https://stateparks.oregon.gov/index.cfm?do=park.profile&parkId=95" target="_blank" className="underline text-emerald-800 hover:text-emerald-600">Honeyman State Park</Link>. He reported to <PersonLink name="Kati Baker" /> and <PersonLink name="Ryan Warren" />. He was the person I saw most. He was the person I trusted first.
                </div>
            </div>

            <hr className="my-6 border-t border-gray-300" />

            <h2 className="text-xl font-semibold mb-4">THE DISCLOSURES</h2>

            <div className="space-y-4 text-base text-gray-700 leading-relaxed mb-8">
                <div>
                    He spent 90 minutes in the Welcome Center talking about himself &mdash; his background, his concerns, his perspectives. The following day, I reciprocated during a walk. That is how trust-building works.
                </div>
                <div>
                    Before that walk, I set a clear boundary: I told him explicitly this was not romantic for me.
                </div>
                <div>
                    During the walk, I shared:
                </div>
                <ul className="list-disc list-outside ml-8 space-y-1">
                    <li>Why I had moved into an RV and relocated to the coast.</li>
                    <li>My analysis of systemic instability and strategic thinking about resilience.</li>
                    <li>My concerns as a queer person about authoritarian targeting through institutional actors.</li>
                </ul>
                <div>
                    He disclosed all of it to <PersonLink name="Kati Baker" />, <PersonLink name="Ryan Warren" />, and <PersonLink name="Allison Watson" />.
                </div>
            </div>

            <hr className="my-6 border-t border-gray-300" />

            <h2 className="text-xl font-semibold mb-4">THE WEAPONIZATION</h2>

            <div className="space-y-6 text-base text-gray-700 leading-relaxed mb-8">
                <div>
                    <div className="text-xs font-mono uppercase tracking-widest text-gray-400 mb-1"><PersonLink name="Ryan Warren" /> &mdash; March 5, 2025</div>
                    <div>
                        During the <Link href="/evidence/coercion" className="underline text-emerald-800 hover:text-emerald-600">recorded coercion meeting</Link>, <PersonLink name="Ryan Warren" /> stated I &ldquo;thought I had a future with Logan&rdquo; &mdash; weaponizing my sexuality and distorting the boundary I had set. I am certain that insinuation entered the narrative with Logan&rsquo;s consent.
                    </div>
                </div>
                <div>
                    <div className="text-xs font-mono uppercase tracking-widest text-gray-400 mb-1"><PersonLink name="Allison Watson" /> &mdash; March 25, 2025</div>
                    <div>
                        During <Link href="/evidence/expulsion" className="underline text-emerald-800 hover:text-emerald-600">dismissal proceedings</Link>, <PersonLink name="Allison Watson" />:
                    </div>
                    <ul className="list-disc list-outside ml-8 mt-2 space-y-1">
                        <li>Questioned me about &ldquo;the end of the world&rdquo; using a mocking tone.</li>
                        <li>Weaponized my disclosures to frame me as paranoid and delusional.</li>
                        <li>Claimed on the recorded call that I had shared &ldquo;a staff member would be used to kill you when the end of the world occurs&rdquo; &mdash; a fabrication. I have never believed the world was ending. I have never said anything resembling this to anyone.</li>
                        <li>Used these disclosures to construct a psychological profile justifying permanent dismissal.</li>
                    </ul>
                    <div className="mt-2">
                        She did this using information a supervisor had a professional obligation to protect.
                    </div>
                </div>
            </div>

            <hr className="my-6 border-t border-gray-300" />

            <h2 className="text-xl font-semibold mb-4">THE PATTERN</h2>

            <div className="space-y-4 text-base text-gray-700 leading-relaxed mb-8">
                <div>
                    Intimacy followed by distance. Every time.
                </div>
                <div>
                    When I confided in him about the situation with <PersonLink name="Kati Baker" label="Kati" />, he escalated it instead of protecting me. Then he disappeared. When I applied for a job at the park, he distanced himself. The moment I withdrew my application, he reappeared &mdash; spending 90 minutes talking about himself. When I finally opened up about why I was there, what I had sacrificed, why it mattered &mdash; he responded by trying to manage my perception instead of listening. Then he distanced himself again.
                </div>
                <div>
                    At every critical moment, he failed to act with integrity. At every opportunity to lead, he chose avoidance.
                </div>
            </div>

            <hr className="my-6 border-t border-gray-300" />

            <h2 className="text-xl font-semibold mb-4">THE RECOIL</h2>

            <div className="space-y-4 text-base text-gray-700 leading-relaxed mb-8">
                <div>
                    What I actually said to Logan about authoritarian targeting was that in those contexts, people like him &mdash; institutional actors with authority &mdash; would be the mechanism through which targeting of queer people would occur.
                </div>
                <div>
                    He visibly recoiled when I said this.
                </div>
                <div>
                    At the time, I interpreted his reaction as discomfort with the subject matter. Later, I understood: he was already doing exactly what I had described &mdash; using his institutional position to target my identity.
                </div>
                <div>
                    He weaponized a boundary I set with him in good faith.
                </div>
            </div>

            <hr className="my-6 border-t border-gray-300" />

            <h2 className="text-xl font-semibold mb-4">WHAT THIS ESTABLISHES</h2>

            <div className="space-y-4 text-base text-gray-700 leading-relaxed mb-8">
                <div>
                    This is <Link href="/displacement#trust" className="underline text-emerald-800 hover:text-emerald-600">Stage 3 of the displacement framework</Link>: Trust Recruitment. Someone gets close. Someone listens. What you share in confidence is delivered to people who weaponize it.
                </div>
                <div>
                    Logan&rsquo;s disclosures gave <PersonLink name="Ryan Warren" />, <PersonLink name="Kati Baker" />, and <PersonLink name="Allison Watson" /> the ammunition they needed to justify what they had already decided to do. He enabled it. Actively. With full knowledge of what they were doing.
                </div>
                <div>
                    His choices as Volunteer Services Lead are now permanently attached to his name.
                </div>
            </div>

            <hr className="my-6 border-t border-gray-300" />

            <h2 className="text-xl font-semibold mb-4">EVIDENCE</h2>

            <div className="space-y-3">
                <Link href="/evidence/trust" className="block text-sm text-red-700 hover:underline font-mono">
                    3. Trust Recruitment &rarr;
                </Link>
                <Link href="/evidence/coercion" className="block text-sm text-red-700 hover:underline font-mono">
                    4. The Coercion Meeting &rarr;
                </Link>
                <Link href="/evidence/expulsion" className="block text-sm text-red-700 hover:underline font-mono">
                    7. Expulsion &amp; Retaliation &rarr;
                </Link>
            </div>

        </SectionPage>
    );
}

// app/(archive)/key-individuals/lisa-sumption/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import SectionPage from "@/components/SectionPage";

export const metadata: Metadata = {
    title: "Lisa Sumption",
    description: "Director, Oregon Parks & Recreation Department — had the evidence, had the authority, made a choice.",
};

export default function LisaSumptionKeyIndividualPage() {
    return (
        <SectionPage
            title="LISA SUMPTION"
            subtitle="DIRECTOR"
            supplemental="OREGON PARKS & RECREATION DEPARTMENT"
            previousPage={{ href: "/key-individuals/allison-watson", label: "Allison Watson" }}
            nextPage={{ href: "/key-individuals/tina-kotek", label: "Tina Kotek" }}
        >

            <blockquote className="border-l-4 border-gray-900 pl-6 py-2 mb-12 text-lg leading-relaxed">
                She had the evidence. She had the authority. She made a choice. Every person who abused their authority remains in their position. She shielded all of them.
            </blockquote>

            <hr className="my-6 border-t border-gray-300" />

            <h2 className="text-xl font-semibold mb-4">DOCUMENTED ACTIONS</h2>

            <div className="space-y-6 text-base text-gray-700 leading-relaxed mb-8">
                <div>
                    <div className="text-xs font-mono uppercase tracking-widest text-gray-400 mb-1">August 15, 2025</div>
                    <div>
                        I notified the director directly of the <Link href="/evidence/surveillance" className="underline text-emerald-800 hover:text-emerald-600">covert surveillance encounter</Link> &mdash; an unidentified man sent to interrogate me while I was alone, during a regional event when all rangers were away. I asked three direct questions: Do those photos exist? Were they ever published? Was this encounter logged anywhere in your internal systems? She never responded.
                    </div>
                </div>
                <div>
                    <div className="text-xs font-mono uppercase tracking-widest text-gray-400 mb-1">August 25, 2025</div>
                    <div>
                        I sent a <Link href="/lisa-sumption/open-letter" className="underline text-emerald-800 hover:text-emerald-600">comprehensive open letter</Link> with audio recordings, video documentation, email chains, and written evidence of First Amendment retaliation. She responded within twelve hours with procedural language and no commitments. No investigation was ordered. No employees were held accountable. No protections were implemented.
                    </div>
                </div>
                <div>
                    <div className="text-xs font-mono uppercase tracking-widest text-gray-400 mb-1">August &ndash; November 2025</div>
                    <div>
                        I submitted a <Link href="/lisa-sumption/public-records-request" className="underline text-emerald-800 hover:text-emerald-600">comprehensive public records request</Link>. OPRD went silent for 90 days &mdash; a violation of Oregon public records law. After a formal Notice of Violation, they claimed to have responded through an internal portal I had no access to. Cost estimate for fulfillment: tens of thousands of dollars.
                    </div>
                </div>
                <div>
                    <div className="text-xs font-mono uppercase tracking-widest text-gray-400 mb-1">December 7, 2025</div>
                    <div>
                        I sent supplemental evidence including video documentation. She never responded.
                    </div>
                </div>
                <div>
                    <div className="text-xs font-mono uppercase tracking-widest text-gray-400 mb-1">December 8, 2025</div>
                    <div>
                        She <Link href="/lisa-sumption/closure" className="underline text-emerald-800 hover:text-emerald-600">closed communication</Link>. Her letter reframed a comprehensive documented record of First Amendment retaliation, recorded coercion, and identity-based targeting as a personal emotional experience. She wrote that it had been &ldquo;deeply painful for you.&rdquo; She cited &ldquo;the frustration and hurt in your words.&rdquo; She wished me &ldquo;healing.&rdquo; She said she did not believe further correspondence would &ldquo;lead to the resolution you&rsquo;re seeking.&rdquo;
                    </div>
                    <div className="mt-2">
                        Every sentence deployed therapeutic language to neutralize a factual record. The letter did not address a single piece of evidence. It did not reference the recordings. It did not reference the First Amendment retaliation written on agency letterhead. It converted documented institutional abuse into a narrative about a person who is hurting and needs to heal.
                    </div>
                    <div className="mt-2">
                        This was one day before the final revelation concerning the weaponization of queer vulnerability was published.
                    </div>
                </div>
            </div>

            <hr className="my-6 border-t border-gray-300" />

            <h2 className="text-xl font-semibold mb-4">WHAT THIS ESTABLISHES</h2>

            <div className="space-y-4 text-base text-gray-700 leading-relaxed mb-8">
                <div>
                    Lisa Sumption is present across two stages of the displacement framework. She is the architect of <Link href="/displacement#containment" className="underline text-emerald-800 hover:text-emerald-600">institutional containment</Link> &mdash; every channel of accountability was routed through her office and neutralized there. She received direct notification of the <Link href="/displacement#surveillance" className="underline text-emerald-800 hover:text-emerald-600">surveillance encounter</Link> and chose silence over inquiry.
                </div>
                <div>
                    She was the highest-level authority notified of the abuse. Every escalation, every disclosure, every evidentiary packet reached her directly. Her responses &mdash; and her refusals &mdash; shaped the outcome of this case. Every person who abused their authority remains in their position because she chose to shield them.
                </div>
                <div>
                    Directors set institutional culture. They decide whether documented harm is investigated, minimized, or ignored. When a volunteer reports abuse, retaliation, and identity-based targeting, the director becomes the final safeguard. Lisa Sumption was given every opportunity to intervene. She chose institutional avoidance over volunteer safety.
                </div>
            </div>

            <hr className="my-6 border-t border-gray-300" />

            <h2 className="text-xl font-semibold mb-4">EVIDENCE</h2>

            <div className="space-y-3">
                <Link href="/evidence/surveillance" className="block text-sm text-red-700 hover:underline font-mono">
                    5. Assessment &amp; Surveillance &rarr;
                </Link>
                <Link href="/evidence/containment" className="block text-sm text-red-700 hover:underline font-mono">
                    8. Institutional Containment &rarr;
                </Link>
                <Link href="/lisa-sumption/open-letter" className="block text-sm text-red-700 hover:underline font-mono">
                    The Open Letter &rarr;
                </Link>
                <Link href="/lisa-sumption/public-records-request" className="block text-sm text-red-700 hover:underline font-mono">
                    The Public Records Request &rarr;
                </Link>
                <Link href="/lisa-sumption/closure" className="block text-sm text-red-700 hover:underline font-mono">
                    The Closure &rarr;
                </Link>
            </div>

        </SectionPage>
    );
}

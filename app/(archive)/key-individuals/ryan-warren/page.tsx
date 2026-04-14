// app/(archive)/key-individuals/ryan-warren/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import SectionPage from "@/components/SectionPage";
import PersonLink from "@/components/PersonLink";

export const metadata: Metadata = {
    title: "Ryan Warren",
    description: "Park Manager, Honeyman State Park — sustained psychological pressure, fabricated pretexts, dismissal without process.",
};

export default function RyanWarrenPage() {
    return (
        <SectionPage
            title="RYAN WARREN"
            subtitle="PARK MANAGER"
            supplemental="HONEYMAN STATE PARK"
            previousPage={{ href: "/key-individuals/kati-baker", label: "Kati Baker" }}
            nextPage={{ href: "/key-individuals/allison-watson", label: "Allison Watson" }}
        >

            <blockquote className="border-l-4 border-gray-900 pl-6 py-2 mb-12 text-lg leading-relaxed">
                <PersonLink name="Kati Baker" label="Kati" /> orchestrated it. He executed it without question. Everyone else operated with institutional calculation. He operated with volatility barely contained.
            </blockquote>

            <hr className="my-6 border-t border-gray-300" />

            <h2 className="text-xl font-semibold mb-4">DOCUMENTED ACTIONS</h2>

            <div className="space-y-6 text-base text-gray-700 leading-relaxed mb-8">
                <div>
                    <div className="text-xs font-mono uppercase tracking-widest text-gray-400 mb-1">February 9, 2025</div>
                    <div>
                        The same day <PersonLink name="Kati Baker" /> responded dismissively to operational questions and I named her tone in a follow-up email, Ryan Warren <Link href="/evidence/escalation" className="underline text-emerald-800 hover:text-emerald-600">confronted me alone</Link> &mdash; without my direct supervisor present. An immediate escalation. He catalogued every minor mistake I had made in my first week learning the job. Not to correct me. To establish that there would be consequences for documentation.
                    </div>
                </div>
                <div>
                    <div className="text-xs font-mono uppercase tracking-widest text-gray-400 mb-1">February 12, 2025</div>
                    <div>
                        Three days after his confrontation, I sent an email attempting to de-escalate. I offered to conform. I asked him to get to know me. I wrote in third person to soften what he was already doing to me. That email is proof I was trying to make this work while he was already escalating. What followed was six more weeks of systematic abuse.
                    </div>
                </div>
                <div>
                    <div className="text-xs font-mono uppercase tracking-widest text-gray-400 mb-1">March 5, 2025</div>
                    <div>
                        He summoned me to a public picnic table for <Link href="/evidence/coercion" className="underline text-emerald-800 hover:text-emerald-600">over an hour of sustained psychological pressure</Link>. The entire meeting was recorded. For the second time, he told me to &ldquo;chew glass and swallow it.&rdquo; He admitted &mdash; on recording &mdash; that he had never given me the benefit of the doubt. He repeatedly suggested I leave.
                    </div>
                    <div className="mt-2">
                        He <Link href="/evidence/trust" className="underline text-emerald-800 hover:text-emerald-600">weaponized Logan&rsquo;s disclosures</Link> to mock my sexuality, suggesting I &ldquo;thought I had a future&rdquo; with my male supervisor &mdash; after I had explicitly set a boundary with that supervisor and told him our relationship was not romantic.
                    </div>
                    <div className="mt-2">
                        He reframed every documented communication I had sent as concerning behavior. He refused to engage with a single substantive claim.
                    </div>
                </div>
                <div>
                    <div className="text-xs font-mono uppercase tracking-widest text-gray-400 mb-1">March 24, 2025</div>
                    <div>
                        When I wouldn&rsquo;t quit, he called me and <Link href="/evidence/dismissal" className="underline text-emerald-800 hover:text-emerald-600">dismissed me over the phone</Link>. Stated reason: a homeless man&rsquo;s lost journal, and a claim that I had made inappropriate comments about staff. I told him he was a bully. He asked if he should call the cops. One hour later he arrived at my RV to collect my keys. I recorded the interaction. On camera, he admitted no formal documentation existed for my removal. He gave me 24 hours to vacate the premises.
                    </div>
                    <div className="mt-2">
                        Six days before my scheduled completion. No paperwork. No process. No cause.
                    </div>
                </div>
            </div>

            <hr className="my-6 border-t border-gray-300" />

            <h2 className="text-xl font-semibold mb-4">WHAT THIS ESTABLISHES</h2>

            <div className="space-y-4 text-base text-gray-700 leading-relaxed mb-8">
                <div>
                    Ryan Warren is present across three stages of the displacement framework. He delivered the <Link href="/displacement#escalation" className="underline text-emerald-800 hover:text-emerald-600">escalation</Link> &mdash; confronting me alone the same day as <PersonLink name="Kati Baker" label="Kati" />&rsquo;s origin incident to establish that documentation would have consequences. He executed the <Link href="/displacement#coercion" className="underline text-emerald-800 hover:text-emerald-600">coercion</Link> &mdash; 62 minutes of sustained psychological pressure at a public picnic table, telling me to chew glass, mocking my sexuality, admitting on tape he never gave me the benefit of the doubt. He carried out the <Link href="/displacement#dismissal" className="underline text-emerald-800 hover:text-emerald-600">dismissal</Link> &mdash; by phone, with fabricated pretexts, no documentation, six days before completion.
                </div>
                <div>
                    He was not the architect. That was <PersonLink name="Kati Baker" label="Kati" />. But he was the instrument &mdash; volatile enough to deliver &ldquo;chew glass and swallow it,&rdquo; insecure enough to threaten cops when called a bully, compliant enough to execute without questioning the pattern. I saw what he was doing from the very beginning. I documented it in real time. I tried to de-escalate three days after his first confrontation. He escalated anyway &mdash; all the way to threatening police intervention against a volunteer who named his behavior. One year later, <Link href="/evidence/police" className="underline text-emerald-800 hover:text-emerald-600">police arrived at my door</Link>.
                </div>
                <div>
                    His admissions are on tape. His actions are in writing. None of it has been legally challenged.
                </div>
            </div>

            <hr className="my-6 border-t border-gray-300" />

            <h2 className="text-xl font-semibold mb-4">EVIDENCE</h2>

            <div className="space-y-3">
                <Link href="/evidence/escalation" className="block text-sm text-red-700 hover:underline font-mono">
                    2. The Escalation Response &rarr;
                </Link>
                <Link href="/evidence/coercion" className="block text-sm text-red-700 hover:underline font-mono">
                    4. The Coercion Meeting &rarr;
                </Link>
                <Link href="/evidence/dismissal" className="block text-sm text-red-700 hover:underline font-mono">
                    6. Dismissal Without Process &rarr;
                </Link>
            </div>

        </SectionPage>
    );
}

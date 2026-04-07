// app/(archive)/key-individuals/kati-baker/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import SectionPage from "@/components/SectionPage";

export const metadata: Metadata = {
    title: "Kati Baker",
    description: "Park Supervisor, Honeyman State Park — every institutional action taken against me originated from decisions made under her direct supervision.",
};

export default function KatiBakerPage() {
    return (
        <SectionPage
            title="KATI BAKER"
            subtitle="PARK SUPERVISOR"
            supplemental="HONEYMAN STATE PARK"
            previousPage={{ href: "/key-individuals/logan-bliss", label: "Logan Bliss" }}
            nextPage={{ href: "/key-individuals/ryan-warren", label: "Ryan Warren" }}
        >

            <blockquote className="border-l-4 border-gray-900 pl-6 py-2 mb-12 text-lg leading-relaxed">
                Every institutional action taken against me originated from decisions made under her direct supervision. One park supervisor who could not tolerate documentation &mdash; shielded at every level of the institution, from the park to the director to the governor&rsquo;s office, and across agency lines to federal law enforcement.
            </blockquote>

            <hr className="my-6 border-t border-gray-300" />

            <h2 className="text-xl font-semibold mb-4">THE ORIGIN</h2>

            <div className="space-y-4 text-base text-gray-700 leading-relaxed mb-8">
                <div>
                    At 6:00 AM, after I had been managing distressed guests alone since 3:00 AM during a power outage, I asked my supervisor for operational clarity. Her response felt dismissive. I named her tone in a follow-up email &mdash; a professional, documented request for the guidance I needed to do my job.
                </div>
                <div>
                    That email became the origin point of everything that followed. Not because I did anything wrong. Because I said it in writing, and it created a record.
                </div>
            </div>

            <hr className="my-6 border-t border-gray-300" />

            <h2 className="text-xl font-semibold mb-4">DOCUMENTED ACTIONS</h2>

            <div className="space-y-6 text-base text-gray-700 leading-relaxed mb-8">
                <div>
                    <div className="text-xs font-mono uppercase tracking-widest text-gray-400 mb-1">February 9, 2025</div>
                    <div>
                        <Link href="/evidence/origin" className="underline text-emerald-800 hover:text-emerald-600">Responded dismissively to operational questions</Link> about power outage protocols. Escalated after receiving documented feedback about her tone. The February 9 email exchange was weaponized repeatedly as justification in subsequent proceedings &mdash; in both written and recorded documentation.
                    </div>
                </div>
                <div>
                    <div className="text-xs font-mono uppercase tracking-widest text-gray-400 mb-1">February &ndash; March 2025</div>
                    <div>
                        Receiver of confidential disclosures Logan Bliss transmitted from me. Information shared in supervisory confidence was delivered to Baker and used to build the case for removal.
                    </div>
                </div>
                <div>
                    <div className="text-xs font-mono uppercase tracking-widest text-gray-400 mb-1">March 5, 2025</div>
                    <div>
                        Present during the <Link href="/evidence/coercion" className="underline text-emerald-800 hover:text-emerald-600">62-minute coercive meeting</Link> at the picnic table. Silent for the first 19 minutes while Ryan Warren built his case. Her first word was &ldquo;tone&rdquo; &mdash; spoken once, precisely timed, reframing every email I had ever written as threatening. She said nothing while Warren told me to chew glass and swallow it. She said nothing while he mocked my sexuality. She said nothing while he admitted he had never given me the benefit of the doubt.
                    </div>
                    <div className="mt-2">
                        When Warren&rsquo;s admission destabilized his own argument, she attacked. Fifty minutes in, she returned to the only thing they ever had: a text message from the first week of February that we had already resolved. She confirmed on tape that she had invented an interpretation of my job application withdrawal email &mdash; attaching meaning that was never there, that I had never stated, that existed in no correspondence &mdash; and brought it to that table as evidence against me.
                    </div>
                    <div className="mt-2">
                        I told her I liked her. She said &ldquo;okay.&rdquo; That is on the tape.
                    </div>
                </div>
                <div>
                    <div className="text-xs font-mono uppercase tracking-widest text-gray-400 mb-1">March 18, 2025</div>
                    <div>
                        An unidentified man approached me while I was cleaning yurts alone. No uniform. No name. No identification. He said he was &ldquo;with the park service&rdquo; and was taking photos of dirty yurts mid-clean with doors propped open. Then he pressed me with direct personal questions about leadership treatment. All rangers were away at a regional event. I <Link href="/evidence/surveillance" className="underline text-emerald-800 hover:text-emerald-600">documented the encounter with Kati the same day</Link>. She responded within the hour with a fully-formed justification: he was from IT, taking site photos. Two days later she followed up unprompted to confirm the story a second time. The cover story collapsed nearly a year later when I encountered the same man on a Forest Service trail &mdash; he is local, not IT, drives an unmarked state vehicle, and stopped coming immediately after recognizing me in uniform.
                    </div>
                </div>
            </div>

            <hr className="my-6 border-t border-gray-300" />

            <h2 className="text-xl font-semibold mb-4">WHAT THIS ESTABLISHES</h2>

            <div className="space-y-4 text-base text-gray-700 leading-relaxed mb-8">
                <div>
                    Kati Baker is present across five stages of the displacement framework. She is the <Link href="/displacement#origin" className="underline text-emerald-800 hover:text-emerald-600">origin event</Link> &mdash; the moment a written record was created, she became the decision-maker who set the entire sequence in motion. She received Logan&rsquo;s <Link href="/displacement#trust" className="underline text-emerald-800 hover:text-emerald-600">transmitted disclosures</Link>. She participated in the <Link href="/displacement#escalation" className="underline text-emerald-800 hover:text-emerald-600">escalation</Link>. She sat at the <Link href="/displacement#coercion" className="underline text-emerald-800 hover:text-emerald-600">coercion meeting</Link> and intervened only to attack. She provided the <Link href="/displacement#surveillance" className="underline text-emerald-800 hover:text-emerald-600">cover story for the surveillance encounter</Link> and reinforced it unprompted two days later.
                </div>
                <div>
                    Every level of the institution shielded her &mdash; from the park manager to the engagement programs manager to the director to the governor&rsquo;s office, and across agency lines to federal law enforcement. Nine stages of displacement because one park supervisor could not tolerate a volunteer who created a written record.
                </div>
            </div>

            <hr className="my-6 border-t border-gray-300" />

            <h2 className="text-xl font-semibold mb-4">EVIDENCE</h2>

            <div className="space-y-3">
                <Link href="/evidence/origin" className="block text-sm text-red-700 hover:underline font-mono">
                    1. The Origin Event &rarr;
                </Link>
                <Link href="/evidence/escalation" className="block text-sm text-red-700 hover:underline font-mono">
                    2. The Escalation Response &rarr;
                </Link>
                <Link href="/evidence/trust" className="block text-sm text-red-700 hover:underline font-mono">
                    3. Trust Recruitment &rarr;
                </Link>
                <Link href="/evidence/coercion" className="block text-sm text-red-700 hover:underline font-mono">
                    4. The Coercion Meeting &rarr;
                </Link>
                <Link href="/evidence/surveillance" className="block text-sm text-red-700 hover:underline font-mono">
                    5. Assessment &amp; Surveillance &rarr;
                </Link>
                <Link href="/evidence/dismissal" className="block text-sm text-red-700 hover:underline font-mono">
                    6. Dismissal Without Process &rarr;
                </Link>
            </div>

        </SectionPage>
    );
}

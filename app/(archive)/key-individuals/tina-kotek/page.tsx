// app/(archive)/key-individuals/tina-kotek/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import SectionPage from "@/components/SectionPage";

export const metadata: Metadata = {
    title: "Governor Tina Kotek",
    description: "Governor of Oregon — notified of documented abuse, identity-based targeting, and First Amendment retaliation against a gay volunteer by her state employees. Silent.",
};

export default function TinaKotekKeyIndividualPage() {
    return (
        <SectionPage
            title="TINA KOTEK"
            subtitle="GOVERNOR"
            supplemental="STATE OF OREGON"
            previousPage={{ href: "/key-individuals/lisa-sumption", label: "Lisa Sumption" }}
            nextPage={{ href: "/key-individuals/matthew-oliver", label: "Matthew Oliver" }}
        >

            <blockquote className="border-l-4 border-gray-900 pl-6 py-2 mb-12 text-lg leading-relaxed">
                Oregon&rsquo;s first openly LGBTQ+ governor. A gay volunteer documented identity-based targeting by her state employees. Her appointed director shielded the abusers. She was notified. She chose silence.
            </blockquote>

            <hr className="my-6 border-t border-gray-300" />

            <h2 className="text-xl font-semibold mb-4">DOCUMENTED ACTIONS</h2>

            <div className="space-y-6 text-base text-gray-700 leading-relaxed mb-8">
                <div>
                    <div className="text-xs font-mono uppercase tracking-widest text-gray-400 mb-1">November 18, 2025</div>
                    <div>
                        Formal complaint filed with the Governor&rsquo;s office. No response.
                    </div>
                </div>
                <div>
                    <div className="text-xs font-mono uppercase tracking-widest text-gray-400 mb-1">December 12, 2025</div>
                    <div>
                        Comprehensive documentation sent to her campaign. No response.
                    </div>
                </div>
                <div>
                    <div className="text-xs font-mono uppercase tracking-widest text-gray-400 mb-1">December 2025 &ndash; present</div>
                    <div>
                        Her campaign manager has been carbon copied on nearly every piece of correspondence in this case for half a year. Complete silence.
                    </div>
                </div>
                <div>
                    <div className="text-xs font-mono uppercase tracking-widest text-gray-400 mb-1">March 24, 2026</div>
                    <div>
                        On the one-year anniversary of the dismissal, <Link href="/evidence/police" className="underline text-emerald-800 hover:text-emerald-600">armed officers arrived at a locked federal gate</Link> on restricted federal land where I live and work as a U.S. Forest Service caretaker. One was a federal special agent. Two were unidentified state officers. They said they were concerned about what I was posting online. The governor remained silent.
                    </div>
                </div>
            </div>

            <hr className="my-6 border-t border-gray-300" />

            <h2 className="text-xl font-semibold mb-4">WHAT THIS ESTABLISHES</h2>

            <div className="space-y-4 text-base text-gray-700 leading-relaxed mb-8">
                <div>
                    Governor Kotek sits at the top of the hierarchy that shielded every actor in this case. Her appointed director received comprehensive evidence of abuse, retaliation, and identity-based targeting &mdash; and chose institutional avoidance. The governor was notified directly. She chose silence.
                </div>
                <div>
                    Her silence is not neutral. It is the final layer of institutional protection. When every internal channel has failed &mdash; from the park to the director to the governor&rsquo;s office &mdash; and the institution&rsquo;s response is to send armed officers to a volunteer&rsquo;s door, the governor&rsquo;s silence becomes the architecture that makes it possible.
                </div>
                <div>
                    She shattered a barrier that existed for 166 years. She spent her career fighting for queer Oregonians. When it was time to protect one of her own from documented abuse by her state employees, <Link href="/evidence/police" className="underline text-emerald-800 hover:text-emerald-600">police arrived at his door</Link>.
                </div>
            </div>

            <hr className="my-6 border-t border-gray-300" />

            <h2 className="text-xl font-semibold mb-4">FULL DOCUMENTATION</h2>

            <div className="space-y-3">
                <Link href="/governor-kotek" className="block text-sm text-red-700 hover:underline font-mono">
                    The Governor&rsquo;s Silence &rarr;
                </Link>
            </div>

        </SectionPage>
    );
}

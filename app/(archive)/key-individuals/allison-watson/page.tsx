// app/(archive)/key-individuals/allison-watson/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import SectionPage from "@/components/SectionPage";

export const metadata: Metadata = {
    title: "Allison Watson",
    description: "Engagement Programs Manager, OPRD — named retaliation for protected speech in writing on agency letterhead.",
};

export default function AllisonWatsonPage() {
    return (
        <SectionPage
            title="ALLISON WATSON"
            subtitle="ENGAGEMENT PROGRAMS MANAGER"
            supplemental="OREGON PARKS & RECREATION DEPARTMENT"
            previousPage={{ href: "/key-individuals/ryan-warren", label: "Ryan Warren" }}
            nextPage={{ href: "/key-individuals/lisa-sumption", label: "Lisa Sumption" }}
        >

            <blockquote className="border-l-4 border-gray-900 pl-6 py-2 mb-12 text-lg leading-relaxed">
                She heard the glass. She heard the benefit of the doubt admission. She heard a man tell her he loved the parks and came with the best intentions. She filed all of it under &ldquo;perspective&rdquo; and proceeded with the profile she arrived with. Then she put the retaliation in writing on agency letterhead.
            </blockquote>

            <hr className="my-6 border-t border-gray-300" />

            <h2 className="text-xl font-semibold mb-4">DOCUMENTED ACTIONS</h2>

            <div className="space-y-6 text-base text-gray-700 leading-relaxed mb-8">
                <div>
                    <div className="text-xs font-mono uppercase tracking-widest text-gray-400 mb-1">March 10, 2025</div>
                    <div>
                        First contact. She called about the March 5 recording. She told me I had been &ldquo;acting as an agent of the state&rdquo; when I recorded the coercion meeting &mdash; reframing my self-protection as a violation. She told me to &ldquo;get through my time.&rdquo; She dismissed documented abuse.
                    </div>
                </div>
                <div>
                    <div className="text-xs font-mono uppercase tracking-widest text-gray-400 mb-1">March 25, 2025</div>
                    <div>
                        She called to contain the situation after my dismissal. I <Link href="/evidence/expulsion" className="underline text-emerald-800 hover:text-emerald-600">recorded the call</Link>. 30 minutes and 56 seconds. I told her I was still processing and didn&rsquo;t have full clarity yet. She said okay and proceeded with her agenda.
                    </div>
                    <div className="mt-2">
                        She framed the dismissal as &ldquo;no longer mutually beneficial&rdquo; and confirmed it would not be overturned &mdash; answering a question I never asked. She cited unnamed sources reporting &ldquo;dissatisfaction with park staff.&rdquo; When pressed for specifics, the first concrete reason she produced was a comment I made about wanting a veteran&rsquo;s lost journal returned to its owner.
                    </div>
                    <div className="mt-2">
                        She weaponized <Link href="/evidence/trust" className="underline text-emerald-800 hover:text-emerald-600">Logan&rsquo;s disclosures</Link> to frame me as paranoid and delusional. She claimed I had shared that &ldquo;a staff member would be used to kill you when the end of the world occurs&rdquo; &mdash; a fabrication. I have never believed the world was ending. I have never said anything resembling this to anyone. I told her I had no idea what she was talking about. She proceeded anyway.
                    </div>
                    <div className="mt-2">
                        I told her about the glass. About the benefit of the doubt admission. About the coercive exit attempts. About Logan&rsquo;s boundary violations. She responded to each with &ldquo;okay&rdquo; and moved to the next item on her agenda. At minute 26, I built her a door &mdash; I acknowledged learning, offered to adjust, named my positive intent. She said &ldquo;thank you for sharing that&rdquo; and proceeded to what was always going to happen next.
                    </div>
                    <div className="mt-2">
                        She promised a review process. Steps. A timeline. Friday at the latest. When I told her I was planning to book a site at Tugman before my next volunteer assignment there, she confirmed I could &mdash; as a citizen, no concerns. She knew exactly why I was going to Tugman. She knew the volunteer placement was the entire point. She knew what she was about to do to it.
                    </div>
                </div>
                <div>
                    <div className="text-xs font-mono uppercase tracking-widest text-gray-400 mb-1">March 26, 2025</div>
                    <div>
                        I sent her a detailed letter documenting the full pattern of misconduct. Hours later, she permanently expelled me from all Oregon State Parks volunteer programs. She put the reason in writing:
                    </div>
                    <div className="mt-4 ml-4 p-4 bg-gray-50 border-l-4 border-emerald-600 italic">
                        &ldquo;the public comments made about staff regarding your volunteer service, were not in line with expectations.&rdquo;
                    </div>
                    <div className="mt-4">
                        That is First Amendment retaliation. On agency letterhead. In her own words.
                    </div>
                    <div className="mt-4">
                        <a
                            className="inline-block px-4 py-2 text-sm font-semibold text-emerald-700 border border-emerald-700 rounded-lg hover:bg-emerald-700 hover:text-white transition-colors"
                            href="/oprd-dismissal.pdf"
                            download
                        >
                            Download Dismissal Letter (PDF) &darr;
                        </a>
                    </div>
                </div>
            </div>

            <hr className="my-6 border-t border-gray-300" />

            <h2 className="text-xl font-semibold mb-4">WHAT THE CALL REVEALS</h2>

            <div className="space-y-4 text-base text-gray-700 leading-relaxed mb-8">
                <div>
                    The March 25 call is recorded in full and documented in the <Link href="/evidence/expulsion" className="underline text-emerald-800 hover:text-emerald-600">expulsion evidence page</Link>. It reveals a method:
                </div>
                <ul className="list-disc list-outside ml-8 space-y-2">
                    <li>I say something accurately. She reframes it as something else. I correct the reframe. She proceeds with the reframe anyway. This pattern repeats from minute five through minute thirty.</li>
                    <li>She filed every piece of testimony I gave her &mdash; the glass, the coercion, the admissions, the boundary violations &mdash; under &ldquo;perspective.&rdquo; Not evidence. Not documented abuse requiring investigation. Perspective.</li>
                    <li>She deployed a fabrication &mdash; &ldquo;a staff member would be used to kill you when the end of the world occurs&rdquo; &mdash; and when I told her I had no idea what she was talking about, she proceeded anyway.</li>
                    <li>She promised a review process, steps, a timeline, Friday at the latest. She confirmed I could go to Tugman &mdash; as a citizen. She knew exactly why I was going there. She knew the volunteer placement was the entire point. She knew what she was about to do to it.</li>
                    <li>Nothing from the call was usable. The profile she constructed didn&rsquo;t land. The reaction she needed never came. She went with the video instead. And called it disparaging. On agency letterhead. The day after.</li>
                </ul>
            </div>

            <hr className="my-6 border-t border-gray-300" />

            <h2 className="text-xl font-semibold mb-4">WHAT THIS ESTABLISHES</h2>

            <div className="space-y-4 text-base text-gray-700 leading-relaxed mb-8">
                <div>
                    Allison Watson is present across four stages of the displacement framework. She received Logan&rsquo;s <Link href="/displacement#trust" className="underline text-emerald-800 hover:text-emerald-600">transmitted disclosures</Link> and weaponized them to frame me as paranoid and delusional. She participated in the <Link href="/displacement#coercion" className="underline text-emerald-800 hover:text-emerald-600">coercion</Link> &mdash; her March 10 call reframing my self-protection as a violation. She authorized the <Link href="/displacement#surveillance" className="underline text-emerald-800 hover:text-emerald-600">surveillance</Link> cover story at the institutional level. She executed the <Link href="/displacement#expulsion" className="underline text-emerald-800 hover:text-emerald-600">expulsion</Link> &mdash; permanently removing me from all Oregon State Parks volunteer programs and putting the reason in writing: protected speech.
                </div>
                <div>
                    She is the person who wrote the retaliation into the permanent record. Not by accident. Not in ambiguous language. She stated explicitly that my removal was for speaking publicly about my experience. That is the definition of First Amendment retaliation.
                </div>
                <div>
                    Her professional background is in Diversity, Equity, and Inclusion &mdash; she held that role at a university before joining OPRD. She built a career on protecting vulnerable people from exactly what she did to me. She knew better. That makes it worse.
                </div>
                <div>
                    The 48-hour sequence &mdash; containment call, vulnerable letter attempting accountability, retaliation in writing citing protected speech &mdash; is documented in full. Every piece is permanent. The pattern is undeniable.
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
                <Link href="/evidence/surveillance" className="block text-sm text-red-700 hover:underline font-mono">
                    5. Assessment &amp; Surveillance &rarr;
                </Link>
                <Link href="/evidence/expulsion" className="block text-sm text-red-700 hover:underline font-mono">
                    7. Expulsion &amp; Retaliation &rarr;
                </Link>
            </div>

        </SectionPage>
    );
}

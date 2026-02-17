// app/(archive)/evidence/containment/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import SectionPage from "@/components/SectionPage";
import Email from "@/components/archive/Email";

export const metadata: Metadata = {
    title: "Containment",
    description: "August 2025–February 2026 - Every institutional response to accountability has been an attempt to contain, not correct.",
};

export default function ContainmentPage() {
    return (
        <SectionPage
            title="CONTAINMENT"
            subtitle="LISA SUMPTION, DIRECTOR &amp; J.R. COLLIER, DEPUTY DIRECTOR"
            previousPage={{ href: "/evidence/expulsion", label: "Expulsion" }}
            nextPage={{ href: "/lisa-sumption", label: "The Director's Decisions" }}
            summary="Every institutional response to documented abuse has followed the same logic: not correction, not accountability, not investigation — containment."
        >

            <h2 className="text-xl font-semibold">THE PATTERN</h2>

            <div className="mt-4">
                After expulsion, every mechanism of accountability was attempted: direct correspondence, an open letter to the Director, a comprehensive public records request, formal complaints to the Governor's office.
            </div>

            <div className="mt-4">
                Each attempt was met with the same institutional response: procedural deflection, silence, reframing, and — when legal exposure was named directly — the deployment of senior authority to restrict communication.
            </div>

            <div className="mt-4">
                This is not bureaucratic incompetence. This is a consistent, coordinated effort to limit the damage of documented constitutional violations without correcting them.
            </div>

            <div className="mt-4">
                That is containment.
            </div>

            <hr className="my-6 border-t border-gray-300" />

            <h2 className="text-xl font-semibold">AUGUST 25, 2025 — THE OPEN LETTER</h2>

            <div className="mt-4">
                <Link href="/lisa-sumption/open-letter/" className="underline text-emerald-800 hover:text-emerald-600">An open letter sent to Director Lisa Sumption</Link> with comprehensive documentation of the abuse, the retaliation, and the constitutional violation. She responded within 12 hours.
            </div>

            <div className="mt-4">
                Not with an investigation. Not with acknowledgment. With procedural language and no commitments.
            </div>

            <div className="mt-4">
                Response time: 12 hours. Substance: none. That is the tell.
            </div>

            <hr className="my-6 border-t border-gray-300" />

            <h2 className="text-xl font-semibold">AUGUST 22 — NOVEMBER 20, 2025 — THE PUBLIC RECORDS REQUEST</h2>

            <div className="mt-4">
                <Link href="/lisa-sumption/public-records-request/" className="underline text-emerald-800 hover:text-emerald-600">A comprehensive public records request submitted August 22</Link>. OPRD went silent for 90 days — a violation of Oregon public records law.
            </div>

            <div className="mt-4">
                After a formal Notice of Violation on November 15, OPRD responded claiming they had posted a response to an internal portal on August 29 — a portal I had no access to. Cost estimate for fulfillment: tens of thousands of dollars.
            </div>

            <div className="mt-4">
                Ninety days of silence. Then a portal. Then a price designed to end the inquiry.
            </div>

            <div className="mt-4">
                That is containment.
            </div>

            <hr className="my-6 border-t border-gray-300" />

            <h2 className="text-xl font-semibold">DECEMBER 8, 2025 — THE CLOSURE</h2>

            <div className="mt-4">
                <Link href="/lisa-sumption/closure/" className="underline text-emerald-800 hover:text-emerald-600">Director Sumption's final response</Link> reframed the entire documented record as emotional processing. She closed communication.
            </div>

            <div className="mt-4">
                This is the same tactic used at every prior stage: reframe the documentation, dismiss the documenter, close the channel. What changed at the Director level is only the seniority of the person doing it.
            </div>

            <hr className="my-6 border-t border-gray-300" />

            <h2 className="text-xl font-semibold">JANUARY 16, 2026 — 42 U.S.C. § 1983</h2>

            <div className="mt-4">
                <Link href="/correspondence/institution/allison-watson-2026-01-16/" className="underline text-emerald-800 hover:text-emerald-600">Formal notice sent to Allison Watson</Link> citing personal liability under 42 U.S.C. § 1983 for First Amendment retaliation. The expulsion letter — written by Watson, citing protected speech as grounds for permanent removal — is direct evidence of a clearly established constitutional violation. Qualified immunity does not apply.
            </div>

            <div className="mt-4">
                Demands: reversal of expulsion in writing, independent investigation, acknowledgment of the constitutional violation, removal of all documentation framing protected speech as grounds for dismissal.
            </div>

            <div className="mt-4">
                Deadline: March 26, 2026. One year from expulsion.
            </div>

            <hr className="my-6 border-t border-gray-300" />

            <h2 className="text-xl font-semibold">FEBRUARY 13, 2026 — THE COLLIER LETTER</h2>

            <div className="mt-4">
                Three weeks after the 1983 notice, Deputy Director J.R. Collier wrote — not to address the substance of the constitutional claim, but to restrict access to the person whose own written words are the primary evidence against her.
            </div>

            <div className="mt-4">
                The letter characterizes documented First Amendment retaliation as dissatisfaction with "the decision to end volunteer service." It makes no substantive response to any claim. It instructs that future correspondence will be forwarded to Department of Justice counsel.
            </div>

            <Email
                from="J.R. Collier, Deputy Director, Oregon Parks and Recreation Department"
                to="Robert Samuel White"
                date="February 13, 2026"
            >
<pre className="whitespace-pre-wrap">{`Dear Mr. White (rsw@rswfire.com),

The messages you have recently sent to OPRD Statewide Programs Coordinator Allison Watson have been forwarded to me.  We understand you are not satisfied with the decision to end your volunteer service with OPRD.  The agency also recognizes that you may be filing a legal action.

In light of this, OPRD is implementing a structured process for correspondence related to this matter. Effective immediately, please direct any inquiries or additional information exclusively to me,  @ jr.collier@oprd.oregon.gov .  Please do not communicate further with Ms. Watson or other OPRD staff, and please do not expect any responses from them.
When and if you decide to file any legal action, your correspondence will be forwarded to our Department of Justice counsel.

Sincerely,

JR Collier`}</pre>
            </Email>

            <div className="mt-4">
                A deputy director mobilized to insulate the person whose own written words document the constitutional violation. No investigation. No acknowledgment. A gate.
            </div>

            <div className="mt-4">
                That is containment.
            </div>

            <hr className="my-6 border-t border-gray-300" />

            <h2 className="text-xl font-semibold">FEBRUARY 13–17, 2026 — THE RESPONSE</h2>

            <div className="mt-4">
                Collier's authority to restrict communication with a public agency was rejected the same day his letter arrived. The "structured process" is an internal routing matter. It has no bearing on a citizen's right to contact a public agency about an ongoing constitutional violation.
            </div>

            <div className="mt-4">
                On February 14, <Link href="/correspondence/institution/jr-collier-2026-02-14/" className="underline text-emerald-800 hover:text-emerald-600">the full pattern was named directly</Link> — to Collier, to every named individual, and to the Governor — in a single correspondence. Every tactic documented in sequence. Every reframe named for what it is.
            </div>

            <div className="mt-4">
                On February 17, <Link href="/correspondence/institution/defining-abuse-2026-02-16/" className="underline text-emerald-800 hover:text-emerald-600">an open declaration defining abuse</Link> was sent to all named individuals, Commissioners, and Governor Kotek. 327 days of constitutional violation. Deadline: March 26, 2026.
            </div>

            <hr className="my-6 border-t border-gray-300" />

            <h2 className="text-xl font-semibold">WHAT THIS ESTABLISHES</h2>

            <div className="mt-4 space-y-4">
                <div>
                    <strong>Containment is not correction.</strong> Every response has been designed to limit exposure, not address harm.
                </div>
                <div>
                    <strong>Escalation confirms pattern.</strong> Deploying a deputy director in response to a 1983 notice is not routine. It is an institution recognizing legal exposure and choosing protection over accountability.
                </div>
                <div>
                    <strong>The constitutional violation is ongoing.</strong> Every day the expulsion stands unreversed, the violation continues. The clock has not stopped.
                </div>
                <div>
                    <strong>Containment has a limit.</strong> It ends when the documentation does — which is to say, it doesn't.
                </div>
            </div>

        </SectionPage>
    );
}

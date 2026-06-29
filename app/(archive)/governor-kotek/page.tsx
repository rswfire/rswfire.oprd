// app/(archive)/governor-kotek/page.tsx
import type { Metadata } from "next";
import { Landmark, Map } from "lucide-react";
import Link from "next/link";
import SectionPage from "@/components/SectionPage";
import PersonLink from "@/components/PersonLink";

export const metadata: Metadata = {
    title: "Governor Tina Kotek",
    description: "An open letter to Oregon's first openly LGBTQ+ governor, informing her of documented targeting of a gay volunteer by state employees under her administration, and her place in the record.",
    openGraph: {
        title: "The Governor's Silence",
        description: "An open letter to Oregon's first openly LGBTQ+ governor, informing her of documented targeting of a gay volunteer by state employees under her administration, and her place in the record.",
    }
};

export default function GovernorKotekPage() {
    return (
        <SectionPage
            title="GOVERNOR TINA KOTEK"
            subtitle="AN OPEN LETTER TO THE GOVERNOR"
            supplemental=""
            previousPage={{ href: "/lisa-sumption", label: "The Director's Decisions" }}
            nextPage={{ href: "/faq", label: "Frequently Asked Questions" }}
        >
            <div className="mt-4 text-base leading-relaxed">

                <div className="space-y-4">
                    <div>Governor Kotek,</div>
                    <div>I am writing to notify you, in writing and on the record, of documented misconduct by Oregon Parks and Recreation Department employees, and to ask you a single question.</div>
                    <div>I am a former Oregon State Parks volunteer. Every fact stated below is supported by recordings, video, emails, or official documents, and is independently verifiable. I am not asking you to take my word for any of it. I am asking you to look.</div>
                </div>

                <hr className="my-6 border-t border-gray-300" />

                <h2 className="mb-4 text-xl font-semibold">THE FACTS</h2>

                <div className="space-y-4">
                    <div>1. In early 2025, I served as an unpaid volunteer at Honeyman State Park.</div>
                    <div>2. On February 9, 2025, a park supervisor responded dismissively to my operational questions about power-outage protocols. I sent a follow-up email naming her tone. That same day, the park manager confronted me alone, cataloging first-week mistakes. The institution's response to a single email began that day and never stopped.</div>
                    <div>3. On March 5, 2025, the park manager and the supervisor summoned me to a public picnic table for over an hour of psychological pressure. The park manager told me to "chew glass and swallow it," admitted he had never given me the benefit of the doubt, and repeatedly suggested I leave. In that same meeting, the park manager mocked my sexuality, stating I "thought I had a future" with a supervisor I had explicitly told otherwise. I recorded the entire meeting.</div>
                    <div>4. On March 10, 2025, the program manager called me regarding that recording. She told me I had been "acting as an agent of the state," reframing my documentation of my own treatment as a violation. In a follow-up call the same day, she instructed me to "get through my time" and dismissed the documented abuse.</div>
                    <div>5. On March 18, 2025, while I was cleaning yurts alone during a regional event when all rangers were away, an unidentified man approached and interrogated me about park leadership. The encounter was later explained by the supervisor as "IT photo documentation." No photos were ever produced. The supervisor, who was at the regional event, responded within the hour with a fully-formed justification.</div>
                    <div>6. On March 24, 2025, the park manager dismissed me by phone, six days before my scheduled completion date. One hour later he came to my RV to collect keys and confirmed on camera that no formal documentation existed for the removal.</div>
                    <div>7. On March 25, 2025, the program manager called me for thirty-one minutes. Using disclosures extracted a month earlier in confidence, and a fabricated claim that I had said a staff member would be used to kill me when the end of the world occurred, she constructed me as paranoid and delusional. I told her, on the recording, that I did not know what she was talking about. It had never happened. She filed my documented testimony as "perspective." She promised a review by Friday. The outcome had already been decided. I recorded the call.</div>
                    <div>8. On March 26, 2025, hours after I sent a letter attempting reconciliation, the program manager permanently banned me from every Oregon State Parks volunteer program. She put the reason in writing, on agency letterhead: my public comments about staff. Not my conduct. My speech.</div>
                    <div>9. In August 2025, I sent Director Lisa Sumption comprehensive documentation: audio recordings, video, email chains, and written evidence of First Amendment retaliation. She responded within twelve hours with procedural language and no commitments. No investigation was ordered. No employee was held accountable. No protection was implemented.</div>
                    <div>10. In the same period, I submitted a public records request for documentation related to my treatment. OPRD did not respond for ninety days. When pressed, the agency claimed it had posted a response to an internal portal I could not access, then issued a cost estimate in the tens of thousands of dollars. I was unable to obtain the records. I withdrew the request.</div>
                    <div>11. In December 2025, Director Sumption closed communication. Her letter did not address a single piece of evidence. Instead, it assigned me an emotional state I had never expressed — "deeply painful for you," "frustration and hurt," "healing" — and stated that further correspondence would not lead to "the resolution you're seeking." I had not come to her in distress. I had come with evidence. The director of the agency responsible for the conduct invented a feeling, attributed it to me, and used it to replace the record I had actually submitted. It is the same method her subordinate used: construct a version of the man that is easier to dismiss than the documentation he brought.</div>
                    <div>12. In early 2026, I encountered the same unidentified man from March 18, 2025, on a Forest Service trail on my regular caretaking route. He drives a state vehicle with no agency markings. He is local. He is not IT. And he has not returned since. The supervisor's cover story did not survive his presence on that trail.</div>
                    <div>13. On March 24, 2026 — the one-year anniversary of my dismissal — three armed officers came to the locked federal gate where I live and work as a U.S. Forest Service caretaker. One was a federal agent from my own agency; the other two were unidentified state officers. They stated they were concerned about my online posts regarding Oregon State Parks. A state matter — speech about a state agency — was brought to a federal agency's door and made the basis for an armed visit, a visit my agency had no independent reason to make. The authorizing party and the identities of the two state officers have not been disclosed. Oregon State Police responded to my records request stating they had no responsive records, then backtracked and made one record available — if I pay for it.</div>
                </div>

                <hr className="my-6 border-t border-gray-300" />

                <h2 className="mb-4 text-xl font-semibold">WHAT YOU WERE TOLD, AND WHEN</h2>

                <div className="space-y-4">
                    <div>14. November 18, 2025: I filed a formal complaint with your office. No acknowledgment.</div>
                    <div>15. December 13, 2025: I sent comprehensive documentation to your campaign. No acknowledgment.</div>
                    <div>16. February 14, 2026: I sent a full declaration naming every event above, in sequence, to you and to every individual responsible. No acknowledgment.</div>
                    <div>17. May 4, 2026: I sent a final statement to Oregon State Parks and copied you and your campaign. No acknowledgment.</div>
                    <div>18. From your level of the institution, I have received nothing — not even acknowledgment that this exists.</div>
                </div>

                <hr className="my-6 border-t border-gray-300" />

                <h2 className="mb-4 text-xl font-semibold">THE CONTRADICTION</h2>

                <div className="space-y-4">
                    <div>Every act above is the same act.</div>
                    <div>When I documented how I was treated, I was told I had been "acting as an agent of the state." When I spoke about it, I was permanently banned in writing for my "public comments." When I kept the record, the evidence was reframed as paranoia, then as emotional distress. When the record remained, armed officers were sent to where I live and work.</div>
                    <div>At every stage, the institution has treated my documentation of its conduct as the offense. But documenting the conduct of a public agency is not an offense. It is a right. It is the First Amendment.</div>
                    <div>It is the right that every other right depends on. And it is a right you claim to champion.</div>
                    <div>Each attempt to punish me for exercising it has produced one more documented instance of the institution punishing protected speech — one more entry in the very record they are trying to suppress.</div>
                    <div>I will not stop documenting a public agency failing its most basic function. Every act of suppression becomes part of the record of suppression. That is the contradiction they cannot resolve, and it is the reason this record continues to grow — and reaches your office now.</div>
                    <div>This archive is that record. I am its steward. It documents what was done, who did it, and who, having been notified, chose silence. It is permanent and independently hosted. It does not come down.</div>
                    <div>You are the final party it documents.</div>
                </div>

                <hr className="my-6 border-t border-gray-300" />

                <h2 className="mb-4 text-xl font-semibold">THE QUESTION</h2>

                <div className="space-y-4">
                    <div>Does a gay volunteer who documented retaliation and identity-based targeting by state employees deserve an independent investigation?</div>
                    <div>Yes or no.</div>
                    <div>I am asking for one thing, as I have from the beginning: an independent investigation into documented misconduct at Honeyman State Park, and accountability for the failure to address it.</div>
                    <div>Your answer is being recorded. So is its absence.</div>
                </div>

                {/* SIGNATURE */}
                <div className="mt-12 pt-8 border-t border-gray-200 text-[15px] text-gray-800 leading-relaxed">
                    <div className="font-semibold text-gray-900">Robert Samuel White</div>
                    <div className="mt-1 text-gray-600">
                        <div>Founder, Autonomy Realms</div>
                        <div>Owner, eNetwizard Inc. Since 1998</div>
                        <div>Former Oregon State Parks Volunteer</div>
                        <div>Current U.S. Forest Service Caretaker</div>
                        <div>Steward, oprdvolunteerabuse.org</div>
                    </div>
                </div>

            </div>
        </SectionPage>
    );
}

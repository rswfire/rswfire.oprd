// app/(archive)/evidence/final-letter/page.tsx
import type { Metadata } from "next";
import SectionPage from "@/components/SectionPage";

export const metadata: Metadata = {
    title: "The Final Letter",
    description: "March 11, 2026 — Day 350. The origin event was an expectation of basic human dignity. This is what it produced.",
};

export default function FinalLetterPage() {
    return (
        <SectionPage
            title="THE FINAL LETTER"
            subtitle="MARCH 11, 2026 — DAY 350"
            previousPage={{ href: "/evidence/containment", label: "Institutional Containment" }}
            nextPage={{ href: "/attorney", label: "Seeking Representation" }}
            summary="The origin event was a professional email from a volunteer who expected to be treated like a human being. Eight evidence pages document what this institution chose to do about that expectation. This is what it produced."
        >

            <h2 className="text-xl font-semibold">FROM ORIGIN TO RESPONSE</h2>

            <div className="mt-4">
                On February 9, 2025, a volunteer sent a professional email at 6:00 AM after managing distressed guests alone since 3:00 AM during a power outage.
            </div>

            <div className="mt-4">
                He asked for operational clarity. He named a dismissive tone. He expected to be treated like a human being.
            </div>

            <div className="mt-4">
                That expectation — not what he said, not how he said it, not the documentation that followed — was the thing this institution could not tolerate.
            </div>

            <div className="mt-4">
                Eight evidence pages document what they chose to do about it.
            </div>

            <div className="mt-6 font-semibold tracking-widest text-sm uppercase">
                This is what it produced.
            </div>

            <hr className="my-10 border-t border-gray-300" />

            <div className="mt-4">
                In March 2025, <a href="/evidence/surveillance" className="underline opacity-60 hover:opacity-100 transition-opacity">an unidentified man</a> was sent to assess and intimidate a volunteer working alone at Honeyman State Park. He was not in uniform. He carried no identification. He asked personal questions about how leadership was treating me — while all rangers were away for a regional event.
            </div>

            <div className="mt-4">
                Nearly a year later, I encountered him on a Forest Service trail — part of my regular route as caretaker. He stopped coming after that.
            </div>

            <div className="mt-4 italic">
                He lost something real he doesn't deserve to lose. If he ever finds this page — he is welcome on those trails.
            </div>

            <div className="mt-4">
                This letter was addressed to the people who sent him.
            </div>

            <hr className="my-10 border-t border-gray-300" />

            {/* THE LETTER */}
            <div className="my-10">
                <style>{`
                    .final-letter {
                        position: relative;
                        border-left: 3px solid currentColor;
                        padding: 2.5rem 2.5rem 2.5rem 2.75rem;
                    }

                    .final-letter::before {
                        content: "MARCH 11, 2026 · DAY 350 · FINAL CORRESPONDENCE";
                        display: block;
                        font-size: 0.85rem;
                        letter-spacing: 0.2em;
                        text-transform: uppercase;
                        opacity: 0.4;
                        margin-bottom: 2rem;
                        font-family: monospace;
                    }

                    .final-letter-body {
                        font-family: Georgia, 'Times New Roman', serif;
                        font-size: 1.15rem;
                        line-height: 1.4;
                        white-space: pre-wrap;
                    }

                    .final-letter-signature {
                        margin-top: 2.5rem;
                        padding-top: 2rem;
                        border-top: 1px solid currentColor;
                        opacity: 0.7;
                    }

                    .final-letter-signature-name {
                        font-size: 1rem;
                        font-weight: 700;
                        letter-spacing: 0.05em;
                        font-family: Georgia, serif;
                        margin-bottom: 0.75rem;
                    }

                    .final-letter-signature-titles {
                        font-family: monospace;
                        font-size: 0.85rem;
                        letter-spacing: 0.05em;
                        line-height: 1.8;
                        opacity: 0.8;
                    }

                    .final-letter-signature-titles span {
                        display: block;
                    }

                    .final-letter-closer {
                        display: block;
                        font-size: 0.65rem;
                        letter-spacing: 0.2em;
                        text-transform: uppercase;
                        opacity: 0.35;
                        margin-top: 2.5rem;
                        font-family: monospace;
                        text-align: right;
                    }
                `}</style>

                <div className="final-letter">
                    <div className="final-letter-body">{`Your man lost something sacred by participating in what you asked of him. He lost access to something he loved.

Because just like Ryan, just like Allison, just like Lisa, just like JR, just like Stefanie, they walked into something they didn't understand.

Because they took one lying supervisor's word over actual evidence that proved it was a lie.

I'm walking that trail right now.

I feel bad for him.

Do you?

Do any of you?

You never understood what you were dealing with. Because none of you ever looked at me as a human being.

You saw an economic unit to extract from. A volunteer with no power. Someone you could bully and intimidate into silence, into precarity, into erasure.

You could not have been more wrong.

And Lisa, what I built from $7 is proof.

You tried to abuse a Systems Architect.

Who told you he maps edges and systems.

The door is now closed for all of you.

But tell your man he is welcome on our trails. I would never want him to live without them.`}</div>

                    <div className="final-letter-signature">
                        <div className="final-letter-signature-name">Robert Samuel White</div>
                        <div className="final-letter-signature-titles">
                            <div>U. S. Forest Service Caretaker</div>
                            <div>Oregon Dunes National Recreation Area</div>
                            <div>Siltcoos Corridor</div>
                            <div>Founder of Autonomy Realms</div>
                            <div>Owner of eNetwizard, Inc. Since 1998</div>
                            <div>Former Oregon State Parks Volunteer</div>
                            <div>Steward of oprdvolunteerabuse.org</div>
                        </div>
                    </div>

                    <span className="final-letter-closer">No further correspondence.</span>
                </div>
            </div>

        </SectionPage>
    );
}

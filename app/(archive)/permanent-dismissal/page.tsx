// app/(archive)/permanent-dismissal/page.tsx
import type { Metadata } from "next";
import SectionPage from "@/components/SectionPage";
import Email from "@/components/archive/Email";

export const metadata: Metadata = {
    title: "Permanent Dismissal",
    description: "March 27, 2025 - Dismissed for speaking publicly about being dismissed. Written admission of retaliation.",
};

export default function PermanentDismissalPage() {
    return (
        <SectionPage
            title="PERMANENT DISMISSAL"
            subtitle="MARCH 27, 2025 — THE DOCUMENT THAT GAVE THEM AWAY"
        >

            <div className="mt-4 text-lg">
                <strong>
                    This was my first attempt at institutional belonging. They didn't just harm a volunteer
                    — they corrupted someone's introduction to civic participation. The betrayal I had to
                    metabolize operates at the level of citizenship itself. That is a stain they will never
                    be able to wash off.
                </strong>
            </div>

            <div className="mt-4">It's important to be precise about the sequence.</div>
            <div>
                Ryan dismissed me from Honeyman on March 24. That dismissal came suddenly, without
                paperwork, and without cause — documented on video.
            </div>

            <div className="mt-4">
                Only after that rupture, once Ryan had already dismissed me without paperwork or cause,
                did I make a video describing my experience. It wasn't performance — it was necessity. I
                had been ordered to vacate the park, and I needed financial support to comply with that
                demand. Speaking publicly was how I ensured I could leave safely, with fuel, food, and
                stability intact.
            </div>

            <div className="mt-4">
                The video wasn't provocation. It was survival. It was the act of telling the truth, not
                to attack the system, but to explain to my own community what had just happened — and to
                ask for help in meeting the consequences they imposed.
            </div>

            <div className="mt-4">
                That necessity — the very thing they created by expelling me — became the justification
                for expelling me again, permanently.
            </div>
            <div>
                Days later, that act of truth-telling became the justification for my permanent dismissal
                from all Oregon State Parks volunteer programs.
            </div>

            <div className="mt-4">
                Allison Watson sent me a formal email and letter. The language was vague and polished,
                but the fingerprint is unmistakable:
            </div>

            <div className="mt-4">
                "While you are able to share your opinion, perspective, and experience as an individual
                with the public, the public comments made about staff regarding your volunteer service,
                were not in line with expectations set forth in the agreement."
            </div>

            <div className="mt-4">This was not about conduct at the park.</div>
            <div>This was not about my work — which had been praised.</div>
            <div>This was about the act of speaking.</div>

            <div className="mt-4">I was removed from Honeyman for refusing to fracture.</div>
            <div>I was removed from the program for refusing to stay silent.</div>

            <div className="mt-4">The irony is brutal:</div>
            <div>I documented my dismissal.</div>
            <div>And they dismissed me again for documenting it.</div>

            <div className="mt-4">This letter is proof.</div>
            <div>
                It ties my permanent exclusion not to behavior on duty, but to public witness afterward.
            </div>
            <div>
                It is a written acknowledgment that Oregon State Parks punishes whistleblowing — not
                misconduct.
            </div>

            <h3 className="mt-8 text-lg font-semibold">📝 Dismissal Email from Allison Watson</h3>

            <Email
                from="Allison Watson, Volunteer Engagement Coordinator"
                to="Sam White"
                date="March 27, 2025"
            >
                <div>Hello Sam,</div>

                <div className="mt-4">
                    After reviewing the dismissal as a park host from Jessie M. Honeyman State Park, your
                    service, and communications with and about OPRD these past three months, we've
                    identified that this volunteer relationship is no longer mutually beneficial.
                </div>

                <div className="mt-4">
                    As stated in your volunteer service agreement, we require volunteers to "Engage in
                    welcoming interactions with the public, staff, and other volunteers: volunteers must
                    be … professional towards…other volunteers, employees….at all times." While you are
                    able to share your opinion, perspective, and experience as an individual with the
                    public, the public comments made about staff regarding your volunteer service, were not
                    in line with expectations set forth in the agreement. At this time, OPRD has found that
                    you are not able to professionally represent the volunteer park host program.
                </div>

                <div className="mt-4">
                    As part of your dismissal, any future assignments you had scheduled will be cancelled.
                    If you have not already returned your volunteer uniform items at Honeyman, please drop
                    uniform items off on the bench outside of Umpqua Lighthouse State Park's office door.
                </div>

                <div className="mt-4">
                    Thank you for the time you did dedicate to support our state park system and state park
                    properties. I wish you the best in any other volunteer opportunities you may pursue with
                    other organizations. Please find an official letter of dismissal and your volunteer
                    agreement attached to this email.
                </div>

                <div className="mt-4">Respectfully,</div>

                <div className="mt-4">Allison Watson</div>
            </Email>

            <div className="mt-8 text-center">
                <div className="font-bold italic">
                    This is the loop: dismissed, then punished for naming the dismissal. A logic so thin it
                    reveals itself.
                </div>
                <div className="italic mt-2">
                    On a letterhead so hastily written, the date itself has a typo.
                </div>
                <div className="mt-4">
                    <a
                        className="text-emerald-700 underline hover:text-emerald-800"
                        href="/oprd-dismissal.pdf"
                        download
                    >
                        Download the Dismissal Letter (PDF)
                    </a>
                </div>
            </div>

        </SectionPage>
    );
}
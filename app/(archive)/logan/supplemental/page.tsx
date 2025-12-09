// app/(archive)/logan/supplemental/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import SectionPage from "@/components/SectionPage";

export const metadata: Metadata = {
    title: "Logan Bliss: Supplemental Documentation",
    description: "On 'The End of the World' - How personal vulnerability was weaponized as evidence of instability.",
};

export default function LoganSupplementalPage() {
    return (
        <SectionPage
            title="LOGAN BLISS"
            subtitle="SUPPLEMENTAL DOCUMENTATION"
            supplemental="AUGUST 24, 2025"
        >

            <div className="mt-4">
                During my March 25 call with OPRD Engagement Programs Manager Allison Watson, she asked me
                about my views on &quot;the end of the world&quot; using the same mocking tone Ryan Warren had used at the day-use
                meeting.
            </div>

            <div className="mt-4">
                I recognized instantly where that came from and what its purpose was. From
                that moment onward, I knew Allison was not listening to me &mdash; she was documenting
                my expulsion. I told her I observe instability in our systems, nothing
                more, because it was deeply inappropriate for her to ask such a question.
            </div>

            <div className="mt-4">
                This question represented inappropriate professional conduct and a weaponization of
                personal information I had shared in confidence with my direct supervisor Logan Bliss during
                a vulnerable moment.
            </div>

            <h2 className="mt-8 text-xl font-semibold">The Original Context</h2>

            <div className="mt-4">
                Logan Bliss and I took a walk during my time at Honeyman. He had just spent 90 minutes in the
                Welcome Center talking about himself &mdash; his background, his concerns, his perspectives. The
                following day, I reciprocated by sharing why I had moved into an RV and relocated to the
                coast, and what I had sacrificed to make that transition.
            </div>

            <div className="mt-4">
                This was not conspiracy theorizing. It was pattern recognition based on observable
                systemic instabilities &mdash; economic volatility, climate change impacts, social fragmentation,
                and institutional breakdown. These are documented realities, not fringe beliefs.
            </div>

            <h2 className="mt-8 text-xl font-semibold">The Distortion</h2>

            <div className="mt-4">
                What I shared as reasoned analysis of systemic risk was later reframed by Allison Watson
                as apocalyptic thinking, used to pathologize my character and justify institutional
                dismissal.
            </div>

            <h2 className="mt-8 text-xl font-semibold">The Targeting Claim</h2>

            <div className="mt-4">
                Allison Watson also claimed I told Logan Bliss &quot;I was worried he would kill me.&quot; This is a significant
                distortion of what I actually said.
            </div>

            <div className="mt-4">
                What I shared was my concern that in an authoritarian phase &mdash; a documented historical
                pattern &mdash; my sexuality would be weaponized against me, and that people like him
                (institutional actors, authority figures) would be the mechanism through which such
                targeting would occur.
            </div>

            <div className="mt-4">
                Logan Bliss visibly recoiled when I said this. At the time, I interpreted his reaction as
                discomfort with the subject matter. Later, I understood: he was actively doing exactly
                what I had described &mdash; using his institutional position to target my identity.
            </div>

            <h2 className="mt-8 text-xl font-semibold">The Betrayal</h2>

            <div className="mt-4">
                This walk represents the moment Logan Bliss betrayed my trust. It was the only time during my
                service that I opened up to him personally, sharing both my strategic thinking and my
                vulnerabilities as a queer person navigating institutional spaces.
            </div>

            <div className="mt-4">
                He took that vulnerability and weaponized it &mdash; first in internal communications, then in
                the dismissal process where personal confidences became &quot;behavioral concerns.&quot;
            </div>

            <h2 className="mt-8 text-xl font-semibold">The Pattern</h2>

            <div className="mt-4">This represents a classic institutional tactic:</div>

            <ol className="list-decimal list-outside ml-8 mt-4 space-y-2">
                <li>Elicit vulnerability through false intimacy and reciprocal sharing.</li>
                <li>Document private thoughts as professional concerns.</li>
                <li>Pathologize reasonable analysis as extremist thinking.</li>
                <li>Weaponize identity-based fears as evidence of instability.</li>
                <li>Use personal confidences to justify institutional retaliation.</li>
            </ol>

            <h2 className="mt-8 text-xl font-semibold">Professional Misconduct</h2>

            <div className="mt-4">
                Allison Watson's use of this information violated basic professional boundaries:
            </div>

            <ul className="list-disc list-outside ml-8 mt-4 space-y-2">
                <li>
                    <strong>Inappropriate inquiry:</strong> Asking about personal beliefs unrelated to
                    volunteer service.
                </li>
                <li>
                    <strong>Confidentiality breach:</strong> Using information shared privately with
                    direct supervisor.
                </li>
                <li>
                    <strong>Pathologizing:</strong> Framing systemic analysis as mental health concerns.
                </li>
                <li>
                    <strong>Identity targeting:</strong> Using sexuality-based fears to justify dismissal.
                </li>
            </ul>

            <h2 className="mt-8 text-xl font-semibold">The Strategic Purpose</h2>

            <div className="mt-4">This line of questioning served to:</div>

            <ul className="list-disc list-outside ml-8 mt-4 space-y-2">
                <li>Distract from documented management misconduct.</li>
                <li>Reframe institutional accountability as personal instability.</li>
                <li>Create a psychological profile justifying permanent dismissal.</li>
                <li>Weaponize vulnerability shared in confidence.</li>
            </ul>

            <h2 className="mt-8 text-xl font-semibold">Why This Matters</h2>

            <div className="mt-4">
                When volunteers share personal context with supervisors, that information should remain
                confidential unless it directly impacts service safety. Using personal beliefs and
                identity-based concerns to justify retaliation creates a chilling effect that discourages
                authentic relationships and honest communication.
            </div>

            <h2 className="mt-8 text-xl font-semibold">The Deeper Violation</h2>

            <div className="mt-4">
                Beyond professional misconduct, this represents a fundamental betrayal of human trust.
                I shared my deepest concerns about institutional targeting of queer people with someone
                who was, in that moment, engaged in institutional targeting of me as a queer person.
            </div>

            <div className="mt-4">
                The irony is brutal: I warned Logan Bliss about exactly what he was doing to me.
            </div>

            <div className="mt-8 pt-6 border-t border-gray-300">
                <Link href="/logan" className="text-emerald-700 hover:underline">
                    ← Back to Logan Bliss
                </Link>
            </div>

        </SectionPage>
    );
}
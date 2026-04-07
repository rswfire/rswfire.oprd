// app/(archive)/resources/volunteers/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import SectionPage from "@/components/SectionPage";
import PrimaryTransmission from "@/components/PrimaryTransmission";
import VolunteersIntro from "@/components/VolunteersIntro";
import { NAMING_DISPLACEMENT_TRANSMISSION } from "@/data/20260403";

export const metadata: Metadata = {
    title: "For Volunteers",
    description: "If you found this page, something probably happened to you. What happened to you has a name.",
};

const stages = [
    {
        stage: "1",
        title: "You documented something.",
        body: "A complaint. A concern. A tone in an email. The moment you created a written record, you became a problem to be managed — not because of what you did, but because of what the record could do."
    },
    {
        stage: "2",
        title: "You tried to repair it.",
        body: "You apologized. You complied. You offered to reset. You did everything a reasonable person does when they want to stay. The institution escalated anyway. That escalation was not a response to your behavior. The decision had already been made."
    },
    {
        stage: "3",
        title: "Someone got close to you.",
        body: "A supervisor. A coordinator. Someone who asked questions, listened, drew you out. What you shared in confidence was delivered to people who were already building a case against you. That is not a coincidence. That is a tactic."
    },
    {
        stage: "4",
        title: "They called a meeting.",
        body: "It was framed as support. As expectations. As a chance to reset. It was sustained pressure designed to make you resign voluntarily. Voluntary departure is the cleanest outcome for the institution — no paperwork, no process, no record."
    },
    {
        stage: "5",
        title: "Someone came to assess you.",
        body: "You may not have recognized it at the time. An unfamiliar face. Questions that felt personal. The institution needed to know whether the case it was building would hold. This is not standard practice. It requires authorization."
    },
    {
        stage: "6",
        title: "You were removed without process.",
        body: "No documentation. No cause. No appeal. You were given hours — not days — to vacate. The absence of process is intentional. It leaves you with nothing to challenge and no record to point to."
    },
    {
        stage: "7",
        title: "The reason was protected speech.",
        body: "They may have buried it in other language. Or they may have written it plainly, as they did here, believing you had no recourse. If you were removed because of what you said — publicly, in writing, on record — that is First Amendment retaliation. That has a legal name."
    },
    {
        stage: "8",
        title: "Every channel failed.",
        body: "You escalated. You contacted leadership. You filed complaints. Each layer protected the one below it. The mechanism that was supposed to correct abuse was used to contain it instead. That is not a malfunction. That is the system working as designed."
    },
    {
        stage: "9",
        title: "They used force.",
        body: "Not everyone gets here. But if the record you built was strong enough to threaten them — they may have. A visit. A call. A warning. The goal is to make the cost of continuing feel unsurvivable. It isn't. But they need you to believe it is."
    }
]

const evidenceLinks = [
    { label: "1. The Origin Event", href: "/evidence/origin" },
    { label: "2. The Escalation Response", href: "/evidence/escalation" },
    { label: "3. Trust Recruitment", href: "/evidence/trust" },
    { label: "4. The Coercion Meeting", href: "/evidence/coercion" },
    { label: "5. Assessment & Surveillance", href: "/evidence/surveillance" },
    { label: "6. Dismissal Without Process", href: "/evidence/dismissal" },
    { label: "7. Expulsion & Retaliation", href: "/evidence/expulsion" },
    { label: "8. Institutional Containment", href: "/evidence/containment" },
    { label: "9. Police Intimidation", href: "/evidence/police" },
]

export default function ForVolunteersPage() {
    return (
        <SectionPage
            title="FOR VOLUNTEERS"
            subtitle="YOU'RE NOT ALONE"
            previousPage={{ href: "/displacement", label: "The Displacement Framework" }}
            nextPage={{ href: "/evidence", label: "Evidence" }}
        >

            <VolunteersIntro />

            <hr className="border-gray-200 mb-12" />

            <div className="mb-12">
                <PrimaryTransmission transmission={NAMING_DISPLACEMENT_TRANSMISSION} />
            </div>

            <hr className="border-gray-200 mb-12" />

            <h2 className="text-xl font-semibold text-gray-900 mb-6">
                IF YOU FOUND THIS PAGE, SOMETHING PROBABLY HAPPENED TO YOU.
            </h2>

            <p className="text-base text-gray-700 leading-relaxed mb-6">
                Maybe you were removed without explanation. Maybe you were told it was a personality conflict, a misunderstanding, a mutual decision. Maybe you were pressured to leave before your term ended. Maybe you were told nothing at all — just locked out, keys collected, gone.
            </p>

            <p className="text-base text-gray-700 leading-relaxed mb-12">
                What happened to you has a name. This page is here to give it to you.
            </p>

            <hr className="border-gray-200 mb-12" />

            <h2 className="text-xl font-semibold text-gray-900 mb-6">
                THE DISPLACEMENT FRAMEWORK
            </h2>

            <p className="text-base text-gray-700 leading-relaxed mb-8">
                Displacement is not a single act. It is a sequence — applied in stages, designed to remove a volunteer from the ground they stand on before they can build a record that holds. Every stage below is documented in this archive. If you recognize yourself in any of them, you are not imagining it.
            </p>

            <div className="space-y-8 mb-16">
                {stages.map((item) => (
                    <div key={item.stage} id={`stage-${item.stage}`} className="border-l-4 border-gray-200 pl-6 scroll-mt-48">
                        <p className="text-xs font-mono text-red-700 uppercase tracking-widest mb-1">
                            Stage {item.stage}
                        </p>
                        <h3 className="text-base font-semibold text-gray-900 mb-2">
                            {item.title}
                        </h3>
                        <p className="text-base text-gray-700 leading-relaxed">
                            {item.body}
                        </p>
                    </div>
                ))}
            </div>

            <hr className="border-gray-200 mb-12" />

            <h2 id="you-should-know" className="text-xl font-semibold text-gray-900 mb-6 scroll-mt-48">
                WHAT YOU SHOULD KNOW
            </h2>

            <div className="space-y-6 mb-16">
                <div>
                    <h3 className="text-base font-semibold text-gray-900 mb-2">You have First Amendment protections.</h3>
                    <p className="text-base text-gray-700 leading-relaxed">
                        If you were removed because of speech — a complaint, a video, a social media post, an email — that is retaliation for protected speech. It does not matter that you were unpaid. The First Amendment does not require a paycheck.
                    </p>
                </div>
                <div>
                    <h3 className="text-base font-semibold text-gray-900 mb-2">The absence of a paper trail is not the absence of a case.</h3>
                    <p className="text-base text-gray-700 leading-relaxed">
                        Institutions remove volunteers without documentation precisely because they know it makes challenges harder. But your own records — emails, texts, notes, recordings — are evidence. What you remember matters. What you wrote matters.
                    </p>
                </div>
                <div>
                    <h3 className="text-base font-semibold text-gray-900 mb-2">You are not alone in this pattern.</h3>
                    <p className="text-base text-gray-700 leading-relaxed">
                        What happened to you did not happen because of something uniquely wrong with you. It happened because the system has no mechanism to protect unpaid labor from the people who manage it. That is a structural failure. This archive exists to document it.
                    </p>
                </div>
                <div>
                    <h3 className="text-base font-semibold text-gray-900 mb-2">Documentation is your only protection.</h3>
                    <p className="text-base text-gray-700 leading-relaxed">
                        If you are still inside the situation: write everything down. Date it. Keep copies outside any institutional system. Record what the law allows. The record you build now is the only thing that survives displacement.
                    </p>
                </div>
                <div>
                    <h3 className="text-base font-semibold text-gray-900 mb-2">Needing help is not weakness.</h3>
                    <p className="text-base text-gray-700 leading-relaxed">
                        You gave your time freely to an institution that was supposed to steward it with integrity. When it didn&rsquo;t, you were left without union protection, without HR access, without recourse. Asking for help after that is not weakness. It is honest.
                    </p>
                </div>
            </div>

            <hr className="border-gray-200 mb-12" />

            <h2 className="text-xl font-semibold text-gray-900 mb-6">
                THE FULL RECORD
            </h2>

            <p className="text-base text-gray-700 leading-relaxed mb-8">
                Every stage of the displacement framework is documented in this archive — with recordings, correspondence, and primary documents. If you are trying to understand what happened to you, the evidence pages are the place to start.
            </p>

            <div className="space-y-3 mb-16">
                {evidenceLinks.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className="block text-sm text-red-700 hover:underline font-mono"
                    >
                        {link.label} →
                    </Link>
                ))}
            </div>

            <hr className="border-gray-200 mb-12" />

            <h2 className="text-xl font-semibold text-gray-900 mb-4">
                CONTACT
            </h2>

            <p className="text-base text-gray-700 leading-relaxed mb-4">
                If this archive reflects your experience and you want to share it — or if you have information relevant to this case — you can reach the author directly.
            </p>

            <p className="text-base text-gray-700 mb-2">
                <span className="font-semibold">Robert Samuel White</span>
            </p>
            <p className="text-sm text-gray-500 mb-1">Former Oregon State Parks Volunteer</p>
            <p className="text-sm text-gray-500 mb-4">Current U.S. Forest Service Caretaker</p>
            <p className="text-sm text-gray-500 mb-1">P.O. Box 334</p>
            <p className="text-sm text-gray-500 mb-4">Reedsport, Oregon 97467</p>
            <a href="mailto:rsw@rswfire.com" className="text-red-700 hover:underline text-sm font-mono">
                rsw@rswfire.com
            </a>

            <div className="mt-16 border-t border-gray-200 pt-10">
                <p className="text-sm text-gray-500 leading-relaxed">
                    This archive exists for those who have been told they imagined it. For those about to walk into something similar. For the future, when denial no longer holds.
                </p>
            </div>

        </SectionPage>
    )
}

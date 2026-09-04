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

            {/* WHAT IT MEANS TO VOLUNTEER */}
            <div className="mt-8 w-full p-8 rounded-xl bg-white border border-slate-200 text-base">

                <h2 className="font-bold text-lg text-center tracking-wide">
                    WHAT IT MEANS TO VOLUNTEER
                </h2>

                <hr className="my-6 border-t border-gray-300" />

                <div className="space-y-4">

                    <div>The word smuggles something in. It suggests that because you are there by choice, you need no protection. That whatever happens to you, you chose it, and can simply choose otherwise. It treats the decision to arrive as proof that you are free to leave.</div>

                    <div>That is not what volunteering in a public agency is.</div>

                    <div>Volunteers provide a public service to public institutions that need them. It is civic participation. It is how a citizen engages directly with the function of government, on public land, in the open, for no pay.</div>

                    <div>For the institution, it is labor they could not otherwise afford. Volunteers cover the shortfall. We clean the facilities, maintain the trails, meet the visitors, and hold the ground the agency cannot staff. The work is not incidental to how these places operate. In many parks and forests, it is how they operate.</div>

                    <div>And we receive none of the benefits or protections that the people supervising us receive.</div>

                    <div>No union. No human resources access. No grievance process. No appeal. No progressive discipline. No requirement that a reason be given. A supervisor&rsquo;s account of you is the only account, and there is no mechanism by which it can be questioned.</div>

                </div>

                <h3 className="mt-8 text-lg font-bold">You cannot always leave</h3>

                <div className="mt-4 space-y-4">

                    <div>The idea that a volunteer can simply walk away assumes a relationship that ends at the property line. Many of these do not.</div>

                    <div>We live on the land we steward. The position comes with a site, a hookup, a place to live. It is arranged months in advance and often built around a long-term commitment. Leaving is not resignation from a role. It is losing your housing, on a date you did not choose, with somewhere to be next and no time to arrange it.</div>

                    <div>Every park and every forest is different. What does not vary is the dependence. Your entire experience, and often your entire situation, rests on fair supervision. On the assumption that the person with authority over your placement will not use that authority against you.</div>

                    <div>When that assumption fails, there is nothing underneath it.</div>

                </div>

                <h3 className="mt-8 text-lg font-bold">What happened to me</h3>

                <div className="mt-4 space-y-4">

                    <div>I served as an unpaid volunteer at Honeyman State Park in early 2025. I asked an operational question during a power outage and followed up with an email that named a dismissive tone. That email created a record, and the record is what everything after it responded to.</div>

                    <div>I was confronted alone. Personal disclosures were drawn out of me and passed up the chain. I was held at a picnic table for sixty-two minutes and told to chew glass and swallow it. My sexuality was used against me. I was pressured to resign and I did not.</div>

                    <div>I was dismissed by phone six days before my term ended. The park manager arrived at my RV within the hour to collect keys and gave me twenty-four hours to vacate. Two days later I was permanently expelled from every Oregon State Parks volunteer program, in writing, on agency letterhead, for documenting my treatment.</div>

                    <div>A year later, on the anniversary of that dismissal, armed officers arrived at a locked gate where I live and work. My date of birth reached the police record from a volunteer file.</div>

                    <div>Every mechanism that could have protected me was pointed the other way.</div>

                </div>

                <h3 className="mt-8 text-lg font-bold">The instrument</h3>

                <div className="mt-4 space-y-4">

                    <div>Oregon has a statewide policy, 50.010.02, Violence-Free Workplace. It applies to every executive branch agency.</div>

                    <div>Section 7 names volunteers among those who may be barred and terminated under it.</div>

                    <div>Section 8 prohibits retaliation against those who report workplace violence. It names employees only.</div>

                    <div>The same document brings volunteers inside its enforcement reach and leaves them outside its protection. It can be pointed at us. It offers us nothing pointed back.</div>

                    <div>Twice I reported conduct that meets that policy&rsquo;s own definition of workplace violence. Once in writing. Once on the call where I was dismissed. Both times, the half of the instrument that would have protected me did not reach me. The half that could remove me did.</div>

                </div>

                <h3 className="mt-8 text-lg font-bold">Why this is here</h3>

                <div className="mt-4 space-y-4">

                    <div>This is not a claim that volunteers deserve special treatment. It is a claim that we are inside the structure, doing the work the structure depends on, and that the protections stop at a line drawn around the people who are paid.</div>

                    <div>That line is not an oversight in one park. It is written into a policy that governs an entire executive branch, and it has been in force since at least November 1, 2024.</div>

                    <div>I am one volunteer who kept the records, and that is the only reason this archive is possible.</div>

                    <div>If you volunteer for a public agency, document what happens to you, and do it with integrity, and you will already be on the right side of any action they take against you.</div>

                </div>

            </div>

            <VolunteersIntro />

            <hr className="border-gray-200 mb-12" />

            <div className="mb-12">
                <PrimaryTransmission transmission={NAMING_DISPLACEMENT_TRANSMISSION} />
            </div>

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

// app/(archive)/for-volunteers/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import SectionPage from "@/components/SectionPage";
import VolunteersIntro from "@/components/VolunteersIntro";
import RetaliationMap from "@/components/RetaliationMap";

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

export default function ForVolunteersPage() {
    return (
        <SectionPage
            title="FOR VOLUNTEERS"
            subtitle="YOU'RE NOT ALONE"
            previousPage={{ href: "/faq", label: "Frequently Asked Questions" }}
            nextPage={{ href: "/reading", label: "Selected Reading" }}
        >

            <div className="mt-8 p-6 bg-emerald-50 border-l-4 border-emerald-600 rounded-r-lg">
                <div className="text-base font-semibold mb-4">ON THIS PAGE:</div>
                <ul className="space-y-2">
                    <li>
                        <a href="#how-they-work" className="text-emerald-700 underline hover:text-emerald-600">How they work</a>
                        <ul className="mt-2 ml-4 space-y-1.5 border-l border-emerald-200 pl-4 text-sm">
                            <li><a href="#the-ladder" className="text-emerald-700 underline hover:text-emerald-600">The escalation ladder</a></li>
                            <li><a href="#the-dictionary" className="text-emerald-700 underline hover:text-emerald-600">The reframing dictionary</a></li>
                            <li><a href="#the-network" className="text-emerald-700 underline hover:text-emerald-600">How an FYI becomes force</a></li>
                        </ul>
                    </li>
                    <li><a href="#displacement-framework" className="text-emerald-700 underline hover:text-emerald-600">The displacement framework</a></li>
                    <li><a href="#you-should-know" className="text-emerald-700 underline hover:text-emerald-600">What you should know</a></li>
                    <li><a href="#real-process" className="text-emerald-700 underline hover:text-emerald-600">What a real process looks like</a></li>
                    <li><a href="#get-help" className="text-emerald-700 underline hover:text-emerald-600">If this is happening to you</a></li>
                </ul>
            </div>

            <hr className="border-gray-200 mb-12" />

            <VolunteersIntro />

            <div className="mt-12" />

            <h2 id="how-they-work" className="text-xl font-semibold text-gray-900 mb-4 scroll-mt-48">
                HOW THEY WORK
            </h2>
            <p className="text-base text-gray-700 leading-relaxed mb-8">
                Everything in this archive was one institution&rsquo;s conduct toward one
                person. But the shape of it is not unique, and it is not random. It is a
                machine with parts that can be named. This is the map of it, built from the
                record, so that the next person can recognize the room they are standing in
                before the door closes.
            </p>

            <RetaliationMap />

            <hr className="border-gray-200 my-12" />

            <h2 id="displacement-framework" className="text-xl font-semibold text-gray-900 mb-6 scroll-mt-48">
                THE DISPLACEMENT FRAMEWORK
            </h2>

            <div className="space-y-8 mb-4">
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

            <p className="text-base text-gray-700 leading-relaxed mb-16">
                Every stage, documented, on{" "}
                <Link href="/displacement" className="text-emerald-800 underline hover:text-emerald-600">
                    the displacement framework page
                </Link>
                .
            </p>

            <hr className="border-gray-200 mb-12" />

            <h2 id="you-should-know" className="text-xl font-semibold text-gray-900 mb-6 scroll-mt-48">
                WHAT YOU SHOULD KNOW
            </h2>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mb-16">
                {[
                    ["You have First Amendment protections.", "If you were removed because of speech — a complaint, a video, a social media post, an email — that is retaliation for protected speech. It does not matter that you were unpaid. The First Amendment does not require a paycheck."],
                    ["The absence of a paper trail is not the absence of a case.", "Institutions remove volunteers without documentation precisely because they know it makes challenges harder. But your own records — emails, texts, notes, recordings — are evidence. What you remember matters. What you wrote matters."],
                    ["You are not alone in this pattern.", "What happened to you did not happen because of something uniquely wrong with you. It happened because the system has no mechanism to protect unpaid labor from the people who manage it. That is a structural failure. This archive exists to document it."],
                    ["Documentation is your only protection.", "If you are still inside the situation: write everything down. Date it. Keep copies outside any institutional system. Record what the law allows. The record you build now is the only thing that survives displacement."],
                    ["Needing help is not weakness.", "You gave your time freely to an institution that was supposed to steward it with integrity. When it didn’t, you were left without union protection, without HR access, without recourse. Asking for help after that is not weakness. It is honest."],
                ].map(([title, body]) => (
                    <div key={title} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                        <h3 className="text-base font-semibold text-gray-900 mb-2">{title}</h3>
                        <p className="text-sm text-gray-700 leading-relaxed">{body}</p>
                    </div>
                ))}
            </div>

            <hr className="border-gray-200 mb-12" />

<h2 id="real-process" className="text-xl font-semibold text-gray-900 mb-4 scroll-mt-48">
                WHAT A REAL PROCESS LOOKS LIKE
            </h2>
            <p className="text-base text-gray-700 leading-relaxed mb-8">
                None of this required a new law. Every protection below already exists for
                paid employees of the same agencies. On September 5, 2026, I asked the
                Director of Oregon Parks and Recreation to extend the ordinary machinery of
                fairness to the people who make the parks possible.
            </p>

            <ul className="space-y-4 mb-6">
                {[
                    ["Written standards.", "A volunteer should be able to read, in advance, what conduct can end their service. Not a supervisor's private judgment. A written standard, applied the same way to everyone."],
                    ["Notice.", "Before removal, a volunteer should be told what they are alleged to have done, in writing, with enough specificity to answer it."],
                    ["A hearing before displacement.", "For many volunteers the position is their housing. No one should lose the ground they live on by a phone call, with twenty-four hours to vacate and no paperwork. A hearing must come first."],
                    ["An appeal that reaches past the accuser.", "The supervisor whose account is in question cannot also be the only judge of it. An appeal has to reach someone with no stake in the original decision."],
                    ["Protection from retaliation for documentation.", "Recording your own treatment, filing a complaint, or speaking publicly about how you were treated must be protected, not punished. The moment documentation becomes the offense, the process is the abuse."],
                ].map(([title, body]) => (
                    <li key={title} className="rounded-lg border-l-4 border-emerald-700 bg-emerald-50/50 px-5 py-4">
                        <h3 className="text-base font-semibold text-gray-900">{title}</h3>
                        <p className="mt-1 text-sm leading-relaxed text-gray-700">{body}</p>
                    </li>
                ))}
            </ul>

            <p className="text-sm text-gray-500 leading-relaxed mb-16">
                Read the letter that asked for these directly:{" "}
                <Link href="/accountability/oprd/01M1T0PHFRWQNERYJENF7MVRZV" className="text-emerald-800 underline hover:text-emerald-600">
                    The choices are still yours
                </Link>
                .
            </p>

            <hr className="border-gray-200 mb-12" />

            <h2 id="get-help" className="text-xl font-semibold text-gray-900 mb-4 scroll-mt-48">
                IF THIS IS HAPPENING TO YOU
            </h2>

            <p className="text-base text-gray-700 leading-relaxed mb-4">
                I built this because there was no one for me to turn to. There can be one for
                you. If you recognize your situation in this record &mdash; whether it is
                unfolding now or ended years ago &mdash; you can write to me directly. I am not
                a lawyer and cannot give legal advice. What I can do is help you understand
                what you are looking at, how to document it so it holds, and that you are not
                imagining it and not alone. There is no cost, and nothing you send is
                published without your word.
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

        </SectionPage>
    )
}

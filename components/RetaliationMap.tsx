// components/RetaliationMap.tsx
//
// A diagnostic map of how institutional retaliation actually operates,
// built from this record and meant for the next person inside one. Three
// linked panels: the escalation ladder (what they do, in order), the
// reframing dictionary (their words vs. the fact underneath), and the
// network (how a soft agency's FYI becomes hard-agency force, and why the
// agencies defend as one). Static and presentational; stacks on mobile.
import Link from "next/link";

// ─── 1. The escalation ladder ────────────────────────────────────────────────
// Ordered cheapest-to-costliest. Each rung is reached only when the one
// above it fails to make the person stop.
const LADDER: {
    move: string;
    tell: string;
    record: string;
    href: string;
    tone: string;
}[] = [
    {
        move: "Ignore",
        tell: "Silence. No acknowledgment, no answer, correspondence that vanishes into no reply. Silence is not an absence of a decision. It is the decision.",
        record: "Letters to the Director and the Governor's office, unanswered since November 2025.",
        href: "/accountability/governor",
        tone: "border-slate-300 bg-slate-50",
    },
    {
        move: "Route",
        tell: "You are handed to a process. A portal. A form. A ticket number. A single designated recipient. The point is not to answer you. It is to wear you down until you give up.",
        record: "A records portal locked to the requester; a $12.50 fee; a cost estimate in the tens of thousands.",
        href: "/accountability/oprd",
        tone: "border-slate-400 bg-slate-50",
    },
    {
        move: "Characterize",
        tell: "Your words are relabeled. What you documented becomes your “tone.” What you proved becomes your “perspective.” What you published becomes “concerning.” The facts do not change. The frame around them does.",
        record: "“Tone” at the picnic table. “Perspective” in the dismissal call. “Concerning things online” in the police file.",
        href: "/evidence/coercion",
        tone: "border-amber-400 bg-amber-50/60",
    },
    {
        move: "Contain",
        tell: "You are walled off. “Direct all correspondence to one person.” “Do not contact staff.” A “structured process” that structures you out of every room where a decision is made.",
        record: "The Deputy Director's letter directing all correspondence to himself alone.",
        href: "/accountability/oprd",
        tone: "border-orange-400 bg-orange-50/60",
    },
    {
        move: "Scare",
        tell: "Force enters as suggestion. A mention of lawyers, of the Department of Justice, of “consequences.” A visit. A call that says the matter “is not going away.” Nothing charged. Everything implied.",
        record: "A park manager asking whether he should call the police; a program manager warning that recording a meeting was itself a problem.",
        href: "/evidence/coercion",
        tone: "border-red-500 bg-red-50/70",
    },
    {
        move: "Force",
        tell: "Actual state power, and only ever last. A threat assessment. Surveillance. Officers at your door. It arrives when everything cheaper has failed to make you stop, and its own file will show there was never a predicate for it.",
        record: "A press captain's threat-assessment order; a criminal unit; satellite-view map screenshots of the residence; armed officers at a locked gate.",
        href: "/evidence/police",
        tone: "border-red-700 bg-red-100/70",
    },
];

// ─── 2. The reframing dictionary ─────────────────────────────────────────────
const DICTIONARY: { word: string; means: string }[] = [
    { word: "Tone", means: "A written record they cannot answer." },
    { word: "Concerning", means: "True, and public." },
    { word: "Perspective", means: "A documented fact they will not address." },
    { word: "FYI / situational awareness", means: "A referral with no predicate." },
    { word: "Veiled threats", means: "Speech they cannot charge." },
    { word: "Deeply painful for you", means: "A feeling assigned to you, standing in for the evidence they will not address." },
    { word: "For the Forest Service", means: "A pretext written into a record to reach you." },
    { word: "No longer mutually beneficial", means: "You created a record." },
    { word: "Not in our system", means: "A record that exists, not yet admitted." },
];

// ─── 3. The network ──────────────────────────────────────────────────────────
const CHAIN: { node: string; role: string; via: string }[] = [
    { node: "The soft agency", role: "Volunteers, parks, public goodwill. No union, no HR, no grievance path. Its working currency is image, so it has no machinery to answer a complaint — only to manage how the complaint looks.", via: "routes a publicity problem, not a safety concern, to …" },
    { node: "The press office", role: "Government & Media Relations. Its job is reputation, not investigation. A safety concern would go to dispatch or a detective. This did not.", via: "orders a threat assessment “asap,” supplying no predicate, to …" },
    { node: "Major Crimes", role: "A criminal unit now assigned a citizen with no crime. It reviews, finds nothing, and executes anyway — because the order, not the evidence, is what it answers to.", via: "pulls in, to build a file it was told to build …" },
    { node: "The federal layer", role: "An FBI task-force officer and a state fusion center. A name, a DMV record, a residence — circulated through channels built for terrorism, against a person who wrote letters.", via: "arrives as …" },
    { node: "Force, at the door", role: "The end of the ladder. Its own paperwork will later prove there was nothing at the start of it.", via: "" },
];

export default function RetaliationMap() {
    return (
        <div className="not-prose">
            {/* ── Panel 1: the ladder ── */}
            <section className="mb-14">
                <h3 id="the-ladder" className="scroll-mt-48 text-base font-bold uppercase tracking-widest text-gray-900">The escalation ladder</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                    Institutions do not begin with force. They climb to it, one rung at a
                    time, and each rung is reached only when the one below it fails to make
                    a person stop. Read down. The tell for each stage is how you know which
                    rung you are on.
                </p>

                <ol className="mt-6 space-y-3">
                    {LADDER.map((rung, i) => (
                        <li key={rung.move}>
                            <Link
                                href={rung.href}
                                className={`group block rounded-lg border-l-4 ${rung.tone} border border-l-[6px] px-4 py-4 transition-shadow hover:shadow-sm sm:px-5`}
                            >
                                <div className="flex items-baseline gap-3">
                                    <span className="font-mono text-xs text-gray-500">{i + 1}</span>
                                    <span className="text-sm font-bold uppercase tracking-widest text-gray-900">{rung.move}</span>
                                </div>
                                <p className="mt-2 text-sm leading-relaxed text-gray-700">{rung.tell}</p>
                                <div className="mt-3 border-t border-black/5 pt-2">
                                    <div className="text-[10px] font-semibold uppercase tracking-widest text-gray-400">In this record</div>
                                    <p className="mt-1 text-xs leading-relaxed text-gray-600">
                                        {rung.record}
                                        <span className="ml-1 whitespace-nowrap text-emerald-800 group-hover:text-emerald-600"> →</span>
                                    </p>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ol>

            </section>

            {/* ── Panel 2: the dictionary ── */}
            <section className="mb-14">
                <h3 id="the-dictionary" className="scroll-mt-48 text-base font-bold uppercase tracking-widest text-gray-900">The reframing dictionary</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                    An institution allergic to documentation cannot answer what you wrote, so
                    it renames it. The words on the left are theirs, drawn from this record.
                    The words on the right are what was underneath them.
                </p>

                <dl className="mt-6 divide-y divide-gray-200 overflow-hidden rounded-lg border border-gray-200">
                    {DICTIONARY.map((row) => (
                        <div key={row.word} className="grid grid-cols-1 gap-1 px-4 py-3 sm:grid-cols-[minmax(0,14rem)_1fr] sm:gap-4 sm:px-5">
                            <dt className="font-mono text-sm text-red-800">&ldquo;{row.word}&rdquo;</dt>
                            <dd className="text-sm leading-relaxed text-gray-700">{row.means}</dd>
                        </div>
                    ))}
                </dl>
            </section>

            {/* ── Panel 3: the network ── */}
            <section>
                <h3 id="the-network" className="scroll-mt-48 text-base font-bold uppercase tracking-widest text-gray-900">How an FYI becomes force</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                    The agencies present themselves as separate. They are not, in the way that
                    matters. Follow one email down the chain that carried it.
                </p>

                <ol className="mt-6">
                    {CHAIN.map((step, i) => (
                        <li key={step.node} className="relative">
                            <div className="rounded-lg border border-slate-200 bg-white px-4 py-4 shadow-sm sm:px-5">
                                <div className="text-sm font-bold uppercase tracking-widest text-slate-900">{step.node}</div>
                                <p className="mt-1.5 text-sm leading-relaxed text-gray-600">{step.role}</p>
                            </div>
                            {step.via && (
                                <div className="flex items-center gap-2 py-2 pl-4 sm:pl-5">
                                    <span className="text-gray-300" aria-hidden>↓</span>
                                    <span className="text-xs italic leading-relaxed text-gray-500">{step.via}</span>
                                </div>
                            )}
                        </li>
                    ))}
                </ol>

                <div className="mt-6 rounded-lg border border-emerald-200 bg-emerald-50/60 px-5 py-4">
                    <div className="text-xs font-bold uppercase tracking-widest text-emerald-900">The layer underneath</div>
                    <p className="mt-2 text-sm leading-relaxed text-gray-700">
                        Beneath every agency in that chain sits one risk office and one law
                        firm. The Department of Administrative Services holds the liability
                        for all of them; a claim against Parks and a claim against the State
                        Police land on the same adjuster's desk. The Department of Justice
                        represents all of them; the office that fights a records request is
                        the office that defends the officers the record implicates. They
                        present as separate agencies. To the state they are one client, one
                        claim, one defense.
                    </p>
                </div>
            </section>
        </div>
    );
}

// The AI card. It sits under the testimony on the index page and answers the
// question directly, in his voice, with the counts computed from the same data
// the rest of the site is built from.

import Link from "next/link";
import { Bot } from "lucide-react";
import { THREADS } from "@/data/threads";
import { TESTIMONY_META } from "@/data/testimonyMeta";

const filings = THREADS.reduce((n, t) => n + t.filings.length, 0);

const link =
    "font-semibold text-emerald-300 underline decoration-emerald-500/40 underline-offset-4 transition-colors hover:text-emerald-200 hover:decoration-emerald-300";

const WORK: { lead: string; body: React.ReactNode }[] = [
    {
        lead: "I write with it.",
        body: (
            <>
                I always have, from the very first message I sent inquiring about volunteer
                opportunities.
            </>
        ),
    },
    {
        lead: "I have it capture my mail.",
        body: (
            <>
                Every document an institution sends me is pulled out of my mailbox, rendered, indexed,
                and published at a permanent address that does not move.{" "}
                <Link href="/records" className={link}>
                    {filings.toLocaleString()} documents so far
                </Link>
                .
            </>
        ),
    },
    {
        lead: "I built my testimony with it.",
        body: (
            <>
                <Link href="/testimony" className={link}>
                    {TESTIMONY_META.paragraphs} numbered paragraphs
                </Link>{" "}
                drawn from {TESTIMONY_META.recordings} recordings and {TESTIMONY_META.documents}{" "}
                documents, carrying {TESTIMONY_META.moments.toLocaleString()} cited moments a reader
                can open.
            </>
        ),
    },
    {
        lead: "I have it read the whole record at once.",
        body: (
            <>
                Fourteen primary signals held as one cluster and{" "}
                <Link href="/synthesis" className={link}>
                    read across six analytical lenses
                </Link>
                , instead of one file at a time.
            </>
        ),
    },
    {
        lead: "I have it write my letters from the record.",
        body: (
            <>
                It reads the institutions&rsquo; own productions first, cites the source at every
                claim, and renders a PDF in which every citation is a live link. Every letter goes out{" "}
                <Link href="/outreach" className={link}>
                    over my name
                </Link>
                .
            </>
        ),
    },
    {
        lead: "I build this site with it.",
        body: (
            <>
                From my commands: the pages, the ingest pipeline, and the gate that refuses to publish
                a record with a broken link in it.
            </>
        ),
    },
];

const FORBIDDEN: { rule: string; body: React.ReactNode }[] = [
    {
        rule: "No defenses.",
        body: <>It does not argue that I am credible or that I am right. The record shows what it shows.</>,
    },
    {
        rule: "No institutional framing.",
        body: (
            <>
                An institution&rsquo;s account of its own conduct is never repeated here as though it
                were an event.
            </>
        ),
    },
    {
        rule: "No case citations.",
        body: (
            <>
                It is not a lawyer, and my letters are not dressed as legal filings. A statute has a
                number. A case is an argument about the law.
            </>
        ),
    },
    {
        rule: "No invented interior.",
        body: <>It does not write what I felt, what I meant, or what I hoped for.</>,
    },
    {
        rule: "No unread source.",
        body: (
            <>
                It does not describe a document it has not opened. A title is not evidence of what is
                inside it.
            </>
        ),
    },
    {
        rule: "No inexact quotation.",
        body: <>Quoted words are the words in the source at the place cited, or they are not quoted.</>,
    },
];

// The same prohibitions, pointed the other way. They govern how the people in
// this record are written about, and they are not conditional on what those
// people did.
const FORBIDDEN_OF_THEM: { rule: string; body: React.ReactNode }[] = [
    {
        rule: "No characterizations.",
        body: (
            <>
                It does not write what they intended, meant, or felt. What they did and what they
                wrote is the whole of it.
            </>
        ),
    },
    {
        rule: "No selective quotes.",
        body: (
            <>
                Nothing is clipped to make a person look worse than their full passage does. What they
                wrote is what appears.
            </>
        ),
    },
    {
        rule: "No speculation about motive.",
        body: <>Where the record does not say why someone acted, it stays silent on why.</>,
    },
    {
        rule: "No verdict language.",
        body: <>It does not grade their conduct. It states what they did and lets that stand.</>,
    },
    {
        rule: "No withheld name published.",
        body: <>The names I have chosen to redact stay redacted, in every document and every letter.</>,
    },
];

export default function AiCard() {
    return (
        <div className="mt-4 overflow-hidden rounded-2xl border border-slate-900 bg-slate-950 shadow-sm">

            {/* ── The question, the answer, and who is asking it ── */}
            <div className="relative px-6 py-9 sm:px-10 sm:py-12">
                <div
                    aria-hidden
                    className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-emerald-500/10 blur-3xl"
                />
                <div className="relative">
                    <Bot
                        size={56}
                        strokeWidth={1.5}
                        className="text-emerald-400 drop-shadow-[0_0_18px_rgba(52,211,153,0.35)]"
                        aria-hidden
                    />

                    <h2 className="mt-5 text-[26px] font-bold leading-tight tracking-tight text-white sm:text-4xl">
                        Does this project use AI?
                    </h2>
                    <div className="mt-1 text-[26px] font-bold leading-tight tracking-tight text-emerald-400 sm:text-4xl">
                        Yes. Extensively.
                    </div>

                    <div className="mt-6 max-w-2xl space-y-3 text-[15px] leading-relaxed text-slate-300 sm:text-lg">
                        <p>
                            I have been{" "}
                            <a
                                href="https://rswfire.com/library/signal/01KGZV5B000V9PB1VW43MW34VY"
                                target="_blank"
                                rel="noopener"
                                className="font-semibold text-emerald-300 underline decoration-emerald-500/50 underline-offset-4 transition-colors hover:text-emerald-200 hover:decoration-emerald-300"
                            >
                                a programmer since the sixth grade
                            </a>
                            . I have used machines my whole life. AI is no different.
                        </p>
                    </div>
                </div>
            </div>

            {/* ── How I use it ── */}
            <div className="space-y-px bg-slate-800">
                {WORK.map((w, i) => (
                    <div key={w.lead} className="bg-slate-950 px-6 py-5 sm:px-10 sm:py-6">
                        <div className="flex gap-4 sm:gap-5">
                            <span className="w-6 shrink-0 pt-1 font-mono text-[11px] font-bold text-emerald-500">
                                {String(i + 1).padStart(2, "0")}
                            </span>
                            <div className="min-w-0 max-w-3xl">
                                <div className="text-base font-bold text-white sm:text-lg">
                                    {w.lead}
                                </div>
                                <p className="mt-1.5 text-[15px] leading-relaxed text-slate-400">
                                    {w.body}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* ── The standing prohibitions ── */}
            <div className="border-t border-slate-800 bg-slate-900/60 px-6 py-7 sm:px-10 sm:py-9">
                <h3 className="font-mono text-[11px] font-bold uppercase tracking-widest text-rose-400">
                    What it is forbidden to do.
                </h3>
                <div className="mt-5 max-w-3xl space-y-4">
                    {FORBIDDEN.map((f) => (
                        <div key={f.rule} className="flex gap-3.5">
                            <span aria-hidden className="shrink-0 pt-px font-bold text-rose-500">
                                &times;
                            </span>
                            <p className="min-w-0 text-[15px] leading-relaxed text-slate-400">
                                <span className="font-bold text-white">{f.rule}</span> {f.body}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* ── The same prohibitions, pointed at how they are written about ── */}
            <div className="border-t border-slate-800 bg-slate-900/60 px-6 py-7 sm:px-10 sm:py-9">
                <h3 className="font-mono text-[11px] font-bold uppercase tracking-widest text-rose-400">
                    I extend this to them too.
                </h3>
                <div className="mt-5 max-w-3xl space-y-4">
                    {FORBIDDEN_OF_THEM.map((f) => (
                        <div key={f.rule} className="flex gap-3.5">
                            <span aria-hidden className="shrink-0 pt-px font-bold text-rose-500">
                                &times;
                            </span>
                            <p className="min-w-0 text-[15px] leading-relaxed text-slate-400">
                                <span className="font-bold text-white">{f.rule}</span> {f.body}
                            </p>
                        </div>
                    ))}
                </div>

                <p className="mt-7 max-w-3xl border-t border-slate-800 pt-5 text-[15px] italic leading-relaxed text-slate-400">
                    These are my ethics, written down. A state agency pointed the police at this
                    archive looking for a pretext. The discipline above is why they did not find
                    one.
                </p>
            </div>

        </div>
    );
}

// components/system/Docs.tsx
//
// The documents behind a line on System: who, when, and the words or the act,
// each linked to the document or recording it rests on.
import type { ReactNode } from "react";
import Link from "next/link";
import { FileText, Landmark, Link as LinkIcon, SquareArrowOutUpRight, Sun, Video } from "lucide-react";
import Cite from "@/components/Cite";
import type { Act, Doc, Src } from "@/data/system";

/** A row whose whole area is the link: the link's box stretches over it. */
const STRETCH = "after:absolute after:inset-0 after:content-['']";
const ROW = "relative -mx-3 rounded-lg px-3 transition-colors hover:bg-emerald-50/70";

export function Source({ src, stretch, children }: { src: Src; stretch?: boolean; children: ReactNode }) {
    if ("href" in src && /^https?:/.test(src.href)) {
        return (
            <a href={src.href} target="_blank" rel="noopener" className={`text-inherit no-underline decoration-slate-300 underline-offset-2 hover:text-sky-700 ${stretch ? STRETCH : "hover:underline"}`}>
                {children}
            </a>
        );
    }
    if ("href" in src) {
        return (
            <Link href={src.href} className={`text-inherit no-underline decoration-slate-300 underline-offset-2 hover:text-sky-700 ${stretch ? STRETCH : "hover:underline"}`}>
                {children}
            </Link>
        );
    }
    return <Cite ulid={src.u} thread={src.t ?? "oprd"} subtle noMark={stretch} className={stretch ? STRETCH : undefined}>{children}</Cite>;
}

/** The evidence pages that are recordings; the others are written record. */
const RECORDINGS = /^\/evidence\/(coercion|expulsion|dismissal|police)(?=[/?#]|$)/;

type Kind = "video" | "sunlight" | "document" | "record" | "external";

/** What the line opens: a recording, an answer in Sunlight, a file, a record, or another site. */
function kindOf(src: Src, att?: Act["att"]): Kind {
    if (att) return "document";
    if (!("href" in src)) return "record";
    if (/\.pdf(?:[#?]|$)/i.test(src.href)) return "document";
    if (RECORDINGS.test(src.href)) return "video";
    if (src.href.startsWith("/sunlight")) return "sunlight";
    if (/^https?:/.test(src.href)) return "external";
    return "record";
}

const MARKS: Record<Kind, { icon: typeof Video; cls: string }> = {
    video: { icon: Video, cls: "bg-rose-50 text-rose-700 ring-rose-200" },
    sunlight: { icon: Sun, cls: "bg-amber-50 text-amber-600 ring-amber-200" },
    document: { icon: FileText, cls: "bg-sky-50 text-sky-700 ring-sky-200" },
    record: { icon: Landmark, cls: "bg-emerald-50 text-emerald-700 ring-emerald-200" },
    external: { icon: SquareArrowOutUpRight, cls: "bg-slate-50 text-slate-600 ring-slate-200" },
};

/** Marks a line by what it opens. */
function LinkMark({ src, att }: { src: Src; att?: Act["att"] }) {
    const { icon: I, cls } = MARKS[kindOf(src, att)];
    return (
        <span aria-hidden className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-md ring-1 ${cls}`}>
            <I size={15} strokeWidth={1.75} />
        </span>
    );
}

export function DocList({ docs }: { docs: Doc[] }) {
    return (
        <ul className="m-0 list-none divide-y divide-slate-200 p-0">
            {docs.map((d, i) => (
                <li key={i} className={`m-0 grid grid-cols-1 gap-x-6 gap-y-1 py-4 @xl:grid-cols-[11rem_1fr] ${ROW}`}>
                    <div className="min-w-0">
                        <div className="text-[13px] font-semibold leading-snug text-gray-800">{d.who}</div>
                        {d.when ? <div className="mt-0.5 text-[12px] font-medium uppercase tracking-wide text-gray-500">{d.when}</div> : null}
                    </div>
                    <div className="flex min-w-0 items-center gap-3 text-[16px] leading-relaxed text-slate-900">
                        <LinkMark src={d.src} att={d.att} />
                        <span className="min-w-0">
                            <Entry text={d.text} src={d.src} att={d.att} />
                        </span>
                    </div>
                </li>
            ))}
        </ul>
    );
}

/** The file inside the record the words come from, opened at its page. */
const PILL = "group/att relative z-10 mt-2.5 flex w-fit max-w-full items-center gap-2 rounded-full border border-gray-200 bg-white py-1.5 pl-3.5 pr-3 text-[12px] leading-none text-gray-700 no-underline shadow-sm transition-colors hover:border-emerald-300 hover:text-emerald-800";

/** What each file is, in plain words: whose document, and which. */
const FILE_NAMES: Record<string, string> = {
    "Robert Samuel White Letter": "OPRD dismissal letter",
    "Attachment — Timeline of Events (docx)": "OPRD \u201ctimeline of events\u201d",
    "Electronic Communications": "OSP emails, as produced",
    "From the RMS — Original email from State Parks, Honeyman State Park": "OPRD email to the state police",
    "From the RMS — Email from FS SA Oliver, Siltcoos WC Volunteer": "Forest Service agent\u2019s email",
    "Report SP26096984 — Threat Assessment": "OSP report SP26096984",
    "CAD Record SP26096984": "OSP dispatch record SP26096984",
    "Attorney General Order": "Attorney General order",
    "Petition for Public Records Disclosure Order: dismissed": "Attorney General order",
    "Fee Letter": "OSP fee letter",
    "PR36445": "OSP fee letter, PR36445",
    "Release Letter PR27478, with envelope and request form": "OSP release letter, PR27478",
    "Response Letter": "OSP no-records letter",
    "The exemptions letter, REF# PR27478": "OSP exemptions letter",
    "The invoice": "OPRD fee estimate",
    "invoice public records Robert Samuel White": "OPRD fee estimate",
    "invoice public records Robert Samuel White 5 4 update": "OPRD fee estimate, May 4 update",
    "public records request response robert samuel white ": "OPRD records response",
    "Letter to the Director": "His letter to the Director",
    "Follow the Statute.": "His letter, \u201cFollow the Statute.\u201d",
    "You converted a link into a threat assessment": "His letter, \u201cYou converted a link into a threat assessment\u201d",
};

function fileName(att: NonNullable<Act["att"]>) {
    return FILE_NAMES[att.label] ?? att.label.replace(/^From the RMS — /, "").replace(/^Attachment — /, "");
}

/**
 * One line of the record. Where the words come from a file inside the cited
 * record, the file is the link, opened at its page, and the email that
 * carried it is a second link beneath.
 */
function Entry({ text, src, att }: { text: string; src: Src; att?: Act["att"] }) {
    if (!att) return <Source src={src} stretch>{text}</Source>;
    return (
        <>
            <a href={att.page ? `${att.href}#page=${att.page}` : att.href} target="_blank" rel="noopener" className={`text-inherit no-underline hover:text-sky-700 ${STRETCH}`}>
                {text}
            </a>
            <span className="mt-1 block text-[12px] leading-snug text-gray-500">
                {fileName(att)}
                {att.page ? <span className="text-gray-400"> · p.&nbsp;{att.page}</span> : null}
            </span>
            {"u" in src ? (
                <Cite ulid={src.u} thread={src.t ?? "oprd"} subtle noMark className={PILL}>
                    <span className="font-medium">Source: {att.from ?? "the email"}</span>
                    <LinkIcon aria-hidden size={15} strokeWidth={1.75} className="shrink-0 text-gray-400 transition-colors group-hover/att:text-emerald-700" />
                </Cite>
            ) : null}
        </>
    );
}

/** Everything a seat did, by year; letters left unanswered gathered at the end. */
export function ActList({ acts }: { acts: Act[] }) {
    const done = acts.filter((a) => !a.noreply);
    const unanswered = acts.filter((a) => a.noreply);
    const years = Array.from(new Set(done.map((a) => a.d.slice(0, 4))));
    return (
        <div className="space-y-8">
            {years.map((y) => (
                <section key={y}>
                    <h3 className="m-0 flex items-baseline justify-between border-b-2 border-gray-900 pb-1.5">
                        <span className="text-[15px] font-semibold text-gray-900">{y || "Undated"}</span>
                        <span className="text-[12px] text-gray-500">{done.filter((a) => a.d.slice(0, 4) === y).length}</span>
                    </h3>
                    <ol className="m-0 list-none divide-y divide-slate-200 p-0">
                        {done
                            .filter((a) => a.d.slice(0, 4) === y)
                            .map((a, i) => (
                                <li key={i} className={`m-0 grid grid-cols-1 gap-y-1 py-3 ${ROW}`}>
                                    <span className="text-[12px] font-medium uppercase tracking-wide text-gray-500">{a.when}</span>
                                    <span className="flex min-w-0 items-center gap-3 text-[15px] leading-relaxed text-slate-900">
                                        <LinkMark src={a.src} att={a.att} />
                                        <span className="min-w-0">
                                            <Entry text={a.text} src={a.src} att={a.att} />
                                        </span>
                                    </span>
                                </li>
                            ))}
                    </ol>
                </section>
            ))}
            {unanswered.length ? (
                <details className="group rounded-xl border border-gray-200 bg-gray-50/60">
                    <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-3 px-4 py-3 [&::-webkit-details-marker]:hidden">
                        <span className="text-[14px] font-semibold text-gray-900">
                            No reply <span className="font-normal text-gray-500">· {unanswered.length} letters</span>
                        </span>
                        <span aria-hidden className="text-slate-500 transition-transform group-open:rotate-180">&#9662;</span>
                    </summary>
                    <ol className="m-0 list-none divide-y divide-slate-200 border-t border-slate-200 p-0 px-4">
                        {unanswered.map((a, i) => (
                            <li key={i} className={`m-0 grid grid-cols-1 gap-y-1 py-2.5 ${ROW}`}>
                                <span className="text-[12px] font-medium uppercase tracking-wide text-gray-500">{a.when}</span>
                                <span className="flex min-w-0 items-center gap-3 text-[14px] leading-snug text-slate-800">
                                    <LinkMark src={a.src} att={a.att} />
                                    <span className="min-w-0"><Entry text={a.text} src={a.src} att={a.att} /></span>
                                </span>
                            </li>
                        ))}
                    </ol>
                </details>
            ) : null}
        </div>
    );
}

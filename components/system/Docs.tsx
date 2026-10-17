// components/system/Docs.tsx
//
// The documents behind a line on System: who, when, and the words or the act,
// each linked to the document or recording it rests on.
import type { ReactNode } from "react";
import Link from "next/link";
import { FileText, Landmark, SquareArrowOutUpRight, Sun, Video } from "lucide-react";
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
                <li key={i} className={`m-0 grid grid-cols-1 gap-y-1.5 py-4 ${ROW}`}>
                    <Header src={d.src} att={d.att} className="flex min-w-0 items-center gap-3">
                        <LinkMark src={d.src} att={d.att} />
                        <span className="min-w-0">
                            {d.when ? <span className="block text-[12px] font-medium uppercase tracking-wide text-gray-500">{d.when}</span> : null}
                            <span className="block text-[13px] font-semibold leading-snug text-gray-800">{d.who}</span>
                            <SourceLine src={d.src} att={d.att} />
                        </span>
                    </Header>
                    <div className="min-w-0 text-[16px] leading-relaxed text-slate-900">
                        <Entry text={d.text} src={d.src} att={d.att} />
                    </div>
                </li>
            ))}
        </ul>
    );
}

/** The email that carried the file, under the line's mark: quiet, gray, underlined. */
function SourceLine({ src, att }: { src: Src; att?: Act["att"] }) {
    if (!att || !("u" in src)) return null;
    return (
        <span className="mt-0.5 block text-[12px] leading-snug text-gray-400">
            <span className="underline decoration-gray-300 underline-offset-2">Source: {att.from ?? "the email"}</span>
            {att.page ? <span> · p.&nbsp;{att.page}</span> : null}
        </span>
    );
}

/**
 * A line's header. Where the words come from a file, the text opens the
 * file and the whole header opens the record that carried it.
 */
function Header({ src, att, className, children }: { src: Src; att?: Act["att"]; className: string; children: ReactNode }) {
    if (att && "u" in src) {
        return (
            <Cite ulid={src.u} thread={src.t ?? "oprd"} subtle noMark className={`relative z-10 ${className}`}>
                {children}
            </Cite>
        );
    }
    return <span className={className}>{children}</span>;
}

/** Words a title keeps in lower case unless they open it. */
const SMALL = new Set(["a", "an", "and", "as", "at", "but", "by", "for", "from", "in", "into", "nor", "of", "on", "or", "re", "the", "to", "via", "vs", "with"]);

/** A record's title in title case; words already capitalized, such as acronyms and reference numbers, stay as written. */
function titleCase(t: string) {
    return t.split(/(\s+)/).map((w, i) => {
        if (!/^[a-z]/.test(w)) return w;
        if (i > 0 && SMALL.has(w.replace(/[^a-z]/g, ""))) return w;
        return w[0].toUpperCase() + w.slice(1);
    }).join("");
}

/** One act: the mark and the record's title on a line, the words beneath at full width. */
function ActBody({ a, size }: { a: Act; size: string }) {
    const when = <span className="block text-[12px] font-medium uppercase tracking-wide text-gray-500">{a.when}</span>;
    return (
        <>
            <Header src={a.src} att={a.att} className="flex min-w-0 items-center gap-3">
                <LinkMark src={a.src} att={a.att} />
                <span className="min-w-0">
                    {when}
                    {a.title ? <span className="block text-[13px] font-semibold leading-snug text-gray-700">{titleCase(a.title)}</span> : null}
                    <SourceLine src={a.src} att={a.att} />
                </span>
            </Header>
            <span className={`mt-1.5 block min-w-0 ${size}`}><Entry text={a.text} src={a.src} att={a.att} /></span>
        </>
    );
}

/**
 * One line of the record. Where the words come from a file inside the cited
 * record, the file is the link, opened at its page, and the email that
 * carried it is a second link beneath.
 */
function Entry({ text, src, att }: { text: string; src: Src; att?: Act["att"] }) {
    if (!att) {
        return (
            <>
                <Source src={src} stretch>{text}</Source>
            </>
        );
    }
    return (
        <>
            <a href={att.page ? `${att.href}#page=${att.page}` : att.href} target="_blank" rel="noopener" className={`text-inherit no-underline hover:text-sky-700 ${STRETCH}`}>
                {text}
            </a>
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
                                    <ActBody a={a} size="text-[15px] leading-relaxed text-slate-900" />
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
                                <ActBody a={a} size="text-[14px] leading-snug text-slate-800" />
                            </li>
                        ))}
                    </ol>
                </details>
            ) : null}
        </div>
    );
}

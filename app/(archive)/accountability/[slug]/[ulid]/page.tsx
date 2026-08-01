// app/(archive)/accountability/[slug]/[ulid]/page.tsx
//
// One document, at its own address. The ULID is the identity everywhere else
// in the archive, so it is the URL here too. The body is the same rendering
// the viewer shows, read from the generated fragment at build time and served
// in the page itself, so the document is readable without JavaScript and
// indexable by a search engine.

import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import Link from "next/link";
import SectionPage from "@/components/SectionPage";
import { KIND_LABEL } from "@/components/RecordsThread";
import type { Filing, RecordsThreadData } from "@/components/RecordsThread";
import { THREADS } from "@/data/threads";

const SENT_KINDS = new Set(["notice", "request", "followup", "statement", "petition", "supplement"]);

/** Documents in the order the register shows them: ULIDs are chronological. */
function ordered(thread: RecordsThreadData): Filing[] {
    return thread.filings.slice().sort((a, b) => a.ulid.localeCompare(b.ulid));
}

function find(slug: string, ulid: string) {
    const thread = THREADS.find((t) => t.slug === slug);
    if (!thread) return null;
    const list = ordered(thread);
    const i = list.findIndex((f) => f.ulid === ulid);
    if (i < 0) return null;
    return { thread, filing: list[i], prev: list[i - 1], next: list[i + 1] };
}

/** The rendering generated alongside the PDF, inlined at build time. */
function body(slug: string, id: string): string | null {
    const f = path.join(process.cwd(), "public", "records", slug, "html", `${id}.html`);
    try {
        return fs.readFileSync(f, "utf8");
    } catch {
        return null;
    }
}

function counterparty(f: Filing): string | undefined {
    const sent = SENT_KINDS.has(f.kind);
    let who = (sent ? f.to : f.from) ?? (sent ? f.from : f.to);
    if (!who) return undefined;
    who = who.replace(/(^|, )Robert (Samuel )?White(, |$)/, "$1").replace(/^[,;]\s*|[,;]\s*$/g, "").trim();
    if (!who) return undefined;
    return `${sent ? "To" : "From"} ${who}`;
}

function ext(href: string): string {
    return href.toLowerCase().match(/\.([a-z0-9]+)$/)?.[1].toUpperCase() ?? "FILE";
}

export function generateStaticParams() {
    return THREADS.flatMap((t) => t.filings.map((f) => ({ slug: t.slug, ulid: f.ulid })));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string; ulid: string }>;
}): Promise<Metadata> {
    const { slug, ulid } = await params;
    const hit = find(slug, ulid);
    if (!hit) return {};
    const { thread, filing } = hit;
    const who = counterparty(filing);
    const description =
        filing.summary ??
        `${KIND_LABEL[filing.kind]}, ${filing.date}${who ? `, ${who.toLowerCase()}` : ""}. ` +
            `From the ${thread.title} correspondence record.`;
    return {
        title: `${filing.title} — ${filing.date}`,
        description,
        alternates: { canonical: `/accountability/${slug}/${ulid}/` },
        openGraph: {
            type: "article",
            title: `${filing.title} — ${filing.date}`,
            description,
            url: `/accountability/${slug}/${ulid}/`,
        },
    };
}

export default async function DocumentPage({
    params,
}: {
    params: Promise<{ slug: string; ulid: string }>;
}) {
    const { slug, ulid } = await params;
    const hit = find(slug, ulid);
    if (!hit) return null;
    const { thread, filing, prev, next } = hit;
    const html = filing.eml ? body(slug, filing.id) : null;
    const who = counterparty(filing);
    const attachments = (filing.docs ?? []).filter((d) => d.href.includes("/attachments/"));
    const renderings = (filing.docs ?? []).filter((d) => !d.href.includes("/attachments/"));

    return (
        <SectionPage
            title={filing.title.toUpperCase()}
            subtitle={`${filing.date}${filing.time ? `, ${filing.time}` : ""}`}
            supplemental={`${thread.agency.toUpperCase()} · ${KIND_LABEL[filing.kind].toUpperCase()}`}
            previousPage={
                prev
                    ? { href: `/accountability/${slug}/${prev.ulid}`, label: "Previous document" }
                    : { href: `/accountability/${slug}`, label: thread.title }
            }
            nextPage={
                next
                    ? { href: `/accountability/${slug}/${next.ulid}`, label: "Next document" }
                    : { href: "/accountability", label: "Accountability" }
            }
        >
            <div className="mt-2 text-sm text-gray-600">
                <Link href={`/accountability/${slug}`} className="text-emerald-700 hover:underline">
                    {thread.title}
                </Link>
                {who && <span> · {who}</span>}
            </div>

            {filing.flagged && filing.summary && (
                <div className="mt-6 border-l-4 border-emerald-600 bg-emerald-50/60 px-5 py-4 text-base leading-relaxed text-gray-800">
                    {filing.summary}
                </div>
            )}

            {html ? (
                <div
                    className="mt-8 bg-white border border-gray-300 rounded-lg p-5 sm:p-8"
                    dangerouslySetInnerHTML={{ __html: html }}
                />
            ) : (
                <div className="mt-8 text-base text-gray-700">
                    {filing.summary ?? "This document is available below."}
                </div>
            )}

            <div className="mt-8 border-t border-gray-300 pt-5">
                <div className="text-xs font-semibold uppercase tracking-wider text-gray-500">Documents</div>
                <div className="mt-3 flex flex-wrap items-center gap-2">
                    {attachments.map((d) => (
                        <a
                            key={d.href}
                            href={d.href}
                            download
                            className="text-xs font-semibold uppercase tracking-wider text-emerald-700 border border-emerald-700 rounded px-2.5 py-1 hover:bg-emerald-700 hover:text-white transition-colors"
                        >
                            {d.label} ({ext(d.href)})
                        </a>
                    ))}
                    {renderings.map((d) => (
                        <a
                            key={d.href}
                            href={d.href}
                            download
                            className="text-xs font-semibold uppercase tracking-wider text-emerald-700 border border-emerald-700 rounded px-2.5 py-1 hover:bg-emerald-700 hover:text-white transition-colors"
                        >
                            The record ({ext(d.href)})
                        </a>
                    ))}
                    {filing.eml && (
                        <a
                            href={filing.eml}
                            download
                            className="text-xs font-semibold uppercase tracking-wider text-emerald-700 border border-emerald-700 rounded px-2.5 py-1 hover:bg-emerald-700 hover:text-white transition-colors"
                            title="The unmodified email original"
                        >
                            The unmodified original (EML)
                        </a>
                    )}
                </div>
                <div className="mt-4 font-mono text-[10px] tracking-widest text-gray-400">{filing.ulid}</div>
            </div>
        </SectionPage>
    );
}

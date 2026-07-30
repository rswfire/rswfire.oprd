// components/AccountabilityRecord.tsx
//
// The accountability identity element: the register table itself, embedded
// anywhere in the archive and filtered to the person or event that page
// describes — same table, same viewer, same downloads as the accountability
// pages. The band names it; the selection helpers pick the documents; every
// row's ULID links back to its place on its register.

import RecordsTable, { type TableFiling } from "@/components/RecordsTable";
import { THREADS } from "@/data/threads";
import type { Filing, RecordsThreadData } from "@/components/RecordsThread";

export interface RegisterRef {
    thread: RecordsThreadData;
    filing: Filing;
}

function all(): RegisterRef[] {
    return THREADS.flatMap((thread) => thread.filings.map((filing) => ({ thread, filing })));
}

function byUlid(refs: RegisterRef[]): RegisterRef[] {
    return refs.sort((a, b) => a.filing.ulid.localeCompare(b.filing.ulid));
}

/** Every flagged document in the given registers. */
export function flaggedIn(...slugs: string[]): RegisterRef[] {
    return byUlid(all().filter((r) => slugs.includes(r.thread.slug) && r.filing.flagged));
}

/** Documents to or from a person, matched on the register's display name. */
export function withPerson(display: string): RegisterRef[] {
    return byUlid(
        all().filter(
            (r) => (r.filing.from ?? "").includes(display) || (r.filing.to ?? "").includes(display),
        ),
    );
}

/** Specific documents by ULID, in chronological order. */
export function byUlids(...ulids: string[]): RegisterRef[] {
    const want = new Set(ulids);
    return byUlid(all().filter((r) => want.has(r.filing.ulid)));
}

/** One document found by register slug and exact title, or null. */
export function findDoc(slug: string, title: string): RegisterRef | null {
    return all().find((r) => r.thread.slug === slug && r.filing.title === title) ?? null;
}

/** Documents from one register whose titles match exactly or by prefix. */
export function byTitles(slug: string, ...titles: string[]): RegisterRef[] {
    return byUlid(
        all().filter(
            (r) =>
                r.thread.slug === slug &&
                titles.some((t) => r.filing.title === t || r.filing.title.startsWith(t)),
        ),
    );
}

export function registerHref(ref: RegisterRef): string {
    return `/accountability/${ref.thread.slug}/#${ref.filing.ulid}`;
}

export default function AccountabilityRecord({
    intro,
    items,
    heading = "FROM THE RECORD",
}: {
    intro?: string;
    items: RegisterRef[];
    heading?: string;
}) {
    if (items.length === 0) return null;
    const filings: TableFiling[] = items.map(({ thread, filing }) => ({ ...filing, slug: thread.slug }));
    return (
        <div className="my-10">
            <div className="rounded-t-2xl bg-emerald-800 px-5 py-3">
                <div className="text-sm font-bold text-white uppercase tracking-widest">Accountability</div>
                <div className="text-xs text-emerald-100 mt-0.5 uppercase tracking-wide">{heading}</div>
            </div>
            <div className="border-x border-b border-gray-300 rounded-b-2xl px-4 pt-4 pb-3 bg-white">
                {intro && <div className="pb-3 text-base leading-relaxed text-gray-700">{intro}</div>}
                <RecordsTable filings={filings} />
                <div className="mt-3 text-xs text-gray-600">
                    Every document is posted with its unmodified email original.
                </div>
            </div>
        </div>
    );
}

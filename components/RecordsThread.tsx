// components/RecordsThread.tsx
//
// One records register: an agency, the matter, its status, and the
// communications table. Each filing is one document row; flagged filings
// stand out and show their note. A new development is one appended Filing.

import Link from "next/link";
import RecordsTable from "@/components/RecordsTable";
import { THREADS } from "@/data/threads";

export type FilingKind =
    | "request"
    | "followup"
    | "response"
    | "record"
    | "statement"
    | "notice"
    | "letter"
    | "petition"
    | "supplement";

export interface FilingDoc {
    label: string;
    href: string;
}

export interface Filing {
    id: string; // anchor slug, unique within the thread
    ulid: string; // document identifier, timestamp-derived
    date: string; // display date
    time?: string; // display time, from the original
    d: string; // ISO date for sorting/filtering
    kind: FilingKind;
    title: string;
    flagged?: boolean; // important: stands out in the table, note shown
    chain?: string; // explicit chain key; overrides subject-based grouping
    from?: string;
    to?: string;
    summary?: string;
    docs?: FilingDoc[];
    eml?: string; // unmodified email original
}

export interface ChainMeta {
    flagged?: boolean;
    note?: string;
}

export interface RecordsThreadData {
    slug: string;
    title: string;
    agency: string;
    matter: string;
    status: string;
    summary: string[];
    filings: Filing[];
    chains?: Record<string, ChainMeta>; // keyed by chain key (normalized subject or explicit chain field)
    note?: string[];
}

export const KIND_LABEL: Record<FilingKind, string> = {
    request: "Public Records Request",
    followup: "Follow-Up",
    response: "Agency Response",
    record: "Record",
    statement: "Public Statement",
    notice: "Letter Sent",
    letter: "Letter Received",
    petition: "Petition",
    supplement: "Supplemental Filing",
};

export default function RecordsThread({ thread }: { thread: RecordsThreadData }) {
    return (
        <div className="mt-8">
            {/* Every register, one strip; the one you are reading is filled. */}
            <nav aria-label="Institutions" className="mb-6 flex flex-wrap gap-2">
                {THREADS.map((t) => {
                    const active = t.slug === thread.slug;
                    return (
                        <Link
                            key={t.slug}
                            href={`/accountability/${t.slug}`}
                            aria-current={active ? "page" : undefined}
                            className={`rounded-full border px-3 py-1.5 text-xs font-semibold uppercase tracking-wide transition-colors ${
                                active
                                    ? "border-emerald-700 bg-emerald-700 text-white"
                                    : "border-slate-200 bg-white text-slate-600 hover:border-emerald-400 hover:text-emerald-800"
                            }`}
                        >
                            {t.title}
                        </Link>
                    );
                })}
            </nav>

            <div className="text-sm">
                <span className="font-semibold uppercase tracking-widest text-emerald-800">
                    {thread.agency}
                </span>
                <span className="mx-2 text-gray-400">&middot;</span>
                <span className="text-gray-600">{thread.matter}</span>
            </div>
            <div className="mt-3 text-sm text-gray-700">
                <span className="font-semibold uppercase tracking-wide">Status:</span>{" "}
                {thread.status}
            </div>

            <div className="mt-8">
                <RecordsTable
                    filings={thread.filings.map((f) => ({ ...f, slug: thread.slug }))}
                    chains={thread.chains}
                />
            </div>

            {thread.note && (
                <>
                    <hr className="my-8 border-t border-gray-300" />
                    <div className="space-y-3 text-base leading-relaxed text-gray-700">
                        {thread.note.map((n, i) => (
                            <p key={i}>{n}</p>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}

// components/RecordsTable.tsx
//
// The communications table for one register: searchable, filterable by type,
// sortable by date, built to hold hundreds of documents. Messages that share
// a subject collapse into an expandable chain; a chain carrying a flagged
// message shows the accent and the note on its collapsed header. Every row
// keeps its anchor id, downloads, and the original behind the disclosure.
"use client";

import { useEffect, useMemo, useState } from "react";
import type { ChainMeta, Filing, FilingKind } from "@/components/RecordsThread";
import { KIND_LABEL } from "@/components/RecordsThread";
import { CHAIN_PDFS } from "@/data/chains";

function ext(href: string): string {
    const m = href.toLowerCase().match(/\.([a-z0-9]+)$/);
    return m ? m[1].toUpperCase() : "FILE";
}

function baseSubject(title: string): string {
    return title.replace(/^((re|fw|fwd)\s*:\s*)+/i, "").trim();
}

function Chip({ label }: { label: string }) {
    return (
        <span className="shrink-0 text-xs font-semibold uppercase tracking-wider text-emerald-700 border border-emerald-700 rounded px-2 py-0.5 group-hover:bg-emerald-700 group-hover:text-white transition-colors">
            {label}
        </span>
    );
}

const SENT_KINDS = new Set(["notice", "request", "followup", "statement", "petition", "supplement"]);

const MONTH_ABBR: Record<string, string> = {
    January: "Jan", February: "Feb", March: "Mar", April: "Apr", May: "May", June: "Jun",
    July: "Jul", August: "Aug", September: "Sep", October: "Oct", November: "Nov", December: "Dec",
};

function shortStamp(f: Filing): string {
    const noYear = f.date.replace(/, \d{4}$/, "");
    const abbr = noYear.replace(/^(\w+)/, (m) => MONTH_ABBR[m] ?? m);
    return f.time ? `${abbr}, ${f.time}` : abbr;
}

function counterparty(f: Filing): { label: string; who: string } | null {
    const sent = SENT_KINDS.has(f.kind);
    let who = sent ? f.to : f.from;
    if (!who) who = sent ? f.from : f.to;
    if (!who) return null;
    who = who.replace(/(^|, )Robert White(, |$)/, "$1").replace(/^, |, $/g, "").trim();
    if (!who) return null;
    return { label: sent ? "To" : "From", who };
}

function Row({ f, member, onEml }: { f: Filing; member?: boolean; onEml: (href: string) => void }) {
    const cp = counterparty(f);
    return (
        <div
            id={f.id}
            className={`scroll-mt-48 grid grid-cols-1 sm:grid-cols-[8rem_1fr_auto] gap-1 sm:gap-5 ${
                member ? "pl-9 pr-5 py-2" : "px-5 py-3"
            } ${f.flagged ? "bg-emerald-50/60" : member ? "bg-gray-100/70" : ""}`}
        >
            <div>
                {member ? (
                    <div className="text-xs font-semibold text-gray-600 whitespace-nowrap">{shortStamp(f)}</div>
                ) : (
                    <div className="text-sm font-bold text-gray-900">{f.date}</div>
                )}
                <div className="mt-0.5 text-[11px] uppercase tracking-wider text-gray-400">{KIND_LABEL[f.kind]}</div>
            </div>

            <div className="min-w-0">
                {!member && (
                    <div className={`text-sm leading-snug ${f.flagged ? "font-semibold text-gray-900" : "text-gray-800"}`}>
                        {f.title}
                    </div>
                )}
                {cp && (
                    <div className={member ? "text-xs text-gray-600" : "mt-0.5 text-sm text-gray-700"}>
                        <span className="text-gray-400">{cp.label} </span>
                        {cp.who}
                    </div>
                )}
                {f.flagged && f.summary && (
                    <div className="mt-1 text-sm text-gray-700 leading-relaxed">{f.summary}</div>
                )}
                <div className={`${member ? "mt-0.5" : "mt-1"} font-mono text-[10px] tracking-widest text-gray-300`}>
                    {f.ulid}
                </div>
            </div>

            <div className="flex sm:justify-end items-start gap-1.5 flex-wrap sm:w-[7.5rem]">
                {(f.docs ?? []).map((d) => (
                    <a key={d.href} href={d.href} download title={d.label} className="group">
                        <Chip label={ext(d.href)} />
                    </a>
                ))}
                {f.eml && (
                    <button
                        type="button"
                        onClick={() => onEml(f.eml!)}
                        title="Unmodified email original"
                        className="group"
                    >
                        <Chip label="EML" />
                    </button>
                )}
            </div>
        </div>
    );
}

export default function RecordsTable({ filings, threadSlug, chains }: { filings: Filing[]; threadSlug: string; chains?: Record<string, ChainMeta> }) {
    const [query, setQuery] = useState("");
    const [kind, setKind] = useState<FilingKind | "all" | "flagged">("all");
    const [asc, setAsc] = useState(true);
    const [emlOpen, setEmlOpen] = useState<string | null>(null);
    const [suppress, setSuppress] = useState(false);

    const requestEml = (href: string) => {
        if (typeof window !== "undefined" && window.localStorage.getItem("eml-notice-suppressed") === "1") {
            const a = document.createElement("a");
            a.href = href;
            a.download = "";
            a.click();
            return;
        }
        setSuppress(false);
        setEmlOpen(href);
    };
    const [open, setOpen] = useState<Set<string>>(() => new Set());

    const kinds = useMemo(
        () => Array.from(new Set(filings.map((f) => f.kind))),
        [filings]
    );

    const filtering = query.trim() !== "" || kind !== "all";

    const groups = useMemo(() => {
        const q = query.trim().toLowerCase();
        const rows = filings.filter((f) => {
            if (kind === "flagged" && !f.flagged) return false;
            if (kind !== "all" && kind !== "flagged" && f.kind !== kind) return false;
            if (!q) return true;
            const hay = [f.title, f.summary, f.date, f.d, f.ulid, KIND_LABEL[f.kind], f.from, f.to]
                .filter(Boolean)
                .join(" ")
                .toLowerCase();
            return hay.includes(q);
        });
        // ULIDs are timestamp-prefixed, so lexicographic order is exact
        // chronological order, including within a single day.
        const sorted = rows.slice().sort((a, b) => a.ulid.localeCompare(b.ulid));
        const byKey = new Map<string, Filing[]>();
        for (const f of sorted) {
            const key = f.chain ?? baseSubject(f.title).toLowerCase();
            const g = byKey.get(key);
            if (g) g.push(f);
            else byKey.set(key, [f]);
        }
        const out = Array.from(byKey.entries()).map(([key, members]) => ({ key, members }));
        out.sort((a, b) => a.members[0].ulid.localeCompare(b.members[0].ulid));
        if (!asc) out.reverse();
        return out;
    }, [filings, query, kind, asc]);

    const total = useMemo(() => groups.reduce((n, g) => n + g.members.length, 0), [groups]);

    // Deep links into a collapsed chain: expand the chain and let the anchor land.
    useEffect(() => {
        const hash = window.location.hash.slice(1);
        if (!hash) return;
        for (const g of groups) {
            if (g.members.length > 1 && g.members.some((m) => m.id === hash)) {
                setOpen((prev) => new Set(prev).add(g.key));
                setTimeout(() => document.getElementById(hash)?.scrollIntoView(), 50);
                return;
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const isOpen = (g: { key: string; members: Filing[] }) =>
        filtering || open.has(g.key);

    const toggle = (key: string) =>
        setOpen((prev) => {
            const next = new Set(prev);
            if (next.has(key)) next.delete(key);
            else next.add(key);
            return next;
        });

    return (
        <div>
            {/* controls */}
            <div className="flex flex-col min-[480px]:flex-row gap-3 min-[480px]:items-center">
                <input
                    type="search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search the record"
                    className="w-full min-[480px]:flex-1 rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600"
                />
                <select
                    value={kind}
                    onChange={(e) => setKind(e.target.value as FilingKind | "all" | "flagged")}
                    className="rounded-lg border border-gray-300 px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600"
                >
                    <option value="all">All types</option>
                    <option value="flagged">Flagged</option>
                    {kinds.map((k) => (
                        <option key={k} value={k}>
                            {KIND_LABEL[k]}
                        </option>
                    ))}
                </select>
                <button
                    type="button"
                    onClick={() => setAsc(!asc)}
                    className="rounded-lg border border-gray-300 px-3 py-2 text-sm bg-white hover:bg-gray-50 text-gray-700 text-left min-[480px]:text-center"
                >
                    Date {asc ? "↑" : "↓"}
                </button>
            </div>
            <div className="mt-2 text-right text-xs text-gray-500">
                {total} of {filings.length} documents
            </div>

            {/* table */}
            <div className="mt-4 border border-gray-300 rounded-lg overflow-hidden bg-white divide-y divide-gray-200">
                <div className="hidden sm:grid grid-cols-[8rem_1fr_auto] gap-5 px-5 py-2 bg-gray-50 text-xs font-semibold uppercase tracking-wider text-gray-500">
                    <span>Date</span>
                    <span>Document</span>
                    <span className="w-[7.5rem]" />
                </div>

                {groups.length === 0 && (
                    <div className="px-4 py-6 text-sm text-gray-500">No documents match.</div>
                )}

                {groups.map((g) => {
                    if (g.members.length === 1) {
                        return <Row key={g.members[0].ulid} f={g.members[0]} onEml={requestEml} />;
                    }
                    const first = g.members[0];
                    const last = g.members[g.members.length - 1];
                    const meta = chains?.[g.key];
                    const flaggedIn = meta?.flagged || g.members.some((m) => m.flagged);
                    const opened = isOpen(g);
                    const note = meta?.note ?? g.members.find((m) => m.flagged && m.summary)?.summary;
                    const chainPdf = CHAIN_PDFS[`${threadSlug}|${g.key}`];
                    const range = (() => {
                        if (first.date === last.date) return first.date;
                        const [m1, d1, y1] = first.date.replace(",", "").split(" ");
                        const [m2, d2, y2] = last.date.replace(",", "").split(" ");
                        if (y1 === y2 && m1 === m2) return `${m1} ${d1} to ${d2}, ${y1}`;
                        if (y1 === y2) return `${m1} ${d1} to ${m2} ${d2}, ${y1}`;
                        return `${first.date} to ${last.date}`;
                    })();
                    return (
                        <div key={g.key}>
                            <div
                                className={`grid grid-cols-1 sm:grid-cols-[8rem_1fr_auto] gap-1 sm:gap-5 px-5 py-3 cursor-pointer hover:bg-gray-50 transition-colors ${
                                    flaggedIn ? "bg-emerald-50/60" : ""
                                }`}
                                onClick={() => toggle(g.key)}
                            >
                                <div>
                                    <div className="text-sm font-bold text-gray-900">{range}</div>
                                    <div className="mt-0.5 text-[11px] uppercase tracking-wider text-gray-400">
                                        {g.members.length} messages
                                    </div>
                                </div>
                                <div className="min-w-0">
                                    <div className={`text-sm leading-snug ${flaggedIn ? "font-semibold text-gray-900" : "text-gray-800"}`}>
                                        <span className="mr-1.5 inline-block text-gray-400 text-xs">{opened ? "\u25be" : "\u25b8"}</span>
                                        {baseSubject(first.title)}
                                    </div>
                                    {note && !opened && (
                                        <div className="mt-1 text-sm text-gray-700 leading-relaxed">{note}</div>
                                    )}
                                </div>
                                <div
                                    className="flex sm:justify-end items-start gap-1.5 flex-wrap sm:w-[7.5rem]"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    {chainPdf && (
                                        <a href={chainPdf} download title="Full chain as one PDF" className="group">
                                            <Chip label="PDF" />
                                        </a>
                                    )}
                                </div>
                            </div>
                            {opened && (
                                <div className="divide-y divide-gray-200/70 border-t border-gray-200">
                                    {g.members.map((f) => (
                                        <Row key={f.ulid} f={f} member onEml={requestEml} />
                                    ))}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>

            {/* disclosure modal */}
            {emlOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
                    onClick={() => setEmlOpen(null)}
                >
                    <div
                        className="w-full max-w-lg rounded-2xl bg-white border border-gray-300 p-6 sm:p-8"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h2 className="text-base font-semibold uppercase tracking-widest text-gray-900">
                            Unmodified Email Original
                        </h2>

                        <div className="mt-4 space-y-3 text-sm leading-relaxed text-gray-700">
                            <p>
                                This is a raw email file, exactly as sent or received. Its full
                                headers, addresses, and authentication signatures can be examined
                                with{" "}
                                <a
                                    href="https://toolbox.googleapps.com/apps/messageheader/"
                                    target="_blank"
                                    className="underline text-emerald-700 hover:text-emerald-600"
                                >
                                    standard tools
                                </a>
                                . Nothing in it has been altered.
                            </p>
                            <p>
                                This archive refers to the local staff by role. That is a choice
                                about emphasis, not concealment.
                            </p>
                            <p>
                                In an unmodified record, identity is not protected, because it
                                cannot be.{" "}
                                <a
                                    href="https://github.com/rswfire/rswfire.oprd"
                                    target="_blank"
                                    className="underline text-emerald-700 hover:text-emerald-600"
                                >
                                    Everything here is public
                                </a>
                                , including the open-source repository this archive is published
                                from.
                            </p>
                        </div>

                        <div className="mt-6 flex flex-col sm:flex-row gap-3">
                            <a
                                href={emlOpen}
                                download
                                onClick={() => {
                                    if (suppress) window.localStorage.setItem("eml-notice-suppressed", "1");
                                    setEmlOpen(null);
                                }}
                                className="inline-block px-4 py-2 text-center text-sm font-semibold uppercase tracking-wider text-white bg-emerald-700 border border-emerald-700 rounded-lg hover:bg-emerald-800 transition-colors"
                            >
                                Download the Original
                            </a>
                            <button
                                type="button"
                                onClick={() => setEmlOpen(null)}
                                className="inline-block px-4 py-2 text-sm font-semibold uppercase tracking-wider text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                            >
                                Cancel
                            </button>
                        </div>
                        <label className="mt-4 flex items-center gap-2 text-sm text-gray-600 select-none">
                            <input
                                type="checkbox"
                                checked={suppress}
                                onChange={(e) => setSuppress(e.target.checked)}
                                className="h-4 w-4 accent-emerald-700"
                            />
                            Don't show this notice again
                        </label>

                    </div>
                </div>
            )}
        </div>
    );
}

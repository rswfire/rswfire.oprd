"use client";

// components/TrackerTable.tsx
//
// Every state agency, and where its request stands. A table at desktop
// width; one card per agency on a phone. Search by name or abbreviation,
// and narrow by status.

import { useMemo, useState } from "react";
import Link from "next/link";
import { STATUS_LABEL, type TrackerStatus, type TrackerStep, type TrackerEntry, type StateAgency } from "@/data/tracker";

type Row = StateAgency & { entry: TrackerEntry };

const TONE: Record<TrackerStatus, string> = {
    "not-sent": "bg-gray-100 text-gray-500 ring-gray-200",
    sent: "bg-sky-50 text-sky-800 ring-sky-200",
    acknowledged: "bg-blue-50 text-blue-800 ring-blue-200",
    estimate: "bg-amber-50 text-amber-800 ring-amber-200",
    referred: "bg-violet-50 text-violet-800 ring-violet-200",
    "no-records": "bg-stone-100 text-stone-700 ring-stone-300",
    denied: "bg-rose-50 text-rose-800 ring-rose-200",
    produced: "bg-emerald-50 text-emerald-800 ring-emerald-200",
};

type Filter = "sent" | "all" | "not-sent" | "denied" | "produced";

// The default view is every request that has gone out. It has no chip of its
// own; pressing the active chip again returns to it.
const SENT = (r: Row) => r.entry.status !== "not-sent";

const FILTERS: { key: Filter; label: string; test: (r: Row) => boolean }[] = [
    { key: "all", label: "All", test: () => true },
    { key: "not-sent", label: "Not sent", test: (r) => r.entry.status === "not-sent" },
    { key: "denied", label: "Denials", test: (r) => r.entry.status === "denied" },
    { key: "produced", label: "Productions", test: (r) => r.entry.status === "produced" },
];

function Badge({ status }: { status: TrackerStatus }) {
    return (
        <span className={`inline-flex items-center whitespace-nowrap rounded-full px-2 py-0.5 text-[11px] font-semibold ring-1 ring-inset ${TONE[status]}`}>
            {STATUS_LABEL[status]}
        </span>
    );
}

const MONTHS = ["Jan.", "Feb.", "March", "April", "May", "June", "July", "Aug.", "Sept.", "Oct.", "Nov.", "Dec."];
const short = (d: string) => {
    const [y, m, day] = d.split("-").map(Number);
    return `${MONTHS[m - 1]} ${day}, ${y}`;
};

function Step({ step, brief }: { step?: TrackerStep; brief?: boolean }) {
    if (!step) return <span className="text-gray-300">—</span>;
    const label = brief ? short(step.d) : step.date;
    return step.doc ? (
        <Link href={`/record/${step.doc.thread}/${step.doc.ulid}`} className="whitespace-nowrap underline text-emerald-800 hover:text-emerald-600">
            {label}
        </Link>
    ) : (
        <span className="whitespace-nowrap">{label}</span>
    );
}

function AgencyName({ r }: { r: Row }) {
    return (
        <a href={r.url} target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-emerald-700">
            {r.name}
        </a>
    );
}

function Production({ e }: { e: TrackerEntry }) {
    if (!e.production) return <span className="text-gray-300">—</span>;
    return (
        <Link href={e.production.href} className="underline text-emerald-800 hover:text-emerald-600">
            {e.production.label}
        </Link>
    );
}

export default function TrackerTable({ rows }: { rows: Row[] }) {
    const [q, setQ] = useState("");
    const [filter, setFilter] = useState<Filter>("sent");

    const counts = useMemo(() => {
        const c = {} as Record<Filter, number>;
        c.sent = rows.filter(SENT).length;
        for (const f of FILTERS) c[f.key] = rows.filter(f.test).length;
        return c;
    }, [rows]);

    const shown = useMemo(() => {
        const ql = q.trim().toLowerCase();
        const test = FILTERS.find((f) => f.key === filter)?.test ?? SENT;
        return rows.filter((r) =>
            test(r) && (!ql || r.name.toLowerCase().includes(ql) || r.abbr.toLowerCase().includes(ql)),
        );
    }, [rows, q, filter]);

    const chip = (key: Filter, label: string, n: number) => (
        <button
            key={key}
            type="button"
            onClick={() => setFilter(filter === key ? "sent" : key)}
            aria-pressed={filter === key}
            className={`rounded-full px-3 py-1.5 text-sm font-semibold ring-1 ring-inset transition-colors ${
                filter === key ? "bg-emerald-700 text-white ring-emerald-700" : "bg-white text-gray-600 ring-gray-200 hover:bg-gray-50"
            }`}
        >
            {label} <span className="opacity-70">{n}</span>
        </button>
    );

    return (
        <div>
            <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center">
                <input
                    type="search"
                    value={q}
                    onChange={(e) => setQ(e.target.value)}
                    placeholder="Search agencies"
                    aria-label="Search agencies"
                    className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600 sm:w-48 sm:shrink-0"
                />
                <div className="flex min-w-0 flex-wrap gap-2">
                    {FILTERS.map((f) => chip(f.key, f.label, counts[f.key]))}
                </div>
            </div>

            {/* wide screens */}
            <div className="hidden lg:block overflow-x-auto rounded-xl border border-gray-200">
                <table className="w-full text-sm">
                    <thead className="bg-gray-50 text-left text-[10px] font-bold uppercase tracking-widest text-gray-500">
                        <tr>
                            <th className="w-1/2 px-4 py-2.5">Agency</th>
                            <th className="px-3 py-2.5">Sent</th>
                            <th className="px-3 py-2.5">Acknowledged</th>
                            <th className="px-3 py-2.5">Status</th>
                            <th className="px-4 py-2.5">Production</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {shown.map((r) => (
                            <tr key={r.slug} className={r.entry.status === "not-sent" ? "text-gray-500" : ""}>
                                <td className="px-4 py-2.5 align-top">
                                    <div className={r.entry.status === "not-sent" ? "" : "font-semibold text-gray-900"}><AgencyName r={r} /></div>
                                    {r.entry.ref && <div className="mt-0.5 font-mono text-[11px] text-gray-500">{r.entry.ref}</div>}
                                    {r.entry.note && <div className="mt-0.5 text-xs text-gray-500">{r.entry.note}</div>}
                                </td>
                                <td className="px-3 py-2.5 align-top"><Step step={r.entry.sent} brief /></td>
                                <td className="px-3 py-2.5 align-top"><Step step={r.entry.acknowledged} brief /></td>
                                <td className="px-3 py-2.5 align-top">
                                    {r.entry.statusStep?.doc ? (
                                        <Link href={`/record/${r.entry.statusStep.doc.thread}/${r.entry.statusStep.doc.ulid}`}><Badge status={r.entry.status} /></Link>
                                    ) : (
                                        <Badge status={r.entry.status} />
                                    )}
                                </td>
                                <td className="px-4 py-2.5 align-top"><Production e={r.entry} /></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* phones and narrow screens */}
            <ul className="lg:hidden divide-y divide-gray-100 rounded-xl border border-gray-200">
                {shown.map((r) => (
                    <li key={r.slug} className="px-4 py-3">
                        <div className="flex items-start justify-between gap-3">
                            <div className={`min-w-0 text-sm ${r.entry.status === "not-sent" ? "text-gray-500" : "font-semibold text-gray-900"}`}><AgencyName r={r} /></div>
                            <Badge status={r.entry.status} />
                        </div>
                        {r.entry.status !== "not-sent" && (
                            <dl className="mt-2 grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 text-xs">
                                {r.entry.ref && (<><dt className="text-gray-400">Request</dt><dd className="font-mono">{r.entry.ref}</dd></>)}
                                <dt className="text-gray-400">Sent</dt><dd><Step step={r.entry.sent} /></dd>
                                <dt className="text-gray-400">Acknowledged</dt><dd><Step step={r.entry.acknowledged} /></dd>
                                {r.entry.production && (<><dt className="text-gray-400">Production</dt><dd><Production e={r.entry} /></dd></>)}
                            </dl>
                        )}
                        {r.entry.note && <div className="mt-1.5 text-xs text-gray-500">{r.entry.note}</div>}
                    </li>
                ))}
            </ul>

            {shown.length === 0 && <p className="mt-4 text-sm text-gray-500">No agency matches.</p>}
        </div>
    );
}

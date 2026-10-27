"use client";

// components/TrackerTable.tsx
//
// Every state agency, and where its request stands. A table at desktop
// width; one card per agency on a phone. Search by name or abbreviation,
// and narrow by status.

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import Icon from "@/components/Icon";
import { useDocViewer } from "@/components/DocViewerProvider";
import { STATUS_LABEL, type TrackerStatus, type TrackerStep, type TrackerEntry, type StateAgency } from "@/data/tracker";

// One message in an agency's exchange, resolved from the register.
export interface Letter {
    ulid: string;
    d: string;
    date: string;
    kind: string;
    time?: string;
    from?: string;
    to?: string;
    title: string;
    summary?: string;
}

type Row = StateAgency & { entry: TrackerEntry; letters: Letter[] };

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

function Badge({ status, small }: { status: TrackerStatus; small?: boolean }) {
    const size = small ? "px-1.5 py-px text-[9px] uppercase tracking-wider" : "px-2 py-0.5 text-[11px]";
    return (
        <span className={`inline-flex items-center whitespace-nowrap rounded-full font-semibold ring-1 ring-inset ${size} ${TONE[status]}`}>
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

// Where the request stands, in one cell: two columns, each label over its
// value. Sent and acknowledged on the left; the messages and the production
// on the right.
function Grid({ r, onOpen, brief }: { r: Row; onOpen: (r: Row) => void; brief?: boolean }) {
    const label = "text-[10px] font-semibold uppercase tracking-wider text-gray-400";
    return (
        <div className="grid grid-cols-2 gap-x-6 gap-y-2">
            <div>
                <div className={label}>Sent</div>
                <Step step={r.entry.sent} brief={brief} />
            </div>
            <div className="flex items-center">
                <Count r={r} onOpen={onOpen} />
            </div>
            {r.entry.acknowledged && (
                <div className="col-start-1">
                    <div className={label}>Acknowledged</div>
                    <Step step={r.entry.acknowledged} brief={brief} />
                </div>
            )}
            {r.entry.production && (
                <div className="col-start-2">
                    <div className={label}>Productions</div>
                    <Production e={r.entry} />
                </div>
            )}
        </div>
    );
}

function Dates({ e, brief }: { e: TrackerEntry; brief?: boolean }) {
    const label = "text-[10px] font-semibold uppercase tracking-wider text-gray-400";
    return (
        <div className="space-y-2">
            <div>
                <div className={label}>Sent</div>
                <Step step={e.sent} brief={brief} />
            </div>
            {e.acknowledged && (
                <div>
                    <div className={label}>Acknowledged</div>
                    <Step step={e.acknowledged} brief={brief} />
                </div>
            )}
        </div>
    );
}

function Count({ r, onOpen }: { r: Row; onOpen: (r: Row) => void }) {
    const n = r.letters.length;
    if (n === 0) return <span className="text-gray-300">—</span>;
    return (
        <button
            type="button"
            onClick={() => onOpen(r)}
            className="group inline-flex items-center gap-1.5 rounded-full bg-sky-50 px-2.5 py-0.5 text-sm font-semibold tabular-nums text-sky-800 ring-1 ring-inset ring-sky-200 transition-colors hover:bg-sky-100 hover:ring-sky-300"
            aria-label={`${n} ${n === 1 ? "message" : "messages"} with the ${r.name}: open the communication`}
        >
            <Icon name="MessageSquare" size={13} strokeWidth={2.25} aria-hidden />
            {n}
        </button>
    );
}

const SELF = "Robert Samuel White";

// The panel is headed by the agency, so its name and request number come off
// each title: "Public records request, Department of Aviation, 1510431709"
// reads "Public records request".
function tidy(title: string, r: Row): string {
    let t = title;
    for (const x of [r.entry.ref, r.name].filter(Boolean) as string[]) {
        t = t.split(`, ${x}`).join("").split(`${x}, `).join("");
    }
    return t.replace(/^[,\s]+|[,\s]+$/g, "") || title;
}

const KIND: Record<string, string> = {
    request: "Request",
    response: "Response",
    followup: "Follow-up",
    letter: "Letter",
    notice: "Notice",
    statement: "Statement",
    record: "Record",
    petition: "Petition",
    supplement: "Supplement",
};

// Every message in one agency's exchange, oldest first, on a rail: his on
// the left in green, theirs in blue. A title opens the letter in the
// archive's document viewer, over this panel.
function Overlay({ r, onClose }: { r: Row | null; onClose: () => void }) {
    const closeRef = useRef<HTMLButtonElement>(null);
    const { openDoc } = useDocViewer();
    useEffect(() => {
        if (!r) return;
        const prev = document.activeElement as HTMLElement | null;
        closeRef.current?.focus();
        const overflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        const onKey = (e: KeyboardEvent) => {
            if (e.key !== "Escape") return;
            // The document viewer, when open above the panel, closes first.
            if (document.querySelector(".fixed.inset-0.z-50")) return;
            onClose();
        };
        window.addEventListener("keydown", onKey);
        return () => {
            window.removeEventListener("keydown", onKey);
            document.body.style.overflow = overflow;
            prev?.focus();
        };
    }, [r, onClose]);
    if (!r) return null;

    const first = r.letters[0];
    const last = r.letters[r.letters.length - 1];
    const span = first && last && first.d !== last.d ? `${short(first.d)} to ${short(last.d)}` : first ? first.date : "";
    const view = (e: React.MouseEvent, ulid: string) => {
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
        if (openDoc(ulid)) e.preventDefault();
    };

    return (
        <div className="not-prose fixed inset-0 z-40 flex items-end justify-center bg-slate-950/50 backdrop-blur-[1px] sm:items-stretch sm:justify-end" onClick={onClose}>
            <div
                role="dialog"
                aria-modal="true"
                aria-label={`Communication, ${r.name}`}
                onClick={(e) => e.stopPropagation()}
                className="relative flex max-h-[90vh] w-full flex-col overflow-hidden rounded-t-2xl bg-white shadow-2xl sm:max-h-none sm:w-[38rem] sm:rounded-none sm:border-l-4 sm:border-sky-600"
            >
                <header className="border-b border-gray-200 bg-gradient-to-b from-sky-50/80 to-white px-6 pb-5 pt-5">
                    <div className="flex items-start justify-between gap-4">
                        <div className="min-w-0">
                            <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-sky-700">
                                <Icon name="MessageSquare" size={12} strokeWidth={2.5} aria-hidden />
                                Communication
                            </div>
                            <h2 className="mt-1.5 text-xl font-semibold leading-snug text-gray-900">{r.name}</h2>
                            <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-gray-500">
                                <Badge status={r.entry.status} />
                                {r.entry.ref && <span className="font-mono text-gray-600">{r.entry.ref}</span>}
                                <span>
                                    {r.letters.length} {r.letters.length === 1 ? "message" : "messages"}
                                    {span && <>, {span}</>}
                                </span>
                            </div>
                        </div>
                        <button
                            ref={closeRef}
                            type="button"
                            onClick={onClose}
                            aria-label="Close"
                            className="-mr-1 rounded-full p-1.5 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-800"
                        >
                            <Icon name="X" size={20} />
                        </button>
                    </div>
                </header>

                <ol className="relative flex-1 overflow-y-auto px-6 py-6">
                    {r.letters.map((l, i) => {
                        const mine = l.from === SELF;
                        const newDay = i === 0 || r.letters[i - 1].d !== l.d;
                        return (
                            <li key={l.ulid} className="relative">
                                {newDay && (
                                    <div className={`relative mb-3 ml-9 text-[11px] font-bold uppercase tracking-widest text-gray-400 ${i ? "mt-6" : ""}`}>
                                        {l.date}
                                    </div>
                                )}
<div className="relative pb-3">
                                                                {i < r.letters.length - 1 && r.letters[i + 1].d === l.d && (
                                    <span aria-hidden className="absolute -bottom-0 left-[1.15rem] top-4 w-px bg-gray-200" />
                                )}
                                <span
                                    aria-hidden
                                    className={`absolute left-[0.65rem] top-4 flex h-4 w-4 items-center justify-center rounded-full ring-4 ring-white ${mine ? "bg-emerald-600" : "bg-sky-600"}`}
                                />
                                <div className={`ml-9 rounded-xl border px-4 py-3.5 ${mine ? "border-emerald-200 bg-emerald-50/40" : "border-sky-200 bg-sky-50/40"}`}>
                                    <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-0.5">
                                        <span className={`text-[10px] font-bold uppercase tracking-widest ${mine ? "text-emerald-700" : "text-sky-700"}`}>
                                            {KIND[l.kind] ?? l.kind}
                                        </span>
                                        {l.time && <span className="text-xs tabular-nums text-gray-500">{l.time}</span>}
                                    </div>
                                    <a
                                        href={`/record/public-question-1/${l.ulid}`}
                                        onClick={(e) => view(e, l.ulid)}
                                        className="group mt-1 flex items-start gap-1.5 font-semibold leading-snug text-gray-900 hover:text-emerald-800"
                                    >
                                        <span className="underline decoration-gray-300 underline-offset-2 group-hover:decoration-emerald-600">{tidy(l.title, r)}</span>
                                        <Icon name="FileText" size={14} className="mt-[3px] shrink-0 text-gray-400 group-hover:text-emerald-700" aria-hidden />
                                    </a>
                                    {(l.from || l.to) && (
                                        <div className="mt-1.5 text-xs leading-relaxed text-gray-600">
                                            <span className="font-medium text-gray-800">{l.from}</span>
                                            {l.to && <><span className="text-gray-400"> to </span>{l.to}</>}
                                        </div>
                                    )}
                                    {l.summary && <p className="mt-2 text-sm leading-relaxed text-gray-700">{l.summary}</p>}
                                </div>
                                </div>
                            </li>
                        );
                    })}
                </ol>

                <footer className="border-t border-gray-200 bg-gray-50 px-6 py-3 text-xs text-gray-500">
                    Every message is published in full in the{" "}
                    <Link href="/records/public-question-1" className="underline text-emerald-800 hover:text-emerald-600">Public Question 1 register</Link>.
                </footer>
            </div>
        </div>
    );
}

function Status({ e }: { e: TrackerEntry }) {
    return e.statusStep?.doc ? (
        <Link href={`/record/${e.statusStep.doc.thread}/${e.statusStep.doc.ulid}`}><Badge status={e.status} small /></Link>
    ) : (
        <Badge status={e.status} small />
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
    const [open, setOpen] = useState<Row | null>(null);
    const close = useCallback(() => setOpen(null), []);

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
                <table className="w-full table-fixed text-sm">
                    <thead className="bg-gray-50 text-left text-[10px] font-bold uppercase tracking-widest text-gray-500">
                        <tr>
                            <th className="px-4 py-2.5">Agency</th>
                            <th className="w-36 px-3 py-2.5">Timestamp</th>
                            <th className="w-20 px-4 py-2.5"><span className="sr-only">Communication</span></th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {shown.map((r) => (
                            <tr key={r.slug} className={r.entry.status === "not-sent" ? "text-gray-500" : ""}>
                                <td className="px-4 py-3 align-top">
                                    <div className={r.entry.status === "not-sent" ? "" : "font-semibold text-gray-900"}>
                                        <AgencyName r={r} /><span className="ml-2 inline-block align-[2px]"><Status e={r.entry} /></span>
                                    </div>
                                    {r.entry.ref && <div className="mt-0.5 font-mono text-[11px] text-gray-500">{r.entry.ref}</div>}
                                    {r.entry.note && <div className="mt-0.5 text-xs text-gray-500">{r.entry.note}</div>}
                                </td>
                                <td className="w-36 px-3 py-3 align-top"><Dates e={r.entry} brief /></td>
                                <td className="w-20 px-4 py-3 align-middle text-right">
                                    <Count r={r} onOpen={setOpen} />
                                    {r.entry.production && <div className="mt-2 text-xs"><Production e={r.entry} /></div>}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* phones and narrow screens */}
            <ul className="lg:hidden divide-y divide-gray-100 rounded-xl border border-gray-200">
                {shown.map((r) => (
                    <li key={r.slug} className="px-4 py-3">
                        <div className={`min-w-0 text-sm ${r.entry.status === "not-sent" ? "text-gray-500" : "font-semibold text-gray-900"}`}>
                            <AgencyName r={r} /><span className="ml-2 inline-block align-[1px]"><Status e={r.entry} /></span>
                        </div>
                        {r.entry.ref && <div className="mt-0.5 font-mono text-[11px] text-gray-500">{r.entry.ref}</div>}
                        {r.entry.status !== "not-sent" && (
                            <div className="mt-2.5 text-xs">
                                <Grid r={r} onOpen={setOpen} />
                            </div>
                        )}
                        {r.entry.note && <div className="mt-1.5 text-xs text-gray-500">{r.entry.note}</div>}
                    </li>
                ))}
            </ul>

            {shown.length === 0 && <p className="mt-4 text-sm text-gray-500">No agency matches.</p>}

            <Overlay r={open} onClose={close} />
        </div>
    );
}

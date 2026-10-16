"use client";

// components/system/SystemDiagram.tsx
//
// The structure. One trunk from the empty seat at the top down to the
// volunteer, with what passes between the rungs written on the trunk: what
// went up, what came back down. Two lines leave it sideways: the state
// police, off the agency, and the records, off the volunteer. Each seat
// carries its implied role and its real one. A seat, a connection, or a
// branch opens the documents behind it.
import type { ReactNode } from "react";
import { DoorClosed, Link as LinkIcon } from "lucide-react";
import NextLink from "next/link";
import { RUNGS } from "@/data/system";
import { ACTS } from "@/data/systemActs";
import { Source } from "@/components/system/Docs";
import type { Branch, Edge, Rung, Seat } from "@/data/system";
import { Arrow } from "@/components/system/Sheets";
import { useDrawer } from "@/components/system/DrawerHost";

type Line = "solid" | "dashed" | "none";

const RAIL_X = "left-[19px]";

function RailPiece({ line, className }: { line: Line; className: string }) {
    if (line === "none") return null;
    return (
        <span
            aria-hidden
            className={`absolute ${RAIL_X} w-0 border-l-2 ${line === "dashed" ? "border-dashed border-slate-400" : "border-slate-300"} ${className}`}
        />
    );
}

/** A block on the trunk: the rail above the dot, the dot, the rail below. */
function OnTrunk({ children }: { above?: Line; below?: Line; dot?: "solid" | "empty"; dotTop?: string; children: ReactNode }) {
    return <div className="relative">{children}</div>;
}

function Person({ tone }: { tone: "dark" | "light" | "empty" }) {
    const stroke = tone === "dark" ? "#f8fafc" : tone === "light" ? "#047857" : "#9ca3af";
    const fill = tone === "empty" ? "none" : stroke;
    const dash = tone === "empty" ? "3 3" : undefined;
    return (
        <svg viewBox="0 0 48 56" className="h-9 w-8 shrink-0" aria-hidden>
            <circle cx={24} cy={14} r={10} fill={fill} stroke={stroke} strokeWidth={2} strokeDasharray={dash} />
            <path d="M4 54 C4 36 14 30 24 30 C34 30 44 36 44 54 Z" fill={fill} stroke={stroke} strokeWidth={2} strokeDasharray={dash} />
        </svg>
    );
}


const START = Date.UTC(2025, 1, 1);
const END = Date.UTC(2026, 9, 31);

function dated(d: { d?: string; when?: string }): number | null {
    const t = d.d ? Date.parse(d.d) : d.when ? Date.parse(d.when) : NaN;
    return Number.isFinite(t) && t >= START && t <= END ? t : null;
}

/** Every dated entry for a seat, placed on February 2025 to October 2026. */
function Strip({ docs, tone }: { docs: { d?: string; when?: string }[]; tone: "dark" | "light" | "empty" }) {
    const marks = docs.map(dated).filter((t): t is number => t !== null);
    const base = tone === "dark" ? "bg-white/15" : "bg-slate-300";
    const tick = tone === "dark" ? "bg-emerald-400" : "bg-emerald-600";
    const label = "text-slate-500";
    const year = (Date.UTC(2026, 0, 1) - START) / (END - START);
    return (
        <span className="block">
            <span className="relative block h-5">
                <span className={`absolute inset-x-0 top-1/2 h-px ${base}`} />
                <span className={`absolute top-1 h-3 w-px ${base}`} style={{ left: `${year * 100}%` }} />
                {marks.map((t, i) => (
                    <span key={i} className={`absolute top-0.5 h-4 w-[3px] -translate-x-1/2 rounded-full ${tick}`} style={{ left: `${((t - START) / (END - START)) * 100}%` }} />
                ))}
            </span>
            <span className={`relative mt-1 block h-3 font-mono text-[10px] uppercase leading-none tracking-wider ${label}`}>
                <span className="absolute left-0">2025</span>
                <span className="absolute" style={{ left: `${year * 100}%` }}>2026</span>
            </span>
        </span>
    );
}

/** The door is not a seat. It is where the police section ends. */
function DoorCard({ s }: { s: Seat }) {
    return (
        <NextLink
            href="/#how-it-spread"
            id={`seat-${s.id}`}
            className="group flex h-full w-full scroll-mt-24 flex-col justify-between gap-5 rounded-2xl border-2 border-emerald-700 bg-emerald-50 p-5 no-underline transition-colors hover:bg-emerald-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
        >
            <span className="flex items-start gap-4">
                <DoorClosed aria-hidden size={40} strokeWidth={1.5} className="shrink-0 text-emerald-800" />
                <span className="block text-[19px] font-semibold leading-snug text-gray-900">{s.real}</span>
            </span>
            <span className="flex items-center justify-between text-[13px] font-semibold text-emerald-800">
                <span>How it spread</span>
                <Arrow dir="right" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </span>
        </NextLink>
    );
}

function SeatCard({ s, n, onOpen }: { s: Seat; n?: number; onOpen: () => void }) {
    const tone = s.empty ? "empty" : "light";
    const box = s.empty
        ? "border-2 border-dashed border-gray-300 bg-transparent hover:bg-gray-50"
        : s.id === "volunteer"
          ? "border-2 border-emerald-600 bg-white shadow-sm hover:bg-emerald-50/40"
          : "border border-gray-200 bg-white shadow-sm hover:border-emerald-300 hover:bg-emerald-50/30";
    const title = s.empty ? "text-gray-500" : "text-gray-900";
    const meta = "text-gray-400";
    const implied = "text-gray-600";
    const realLabel = "text-emerald-700";
    const real = "text-gray-900 border-emerald-500";
    const rule = "border-gray-100";
    const more = "text-emerald-700 group-hover:text-emerald-600";
    const entries: { d?: string; when?: string }[] = ACTS[s.id] ?? s.docs;
    const hasDates = !s.empty && s.id !== "volunteer" && entries.some((d) => dated(d) !== null);
    return (
        <div
            role="button"
            tabIndex={0}
            onClick={onOpen}
            onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    onOpen();
                }
            }}
            id={`seat-${s.id}`}
            className={`group flex h-full w-full scroll-mt-24 flex-col rounded-2xl p-5 text-left transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 ${box}`}
        >
            <span className="flex items-start gap-3">
                <Person tone={tone} />
                <span className="min-w-0 pt-0.5">
                    {s.inst || n !== undefined ? (
                        <span className={`block font-mono text-[11px] font-bold uppercase tracking-widest ${meta}`}>
                            {n !== undefined ? <span className="mr-2">{String(n).padStart(2, "0")}</span> : null}
                            {s.inst}
                        </span>
                    ) : null}
                    <span className={`block text-[20px] font-semibold leading-tight tracking-tight ${title}`}>{s.name ?? s.title}</span>
                    {s.name ? <span className={`mt-0.5 block text-[14px] leading-snug ${implied}`}>{s.title}</span> : null}
                </span>
            </span>
            {s.fn ? (
                <span className="mt-5 block">
                    <span className={`block font-mono text-[11px] font-bold uppercase tracking-widest ${meta}`}>Role</span>
                    <span className={`mt-1 block text-[15px] leading-snug ${implied}`}>{s.fn}</span>
                </span>
            ) : null}
            <span className="mt-4 block">
                <span className={`block font-mono text-[11px] font-bold uppercase tracking-widest ${realLabel}`}>Actual function</span>
                <span className={`mt-1 block border-l-2 pl-3 text-[19px] font-semibold leading-snug ${real}`}>{s.real}</span>
            </span>
            {s.note ? (
                <span className="mt-4 flex items-center gap-2 rounded-lg border border-amber-300 bg-amber-50 px-3.5 py-3 text-[13px] italic leading-snug text-amber-950">
                    {s.note.src ? <LinkIcon aria-hidden size={14} strokeWidth={2} className="shrink-0 text-amber-700" /> : null}
                    {s.note.src ? (
                        <span onClick={(e) => e.stopPropagation()} onKeyDown={(e) => e.stopPropagation()}>
                            <Source src={s.note.src}>{s.note.text}</Source>
                        </span>
                    ) : (
                        <span>{s.note.text}</span>
                    )}
                </span>
            ) : null}
            <span className={`mt-auto block border-t pt-4 ${rule} ${s.fn || s.real ? "mt-6" : ""}`}>
                {hasDates ? <Strip docs={entries} tone={tone} /> : null}
                <span className={`mt-2 flex items-center justify-between font-mono text-[12px] transition-colors ${more}`}>
                    <span>{entries.length} in the record</span>
                    <Arrow dir="right" className="h-3.5 w-3.5" />
                </span>
            </span>
        </div>
    );
}

const COLS: Record<number, string> = { 1: "", 2: "@lg:grid-cols-2", 3: "@lg:grid-cols-2" };


function RungBlock({ r, above, below, open }: { r: Rung; above: Line; below: Line; open: (key: string) => void }) {
    const empty = r.seats.length === 1 && r.seats[0].empty;
    return (
        <OnTrunk above={above} below={below} dot={empty ? "empty" : "solid"} dotTop={r.name && r.id !== "park" ? "11px" : "34px"}>
            {r.name && r.id !== "park" ? (
                <div className="mb-2 font-mono text-[12px] font-bold uppercase leading-[22px] tracking-widest text-slate-500">{r.name}</div>
            ) : null}
            <div className={`grid grid-cols-1 gap-2 ${COLS[r.seats.length] ?? ""}`}>
                {r.seats.map((s) => (
                    <SeatCard key={s.id} s={s} onOpen={() => open(`seat-${s.id}`)} />
                ))}
            </div>
        </OnTrunk>
    );
}


function EdgeBlock({ e, open }: { e: Edge; open: (key: string) => void }) {
    return (
        <OnTrunk above="solid" below="solid" dotTop="0px">
            <button
                type="button"
                id={`line-${e.id}`}
                onClick={() => open(`line-${e.id}`)}
                className="-ml-3 my-3 grid w-[calc(100%+0.75rem)] grid-cols-1 gap-x-6 gap-y-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-left transition-colors hover:border-slate-300 hover:bg-white focus-visible:outline-2 focus-visible:outline-emerald-600 @lg:grid-cols-2"
            >
                <span className="flex items-start gap-2 text-[16px] font-medium leading-snug text-slate-900">
                    <Arrow dir="up" className="mt-0.5 h-5 w-5 text-slate-900" />
                    {e.up}
                </span>
                <span className="flex items-start gap-2 text-[16px] font-semibold leading-snug text-emerald-700">
                    <Arrow dir="down" className="mt-0.5 h-5 w-5" />
                    {e.down}
                </span>
            </button>
        </OnTrunk>
    );
}

function Gap({ line }: { line: Line }) {
    return (
        <OnTrunk above={line} below={line} dotTop="0px">
            <div className="h-8" />
        </OnTrunk>
    );
}

/** Consecutive seats in the same institution, kept in order. */
function groups(seats: Seat[]) {
    const out: { inst?: string; seats: { s: Seat; i: number }[] }[] = [];
    seats.forEach((s, i) => {
        const last = out[out.length - 1];
        if (last && last.inst === s.inst) last.seats.push({ s, i });
        else out.push({ inst: s.inst, seats: [{ s, i }] });
    });
    return out;
}

function SectionHead({ title }: { title: string }) {
    return (
        <h2 className="m-0 mb-6 flex items-center gap-4 text-[13px] font-bold uppercase tracking-[0.22em] text-emerald-800">
            <span className="shrink-0">{title}</span>
            <span aria-hidden className="h-px flex-1 bg-emerald-200" />
        </h2>
    );
}

function BranchBlock({ b, open }: { b: Branch; open: (key: string) => void }) {
    return (
        <section aria-label={b.name}>
            <div className="relative">
                <div className="space-y-6">
                    {groups(b.seats).map((g, gi) => (
                        <div key={gi}>
                            {g.inst ? <div className="mb-2 font-mono text-[12px] font-bold uppercase tracking-widest text-slate-500">{g.inst}</div> : null}
                            <ol className="m-0 grid list-none grid-cols-1 gap-2 p-0 @lg:grid-cols-2">
                                {g.seats.map(({ s, i }) => (
                                    <li key={s.id} className="m-0 p-0">
                                        {s.id === "door" ? <DoorCard s={s} /> : <SeatCard s={{ ...s, inst: undefined }} onOpen={() => open(`seat-${s.id}`)} />}
                                    </li>
                                ))}
                            </ol>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}



export default function SystemDiagram() {
    const { open } = useDrawer();

    const last = RUNGS.length - 1;

    const blocks: ReactNode[] = [<SectionHead key="h-trunk" title="The trunk" />];
    const branches: Branch[] = [];
    RUNGS.forEach((r, i) => {
        const above: Line = i === 0 ? "none" : i === 1 ? "dashed" : "solid";
        const below: Line = i === 0 ? "dashed" : i === last ? "none" : "solid";
        if (r.id === "park") {
            blocks.push(
                <OnTrunk key="h-park" above="solid" below="solid" dotTop="0px">
                    <div className="pb-2 pt-8"><SectionHead title="The park" /></div>
                </OnTrunk>,
            );
        }
        blocks.push(<RungBlock key={r.id} r={r} above={above} below={below} open={open} />);
        if (r.branch) branches.push(r.branch);
        if (i === 0) blocks.push(<Gap key="gap" line="dashed" />);
        else if (r.below) blocks.push(<EdgeBlock key={r.below.id} e={r.below} open={open} />);
    });
    branches.forEach((b) => {
        blocks.push(
            <div key={`h-${b.id}`} className="mt-16">
                <SectionHead title={b.name} />
                <BranchBlock b={b} open={open} />
            </div>,
        );
    });

    return (
        <div className="@container">
            {blocks}
        </div>
    );
}

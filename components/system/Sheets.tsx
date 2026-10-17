// components/system/Sheets.tsx
//
// Every drawer in the archive, by its address: #seat-…, #line-…, #branch-….
// Built from the seats and acts on Key Individuals; opened anywhere by the
// drawer host in the root layout.
import { Bot, Link as LinkIcon } from "lucide-react";
import { ACTS_REVIEW } from "@/data/actsReview";
import { RUNGS } from "@/data/system";
import { ACTS } from "@/data/systemActs";
import type { Edge, Seat } from "@/data/system";
import { Source } from "@/components/system/Docs";
import type { SheetContent } from "@/components/system/DocSheet";

export function Arrow({ dir, className }: { dir: "up" | "down" | "right"; className?: string }) {
    const d = dir === "up" ? "M8 13V3M3.5 7.5 8 3l4.5 4.5" : dir === "down" ? "M8 3v10M3.5 8.5 8 13l4.5-4.5" : "M3 8h10M8.5 3.5 13 8l-4.5 4.5";
    return (
        <svg viewBox="0 0 16 16" className={`h-4 w-4 shrink-0 ${className ?? ""}`} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d={d} />
        </svg>
    );
}

/** The rungs that are Oregon State Parks: their seats carry the agency's name. */
const OPRD_RUNGS = new Set(["agency", "program", "park"]);

/** A record built by the experimental process, and when he last reviewed it. */
function Experimental({ reviewed }: { reviewed: string | null }) {
    const when = reviewed
        ? `${reviewed.slice(5, 7)}/${reviewed.slice(8, 10)}/${reviewed.slice(2, 4)}`
        : "Pending";
    return (
        <div className="flex items-center gap-2.5 whitespace-nowrap">
            <span className="flex shrink-0 items-center gap-1.5 rounded-md bg-violet-50 px-2 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-violet-700 ring-1 ring-violet-200">
                <Bot aria-hidden size={13} strokeWidth={2} />
                Experimental
            </span>
            <span className="ml-auto min-w-0 truncate text-[13px] uppercase tracking-wide text-gray-500 sm:ml-0" style={{ fontFamily: "var(--font-open-sans-condensed)", fontStretch: "75%" }}>
                Last human review: <span className="font-semibold text-gray-700">{when}</span>
            </span>
        </div>
    );
}

function seatSheet(s: Seat, where?: string, rung?: string): SheetContent {
    return {
        eyebrow: s.office
            ? s.title
            : Array.from(new Set([s.name ? s.title : undefined, s.inst ?? (rung && OPRD_RUNGS.has(rung) ? "Oregon State Parks" : where)].filter((l): l is string => Boolean(l)))),
        title: s.office ? s.agency ?? s.inst ?? s.title : s.name ?? s.title,
        head: (
            <div className="grid gap-4">
                <Experimental reviewed={ACTS_REVIEW[s.id] ?? null} />
                {s.fn ? (
                    <div>
                        <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-gray-500">The role the title promises</div>
                        <p className="m-0 mt-1.5 text-[15px] leading-relaxed text-gray-700">{s.fn}</p>
                    </div>
                ) : null}
                {s.note ? (
                    <div className="order-last flex items-center gap-2.5 rounded-xl border border-amber-300 bg-amber-50 px-4 py-3.5 text-[14px] italic leading-snug text-amber-950">
                        {s.note.src ? <LinkIcon aria-hidden size={15} strokeWidth={2} className="shrink-0 text-amber-700" /> : null}
                        <span>{s.note.src ? <Source src={s.note.src}>{s.note.text}</Source> : s.note.text}</span>
                    </div>
                ) : null}
                <div className="rounded-xl border-l-4 border-emerald-600 bg-emerald-50 px-4 py-3.5">
                    <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-emerald-800">The function the record shows</div>
                    <p className="m-0 mt-1 text-[18px] font-semibold leading-snug text-gray-900">{s.real}</p>
                </div>
            </div>
        ),
        docs: s.docs,
        acts: ACTS[s.id],
    };
}

function edgeSheet(e: Edge): SheetContent {
    return {
        title: e.up,
        head: (
            <div className="grid gap-2.5 rounded-xl border-l-4 border-emerald-600 bg-emerald-50 px-4 py-3.5 text-[16px] leading-snug">
                <div className="flex items-start gap-2.5 text-gray-800"><Arrow dir="up" className="mt-0.5 h-5 w-5 text-gray-500" />{e.up}</div>
                <div className="flex items-start gap-2.5 font-semibold text-gray-900"><Arrow dir="down" className="mt-0.5 h-5 w-5 text-emerald-700" />{e.down}</div>
            </div>
        ),
        docs: e.docs,
        lead: e.acts ? e.docs : undefined,
        acts: e.acts ? ACTS[e.acts]?.filter((a) => !e.until || a.d <= e.until) : undefined,
    };
}

/** Every drawer, by its address. */
export
const SHEETS = new Map<string, () => SheetContent>();
RUNGS.forEach((r) => {
    r.seats.forEach((s) => SHEETS.set(`seat-${s.id}`, () => seatSheet(s, r.name, r.id)));
    if (r.below) {
        const e = r.below;
        SHEETS.set(`line-${e.id}`, () => edgeSheet(e));
    }
    if (r.branch) {
        const b = r.branch;
        SHEETS.set(`branch-${b.id}`, () => ({ eyebrow: b.name, title: b.out, docs: b.docs }));
        b.seats.forEach((s) => SHEETS.set(`seat-${s.id}`, () => seatSheet(s, b.name)));
    }
});


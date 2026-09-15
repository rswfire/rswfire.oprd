"use client";

// components/traces/TraceProvider.tsx
//
// A walk, as a citable thing.
//
// Some of what happened to him was never filmed. He arrived on the coast and
// went dark for a stretch, and the only record of those weeks is the one his
// recorder kept without being asked: where he was, how far, how long. A trace
// is not a claim about a day. It is the day, in coordinates.
//
// The index is generated from the realm's own traces table:
//
//     node scripts/make-traces.mjs --write
//
// Only public traces are carried, so a citation can never surface something
// that is not already open.
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import Icon from "@/components/Icon";
import TraceMap from "@/components/traces/TraceMap";
import { REALM_TRACES, type TraceRecord } from "@/data/traces";

export type { TraceRecord };

interface TraceApi {
    openTrace: (ulid: string) => void;
    hasTrace: (ulid: string) => boolean;
}

const Ctx = createContext<TraceApi | null>(null);

export function useTraces(): TraceApi {
    return useContext(Ctx) ?? { openTrace: () => {}, hasTrace: () => false };
}

function longDate(iso: string | null): string {
    if (!iso) return "";
    return new Date(iso).toLocaleDateString("en-US", {
        weekday: "long", month: "long", day: "numeric", year: "numeric", timeZone: "UTC",
    });
}

function elapsed(a: string | null, b: string | null): string | null {
    if (!a || !b) return null;
    const mins = Math.round((Date.parse(`${b}Z`) - Date.parse(`${a}Z`)) / 60000);
    if (!Number.isFinite(mins) || mins <= 0) return null;
    const h = Math.floor(mins / 60);
    return h ? `${h}h ${mins % 60}m` : `${mins}m`;
}

function Stat({ label, value }: { label: string; value: string }) {
    return (
        <div>
            <div className="text-[10px] font-bold uppercase tracking-widest text-indigo-700">{label}</div>
            <div className="font-mono text-sm text-slate-900">{value}</div>
        </div>
    );
}

export default function TraceProvider({ children }: { children: React.ReactNode }) {
    const [open, setOpen] = useState<TraceRecord | null>(null);

    const find = useCallback((ulid: string) => REALM_TRACES.find((t) => t.id === ulid) ?? null, []);

    const api = useMemo(
        () => ({
            openTrace: (ulid: string) => { const t = find(ulid); if (t) setOpen(t); },
            hasTrace: (ulid: string) => find(ulid) !== null,
        }),
        [find]
    );

    useEffect(() => {
        if (!open) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") { e.preventDefault(); setOpen(null); }
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [open]);

    const took = open ? elapsed(open.started, open.finished) : null;

    return (
        <Ctx.Provider value={api}>
            {children}
            {open && (
                <>
                    <div
                        className="fixed inset-0 z-[88] bg-slate-900/70 backdrop-blur-sm"
                        onClick={() => setOpen(null)}
                        aria-hidden
                    />
                    <div
                        className="fixed inset-0 z-[92] flex items-center justify-center p-3 sm:p-8"
                        role="dialog"
                        aria-modal
                        aria-label={open.name}
                        onClick={() => setOpen(null)}
                    >
                        <div
                            className="flex max-h-full w-full max-w-lg flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flex items-start gap-3 border-b border-indigo-200 bg-indigo-50 px-4 py-2.5">
                                <Icon name="Route" className="mt-0.5 shrink-0 text-indigo-700" size={18} strokeWidth={2} />
                                <div className="min-w-0 flex-1">
                                    <div className="text-[10px] font-bold uppercase tracking-widest text-indigo-700">
                                        Trace
                                    </div>
                                    <div className="text-sm font-semibold text-slate-900">{open.name}</div>
                                    <div className="font-mono text-[11px] text-slate-500">{longDate(open.started)}</div>
                                </div>
                                <button
                                    onClick={() => setOpen(null)}
                                    aria-label="Close"
                                    className="rounded-md p-1.5 text-slate-500 hover:bg-white hover:text-slate-900"
                                >
                                    <Icon name="X" size={18} strokeWidth={2} />
                                </button>
                            </div>

                            <div className="min-h-0 flex-1 overflow-y-auto">
                                <TraceMap trace={open} />

                                <div className="grid grid-cols-3 gap-3 border-b border-slate-100 px-4 py-3">
                                    <Stat label="Distance" value={`${open.miles} mi`} />
                                    {took && <Stat label="Moving" value={took} />}
                                    <Stat
                                        label="Centre"
                                        value={`${((open.bounds.s + open.bounds.n) / 2).toFixed(3)}, ${((open.bounds.w + open.bounds.e) / 2).toFixed(3)}`}
                                    />
                                </div>

                                {open.about && (
                                    <p className="px-4 py-3 text-[13px] leading-relaxed text-slate-700">{open.about}</p>
                                )}
                            </div>

                            <div className="flex items-center justify-between gap-3 border-t border-slate-200 px-4 py-2 text-[11px]">
                                <span className="font-mono uppercase tracking-widest text-slate-400">
                                    Recorded track
                                </span>
                                {/* The ULID is the link, as everywhere else in this archive.
                                    The atlas takes ?trace=<id> as a deep link: it zooms to
                                    the track and opens it once the layer has loaded. */}
                                <a
                                    href={`https://rswfire.com/rswfire/atlas?trace=${open.id}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title="Open this trace on the map"
                                    className="font-mono text-indigo-700 underline decoration-indigo-300 underline-offset-2 hover:text-indigo-500"
                                >
                                    {open.id}
                                </a>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </Ctx.Provider>
    );
}

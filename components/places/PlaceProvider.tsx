"use client";

// components/places/PlaceProvider.tsx
//
// Ground, as a citable thing. The archive already cites what was said, what
// was written, and what was photographed; this cites where it happened. A
// place in the realm is a named point with a boundary, and the recordings
// made on it are attached to it, so naming a place in the prose can open the
// list of everything on the record that happened there.
//
// The index is generated, not hand-kept: scripts/make-places-index.mjs reads
// the realm's own places table. Only public recordings are listed, so a
// citation can never surface something that is not already open.
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import Icon from "@/components/Icon";
import { usePlayer } from "@/components/player/PlayerProvider";
import { REALM_PLACES, type PlaceRecord } from "@/data/places";

export type { PlaceRecord };

interface PlaceApi {
    openPlace: (name: string) => void;
    hasPlace: (name: string) => boolean;
}

const Ctx = createContext<PlaceApi | null>(null);

export function usePlaces(): PlaceApi {
    return useContext(Ctx) ?? { openPlace: () => {}, hasPlace: () => false };
}

function longDate(iso: string | null): string {
    if (!iso) return "";
    const d = new Date(iso);
    return d.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" });
}

export default function PlaceProvider({ children }: { children: React.ReactNode }) {
    const [open, setOpen] = useState<PlaceRecord | null>(null);
    const { open: openRecording } = usePlayer();

    // The index ships with the page, so a place citation renders as a link
    // in the HTML itself rather than appearing after a round trip.
    const find = useCallback(
        (name: string) => REALM_PLACES.find((p) => p.name.toLowerCase() === name.toLowerCase()) ?? null,
        []
    );

    const api = useMemo(
        () => ({
            openPlace: (name: string) => { const p = find(name); if (p) setOpen(p); },
            hasPlace: (name: string) => find(name) !== null,
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

    const span =
        open && open.first
            ? open.first.slice(0, 10) === (open.last ?? "").slice(0, 10)
                ? longDate(open.first)
                : `${longDate(open.first)} – ${longDate(open.last)}`
            : null;

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
                            <div className="flex items-start gap-3 border-b border-rose-200 bg-rose-50 px-4 py-2.5">
                                <Icon name="MapPin" className="mt-0.5 shrink-0 text-rose-700" size={18} strokeWidth={2} />
                                <div className="min-w-0 flex-1">
                                    <div className="text-[10px] font-bold uppercase tracking-widest text-rose-700">
                                        Place
                                    </div>
                                    <div className="text-sm font-semibold text-slate-900">{open.name}</div>
                                    {span && <div className="font-mono text-[11px] text-slate-500">{span}</div>}
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
                                {open.about && (
                                    <p className="border-b border-slate-100 px-4 py-3 text-[13px] leading-relaxed text-slate-700">
                                        {open.about}
                                    </p>
                                )}

                                {open.recordings.length > 0 ? (
                                    <ul className="divide-y divide-slate-100">
                                        {open.recordings.map((r) => (
                                            <li key={r.u}>
                                                <button
                                                    type="button"
                                                    onClick={() => { setOpen(null); openRecording({ ulid: r.u, t: 0 }); }}
                                                    className="flex w-full items-baseline gap-3 px-4 py-2.5 text-left hover:bg-slate-50"
                                                >
                                                    <span className="shrink-0 font-mono text-[11px] text-slate-400">{r.d}</span>
                                                    <span className="text-[13px] leading-snug text-slate-800">{r.t}</span>
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p className="px-4 py-6 text-center text-[13px] text-slate-500">
                                        No public recordings are attached to this place.
                                    </p>
                                )}
                            </div>

                            <div className="flex items-center justify-between gap-3 border-t border-slate-200 px-4 py-2 text-[11px]">
                                <span className="font-mono uppercase tracking-widest text-slate-400">
                                    {open.count} recording{open.count === 1 ? "" : "s"} on the record
                                </span>
                                {open.lat != null && open.lon != null && (
                                    <span className="font-mono text-slate-400">
                                        {(+open.lat).toFixed(4)}, {(+open.lon).toFixed(4)}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                </>
            )}
        </Ctx.Provider>
    );
}

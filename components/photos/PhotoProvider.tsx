"use client";

// components/photos/PhotoProvider.tsx
//
// Photographs from the realm, shown in place. A photograph is an attachment on
// a signal, so it is addressed the way everything else here is addressed: the
// signal's ULID and the attachment's ULID. The bytes come from the same media
// proxy that serves the recordings, which enforces the signal's visibility
// floor, so nothing private can be surfaced by citing it.
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import Icon from "@/components/Icon";

const MEDIA_ORIGIN = process.env.NEXT_PUBLIC_MEDIA_ORIGIN || "https://rswfire.com";

export interface PhotoRef {
    signal: string;
    photo: string;
    caption?: string;
    taken?: string;
}

interface PhotoApi {
    openPhoto: (ref: PhotoRef) => void;
}

const Ctx = createContext<PhotoApi | null>(null);

export function usePhotos(): PhotoApi {
    return useContext(Ctx) ?? { openPhoto: () => {} };
}

export function photoUrl(signal: string, photo: string): string {
    return `${MEDIA_ORIGIN}/media/${signal}/${photo}`;
}

export default function PhotoProvider({ children }: { children: React.ReactNode }) {
    const [ref, setRef] = useState<PhotoRef | null>(null);
    const [loaded, setLoaded] = useState(false);

    const openPhoto = useCallback((r: PhotoRef) => {
        setLoaded(false);
        setRef(r);
    }, []);

    useEffect(() => {
        if (!ref) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") { e.preventDefault(); setRef(null); }
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [ref]);

    const api = useMemo(() => ({ openPhoto }), [openPhoto]);

    return (
        <Ctx.Provider value={api}>
            {children}
            {ref && (
                <>
                    <div
                        className="fixed inset-0 z-[88] bg-slate-900/80 backdrop-blur-sm"
                        onClick={() => setRef(null)}
                        aria-hidden
                    />
                    <div
                        className="fixed inset-0 z-[92] flex items-center justify-center p-3 sm:p-8"
                        role="dialog"
                        aria-modal
                        aria-label={ref.caption ?? "Photograph"}
                        onClick={() => setRef(null)}
                    >
                        <figure
                            className="max-h-full w-full max-w-4xl overflow-hidden rounded-2xl bg-white shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flex items-start gap-3 border-b border-violet-200 bg-violet-50 px-4 py-2.5">
                                <Icon name="Image" className="mt-0.5 shrink-0 text-violet-700" size={18} strokeWidth={2} />
                                <figcaption className="min-w-0 flex-1">
                                    <div className="text-[10px] font-bold uppercase tracking-widest text-violet-700">
                                        Photograph
                                    </div>
                                    <div className="truncate text-sm text-slate-900">{ref.caption}</div>
                                    {ref.taken && (
                                        <div className="font-mono text-[11px] text-slate-500">{ref.taken}</div>
                                    )}
                                </figcaption>
                                <button
                                    onClick={() => setRef(null)}
                                    aria-label="Close"
                                    className="rounded-md p-1.5 text-slate-500 hover:bg-white hover:text-slate-900"
                                >
                                    <Icon name="X" size={18} strokeWidth={2} />
                                </button>
                            </div>

                            <div className="flex max-h-[70vh] items-center justify-center bg-slate-900">
                                {!loaded && (
                                    <div className="py-16 font-mono text-[11px] uppercase tracking-widest text-slate-400">
                                        Loading
                                    </div>
                                )}
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={photoUrl(ref.signal, ref.photo)}
                                    alt={ref.caption ?? "Photograph from the record"}
                                    onLoad={() => setLoaded(true)}
                                    className={`max-h-[70vh] w-auto max-w-full object-contain ${loaded ? "" : "hidden"}`}
                                />
                            </div>

                            <div className="flex items-center justify-between gap-3 px-4 py-2 text-[11px]">
                                <a
                                    href={`https://rswfire.com/library/signal/${ref.signal}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-semibold uppercase tracking-widest text-violet-700 hover:underline"
                                >
                                    The signal it belongs to
                                </a>
                                <span className="font-mono uppercase tracking-widest text-slate-400">{ref.photo}</span>
                            </div>
                        </figure>
                    </div>
                </>
            )}
        </Ctx.Provider>
    );
}

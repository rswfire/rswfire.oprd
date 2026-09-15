"use client";

// components/sunlight/SunlightProvider.tsx
//
// One sunlight overlay for the whole archive. A claim about what the
// department wrote can be cited anywhere in the prose; this resolves the
// entry against public/sunlight/index.json and shows their words next to the
// record, without the reader losing the paragraph they were in.
//
// On a phone it does nothing and the citation navigates to /sunlight with the
// entry's anchor, which selects the tab and scrolls to it.
import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import Icon from "@/components/Icon";

const PREFIX = process.env.NEXT_PUBLIC_ASSET_PREFIX ?? "";

export interface SunlightBlockData {
    t: "says" | "record" | "p" | "links";
    md: string;
}

export interface SunlightEntry {
    id: string;
    tab: string;
    heading: string;
    blocks: SunlightBlockData[];
}

interface SunlightApi {
    /** Opens the overlay. Returns false when the caller should navigate instead. */
    openEntry: (id: string, tab?: string) => boolean;
    inline: boolean;
}

const Ctx = createContext<SunlightApi | null>(null);

export function useSunlight(): SunlightApi {
    return useContext(Ctx) ?? { openEntry: () => false, inline: false };
}

/** Inline markdown: [text](url), **bold**, *italic*. Same rules as the page. */
function md(text: string): React.ReactNode[] {
    const out: React.ReactNode[] = [];
    const pattern = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*|\*([^*]+)\*/g;
    let last = 0;
    let m: RegExpExecArray | null;
    let key = 0;
    while ((m = pattern.exec(text)) !== null) {
        if (m.index > last) out.push(text.slice(last, m.index));
        if (m[1] !== undefined) {
            const href = m[2].replace("https://oprdvolunteerabuse.org", "");
            out.push(
                <a key={key++} href={href} className="text-emerald-800 underline decoration-emerald-300 hover:text-emerald-600">
                    {m[1]}
                </a>,
            );
        } else if (m[3] !== undefined) {
            out.push(<strong key={key++}>{m[3]}</strong>);
        } else if (m[4] !== undefined) {
            out.push(<em key={key++}>{m[4]}</em>);
        }
        last = pattern.lastIndex;
    }
    if (last < text.length) out.push(text.slice(last));
    return out;
}

function Blocks({ blocks }: { blocks: SunlightBlockData[] }) {
    // Same grouping the page uses: a "says" opens their segment, a "record"
    // opens the answering one and carries everything after it.
    const segments: { t: "says" | "record"; blocks: SunlightBlockData[] }[] = [];
    for (const b of blocks) {
        if (b.t === "says" || b.t === "record" || segments.length === 0) {
            segments.push({ t: b.t === "says" ? "says" : "record", blocks: [b] });
        } else {
            segments[segments.length - 1].blocks.push(b);
        }
    }
    return (
        <div className="space-y-4">
            {segments.map((seg, i) => (
                <div
                    key={i}
                    className={
                        seg.t === "says"
                            ? "rounded-r-md border-l-2 border-amber-300 bg-amber-50/60 px-4 py-3"
                            : "rounded-r-md border-l-2 border-emerald-400 bg-white px-4 py-3"
                    }
                >
                    <div
                        className={`mb-1 text-[11px] font-semibold uppercase tracking-widest ${
                            seg.t === "says" ? "text-amber-700" : "text-emerald-700"
                        }`}
                    >
                        {seg.t === "says" ? "The document says" : "The record"}
                    </div>
                    <div className="text-[15px] leading-relaxed text-gray-800">
                        {seg.blocks.map((b, j) =>
                            b.t === "links" ? (
                                <ul key={j} className="mt-3 list-disc space-y-1 pl-6">
                                    {b.md.split("\n").map((line, k) => (
                                        <li key={k}>{md(line.replace(/^- /, ""))}</li>
                                    ))}
                                </ul>
                            ) : (
                                <div key={j} className={j > 0 ? "mt-3" : undefined}>
                                    {b.md.split("\n\n").map((para, k) => (
                                        <p key={k} className={k > 0 ? "mt-3" : undefined}>
                                            {md(para)}
                                        </p>
                                    ))}
                                </div>
                            ),
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default function SunlightProvider({ children }: { children: React.ReactNode }) {
    const [entry, setEntry] = useState<SunlightEntry | null>(null);
    const [inline, setInline] = useState(false);
    const index = useRef<Record<string, SunlightEntry> | null>(null);
    const pending = useRef<string | null>(null);

    useEffect(() => {
        const mq = window.matchMedia("(min-width: 768px)");
        const sync = () => setInline(mq.matches);
        sync();
        mq.addEventListener("change", sync);
        return () => mq.removeEventListener("change", sync);
    }, []);

    const load = useCallback(async () => {
        if (index.current) return index.current;
        const res = await fetch(`${PREFIX}/sunlight/index.json`);
        if (!res.ok) throw new Error(`sunlight index ${res.status}`);
        index.current = (await res.json()) as Record<string, SunlightEntry>;
        return index.current;
    }, []);

    const openEntry = useCallback((id: string) => {
        if (!inline) return false;
        const hit = index.current?.[id];
        if (hit) {
            setEntry(hit);
            return true;
        }
        pending.current = id;
        load()
            .then((idx) => {
                if (pending.current !== id) return;
                const found = idx[id];
                if (found) setEntry(found);
                else window.location.href = `/sunlight/#${id}`;
            })
            .catch(() => {
                if (pending.current === id) window.location.href = `/sunlight/#${id}`;
            });
        return true;
    }, [inline, load]);

    // Escape closes, like the other overlays.
    useEffect(() => {
        if (!entry) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") { e.preventDefault(); setEntry(null); }
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [entry]);

    const api = useMemo(() => ({ openEntry, inline }), [openEntry, inline]);

    return (
        <Ctx.Provider value={api}>
            {children}
            {entry && (
                <>
                    <div
                        className="fixed inset-0 z-[80] bg-slate-900/60 backdrop-blur-sm"
                        onClick={() => setEntry(null)}
                        aria-hidden
                    />
                    <div
                        className="fixed inset-x-0 bottom-0 top-auto z-[85] mx-auto w-full max-w-3xl px-0 sm:bottom-auto sm:top-1/2 sm:-translate-y-1/2 sm:px-4"
                        role="dialog"
                        aria-modal
                        aria-label={`Sunlight: ${entry.heading}`}
                    >
                        <div className="max-h-[85vh] overflow-y-auto rounded-t-2xl border border-slate-300 bg-white shadow-2xl sm:rounded-2xl">
                            <div className="sticky top-0 flex items-start gap-3 border-b border-amber-200 bg-amber-50 px-4 py-3">
                                <Icon name="Sun" className="mt-0.5 shrink-0 text-amber-500" size={18} strokeWidth={2} />
                                <div className="min-w-0 flex-1">
                                    <div className="text-[10px] font-bold uppercase tracking-widest text-amber-700">
                                        Sunlight · their document, next to the record
                                    </div>
                                    <div className="truncate font-mono text-sm font-bold text-gray-900">{entry.heading}</div>
                                </div>
                                <button
                                    onClick={() => setEntry(null)}
                                    aria-label="Close"
                                    className="rounded-md p-1.5 text-slate-500 hover:bg-white hover:text-slate-900"
                                >
                                    <Icon name="X" size={18} strokeWidth={2} />
                                </button>
                            </div>
                            <div className="px-4 py-4">
                                <Blocks blocks={entry.blocks} />
                                <div className="mt-5 border-t border-slate-200 pt-3 text-[11px]">
                                    <Link
                                        href={`/sunlight/#${entry.id}`}
                                        onClick={() => setEntry(null)}
                                        className="font-semibold uppercase tracking-widest text-amber-700 hover:underline"
                                    >
                                        Open this entry in the document
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </Ctx.Provider>
    );
}

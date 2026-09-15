"use client";

// components/reflections/ReflectionProvider.tsx
//
// A period of his life, as a citable thing. A cluster groups the signals of a
// stretch — the crossing, the caretaker year — and the realm has already read
// that stretch: an analysis of the span and its reflections. This opens that
// reading, fetched live from the realm at /qp/cluster/{id}, so the testimony
// can point at how the record understands a whole chapter, not only a second
// of one recording.
//
// Nothing is baked. The realm answers for itself; anonymous callers get the
// public reflections only, which the endpoint enforces.
import { createContext, useContext, useCallback, useEffect, useMemo, useState } from "react";
import Icon from "@/components/Icon";
import Prose from "@/components/reflections/Prose";
import { fetchCluster, type ClusterRecord } from "@/lib/qp";

interface ReflectionApi {
    openCluster: (id: string) => void;
}

const Ctx = createContext<ReflectionApi | null>(null);

export function useReflections(): ReflectionApi {
    return useContext(Ctx) ?? { openCluster: () => {} };
}

type Tab = "reflection" | "analysis";

// A loaded cluster that carries neither reflection nor analysis is a real
// "nothing public here" answer. A failed fetch is not — it is a 404 (wrong id,
// or the period is not public), a transport error, or a realm that did not
// answer. The panel has to tell those apart rather than calling every failure
// "no public reflections". This turns a thrown error into the honest reason.
function errorReason(message: string): string {
    if (/\b(404|403)\b/.test(message)) return "This period is not part of the public record.";
    if (/\b5\d\d\b/.test(message)) return `The realm returned an error (${message}).`;
    if (/failed to fetch|networkerror|load failed/i.test(message)) return "Could not reach the realm. Check the connection and try again.";
    return `Could not load this period (${message}).`;
}

export default function ReflectionProvider({ children }: { children: React.ReactNode }) {
    const [id, setId] = useState<string | null>(null);
    const [record, setRecord] = useState<ClusterRecord | null>(null);
    const [state, setState] = useState<"idle" | "loading" | "error">("idle");
    const [error, setError] = useState<string | null>(null);
    const [tab, setTab] = useState<Tab>("reflection");

    const openCluster = useCallback((clusterId: string) => {
        setId(clusterId);
        setTab("reflection");
    }, []);

    const close = useCallback(() => { setId(null); setRecord(null); setState("idle"); setError(null); }, []);

    useEffect(() => {
        if (!id) return;
        const controller = new AbortController();
        let cancelled = false;
        setRecord(null);
        setError(null);
        setState("loading");
        fetchCluster(id, controller.signal).then(
            (r) => { if (!cancelled) { setRecord(r); setState("idle"); } },
            (e) => {
                if (cancelled || controller.signal.aborted) return;
                setError(errorReason(e instanceof Error ? e.message : String(e)));
                setState("error");
            }
        );
        const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") { e.preventDefault(); close(); } };
        window.addEventListener("keydown", onKey);
        return () => { cancelled = true; controller.abort(); window.removeEventListener("keydown", onKey); };
    }, [id, close]);

    const api = useMemo(() => ({ openCluster }), [openCluster]);

    const narrative = record?.reflections.find((r) => r.type === "NARRATIVE")?.content;
    const mirror = record?.reflections.find((r) => r.type === "MIRROR")?.content;
    const analysis = [record?.environment, record?.substrate].filter(Boolean).join("\n\n");
    const hasReflection = Boolean(narrative || mirror);
    const hasAnalysis = Boolean(analysis);

    return (
        <Ctx.Provider value={api}>
            {children}
            {id && (
                <>
                    <div className="fixed inset-0 z-[88] bg-slate-900/70 backdrop-blur-sm" onClick={close} aria-hidden />
                    <div
                        className="fixed inset-0 z-[92] flex items-center justify-center p-3 sm:p-8"
                        role="dialog"
                        aria-modal
                        aria-label={record?.title ?? "Reflection"}
                        onClick={close}
                    >
                        <div
                            className="flex max-h-full w-full max-w-lg flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flex items-start gap-3 border-b border-sky-200 bg-sky-50 px-4 py-2.5">
                                <Icon name="Layers" className="mt-0.5 shrink-0 text-sky-700" size={18} strokeWidth={2} />
                                <div className="min-w-0 flex-1">
                                    <div className="text-[10px] font-bold uppercase tracking-widest text-sky-700">
                                        The record, on this period
                                    </div>
                                    <div className="text-sm font-semibold text-slate-900">{record?.title ?? "…"}</div>
                                    {record?.summary && (
                                        <div className="mt-0.5 text-[11px] leading-snug text-slate-500">{record.summary.replace(/\*\*(.+?)\*\*/g, "$1")}</div>
                                    )}
                                </div>
                                <button onClick={close} aria-label="Close" className="rounded-md p-1.5 text-slate-500 hover:bg-white hover:text-slate-900">
                                    <Icon name="X" size={18} strokeWidth={2} />
                                </button>
                            </div>

                            {(hasReflection || hasAnalysis) && (
                                <div className="flex gap-4 border-b border-slate-100 px-4 py-2">
                                    {hasReflection && (
                                        <button
                                            onClick={() => setTab("reflection")}
                                            className={`text-[10px] font-bold uppercase tracking-widest ${tab === "reflection" ? "text-sky-700" : "text-slate-400 hover:text-slate-600"}`}
                                        >
                                            Reflection
                                        </button>
                                    )}
                                    {hasAnalysis && (
                                        <button
                                            onClick={() => setTab("analysis")}
                                            className={`text-[10px] font-bold uppercase tracking-widest ${tab === "analysis" ? "text-sky-700" : "text-slate-400 hover:text-slate-600"}`}
                                        >
                                            Analysis
                                        </button>
                                    )}
                                </div>
                            )}

                            <div className="min-h-0 flex-1 overflow-y-auto px-4 py-3">
                                {state === "loading" && <div className="py-8 text-center text-[13px] text-slate-400">Loading…</div>}
                                {state === "error" && <div className="mx-auto max-w-sm py-10 text-center text-[13px] leading-relaxed text-slate-500">{error}</div>}
                                {state === "idle" && record && (
                                    <>
                                        {tab === "reflection" && (
                                            <>
                                                {narrative && <Prose text={narrative} />}
                                                {narrative && mirror && <div className="my-4 border-t border-slate-100" />}
                                                {mirror && (
                                                    <>
                                                        <div className="mb-1 text-[10px] font-bold uppercase tracking-widest text-sky-700">The mirror</div>
                                                        <Prose text={mirror} />
                                                    </>
                                                )}
                                                {!hasReflection && <div className="py-8 text-center text-[13px] text-slate-400">No public reflection for this period.</div>}
                                            </>
                                        )}
                                        {tab === "analysis" && (hasAnalysis ? <Prose text={analysis} /> : <div className="py-8 text-center text-[13px] text-slate-400">No public analysis for this period.</div>)}
                                    </>
                                )}
                            </div>

                            <div className="flex items-center justify-between gap-3 border-t border-slate-200 px-4 py-2 text-[11px]">
                                <span className="font-mono uppercase tracking-widest text-slate-400">Queried from the realm</span>
                                <a
                                    href={`https://rswfire.com/qp/cluster/${id}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title="The queryable record for this period"
                                    className="font-mono text-sky-700 underline decoration-sky-300 underline-offset-2 hover:text-sky-500"
                                >
                                    {id}
                                </a>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </Ctx.Provider>
    );
}

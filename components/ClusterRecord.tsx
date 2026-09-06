"use client";

// The platform's reading of a GROUP of signals — a cluster record, read
// live from its Queryable Personhood record on Autonomy Realms. Same
// contract as the signal panels: nothing here is stored in the archive;
// the page shows whatever the platform currently says. The member
// signals are the evidence; this is the machine reading them together.

import { useEffect, useState } from "react";
import Link from "next/link";
import { fetchCluster, type ClusterRecord as ClusterData } from "@/lib/qp";
import { ACCENT, BODY, INK, MONO, MUTED, RULE, TINT, formatDate, label, prose } from "@/components/signalChrome";
import SignalReflections from "@/components/SignalReflections";

const LIBRARY_ORIGIN = "https://rswfire.com/library/signal/";

function Meta({ k, v }: { k: string; v: string }) {
    return (
        <div className="flex flex-col gap-0.5">
            <span style={{ fontFamily: MONO, fontSize: "10px", letterSpacing: "0.15em", color: MUTED, textTransform: "uppercase" }}>{k}</span>
            <span style={{ fontFamily: MONO, fontSize: "11px", color: BODY }}>{v}</span>
        </div>
    );
}

/** Markdown-lite: paragraphs with **bold** and *italic* only. */
function blocks(text: string): React.ReactNode[] {
    return text.split(/\n{2,}/).map((para, pi) => {
        const out: React.ReactNode[] = [];
        const pattern = /\*\*([^*]+)\*\*|\*([^*\n]+)\*/g;
        let last = 0; let m: RegExpExecArray | null; let n = 0;
        while ((m = pattern.exec(para)) !== null) {
            if (m.index > last) out.push(para.slice(last, m.index));
            if (m[1] !== undefined) out.push(<strong key={`b${pi}-${n++}`} style={{ fontWeight: 600, color: INK }}>{m[1]}</strong>);
            else out.push(<em key={`i${pi}-${n++}`}>{m[2]}</em>);
            last = pattern.lastIndex;
        }
        if (last < para.length) out.push(para.slice(last));
        return <p key={pi} style={{ ...prose, margin: "0 0 12px 0" }}>{out}</p>;
    });
}

export default function ClusterRecord({ ulid }: { ulid: string }) {
    const [record, setRecord] = useState<ClusterData | null>(null);
    const [state, setState] = useState<"loading" | "ready" | "failed">("loading");
    const [wantedReading, setWantedReading] = useState<string | null>(null);

    useEffect(() => {
        if (typeof window !== "undefined") {
            setWantedReading(new URLSearchParams(window.location.search).get("reading"));
        }
    }, []);

    useEffect(() => {
        const controller = new AbortController();
        fetchCluster(ulid, controller.signal)
            .then((r) => { setRecord(r); setState("ready"); })
            .catch((e) => { if (e?.name !== "AbortError") setState("failed"); });
        return () => controller.abort();
    }, [ulid]);

    useEffect(() => {
        if (state === "ready" && wantedReading && typeof document !== "undefined") {
            document.getElementById("readings")?.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    }, [state, wantedReading]);

    if (state === "failed") {
        return (
            <div className="p-4" style={{ border: `1px solid ${RULE}` }}>
                <span style={{ fontFamily: MONO, fontSize: "11px", color: MUTED }}>
                    The cluster record could not be reached. It remains available at{" "}
                    <a href={`https://rswfire.com/qp/cluster/${ulid}`} style={{ color: ACCENT }}>its permanent address</a>.
                </span>
            </div>
        );
    }
    if (!record) return null;

    const span = [formatDate(record.spanStart), formatDate(record.spanEnd)].filter(Boolean).join(" — ");

    return (
        <div style={{ border: "1px solid rgba(26,58,74,0.2)", overflow: "hidden" }}>

            {/* Header bar — same treatment as the transmission records. */}
            <div className="flex items-center justify-between px-3 py-1.5" style={{ backgroundColor: "rgba(26,58,74,0.06)" }}>
                <Link
                    href="https://autonomyrealms.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontFamily: "DM Serif Display, serif", fontSize: "20px", color: ACCENT, textDecoration: "none" }}
                    className="hover:opacity-70 transition-opacity flex items-center gap-1.5"
                >
                    <img src="https://autonomyrealms.com/favicon.ico" alt="" width={14} height={14} className="inline-block" />
                    Autonomy Realms
                </Link>
                <span style={{ fontFamily: MONO, fontSize: "10px", letterSpacing: "0.15em", color: MUTED, textTransform: "uppercase" }}>
                    Cluster Record
                </span>
            </div>

            {/* Identity */}
            <div className="flex flex-wrap gap-x-8 gap-y-3 px-3 py-3" style={{ borderBottom: `1px solid ${RULE}` }}>
                {span && <Meta k="Span" v={span} />}
                <Meta k="Signals" v={String(record.members.length)} />
                <Meta k="ULID" v={record.ulid} />
            </div>

            {/* The platform's synthesis */}
            {record.summary && (
                <div className="px-4 pt-4 pb-1" style={{ borderBottom: `1px solid ${RULE}` }}>
                    <div style={{ ...label(10), marginBottom: "10px" }}>The platform&rsquo;s synthesis</div>
                    {blocks(record.summary)}
                </div>
            )}

            {/* Signature */}
            {(record.energy || record.state || record.orientation) && (
                <div className="flex flex-wrap gap-x-8 gap-y-3 px-3 py-3" style={{ borderBottom: `1px solid ${RULE}`, backgroundColor: TINT }}>
                    {record.energy && <Meta k="Energetic Signature" v={record.energy} />}
                    {record.state && <Meta k="Field State" v={record.state} />}
                    {record.orientation && <Meta k="Orientation" v={record.orientation} />}
                </div>
            )}

            {/* The members — the record itself, in date order. */}
            <div className="px-4 py-4" style={{ borderBottom: `1px solid ${RULE}` }}>
                <div style={{ ...label(10), marginBottom: "12px" }}>The signals in this record</div>
                <div className="space-y-1.5">
                    {record.members.map((m, i) => (
                        <a
                            key={m.id}
                            href={`${LIBRARY_ORIGIN}${m.id}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-baseline gap-3 group"
                            style={{ textDecoration: "none" }}
                        >
                            <span style={{ fontFamily: MONO, fontSize: "10px", color: MUTED, whiteSpace: "nowrap" }}>
                                {String(i + 1).padStart(2, "0")} · {formatDate(m.created) ?? ""}
                            </span>
                            <span className="group-hover:underline" style={{ fontSize: "13px", color: BODY }}>
                                {m.title}
                            </span>
                        </a>
                    ))}
                </div>
            </div>

            {/* Six readings of the whole. */}
            {record.reflections.length > 0 && (
                <div id="readings" style={{ scrollMarginTop: "80px" }}>
                    <SignalReflections
                        reflections={record.reflections}
                        initialType={wantedReading}
                        framing={`One of ${record.reflections.length} readings the platform makes of this record as a whole — the ${record.members.length} signals above, read together across ${span || "their span"}. This is analysis of the record. It is not the record, and it is not testimony — the recordings and documents it reads are the evidence.`}
                    />
                </div>
            )}
        </div>
    );
}

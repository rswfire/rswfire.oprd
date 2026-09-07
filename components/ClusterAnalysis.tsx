"use client";

// The platform's structured reading of the CLUSTER as a whole — the same
// tabbed analysis panel the single-signal viewer uses, pointed at the
// cluster's fields. The cluster's summary and its six readings render
// separately in ClusterRecord; this is everything else the platform derived.

import { useState } from "react";
import type { ClusterRecord as ClusterData } from "@/lib/qp";
import { ACCENT, INK, MONO, MUTED, RULE, TINT, prose } from "@/components/signalChrome";
import { Section, Chips, Bullets, Scalar } from "@/components/analysisChrome";
import AiFraming from "@/components/AiFraming";

type TabKey = "signature" | "context" | "entities" | "actions";

export default function ClusterAnalysis({ record }: { record: ClusterData }) {
    const hasSignature =
        record.energy || record.state || record.orientation || record.substrate ||
        record.tags.length > 0 || record.temperature !== null || record.density !== null;
    const hasContext = Boolean(record.environment)
        || record.ontologicalStates.length > 0 || record.subsystems.length > 0
        || record.dominantLanguage.length > 0 || record.symbolicElements.length > 0;
    const hasActions =
        record.actions.performed.length > 0 || record.actions.referenced.length > 0 || record.actions.planned.length > 0;
    const entityGroups = Object.entries(record.entities).filter(([, list]) => list.length > 0);

    const tabs: { key: TabKey; label: string }[] = [
        ...(hasSignature ? [{ key: "signature" as const, label: "Signature" }] : []),
        ...(hasContext ? [{ key: "context" as const, label: "Context" }] : []),
        ...(entityGroups.length > 0 ? [{ key: "entities" as const, label: "Entities" }] : []),
        ...(hasActions ? [{ key: "actions" as const, label: "Actions" }] : []),
    ];

    const [active, setActive] = useState<TabKey | null>(tabs[0]?.key ?? null);

    if (!active) return null;

    return (
        <div style={{ borderBottom: `1px solid ${RULE}`, backgroundColor: TINT }}>
            <div className="flex flex-wrap items-center gap-x-1 px-3 pt-2" style={{ borderBottom: `1px solid ${RULE}` }}>
                {tabs.map((tab) => (
                    <button
                        key={tab.key}
                        onClick={() => setActive(tab.key)}
                        style={{
                            fontFamily: MONO,
                            fontSize: "10px",
                            letterSpacing: "0.15em",
                            textTransform: "uppercase",
                            padding: "4px 8px 7px",
                            background: "transparent",
                            border: "none",
                            borderBottom: `2px solid ${active === tab.key ? ACCENT : "transparent"}`,
                            color: active === tab.key ? INK : MUTED,
                            cursor: "pointer",
                        }}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            <AiFraming model={record.provenance?.model} generated={record.provenance?.generated}>
                The platform&rsquo;s structured reading of this record as a whole &mdash; every field below
                was derived from the signals in the cluster, not written. It is analysis of the record, not
                the record.
            </AiFraming>

            <div className="px-3 py-4">
                {active === "signature" && (
                    <div className="space-y-4">
                        {(record.temperature !== null || record.density !== null) && (
                            <div className="grid grid-cols-1 min-[400px]:grid-cols-2 gap-5" style={{ paddingBottom: "28px" }}>
                                {record.temperature !== null && <Scalar name="Temperature" reading={record.temperature} />}
                                {record.density !== null && <Scalar name="Density" reading={record.density} />}
                            </div>
                        )}
                        {record.substrate && (
                            <Section heading="Substrate">
                                <p style={{ ...prose, fontSize: "14px", lineHeight: 1.8 }}>{record.substrate}</p>
                            </Section>
                        )}
                        {record.energy && (
                            <Section heading="Energetic Signature">
                                <div style={{ fontSize: "15px", color: INK, lineHeight: 1.5 }}>{record.energy}</div>
                            </Section>
                        )}
                        {record.state && (
                            <Section heading="Field State">
                                <div style={{ fontSize: "15px", color: INK, lineHeight: 1.5 }}>{record.state}</div>
                            </Section>
                        )}
                        {record.orientation && (
                            <Section heading="Orientation">
                                <div style={{ fontSize: "15px", color: INK, lineHeight: 1.5 }}>{record.orientation}</div>
                            </Section>
                        )}
                        {record.tags.length > 0 && (
                            <Section heading="Tags"><Chips items={record.tags} /></Section>
                        )}
                    </div>
                )}

                {active === "context" && (
                    <div>
                        {record.environment && (
                            <Section heading="Environment"><p style={prose}>{record.environment}</p></Section>
                        )}
                        {record.subsystems.length > 0 && (
                            <Section heading="Subsystems"><Bullets items={record.subsystems} /></Section>
                        )}
                        {record.ontologicalStates.length > 0 && (
                            <Section heading="Ontological States"><Bullets items={record.ontologicalStates} /></Section>
                        )}
                        {record.dominantLanguage.length > 0 && (
                            <Section heading="Dominant Language"><Chips items={record.dominantLanguage} /></Section>
                        )}
                        {record.symbolicElements.length > 0 && (
                            <Section heading="Symbolic Elements"><Chips items={record.symbolicElements} /></Section>
                        )}
                    </div>
                )}

                {active === "entities" && (
                    <div>
                        {entityGroups.map(([group, list]) => (
                            <Section key={group} heading={group}>
                                <Chips items={list.map((e) => e.name)} />
                            </Section>
                        ))}
                    </div>
                )}

                {active === "actions" && (
                    <div>
                        {record.actions.performed.length > 0 && (
                            <Section heading="Performed"><Bullets items={record.actions.performed} /></Section>
                        )}
                        {record.actions.referenced.length > 0 && (
                            <Section heading="Referenced"><Bullets items={record.actions.referenced} /></Section>
                        )}
                        {record.actions.planned.length > 0 && (
                            <Section heading="Planned"><Bullets items={record.actions.planned} /></Section>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

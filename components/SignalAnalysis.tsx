"use client";

// The platform's structured reading of a transmission, as a tabbed panel.
//
// A cousin of the analysis panel on the Autonomy Realms gateway: same five
// facets, same rule that a tab only exists when the signal carries content
// for it, restyled to the archive's palette. Replaces the three hand-written
// metadata fields the transmissions used to carry, two of which read "n/a".

import { useState } from "react";
import type { SignalRecord } from "@/lib/qp";
import { ACCENT, INK, MONO, MUTED, RULE, TINT, prose } from "@/components/signalChrome";
import { Section, Chips, Bullets, Scalar } from "@/components/analysisChrome";
import AiFraming from "@/components/AiFraming";
import SignalReflections from "@/components/SignalReflections";

type TabKey = "signature" | "context" | "entities" | "actions" | "readings" | "transcript";

export default function SignalAnalysis({
    signal,
    transcript,
}: {
    signal: SignalRecord;
    /** The authored transcript, rendered as the last tab in the strip. */
    transcript?: React.ReactNode;
}) {
    const hasSignature =
        signal.energy || signal.state || signal.orientation || signal.substrate ||
        signal.tags.length > 0 || signal.temperature !== null || signal.density !== null;
    const hasContext = Boolean(signal.environment)
        || signal.ontologicalStates.length > 0 || signal.subsystems.length > 0
        || signal.dominantLanguage.length > 0 || signal.symbolicElements.length > 0;
    const hasActions =
        signal.actions.performed.length > 0 || signal.actions.referenced.length > 0 || signal.actions.planned.length > 0;
    const entityGroups = Object.entries(signal.entities).filter(([, list]) => list.length > 0);

    const tabs: { key: TabKey; label: string }[] = [
        ...(hasSignature ? [{ key: "signature" as const, label: "Signature" }] : []),
        ...(hasContext ? [{ key: "context" as const, label: "Context" }] : []),
        ...(entityGroups.length > 0 ? [{ key: "entities" as const, label: "Entities" }] : []),
        ...(hasActions ? [{ key: "actions" as const, label: "Actions" }] : []),
        // The four readings are the platform's other output. They belong in
        // this strip, not opposite the authored transcript.
        ...(signal.reflections.length > 0 ? [{ key: "readings" as const, label: "Readings" }] : []),
        // Last in the strip, never the landing tab: the analysis is what the
        // card opens on, and the authored record is one click away.
        ...(transcript ? [{ key: "transcript" as const, label: "Transcript" }] : []),
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

            <div>
                {/* Readings carry their own band, with the model and date of
                    the reading being shown; Transcript is authored and takes
                    none. Everything else is framed here. */}
                {active !== "transcript" && active !== "readings" && (
                    <AiFraming model={signal.provenance?.model} generated={signal.provenance?.generated}>
                        The platform&rsquo;s structured reading of this transmission &mdash; every field below
                        was generated from the recording, not written. It is analysis of the record, not the
                        record.
                    </AiFraming>
                )}

                <div className="px-3 py-4">
                {active === "signature" && (
                    <div className="space-y-4">
                        {(signal.temperature !== null || signal.density !== null) && (
                            <div
                                className="grid grid-cols-1 min-[400px]:grid-cols-2 gap-5"
                                style={{ paddingBottom: "28px" }}
                            >
                                {signal.temperature !== null && signal.temperature !== undefined && (
                                    <Scalar name="Temperature" reading={signal.temperature} />
                                )}
                                {signal.density !== null && signal.density !== undefined && (
                                    <Scalar name="Density" reading={signal.density} />
                                )}
                            </div>
                        )}
                        {/* The longest-range read the analysis makes: what the
                            transmission is holding, under the events. */}
                        {signal.substrate && (
                            <Section heading="Substrate">
                                <p style={{ ...prose, fontSize: "14px", lineHeight: 1.8 }}>{signal.substrate}</p>
                            </Section>
                        )}
                        {signal.energy && (
                            <Section heading="Energetic Signature">
                                <div style={{ fontSize: "15px", color: INK, lineHeight: 1.5 }}>{signal.energy}</div>
                            </Section>
                        )}
                        {signal.state && (
                            <Section heading="Field State">
                                <div style={{ fontSize: "15px", color: INK, lineHeight: 1.5 }}>{signal.state}</div>
                            </Section>
                        )}
                        {signal.orientation && (
                            <Section heading="Orientation">
                                <div style={{ fontSize: "15px", color: INK, lineHeight: 1.5 }}>{signal.orientation}</div>
                            </Section>
                        )}
                        {signal.tags.length > 0 && (
                            <Section heading="Tags"><Chips items={signal.tags} /></Section>
                        )}
                    </div>
                )}

                {active === "context" && (
                    <div>
                        {signal.environment && (
                            <Section heading="Environment"><p style={prose}>{signal.environment}</p></Section>
                        )}
                        {signal.subsystems.length > 0 && (
                            <Section heading="Subsystems"><Bullets items={signal.subsystems} /></Section>
                        )}
                        {signal.ontologicalStates.length > 0 && (
                            <Section heading="Ontological States"><Bullets items={signal.ontologicalStates} /></Section>
                        )}
                        {signal.dominantLanguage.length > 0 && (
                            <Section heading="Dominant Language"><Chips items={signal.dominantLanguage} /></Section>
                        )}
                        {signal.symbolicElements.length > 0 && (
                            <Section heading="Symbolic Elements"><Chips items={signal.symbolicElements} /></Section>
                        )}
                    </div>
                )}

                {active === "actions" && (
                    <div>
                        {signal.actions.performed.length > 0 && (
                            <Section heading="Performed"><Bullets items={signal.actions.performed} /></Section>
                        )}
                        {signal.actions.referenced.length > 0 && (
                            <Section heading="Referenced"><Bullets items={signal.actions.referenced} /></Section>
                        )}
                        {signal.actions.planned.length > 0 && (
                            <Section heading="Planned"><Bullets items={signal.actions.planned} /></Section>
                        )}
                    </div>
                )}


                {active === "transcript" && (
                    <div style={{ margin: "-1rem -0.75rem" }}>{transcript}</div>
                )}

                {active === "readings" && (
                    <div style={{ margin: "-1rem -0.75rem" }}>
                        <SignalReflections reflections={signal.reflections} />
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
                </div>
            </div>
        </div>
    );
}

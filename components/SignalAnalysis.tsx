"use client";

// The platform's structured reading of a transmission, as a tabbed panel.
//
// A cousin of the analysis panel on the Autonomy Realms gateway: same five
// facets, same rule that a tab only exists when the signal carries content
// for it, restyled to the archive's palette. Replaces the three hand-written
// metadata fields the transmissions used to carry, two of which read "n/a".

import { useState } from "react";
import type { SignalRecord } from "@/lib/qp";
import { ACCENT, BODY, INK, MONO, MUTED, RULE, TINT, label, prose } from "@/components/signalChrome";
import AiFraming from "@/components/AiFraming";
import SignalReflections from "@/components/SignalReflections";

type TabKey = "signature" | "context" | "entities" | "actions" | "readings" | "transcript";

function Section({ heading, children }: { heading: string; children: React.ReactNode }) {
    return (
        <div className="mb-7 last:mb-0">
            <div
                style={{
                    ...label(10),
                    marginBottom: "12px",
                    paddingBottom: "6px",
                    borderBottom: `1px solid ${RULE}`,
                }}
            >
                {heading}
            </div>
            {children}
        </div>
    );
}

function Chips({ items, tone = "plain" }: { items: string[]; tone?: "plain" | "accent" | "symbol" }) {
    const palette = {
        plain: { bg: "rgba(26,58,74,0.04)", border: "rgba(26,58,74,0.15)", color: BODY },
        accent: { bg: "rgba(196,98,45,0.07)", border: "rgba(196,98,45,0.3)", color: "#9c4d22" },
        symbol: { bg: "rgba(92,74,132,0.07)", border: "rgba(92,74,132,0.3)", color: "#5c4a84" },
    }[tone];

    return (
        <div className="flex flex-wrap gap-1.5">
            {items.map((item) => (
                <span
                    key={item}
                    style={{
                        fontSize: "12px",
                        lineHeight: 1.4,
                        padding: "3px 8px",
                        backgroundColor: palette.bg,
                        border: `1px solid ${palette.border}`,
                        color: palette.color,
                    }}
                >
                    {item}
                </span>
            ))}
        </div>
    );
}

/**
 * Most entries arrive as "term (the elaboration)". Splitting them lets the
 * term carry the weight and the elaboration recede, which turns a wall of
 * equal-weight bullets into something scannable.
 */
function splitTerm(item: string): [string, string | null] {
    const m = item.match(/^([^(]{2,60}?)\s*\(([\s\S]+)\)\s*$/);
    return m ? [m[1].trim(), m[2].trim()] : [item, null];
}

function Bullets({ items }: { items: string[] }) {
    return (
        <ul className="m-0 p-0" style={{ listStyle: "none" }}>
            {items.map((item, i) => {
                const [term, detail] = splitTerm(item);
                return (
                    <li
                        key={i}
                        style={{
                            paddingLeft: "14px",
                            paddingTop: "7px",
                            paddingBottom: "7px",
                            borderTop: i === 0 ? "none" : `1px solid rgba(26,58,74,0.06)`,
                            position: "relative",
                        }}
                    >
                        <span
                            aria-hidden
                            style={{
                                position: "absolute",
                                left: 0,
                                top: "15px",
                                width: "5px",
                                height: "1px",
                                backgroundColor: ACCENT,
                            }}
                        />
                        <span style={{ fontSize: "13.5px", lineHeight: 1.55, color: INK }}>{term}</span>
                        {detail && (
                            <span className="block" style={{ fontSize: "13px", lineHeight: 1.6, color: BODY, marginTop: "2px" }}>
                                {detail}
                            </span>
                        )}
                    </li>
                );
            })}
        </ul>
    );
}

/**
 * Temperature and density run -1 to 1. The readout shows the number and its
 * position against a centred axis, because the sign is the reading — a
 * negative density is not a small positive one.
 */
function Scalar({ name, reading }: { name: string; reading: number }) {
    const pct = ((reading + 1) / 2) * 100;
    return (
        <div>
            <div className="flex justify-between items-baseline" style={{ marginBottom: "6px" }}>
                <span style={label(10)}>{name}</span>
                <span style={{ fontFamily: MONO, fontSize: "13px", color: INK }}>{reading.toFixed(2)}</span>
            </div>
            <div style={{ position: "relative", height: "6px", backgroundColor: "rgba(26,58,74,0.07)" }}>
                <div style={{ position: "absolute", top: 0, bottom: 0, left: "50%", width: "1px", backgroundColor: "rgba(26,58,74,0.25)" }} />
                <div
                    style={{
                        position: "absolute",
                        top: "50%",
                        transform: "translateY(-50%)",
                        left: `calc(${pct}% - 5px)`,
                        width: "10px",
                        height: "10px",
                        borderRadius: "9999px",
                        backgroundColor: ACCENT,
                        boxShadow: "0 0 0 2px #fdfcfa",
                    }}
                />
            </div>
        </div>
    );
}

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

"use client";

// Shared presentation for the platform's structured analysis, used by both
// the single-signal viewer (SignalAnalysis) and the cluster viewer
// (ClusterAnalysis) so the two read identically. Pure render helpers; no data.

import { ACCENT, BODY, INK, MONO, RULE, label, prose } from "@/components/signalChrome";

export function Section({ heading, children }: { heading: string; children: React.ReactNode }) {
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

export function Chips({ items, tone = "plain" }: { items: string[]; tone?: "plain" | "accent" | "symbol" }) {
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
export function splitTerm(item: string): [string, string | null] {
    const m = item.match(/^([^(]{2,60}?)\s*\(([\s\S]+)\)\s*$/);
    return m ? [m[1].trim(), m[2].trim()] : [item, null];
}

export function Bullets({ items }: { items: string[] }) {
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
export function Scalar({ name, reading }: { name: string; reading: number }) {
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

export const bodyProse = prose;

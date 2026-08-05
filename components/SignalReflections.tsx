"use client";

// The platform's four readings of a transmission.
//
// A cousin of the reflection strip on the Autonomy Realms gateway: the same
// four types, the same first-paragraph-then-expand behaviour, the same rule
// that NARRATIVE opens by default. What the archive adds is the framing
// header, because a reader who arrives at evidence needs to know before the
// first sentence that this is machine analysis and not part of the record.

import { useState } from "react";
import type { SignalReflection } from "@/lib/qp";
import { INK, MONO, MUTED, RULE, label, prose, reflectionChrome } from "@/components/signalChrome";
import AiFraming from "@/components/AiFraming";

const ORDER = ["NARRATIVE", "SYMBOLIC", "LINEAGE", "MIRROR"];

/**
 * Inline emphasis only. The reflections use italics heavily for quoted
 * phrases and bold twice in sixteen documents; there are no links, lists or
 * block quotes, so a full markdown dependency would be weight for nothing.
 * Returns React nodes rather than markup — nothing here is set as HTML.
 */
function emphasis(text: string, keyPrefix: string): React.ReactNode[] {
    const out: React.ReactNode[] = [];
    const pattern = /\*\*([^*]+)\*\*|\*([^*\n]+)\*/g;
    let last = 0;
    let match: RegExpExecArray | null;
    let n = 0;

    while ((match = pattern.exec(text)) !== null) {
        if (match.index > last) out.push(text.slice(last, match.index));
        if (match[1] !== undefined) {
            out.push(<strong key={`${keyPrefix}-b${n++}`} style={{ fontWeight: 600, color: INK }}>{match[1]}</strong>);
        } else {
            out.push(<em key={`${keyPrefix}-i${n++}`}>{match[2]}</em>);
        }
        last = pattern.lastIndex;
    }
    if (last < text.length) out.push(text.slice(last));
    return out;
}

/** Leading headings are chrome from the generator; the prose starts after. */
function paragraphs(content: string): string[] {
    const lines = content.split(/\r?\n/);
    let start = 0;
    while (start < lines.length && (lines[start].trim() === "" || /^#{1,6}\s/.test(lines[start].trim()))) {
        start += 1;
    }
    return lines
        .slice(start)
        .join("\n")
        .split(/\n\s*\n/)
        .map((p) => p.trim())
        .filter(Boolean);
}

function Prose({ blocks, idPrefix }: { blocks: string[]; idPrefix: string }) {
    return (
        <>
            {blocks.map((block, i) => {
                const heading = block.match(/^#{1,6}\s+(.*)$/);
                if (heading) {
                    return (
                        <div key={`${idPrefix}-h${i}`} style={{ ...label(10), marginTop: i ? "20px" : 0, marginBottom: "8px" }}>
                            {heading[1]}
                        </div>
                    );
                }
                return (
                    <p key={`${idPrefix}-p${i}`} style={{ ...prose, marginTop: i ? "14px" : 0 }}>
                        {emphasis(block.replace(/\n/g, " "), `${idPrefix}-${i}`)}
                    </p>
                );
            })}
        </>
    );
}

export default function SignalReflections({ reflections }: { reflections: SignalReflection[] }) {
    const available = [
        ...ORDER.filter((t) => reflections.some((r) => r.type === t)),
        ...reflections.map((r) => r.type).filter((t) => !ORDER.includes(t)),
    ];
    const [active, setActive] = useState(available[0] ?? null);
    const [expanded, setExpanded] = useState(false);

    if (!active) return null;

    const current = reflections.find((r) => r.type === active);
    if (!current) return null;

    const chrome = reflectionChrome(active);
    const blocks = paragraphs(current.content);
    const [first, ...rest] = blocks;

    return (
        <div style={{ borderTop: `1px solid ${RULE}` }}>
            <AiFraming model={current.model} generated={current.created}>
                One of four readings the platform makes of this transmission. This is analysis of the
                record. It is not the record, and it is not testimony &mdash; the recording and the
                transcript are the evidence.
            </AiFraming>

            {/* One link per reading. */}
            <div className="flex flex-wrap px-3 pt-2" style={{ borderBottom: `1px solid ${RULE}` }}>
                {available.map((type) => {
                    const c = reflectionChrome(type);
                    const on = type === active;
                    return (
                        <button
                            key={type}
                            onClick={() => { setActive(type); setExpanded(false); }}
                            style={{
                                fontFamily: MONO,
                                fontSize: "10px",
                                letterSpacing: "0.15em",
                                textTransform: "uppercase",
                                padding: "5px 9px 7px",
                                marginRight: "2px",
                                background: on ? c.tint : "transparent",
                                border: "none",
                                borderBottom: `2px solid ${on ? c.border : "transparent"}`,
                                color: on ? c.ink : MUTED,
                                cursor: "pointer",
                            }}
                        >
                            {type}
                        </button>
                    );
                })}
            </div>

            <div className="px-3 py-4" style={{ borderLeft: `2px solid ${chrome.border}` }}>
                {first && <Prose blocks={[first]} idPrefix={`${active}-first`} />}

                {rest.length > 0 && expanded && (
                    <div style={{ marginTop: "14px" }}>
                        <Prose blocks={rest} idPrefix={`${active}-rest`} />
                    </div>
                )}

                {rest.length > 0 && !expanded && (
                    <button
                        onClick={() => setExpanded(true)}
                        className="hover:opacity-70 transition-opacity"
                        style={{
                            marginTop: "14px",
                            fontFamily: MONO,
                            fontSize: "10px",
                            letterSpacing: "0.2em",
                            textTransform: "uppercase",
                            color: chrome.ink,
                            background: "transparent",
                            border: "none",
                            padding: 0,
                            cursor: "pointer",
                        }}
                    >
                        Continue reading &darr;
                    </button>
                )}
            </div>
        </div>
    );
}

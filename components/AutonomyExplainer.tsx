"use client";

// "What is Autonomy Realms?" — the answer a reader needs when a platform
// they have never heard of appears inside an evidence page. Collapsed by
// default: it explains the frame, it is not part of the record.

import { useState } from "react";
import Link from "next/link";
import { ACCENT, MONO, MUTED, RULE, TINT, prose } from "@/components/signalChrome";

export default function AutonomyExplainer() {
    const [open, setOpen] = useState(false);

    return (
        <div style={{ borderBottom: `1px solid ${RULE}` }}>
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-center gap-3 px-3 py-3 hover:opacity-80 transition-opacity"
                style={{ backgroundColor: TINT, border: "none", cursor: "pointer", textAlign: "left" }}
                aria-expanded={open}
            >
                {/* A marked question rather than another mono label — this is
                    the one control on the card that invites a reader who does
                    not know what the platform is. */}
                <span
                    style={{
                        flexShrink: 0,
                        width: "20px",
                        height: "20px",
                        borderRadius: "9999px",
                        border: `1px solid ${ACCENT}`,
                        color: ACCENT,
                        fontFamily: MONO,
                        fontSize: "12px",
                        lineHeight: "18px",
                        textAlign: "center",
                    }}
                    aria-hidden
                >
                    ?
                </span>

                <span className="flex-1 min-w-0">
                    <span
                        className="block"
                        style={{ fontFamily: MONO, fontSize: "11px", letterSpacing: "0.15em", color: ACCENT, textTransform: "uppercase" }}
                    >
                        What is Autonomy Realms?
                    </span>
                    <span
                        className="hidden min-[400px]:block"
                        style={{ fontSize: "12px", color: MUTED, marginTop: "2px" }}
                    >
                        The platform these recordings live on, and where this analysis comes from.
                    </span>
                </span>

                <span
                    style={{
                        flexShrink: 0,
                        fontFamily: MONO,
                        fontSize: "11px",
                        color: MUTED,
                        transform: open ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.2s ease",
                        display: "inline-block",
                    }}
                >
                    &darr;
                </span>
            </button>

            {open && (
                <div className="px-3 py-5" style={{ borderTop: `1px solid ${RULE}` }}>
                    <p style={{ ...prose, marginBottom: "16px" }}>
                        Autonomy Realms is the platform where these recordings live. I built it. A realm holds
                        signals &mdash; recordings, photographs, documents and writing, each placed in time and
                        on a map &mdash; and every signal keeps its own permanent identifier, the 26-character
                        ULID printed on the transmissions in this archive.
                    </p>
                    <p style={{ ...prose, marginBottom: "16px" }}>
                        The archive and the platform hold the same recordings for different reasons. This site
                        is the record of what Oregon Parks and Recreation did, assembled so it can be verified
                        without trusting me. The platform is where the recordings were published first, and
                        where its analysis of them is generated. Every signal exposes that analysis as public
                        JSON, which is how it arrives here: read from the platform each time this page loads,
                        so what you see is what it currently says rather than a copy kept by this site.
                    </p>
                    <p style={{ ...prose, marginBottom: "16px" }}>
                        Nothing on the platform decides what this archive says. The evidence is the recordings,
                        the transcripts, and the unmodified originals.
                    </p>
                    <div>
                        <Link
                            href="https://autonomyrealms.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:opacity-70 transition-opacity"
                            style={{
                                fontFamily: MONO,
                                fontSize: "10px",
                                letterSpacing: "0.15em",
                                color: ACCENT,
                                textTransform: "uppercase",
                                textDecoration: "none",
                            }}
                        >
                            autonomyrealms.com &rarr;
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
}

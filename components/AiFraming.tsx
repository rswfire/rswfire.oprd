// The band that sits above anything on this card the platform generated.
//
// It appears on every machine-produced block, not just the readings: a
// reader landing mid-page should never have to work out whether what they
// are looking at was written or computed.

import { ACCENT, BODY, MONO, RULE, TINT, formatDate, label, prose } from "@/components/signalChrome";

export default function AiFraming({
    model,
    generated,
    children,
}: {
    model?: string | null;
    generated?: string | null;
    children: React.ReactNode;
}) {
    const when = formatDate(generated);

    return (
        <div className="px-3 py-3" style={{ backgroundColor: TINT, borderBottom: `1px solid ${RULE}` }}>
            <div style={{ ...label(10), color: ACCENT, marginBottom: "6px" }}>AI Analysis</div>
            <p style={{ ...prose, fontSize: "13px" }}>{children}</p>
            {(model || when) && (
                // Explicit margins rather than a flex gap: the two ran
                // together into "…opus-5Generated August 4, 2026".
                <div style={{ marginTop: "10px" }}>
                    {model && (
                        <span style={{ ...label(10), marginRight: "28px", display: "inline-block" }}>
                            Model{" "}
                            <span style={{ fontFamily: MONO, color: BODY, letterSpacing: "0.05em" }}>
                                {model}
                            </span>
                        </span>
                    )}
                    {when && (
                        <span style={{ ...label(10), display: "inline-block" }}>
                            Generated{" "}
                            <span style={{ fontFamily: MONO, color: BODY, letterSpacing: "0.05em" }}>
                                {when}
                            </span>
                        </span>
                    )}
                </div>
            )}
        </div>
    );
}

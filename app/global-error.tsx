"use client";

import { useEffect } from "react";

// Catches an error thrown in the root layout itself. Must render its own
// html and body, because the layout is what failed.
export default function GlobalError({ error }: { error: Error & { digest?: string } }) {
    useEffect(() => {
        (window as unknown as { __report?: (n: string, d: Record<string, string>) => void }).__report?.("render-error", {
            message: String(error.message).slice(0, 400),
            stack: String(error.stack ?? "").slice(0, 400),
            digest: String(error.digest ?? ""),
            url: location.href.slice(0, 400),
        });
    }, [error]);
    return (
        <html lang="en">
            <body style={{ fontFamily: "sans-serif", padding: "4rem 1rem", maxWidth: "36rem", margin: "0 auto" }}>
                <div style={{ fontWeight: 600 }}>This page failed to render.</div>
                <div style={{ marginTop: "0.5rem", fontFamily: "monospace", fontSize: "0.875rem", color: "#57534e" }}>{error.message}</div>
                <button type="button" onClick={() => location.reload()} style={{ marginTop: "1.5rem", padding: "0.375rem 0.75rem", border: "1px solid #d6d3d1", borderRadius: "0.25rem", background: "white" }}>
                    Reload
                </button>
            </body>
        </html>
    );
}

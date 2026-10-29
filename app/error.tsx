"use client";

import { useEffect } from "react";

// Catches an error thrown while rendering a page, so the page shows the
// error instead of nothing. The reporter in app/layout.tsx sends it to
// Umami as render-error.
export default function ErrorPage({ error }: { error: Error & { digest?: string } }) {
    useEffect(() => {
        (window as unknown as { __report?: (n: string, d: Record<string, string>) => void }).__report?.("render-error", {
            message: String(error.message).slice(0, 400),
            stack: String(error.stack ?? "").slice(0, 400),
            digest: String(error.digest ?? ""),
            url: location.href.slice(0, 400),
        });
    }, [error]);
    return (
        <div className="mx-auto max-w-xl px-4 py-16 text-base text-stone-900">
            <div className="font-semibold">This page failed to render.</div>
            <div className="mt-2 font-mono text-sm text-stone-600">{error.message}</div>
            <button
                type="button"
                onClick={() => location.reload()}
                className="mt-6 rounded border border-stone-300 px-3 py-1.5 text-sm"
            >
                Reload
            </button>
        </div>
    );
}

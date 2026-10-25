"use client";

import { useState } from "react";

/**
 * Newsletter signup — posts to the Autonomy Realms mailing-list endpoint
 * (list: oprd). Form-encoded so the cross-origin POST is a CORS simple
 * request; the endpoint allowlists this origin and answers JSON.
 */
export default function NewsletterSignup({ compact = false }: { compact?: boolean }) {
    const [email, setEmail] = useState("");
    const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");

    async function submit(e: React.FormEvent) {
        e.preventDefault();
        if (state === "sending") return;
        setState("sending");
        try {
            const res = await fetch("https://rswfire.com/list/subscribe", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams({ email, list: "oprd", website: "" }),
            });
            const json = await res.json();
            setState(json?.ok ? "done" : "error");
        } catch {
            setState("error");
        }
    }

    return (
        <div className={`overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm ${compact ? "flex h-full flex-col" : ""}`}>
            <div className={`border-b border-slate-200 bg-emerald-50 ${compact ? "px-3 py-2" : "px-4 py-2.5"}`}>
                <h2 className={`font-bold uppercase tracking-wide text-slate-900 ${compact ? "text-[11px]" : "text-sm"}`}>Follow the Record</h2>
            </div>
            <div className={compact ? "flex flex-1 flex-col justify-center p-3" : "p-5"}>
                <div className={`text-center text-gray-600 ${compact ? "text-[11px] leading-snug" : "text-sm"}`}>
                    {compact ? "Email when the archive gains a significant record." : "Occasional email updates when this archive gains a significant record."}
                </div>

                {state === "done" ? (
                    <div className={`text-center font-semibold text-emerald-700 ${compact ? "mt-3 text-xs" : "mt-4 text-sm"}`}>
                        You&rsquo;re on the list.
                    </div>
                ) : (
                    <form onSubmit={submit} className={`flex flex-col gap-2 ${compact ? "mt-2.5" : "mt-4"}`}>
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="your@email.address"
                            className={`flex-1 min-w-0 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 ${compact ? "px-2.5 py-2 text-sm" : "px-4 py-2.5 text-sm"}`}
                        />
                        <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
                        <button
                            type="submit"
                            disabled={state === "sending"}
                            className={`rounded-lg bg-emerald-700 hover:bg-emerald-800 disabled:opacity-60 disabled:cursor-wait transition-colors font-semibold uppercase tracking-widest text-white cursor-pointer ${compact ? "px-2 py-2 text-[11px]" : "px-5 py-2.5 text-sm"}`}
                        >
                            {state === "sending" ? "Subscribing…" : "Subscribe"}
                        </button>
                    </form>
                )}

                {state === "error" && (
                    <div className={`mt-3 text-center text-red-700 ${compact ? "text-[11px]" : "text-sm"}`}>
                        That didn&rsquo;t go through. Try again in a minute.
                    </div>
                )}
            </div>

        </div>
    );
}

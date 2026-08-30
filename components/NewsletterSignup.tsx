"use client";

import { useState } from "react";

/**
 * Newsletter signup — posts to the Autonomy Realms mailing-list endpoint
 * (list: oprd). Form-encoded so the cross-origin POST is a CORS simple
 * request; the endpoint allowlists this origin and answers JSON.
 */
export default function NewsletterSignup() {
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
        <div className="mt-4 p-6 rounded-xl bg-white border border-slate-200">
            <h2 className="font-bold text-lg tracking-wide text-center">FOLLOW THE RECORD</h2>
            <div className="mt-2 text-sm text-gray-600 text-center">
                Occasional email updates when this archive gains a significant record. Unsubscribe in one click, any time.
            </div>

            {state === "done" ? (
                <div className="mt-4 text-center text-sm font-semibold text-emerald-700">
                    You&rsquo;re on the list.
                </div>
            ) : (
                <form onSubmit={submit} className="mt-4 flex flex-col sm:flex-row gap-2 max-w-lg mx-auto">
                    <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your@email.address"
                        className="flex-1 rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                    <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
                    <button
                        type="submit"
                        disabled={state === "sending"}
                        className="rounded-lg bg-emerald-700 hover:bg-emerald-800 disabled:opacity-60 disabled:cursor-wait transition-colors px-5 py-2.5 text-sm font-semibold uppercase tracking-widest text-white cursor-pointer"
                    >
                        {state === "sending" ? "Subscribing…" : "Subscribe"}
                    </button>
                </form>
            )}

            {state === "error" && (
                <div className="mt-3 text-center text-sm text-red-700">
                    That didn&rsquo;t go through. Try again in a minute.
                </div>
            )}
        </div>
    );
}

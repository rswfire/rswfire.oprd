"use client";

import { useState } from "react";

/**
 * Contact form — posts to the Autonomy endpoint at rswfire.com, the same way
 * NewsletterSignup does. Form-encoded so the cross-origin POST stays a CORS
 * simple request with no preflight; the endpoint allowlists this origin and
 * answers JSON. The page carries the postal address and the email above this,
 * so a reader with no JavaScript still has a way to write.
 */
export default function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");

    async function submit(e: React.FormEvent) {
        e.preventDefault();
        if (state === "sending") return;
        setState("sending");
        try {
            const res = await fetch("https://rswfire.com/contact", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams({ name, email, message, website: "" }),
            });
            const json = await res.json();
            setState(json?.ok ? "done" : "error");
        } catch {
            setState("error");
        }
    }

    if (state === "done") {
        return (
            <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-6 text-center">
                <p className="text-base font-semibold text-emerald-800">Your message reached me.</p>
                <p className="mt-2 text-sm text-gray-700">
                    I read everything myself. Nothing you sent is published without your word.
                </p>
            </div>
        );
    }

    return (
        <form onSubmit={submit} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <label className="block">
                    <span className="text-xs font-bold uppercase tracking-widest text-gray-500">
                        Your name, or a name to use
                    </span>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="mt-1.5 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                </label>
                <label className="block">
                    <span className="text-xs font-bold uppercase tracking-widest text-gray-500">
                        Email, so I can answer
                    </span>
                    <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your@email.address"
                        className="mt-1.5 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                </label>
            </div>

            <label className="mt-4 block">
                <span className="text-xs font-bold uppercase tracking-widest text-gray-500">
                    What happened
                </span>
                <textarea
                    required
                    rows={8}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="mt-1.5 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm leading-relaxed focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
            </label>

            {/* Honeypot: real people never fill this. */}
            <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

            <button
                type="submit"
                disabled={state === "sending"}
                className="mt-4 w-full cursor-pointer rounded-lg bg-emerald-700 px-5 py-2.5 text-sm font-semibold uppercase tracking-widest text-white transition-colors hover:bg-emerald-800 disabled:cursor-wait disabled:opacity-60"
            >
                {state === "sending" ? "Sending…" : "Send"}
            </button>

            {state === "error" && (
                <p className="mt-3 text-center text-sm text-red-700">
                    That didn&rsquo;t go through. Write to rsw@rswfire.com directly and it will
                    reach me.
                </p>
            )}
        </form>
    );
}

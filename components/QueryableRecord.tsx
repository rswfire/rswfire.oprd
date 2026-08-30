"use client";

// One object at the top of the archive: the queryable record. Two doors —
// a human one (/record, the cluster reading) and a machine one (/qp.json,
// the copy-pastable manifest any AI can follow down to the transcripts).
// The bot in violet is Queryable Personhood's own mark, carried over from
// the realm. Light panel for the human door, dark for the machine's.

import { useState } from "react";
import Link from "next/link";
import Icon from "@/components/Icon";

const QP_URL = "https://oprdvolunteerabuse.org/record.json";
const MONO = "var(--font-dm-mono), monospace";

export default function QueryableRecord() {
    const [copied, setCopied] = useState(false);

    async function copy() {
        try {
            await navigator.clipboard.writeText(QP_URL);
            setCopied(true);
            setTimeout(() => setCopied(false), 2200);
        } catch {
            // The input selects itself on focus either way.
        }
    }

    return (
        <div className="mb-4 rounded-xl overflow-hidden border shadow-sm" style={{ borderColor: "rgba(109,40,217,0.45)" }}>

            {/* The human door — whole panel clickable. */}
            <Link href="/record" className="group block px-5 py-4 bg-violet-50" style={{ textDecoration: "none" }}>
                <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between gap-4">
                        <span
                            className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-violet-700"
                            style={{ fontFamily: MONO }}
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60 bg-violet-500" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-600" />
                            </span>
                            Queryable
                        </span>
                        <span
                            className="inline-flex items-center gap-1.5"
                            style={{ fontFamily: "DM Serif Display, serif", fontSize: "17px", color: "#c4622d" }}
                        >
                            <img src="https://autonomyrealms.com/favicon.ico" alt="" width={15} height={15} className="inline-block" />
                            Autonomy Realms
                        </span>
                    </div>

                    <div className="text-lg font-bold tracking-wide uppercase text-violet-950">
                        The OPRD Record
                    </div>

                    <div className="text-sm leading-relaxed text-gray-700">
                        This archive runs on structured data. Every primary recording is an independently
                        addressable signal on Autonomy Realms; all thirteen are held as one queryable object,
                        with a synthesis and six analytical passes computed from the evidence &mdash; inspectable,
                        regenerable, and labeled as analysis.
                    </div>

                    <div className="mt-1 flex justify-end">
                        <span
                            className="text-xs font-semibold uppercase tracking-widest text-violet-700 group-hover:translate-x-0.5 transition-transform"
                            style={{ fontFamily: MONO }}
                        >
                            Open the record &rarr;
                        </span>
                    </div>
                </div>
            </Link>

            {/* The machine door — dark band. */}
            <div
                className="px-5 py-4"
                style={{
                    borderTop: "1px solid rgba(109,40,217,0.35)",
                    background: "linear-gradient(130deg, #150b24 0%, #241238 60%, #3b1d5c 100%)",
                }}
            >
                <div className="flex items-start gap-4">
                    <div
                        className="shrink-0 flex h-11 w-11 items-center justify-center rounded-xl"
                        style={{ backgroundColor: "rgba(167,139,250,0.12)", border: "1px solid rgba(167,139,250,0.3)" }}
                    >
                        <Icon name="Bot" className="w-6 h-6" style={{ color: "#c4b5fd" }} size={24} strokeWidth={1.5} />
                    </div>
                    <div className="min-w-0">
                        <div className="font-bold text-sm tracking-wide text-white uppercase">Ask an AI about this case</div>
                        <div className="mt-1.5 text-sm leading-relaxed" style={{ color: "#cfc4e8" }}>
                            Paste the link below into any AI and ask it anything &mdash; <em>what happened at
                            the picnic table?</em> &mdash; and it can follow the indexes to every letter, every
                            response, every recording, down to the full transcripts. It doesn&rsquo;t have to
                            take anyone&rsquo;s word for what the record holds. It can read the record.
                        </div>
                    </div>
                </div>

                <div className="mt-3 flex flex-col sm:flex-row gap-2">
                    <input
                        readOnly
                        value={QP_URL}
                        onFocus={(e) => e.currentTarget.select()}
                        className="flex-1 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2"
                        style={{
                            fontFamily: MONO,
                            backgroundColor: "rgba(255,255,255,0.07)",
                            border: "1px solid rgba(167,139,250,0.3)",
                            color: "#e9e2fa",
                        }}
                    />
                    <button
                        type="button"
                        onClick={copy}
                        className="rounded-lg px-5 py-2.5 text-sm font-semibold uppercase tracking-widest text-white cursor-pointer transition-colors"
                        style={{ backgroundColor: copied ? "#7c3aed" : "#6d28d9" }}
                    >
                        {copied ? "Copied" : "Copy Link"}
                    </button>
                </div>

                <div className="mt-4 px-1 text-xs text-gray-300">
                    One URL: the case summary, indexes of all 438 accountability documents, the nine
                    evidence pages, and the thirteen primary recordings with transcripts and analysis.
                </div>
            </div>
        </div>
    );
}

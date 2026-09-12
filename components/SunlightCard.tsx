// Sunlight, one card: their story in the dark on top, the dawn line, and
// the record in full light below. The counts are computed from the shared
// data — the section and the records tracker are the single source of truth.

import Link from "next/link";
import { Sun } from "lucide-react";
import { TIMELINE_CITED_SOURCES } from "@/data/recordsRequests";
import { SUNLIGHT_SECTIONS } from "@/data/sunlight";

export default function SunlightCard() {
    const entries = SUNLIGHT_SECTIONS.filter((s) => s.blocks.some((b) => b.t === "says")).length;
    const awaiting = TIMELINE_CITED_SOURCES.length;
    return (
        <Link
            href="/sunlight"
            className="group mt-4 block overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md"
        >
            {/* ── The dark: where their story was written ── */}
            <div className="bg-slate-950 px-6 py-5 sm:px-8">
                <div className="text-[11px] font-bold uppercase tracking-widest text-slate-500">
                    Written in the dark
                </div>
                <div className="mt-2 text-[15px] leading-relaxed text-slate-300">
                    The State of Oregon wrote a story about me. Ten months. Twenty-three revisions. 193 minutes of editing. It
                    was never shown to me. It was handed to the state police.
                </div>
            </div>

            {/* ── The dawn line ── */}
            <div className="h-1.5 w-full bg-gradient-to-r from-slate-950 via-amber-400 to-amber-200" />

            {/* ── The light: the record ── */}
            <div className="bg-gradient-to-b from-amber-50/80 to-white px-6 py-6 sm:px-8">
                <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="min-w-0">
                        <div className="inline-flex items-center gap-2">
                            <Sun size={20} strokeWidth={2} className="shrink-0 text-amber-500 transition-transform duration-500 group-hover:rotate-45" />
                            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Sunlight</h2>
                        </div>
                        <div className="mt-1 text-sm font-medium text-gray-500">
                            Their words, next to the record.
                        </div>
                    </div>
                    <span className="whitespace-nowrap rounded-full border border-amber-300 bg-white px-4 py-1.5 text-sm font-semibold text-amber-800 shadow-sm transition-colors group-hover:border-amber-400 group-hover:bg-amber-50">
                        Read it &rarr;
                    </span>
                </div>

                <div className="mt-4 max-w-2xl text-[15px] leading-relaxed text-gray-700">
                    Every entry of their document, exactly as written &mdash; and
                    beside each one, the record: the emails, the recordings, the timestamps opening the tapes where cited.
                </div>

                <div className="mt-5 grid grid-cols-2 gap-4 sm:max-w-md">
                    <div className="rounded-lg border border-emerald-200 bg-white px-4 py-3">
                        <div className="text-2xl font-bold text-emerald-800">{entries}</div>
                        <div className="mt-0.5 text-[11px] font-semibold uppercase tracking-widest text-gray-400">
                            Entries answered
                        </div>
                    </div>
                    <div className="rounded-lg border border-amber-200 bg-white px-4 py-3">
                        <div className="text-2xl font-bold text-amber-800">{awaiting}</div>
                        <div className="mt-0.5 text-[11px] font-semibold uppercase tracking-widest text-gray-400">
                            Sources awaiting production
                        </div>
                    </div>
                </div>

                <div className="mt-5 text-sm font-medium text-gray-500">
                    Their story survives only in the dark. <span className="text-amber-700">This is sunlight.</span>
                </div>
            </div>
        </Link>
    );
}

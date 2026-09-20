// The testimony's door on the index page. One word with a period, the
// dimensions of the record under it, and every chapter reachable directly.
//
// The chapter list mirrors the Part headers in
// components/testimony/TestimonyBody.tsx; slugs use the same rule as its
// partId(). When a part is added or retitled there, update this list.

import Link from "next/link";
import { Sprout } from "lucide-react";
import { CURRENT_VERSION } from "@/data/testimonyVersions";
import { TESTIMONY_META } from "@/data/testimonyMeta";

const CHAPTERS = [
    "THE SHEDDING",
    "THE CROSSING",
    "THE COAST",
    "WHY HE VOLUNTEERED",
    "HE WENT AND LOOKED AT HONEYMAN FIRST",
    "FEBRUARY",
    "THE PICNIC TABLE",
    "NINETEEN DAYS",
    "THE WEEK HE TOLD IT",
    "DISPLACED",
    "THE DIRECTOR AND HER DEPUTY",
    "THREE MEN WITH GUNS",
];

export default function TestimonyCard() {
    return (
        <div className="mt-4 overflow-hidden rounded-2xl border border-emerald-200 bg-white shadow-sm">
            {/* ── The head: one word ── */}
            <div className="bg-gradient-to-b from-emerald-50/90 to-white px-6 pt-8 pb-6 sm:px-8">
                <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-emerald-700">
                    <Sprout size={14} strokeWidth={2} className="shrink-0" />
                    The Testimony of Robert Samuel White
                </div>
                <Link href="/testimony" className="mt-2 block">
                    <h2 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                        Testimony<span className="text-emerald-600">.</span>
                    </h2>
                </Link>

                <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-[13px] text-gray-600">
                    <span><span className="font-bold text-gray-900">{TESTIMONY_META.paragraphs}</span> numbered paragraphs</span>
                    <span><span className="font-bold text-gray-900">{TESTIMONY_META.documents}</span> documents</span>
                    <span><span className="font-bold text-gray-900">{TESTIMONY_META.recordings}</span> recordings</span>
                    <span><span className="font-bold text-gray-900">{TESTIMONY_META.moments}</span> cited moments</span>
                    <Link
                        href="/testimony/#version-meta"
                        className="font-mono text-gray-400 underline decoration-gray-300 underline-offset-2 hover:text-emerald-700"
                    >
                        v{CURRENT_VERSION.version}
                    </Link>
                </div>
            </div>

            {/* ── The chapters ── */}
            <div className="border-t border-emerald-100 px-6 py-6 sm:px-8">
                <div className="grid grid-cols-1 gap-x-8 gap-y-1 sm:grid-cols-2">
                    {[CHAPTERS.slice(0, 7), CHAPTERS.slice(7)].map((column, c) => (
                        <div key={c} className="space-y-1">
                            {column.map((title, i) => (
                                <Link
                                    key={title}
                                    href={`/testimony/#c${c * 7 + i + 1}`}
                                    className="group flex items-baseline gap-3 rounded-lg px-2 py-1.5 hover:bg-emerald-50"
                                >
                                    <span className="w-6 shrink-0 font-mono text-[11px] text-emerald-600">
                                        {String(c * 7 + i + 1).padStart(2, "0")}
                                    </span>
                                    <span className="font-mono text-[13px] font-bold text-emerald-800 underline decoration-emerald-300 underline-offset-2 group-hover:text-emerald-600">
                                        {title}
                                    </span>
                                </Link>
                            ))}
                        </div>
                    ))}
                </div>
                <Link
                    href="/testimony/#c13"
                    className="group mt-2 block rounded-lg border-t border-emerald-100 px-2 pt-3 pb-1.5 text-center hover:bg-emerald-50 sm:col-span-2"
                >
                    <span className="font-mono text-[13px] font-bold text-emerald-800 underline decoration-emerald-300 underline-offset-2 group-hover:text-emerald-600">
                        ADDENDUM: ON THE END OF THE WORLD
                    </span>
                </Link>
            </div>
        </div>
    );
}

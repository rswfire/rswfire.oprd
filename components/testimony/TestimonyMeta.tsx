"use client";

// components/testimony/TestimonyMeta.tsx
//
// The document's own properties, at the top of it. A page that says another
// document's version history is evidence has to publish its own: the version,
// the date, what it is made of, and every revision, open.
import { useState } from "react";
import Icon from "@/components/Icon";
import { CURRENT_VERSION, TESTIMONY_VERSIONS } from "@/data/testimonyVersions";

export default function TestimonyMeta({
    documents,
    recordings,
    moments,
}: {
    documents: number;
    recordings: number;
    moments: number;
}) {
    const [open, setOpen] = useState(false);

    return (
        <div className="mt-4 rounded-xl border border-slate-200 bg-white">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 px-4 py-3">
                <div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Version</div>
                    <div className="font-mono text-sm text-slate-900">
                        v{CURRENT_VERSION.version}
                        <span className="ml-2 text-slate-500">{CURRENT_VERSION.date}</span>
                    </div>
                </div>
                <div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Built from</div>
                    <div className="font-mono text-sm text-slate-900">
                        {documents} documents · {recordings} recordings · {moments} cited moments
                    </div>
                </div>
                <button
                    onClick={() => setOpen((o) => !o)}
                    className="ml-auto flex items-center gap-1 rounded-md border border-slate-300 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-slate-600 hover:bg-slate-50"
                    aria-expanded={open}
                >
                    Revisions
                    <Icon name={open ? "ChevronUp" : "ChevronDown"} size={14} strokeWidth={2} />
                </button>
            </div>

            {open && (
                <ol className="border-t border-slate-200 divide-y divide-slate-100">
                    {TESTIMONY_VERSIONS.map((v) => (
                        <li key={v.version} className="flex gap-4 px-4 py-2.5 text-[13px] leading-snug">
                            <span className="shrink-0 font-mono text-slate-500">v{v.version}</span>
                            <span className="shrink-0 font-mono text-slate-400">{v.d}</span>
                            <span className="text-slate-700">{v.note}</span>
                        </li>
                    ))}
                </ol>
            )}
        </div>
    );
}

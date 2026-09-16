"use client";

// components/testimony/TestimonyMeta.tsx
//
// The document's own properties, at the top of it. A page that says another
// document's version history is evidence has to publish its own: the version,
// the date, what it is made of, and every revision, open.
//
// It shows the version the reader is actually on, not always the latest, so a
// frozen page (/testimony/v1.0) names itself. The revisions list opens on its
// own button and on the `testimony:open-revisions` event the stale-version
// flag in the table of contents dispatches.
import { useEffect, useState } from "react";
import Icon from "@/components/Icon";
import { CURRENT_VERSION, TESTIMONY_VERSIONS } from "@/data/testimonyVersions";
import { useTestimonyVersion } from "@/components/testimony/versionContext";

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
    const { version, isCurrent } = useTestimonyVersion();
    const viewed = TESTIMONY_VERSIONS.find((v) => v.version === version) ?? CURRENT_VERSION;

    useEffect(() => {
        const onOpen = () => {
            setOpen(true);
            document
                .getElementById("version-meta")
                ?.scrollIntoView({ behavior: "smooth", block: "start" });
        };
        document.addEventListener("testimony:open-revisions", onOpen);
        return () => document.removeEventListener("testimony:open-revisions", onOpen);
    }, []);

    return (
        <div id="version-meta" className="mt-4 scroll-mt-24 rounded-xl border border-slate-200 bg-white">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 px-4 py-3">
                <div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Version</div>
                    <div className="font-mono text-sm text-slate-900">
                        v{viewed.version}
                        <span className="ml-2 text-slate-500">{viewed.date}</span>
                        {!isCurrent && (
                            <span className="ml-2 rounded bg-amber-100 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-amber-800">
                                superseded by v{CURRENT_VERSION.version}
                            </span>
                        )}
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
                    {TESTIMONY_VERSIONS.map((v) => {
                        const current = v.version === CURRENT_VERSION.version;
                        const here = v.version === viewed.version;
                        return (
                            <li
                                key={v.version}
                                className={`flex gap-4 px-4 py-2.5 text-[13px] leading-snug ${here ? "bg-emerald-50/60" : ""}`}
                            >
                                <span className="shrink-0 font-mono text-slate-500">
                                    <a
                                        href={current ? "/testimony/" : `/testimony/v${v.version}/`}
                                        className="hover:text-emerald-700"
                                    >
                                        v{v.version}
                                    </a>
                                </span>
                                <span className="shrink-0 font-mono text-slate-400">{v.d}</span>
                                <span className="text-slate-700">
                                    {v.note}
                                    {current && (
                                        <span className="ml-2 text-[11px] font-bold uppercase tracking-wide text-emerald-700">
                                            current
                                        </span>
                                    )}
                                    {here && !current && (
                                        <span className="ml-2 text-[11px] font-bold uppercase tracking-wide text-amber-700">
                                            you are here
                                        </span>
                                    )}
                                </span>
                            </li>
                        );
                    })}
                </ol>
            )}
        </div>
    );
}

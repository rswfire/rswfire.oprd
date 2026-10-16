"use client";

// components/system/SideBySide.tsx
//
// The tactics set side by side: one row per tactic, one column per
// institution, each cell the fact from that institution's own document. An
// empty cell means the record does not show that institution using it. On a
// wide page the table scrolls in its own frame with its first column and its
// header held; on a phone, one institution at a time.
import { useState } from "react";
import { INSTITUTIONS, SIDE_BY_SIDE } from "@/data/system";
import { Source } from "@/components/system/Docs";

export default function SideBySide() {
    const [inst, setInst] = useState(0);
    return (
        <div className="@container">
            {/* Phone: one institution at a time. */}
            <div className="@2xl:hidden">
                <div role="tablist" aria-label="Institution" className="grid grid-cols-2 gap-2">
                    {INSTITUTIONS.map((name, i) => (
                        <button
                            key={name}
                            type="button"
                            role="tab"
                            aria-selected={i === inst}
                            onClick={() => setInst(i)}
                            className={`min-h-12 rounded-xl px-3 py-2 text-left text-[14px] font-semibold leading-tight transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 ${i === INSTITUTIONS.length - 1 ? "col-span-2" : ""} ${i === inst ? "bg-slate-950 text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"}`}
                        >
                            {name}
                        </button>
                    ))}
                </div>
                <ol role="tabpanel" aria-label={INSTITUTIONS[inst]} className="m-0 mt-5 list-none border-t border-slate-200 p-0">
                    {SIDE_BY_SIDE.map((m) => {
                        const c = m.cells[inst];
                        return (
                            <li key={m.id} className="m-0 border-b border-slate-200 py-4">
                                <div className="font-mono text-[12px] font-bold uppercase tracking-widest text-slate-500">{m.move}</div>
                                {c ? (
                                    <div className="mt-1 text-[16px] leading-relaxed text-slate-900"><Source src={c.src}>{c.text}</Source></div>
                                ) : (
                                    <div className="mt-1 text-[16px] text-slate-300" aria-label="Not in the record">&mdash;</div>
                                )}
                            </li>
                        );
                    })}
                </ol>
            </div>

            {/* Wide: the whole table in its own frame. */}
            <div className="hidden max-h-[80vh] overflow-auto overscroll-x-contain rounded-xl border border-slate-200 @2xl:block">
                <table className="m-0 w-[86rem] table-fixed border-separate border-spacing-0 text-left">
                    <colgroup>
                        <col className="w-[11rem]" />
                        {INSTITUTIONS.map((name) => <col key={name} className="w-[15rem]" />)}
                    </colgroup>
                    <thead>
                        <tr>
                            <th className="sticky left-0 top-0 z-20 border-b border-r border-slate-200 bg-slate-50 px-4 py-3 align-bottom font-mono text-[12px] font-bold uppercase tracking-widest text-slate-500">
                                Tactic
                            </th>
                            {INSTITUTIONS.map((name) => (
                                <th key={name} className="sticky top-0 z-10 border-b border-slate-200 bg-slate-50 px-4 py-3 align-bottom text-[13px] font-semibold leading-tight text-slate-800">
                                    {name}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {SIDE_BY_SIDE.map((m) => (
                            <tr key={m.id}>
                                <th scope="row" className="sticky left-0 z-10 border-b border-r border-slate-200 bg-white px-4 py-4 align-top text-[15px] font-semibold leading-snug text-slate-950">
                                    {m.move}
                                </th>
                                {m.cells.map((c, j) => (
                                    <td key={j} className={`w-60 border-b border-slate-200 px-4 py-4 align-top text-[14px] leading-snug ${c ? "text-slate-900" : "bg-slate-50/60 text-slate-300"}`}>
                                        {c ? <Source src={c.src}>{c.text}</Source> : <span aria-label="Not in the record">&mdash;</span>}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

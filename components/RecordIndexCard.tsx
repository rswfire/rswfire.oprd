// app/(archive) homepage — the OPRD Record card.
//
// A door on the overview to the live cluster on /record: the ten-plus
// evidentiary signals read together by Autonomy Realms across six lenses.
// The graphic refracts one record into its six readings; each reading links
// straight into that tab on /record. Flagged experimental, like the page it
// opens, because the machine readings are live and may change.

import Link from "next/link";

type Reading = {
    type: string;
    label: string;
    blurb: string;
    color: string;
};

// Order and hues follow the platform's own reflection chrome.
const READINGS: Reading[] = [
    { type: "narrative", label: "Narrative", color: "#2e694f", blurb: "The record read in order, as the account its documents give." },
    { type: "symbolic", label: "Symbolic", color: "#5c4a84", blurb: "The images and figures the record keeps returning to." },
    { type: "lineage", label: "Lineage", color: "#96692a", blurb: "What this record descends from, and what it sets down for later." },
    { type: "mirror", label: "Mirror", color: "#2a5e82", blurb: "What the record reflects back about the person who kept it." },
    { type: "shape", label: "Shape", color: "#3a6b6b", blurb: "The form the whole takes when the parts are seen at once." },
    { type: "systemic", label: "Systemic", color: "#a14332", blurb: "The mechanism the record documents — how the pattern operates." },
];

function Prism() {
    // One beam entering a prism, six colored rays leaving it.
    const apex = { x: 300, y: 70 };
    const ends = [20, 40, 60, 80, 100, 120];
    return (
        <svg viewBox="0 0 600 140" className="h-full w-full" role="img" aria-label="One record refracted into six readings" preserveAspectRatio="xMidYMid meet">
            {/* incoming beam */}
            <line x1="30" y1="70" x2="255" y2="70" stroke="#1a3a4a" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
            {/* the six readings, fanning out */}
            {READINGS.map((r, i) => (
                <line key={r.type} x1={apex.x} y1={apex.y} x2="575" y2={ends[i]} stroke={r.color} strokeWidth="2.5" strokeLinecap="round" />
            ))}
            {/* the prism — the record */}
            <polygon points="255,38 255,102 302,70" fill="rgba(26,58,74,0.06)" stroke="#1a3a4a" strokeWidth="2" strokeLinejoin="round" />
        </svg>
    );
}

export default function RecordIndexCard() {
    return (
        <div className="mt-4 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">

            {/* Header */}
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-gray-100 px-6 pt-5 pb-4">
                <div>
                    <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold uppercase tracking-widest text-gray-400">The OPRD Record</span>
                        <span className="rounded-full border border-amber-300 bg-amber-50 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-amber-700">
                            Experimental
                        </span>
                    </div>
                    <h2 className="mt-1 text-xl font-bold text-gray-900">The evidence, read together</h2>
                </div>
                <Link
                    href="/record"
                    className="whitespace-nowrap text-sm font-medium text-emerald-700 hover:text-emerald-600 hover:underline"
                >
                    Open the full record →
                </Link>
            </div>

            {/* Graphic + intro */}
            <div className="grid gap-4 px-6 py-5 sm:grid-cols-[1fr_240px] sm:items-center">
                <p className="text-sm leading-relaxed text-gray-600">
                    Every primary recording this archive cites lives permanently on{" "}
                    <a href="https://rswfire.com" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline hover:text-emerald-600">Autonomy Realms</a>{" "}
                    as an analyzed signal. The evidentiary core is held there as one cluster, and the platform reads the whole cluster
                    across six lenses. Each reading below opens that lens on the live record. The readings are machine analysis; the
                    recordings and documents they read are the evidence.
                </p>
                <div className="h-24 sm:h-28">
                    <Prism />
                </div>
            </div>

            {/* The six readings */}
            <div className="grid grid-cols-1 gap-px border-t border-gray-100 bg-gray-100 sm:grid-cols-2 lg:grid-cols-3">
                {READINGS.map((r) => (
                    <Link
                        key={r.type}
                        href={`/record?reading=${r.type}#readings`}
                        className="group flex flex-col bg-white px-5 py-4 transition-colors hover:bg-gray-50"
                        style={{ borderLeft: `3px solid ${r.color}` }}
                    >
                        <span className="text-xs font-bold uppercase tracking-widest" style={{ color: r.color }}>
                            {r.label}
                        </span>
                        <span className="mt-1.5 text-sm leading-snug text-gray-600 group-hover:text-gray-900">
                            {r.blurb}
                        </span>
                    </Link>
                ))}
            </div>

        </div>
    );
}

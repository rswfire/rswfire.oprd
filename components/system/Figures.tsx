// components/system/Figures.tsx
//
// The figures inside the patterns, in one palette: slate for the record,
// rose for what was done, amber for money only. Every line cites the
// document it rests on.
import { COUNTS, DEPARTMENT, PRICES, PRICE_NOTE, PRICE_TOTAL, SILENCE, SPREAD, SPREAD_LANES, WAIVER, WAIVER_FACTORS } from "@/data/system";
import type { FigureId } from "@/data/system";
import { Source } from "@/components/system/Docs";

const META = "font-mono text-[12px] font-bold uppercase tracking-widest text-slate-500";

// ── How it spread ────────────────────────────────────────────────────────────

function Spread() {
    const W = 480, L = 132, R = 10, T = 28, LH = 40;
    const H = T + SPREAD_LANES.length * LH + 8;
    const x = (day: number) => L + ((W - L - R) * day) / 46;
    const y = (lane: number) => T + lane * LH + LH / 2;
    const ticks = [
        { day: 0, label: "Mar 1" }, { day: 9, label: "Mar 10" }, { day: 19, label: "Mar 20" },
        { day: 30, label: "Apr 1" }, { day: 45, label: "Apr 15" },
    ];
    return (
        <figure className="m-0">
            <svg viewBox={`0 0 ${W} ${H}`} className="hidden w-full @md:block" role="img" aria-label="March 3 to April 15, 2026, by institution">
                <defs>
                    <marker id="sys-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                        <path d="M 0 0 L 10 5 L 0 10 z" fill="#be123c" />
                    </marker>
                </defs>
                {SPREAD_LANES.map((name, i) => (
                    <g key={name}>
                        <line x1={L} x2={W - R} y1={y(i)} y2={y(i)} stroke="#e2e8f0" strokeWidth={1} />
                        <text x={L - 10} y={y(i) + 4} textAnchor="end" fontSize={11} fontWeight={600} fill="#334155">{name}</text>
                    </g>
                ))}
                {ticks.map((t) => (
                    <g key={t.day}>
                        <line x1={x(t.day)} x2={x(t.day)} y1={T - 4} y2={H - 8} stroke="#f1f5f9" strokeWidth={1} />
                        <text x={x(t.day)} y={T - 12} textAnchor="middle" fontSize={10} fill="#64748b" fontFamily="ui-monospace, monospace">{t.label}</text>
                    </g>
                ))}
                {SPREAD.map((e, i) =>
                    e.from !== e.to ? (
                        <line key={`a${i}`} x1={x(e.day)} y1={y(e.from)} x2={x(e.day)} y2={y(e.to) + (e.to > e.from ? -7 : 7)} stroke="#be123c" strokeWidth={1.5} markerEnd="url(#sys-arrow)" />
                    ) : null,
                )}
                {SPREAD.map((e, i) => (
                    <g key={`p${i}`}>
                        <circle cx={x(e.day)} cy={y(e.from)} r={4.5} fill="#be123c" />
                        {e.from !== e.to ? <circle cx={x(e.day)} cy={y(e.to)} r={4.5} fill="#fff" stroke="#be123c" strokeWidth={1.5} /> : null}
                    </g>
                ))}
            </svg>
            <ol className="m-0 list-none border-t border-slate-200 p-0 @md:mt-4">
                {SPREAD.map((e, i) => (
                    <li key={i} className="m-0 grid grid-cols-[4.75rem_1fr] gap-x-3 border-b border-slate-200 py-3">
                        <span className="pt-0.5 font-mono text-[12px] font-bold text-rose-700">{e.date}</span>
                        <span className="min-w-0">
                            <span className="block text-[12px] font-semibold uppercase tracking-wide text-slate-500">
                                {SPREAD_LANES[e.from]}
                                {e.from !== e.to ? <> &rarr; {SPREAD_LANES[e.to]}</> : null}
                            </span>
                            <span className="mt-0.5 block text-[15px] leading-snug text-slate-900">
                                <Source src={e.src}>{e.text}</Source>
                            </span>
                        </span>
                    </li>
                ))}
            </ol>
        </figure>
    );
}

// ── Days without an answer ───────────────────────────────────────────────────

function Silence() {
    return (
        <figure className="m-0">
            <ol className="m-0 list-none border-t border-slate-200 p-0">
                {SILENCE.map((s, i) => (
                    <li key={i} className="m-0 grid grid-cols-[5.5rem_1fr] gap-x-4 border-b border-slate-200 py-4">
                        <span className="leading-none">
                            <span className="block font-mono text-[30px] font-bold text-slate-950">{s.days}</span>
                            <span className="mt-1 block font-mono text-[12px] text-slate-500">days</span>
                        </span>
                        <span className="min-w-0">
                            <span className="block text-[15px] font-semibold text-slate-800">{s.who}</span>
                            <span className="block font-mono text-[12px] text-slate-500">{s.from} &rarr; {s.to}</span>
                            <span className="mt-1 block text-[15px] leading-snug text-slate-900">
                                <Source src={s.src}>{s.text}</Source>
                            </span>
                        </span>
                    </li>
                ))}
            </ol>
        </figure>
    );
}

// ── Counts ───────────────────────────────────────────────────────────────────

function Counts() {
    return (
        <figure className="m-0 grid grid-cols-1 border-t border-slate-200 @md:grid-cols-3 @md:gap-5 @md:border-0">
            {COUNTS.map((c) => (
                <div key={c.who} className="border-b border-slate-200 py-4 @md:border-b-0 @md:border-t-2 @md:border-slate-950 @md:pt-3">
                    <div className={META}>{c.who}</div>
                    <div className="mt-1 font-mono text-[32px] font-bold leading-none text-slate-950">{c.count}</div>
                    <div className="mt-3 space-y-1 text-[14px] leading-snug text-slate-700">
                        {c.lines.map((l, i) => (
                            <div key={i}><Source src={l.src}>{l.text}</Source></div>
                        ))}
                    </div>
                </div>
            ))}
        </figure>
    );
}

// ── The price ────────────────────────────────────────────────────────────────

function Prices() {
    return (
        <figure className="m-0">
            <div className="border-l-4 border-amber-500 bg-amber-50 px-4 py-4 @xl:px-5">
                <div className="font-mono text-[32px] font-bold leading-tight text-slate-950 @xl:text-[40px]">{PRICE_TOTAL}</div>
                <div className="mt-1 text-[14px] leading-snug text-amber-900">{PRICE_NOTE}</div>
            </div>
            <ul className="m-0 list-none p-0">
                {PRICES.map((p, i) => (
                    <li key={i} className="m-0 grid grid-cols-1 gap-x-4 border-b border-slate-200 py-3 @md:grid-cols-[9rem_1fr]">
                        <span className="font-mono text-[18px] font-bold text-slate-950">{p.amount}</span>
                        <span className="min-w-0">
                            <span className="block text-[14px] font-semibold text-slate-800">
                                {p.who} <span className="ml-1 font-mono text-[12px] font-normal text-slate-500">{p.date}</span>
                            </span>
                            <span className="block text-[15px] leading-snug text-slate-900"><Source src={p.src}>{p.text}</Source></span>
                        </span>
                    </li>
                ))}
            </ul>
        </figure>
    );
}

// ── The fee waiver ───────────────────────────────────────────────────────────

function Waiver() {
    return (
        <figure className="m-0">
            <div className="grid grid-cols-1 border-t border-slate-200 @2xl:grid-cols-2 @2xl:gap-x-8">
                {WAIVER.map((w) => (
                    <div key={w.who} className="border-b border-slate-200 py-4">
                        <div className="flex items-baseline justify-between gap-3">
                            <span className="text-[15px] font-semibold text-slate-800">{w.who}</span>
                            <span className="shrink-0 font-mono text-[12px] font-bold uppercase tracking-widest text-rose-700">{w.outcome}</span>
                        </div>
                        <div className="font-mono text-[12px] text-slate-500">Requested {w.requested}</div>
                        <div className="mt-1 text-[15px] leading-snug text-slate-900"><Source src={w.src}>{w.text}</Source></div>
                        <ul className="m-0 mt-3 list-none divide-y divide-slate-100 p-0">
                            {WAIVER_FACTORS.map((f, i) => (
                                <li key={f} className="m-0 py-2 text-[13px] leading-snug">
                                    <span className="block font-semibold text-slate-700">{f}</span>
                                    {w.says[i] ? <span className="mt-0.5 block text-rose-800">{w.says[i]}</span> : <span className="mt-0.5 block text-slate-500">{w.none}</span>}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </figure>
    );
}

// ── One department ───────────────────────────────────────────────────────────

function Department() {
    return (
        <figure className="m-0">
            <div className="border-t-2 border-slate-950 pt-3">
                <div className={META}>Oregon Department of Justice</div>
            </div>
            <ul className="m-0 grid list-none grid-cols-1 p-0 @xl:grid-cols-2 @xl:gap-x-8">
                {DEPARTMENT.map((d) => (
                    <li key={d.seat} className="m-0 border-b border-slate-200 py-3">
                        <div className="text-[15px] font-semibold text-slate-800">{d.seat}</div>
                        <div className="mt-0.5 text-[15px] leading-snug text-slate-900">
                            <Source src={d.src}>{d.text}</Source>
                            {d.words ? <span className="text-rose-700"> &ldquo;{d.words}&rdquo;</span> : null}
                        </div>
                    </li>
                ))}
            </ul>
        </figure>
    );
}

export default function Figure({ id }: { id: FigureId }) {
    switch (id) {
        case "spread": return <Spread />;
        case "silence": return <Silence />;
        case "counts": return <Counts />;
        case "prices": return <Prices />;
        case "waiver": return <Waiver />;
        case "department": return <Department />;
    }
}

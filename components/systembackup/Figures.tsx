// components/map/Figures.tsx
//
// The figures of The Map. Each is built from documents in the register and
// cites them. Dates, counts, and dollar figures are the ones in the cited
// document; quoted words are the words at the place cited.
import Cite, { type RegisterSlug } from "@/components/Cite";

const PRODUCTION = "01M1M4WF78XJPEJJ48D1JZ4SJ8";

// ── How it spread: March 3 to April 15, 2026, by institution ────────────────

const LANES = [
    "Oregon Parks and Recreation",
    "Oregon State Police",
    "FBI",
    "Department of Justice",
    "Forest Service",
    "The door",
];

// day = days after March 1, 2026. from/to index LANES.
const EVENTS: { day: number; date: string; from: number; to: number; label: string }[] = [
    { day: 2, date: "March 3", from: 0, to: 1, label: "Lee sends the archive to Captain Kennedy" },
    { day: 3, date: "March 4", from: 1, to: 1, label: "“threat assessment be conducted asap”" },
    { day: 5, date: "March 6", from: 1, to: 2, label: "Hyde sends the name to FBI personnel from his FBI account" },
    { day: 5, date: "March 6", from: 0, to: 1, label: "Lee sends the dismissal letter and the Timeline of Events to Hyde" },
    { day: 9, date: "March 10", from: 1, to: 1, label: "Hyde forwards the OPRD documents to Nelson" },
    { day: 10, date: "March 11", from: 0, to: 3, label: "The analyst: “Jamen Lee with OPRD shared the information … with the fusion center”" },
    { day: 10, date: "March 11", from: 3, to: 1, label: "Greenlee: “border on harassment”" },
    { day: 12, date: "March 13", from: 2, to: 1, label: "Driver’s record and “ReportRobertWhite” to Nelson" },
    { day: 21, date: "March 22", from: 4, to: 1, label: "USFS Special Agent: schedule, duties, vehicles, onX Hunt waypoint" },
    { day: 22, date: "March 23", from: 1, to: 1, label: "“Suspect”: “publicly airing grievances”" },
    { day: 23, date: "March 24", from: 1, to: 5, label: "Nelson, Hyde, and the USFS Special Agent at the gate" },
    { day: 45, date: "April 15", from: 1, to: 1, label: "“to be documented for information only at this time”" },
];

export function Spread() {
    const W = 860, L = 170, R = 20, T = 28, LH = 46;
    const H = T + LANES.length * LH + 16;
    const x = (day: number) => L + ((W - L - R) * day) / 46;
    const y = (lane: number) => T + lane * LH + LH / 2;
    const ticks = [
        { day: 0, label: "Mar 1" }, { day: 9, label: "Mar 10" }, { day: 19, label: "Mar 20" },
        { day: 30, label: "Apr 1" }, { day: 39, label: "Apr 10" }, { day: 45, label: "Apr 15" },
    ];
    return (
        <figure className="-mx-4 mt-4 border-y border-slate-200 bg-white p-3 sm:mx-0 sm:rounded-xl sm:border">
            <svg viewBox={`0 0 ${W} ${H}`} className="hidden w-full md:block" role="img" aria-label="How it spread, March 3 to April 15, 2026">
                <defs>
                    <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                        <path d="M 0 0 L 10 5 L 0 10 z" fill="#be123c" />
                    </marker>
                </defs>
                {LANES.map((name, i) => (
                    <g key={name}>
                        <line x1={L} x2={W - R} y1={y(i)} y2={y(i)} stroke="#e2e8f0" strokeWidth={1} />
                        <text x={L - 10} y={y(i) + 4} textAnchor="end" fontSize={12} fontWeight={700} fill="#334155">{name}</text>
                    </g>
                ))}
                {ticks.map((t) => (
                    <g key={t.day}>
                        <line x1={x(t.day)} x2={x(t.day)} y1={T - 6} y2={H - 12} stroke="#f1f5f9" strokeWidth={1} />
                        <text x={x(t.day)} y={T - 12} textAnchor="middle" fontSize={10} fill="#64748b" fontFamily="ui-monospace, monospace">{t.label}</text>
                    </g>
                ))}
                {EVENTS.map((e, i) =>
                    e.from !== e.to ? (
                        <line
                            key={`a${i}`}
                            x1={x(e.day)} y1={y(e.from)} x2={x(e.day)} y2={y(e.to) + (e.to > e.from ? -7 : 7)}
                            stroke="#be123c" strokeWidth={1.5} markerEnd="url(#arrow)"
                        />
                    ) : null,
                )}
                {EVENTS.map((e, i) => (
                    <g key={`p${i}`}>
                        <circle cx={x(e.day)} cy={y(e.from)} r={4.5} fill="#be123c" />
                        {e.from !== e.to ? <circle cx={x(e.day)} cy={y(e.to)} r={4.5} fill="#fff" stroke="#be123c" strokeWidth={1.5} /> : null}
                    </g>
                ))}
            </svg>
            <figcaption className="mt-3 grid grid-cols-1 gap-x-6 gap-y-1 text-[13px] leading-snug text-gray-700 sm:grid-cols-2">
                {EVENTS.map((e, i) => (
                    <div key={i} className="flex gap-2">
                        <span className="w-16 shrink-0 font-mono text-[11px] text-rose-700">{e.date}</span>
                        <span>
                            <span className="text-slate-500">{LANES[e.from]}{e.from !== e.to ? ` → ${LANES[e.to]}` : ""}: </span>
                            <Cite ulid={PRODUCTION} thread="osp" subtle>{e.label}</Cite>
                        </span>
                    </div>
                ))}
            </figcaption>
        </figure>
    );
}

// ── Days without an answer ───────────────────────────────────────────────────

const SILENCE: { who: string; from: string; to: string; days: number; what: string; ulid: string; thread: RegisterSlug }[] = [
    { who: "Office of the Governor", from: "November 18, 2025", to: "September 8, 2026", days: 294, what: "thirteen letters; the first message back acknowledges a records request", ulid: "01KACE2348G8VG3XPB3BGW3F1N", thread: "governor" },
    { who: "Administrative Services", from: "July 10, 2026", to: "October 15, 2026", days: 97, what: "what search produced “no records”; no answer", ulid: "01KX6NGF001WN65P3N29Z0EBY5", thread: "das" },
    { who: "Oregon State Police", from: "April 14, 2026", to: "July 14, 2026", days: 91, what: "after the fee waiver form; one record released on July 14", ulid: "01KP6XKNP8Z56VTGA4MZGJG1N2", thread: "osp" },
    { who: "Oregon Parks and Recreation", from: "August 22, 2025", to: "November 20, 2025", days: 90, what: "the first reply at the addresses given; the answer had been posted to a portal on August 29", ulid: "01KAHTQ0ZG656XCF1G2Q9X15KY", thread: "oprd" },
    { who: "Oregon Parks and Recreation", from: "September 18, 2026", to: "October 15, 2026", days: 27, what: "both estimates disputed; the fee waiver undecided", ulid: "01M2VF2JXGC49DZZZDFKKMXS2J", thread: "oprd" },
    { who: "Department of Justice", from: "September 20, 2026", to: "October 15, 2026", days: 25, what: "the fusion center analyst, asked what she documented; no answer", ulid: "01M30EACB8FXZB4SQ3TA1ED1N3", thread: "osp" },
    { who: "Department of Justice", from: "September 24, 2026", to: "October 15, 2026", days: 21, what: "which categories carry the burden; two letters back, neither answers", ulid: "01M3ARW6JRNP6YE36HCJ5A6CAC", thread: "doj" },
];

export function Silence() {
    const max = Math.max(...SILENCE.map((s) => s.days));
    return (
        <figure className="-mx-4 mt-4 border-t border-slate-200 sm:mx-0 sm:space-y-2 sm:border-0">
            {SILENCE.map((s, i) => (
                <div key={i} className="border-b border-slate-200 bg-white px-4 py-2 sm:rounded-lg sm:border sm:px-3">
                    <div className="flex items-baseline justify-between gap-3">
                        <span className="text-[14px] font-bold text-slate-800">{s.who}</span>
                        <span className="font-mono text-[12px] text-slate-500">{s.from} → {s.to}</span>
                    </div>
                    <div className="mt-1 flex items-center gap-3">
                        <div className="h-3 flex-1 rounded bg-slate-100">
                            <div className="h-3 rounded bg-slate-500" style={{ width: `${(s.days / max) * 100}%` }} />
                        </div>
                        <span className="w-20 shrink-0 text-right font-mono text-sm font-bold text-slate-900">{s.days} days</span>
                    </div>
                    <div className="mt-1 text-[13px] text-gray-600">
                        <Cite ulid={s.ulid} thread={s.thread} subtle>{s.what}</Cite>
                    </div>
                </div>
            ))}
        </figure>
    );
}

// ── The price ────────────────────────────────────────────────────────────────

const PRICES: { who: string; amount: number; label: string; what: string; date: string; ulid: string; thread: RegisterSlug }[] = [
    { who: "Oregon State Police", amount: 16315, label: "$16,315", what: "PR36445: the fee letter template, its versions, and the letters issued on it", date: "August 11, 2026", ulid: "01KZS0AEV8KA95QQZVJBCKBQEM", thread: "osp" },
    { who: "Oregon Parks and Recreation", amount: 1728, label: "$1,600 – $1,728", what: "every record concerning him held by the Director and the Deputy Director", date: "September 18, 2026", ulid: "01M2VE25T0WZXS6PE4BXJK0693", thread: "oprd" },
    { who: "Department of Justice", amount: 599, label: "$599", what: "1,350 potentially responsive records; the fee waiver denied", date: "October 15, 2026", ulid: "01M50S7NEG8CQV2R6TF6Y6BKXZ", thread: "doj" },
    { who: "Office of the Governor", amount: 572.5, label: "$572.50", what: "the office’s records concerning him; the fee waiver denied", date: "September 22, 2026", ulid: "01M35TPA3RXRP0HY3NM9JHDJ8F", thread: "governor" },
    { who: "Oregon State Police", amount: 157.5, label: "$157.50", what: "PR27478: the file on the March 24 visit, after “no records”", date: "August 11, 2026", ulid: "01KZS0AAY88AYPJ32PDEZABW03", thread: "osp" },
    { who: "Oregon Parks and Recreation", amount: 80, label: "$80", what: "every version of the Timeline of Events", date: "September 18, 2026", ulid: "01M2VEFTARQHQW029628GQA1Y7", thread: "oprd" },
    { who: "Oregon State Police", amount: 12.5, label: "$12.50", what: "one CAD record, by check or money order", date: "April 13, 2026", ulid: "01KP4N822RW0N8WZ47YG8MG4W8", thread: "osp" },
];

export function Prices() {
    return (
        <figure className="mt-4">
            <div className="-mx-4 bg-amber-50 px-4 py-4 sm:mx-0 sm:rounded-xl sm:border sm:border-amber-300">
                <div className="text-[11px] font-bold uppercase tracking-widest text-amber-800">Quoted to one person, to see what the state wrote about him</div>
                <div className="mt-1 font-mono text-4xl font-bold text-slate-900 sm:text-5xl">$19,336.50 – $19,464.50</div>
                <div className="mt-1 text-[13px] text-amber-900">seven estimates, four institutions, April 13 to October 15, 2026; every one payable by mailed check before any work</div>
            </div>
            <ul className="-mx-4 mt-3 divide-y divide-slate-200 border-y border-slate-200 bg-white sm:mx-0 sm:rounded-xl sm:border">
                {PRICES.map((p, i) => (
                    <li key={i} className="grid grid-cols-[7rem_1fr] gap-x-4 px-4 py-3 sm:grid-cols-[9rem_1fr]">
                        <div className="font-mono text-[17px] font-bold text-slate-900">{p.label}</div>
                        <div>
                            <div className="text-[14px] font-bold text-slate-800">{p.who} <span className="ml-1 font-mono text-[12px] font-normal text-slate-500">{p.date}</span></div>
                            <div className="text-[14px] text-gray-700"><Cite ulid={p.ulid} thread={p.thread} subtle>{p.what}</Cite></div>
                        </div>
                    </li>
                ))}
            </ul>
        </figure>
    );
}

// ── Counts ───────────────────────────────────────────────────────────────────

export function Counts() {
    const card = "border-b border-slate-200 bg-white px-4 py-4 sm:rounded-xl sm:border";
    const big = "font-mono text-4xl font-bold text-slate-900";
    const small = "mt-2 text-[13px] leading-snug text-gray-600";
    return (
        <figure className="-mx-4 mt-4 border-t border-slate-200 sm:mx-0 sm:grid sm:grid-cols-3 sm:gap-3 sm:border-0">
            <div className={card}>
                <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Oregon State Police</div>
                <div className={big}>0 <span className="text-slate-400">→</span> 16</div>
                <div className={small}>
                    <Cite ulid="01KNAV7K70M1CKA57ZJW6M6X1R" thread="osp" subtle>April 3, 2026: “no records responsive to your request.”</Cite>{" "}
                    <Cite ulid={PRODUCTION} thread="osp" subtle>September 3, 2026: sixteen files.</Cite>
                </div>
            </div>
            <div className={card}>
                <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Administrative Services</div>
                <div className={big}>0</div>
                <div className={small}>
                    <Cite ulid="01KX6H9018F0C5Z247YFT52JME" thread="das" subtle>July 10, 2026</Cite> and{" "}
                    <Cite ulid="01KYJXBM38DF8Q0GJ3KSKXGKXK" thread="das" subtle>July 27, 2026: “reviewed its files”; no records.</Cite>
                </div>
            </div>
            <div className={card}>
                <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Department of Justice</div>
                <div className={big}>1,350</div>
                <div className={small}>
                    <Cite ulid="01M50S7NEG8CQV2R6TF6Y6BKXZ" thread="doj" subtle>October 15, 2026: “identified 1,350 potentially responsive records.”</Cite>
                </div>
            </div>
        </figure>
    );
}

// ── The fee waiver: five factors, four institutions ──────────────────────────

const FACTORS = [
    "Identity of the requester",
    "Purpose",
    "Character of the information",
    "Already public",
    "Ability to disseminate",
    "Reduction under ORS 192.324(5)",
];

// What each letter says on each factor, in its words. null: the letter says
// nothing on it, and `none` says what that silence is.
const WAIVER: { who: string; requested: string; says: (string | null)[]; none: string; ulid: string; thread: RegisterSlug; note: string }[] = [
    { who: "Oregon Parks and Recreation", requested: "April 14 and September 5, 2026", says: [null, null, null, null, null, null], none: "Never decided.", ulid: "01M2VE25T0WZXS6PE4BXJK0693", thread: "oprd", note: "neither estimate grants, denies, or mentions the waiver" },
    { who: "Oregon State Police", requested: "April 3, April 13, and July 29, 2026", says: [null, null, null, null, null, null], none: "Never answered.", ulid: "01KYR9AFWRGCR1B546XC2YK3EP", thread: "osp", note: "a form to print and mail; nothing on the public interest" },
    { who: "Office of the Governor", requested: "September 5, 2026", says: [
        "“The requester has demonstrated that this request relates to a personal, rather than a public interest.”",
        "“the use of records for a personal issue does not weigh in favor of the request being in the public interest”",
        "“the fee waiver request form does not explain how the release of records is in the public interest other than by stating a general interest in transparency”",
        "“The requester has not demonstrated that this factor weighs in favor of granting a fee waiver.” No reason given.",
        "“The requester has not demonstrated the ability to disseminate the public records but merely stated that he can post it on a website.”",
        null,
    ], none: "Not mentioned.", ulid: "01M35TPA3RXRP0HY3NM9JHDJ8F", thread: "governor", note: "denied, one sentence on each factor" },
    { who: "Department of Justice", requested: "September 23, 2026", says: [null, null, null, null, null, null], none: "Not named.", ulid: "01M50S7NEG8CQV2R6TF6Y6BKXZ", thread: "doj", note: "denied, naming no factor: “the records you seek pertain primarily to you and your private interests”; “Given the burden on our agency”" },
];

export function Waiver() {
    return (
        <figure className="-mx-4 mt-4 border-t border-slate-200 sm:mx-0 sm:space-y-3 sm:border-0">
            {WAIVER.map((w) => (
                <div key={w.who} className="border-b border-slate-200 bg-white px-4 py-3 sm:rounded-xl sm:border">
                    <div className="text-[15px] font-bold text-slate-800">{w.who}</div>
                    <div className="text-[13px] text-slate-500">requested {w.requested}</div>
                    <div className="mt-1 text-[14px] text-gray-800"><Cite ulid={w.ulid} thread={w.thread} subtle>{w.note}</Cite></div>
                    <ul className="mt-3 divide-y divide-slate-100">
                        {FACTORS.map((f, i) => (
                            <li key={f} className="grid grid-cols-1 gap-x-4 py-1.5 text-[13px] sm:grid-cols-[12rem_1fr]">
                                <span className="font-semibold text-slate-700">{f}</span>
                                {w.says[i] ? <span className="text-rose-800">{w.says[i]}</span> : <span className="text-slate-500">{w.none}</span>}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </figure>
    );
}

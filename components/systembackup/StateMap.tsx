// components/map/StateMap.tsx
//
// The map. The institutions of the State of Oregon and one citizen, drawn as
// nodes; every arrow is a thing one sent to another, labeled in the words of
// the document it is drawn from. Red: what they did with his letters. Amber:
// what they sent back when he asked for the records. Grey: silence.
import Link from "next/link";

const PRODUCTION = "01M1M4WF78XJPEJJ48D1JZ4SJ8";

type N = { id: string; x: number; y: number; label: string; sub?: string; href: string };

const NODES: N[] = [
    { id: "citizen", x: 500, y: 380, label: "A citizen", sub: "an unpaid park volunteer", href: "/testimony" },
    { id: "oprd", x: 140, y: 140, label: "Parks and Recreation", sub: "director, deputy director, emergency manager", href: "/records/oprd" },
    { id: "gov", x: 140, y: 620, label: "Office of the Governor", sub: "thirteen letters", href: "/records/governor" },
    { id: "osp", x: 500, y: 100, label: "Oregon State Police", sub: "press captain, CID, Major Crimes, a JTTF detective", href: "/records/osp" },
    { id: "fbi", x: 860, y: 100, label: "FBI", sub: "Portland, through an OSP detective's account", href: `/record/osp/${PRODUCTION}` },
    { id: "usfs", x: 880, y: 300, label: "Forest Service", sub: "a special agent", href: "/records/usfs" },
    { id: "doj", x: 860, y: 560, label: "Department of Justice", sub: "fusion center, Attorney General, counsel, records", href: "/records/doj" },
    { id: "das", x: 500, y: 660, label: "Administrative Services", sub: "risk management, records", href: "/records/das" },
    { id: "pra", x: 120, y: 380, label: "Public Records Advocate", href: "/records/governor" },
];

type E = { from: string; to: string; tone: "red" | "amber" | "grey"; label: string; href: string; move: string; bend?: number };

const EDGES: E[] = [
    // what they did with the letters
    { from: "citizen", to: "oprd", tone: "grey", label: "letters: five protections for every volunteer", move: "channels", href: "/record/oprd/01K3FDT5P09S9N9QSZYWS9KN7A", bend: -40 },
    { from: "oprd", to: "citizen", tone: "grey", label: "“through the appropriate channels”; channels never named", move: "channels", href: "/record/oprd/01K3HPAXBG8F4QZG4DJNDY5QY8", bend: 40 },
    { from: "citizen", to: "gov", tone: "grey", label: "thirteen letters", move: "silence", href: "/records/governor", bend: -40 },
    { from: "gov", to: "citizen", tone: "grey", label: "no answer, 294 days", move: "silence", href: "/record/governor/01KACE2348G8VG3XPB3BGW3F1N", bend: 40 },
    { from: "oprd", to: "osp", tone: "red", label: "the letters: “sharing for situational awareness” → “threat assessment be conducted asap”", move: "police", href: `/record/osp/${PRODUCTION}` },
    { from: "oprd", to: "doj", tone: "red", label: "“shared the information about Mr. White’s activities with the fusion center”", move: "police", href: `/record/osp/${PRODUCTION}`, bend: 120 },
    { from: "doj", to: "osp", tone: "red", label: "“documenting this activity … border on harassment”", move: "police", href: `/record/osp/${PRODUCTION}`, bend: -60 },
    { from: "osp", to: "fbi", tone: "red", label: "the name, from an FBI account: “But I don’t have a DOB”", move: "police", href: `/record/osp/${PRODUCTION}`, bend: -30 },
    { from: "fbi", to: "osp", tone: "red", label: "driver’s record; “ReportRobertWhite”", move: "police", href: `/record/osp/${PRODUCTION}`, bend: 30 },
    { from: "usfs", to: "osp", tone: "red", label: "schedule, vehicles, a hunting-app waypoint on where he sleeps; “told not to advise WHITE”", move: "police", href: `/record/osp/${PRODUCTION}` },
    { from: "osp", to: "citizen", tone: "red", label: "“Suspect”: “publicly airing grievances.” Three men with guns at the door. File kept.", move: "police", href: `/record/osp/${PRODUCTION}`, bend: -30 },
    // what came back when he asked for the records
    { from: "osp", to: "citizen", tone: "amber", label: "“no records” → one record, $12.50 → sixteen files, $157.50 → four withheld. $16,315 for a form letter.", move: "no-records", href: "/record/osp/01KZS0AEV8KA95QQZVJBCKBQEM", bend: 60 },
    { from: "oprd", to: "citizen", tone: "amber", label: "answer posted where he could not see it; 40 to 80 hours per category; $1,728; waiver never decided", move: "price", href: "/record/oprd/01M2VE25T0WZXS6PE4BXJK0693", bend: 100 },
    { from: "gov", to: "citizen", tone: "amber", label: "$572.50; waiver denied: “a personal, rather than a public interest”", move: "waiver", href: "/record/governor/01M35TPA3RXRP0HY3NM9JHDJ8F", bend: 100 },
    { from: "doj", to: "citizen", tone: "amber", label: "“very broad in scope”; no question answered; 1,350 records, $599; waiver denied: “your private interests”", move: "price", href: "/record/doj/01M50S7NEG8CQV2R6TF6Y6BKXZ", bend: -20 },
    { from: "doj", to: "citizen", tone: "amber", label: "two petitions dismissed: “we lack jurisdiction”", move: "jurisdiction", href: "/record/governor/01M3WAH79RY4KVVHRYVY9T726S", bend: 50 },
    { from: "das", to: "citizen", tone: "amber", label: "“not the custodian”; “no responsive record(s)”", move: "no-records", href: "/record/das/01KYJXBM38DF8Q0GJ3KSKXGKXK" },
    { from: "pra", to: "citizen", tone: "amber", label: "“does not have the authority to compel”", move: "jurisdiction", href: "/record/governor/01M4VG3NVGMSVPH7TCES6W2SW8" },
];

const TONE = {
    red: { stroke: "#fb7185", text: "#fecdd3", marker: "m-red" },
    amber: { stroke: "#fbbf24", text: "#fde68a", marker: "m-amber" },
    grey: { stroke: "#94a3b8", text: "#cbd5e1", marker: "m-grey" },
};

const R = 34;

function node(id: string) {
    const n = NODES.find((n) => n.id === id);
    if (!n) throw new Error(id);
    return n;
}

// A quadratic curve from the edge of one circle to the edge of the other,
// bowed by `bend` so paired arrows do not overlap. Returns the path and the
// midpoint for the label.
function curve(a: N, b: N, bend = 0) {
    const dx = b.x - a.x, dy = b.y - a.y;
    const len = Math.hypot(dx, dy);
    const ux = dx / len, uy = dy / len;
    const nx = -uy, ny = ux;
    const sx = a.x + ux * R, sy = a.y + uy * R;
    const ex = b.x - ux * (R + 6), ey = b.y - uy * (R + 6);
    const cx = (sx + ex) / 2 + nx * bend, cy = (sy + ey) / 2 + ny * bend;
    const mx = 0.25 * sx + 0.5 * cx + 0.25 * ex, my = 0.25 * sy + 0.5 * cy + 0.25 * ey;
    return { d: `M ${sx} ${sy} Q ${cx} ${cy} ${ex} ${ey}`, mx, my };
}

function wrap(s: string, width: number): string[] {
    const words = s.split(" ");
    const lines: string[] = [];
    let cur = "";
    for (const w of words) {
        if ((cur + " " + w).trim().length > width) {
            if (cur) lines.push(cur);
            cur = w;
        } else cur = (cur + " " + w).trim();
    }
    if (cur) lines.push(cur);
    return lines;
}

export default function StateMap() {
    return (
        <figure className="-mx-4 mt-4 overflow-hidden bg-slate-950 p-2 shadow-inner sm:mx-0 sm:rounded-2xl">
            <svg viewBox="0 0 1000 740" className="hidden w-full md:block" role="img" aria-label="The State of Oregon and one citizen: what each institution sent, in its own words">
                <defs>
                    {(["red", "amber", "grey"] as const).map((t) => (
                        <marker key={t} id={TONE[t].marker} viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                            <path d="M 0 0 L 10 5 L 0 10 z" fill={TONE[t].stroke} />
                        </marker>
                    ))}
                </defs>

                {EDGES.map((e, i) => {
                    const { d, mx, my } = curve(node(e.from), node(e.to), e.bend);
                    const t = TONE[e.tone];
                    return (
                        <a key={i} href={`#${e.move}`} className="group">
                            <path d={d} fill="none" stroke={t.stroke} strokeWidth={1.8} strokeOpacity={0.9} markerEnd={`url(#${t.marker})`} className="group-hover:stroke-[3.5]" />
                            <circle cx={mx} cy={my} r={11} fill="#020617" stroke={t.stroke} strokeWidth={1.5} />
                            <text x={mx} y={my + 4} textAnchor="middle" fontSize={11} fontWeight={700} fill={t.text} fontFamily="ui-monospace, monospace">{i + 1}</text>
                        </a>
                    );
                })}

                {NODES.map((n) => (
                    <Link key={n.id} href={n.href} className="group">
                        <circle cx={n.x} cy={n.y} r={R} fill={n.id === "citizen" ? "#0f172a" : "#1e293b"} stroke={n.id === "citizen" ? "#f8fafc" : "#64748b"} strokeWidth={n.id === "citizen" ? 2.5 : 1.5} className="group-hover:stroke-white" />
                        <text x={n.x} y={n.y + (n.sub ? -2 : 4)} textAnchor="middle" fontSize={13} fontWeight={700} fill="#f8fafc" fontFamily="ui-sans-serif, system-ui, sans-serif">
                            {wrap(n.label, 14).map((l, k, arr) => (
                                <tspan key={k} x={n.x} dy={k === 0 ? -(arr.length - 1) * 6.5 : 13}>{l}</tspan>
                            ))}
                        </text>
                        {n.sub ? (
                            <text x={n.x} y={n.y + R + 14} textAnchor="middle" fontSize={10.5} fill="#94a3b8" fontFamily="ui-sans-serif, system-ui, sans-serif">
                                {wrap(n.sub, 30).map((l, k) => (
                                    <tspan key={k} x={n.x} dy={k === 0 ? 0 : 11}>{l}</tspan>
                                ))}
                            </text>
                        ) : null}
                    </Link>
                ))}

                <g fontFamily="ui-sans-serif, system-ui, sans-serif" fontSize={10}>
                    <line x1={30} x2={60} y1={722} y2={722} stroke={TONE.red.stroke} strokeWidth={2} />
                    <text x={66} y={726} fill={TONE.red.text}>what they did with his letters</text>
                    <line x1={260} x2={290} y1={722} y2={722} stroke={TONE.amber.stroke} strokeWidth={2} />
                    <text x={296} y={726} fill={TONE.amber.text}>what came back when he asked for the records</text>
                    <line x1={590} x2={620} y1={722} y2={722} stroke={TONE.grey.stroke} strokeWidth={2} />
                    <text x={626} y={726} fill={TONE.grey.text}>silence</text>
                </g>
            </svg>
            <ol className="mt-3 grid grid-cols-1 gap-x-6 gap-y-1.5 px-2 pb-2 text-[13px] leading-snug md:grid-cols-2">
                {EDGES.map((e, i) => {
                    const t = TONE[e.tone];
                    return (
                        <li key={i} className="flex gap-2">
                            <span className="w-6 shrink-0 font-mono font-bold" style={{ color: t.stroke }}>{i + 1}</span>
                            <span>
                                <span className="text-slate-400">{node(e.from).label} → {node(e.to).label}: </span>
                                <Link href={e.href} className="text-slate-100 underline decoration-slate-600 underline-offset-2 hover:text-white">{e.label}</Link>
                            </span>
                        </li>
                    );
                })}
            </ol>
        </figure>
    );
}

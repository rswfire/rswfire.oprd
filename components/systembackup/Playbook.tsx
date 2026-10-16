// components/map/Playbook.tsx
//
// The playbook: the moves every institution in this record made, set side by
// side. One row per move, one cell per institution, each cell the fact from
// that institution's own document with its citation. An empty cell means the
// record does not show that institution making that move.
import Cite, { type RegisterSlug } from "@/components/Cite";

type Cell = { text: string; ulid: string; thread: RegisterSlug } | null;

interface Move {
    id: string;
    move: string;
    arrives: string; // the words it arrives in
    cells: [Cell, Cell, Cell, Cell, Cell]; // OPRD, OSP, Governor, DOJ, DAS
}

const INSTITUTIONS = [
    "Oregon Parks and Recreation",
    "Oregon State Police",
    "Office of the Governor",
    "Department of Justice",
    "Administrative Services",
];

const MOVES: Move[] = [
    {
        id: "silence",
        move: "Silence to the address you gave",
        arrives: "Nothing arrives.",
        cells: [
            { text: "Eighty-five days without a word after the August 22, 2025 request.", ulid: "01KA45NDXG8VA4XB2YG7M8G0F5", thread: "oprd" },
            { text: "The April 2, 2026 preservation notice, never acknowledged; three months of nothing after April 14.", ulid: "01KN9Z85WRSKY8YYBJB8C5H0ZN", thread: "osp" },
            { text: "Thirteen letters from November 18, 2025 to September 3, 2026, none answered.", ulid: "01KACE2348G8VG3XPB3BGW3F1N", thread: "governor" },
            { text: "Two letters to the analyst who wrote she was documenting me, unanswered.", ulid: "01M30EACB8FXZB4SQ3TA1ED1N3", thread: "osp" },
            { text: "The request to describe the search behind the no-records answer, never answered.", ulid: "01KX6NGF001WN65P3N29Z0EBY5", thread: "das" },
        ],
    },
    {
        id: "elsewhere",
        move: "The answer goes somewhere you are not",
        arrives: "A portal. A form. A link. An address to mail a check to.",
        cells: [
            { text: "The August 29, 2025 answer posted to a portal I had no access to and was never told existed.", ulid: "01KAHTQ0ZG656XCF1G2Q9X15KY", thread: "oprd" },
            { text: "A statement of indigence answered with a form to print, complete by hand, sign, and mail.", ulid: "01KP69QF9G4R2E53N9EZMQCXEM", thread: "osp" },
            { text: "Payment instructions asked for twice before they were sent.", ulid: "01M3AJNQ0RYYQSV41172KZJYDZ", thread: "governor" },
            { text: "“Please issue a check or money order”; “we do not accept credit cards or digital/electronic forms of payment.”", ulid: "01M50S7NEG8CQV2R6TF6Y6BKXZ", thread: "doj" },
            { text: "“Not the custodian”; referred to OPRD for the institution's own correspondence.", ulid: "01KWWCTCW09VNDMKKGABWBSKHT", thread: "das" },
        ],
    },
    {
        id: "no-records",
        move: "No records",
        arrives: "“The Department has conducted a search which identified no records responsive to your request.”",
        cells: [
            { text: "“This is not a record we have,” of a version log, on the page that agrees to produce the version history of the same file.", ulid: "01M2VEFTARQHQW029628GQA1Y7", thread: "oprd" },
            { text: "April 3, 2026: no records. September 3, 2026: sixteen files.", ulid: "01KNAV7K70M1CKA57ZJW6M6X1R", thread: "osp" },
            null,
            null,
            { text: "July 10 and July 27, 2026: “reviewed its files” and found none. The Department of Justice counts 1,350.", ulid: "01KYJXBM38DF8Q0GJ3KSKXGKXK", thread: "das" },
        ],
    },
    {
        id: "price",
        move: "The price",
        arrives: "An estimate in hours, at a rate, payable before any work begins.",
        cells: [
            { text: "Forty to eighty hours per category in 2025; $1,600 to $1,728 for two officials' own notes in 2026.", ulid: "01M2VE25T0WZXS6PE4BXJK0693", thread: "oprd" },
            { text: "$12.50 by check for one record; $157.50 for the file; $16,315 for a form letter.", ulid: "01KZS0AEV8KA95QQZVJBCKBQEM", thread: "osp" },
            { text: "$572.50.", ulid: "01M35TPA3RXRP0HY3NM9JHDJ8F", thread: "governor" },
            { text: "$599 for 1,350 records: thirteen hours of managerial time and one of paralegal time.", ulid: "01M50S7NEG8CQV2R6TF6Y6BKXZ", thread: "doj" },
            null,
        ],
    },
    {
        id: "waiver",
        move: "The waiver",
        arrives: "“Personal, rather than a public interest.” Or nothing at all.",
        cells: [
            { text: "Requested April 14 and September 5, 2026. Neither granted, denied, nor mentioned in any estimate since.", ulid: "01M2VE25T0WZXS6PE4BXJK0693", thread: "oprd" },
            { text: "Requested April 3, April 13, and July 29, 2026. Never answered on the public interest.", ulid: "01KYR9AFWRGCR1B546XC2YK3EP", thread: "osp" },
            { text: "Denied, one sentence on each factor; on whether the records are already public, no reason at all. A reduction never mentioned.", ulid: "01M35TPA3RXRP0HY3NM9JHDJ8F", thread: "governor" },
            { text: "Denied, naming no factor: “pertain primarily to you and your private interests.” A reduction never mentioned.", ulid: "01M50S7NEG8CQV2R6TF6Y6BKXZ", thread: "doj" },
            null,
        ],
    },
    {
        id: "exemption",
        move: "The exemption, with its condition cut out",
        arrives: "A subsection of ORS 192.345 quoted without “unless the public interest requires disclosure in the particular instance.”",
        cells: [
            null,
            { text: "ORS 192.345(40) quoted three times, April 13, August 11, and September 28, 2026, each time without the clause.", ulid: "01M3MJAZY0G31KFSSTRM6QBCNH", thread: "osp" },
            null,
            null,
            null,
        ],
    },
    {
        id: "narrow",
        move: "Narrow it",
        arrives: "“Very broad in scope.” An invitation to narrow that names no category.",
        cells: [
            { text: "A telephone call six days after the request, asking me to narrow it. I asked for everything in writing. Eighty-five days of silence followed.", ulid: "01K399TM7GG3FNAXSR4BX9TB1X", thread: "oprd" },
            null,
            null,
            { text: "“Very broad in scope.” Asked which of nine categories carry the burden: no answer in three letters.", ulid: "01M3APMQF8Z8NRH088RB9N765Z", thread: "doj" },
            null,
        ],
    },
    {
        id: "jurisdiction",
        move: "The jurisdiction",
        arrives: "“We lack jurisdiction to consider your appeal and must respectfully dismiss your petition.”",
        cells: [
            null,
            null,
            { text: "Two petitions dismissed, citing ORS 192.427 and a sentence copied from a 2014 order, where no record had been denied.", ulid: "01M3WAH79RY4KVVHRYVY9T726S", thread: "governor" },
            { text: "The office that wrote both dismissals.", ulid: "01M3AW7K3GZCPA4CD5YQ0FR2R6", thread: "governor" },
            { text: "“Not the custodian of the requested records,” of its own correspondence.", ulid: "01KWWCTCW09VNDMKKGABWBSKHT", thread: "das" },
        ],
    },
    {
        id: "question",
        move: "The question, never answered",
        arrives: "A status update that answers nothing.",
        cells: [
            { text: "The basis of its hours, asked September 18 and 26, 2026.", ulid: "01M2VF2JXGC49DZZZDFKKMXS2J", thread: "oprd" },
            { text: "Five questions on the April 3 search; seven letters in July. None answered.", ulid: "01KNAYFS6GDSY2F2K0AXZKAJ46", thread: "osp" },
            { text: "Thirteen letters.", ulid: "01KACE2348G8VG3XPB3BGW3F1N", thread: "governor" },
            { text: "Which categories carry the burden; how one person's file becomes very broad. “It appears that we need additional time.”", ulid: "01M4XTMS38EGWH974M4GQDDG2X", thread: "doj" },
            { text: "What search produced “no records.”", ulid: "01KX6NGF001WN65P3N29Z0EBY5", thread: "das" },
        ],
    },
];

export default function Playbook() {
    return (
        <div className="mt-6 space-y-5">
            {MOVES.map((m, i) => (
                <section
                    key={m.id}
                    id={`move-${m.id}`}
                    className="-mx-4 scroll-mt-24 border-y border-slate-200 bg-white sm:mx-0 sm:rounded-xl sm:border"
                >
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 border-b border-slate-100 px-4 py-3">
                        <span className="font-mono text-[11px] font-bold text-teal-700">{String(i + 1).padStart(2, "0")}</span>
                        <h3 className="font-bold text-gray-900">{m.move}</h3>
                        <span className="text-[14px] text-slate-600">{m.arrives}</span>
                    </div>
                    <div className="grid grid-cols-1 gap-px bg-slate-100 sm:grid-cols-2 lg:grid-cols-5">
                        {m.cells.map((c, j) => (
                            <div key={j} className={`bg-white px-4 py-3 ${c ? "" : "bg-slate-50"}`}>
                                <div className="text-[11px] font-bold uppercase tracking-widest text-slate-500">
                                    {INSTITUTIONS[j]}
                                </div>
                                {c ? (
                                    <p className="mt-1 text-[14px] leading-snug text-gray-800">
                                        <Cite ulid={c.ulid} thread={c.thread} subtle>
                                            {c.text}
                                        </Cite>
                                    </p>
                                ) : (
                                    <p className="mt-1 text-[13px] text-slate-300">&mdash;</p>
                                )}
                            </div>
                        ))}
                    </div>
                </section>
            ))}
        </div>
    );
}

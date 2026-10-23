// components/map/Operation.tsx
//
// How the state operates, drawn from the register. Roles, not people, in the
// node labels; the quoted words are theirs, from the document cited on the
// node. Three diagrams: how a letter becomes a police file, how a records
// request ends, and the seats one department holds.
import Cite, { type RegisterSlug } from "@/components/Cite";

const PRODUCTION = "01M1M4WF78XJPEJJ48D1JZ4SJ8";

interface Node {
    role: string;
    act: string;
    words?: string;
    ulid: string;
    thread: RegisterSlug;
}

function Box({ n, tone = "slate" }: { n: Node; tone?: "slate" | "rose" | "amber" }) {
    const border = tone === "rose" ? "border-rose-300" : tone === "amber" ? "border-amber-300" : "border-slate-300";
    return (
        <div className={`border-b ${border} bg-white px-4 py-2 text-[14px] leading-snug sm:rounded-lg sm:border sm:px-3`}>
            <div className="text-[11px] font-bold uppercase tracking-widest text-slate-500">{n.role}</div>
            <div className="mt-0.5 text-gray-900">
                <Cite ulid={n.ulid} thread={n.thread} subtle>{n.act}</Cite>
            </div>
            {n.words ? <div className="mt-1 text-slate-600">&ldquo;{n.words}&rdquo;</div> : null}
        </div>
    );
}

function Down() {
    return <div className="my-1 text-center font-mono text-slate-400" aria-hidden>&darr;</div>;
}

// ── 1. A letter becomes a police file ────────────────────────────────────────

const LETTER: Node[] = [
    { role: "The citizen", act: "writes to the agency about how its staff treated him, and to the Governor.", ulid: "01K3FDT5P09S9N9QSZYWS9KN7A", thread: "oprd" },
    { role: "The director", act: "replies that the concerns will be reviewed through channels she does not name.", words: "through the appropriate channels within the Department", ulid: "01K3HPAXBG8F4QZG4DJNDY5QY8", thread: "oprd" },
    { role: "The deputy director", act: "instructs him not to write to staff; legal correspondence goes to Department of Justice counsel.", ulid: "01KHFDVVV82TVEJPHPYAMAD3JH", thread: "oprd" },
    { role: "The agency's emergency manager", act: "sends a link to the archive to the state police press captain, copying the deputy director.", words: "sharing for situational awareness since he is now including the Governor as well as our Director", ulid: PRODUCTION, thread: "osp" },
    { role: "A sergeant", act: "passes the press captain’s request for a “threat assessment” to a detective.", words: "Capt. Kennedy is requesting that a threat assessment be conducted asap", ulid: PRODUCTION, thread: "osp" },
    { role: "The agency's emergency manager", act: "sends the detective the agency's own account: the dismissal letter and its Timeline of Events.", ulid: PRODUCTION, thread: "osp" },
    { role: "The fusion center analyst, Department of Justice", act: "writes that she is “documenting this activity.”", words: "Mr. White's actions border on harassment due to the volume of emails that he has forwarded to OPRD staff over the last year", ulid: PRODUCTION, thread: "osp" },
    { role: "The task force detective", act: "sends the name to the FBI from his FBI account; the driver's record and a report come back into the state file.", ulid: PRODUCTION, thread: "osp" },
    { role: "The federal agent", act: "delivers the schedule, the vehicles, and a hunting-app waypoint on the place he sleeps; the supervisor is told to say nothing.", words: "was told not to advise WHITE that FS LE was inquiring about his whereabouts", ulid: PRODUCTION, thread: "osp" },
    { role: "The case detective", act: "opens a dispatch event with the citizen as “Suspect.”", words: "concerning emails to former supervisors in parks department and publicly airing grievances", ulid: PRODUCTION, thread: "osp" },
    { role: "Three men with guns", act: "come through a locked federal gate to the door.", ulid: PRODUCTION, thread: "osp" },
    { role: "The case detective", act: "keeps the file.", words: "to be documented for information only at this time", ulid: PRODUCTION, thread: "osp" },
];

export function LetterToFile() {
    return (
        <figure className="-mx-4 mt-4 border-t border-slate-200 sm:mx-0 sm:border-0 md:grid md:grid-cols-2 md:gap-x-6">
            {LETTER.map((n, i) => (
                <div key={i}>
                    <div className="flex gap-3">
                        <span className="w-6 shrink-0 pt-2 font-mono text-[12px] font-bold text-rose-600">{i + 1}</span>
                        <div className="min-w-0 flex-1"><Box n={n} tone={i >= 3 ? "rose" : "slate"} /></div>
                    </div>
                    {i < LETTER.length - 1 ? <Down /> : null}
                </div>
            ))}
        </figure>
    );
}

// ── 2. How a records request ends ────────────────────────────────────────────

const ENDS: { stage: string; nodes: Node[] }[] = [
    {
        stage: "The request arrives at the coordinator",
        nodes: [
            { role: "Coordinator", act: "posts the answer to a portal the requester has no access to, then writes that he has not responded.", words: "OPRD has not received any response from you regarding whether you would like to refine the request", ulid: "01KAHTQ0ZG656XCF1G2Q9X15KY", thread: "oprd" },
            { role: "Coordinator", act: "calls the request very broad and invites narrowing; names no category.", words: "very broad in scope", ulid: "01M3APMQF8Z8NRH088RB9N765Z", thread: "doj" },
            { role: "Coordinator", act: "answers that no records exist.", words: "The Department has conducted a search which identified no records responsive to your request", ulid: "01KNAV7K70M1CKA57ZJW6M6X1R", thread: "osp" },
            { role: "Coordinator", act: "answers that the agency is not the custodian of its own correspondence.", words: "not the custodian of the requested records", ulid: "01KWWCTCW09VNDMKKGABWBSKHT", thread: "das" },
        ],
    },
    {
        stage: "The price",
        nodes: [
            { role: "Coordinator", act: "prices the request in hours at a rate, payable before any work.", words: "a minimum of forty hours or more", ulid: "01KAHTQ0ZG656XCF1G2Q9X15KY", thread: "oprd" },
            { role: "Coordinator", act: "prices a form letter and its uses at $16,315.", ulid: "01KZS0AEV8KA95QQZVJBCKBQEM", thread: "osp" },
            { role: "Public records attorney", act: "prices 1,350 records at $599, by check or money order.", words: "we do not accept credit cards or digital/electronic forms of payment", ulid: "01M50S7NEG8CQV2R6TF6Y6BKXZ", thread: "doj" },
        ],
    },
    {
        stage: "The waiver",
        nodes: [
            { role: "Coordinator", act: "answers a statement of indigence with a form to print, sign, and mail.", ulid: "01KP69QF9G4R2E53N9EZMQCXEM", thread: "osp" },
            { role: "Coordinator", act: "sends estimates that neither grant, deny, nor mention the waiver.", ulid: "01M2VE25T0WZXS6PE4BXJK0693", thread: "oprd" },
            { role: "Government accountability attorney", act: "denies the waiver, one sentence on each factor; never mentions a reduction.", words: "a personal, rather than a public interest", ulid: "01M35TPA3RXRP0HY3NM9JHDJ8F", thread: "governor" },
            { role: "Public records attorney", act: "denies the waiver naming no factor; never mentions a reduction.", words: "pertain primarily to you and your private interests", ulid: "01M50S7NEG8CQV2R6TF6Y6BKXZ", thread: "doj" },
        ],
    },
    {
        stage: "The exemption",
        nodes: [
            { role: "Coordinator", act: "quotes ORS 192.345(40) three times without its condition.", words: "unless the public interest requires disclosure in the particular instance", ulid: "01M3MJAZY0G31KFSSTRM6QBCNH", thread: "osp" },
            { role: "Coordinator", act: "withholds the “OSP Hasty Form Robert White,” citing ORS 192.345(23), and his own DMV record from him, citing ORS 192.355(9).", ulid: "01M3MJAZY0G31KFSSTRM6QBCNH", thread: "osp" },
        ],
    },
    {
        stage: "The appeal",
        nodes: [
            { role: "Deputy Attorney General", act: "dismisses a petition against the Governor's office where no record was denied.", words: "we lack jurisdiction to consider your appeal and must respectfully dismiss your petition", ulid: "01M3AW7K3GZCPA4CD5YQ0FR2R6", thread: "governor" },
            { role: "Deputy Attorney General", act: "dismisses the second petition citing a 2014 order; the words are in no statute.", words: "the authority to review decisions made by elected officials", ulid: "01M3WAH79RY4KVVHRYVY9T726S", thread: "governor" },
            { role: "Public Records Advocate", act: "cannot compel.", words: "does not have the authority to compel the governor's office to take action", ulid: "01M4VG3NVGMSVPH7TCES6W2SW8", thread: "governor" },
            { role: "The Governor's office", act: "answers none of thirteen letters.", ulid: "01KACE2348G8VG3XPB3BGW3F1N", thread: "governor" },
        ],
    },
    {
        stage: "The question",
        nodes: [
            { role: "Coordinator", act: "sends a status update.", words: "It appears that we need additional time to process your request", ulid: "01M4XTMS38EGWH974M4GQDDG2X", thread: "doj" },
            { role: "Every public records officer in the record", act: "answers no question put to them: the basis of the hours, the search performed, the categories that carry the burden.", ulid: "01M4Y4FN8RB5FDFQ1KSDG1E7Z9", thread: "governor" },
        ],
    },
];

export function RequestEnds() {
    return (
        <figure className="mt-4 space-y-2">
            {ENDS.map((s, i) => (
                <div key={s.stage}>
                    <div className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">
                        <div className="text-[12px] font-bold uppercase tracking-widest text-slate-600">{s.stage}</div>
                        <div className="mt-2 grid grid-cols-1 gap-2 md:grid-cols-2">
                            {s.nodes.map((n, j) => <Box key={j} n={n} tone="amber" />)}
                        </div>
                    </div>
                    {i < ENDS.length - 1 ? <Down /> : null}
                </div>
            ))}
        </figure>
    );
}

// ── 3. One department ────────────────────────────────────────────────────────

const SEATS: Node[] = [
    { role: "Counsel to the agency", act: "The agency's deputy director routes the citizen's legal correspondence to Department of Justice counsel.", ulid: "01KHFDVVV82TVEJPHPYAMAD3JH", thread: "oprd" },
    { role: "Counsel to the state police", act: "The state police withhold the department's advice to them, citing ORS 40.225(2), “which covers attorney client privilege.”", ulid: "01KZS0AEV8KA95QQZVJBCKBQEM", thread: "osp" },
    { role: "The fusion center", act: "Its analyst writes that she is “documenting this activity.”", words: "border on harassment", ulid: PRODUCTION, thread: "osp" },
    { role: "Judge of petitions", act: "Its Deputy Attorney General dismisses both petitions against the Governor's office.", words: "we lack jurisdiction", ulid: "01M3WAH79RY4KVVHRYVY9T726S", thread: "governor" },
    { role: "Custodian of the file", act: "Its public records attorney counts 1,350 records on the citizen, denies the waiver, and prices them at $599.", ulid: "01M50S7NEG8CQV2R6TF6Y6BKXZ", thread: "doj" },
];

export function OneDepartment() {
    return (
        <figure className="-mx-4 mt-4 border-y border-slate-300 bg-white p-3 sm:mx-0 sm:rounded-xl sm:border">
            <div className="text-center font-mono text-[11px] font-bold uppercase tracking-widest text-slate-700">Oregon Department of Justice</div>
            <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-5">
                {SEATS.map((n, i) => <Box key={i} n={n} tone="rose" />)}
            </div>
        </figure>
    );
}

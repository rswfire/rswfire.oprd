// components/map/moves.tsx
//
// The moves. Each is one screen of The Map: the words it arrives in, the
// institutions that sent it, what the documents show was behind it, and what
// came next in this record. Every line cites the document it rests on.
import type { ReactNode } from "react";
import Cite from "@/components/Cite";
import type { RegisterSlug } from "@/components/Cite";
import { Spread, Silence, Prices, Counts, Waiver } from "@/components/systembackup/Figures";
import { LetterToFile, OneDepartment } from "@/components/systembackup/Operation";

const PRODUCTION = "01M1M4WF78XJPEJJ48D1JZ4SJ8";

export interface Sender {
    who: string;
    said: string; // their words, or the act, from the cited document
    ulid: string;
    thread: RegisterSlug;
}

export interface Move {
    id: string;
    label: string;     // short name, in their words
    arrives: string;   // their exact words, the sentence a reader is holding
    senders: Sender[];
    behind: ReactNode; // what the documents show
    next: ReactNode;   // what came next in this record
    figure?: ReactNode;
}

const C = ({ u, t = "oprd", children }: { u: string; t?: RegisterSlug; children: ReactNode }) => (
    <Cite ulid={u} thread={t}>{children}</Cite>
);

export const MOVES: Move[] = [
    {
        id: "channels",
        label: "They route the complaint to the people it is about",
        arrives: "“through the appropriate channels within the Department”",
        senders: [
            { who: "The Director, OPRD", said: "concerns would be reviewed “through the appropriate channels within the Department”", ulid: "01K3HPAXBG8F4QZG4DJNDY5QY8", thread: "oprd" },
            { who: "The Deputy Director, OPRD", said: "do not write to staff; legal correspondence goes to Department of Justice counsel", ulid: "01KHFDVVV82TVEJPHPYAMAD3JH", thread: "oprd" },
        ],
        behind: (
            <>
                No channel, person, standard, or result was ever named. Three and a half months later the Director{" "}
                <C u="01KBZ9S95G2W5B44TTGT6HA69N">closed the correspondence</C> with a letter that called it
                &ldquo;deeply painful&rdquo; and said nothing about the five protections asked for.
            </>
        ),
        next: (
            <>
                The archive went to the police. On March 3, 2026, the agency&rsquo;s emergency manager{" "}
                <C u={PRODUCTION} t="osp">sent a link to it to the state police press captain</C>: &ldquo;sharing for
                situational awareness since he is now including the Governor as well as our Director.&rdquo;
            </>
        ),
    },
    {
        id: "silence",
        label: "They do not answer",
        arrives: "Thirteen letters to the Governor. No reply.",
        senders: [
            { who: "Office of the Governor", said: "thirteen letters, November 18, 2025 to September 3, 2026; none answered", ulid: "01KACE2348G8VG3XPB3BGW3F1N", thread: "governor" },
            { who: "OPRD", said: "eighty-five days without a word after the August 22, 2025 request", ulid: "01KA45NDXG8VA4XB2YG7M8G0F5", thread: "oprd" },
            { who: "Oregon State Police", said: "the preservation notice of April 2, 2026, never acknowledged; three months of nothing after April 14", ulid: "01KN9Z85WRSKY8YYBJB8C5H0ZN", thread: "osp" },
            { who: "Department of Justice", said: "the fusion center analyst, asked what she documented; no answer", ulid: "01M30EACB8FXZB4SQ3TA1ED1N3", thread: "osp" },
            { who: "Administrative Services", said: "what search produced “no records”; no answer", ulid: "01KX6NGF001WN65P3N29Z0EBY5", thread: "das" },
        ],
        behind: (
            <>
                Silence is a decision. OPRD&rsquo;s eighty-five days were not empty: its answer had been{" "}
                <C u="01KAHTQ0ZG656XCF1G2Q9X15KY">posted on August 29 to a portal</C> the requester was never told
                existed, and the letter that revealed it said he was the one who had not responded. The Governor&rsquo;s
                office, silent to thirteen letters, was receiving them: an OPRD emergency manager sent them to the police{" "}
                <C u={PRODUCTION} t="osp">because they now included the Governor</C>.
            </>
        ),
        next: (
            <>
                A notice, then a records request, then a petition. The first message ever back from the Governor&rsquo;s
                office{" "}
                <C u="01M2130110ZFY7MYKJHFN7X6RA" t="governor">acknowledged a public records request</C>, 294 days
                after the first letter.
            </>
        ),
        figure: <Silence />,
    },
    {
        id: "police",
        label: "They send the police",
        arrives: "Three men with guns at the door, over letters.",
        senders: [
            { who: "OPRD emergency manager → OSP press captain", said: "“sharing for situational awareness since he is now including the Governor as well as our Director”", ulid: PRODUCTION, thread: "osp" },
            { who: "OSP sergeant, for the press captain", said: "“Capt. Kennedy is requesting that a threat assessment be conducted asap”", ulid: PRODUCTION, thread: "osp" },
            { who: "DOJ fusion center analyst", said: "“Mr. White’s actions border on harassment due to the volume of emails”", ulid: PRODUCTION, thread: "osp" },
            { who: "OSP case detective", said: "“Suspect”: “concerning emails to former supervisors in parks department and publicly airing grievances”", ulid: PRODUCTION, thread: "osp" },
            { who: "Forest Service special agent", said: "a hunting-app waypoint on where he sleeps; the supervisor “was told not to advise WHITE that FS LE was inquiring about his whereabouts”", ulid: PRODUCTION, thread: "osp" },
        ],
        behind: (
            <>
                No crime was alleged and no threat was quoted at any step. The detective who reviewed the archive wrote
                on day one: &ldquo;Based on the website nothing is standing out to me more than what Parks and Rec sent
                you.&rdquo; The file was built from the agency&rsquo;s own account of itself: the dismissal letter and its{" "}
                <C u="01M29ZRKJ8KB38SPR38V64HH2C">Timeline of Events</C>. Three men with guns came through a locked federal
                gate one year to the day after the dismissal. The file stays: &ldquo;documented for information only.&rdquo;
            </>
        ),
        next: (
            <>
                A preservation notice and a records request to the state police, nine days later. The state police{" "}
                <C u="01KNAV7K70M1CKA57ZJW6M6X1R" t="osp">answered that no records existed</C>.
            </>
        ),
        figure: (
            <>
                <Spread />
                <div className="mt-6"><LetterToFile /></div>
            </>
        ),
    },
    {
        id: "no-records",
        label: "They say no records exist while holding them",
        arrives: "“The Department has conducted a search which identified no records responsive to your request.”",
        senders: [
            { who: "Oregon State Police", said: "April 3, 2026: no records. April 13: one record, $12.50. September 3: sixteen files.", ulid: "01KNAV7K70M1CKA57ZJW6M6X1R", thread: "osp" },
            { who: "Administrative Services", said: "July 10 and July 27, 2026: “reviewed its files”; no records", ulid: "01KYJXBM38DF8Q0GJ3KSKXGKXK", thread: "das" },
            { who: "OPRD", said: "“This is not a record we have,” of a version log, on the page that agrees to produce the version history of the same file", ulid: "01M2VEFTARQHQW029628GQA1Y7", thread: "oprd" },
            { who: "Department of Justice", said: "1,350 potentially responsive records", ulid: "01M50S7NEG8CQV2R6TF6Y6BKXZ", thread: "doj" },
        ],
        behind: (
            <>
                The records existed. The state police held the whole file on the day it wrote &ldquo;no records&rdquo;; the
                reversal came{" "}
                <C u="01KYJM548RW64XYRSCMJM9F6T9" t="osp">five days after a petition to the Attorney General</C>:
                &ldquo;additional records, not in our system at the time of the original request.&rdquo; Five questions
                about the search, asked an hour after the no-records answer,{" "}
                <C u="01KNAYFS6GDSY2F2K0AXZKAJ46" t="osp">were never answered</C>. Administrative Services found nothing; the
                Department of Justice found 1,350.
            </>
        ),
        next: (
            <>
                A fee. The records that did not exist were{" "}
                <C u="01KZS0AAY88AYPJ32PDEZABW03" t="osp">priced at $157.50</C>, and four of them withheld.
            </>
        ),
        figure: <Counts />,
    },
    {
        id: "price",
        label: "They price the records before answering any question",
        arrives: "“Please issue a check or money order in the amount above.”",
        senders: [
            { who: "Oregon State Police", said: "$16,315 for a form letter, its versions, and the letters issued on it", ulid: "01KZS0AEV8KA95QQZVJBCKBQEM", thread: "osp" },
            { who: "OPRD", said: "$1,600 to $1,728 for two officials’ own notes and calendar entries; forty to eighty hours per category the year before", ulid: "01M2VE25T0WZXS6PE4BXJK0693", thread: "oprd" },
            { who: "Department of Justice", said: "$599 for 1,350 records; “we do not accept credit cards or digital/electronic forms of payment”", ulid: "01M50S7NEG8CQV2R6TF6Y6BKXZ", thread: "doj" },
            { who: "Office of the Governor", said: "$572.50", ulid: "01M35TPA3RXRP0HY3NM9JHDJ8F", thread: "governor" },
        ],
        behind: (
            <>
                The price is set before the request is narrowed, before the waiver is decided, and before any question
                about the hours is answered. OPRD was asked{" "}
                <C u="01M2VF2JXGC49DZZZDFKKMXS2J">the basis of its hours</C> and has not written since. The Department of
                Justice was asked which of nine categories carry the burden and{" "}
                <C u="01M4XTMS38EGWH974M4GQDDG2X" t="doj">answered with a status update</C>. Payment is by mailed
                check; the state police{" "}
                <C u="01M17CQRV0SHYB8VS0NYPP06B0" t="osp">did not sign for the check</C> during its posted hours.
            </>
        ),
        next: (
            <>
                A fee waiver request under ORS 192.324(5), to each of them.
            </>
        ),
        figure: <Prices />,
    },
    {
        id: "waiver",
        label: "They call the request personal",
        arrives: "“The requester has demonstrated that this request relates to a personal, rather than a public interest.”",
        senders: [
            { who: "Office of the Governor", said: "denied, one sentence on each factor, one with no reason; “merely stated that he can post it on a website”; a reduction never mentioned", ulid: "01M35TPA3RXRP0HY3NM9JHDJ8F", thread: "governor" },
            { who: "Department of Justice", said: "denied, naming no factor: “pertain primarily to you and your private interests”; a reduction never mentioned", ulid: "01M50S7NEG8CQV2R6TF6Y6BKXZ", thread: "doj" },
            { who: "OPRD", said: "requested twice; neither granted, denied, nor mentioned in any estimate", ulid: "01M2VE25T0WZXS6PE4BXJK0693", thread: "oprd" },
            { who: "Oregon State Police", said: "a statement of indigence answered with a form to print, sign, and mail; never answered on the public interest", ulid: "01KP69QF9G4R2E53N9EZMQCXEM", thread: "osp" },
        ],
        behind: (
            <>
                The records are a police file built on letters to the Governor, a fusion center entry calling them
                &ldquo;harassment,&rdquo; and a waypoint on where a citizen sleeps. Personal, or private, is the word each denial
                uses for them. The statute provides for a waiver or a substantially reduced fee; no denial in this
                record considers a reduction. The website that &ldquo;merely&rdquo; posts the records{" "}
                <C u={PRODUCTION} t="osp">published the state police production in full the day it arrived</C>.
            </>
        ),
        next: (
            <>
                A petition to the Attorney General, which{" "}
                <C u="01M3AW7K3GZCPA4CD5YQ0FR2R6" t="governor">the Attorney General&rsquo;s office dismissed</C> the same
                afternoon.
            </>
        ),
        figure: <Waiver />,
    },
    {
        id: "exemption",
        label: "They cut the condition out of the exemption",
        arrives: "“Exempts audio or video recordings resulting from a law enforcement officer’s operation of a video camera worn upon the officer’s person”",
        senders: [
            { who: "Oregon State Police", said: "ORS 192.345(40), quoted April 13, August 11, and September 28, 2026, each time without “unless the public interest requires disclosure in the particular instance”", ulid: "01M3MJAZY0G31KFSSTRM6QBCNH", thread: "osp" },
            { who: "Oregon State Police", said: "the “OSP Hasty Form Robert White,” withheld, citing ORS 192.345(23)", ulid: "01M3MJAZY0G31KFSSTRM6QBCNH", thread: "osp" },
            { who: "Oregon State Police", said: "his own DMV record, withheld from him, citing ORS 192.355(9)", ulid: "01M3MJAZY0G31KFSSTRM6QBCNH", thread: "osp" },
        ],
        behind: (
            <>
                Every exemption in ORS 192.345 is conditional on the public interest. The condition was cut out of the
                statute three times. The recording is the account of what three officers did at a citizen&rsquo;s door, and
                the only member of the public in it is the requester, who{" "}
                <C u="01KYR9AFWRGCR1B546XC2YK3EP" t="osp">consented in writing to its release</C>. No one at the state
                police has answered on the public interest.
            </>
        ),
        next: (
            <>
                The four records remain withheld. A request for facilitated dispute resolution{" "}
                <C u="01M4Y4FN8RB5FDFQ1KSDG1E7Z9" t="governor">names them</C>.
            </>
        ),
    },
    {
        id: "jurisdiction",
        label: "They dismiss the petition on a jurisdiction the statute does not state",
        arrives: "“We lack jurisdiction to consider your appeal and must respectfully dismiss your petition.”",
        senders: [
            { who: "Deputy Attorney General", said: "September 24, 2026: dismissed, “records in the custody of the Governor, an elected official”", ulid: "01M3AW7K3GZCPA4CD5YQ0FR2R6", thread: "governor" },
            { who: "Deputy Attorney General", said: "October 1, 2026: dismissed, “the authority to review decisions made by elected officials. See ORS 192.427; Public Records Order, Oct 2, 2014, Sebens”", ulid: "01M3WAH79RY4KVVHRYVY9T726S", thread: "governor" },
            { who: "Administrative Services", said: "“not the custodian of the requested records”, of its own correspondence", ulid: "01KWWCTCW09VNDMKKGABWBSKHT", thread: "das" },
            { who: "Public Records Advocate", said: "“does not have the authority to compel the governor’s office to take action”", ulid: "01M4VG3NVGMSVPH7TCES6W2SW8", thread: "governor" },
        ],
        behind: (
            <>
                ORS 192.427 applies where a person is denied a record on an elected official&rsquo;s claim of right. No record
                was denied; the office priced the records and sent payment instructions. The words &ldquo;decisions made
                by elected officials&rdquo; are in no statute; they are{" "}
                <C u="01M4GMP81G9Q9AMNA8N7FQXBHJ" t="governor">one paragraph of a 2014 order</C>. The office that wrote
                both dismissals is the Department of Justice, which is also counsel to the agency, counsel to the state
                police, the fusion center, and the custodian of the 1,350 records.
            </>
        ),
        next: (
            <>
                The Advocate, who cannot compel. The Legislature,{" "}
                <C u="01M4FM01H0EPTKZH5YPZQ8F0PD" t="outreach">asked for seven changes to how the law is applied</C>.
            </>
        ),
        figure: <OneDepartment />,
    },
];

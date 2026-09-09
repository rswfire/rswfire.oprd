// The records-request tracker: what each agency was asked for, what it
// claims it holds, what it is withholding and on what basis (a statute, a
// fee, or silence), and the process it took to get there. Every line here is
// grounded in a register entry; the register is the source of truth and
// this is the scoreboard.

export type WithheldBasis = "statute" | "fee" | "silence";

export interface WithheldItem {
    item: string;
    basis: WithheldBasis;
    detail: string; // the statute cited, the fee demanded, or what the silence looks like
}

export interface TimelineStep {
    d: string; // ISO date
    date: string; // display date
    event: string;
}

export interface Deadline {
    d: string; // ISO date
    date: string; // display date
    who: "me" | "them";
    what: string;
    recurs?: string; // e.g. "every six months"
}

export interface AgencyRequests {
    slug: string; // register thread for the "full record" link
    agency: string;
    refs: string; // request reference numbers
    status: string; // one line, operator's characterization
    asked: string[];
    claims: string[]; // what the agency has said it holds, in sequence
    withheld: WithheldItem[];
    deadlines: Deadline[];
    timeline: TimelineStep[];
}

export const RECORDS_REQUESTS: AgencyRequests[] = [
    {
        slug: "osp",
        agency: "Oregon State Police",
        refs: "PR27478 · PR36445",
        status: "Produced. Not sufficient.",
        asked: [
            "The full names, badge numbers, and unit assignments of the two officers present at the March 24, 2026 visit",
            "All communications, internal or external, related to the planning, authorization, or coordination of the visit, including with the U.S. Forest Service, OPRD, or any other agency",
            "All records identifying who initiated contact between Oregon State Police and any other agency in connection with the visit",
            "Any records referencing his name, his online archive, or oprdvolunteerabuse.org, in connection with the visit or any related matter",
            "Any incident reports, after-action documentation, or case files generated in connection with the visit",
            "July 19: the recorded communications for March 24 — dispatch audio, radio traffic among the responding units, and any mobile data terminal messaging between them",
            "July 29: any video or audio recording of event SP26097765 — the travel to the Siltcoos Work Center, the contact at the gate, the travel away from it, and any recording made by the occupants of either vehicle",
            "PR36445: the fee-and-exemption letter template, its versions, the instructions governing its use, and the letters issued on it",
        ],
        claims: [
            "April 3, 2026, same day as the request: “The Department has conducted a search which identified no records responsive to your request.”",
            "July 14, 2026: the CAD record for SP26097765, released in full, reviewed for exempt material “with none being identified.”",
            "July 23, 2026, by mail: a litigation hold on the records and evidence for SP26-097765, requiring reconfirmation every six months.",
            "August 11, 2026: records identified under PR27478 behind a fee of $157.50, and under PR36445 behind a fee of $16,315.",
            "September 3, 2026, after the fee was paid: sixteen files under both case numbers — the Major Crimes Section threat-assessment report SP26096984, both CAD records, dispatch audio, and the Department's electronic communications — with a $95.00 refund.",
        ],
        withheld: [
            {
                item: "The body-worn camera video of the March 24 contact",
                basis: "statute",
                detail: "ORS 192.345(40), cited to the Attorney General and never to him; the produced report confirms the recording exists: “please see attached BWC”",
            },
            {
                item: "“OSP Hasty Form Robert White.pdf” — the planning document for the visit, attached to the March 23 email arranging it",
                basis: "silence",
                detail: "Named in the production, not included; no disposition, no exemption cited",
            },
            {
                item: "“WHITE,ROBERT SAMUEL DMV.pdf” and “ReportRobertWhite.pdf”, attached to the March 13 emails",
                basis: "silence",
                detail: "Named in the production, not included; no disposition, no exemption cited",
            },
            {
                item: "Records of the telephone calls the produced emails arrange or reference: call logs from state-issued phones, and any notes, memoranda, or summaries of what was discussed",
                basis: "silence",
                detail: "The production shows the calls occurred; no disposition, no exemption cited",
            },
            {
                item: "Text messages among the involved personnel concerning him, the visit, or its planning",
                basis: "silence",
                detail: "“Shoot me a text or call Monday to confirm for Tuesday”; no disposition, no exemption cited",
            },
            {
                item: "Calendar and scheduling records for the March 24 visit",
                basis: "silence",
                detail: "No disposition, no exemption cited",
            },
            {
                item: "Complete copies of the messages produced with headers and no body",
                basis: "silence",
                detail: "No redaction markings; no exemption stated, and no statement that they are blank as held",
            },
            {
                item: "All remaining communications concerning him on OSP systems or held by OSP personnel, including task force communications and any TITAN Fusion Center traffic beyond the March 11 chain",
                basis: "silence",
                detail: "No disposition, no exemption cited",
            },
            {
                item: "Any other attachments to case files SP26096984 and SP26097765 not produced",
                basis: "silence",
                detail: "No disposition, no exemption cited",
            },
            {
                item: "The statement claimed to be a “veiled threat”: produced, quoted, or a written statement that none exists",
                basis: "silence",
                detail: "Demanded September 3; the Department's own report concludes he made no direct threats and committed no crimes",
            },
            {
                item: "PR36445: the fee-and-exemption letter template, its versions, the instructions governing its use, and the letters issued on it",
                basis: "fee",
                detail: "Records identified August 11, held behind a fee of $16,315",
            },
        ],
        deadlines: [
            {
                d: "2026-09-25",
                date: "September 25, 2026",
                who: "them",
                what: "Answer the September 3 letter: for each outstanding category, produce the record, cite the exemption, or state in writing that no records exist (ORS 192.329; fifteen business days)",
            },
            {
                d: "2027-01-23",
                date: "January 23, 2027",
                who: "me",
                what: "Reconfirm the litigation hold on SP26-097765 to risk@osp.oregon.gov, or the Department may presume the case resolved and release it",
                recurs: "every six months while the case is open",
            },
        ],
        timeline: [
            { d: "2026-04-02", date: "April 2, 2026", event: "Preservation notice and request sent; the Department's media address bounces; re-sent four minutes later" },
            { d: "2026-04-03", date: "April 3, 2026", event: "Re-filed on the Department's own form; closed the same day with “no records responsive”" },
            { d: "2026-04-13", date: "April 13, 2026", event: "Fee letter: $12.50, with the exemption template; a CAD record is printed internally the same day" },
            { d: "2026-07-14", date: "July 14, 2026", event: "The CAD record released in full, free, no exempt material identified" },
            { d: "2026-07-15", date: "July 15, 2026", event: "Letter restating the categories requested April 3 and never disposed of" },
            { d: "2026-07-23", date: "July 23, 2026", event: "Litigation hold confirmed by mail for SP26-097765" },
            { d: "2026-07-28", date: "July 28, 2026", event: "Attorney General petition acknowledged" },
            { d: "2026-07-29", date: "July 29, 2026", event: "Attorney General order issues; the order reveals ORS 192.345(40) was cited for body camera video, never cited to him" },
            { d: "2026-08-11", date: "August 11, 2026", event: "Records identified under both requests: $157.50 under PR27478, $16,315 under PR36445" },
            { d: "2026-09-03", date: "September 3, 2026", event: "Sixteen files produced under both case numbers; $95.00 refunded" },
            { d: "2026-09-03", date: "September 3, 2026", event: "The production reviewed and answered the same morning: not sufficient; ten categories stated as outstanding" },
        ],
    },
    {
        slug: "oprd",
        agency: "Oregon Parks & Recreation Department",
        refs: "Request of September 5, 2026",
        status: "Pending. No acknowledgment.",
        asked: [
            "All communications concerning him sent or received by Director Lisa Sumption, in any medium, on any device or account used for Department business",
            "The same for Deputy Director J.R. Collier, and all communications between the two of them concerning him",
            "All notes, memoranda, summaries, calendar entries, and handwritten notes authored by either concerning him",
            "Any record of a direction or instruction given by either concerning him, including any instruction on whether or how staff should respond to his correspondence",
            "February 1, 2025 to the present. Two custodians only, by design.",
        ],
        claims: [
            "Nothing. The Department has not acknowledged the request.",
            "September 8, 2026, through ODOT: “We confirmed with Lisa Sumption there were no communications on ODOT devices and that any communications responsive to your request were on OPRD devices” — which places them inside this request.",
        ],
        withheld: [
            {
                item: "Everything requested",
                basis: "silence",
                detail: "No acknowledgment yet; the five business days ORS 192.324 allows run through September 15",
            },
        ],
        deadlines: [
            {
                d: "2026-09-15",
                date: "September 15, 2026",
                who: "them",
                what: "Acknowledge the September 5 request: ORS 192.324 allows five business days",
            },
            {
                d: "2026-09-29",
                date: "September 29, 2026",
                who: "them",
                what: "Complete the request or provide a written estimated completion date: ORS 192.329(5), fifteen business days",
            },
        ],
        timeline: [
            { d: "2026-09-05", date: "September 5, 2026", event: "Request filed: two custodians, every medium, response-handling instructions included" },
            { d: "2026-09-08", date: "September 8, 2026", event: "ODOT, after confirming with the Director personally: responsive communications live on OPRD devices" },
            { d: "2026-09-08", date: "September 8, 2026", event: "The ODOT statement forwarded to the Director for the record: undisputed, it stands as accurate" },
        ],
    },
    {
        slug: "governor",
        agency: "Office of the Governor",
        refs: "Request of September 5, 2026",
        status: "Gathering records.",
        asked: [
            "All records concerning him held by the office, in any division or function",
            "The routing and disposition of every letter he sent: tracking entries, assignment records, and any record of a decision not to respond",
            "Internal briefings, memoranda, and talking points prepared about him, and who prepared them for whom",
            "All communications with OPRD, OSP, DOJ, DAS, or any other agency concerning him",
            "Any record that the Governor was personally informed, any direction given by her or her staff, and every meeting or briefing at which he was discussed",
            "Recurring briefing documents in which he or the archive appears; campaign-adjacent communications on state systems; responsive records held in personal accounts or devices",
            "Any record disclosing his personal information to any person or agency; all records concerning the archive, his requests, claim P195403, or the legal fund",
        ],
        claims: [
            "September 8, 2026: the office will begin gathering responsive records “to the extent records exist,” with the Government Accountability Attorney as point of contact.",
        ],
        withheld: [],
        deadlines: [
            {
                d: "2026-09-29",
                date: "September 29, 2026",
                who: "them",
                what: "Complete the request or provide a written estimated completion date: ORS 192.329(5), fifteen business days from the September 8 acknowledgment",
            },
        ],
        timeline: [
            { d: "2026-09-05", date: "September 5, 2026", event: "Request filed, native format, fee waiver on public-interest grounds, litigation hold noted under claim P195403" },
            { d: "2026-09-08", date: "September 8, 2026", event: "The office responds: gathering records; Cameron Miles, Government Accountability Attorney, copied as contact" },
        ],
    },
];

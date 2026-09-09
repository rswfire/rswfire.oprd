// The records-request tracker: what each agency was asked for, what it
// claims it holds, what it is withholding and on what basis (a statute, or
// silence), and the process it took to get there. Every line here is
// grounded in a register entry; the register is the source of truth and
// this is the scoreboard.

export type WithheldBasis = "statute" | "silence";

export interface WithheldItem {
    item: string;
    basis: WithheldBasis;
    detail: string; // the statute cited, or what the silence looks like
}

export interface TimelineStep {
    d: string; // ISO date
    date: string; // display date
    event: string;
}

export interface AgencyRequests {
    slug: string; // register thread for the "full record" link
    agency: string;
    refs: string; // request reference numbers
    status: string; // one line, operator's characterization
    asked: string[];
    claims: string[]; // what the agency has said it holds, in sequence
    withheld: WithheldItem[];
    timeline: TimelineStep[];
}

export const RECORDS_REQUESTS: AgencyRequests[] = [
    {
        slug: "osp",
        agency: "Oregon State Police",
        refs: "PR27478 · PR36445",
        status: "Produced, four categories short.",
        asked: [
            "Names, badge numbers, and unit assignments of every officer present at the March 24, 2026 visit",
            "All communications planning, authorizing, or coordinating the visit",
            "All communications referencing his name, his online activity, or oprdvolunteerabuse.org",
            "Any incident reports, case files, or after-action documentation",
            "All communications with USFS Special Agent Matthew Oliver or any OPRD employee about the visit",
            "Any recording of the contact, the travel in both directions, and both vehicles",
            "PR36445: the fee-and-exemption letter template, its versions, the instructions governing its use, and the letters issued on it",
        ],
        claims: [
            "April 3, 2026, same day as the request: “The Department has conducted a search which identified no records responsive to your request.”",
            "July 14, 2026: the CAD record for SP26097765, released in full, reviewed for exempt material “with none being identified.”",
            "September 3, 2026, after the fee and an Attorney General order: sixteen files under both case numbers, including the Major Crimes threat-assessment report SP26096984 with attachments, both CAD records, dispatch audio, and the electronic communications chain.",
            "July 23, 2026, by mail: a litigation hold on the records and evidence for SP26-097765, requiring reconfirmation every six months.",
        ],
        withheld: [
            {
                item: "Body camera video of the visit",
                basis: "statute",
                detail: "ORS 192.345(40), asserted through the fee letter without identifying a recording",
            },
            {
                item: "Officer identities beyond the one unit named in the CAD; two officers were at the door",
                basis: "silence",
                detail: "No disposition and no exemption cited, as ORS 192.329(2) requires",
            },
            {
                item: "The communication that conveyed his name, date of birth, and location to dispatch, and the March 24 radio and telephone traffic",
                basis: "silence",
                detail: "No disposition and no exemption cited",
            },
            {
                item: "Communications referencing his name or the archive, beyond those produced",
                basis: "silence",
                detail: "No disposition and no exemption cited",
            },
            {
                item: "Incident reports, case files, or after-action documentation",
                basis: "silence",
                detail: "No disposition and no exemption cited",
            },
        ],
        timeline: [
            { d: "2026-04-02", date: "April 2, 2026", event: "Preservation notice and request sent; the Department's media address bounces; re-sent four minutes later" },
            { d: "2026-04-03", date: "April 3, 2026", event: "Re-filed on the Department's own form; closed the same day with “no records responsive”" },
            { d: "2026-04-13", date: "April 13, 2026", event: "Fee letter: $157.50, with the exemption template; a CAD record is printed internally the same day" },
            { d: "2026-04-14", date: "April 14, 2026", event: "The CAD record released in full, free, no exempt material identified" },
            { d: "2026-07-14", date: "July 14, 2026", event: "Production follow-up and first questions on the released record" },
            { d: "2026-07-15", date: "July 15, 2026", event: "Letter restating the categories requested April 3 and never disposed of" },
            { d: "2026-07-23", date: "July 23, 2026", event: "Litigation hold confirmed by mail for SP26-097765" },
            { d: "2026-07-28", date: "July 28, 2026", event: "Attorney General petition acknowledged" },
            { d: "2026-07-29", date: "July 29, 2026", event: "Attorney General order issues; the fee is later refunded" },
            { d: "2026-09-03", date: "September 3, 2026", event: "Sixteen files produced under both case numbers" },
        ],
    },
    {
        slug: "oprd",
        agency: "Oregon Parks & Recreation Department",
        refs: "Request of September 5, 2026",
        status: "Pending. No acknowledgment.",
        asked: [
            "Every communication, note, calendar entry, and instruction concerning him sent or received by Director Sumption and Deputy Director Collier",
            "February 1, 2025 to the present, in any medium and on any device used for Department business",
            "Including any instruction on whether or how staff should respond to his correspondence",
        ],
        claims: [
            "Nothing. The Department has not acknowledged the request.",
            "September 8, 2026, through ODOT: the Director personally confirmed that any communications responsive to the ODOT request were on OPRD devices, which places them inside this request.",
        ],
        withheld: [
            {
                item: "Everything requested",
                basis: "silence",
                detail: "No acknowledgment since September 5; ORS 192.324 requires acknowledgment within five business days",
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
            "Thirteen numbered categories covering everything the office holds",
            "Constituent tracking and routing records for every letter sent to the office",
            "Internal briefings, memoranda, and talking points about him or his correspondence",
            "Communications with OPRD, OSP, DOJ, and DAS concerning him",
            "Records of the Governor being personally informed",
            "Campaign-adjacent communications on state systems, and records in personal accounts",
        ],
        claims: [
            "September 8, 2026: the office will begin gathering responsive records “to the extent records exist,” with the Government Accountability Attorney as point of contact.",
        ],
        withheld: [],
        timeline: [
            { d: "2026-09-05", date: "September 5, 2026", event: "Request filed, native format, fee waiver on public-interest grounds, litigation hold noted under claim P195403" },
            { d: "2026-09-08", date: "September 8, 2026", event: "The office responds: gathering records; Cameron Miles, Government Accountability Attorney, copied as contact" },
        ],
    },
];

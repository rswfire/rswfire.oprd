// The tracker: one records request to every state agency the State of Oregon
// lists in its own directory, asking for its emails with the Oregon State
// Police Government and Media Relations section. The agency list is the
// state's (stateAgencies.json, from oregon.gov); this file holds only what
// has happened to each request. Every step links to its register entry.

import STATE from "./stateAgencies.json";

export type TrackerStatus =
    | "not-sent"
    | "sent"
    | "acknowledged"
    | "estimate"
    | "referred"
    | "no-records"
    | "denied"
    | "produced";

export const STATUS_LABEL: Record<TrackerStatus, string> = {
    "not-sent": "Not sent",
    sent: "Sent",
    acknowledged: "Acknowledged",
    estimate: "Fee estimate",
    referred: "Referred",
    "no-records": "No records",
    denied: "Denied",
    produced: "Produced",
};

export interface TrackerStep {
    d: string; // ISO date
    date: string; // display date
    doc?: { thread: string; ulid: string }; // the register entry
}

export interface TrackerEntry {
    ref?: string; // the agency's request number
    sent?: TrackerStep;
    acknowledged?: TrackerStep;
    // Every other message in the exchange, from either side, as register
    // ULIDs in the public-question-1 thread. The request and the
    // acknowledgment are counted with them; the list is sorted by ULID, which
    // is time.
    correspondence?: string[];
    status: TrackerStatus;
    statusStep?: TrackerStep; // the document that set the current status
    production?: { label: string; href: string };
    note?: string;
}

export interface StateAgency {
    slug: string;
    name: string;
    abbr: string;
    url: string;
}

export const TRACKER_SOURCE = {
    href: STATE.source,
    retrieved: STATE.retrieved,
};

export const QUESTION =
    "Is the public relations office of Oregon State Police a back channel for agencies to dump their problems?";

// Keyed by the agency's slug in stateAgencies.json.
const ENTRIES: Record<string, TrackerEntry> = {
    "oregon-state-police": {
        ref: "PR44279",
        sent: { d: "2026-10-22", date: "October 22, 2026", doc: { thread: "public-question-1", ulid: "01M5JGN4GGQX1SS6GYNYG0NGA5" } },
        acknowledged: { d: "2026-10-22", date: "October 22, 2026", doc: { thread: "public-question-1", ulid: "01M5JGHV1GQWQ4DDQ1AH2M7B5B" } },
        correspondence: ["01M5K5VMDR3S4GQ822KRNTQVMR"],
        status: "acknowledged",
    },
    "department-of-energy": {
        sent: { d: "2026-10-22", date: "October 22, 2026", doc: { thread: "public-question-1", ulid: "01M5KHDN80AJYRJNPQ24P9TZBY" } },
        status: "sent",
    },
    "board-of-accountancy": {
        sent: { d: "2026-10-27", date: "October 27, 2026", doc: { thread: "public-question-1", ulid: "01M5ZB1268QV3NWNHA3VXP52Y8" } },
        status: "sent",
    },
    "columbia-river-gorge-commission": {
        sent: { d: "2026-10-27", date: "October 27, 2026", doc: { thread: "public-question-1", ulid: "01M5ZB8S8G8YCYCEH8GHBGZS6Y" } },
        status: "sent",
    },
    "criminal-justice-commission": {
        sent: { d: "2026-10-27", date: "October 27, 2026", doc: { thread: "public-question-1", ulid: "01M5ZBJXFGPH0GY3KBAMQ4NE2G" } },
        status: "sent",
    },
    "department-of-administrative-services": {
        ref: "R001045-102726",
        sent: { d: "2026-10-27", date: "October 27, 2026", doc: { thread: "public-question-1", ulid: "01M5ZC1P4FQ3WH3V9ZGAN87V1Z" } },
        correspondence: ["01M5ZC1P4GHZ1373M65XF3MVE5"],
        status: "sent",
    },
    "department-of-aviation": {
        ref: "1510431709",
        sent: { d: "2026-10-27", date: "October 27, 2026", doc: { thread: "public-question-1", ulid: "01M5ZCJTZ0KTEW1TRFHB7CG6W8" } },
        correspondence: ["01M5ZCJBB0S5NKNHF1RH2KA7SN", "01M5ZCJCA8W0GMWFZMC6THFMTH"],
        status: "sent",
    },
    "department-of-consumer-and-business-services": {
        sent: { d: "2026-10-27", date: "October 27, 2026", doc: { thread: "public-question-1", ulid: "01M5ZCYC3GN6KAN6BDMZBCPJC9" } },
        status: "sent",
    },
    "department-of-corrections": {
        ref: "R004132-102726",
        sent: { d: "2026-10-27", date: "October 27, 2026", doc: { thread: "public-question-1", ulid: "01M5ZD8V288D2C9K615MN5EQJH" } },
        correspondence: ["01M5ZD85JRX3SPFAPG3JYSXRNT"],
        status: "sent",
    },
    "department-of-emergency-management": {
        sent: { d: "2026-10-27", date: "October 27, 2026", doc: { thread: "public-question-1", ulid: "01M5ZDH6MRZ6NSF4GYN60W6AY5" } },
        acknowledged: { d: "2026-10-27", date: "October 27, 2026", doc: { thread: "public-question-1", ulid: "01M5ZE7DJRF0AE9G1VQ1WK6Y8P" } },
        correspondence: ["01M5ZEC3Z81DRZWN6A9S4H18NF"],
        status: "acknowledged",
    },
    "department-of-environmental-quality": {
        ref: "R003485-102726",
        sent: { d: "2026-10-27", date: "October 27, 2026", doc: { thread: "public-question-1", ulid: "01M5ZDRMXQC6WBWV02ZB71ZCZX" } },
        acknowledged: { d: "2026-10-27", date: "October 27, 2026", doc: { thread: "public-question-1", ulid: "01M5ZDRMXRT1ZQH7X92EQXDFKA" } },
        correspondence: ["01M5ZDRMXRT1ZQH7X92EQXDFKA"],
        status: "acknowledged",
    },
    "department-of-geology-and-mineral-industries": {
        sent: { d: "2026-10-27", date: "October 27, 2026", doc: { thread: "public-question-1", ulid: "01M5ZE073R2C9Q0SVK7P7M9XC5" } },
        status: "sent",
    },
    "department-of-justice": {
        sent: { d: "2026-10-27", date: "October 27, 2026", doc: { thread: "public-question-1", ulid: "01M5ZE443RBB9078F1GRXEHT7Y" } },
        status: "sent",
    },
};

export const AGENCIES: (StateAgency & { entry: TrackerEntry })[] = (STATE.agencies as StateAgency[]).map((a) => ({
    ...a,
    entry: ENTRIES[a.slug] ?? { status: "not-sent" },
}));

for (const slug of Object.keys(ENTRIES)) {
    if (!AGENCIES.some((a) => a.slug === slug)) throw new Error(`tracker: unknown agency ${slug}`);
}

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
        status: "acknowledged",
    },
    "department-of-energy": {
        sent: { d: "2026-10-22", date: "October 22, 2026", doc: { thread: "public-question-1", ulid: "01M5KHDN80AJYRJNPQ24P9TZBY" } },
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

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
    display?: string; // the name the letter uses, where the state's list differs
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
        correspondence: ["01M5ZPM4707PVFX83P8ZVRQATM"],
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
        correspondence: ["01M5ZEC3Z81DRZWN6A9S4H18NF", "01M5ZPMTNRMPG3CRR9XYTPXM0H"],
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
        correspondence: ["01M5ZE9ZKRZ476QK6J77ZV1X4R", "01M5ZFFTHR5716GEWAHRGMV96D"],
        status: "sent",
    },
    "department-of-land-conservation-and-development": {
        sent: { d: "2026-10-27", date: "October 27, 2026", doc: { thread: "public-question-1", ulid: "01M5ZGCHG081MFQWZH0AGXBHRS" } },
        correspondence: ["01M5ZGP728HKYYZFN726PSRG7C"],
        status: "sent",
    },
    "department-of-public-safety-standards-and-training": {
        ref: "P000705-102726",
        sent: { d: "2026-10-27", date: "October 27, 2026", doc: { thread: "public-question-1", ulid: "01M5ZGHSF0QPJSXY9R1RZQV824" } },
        correspondence: ["01M5ZGJC0R5WA70W158WTWDRP6", "01M61EYJXR8DXKJZAYZWCQJV9K"],
        status: "sent",
    },
    "department-of-revenue": {
        sent: { d: "2026-10-27", date: "October 27, 2026", doc: { thread: "public-question-1", ulid: "01M5ZGRFAREEGKTM3EWBCC3GMV" } },
        correspondence: ["01M5ZH2GM0964BWX9TJ4483AHS", "01M5ZWAYSRAX4D7KJQFRW60X47"],
        status: "sent",
    },
    "department-of-state-lands": {
        sent: { d: "2026-10-27", date: "October 27, 2026", doc: { thread: "public-question-1", ulid: "01M5ZGYZB0KTSVHAMDHSWAZS1Y" } },
        status: "sent",
    },
    "division-of-financial-regulation": {
        sent: { d: "2026-10-27", date: "October 27, 2026", doc: { thread: "public-question-1", ulid: "01M5ZH2ARGZ7KXSXQ5QYR69CVE" } },
        status: "sent",
    },
    "employment-department": {
        ref: "1885",
        sent: { d: "2026-10-27", date: "October 27, 2026", doc: { thread: "public-question-1", ulid: "01M5ZH6PMA80FMGTE07X9TKZ75" } },
        correspondence: ["01M5ZH6Z6GQP0RGHC5NVW3DFZ6"],
        status: "sent",
    },
    "employment-relations-board": {
        sent: { d: "2026-10-27", date: "October 27, 2026", doc: { thread: "public-question-1", ulid: "01M5ZHA3S84THGC29V7FEMH9F1" } },
        acknowledged: { d: "2026-10-27", date: "October 27, 2026", doc: { thread: "public-question-1", ulid: "01M5ZMSTZG2CY6QT8SJTNGPSQW" } },
        correspondence: ["01M5ZMSTZG2CY6QT8SJTNGPSQW"],
        status: "acknowledged",
    },
    "governor-of-oregon": {
        sent: { d: "2026-10-27", date: "October 27, 2026", doc: { thread: "public-question-1", ulid: "01M5ZHW2ZGEQDZBFYKJ42Y78SM" } },
        status: "sent",
    },
    "oregon-parks-and-recreation": {
        sent: { d: "2026-10-27", date: "October 27, 2026", doc: { thread: "public-question-1", ulid: "01M5ZJH9P8E3D6007K2BMQCBDG" } },
        acknowledged: { d: "2026-10-27", date: "October 27, 2026", doc: { thread: "public-question-1", ulid: "01M5ZJHSA8HJ4GR318G35B48D6" } },
        correspondence: ["01M5ZJHSA8HJ4GR318G35B48D6"],
        status: "acknowledged",
    },
    "oregon-department-of-fish-and-wildlife": {
        ref: "R000173-102726",
        sent: { d: "2026-10-27", date: "October 27, 2026", doc: { thread: "public-question-1", ulid: "01M5ZJYDKRZ7VXKGFVG7PBQDW3" } },
        correspondence: ["01M5ZK0MX0021W0Y7G8JA83JHP", "01M61CH3E0EM6E0XNEJSKA5E1R"],
        status: "sent",
    },
    "oregon-department-of-forestry": {
        ref: "PRR2941",
        sent: { d: "2026-10-27", date: "October 27, 2026", doc: { thread: "public-question-1", ulid: "01M5ZK2T7R4YF26F3AQ18GEWRS" } },
        acknowledged: { d: "2026-10-27", date: "October 27, 2026", doc: { thread: "public-question-1", ulid: "01M5ZW1MYG169Q18TVMEDV2381" } },
        status: "acknowledged",
    },
    "oregon-department-of-transportation": {
        ref: "R029530-102726",
        sent: { d: "2026-10-27", date: "October 27, 2026", doc: { thread: "public-question-1", ulid: "01M5ZKVYXRBXWV4CFNWCV53311" } },
        correspondence: ["01M5ZKTQVRSFW7R31FFAX5W54P", "01M5ZM218G4RAP20AFJSY1TQFK"],
        status: "sent",
    },
    "oregon-department-of-agriculture": {
        sent: { d: "2026-10-27", date: "October 27, 2026", doc: { thread: "public-question-1", ulid: "01M5ZM2MSGQSR737G3VP3EPNXJ" } },
        status: "sent",
    },
    "oregon-department-of-early-learning-and-care": {
        sent: { d: "2026-10-27", date: "October 27, 2026", doc: { thread: "public-question-1", ulid: "01M5ZM6QN0H3FHXSF5J8MB8V68" } },
        status: "sent",
    },
    "oregon-department-of-education": {
        sent: { d: "2026-10-27", date: "October 27, 2026", doc: { thread: "public-question-1", ulid: "01M5ZM98PRF2RJ1CKXHGP1PCQW" } },
        status: "sent",
    },
    "oregon-department-of-human-services": {
        ref: "MWVFW7N",
        sent: { d: "2026-10-27", date: "October 27, 2026", doc: { thread: "public-question-1", ulid: "01M5ZMEBSGVMA0R17ASKCXYNXY" } },
        correspondence: ["01M5ZMRB48SKZ10YCY1KWATTFE", "01M61F49HGT7A456362DZVXXMQ"],
        status: "sent",
    },
    "oregon-department-of-veterans-affairs": {
        sent: { d: "2026-10-27", date: "October 27, 2026", doc: { thread: "public-question-1", ulid: "01M5ZMH3P0W75E2QP3T4YTH9XF" } },
        correspondence: ["01M5ZQNY80YFTJFFN1RX8CCREZ"],
        status: "sent",
    },
    "department-of-justice": {
        sent: { d: "2026-10-27", date: "October 27, 2026", doc: { thread: "public-question-1", ulid: "01M5ZE443RBB9078F1GRXEHT7Y" } },
        status: "sent",
    },
};

// Every agency on the list is Oregon's, so the table drops a leading "Oregon"
// where what is left is still the agency's name: "Oregon Department of
// Forestry" reads "Department of Forestry". Where "Oregon" is part of the
// name itself (Oregon State Police, Oregon Health Authority), it stays.
const GENERIC = /^(Department of |Board of |State Board of |Commission for |Commission on |Driver and Motor Vehicle Services$)/;
const shortName = (n: string) => {
    const rest = n.startsWith("Oregon ") ? n.slice("Oregon ".length) : n;
    return rest !== n && GENERIC.test(rest) ? rest : n;
};

export const AGENCIES: (StateAgency & { entry: TrackerEntry })[] = (STATE.agencies as StateAgency[])
    .map((a) => ({
        ...a,
        name: shortName(a.display ?? a.name),
        entry: ENTRIES[a.slug] ?? { status: "not-sent" },
    }))
    .sort((x, y) => x.name.localeCompare(y.name));

for (const slug of Object.keys(ENTRIES)) {
    if (!AGENCIES.some((a) => a.slug === slug)) throw new Error(`tracker: unknown agency ${slug}`);
}

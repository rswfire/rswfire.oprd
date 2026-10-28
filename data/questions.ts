// The public questions: each one a question put to the State of Oregon in
// public records requests, with its own register and its own page. Question
// 1 goes to every state agency (data/tracker.ts); question 2 goes to the
// three custodians of the answer.

import STATE from "./stateAgencies.json";
import { QUESTION as QUESTION_1, type StateAgency, type TrackerEntry } from "./tracker";

export interface PublicQuestion {
    n: number;
    slug: "public-question-1" | "public-question-2"; // the register
    href: string; // the page
    question: string;
    asked: string; // whom, in one line
    opened: string; // display date of the first request
}

export const QUESTIONS: PublicQuestion[] = [
    {
        n: 1,
        slug: "public-question-1",
        href: "/public-questions/1",
        question: QUESTION_1,
        asked: "I asked Oregon State Police how many times since January 1, 2023 its press office has ordered its detectives to investigate a member of the public, and I am asking the 164 state agencies on Oregon’s own list what each has written to that press office about a member of the public.",
        opened: "October 22, 2026",
    },
    {
        n: 2,
        slug: "public-question-2",
        href: "/public-questions/2",
        question: "Can the State of Oregon search its own email, and does it?",
        asked: "I asked the three offices that hold the answer: the Department of Administrative Services, which runs every executive branch mailbox on one system and bought the tool to search it; the Department of Justice, which writes the manual every records officer works from; and the Secretary of State, whose Archivist sets the rules for keeping email and sells a system that finds it in seconds.",
        opened: "October 27, 2026",
    },
];

export function questionBySlug(slug: string): PublicQuestion {
    const q = QUESTIONS.find((x) => x.slug === slug);
    if (!q) throw new Error(`public questions: no question for ${slug}`);
    return q;
}

// Question 2: the custodians, keyed by the state list's slug, in the same
// shape as a question 1 row so the same table shows them.
const Q2: Record<string, TrackerEntry> = {
    "department-of-administrative-services": {
        ref: "R001047-102726",
        sent: { d: "2026-10-27", date: "October 27, 2026", doc: { thread: "public-question-2", ulid: "01M605SNAGRDKGYDW7JRFWQGN0" } },
        correspondence: ["01M605VFXGH9VW3ZTHF8FRA8EC"],
        status: "sent",
    },
    "department-of-justice": {
        sent: { d: "2026-10-27", date: "October 27, 2026", doc: { thread: "public-question-2", ulid: "01M606SRNGCZCQEYTQ9XH2NP7Q" } },
        status: "sent",
    },
    "secretary-of-state": {
        ref: "R000687-102726",
        sent: { d: "2026-10-27", date: "October 27, 2026", doc: { thread: "public-question-2", ulid: "01M60799QRA2499B23F73Z6JRX" } },
        correspondence: ["01M607B4ARHT4EXH6AGHSHQ161"],
        status: "sent",
    },
};

export const QUESTION_2_AGENCIES: (StateAgency & { entry: TrackerEntry })[] = Object.keys(Q2).map((slug) => {
    const a = (STATE.agencies as StateAgency[]).find((x) => x.slug === slug);
    if (!a) throw new Error(`public question 2: unknown agency ${slug}`);
    return { ...a, entry: Q2[slug] };
});

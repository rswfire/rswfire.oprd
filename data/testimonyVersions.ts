// data/testimonyVersions.ts
//
// The testimony is a document, so it carries a version. Every revision that
// changes what the page asserts gets an entry here: the version, the date it
// was published, and what changed in plain language. Nothing is ever removed
// from this list, because the point of a permanent record is that its own
// history is inspectable.
//
// Rules: a new source of evidence, a corrected fact, or a section rewritten
// from the record is a minor bump. A typographical or layout change is not a
// version at all. The version shown on the page is the first entry.
//
// Versions are cut on his say-so, not on mine. Work continues at 1.0 until he
// says to stamp one.

export interface TestimonyVersion {
    version: string;
    date: string;      // Month D, YYYY — the date it was published
    d: string;         // YYYY-MM-DD, for sorting and for machines
    note: string;      // what changed, in one sentence
}

export const TESTIMONY_VERSIONS: TestimonyVersion[] = [
    {
        version: "1.11",
        date: "September 24, 2026",
        d: "2026-09-24",
        note: "added the Governor's silence",
    },
    {
        version: "1.10",
        date: "September 22, 2026",
        d: "2026-09-22",
        note: "added conclusion",
    },
    {
        version: "1.9",
        date: "September 21, 2026",
        d: "2026-09-21",
        note: "consolidated chapters",
    },
    {
        version: "1.8",
        date: "September 19, 2026",
        d: "2026-09-19",
        note: "deleted redundant chapter",
    },
    {
        version: "1.7",
        date: "September 19, 2026",
        d: "2026-09-19",
        note: "substantive changes",
    },
    {
        version: "1.6",
        date: "September 17, 2026",
        d: "2026-09-17",
        note: "added addendum",
    },
    {
        version: "1.5",
        date: "September 17, 2026",
        d: "2026-09-17",
        note: "rewrote chapter two",
    },
    {
        version: "1.4",
        date: "September 15, 2026",
        d: "2026-09-15",
        note: "polished chapter one",
    },
    {
        version: "1.3",
        date: "September 15, 2026",
        d: "2026-09-15",
        note: "improved quotations, removed defensiveness",
    },
    {
        version: "1.2",
        date: "September 15, 2026",
        d: "2026-09-15",
        note: "improved humor and voice",
    },
    {
        version: "1.1",
        date: "September 15, 2026",
        d: "2026-09-15",
        note: "redacted individuals, polished language",
    },
    {
        version: "1.0",
        date: "September 15, 2026",
        d: "2026-09-15",
        note: "First publication.",
    },
];

export const CURRENT_VERSION = TESTIMONY_VERSIONS[0];

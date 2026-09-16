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
        version: "1.4",
        date: "September 15, 2026",
        d: "2026-09-15",
        note: "",
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

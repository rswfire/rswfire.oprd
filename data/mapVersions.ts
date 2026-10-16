// data/mapVersions.ts
//
// The Map is a document, so it carries a version. Every revision that changes
// what the page asserts gets an entry here. Nothing is removed. The version
// shown on the page is the first entry. Versions are cut on his say.

export interface MapVersion {
    version: string;
    date: string; // Month D, YYYY
    d: string;    // YYYY-MM-DD
    note: string; // what changed, in one sentence
}

export const MAP_VERSIONS: MapVersion[] = [
    {
        version: "1.0",
        date: "October 15, 2026",
        d: "2026-10-15",
        note: "first version, from the record through the Department of Justice fee waiver denial of October 15, 2026",
    },
];

export const CURRENT_MAP_VERSION = MAP_VERSIONS[0];

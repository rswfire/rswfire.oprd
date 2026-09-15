// scripts/make-doc-index.mjs
//
// Writes public/records/index.json: everything the document viewer needs to
// open one filing by ULID, without the page that links to it having to carry
// the whole register in its bundle. A citation anywhere in the archive is
// therefore just a ULID, and the viewer fetches this index once on first use.
//
//   node scripts/make-doc-index.mjs
//
// Run after any change to data/threads.ts, alongside check-register.
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const src = fs.readFileSync(path.join(root, "data", "threads.ts"), "utf8");

const KIND_LABEL = {
    request: "Public Records Request",
    followup: "Follow-Up",
    response: "Agency Response",
    record: "Record",
    statement: "Public Statement",
    notice: "Letter Sent",
    letter: "Letter Received",
    petition: "Petition",
    supplement: "Supplemental Filing",
};
// Kinds the archive sends; everything else it received. Direction decides
// whether the counterparty line reads "To" or "From".
const SENT = new Set(["notice", "request", "followup", "statement", "petition", "supplement"]);

const field = (block, key) => {
    const m = block.match(new RegExp(`${key}:\\s*\\n?\\s*"((?:[^"\\\\]|\\\\.)*)"`));
    return m ? m[1].replace(/\\"/g, '"') : "";
};

function otherParty(list) {
    if (!list) return "";
    return list
        .split(";")
        .map((s) => s.trim())
        .filter((s) => s && !/^Robert (Samuel )?White$/i.test(s))
        .join("; ");
}

const marks = [...src.matchAll(/^ {4}slug: "([a-z-]+)",$/gm)].map((m) => ({ i: m.index, slug: m[1] }));
const slugAt = (i) => {
    let slug = null;
    for (const m of marks) if (m.i < i) slug = m.slug; else break;
    return slug;
};

const index = {};
let offset = 0;
for (const block of src.split("\n        },")) {
    const start = offset;
    offset += block.length + "\n        },".length;
    const ulid = block.match(/ulid: "([0-9A-HJKMNP-TV-Z]{26})"/)?.[1];
    if (!ulid) continue;
    const slug = slugAt(start);
    if (!slug) continue;

    const kind = field(block, "kind");
    const to = field(block, "to");
    const from = field(block, "from");
    const sent = SENT.has(kind);
    const who = otherParty(sent ? to : from) || otherParty(sent ? from : to);

    const docs = [...block.matchAll(/\{\s*label: "((?:[^"\\]|\\.)*)",\s*href: "([^"]+)"\s*\}/g)]
        .map((m) => ({ label: m[1].replace(/\\"/g, '"'), href: m[2] }));

    index[ulid] = {
        slug,
        id: field(block, "id"),
        title: field(block, "title"),
        date: field(block, "date"),
        time: field(block, "time") || undefined,
        kindLabel: KIND_LABEL[kind] ?? "Record",
        counterparty: who ? `${sent ? "To" : "From"} ${who}` : undefined,
        ulid,
        docs,
        eml: field(block, "eml") || undefined,
    };
}

const out = path.join(root, "public", "records", "index.json");
fs.writeFileSync(out, JSON.stringify(index));
console.log(`doc index: ${Object.keys(index).length} filings → public/records/index.json`);

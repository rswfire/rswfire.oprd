// scripts/make-sunlight-index.mjs
//
// Writes public/sunlight/index.json: every sunlight entry, keyed by a stable
// anchor id, so a citation anywhere in the archive can open one entry without
// the citing page carrying the whole document in its bundle.
//
//   node scripts/make-sunlight-index.mjs
//
// Run after regenerating data/sunlight.ts. The anchor ids are derived from the
// heading and are what /sunlight scrolls to, so they must stay stable: change
// a heading and the old link stops landing.
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const src = fs.readFileSync(path.join(root, "data", "sunlight.ts"), "utf8");

// The generated file is JSON-shaped TypeScript; take the array literal.
const start = src.indexOf("SUNLIGHT_SECTIONS: SunlightSection[] = [");
const open = src.indexOf("= [", start) + 2;   // not the "[]" in the type
// The array runs to the end of the file; the trailing "];" closes it.
const end = src.lastIndexOf("];");
const sections = JSON.parse(src.slice(open, end + 1).trim());

export function anchorFor(heading) {
    return heading
        .toLowerCase()
        .replace(/[—–]/g, "-")   // em and en dashes
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
}

const index = {};
for (const s of sections) {
    const id = anchorFor(s.heading);
    index[id] = { id, tab: "timeline", heading: s.heading, blocks: s.blocks };
}

fs.mkdirSync(path.join(root, "public", "sunlight"), { recursive: true });
fs.writeFileSync(path.join(root, "public", "sunlight", "index.json"), JSON.stringify(index));
console.log(`sunlight index: ${Object.keys(index).length} entries → public/sunlight/index.json`);
console.log(Object.keys(index).slice(0, 6).join("\n"));

// scripts/make-moved-stubs.mjs
//
// The registers moved from /accountability to /records, and a single document
// from /accountability/<register>/<ULID> to /record/<register>/<ULID>. Those
// old addresses are in letters already sent to the agencies, in filings with
// the Attorney General, and in the production the state police hold, so they
// have to keep resolving. A static export has no server to answer with a 301,
// so each old address keeps a small file of its own under public/ that carries
// a meta refresh, a canonical link, and a visible link for a reader with no
// JavaScript and no refresh.
//
// Run once after a move; addresses minted after it never had an old form.
//
//   node scripts/make-moved-stubs.mjs
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const src = fs.readFileSync(path.join(root, "data", "threads.ts"), "utf8");

// Walk the register file in order: each `slug: "x"` at thread level opens a
// register, and every ULID after it belongs to that register until the next.
const marks = [...src.matchAll(/^ {4}slug: "([a-z-]+)",$/gm)].map((m) => ({ i: m.index, slug: m[1] }));
const ulids = [...src.matchAll(/ulid: "([0-9A-HJKMNP-TV-Z]{26})"/g)].map((m) => ({ i: m.index, ulid: m[1] }));

function registerOf(i) {
    let slug = null;
    for (const m of marks) if (m.i < i) slug = m.slug; else break;
    return slug;
}

const pages = new Map(); // old path -> new path
pages.set("/accountability", "/records");
for (const { slug } of marks) pages.set(`/accountability/${slug}`, `/records/${slug}`);
for (const { i, ulid } of ulids) {
    const slug = registerOf(i);
    if (slug) pages.set(`/accountability/${slug}/${ulid}`, `/record/${slug}/${ulid}`);
}
// The cluster page, renamed for what it is.
pages.set("/record", "/synthesis");

const html = (to) => `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta http-equiv="refresh" content="0; url=${to}/">
<link rel="canonical" href="https://oprdvolunteerabuse.org${to}/">
<meta name="robots" content="noindex, follow">
<title>Moved</title>
</head>
<body style="font-family:system-ui,sans-serif;padding:3rem;line-height:1.6">
<p>This address moved to <a href="${to}/">https://oprdvolunteerabuse.org${to}/</a>.</p>
<script>location.replace(${JSON.stringify(to + "/")} + location.search + location.hash);</script>
</body>
</html>
`;

let written = 0;
for (const [from, to] of pages) {
    const dir = path.join(root, "public", from.replace(/^\//, ""));
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, "index.html"), html(to));
    written++;
}
console.log(`moved stubs: ${written} written`);

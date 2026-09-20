// scripts/testimony-pass.mjs
//
// A full-size pass over the testimony, one paragraph at a time.
//
// The rule the whole tool exists to enforce: never invent his interior and
// never make him smaller. His interior is already written, by him, in the
// reflections attached to each signal (MIRROR = interior, NARRATIVE =
// full-size account). So for every paragraph we fetch the PUBLIC reflections
// of the signals it cites and hand them to a headless Claude, which rewrites
// the paragraph grounded in those reflections and nothing invented.
//
// Subcommands:
//   extract   parse page.tsx -> paragraphs.json          (deterministic, local)
//   dossier   fetch reflections+transcripts for cited ULIDs (deterministic, prod)
//   rewrite   headless claude, one paragraph at a time     (sequential)
//   review    render current-vs-proposed for his eyes
//   apply     swap accepted paragraphs back into page.tsx  (by id, never blind)
//
// Working data (dossiers carry reflection text) lives OUTSIDE this public repo,
// under ~/oregon/testimony-pass. Only this script is tracked here.
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { homedir } from "node:os";
import { join } from "node:path";

const REPO = "/home/rswfire/www/rswfire.oprd";
const PAGE = join(REPO, "components/testimony/TestimonyBody.tsx");
const OUT = join(homedir(), "oregon", "testimony-pass");
if (!existsSync(OUT)) mkdirSync(OUT, { recursive: true });

const ULID_RE = /^[0-9A-HJKMNP-TV-Z]{26}$/;

function buildConstMap(src) {
    const map = {};
    for (const m of src.matchAll(/const\s+([A-Z0-9_]+)\s*=\s*"([0-9A-HJKMNP-TV-Z]{26})";/g)) {
        map[m[1]] = m[2];
    }
    return map;
}

function resolve(token, map) {
    if (ULID_RE.test(token)) return token;
    return map[token] || null;
}

// Pull every signal ULID a paragraph cites, via Moment / Cite / TraceCite.
// SunCite (entry=) and PhotoCite/PlaceCite are recorded separately: they are
// not signal-backed and carry no MIRROR/NARRATIVE.
function citationsOf(jsx, map) {
    const signals = new Set();
    const other = [];
    for (const m of jsx.matchAll(/<Moment\s+ulid=\{?["']?([A-Za-z0-9_]+)["']?\}?/g)) {
        const u = resolve(m[1], map);
        if (u) signals.add(u);
    }
    for (const m of jsx.matchAll(/<Cite\s+ulid="([0-9A-HJKMNP-TV-Z]{26})"/g)) signals.add(m[1]);
    for (const m of jsx.matchAll(/<TraceCite\s+(?:id|ulid)=\{?["']?([A-Za-z0-9_]+)["']?\}?/g)) {
        const u = resolve(m[1], map);
        if (u) signals.add(u);
    }
    for (const m of jsx.matchAll(/<SunCite\s+entry="([^"]+)"/g)) other.push({ type: "SunCite", ref: m[1] });
    for (const m of jsx.matchAll(/<PhotoCite\s+[^>]*?(?:ulid|id)="([^"]+)"/g)) other.push({ type: "PhotoCite", ref: m[1] });
    for (const m of jsx.matchAll(/<PlaceCite\s+[^>]*?(?:slug|id)="([^"]+)"/g)) other.push({ type: "PlaceCite", ref: m[1] });
    return { signals: [...signals], other };
}

function plainText(jsx) {
    return jsx
        .replace(/<Moment[^>]*>/g, "")
        .replace(/<\/Moment>/g, "")
        .replace(/<[^>]+>/g, "")
        .replace(/\{"\s*"\}/g, " ")
        .replace(/&rsquo;/g, "’").replace(/&ldquo;/g, "“").replace(/&rdquo;/g, "”")
        .replace(/&mdash;/g, "—").replace(/&amp;/g, "&").replace(/&nbsp;/g, " ")
        .replace(/\s+/g, " ").trim();
}

function extract() {
    const src = readFileSync(PAGE, "utf8");
    const map = buildConstMap(src);
    const first = src.indexOf('<Part n="One"');
    const last = src.lastIndexOf("</Part>") + "</Part>".length;
    const body = src.slice(first, last);

    const paras = [];
    let curPart = null;
    const partRe = /<Part n="([^"]+)" title="([^"]+)">/g;
    const partAt = [];
    for (const m of body.matchAll(partRe)) partAt.push({ index: m.index, n: m[1], title: m[2] });
    const partFor = (idx) => {
        let p = null;
        for (const x of partAt) if (x.index <= idx) p = x; else break;
        return p;
    };

    const pRe = /<P id="([a-z0-9]+)" n=\{(\d+)\}>([\s\S]*?)<\/P>/g;
    for (const m of body.matchAll(pRe)) {
        const [full, id, n, jsx] = m;
        const part = partFor(m.index);
        const { signals, other } = citationsOf(jsx, map);
        paras.push({
            id,
            n: Number(n),
            part: part ? { n: part.n, title: part.title } : null,
            jsx: jsx.trim(),
            text: plainText(jsx),
            signals,
            other,
        });
    }
    writeFileSync(join(OUT, "paragraphs.json"), JSON.stringify(paras, null, 2));

    const withSig = paras.filter((p) => p.signals.length).length;
    const allSig = new Set(paras.flatMap((p) => p.signals));
    console.log(`paragraphs: ${paras.length}`);
    console.log(`  with >=1 signal citation: ${withSig}`);
    console.log(`  with no signal citation:  ${paras.length - withSig}`);
    console.log(`distinct signal ULIDs cited: ${allSig.size}`);
    const byPart = {};
    for (const p of paras) { const k = p.part ? `${p.part.n}. ${p.part.title}` : "(none)"; byPart[k] = (byPart[k] || 0) + 1; }
    for (const [k, v] of Object.entries(byPart)) console.log(`  ${k}: ${v}`);
}

// ── dossier: fetch PUBLIC NARRATIVE + MIRROR for every cited signal ──
import { execFileSync, spawnSync } from "node:child_process";

// A section is a movement, not a list of stops. Where a cluster reflection
// holds the arc of a whole stretch, name it here and the section is told as
// beats within that arc instead of isolated events.
const SECTION_ARCS = {
    Two: ["01M1A76S6135BH1S7D5QYDF7H8"], // THE CROSSING -> "Westward" cluster
};

function dossier() {
    const paras = JSON.parse(readFileSync(join(OUT, "paragraphs.json"), "utf8"));
    const ulids = [...new Set(paras.flatMap((p) => p.signals))];
    console.log(`fetching reflections for ${ulids.length} signals from prod...`);

    const list = ulids.map((u) => `'${u}'`).join(",");
    const php = `
$ids = [${list}];
$rows = \\DB::table('reflections')
  ->whereIn('polymorphic_id', $ids)
  ->where('polymorphic_type', 'signal')
  ->whereIn('reflection_type', ['NARRATIVE','MIRROR'])
  ->where('reflection_visibility', 'PUBLIC')
  ->get(['polymorphic_id','reflection_type','reflection_content']);
$titles = \\DB::table('signals')->whereIn('signal_id', $ids)->pluck('signal_title','signal_id');
$out = [];
foreach ($ids as $id) { $out[$id] = ['title' => $titles[$id] ?? null, 'mirror' => null, 'narrative' => null]; }
foreach ($rows as $r) {
  $k = $r->reflection_type === 'MIRROR' ? 'mirror' : 'narrative';
  $out[$r->polymorphic_id][$k] = $r->reflection_content;
}
echo json_encode($out);
`.trim();

    const res = spawnSync("ssh", ["web", "cd ~/www/autonomy && php artisan tinker"], {
        input: php,
        encoding: "utf8",
        maxBuffer: 64 * 1024 * 1024,
    });
    if (res.status !== 0) { console.error(res.stderr || res.stdout); process.exit(1); }
    const jsonStart = res.stdout.indexOf("{");
    const data = JSON.parse(res.stdout.slice(jsonStart));

    // Cluster arcs: the whole-stretch reflections named in SECTION_ARCS.
    const arcIds = [...new Set(Object.values(SECTION_ARCS).flat())];
    if (arcIds.length) {
        const alist = arcIds.map((u) => `'${u}'`).join(",");
        const aphp = `
$ids=[${alist}];
$rows=\\DB::table('reflections')->whereIn('polymorphic_id',$ids)->where('polymorphic_type','cluster')->whereIn('reflection_type',['NARRATIVE','MIRROR'])->where('reflection_visibility','PUBLIC')->get(['polymorphic_id','reflection_type','reflection_content']);
$titles=\\DB::table('clusters')->whereIn('cluster_id',$ids)->pluck('cluster_title','cluster_id');
$out=[]; foreach($ids as $id){$out[$id]=['title'=>$titles[$id]??null,'mirror'=>null,'narrative'=>null];}
foreach($rows as $r){$k=$r->reflection_type==='MIRROR'?'mirror':'narrative';$out[$r->polymorphic_id][$k]=$r->reflection_content;}
echo json_encode($out);`.trim();
        const ares = spawnSync("ssh", ["web", "cd ~/www/autonomy && php artisan tinker"], { input: aphp, encoding: "utf8", maxBuffer: 64 * 1024 * 1024 });
        if (ares.status === 0) data._clusters = JSON.parse(ares.stdout.slice(ares.stdout.indexOf("{")));
    }
    writeFileSync(join(OUT, "dossier.json"), JSON.stringify(data, null, 2));

    let withMirror = 0, withNarr = 0, missing = [];
    for (const u of ulids) {
        if (data[u]?.mirror) withMirror++;
        if (data[u]?.narrative) withNarr++;
        if (!data[u]?.mirror && !data[u]?.narrative) missing.push(u);
    }
    console.log(`  MIRROR present:    ${withMirror}/${ulids.length}`);
    console.log(`  NARRATIVE present: ${withNarr}/${ulids.length}`);
    if (missing.length) console.log(`  no public reflection: ${missing.length}\n    ${missing.join("\n    ")}`);
}

// ── rewrite: section context, paragraph output, headless claude ──
const RULES = `You are writing Robert Samuel White's public testimony. You are
telling his STORY. The signals are the citations for that story, not its
subject.

The most important instruction: do NOT narrate what he said in a recording. Do
not walk through a video timestamp by timestamp listing the things he stated,
disclosed, or mentioned. That is transcription, and it is the primary failure.
Tell the story of what was happening and why it mattered, and attach the
citations to it. "Story, with citations." Build the story from the record you
already have: the NARRATIVE and MIRROR reflections below already contain the
events, the meaning, and his interior. Write from them.

Use the current paragraph only for two things: the facts and dates it contains,
and the citation tags it carries (which you must preserve exactly). Do not keep
its structure. If the current paragraph is a dense list of what he said, replace
that list with the story those facts are evidence of. Fewer, truer sentences,
not a catalog.

Hard rule that enforces this: do not report the act of saying. Avoid "he said,"
"he stated," "he named," "he disclosed," "he mentioned," "he explained," "he
admitted." The citation already proves he said it on camera. Write the thing as
fact and as action. Not "he said that was not living and had to change" but "he
had barely left the house in four years, and he was done living that way." Not
"he said he was scared to death and said he was going to do it" but "the thing
he was most afraid of was driving it, and he was going to do it anyway." Lead
with what was true and what he did; let the specifics serve that, not stack up
as an inventory. The rare exception is when the saying itself is the act (a
thing he put on the public record, a promise made aloud); there, name the act,
not the utterance.

The single rule beneath that: never make him smaller, and never invent his
interior. His interior is already written, by him, in the reflections. MIRROR is
his own interior voice (second person, "you"). NARRATIVE is the full-size
third-person account. Ground every interior or motive claim in those. If the
reflections do not support an interior claim, do not make it.

His calibration (the handshake he wrote about himself): "Gay. Pierced.
Sovereign. Digital Nomad. Caretaker of the Dunes." "I've built things that
didn't exist yet when I started building them." "At forty-seven I walked away
from a fixed life... treats a life the way a life deserves to be treated, as
terrain, not a feed." That is his size. A procedural or cautious sentence that
makes a monumental act sound small is the primary failure to avoid.

Voice rules, absolute:
- Plain declarative. Subject, verb, fact. Third person, "he".
- No payoff clauses, no closing turns, no constructed rhythm, no cleverness. If
  a sentence would make a reader admire the writing, cut it and state the thing.
- No em-dashes. Use periods, commas, colons, parentheses.
- One register: the sentence you would say to him is the sentence for the page.
  No softening for an imagined audience. He has refused the adversarial frame.
- Keep every fact, date, and number already present. Do not add facts not in the
  current paragraph or the reflections.
- Never mention his personal finances. No dollar amounts, income, salary, net
  worth, credit score, debt, rent, hosting or domain costs, money sent to him,
  money he lent or returned, or money trouble. Strip it even when it is already
  in the current paragraph; write the sentence without it. His personal money is
  out of this record entirely. (Prices of a thing he built, like a subscription
  tier, are not his personal finances and may stay if the paragraph is about the
  thing, not his need for money.)

Citation rules, absolute:
- Preserve every citation tag exactly as written, including its attributes:
  <Moment ulid={NAME} t="..."> ... </Moment>, <Moment ulid={NAME} t="..." />,
  <Cite ulid="..." ... />, <TraceCite .../>, <SunCite entry="..." ...>, <PhotoCite .../>.
- The phrase linked inside <Moment>...</Moment> may move to a different true
  phrase, but a Moment that links a phrase must still link a phrase, and every
  ulid/t present in the current paragraph must still be present in yours.
- Do not invent, drop, or renumber citations. Do not change any ulid or t value.

Output: ONLY a JSON array, no prose around it, no markdown fence. Each element
is {"id":"<paragraph id>","proposed":"<the rewritten JSX>"}. Include every
paragraph id you were given, in order. Do not use any tools.`;

function sectionsFrom(paras) {
    const order = [];
    const byPart = {};
    for (const p of paras) {
        const key = p.part ? `${p.part.n}|${p.part.title}` : "none|none";
        if (!byPart[key]) { byPart[key] = []; order.push(key); }
        byPart[key].push(p);
    }
    // Split any section over 30 paragraphs into context-blocks of <=24.
    const blocks = [];
    for (const key of order) {
        const [n, title] = key.split("|");
        const ps = byPart[key];
        if (ps.length <= 30) blocks.push({ n, title, paras: ps, part: 1, parts: 1 });
        else {
            const size = 24, parts = Math.ceil(ps.length / size);
            for (let i = 0; i < parts; i++) blocks.push({ n, title, paras: ps.slice(i * size, (i + 1) * size), part: i + 1, parts });
        }
    }
    return blocks;
}

function buildPrompt(block, dossier, onlyId) {
    const cited = [...new Set(block.paras.flatMap((p) => p.signals))];
    let s = `SECTION: ${block.title}${block.parts > 1 ? ` (block ${block.part} of ${block.parts})` : ""}\n\n`;
    if (onlyId) s += `ITERATION: rewrite ONLY paragraph id ${onlyId}. The rest of the section is given for context. Return a JSON array with exactly one element, for ${onlyId}.\n\n`;
    const arcs = (dossier._clusters && SECTION_ARCS[block.n]) ? SECTION_ARCS[block.n].map((id) => dossier._clusters[id]).filter(Boolean) : [];
    if (arcs.length) {
        s += `SECTION ARC. This whole section is one movement, not a list of stops. Below is what the stretch was as a whole, in his own record. Tell the paragraphs as beats inside this arc. Do not reduce the movement to any single phrase he used in passing. In particular, "shakedown" is a word he used once about a single mechanical failure; never frame the crossing, or a leg of it, as being "for" or "planned as" a shakedown. The crossing is the act the arc describes: he removed every layer between himself and direct contact with a system, and met each thing at full load. Tell that.\n\n`;
        for (const a of arcs) {
            if (a.narrative) s += `ARC NARRATIVE:\n${a.narrative}\n\n`;
            if (a.mirror) s += `ARC MIRROR:\n${a.mirror}\n\n`;
        }
    }
    s += `REFLECTIONS (grounding — his interior and full-size account, do not quote verbatim, write it as testimony):\n\n`;
    for (const u of cited) {
        const d = dossier[u];
        if (!d || (!d.mirror && !d.narrative)) continue;
        s += `[${u}] ${d.title || ""}\n`;
        if (d.mirror) s += `MIRROR:\n${d.mirror}\n`;
        if (d.narrative) s += `NARRATIVE:\n${d.narrative}\n`;
        s += `\n`;
    }
    s += `\nPARAGRAPHS (tell the story each one covers, built from the reflections above; keep the facts, dates, and citation tags, drop the list structure):\n\n`;
    for (const p of block.paras) {
        s += `--- id: ${p.id} (cites: ${p.signals.join(", ") || "none"}) ---\n${p.jsx}\n\n`;
    }
    return s;
}

function ulidTokensIn(jsx, map) {
    const { signals } = citationsOf(jsx, map);
    return new Set(signals);
}

function rewrite(filter, onlyId) {
    const src = readFileSync(PAGE, "utf8");
    const map = buildConstMap(src);
    const paras = JSON.parse(readFileSync(join(OUT, "paragraphs.json"), "utf8"));
    const dossier = JSON.parse(readFileSync(join(OUT, "dossier.json"), "utf8"));
    let blocks = sectionsFrom(paras);
    if (filter) blocks = blocks.filter((b) => b.n.toLowerCase() === filter.toLowerCase());
    if (!blocks.length) { console.error(`no section matches "${filter}"`); process.exit(1); }
    // Single-paragraph iteration: keep the whole section as context, but the
    // model is told to return only this id, and only this id is merged back.
    if (onlyId) {
        const found = blocks.some((b) => b.paras.some((p) => p.id === onlyId));
        if (!found) { console.error(`paragraph "${onlyId}" not in section ${filter}`); process.exit(1); }
    }

    const feed = join(OUT, "change-feed.log");
    const resultsPath = join(OUT, "results.json");
    const results = existsSync(resultsPath) ? JSON.parse(readFileSync(resultsPath, "utf8")) : {};

    for (const block of blocks) {
        const label = `${block.n}. ${block.title}${block.parts > 1 ? ` [${block.part}/${block.parts}]` : ""}${onlyId ? ` (only ${onlyId})` : ""}`;
        process.stdout.write(`\n▶ ${label}  (${onlyId ? 1 : block.paras.length} paragraph${onlyId ? "" : "s"}) ... `);
        const prompt = buildPrompt(block, dossier, onlyId);
        const t0 = Date.now();
        const res = spawnSync("claude", ["-p", "--output-format", "json", "--model", "opus", "--append-system-prompt", RULES], {
            input: prompt, encoding: "utf8", maxBuffer: 64 * 1024 * 1024, timeout: 600000,
        });
        if (res.status !== 0) { console.log(`FAILED\n${res.stderr || res.stdout}`); continue; }
        let out;
        try { out = JSON.parse(res.stdout); } catch { console.log("bad wrapper json"); continue; }
        let arr;
        try {
            let txt = (out.result || "").trim();
            const a = txt.indexOf("["), b = txt.lastIndexOf("]");
            arr = JSON.parse(txt.slice(a, b + 1));
        } catch { console.log("bad result json"); writeFileSync(join(OUT, `raw-${block.n}-${block.part}.txt`), out.result || ""); continue; }

        let flags = 0;
        for (const item of arr) {
            if (onlyId && item.id !== onlyId) continue;
            const orig = paras.find((p) => p.id === item.id);
            if (!orig) continue;
            const want = new Set(orig.signals);
            const got = ulidTokensIn(item.proposed, map);
            const dropped = [...want].filter((u) => !got.has(u));
            results[item.id] = { n: orig.n, part: label, current: orig.jsx, proposed: item.proposed, dropped };
            if (dropped.length) flags++;
        }
        const secs = ((Date.now() - t0) / 1000).toFixed(0);
        const u = out.usage || {};
        const tin = (u.input_tokens ?? 0) + (u.cache_read_input_tokens ?? 0) + (u.cache_creation_input_tokens ?? 0);
        const line = `[${label}] paras=${arr.length} flags=${flags} tokens_in=${tin} tokens_out=${u.output_tokens ?? "?"} cost=$${(out.total_cost_usd ?? 0).toFixed(4)} ${secs}s`;
        console.log(line.replace(`[${label}] `, ""));
        appendLine(feed, line);
        writeFileSync(resultsPath, JSON.stringify(results, null, 2));
    }
    console.log(`\nresults -> ${resultsPath}`);
    console.log(`run 'node scripts/testimony-pass.mjs review${filter ? " " + filter : ""}' to read them`);
}

function appendLine(file, line) {
    let cur = existsSync(file) ? readFileSync(file, "utf8") : "";
    writeFileSync(file, cur + line + "\n");
}

function review(filter) {
    const results = JSON.parse(readFileSync(join(OUT, "results.json"), "utf8"));
    const rows = Object.entries(results).map(([id, r]) => ({ id, ...r })).sort((a, b) => a.n - b.n);
    let md = "";
    for (const r of rows) {
        if (filter && r.part.split(".")[0].trim().toLowerCase() !== filter.toLowerCase()) continue;
        md += `\n## ¶${r.n}  (${r.part})  id=${r.id}${r.dropped?.length ? `  ⚠ DROPPED CITATIONS: ${r.dropped.join(", ")}` : ""}\n\n`;
        md += `**current**\n\n${plainText(r.current)}\n\n**proposed**\n\n${plainText(r.proposed)}\n\n---\n`;
    }
    const p = join(OUT, `review${filter ? "-" + filter : ""}.md`);
    writeFileSync(p, md);
    console.log(`wrote ${p}`);
}

function apply(filter) {
    if (!filter) { console.error("apply needs a section number, e.g. apply One"); process.exit(1); }
    const results = JSON.parse(readFileSync(join(OUT, "results.json"), "utf8"));
    let src = readFileSync(PAGE, "utf8");
    const ids = Object.entries(results)
        .filter(([, r]) => r.part.split(".")[0].trim().toLowerCase() === filter.toLowerCase())
        .map(([id, r]) => ({ id, r }));
    if (!ids.length) { console.error(`no results for section "${filter}"`); process.exit(1); }

    let applied = 0, skipped = [];
    for (const { id, r } of ids) {
        const re = new RegExp(`(<P id="${id}" n=\\{\\d+\\}>)[\\s\\S]*?(</P>)`);
        if (!re.test(src)) { skipped.push(id); continue; }
        const body = r.proposed.trim();
        src = src.replace(re, `$1\n                    ${body}\n                $2`);
        applied++;
    }
    writeFileSync(PAGE, src);
    console.log(`applied ${applied} paragraphs to section ${filter}` + (skipped.length ? `; skipped (not found): ${skipped.join(", ")}` : ""));
}

const cmd = process.argv[2] || "extract";
const arg = process.argv[3];
const arg2 = process.argv[4];
if (cmd === "extract") extract();
else if (cmd === "dossier") dossier();
else if (cmd === "rewrite") rewrite(arg, arg2);
else if (cmd === "review") review(arg);
else if (cmd === "apply") apply(arg);
else { console.error(`unknown command: ${cmd}`); process.exit(1); }

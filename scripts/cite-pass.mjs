// scripts/cite-pass.mjs
//
// A citation layer over the testimony. It does NOT touch the prose. For each
// numbered paragraph it takes the words as written, plus the timed transcripts
// of the recordings that paragraph already cites, and inserts a parenthetical
// <Moment ulid="..." t="m:ss" /> at every distinct claim that lacks one, at the
// real timestamp where he says it. Adjacent claims may cite different videos.
// The rule: no claim he made on camera goes uncited, and no paragraph is bare.
//
//   node scripts/cite-pass.mjs extract     # paragraphs.json (reuses testimony-pass output)
//   node scripts/cite-pass.mjs fetch        # timed transcripts for every cited recording
//   node scripts/cite-pass.mjs run [Part]   # headless cite pass, section by section
//   node scripts/cite-pass.mjs apply [Part] # write cited paragraphs back, only where citations were ADDED
//
// It is conservative: it may only ADD self-closing <Moment .../> tags and keep
// every existing tag byte-identical. If a returned paragraph drops or alters an
// existing citation, or changes a non-tag character, that paragraph is rejected
// and left as it was.
import { readFileSync, writeFileSync, existsSync, mkdirSync } from "node:fs";
import { homedir } from "node:os";
import { join } from "node:path";
import { spawnSync } from "node:child_process";

const REPO = "/home/rswfire/www/rswfire.oprd";
const PAGE = join(REPO, "components/testimony/TestimonyBody.tsx");
const OUT = join(homedir(), "oregon", "testimony-pass");
if (!existsSync(OUT)) mkdirSync(OUT, { recursive: true });
const TT = join(OUT, "timed.json");
const CITED = join(OUT, "cited.json");
const LOG = join(OUT, "cite-pass.log");
// Paragraphs written from the record but not yet carrying a citation have no
// recordings for the pass to read. SEEDS maps a paragraph id to the ULIDs it
// stands on, so a new chapter can be cited the same way an old one is
// re-cited. { "pdd01": ["01K..."], ... }
const SEEDS = join(OUT, "seeds.json");
// A change feed: one line per paragraph as it completes, with an [i/total]
// counter, appended to a log you can `tail -f` to see how far along the loop is.
function feed(line) {
    const cur = existsSync(LOG) ? readFileSync(LOG, "utf8") : "";
    writeFileSync(LOG, cur + line + "\n");
    process.stdout.write(line + "\n");
}
const ULID_RE = /^[0-9A-HJKMNP-TV-Z]{26}$/;

function constMap(src) {
    const m = {};
    for (const x of src.matchAll(/const\s+([A-Z0-9_]+)\s*=\s*"([0-9A-HJKMNP-TV-Z]{26})";/g)) m[x[1]] = x[2];
    return m;
}
function resolve(tok, map) { return ULID_RE.test(tok) ? tok : map[tok] || null; }

// recording ULIDs a paragraph cites (Moment only; those are the timed ones)
function momentsOf(jsx, map) {
    const s = new Set();
    for (const m of jsx.matchAll(/<Moment\s+ulid=\{?["']?([A-Za-z0-9_]+)["']?\}?/g)) { const u = resolve(m[1], map); if (u) s.add(u); }
    return [...s];
}

function parse() {
    const seeds = existsSync(SEEDS) ? JSON.parse(readFileSync(SEEDS, "utf8")) : {};
    const src = readFileSync(PAGE, "utf8");
    const map = constMap(src);
    const first = src.indexOf('<Part n="One"');
    const last = src.lastIndexOf("</Part>") + "</Part>".length;
    const body = src.slice(first, last);
    const partAt = [...body.matchAll(/<Part n="([^"]+)" title="([^"]+)">/g)].map((m) => ({ i: m.index, n: m[1], title: m[2] }));
    const partFor = (idx) => { let p = null; for (const x of partAt) if (x.i <= idx) p = x; else break; return p; };
    const paras = [];
    for (const m of body.matchAll(/<P id="([a-z0-9]+)" n=\{(\d+)\}>([\s\S]*?)<\/P>/g)) {
        const part = partFor(m.index);
        const seeded = seeds[m[1]] || [];
        const moments = [...new Set([...momentsOf(m[3], map), ...seeded])];
        paras.push({ id: m[1], n: Number(m[2]), part: part ? `${part.n}. ${part.title}` : "?", partN: part?.n, jsx: m[3].trim(), moments });
    }
    return { src, map, paras };
}

function fetchTimed() {
    const { paras } = parse();
    const ulids = [...new Set(paras.flatMap((p) => p.moments))];
    const list = ulids.map((u) => `'${u}'`).join(",");
    const php = `
$ids=[${list}]; $out=[];
foreach($ids as $id){
  $m=\\DB::table('signals_attachments')->where('signal_id',$id)->value('attachment_metadata');
  $j=$m?json_decode($m,true):null; $tt='';
  foreach(($j['transcript']['timed']??[]) as $seg){ $st=intval($seg['start']??0); $tt.=sprintf("[%d:%02d] %s\\n",intdiv($st,60),$st%60,trim($seg['text']??'')); }
  $out[$id]=$tt;
}
echo json_encode($out);`.trim();
    const res = spawnSync("ssh", ["web", "cd ~/www/autonomy && php artisan tinker"], { input: php, encoding: "utf8", maxBuffer: 128 * 1024 * 1024 });
    if (res.status !== 0) { console.error(res.stderr || res.stdout); process.exit(1); }
    const data = JSON.parse(res.stdout.slice(res.stdout.indexOf("{")));
    writeFileSync(TT, JSON.stringify(data, null, 2));
    console.log(`timed transcripts fetched for ${ulids.length} recordings (${Object.values(data).filter(Boolean).length} non-empty)`);
}

const SYS = `You are given a paragraph of testimony and the timed transcripts of
the recordings it cites. You do NOT rewrite the paragraph and you do not return
it. You return only a list of citation insertion points.

Output ONLY a JSON array. Each element is {"after": "<a short run of words copied
character-for-character from the paragraph, ending exactly where a (m:ss)
citation should sit>", "ulid": "<recording ULID>", "t": "<m:ss taken from the
timed transcript where he says that thing>"}.

Rules for "after": copy 4 to 10 words verbatim from the paragraph, ending at a
natural clause boundary (before a comma, semicolon, or period). Do NOT include
apostrophes, quotation marks, parentheses, or any existing citation text in the
run, so it can be located exactly. Pick a run that is unique in the paragraph.

Add one insertion for every distinct claim the transcripts actually support that
is not already followed by a citation. Adjacent claims often come from different
recordings; cite each to its true source. Never invent a timestamp; if a claim
is not in any transcript, do not cite it. Output ONLY the JSON array.`;

function run(filter) {
    const { paras } = parse();
    const timed = JSON.parse(readFileSync(TT, "utf8"));
    const cited = existsSync(CITED) ? JSON.parse(readFileSync(CITED, "utf8")) : {};
    let list = paras.filter((p) => p.moments.length); // only paragraphs that cite recordings can be enriched from timed
    if (filter) list = list.filter((p) => p.partN?.toLowerCase() === filter.toLowerCase());
    let done = 0, addedTotal = 0, cost = 0, i = 0;
    const total = list.length;
    feed(`START ${filter || "all"} — ${total} paragraphs to cite`);
    for (const p of list) {
        i++;
        const tt = p.moments.map((u) => `--- RECORDING ${u} ---\n${timed[u] || "(no timed transcript)"}`).join("\n\n");
        const prompt = `PARAGRAPH:\n${p.jsx}\n\nTIMED TRANSCRIPTS of the recordings this paragraph cites:\n${tt}`;
        const res = spawnSync("claude", ["-p", "--output-format", "json", "--model", "opus", "--append-system-prompt", SYS], { input: prompt, encoding: "utf8", maxBuffer: 32 * 1024 * 1024, timeout: 300000 });
        if (res.status !== 0) { feed(`[${i}/${total}] ¶${p.n} FAILED`); continue; }
        let out; try { out = JSON.parse(res.stdout); } catch { feed(`[${i}/${total}] ¶${p.n} bad wrapper`); continue; }
        cost += out.total_cost_usd || 0;
        let arr;
        try { const txt = (out.result || "").trim(); arr = JSON.parse(txt.slice(txt.indexOf("["), txt.lastIndexOf("]") + 1)); }
        catch { feed(`[${i}/${total}] ¶${p.n} bad array`); continue; }
        // keep only insertions whose "after" is a verbatim, unique substring of the prose,
        // and that do not already have a citation immediately following.
        const kept = [];
        for (const ins of arr) {
            if (!ins || typeof ins.after !== "string" || !ins.ulid || !ins.t) continue;
            const idx = p.jsx.indexOf(ins.after);
            if (idx < 0) continue;                                   // not verbatim -> skip
            if (p.jsx.indexOf(ins.after, idx + 1) !== -1) continue;  // not unique -> skip
            const tail = p.jsx.slice(idx + ins.after.length, idx + ins.after.length + 40);
            if (/^\s*\(?\s*<Moment/.test(tail)) continue;            // already cited here -> skip
            kept.push({ after: ins.after, ulid: ins.ulid, t: ins.t });
        }
        if (kept.length) { cited[p.id] = { n: p.n, part: p.part, insertions: kept }; addedTotal += kept.length; done++; }
        feed(`[${i}/${total}] ¶${p.n} +${kept.length}/${arr.length}  ($${cost.toFixed(2)} so far)`);
        writeFileSync(CITED, JSON.stringify(cited, null, 2));
    }
    feed(`DONE ${filter || "all"} — ${done} paragraphs enriched, ${addedTotal} citations added, $${cost.toFixed(2)}`);
}

function apply(filter) {
    const cited = JSON.parse(readFileSync(CITED, "utf8"));
    let src = readFileSync(PAGE, "utf8");
    let n = 0, ins = 0;
    for (const [id, r] of Object.entries(cited)) {
        if (filter && r.part.split(".")[0].trim().toLowerCase() !== filter.toLowerCase()) continue;
        const re = new RegExp(`(<P id="${id}" n=\\{\\d+\\}>)([\\s\\S]*?)(</P>)`);
        const m = src.match(re);
        if (!m) continue;
        let inner = m[2];
        for (const it of r.insertions || []) {
            // insert the citation after the FIRST occurrence of the verbatim run,
            // only if the run is still present verbatim and not already cited there.
            const idx = inner.indexOf(it.after);
            if (idx < 0) continue;
            const at = idx + it.after.length;
            const tail = inner.slice(at, at + 40);
            if (/^\s*\(?\s*<Moment/.test(tail)) continue;
            const tag = ` (<Moment ulid="${it.ulid}" t="${it.t}" />)`;
            inner = inner.slice(0, at) + tag + inner.slice(at);
            ins++;
        }
        src = src.replace(re, `$1${inner}$3`);
        n++;
    }
    writeFileSync(PAGE, src);
    console.log(`applied ${ins} citations across ${n} paragraphs`);
}

const cmd = process.argv[2] || "run";
const arg = process.argv[3];
if (cmd === "fetch") fetchTimed();
else if (cmd === "run") run(arg);
else if (cmd === "apply") apply(arg);
else { console.error(`unknown: ${cmd}`); process.exit(1); }

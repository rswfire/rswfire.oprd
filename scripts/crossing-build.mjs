// scripts/crossing-build.mjs
//
// Build THE CROSSING one leg at a time, the way he insisted: not in a single
// pass, because a single pass flattens. Each leg runs three headless-Claude
// stages in sequence, and the story accumulates as it goes:
//
//   1. STUDY    read every recording's full transcript and reflection for the
//               leg, plus the cluster arc, and produce a dense brief: what
//               happened geographically, and what he TALKED ABOUT out loud on
//               that stretch. The crossing is a month with the comments turned
//               off, so he is unpacking everything he never says — hatred in
//               Wyoming, politics, the man who changed his mind. Surface it.
//   2. WRITE    write the leg's paragraph(s) from the brief and the trace, in
//               his voice, with the story so far in hand so it continues rather
//               than restarts.
//   3. COHERE   check the draft against the story so far: chronological, no
//               jumping ahead, no flash-forwards, no repeating an earlier leg,
//               the metamorphosis spine intact. Revise.
//
// Output: ~/oregon/testimony-pass/crossing-legs.json and a review markdown.
// Splicing into the page is a separate, explicit step.
import { readFileSync, writeFileSync, existsSync, mkdirSync } from "node:fs";
import { homedir } from "node:os";
import { join } from "node:path";
import { spawnSync } from "node:child_process";

const OUT = join(homedir(), "oregon", "testimony-pass");
if (!existsSync(OUT)) mkdirSync(OUT, { recursive: true });
const DATA = join(OUT, "crossing-data.json");
const LEGSOUT = join(OUT, "crossing-legs.json");

// The legs, in order. Each is a stretch of the drive with its recordings
// (Moment citations) and traces (TraceCite). Cluster ids give the arc.
const WESTWARD = "01M1A76S6135BH1S7D5QYDF7H8";
const LEGS = [
    {
        key: "first-days", maxParas: "1 to 2",
        title: "First days, comments off",
        cluster: "01M1A73YG4NNA6EMQ62S13EV4N",
        signals: ["01J7VH95AR3P3WG9S4JWBQX7D9", "01J7WSHPQG28QH3PWPNTNESJ40"],
        traces: [],
        note: "Sep 13-16. He had told the audience to leave and turned comments off before departure. The bear that wasn't (Sep 16) is the readiness test. This leg opens the meaning: unwatched, he begins saying what he never says.",
    },
    {
        key: "kansas-wyoming", maxParas: "2 to 3",
        title: "Kansas to the Wyoming line",
        cluster: "01M1A742K4KVMECWX2SAC0GK4X",
        signals: ["01J8BH6V6GJ6ART855S43T7MVX", "01J8H8VWM89QEZNZB4KDR41RT3", "01J8J43R1G8WW3CRBV0WS16W7Y", "01J8NB2118QT8DQK460FZ3R837", "01J8Q5R7JGK3KM3B62416VXB40"],
        traces: ["01KZ3B0SF05V92768BQ4G3DMAF"],
        note: "Sep 21-26. The rig leak learned; teeth and worth; Chadron restock; integration vs fragmentation; then Wyoming, where he talks about hatred and Matthew Shepard, and drives through rather than around. Politics surface here too. This is dense; more than one paragraph is warranted.",
    },
    {
        key: "high-country", maxParas: "2",
        title: "Into the high country",
        cluster: "01M1A745AVBG7WYBCK50M1661G",
        signals: ["01J8X4TSK0F0R1GCV5748XSE84", "01J8XT857G2D7M88YJ6B51BGVH", "01J909B3F005XP4AKX6KWZ1HRK", "01J90JGP0038HDF03MC710KSDE", "01J92ND90RHADWF5N4BF77702C", "01J94JAQTR8FYH20E2KDXWSF49"],
        traces: ["01KZ3B0YKT44P9MX6FWYHE8CEJ", "01KZ3B10QP3X5XCJFM8Z93DH9N"],
        note: "Sep 28-Oct 1. First boondocking; the man at the gas station who changed his mind about Wyoming, who he was fascinated by; Split Rock, where the rig became the destination; the 360-degree night sky at the wagon-trail marker; and here he stops posting his location.",
    },
    {
        key: "ruby-mountains", maxParas: "3 to 4",
        title: "Nevada, the Ruby Mountains, a week",
        cluster: "01M1A746XGKEK0VWQF2AZT9QTB",
        signals: ["01J95P6X1GE6SY23PZH8XA723D", "01J9C5B6GGDJP3W0G7QVQJQK9W", "01J9CFWGER2ZJMMG1QRM0APB5D", "01J9D5GRSRHZQEMNEW9Z4GD7CB", "01J9FGHF28ZJRJ6PW4P0PX01D4", "01J9FTGG1RNTANCVHEMZ64YBDS", "01J9HQKZ80M1WXKKCREB5N57YG", "01J9KV54F8BS1Q1TVXHS7XB85W", "01J9MEKS90D83P37QEWJ29YG06"],
        traces: [],
        note: "Oct 2-7. He spent a week on this mountain and it matters more than any other leg. The grade eight times, integration not conquest, the medication set down, the battery fault that was a wire never installed, and the decision: Nevada was refinement, Oregon was transformation. Give it the room. Multiple paragraphs.",
    },
    {
        key: "run-to-water", maxParas: "1",
        title: "The run to the water",
        cluster: WESTWARD,
        signals: ["01J9W0J17GM92Z36P2TPRVZYDX"],
        traces: ["01KZ3B12V6JM386AWZ9DREEFPV", "01KZ3B156PGD0292YHKMHWEQ5K", "01KZ3B182EKCEC3G4KQ51427GK", "01KZ3B1AA3XHEA5JZRV2JVB2SP"],
        note: "Oct 7-10. Out of Nevada, across Lake County to Klamath Falls, down through Curry County, the last miles to the southern Oregon coast, arriving in fog. MUST end on this exact sentence, verbatim, as its own final sentence: By the time he arrived on the coast, he was not the same man.",
    },
];

function tinker(php) {
    const res = spawnSync("ssh", ["web", "cd ~/www/autonomy && php artisan tinker"], { input: php, encoding: "utf8", maxBuffer: 128 * 1024 * 1024 });
    if (res.status !== 0) throw new Error(res.stderr || res.stdout);
    return res.stdout;
}

function fetchData() {
    const allSignals = [...new Set(LEGS.flatMap((l) => l.signals))];
    const allClusters = [...new Set([WESTWARD, ...LEGS.map((l) => l.cluster)])];
    const slist = allSignals.map((u) => `'${u}'`).join(",");
    const clist = allClusters.map((u) => `'${u}'`).join(",");
    const php = `
$sids=[${slist}]; $cids=[${clist}];
$out=['signals'=>[],'clusters'=>[]];
foreach($sids as $id){
  $s=\\DB::table('signals')->where('signal_id',$id)->first();
  $m=\\DB::table('signals_attachments')->where('signal_id',$id)->value('attachment_metadata');
  $j=$m?json_decode($m,true):null; $t=$j['transcript']['text']??'';
  $tt='';
  foreach(($j['transcript']['timed']??[]) as $seg){ $st=intval($seg['start']??0); $tt.=sprintf("[%d:%02d] %s\\n",intdiv($st,60),$st%60,trim($seg['text']??'')); }
  $refl=\\DB::table('reflections')->where('polymorphic_id',$id)->where('polymorphic_type','signal')->where('reflection_visibility','PUBLIC')->whereIn('reflection_type',['NARRATIVE','MIRROR'])->pluck('reflection_content','reflection_type');
  $out['signals'][$id]=['title'=>$s->signal_title??null,'timedText'=>$tt,'narrative'=>$refl['NARRATIVE']??null,'mirror'=>$refl['MIRROR']??null];
}
foreach($cids as $id){
  $c=\\DB::table('clusters')->where('cluster_id',$id)->first();
  $refl=\\DB::table('reflections')->where('polymorphic_id',$id)->where('polymorphic_type','cluster')->where('reflection_visibility','PUBLIC')->whereIn('reflection_type',['NARRATIVE','MIRROR'])->pluck('reflection_content','reflection_type');
  $out['clusters'][$id]=['title'=>$c->cluster_title??null,'narrative'=>$refl['NARRATIVE']??null,'mirror'=>$refl['MIRROR']??null];
}
echo json_encode($out);`.trim();
    const raw = tinker(php);
    const data = JSON.parse(raw.slice(raw.indexOf("{")));
    writeFileSync(DATA, JSON.stringify(data, null, 2));
    let tOK = 0, rOK = 0;
    for (const id of allSignals) { if (data.signals[id]?.timedText) tOK++; if (data.signals[id]?.narrative || data.signals[id]?.mirror) rOK++; }
    console.log(`fetched ${allSignals.length} signals (transcripts ${tOK}, reflections ${rOK}), ${allClusters.length} clusters`);
    return data;
}

function claude(system, prompt, label) {
    const res = spawnSync("claude", ["-p", "--output-format", "json", "--model", "opus", "--append-system-prompt", system], {
        input: prompt, encoding: "utf8", maxBuffer: 64 * 1024 * 1024, timeout: 600000,
    });
    if (res.status !== 0) throw new Error(`${label} failed: ${res.stderr || res.stdout}`);
    const out = JSON.parse(res.stdout);
    return { text: (out.result || "").trim(), cost: out.total_cost_usd || 0 };
}

const VOICE = `Write in Robert Samuel White's testimony voice. Plain declarative
sentences, subject-verb-fact, third person "he". No cleverness, no payoff
clauses, no closing turns, no em-dashes. Do not report the act of saying ("he
said", "he named", "he explained"); state what was true and what he did, and let
the citation carry that he said it on camera. Never mention his personal
finances. Never make him smaller than he is: a man who took his life apart on
purpose and crossed a continent alone.

The spine of THE CROSSING: right before leaving Kentucky he turned the comments
off and told his audience to go. So for a month, alone across the country with
his cat Bailey, he was talking to no one who could talk back. He calls it the
field. Unwatched, he finally unpacked everything he never says about the world.
Everything the field put in front of him he went toward, never around.`;

async function main() {
    const data = existsSync(DATA) ? JSON.parse(readFileSync(DATA, "utf8")) : fetchData();
    const results = existsSync(LEGSOUT) ? JSON.parse(readFileSync(LEGSOUT, "utf8")) : {};
    let storySoFar = "";
    let totalCost = 0;

    const STUDY_ONLY = process.argv[2] === "study";

    for (const leg of LEGS) {
        if (STUDY_ONLY && results[leg.key]?.study) { process.stdout.write(`\n=== LEG: ${leg.title} (study cached, skip) ===\n`); continue; }
        process.stdout.write(`\n=== LEG: ${leg.title} ===\n`);

        // 1. STUDY
        let src = `LEG: ${leg.title}\nCONTEXT: ${leg.note}\n\n`;
        const arc = data.clusters[WESTWARD];
        if (arc?.narrative) src += `THE WHOLE-CROSSING ARC (for orientation, do not retell):\n${arc.narrative}\n\n`;
        const cl = data.clusters[leg.cluster];
        if (cl?.narrative) src += `THIS LEG'S CLUSTER ARC:\n${cl.narrative}\n\n`;
        for (const id of leg.signals) {
            const s = data.signals[id];
            if (!s) continue;
            src += `--- RECORDING ${id}: ${s.title || ""} ---\n`;
            if (s.mirror) src += `MIRROR (his interior):\n${s.mirror}\n`;
            if (s.timedText) src += `TIMED TRANSCRIPT (each line is [m:ss] followed by what he said then; use these exact timestamps for citations):\n${s.timedText}\n`;
            src += `\n`;
        }
        const study = claude(
            `You are studying one leg of Robert Samuel White's cross-country drive so it can be written up faithfully. Read every timed transcript and reflection. Produce a dense brief: (1) what happened, geographically and in order; (2) what he TALKED ABOUT out loud on this stretch, especially the things he normally withholds — hatred, politics, grief, sexuality, people who changed his mind; (3) his interior, grounded in the MIRROR; (4) the specific, quotable details worth keeping (names, places, exact objects). For EVERY point you list, put the recording ULID and the [m:ss] timestamp where he says it, taken from the timed transcript, so it can be cited precisely. Do not write testimony prose. Write the brief.`,
            src, `study:${leg.key}`
        );
        totalCost += study.cost;
        process.stdout.write(`  studied ($${study.cost.toFixed(3)})\n`);

        if (STUDY_ONLY) {
            results[leg.key] = { ...(results[leg.key] || {}), title: leg.title, study: study.text };
            writeFileSync(LEGSOUT, JSON.stringify(results, null, 2));
            continue;
        }

        // 2. WRITE
        const traceLines = leg.traces.length ? `\nTRACES available to cite (a trace is a ROUTE; anchor <TraceCite ulid="..."> on driving/route language, never on an experience):\n${leg.traces.map((t) => `  ${t}`).join("\n")}\n` : "";
        const recLines = `\nRECORDINGS available to cite as <Moment ulid="ULID" t="0:01">phrase</Moment> (or self-closing):\n${leg.signals.map((s) => `  ${s} — ${data.signals[s]?.title || ""}`).join("\n")}\n`;
        const writePrompt = `THE STORY SO FAR (the legs already written; continue from here, do not repeat or restart, do not retell any event already covered):\n${storySoFar || "(this is the first leg of the crossing)"}\n\nBRIEF FOR THIS LEG (each point carries the recording ULID and [m:ss] where he says it):\n${study.text}\n${traceLines}${recLines}
CITATION RULE, the point of this whole record. Cite EVERY distinct factual claim at the exact recording and timestamp where he says it, using the ULID and [m:ss] from the brief. The form is a parenthetical self-closing tag right after the clause: <Moment ulid="ULID" t="m:ss" />. Adjacent claims in the same sentence often cite DIFFERENT recordings, and that is correct — cite each to its true source, do not collapse them onto one. No paragraph may be left with zero citations; a paragraph that states several things carries several timestamps. You may also link a phrase for the primary beat: <Moment ulid="ULID" t="m:ss">phrase</Moment>. Never invent a timestamp; if the brief has no timestamp for a claim, cite the nearest true one or leave that clause out. Traces are cited with <TraceCite ulid="ULID">route phrase</TraceCite> on driving language only.

Write this leg TIGHT: ${leg.maxParas || "1 to 2"} paragraphs, no more. State each thing once. Ground every interior claim in the brief. Output ONLY the paragraph(s) as JSX, each wrapped in <p>...</p>. ${leg.note.includes("verbatim") ? "End on the exact required sentence, with its own citation." : ""}`;
        const draft = claude(VOICE, writePrompt, `write:${leg.key}`);
        totalCost += draft.cost;
        process.stdout.write(`  wrote ($${draft.cost.toFixed(3)})\n`);

        // 3. COHERE
        const coherePrompt = `THE STORY SO FAR:\n${storySoFar || "(none; this is the first leg)"}\n\nDRAFT OF THIS LEG:\n${draft.text}\n\nRevise the draft. Enforce: strictly chronological and geographic, moving west; NO jumping ahead in time (no "two years later", no flash-forwards); NO repeating any event the story so far already covered, and no repeating a fact within this leg; clean transitions; the metamorphosis spine intact (comments off, unwatched, saying what he never says, going toward what the field presents); TIGHT, ${leg.maxParas || "1 to 2"} paragraphs. Every paragraph must carry citations; every distinct claim keeps its <Moment ulid t="m:ss" /> at its true source, and adjacent claims may cite different recordings. Do not drop, merge, or fabricate any citation. Keep his voice. Output ONLY the final paragraph(s) as JSX in <p>...</p>.`;
        const final = claude(VOICE, coherePrompt, `cohere:${leg.key}`);
        totalCost += final.cost;
        process.stdout.write(`  cohered ($${final.cost.toFixed(3)})\n`);

        results[leg.key] = { title: leg.title, study: study.text, jsx: final.text };
        storySoFar += `\n\n[${leg.title}]\n` + final.text.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
        writeFileSync(LEGSOUT, JSON.stringify(results, null, 2));
    }
    console.log(`\nDONE. total $${totalCost.toFixed(2)}  ->  ${LEGSOUT}`);
}

main().catch((e) => { console.error(e.message); process.exit(1); });

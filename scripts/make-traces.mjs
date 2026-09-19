// scripts/make-traces.mjs
//
// Builds data/traces.ts — the GPS traces the testimony cites, as the realm
// holds them.
//
//     node scripts/make-traces.mjs            # list candidates
//     node scripts/make-traces.mjs --write    # write data/traces.ts
//
// The geometry is simplified and normalised into a unit box at build time, so
// the page draws the path as plain SVG with no map library and no tile
// server. The archive makes no third-party request to show a man's walk.
//
// Coordinates are rounded to five decimals (about a metre) and the raw
// latitude and longitude of the bounds are kept, so anyone can check the
// track against a map of their own choosing.
import { execFileSync } from "node:child_process";
import { writeFileSync } from "node:fs";
import { resolve } from "node:path";

const AUTONOMY = "/home/rswfire/www/autonomy";
const WRITE = process.argv.includes("--write");

// Traces the testimony cites, pinned to the day they were walked. He reuses
// names — "Sunday Lunch Hiking" is years of Sundays — so the date is part of
// the key.
const WANTED = [
    // The Sovereign Journey — the crossing, leg by leg
    { name: "Driving Kansas to Nebraska Toward Oregon", on: "2024-09-25" },
    { name: "First Time Boondocking", on: "2024-09-28" },
    { name: "Standing Under 360-Degree Night Sky Mid-Route West", on: "2024-09-29" },
    { name: "Deciding to Leave Nevada for the Oregon Coast", on: "2024-10-07" },
    { name: "Lake County to Klamath Falls", on: "2024-10-08" },
    { name: "Klamath Falls to Curry County", on: "2024-10-09" },
    { name: "Driving RV to the Southern Oregon Coast", on: "2024-10-10" },
    { name: "Thursday Afternoon Hiking", on: "2024-10-24" }, // Brookings
    { name: "Sunday Lunch Hiking", on: "2024-10-27" },       // Loeb
    { name: "Monday Afternoon Hiking", on: "2024-10-28" },   // Loeb
    { name: "Sacred Journey", on: "2024-11-04" },            // Humbug Mountain
    { name: "Cape Sebastian", on: "2024-11-05" },
    { name: "Friday Morning Hiking", on: "2024-11-15" },     // Cape Blanco
    { name: "Cape Sebastian with Chad", on: "2024-11-16" },
    { name: "First Visit to Honeyman State Park", on: "2025-01-04" },
    { name: "Fingerprinted for Forest Service", on: "2025-04-14" },

    // February at Honeyman — the beach while the file was being written
    { name: "Tuesday Morning Hiking", on: "2025-02-25" },    // South Jetty
    { name: "Wednesday Morning Hiking", on: "2025-02-26" },  // Siltcoos Beach
    { name: "Wednesday Lunch Hiking", on: "2025-02-26" },    // Beverly Beach

    // Displaced — the first morning on the ground he still lives on
    { name: "Saturday Morning Hiking", on: "2025-04-05" },   // Siltcoos Beach

    // The Director and her Deputy
    { name: "Tahkenitch Creek with Wendy", on: "2025-08-31" },
    { name: "Thursday Lunch Activity", on: "2025-10-23" },   // Tahkenitch, seven miles
    { name: "Monday Lunch Activity", on: "2025-11-10" },     // the longest of the November walks
    { name: "Discovered Trail Flooded - Can't Get to Beach", on: "2025-12-27" },
    { name: "Friday Lunch Hiking", on: "2026-02-13" },       // the last day either of them wrote

];

// `--window 2024-10-01 2025-01-01` lists everything in a date range instead,
// for finding a trace whose name you do not know yet.
const wi = process.argv.indexOf("--window");
const WINDOW = wi > -1 ? process.argv.slice(wi + 1, wi + 3) : null;

const php = `<?php
use Illuminate\\Support\\Facades\\DB;
$c = DB::connection('pgsql_prod');
$rid = $c->table('realms')->where('realm_slug','rswfire')->value('realm_id');
$wanted = json_decode(${JSON.stringify(JSON.stringify(WANTED))}, true);
$window = json_decode(${JSON.stringify(JSON.stringify(WINDOW))}, true);

$where = [];
if ($window) {
    $where[] = "stamp_started >= " . $c->getPdo()->quote($window[0])
             . " AND stamp_started < " . $c->getPdo()->quote($window[1]);
} else {
    foreach ($wanted as $w) {
        $where[] = "(trace_name = " . $c->getPdo()->quote($w['name'])
                 . " AND stamp_started::date = " . $c->getPdo()->quote($w['on']) . "::date)";
    }
}
$sql = "select trace_id, trace_name, trace_description, trace_visibility, activity_id,
          to_char(stamp_started,'YYYY-MM-DD\\"T\\"HH24:MI:SS') started,
          to_char(stamp_finished,'YYYY-MM-DD\\"T\\"HH24:MI:SS') finished,
          ST_Length(trace_line::geography)/1609.344 miles,
          ST_NPoints(trace_line::geometry) npoints,
          ST_AsGeoJSON(ST_Simplify(trace_line::geometry, 0.00004)) simplified,
          ST_YMin(trace_line::geometry) ymin, ST_YMax(trace_line::geometry) ymax,
          ST_XMin(trace_line::geometry) xmin, ST_XMax(trace_line::geometry) xmax
        from traces
        where realm_id = ? and (" . implode(' OR ', $where) . ")
        order by stamp_started";
$rows = $c->select($sql, [$rid]);

$out = [];
foreach ($rows as $r) {
    $geo = json_decode($r->simplified, true);
    $coords = $geo['coordinates'] ?? [];
    if ($geo && ($geo['type'] ?? '') === 'MultiLineString') {
        $flat = [];
        foreach ($coords as $part) { foreach ($part as $pt) { $flat[] = $pt; } }
        $coords = $flat;
    }
    $out[] = [
        'id' => $r->trace_id,
        'name' => $r->trace_name,
        'about' => $r->trace_description,
        'visibility' => $r->trace_visibility,
        'started' => $r->started,
        'finished' => $r->finished,
        'miles' => round((float) $r->miles, 2),
        'points' => (int) $r->npoints,
        'bounds' => ['s' => (float) $r->ymin, 'n' => (float) $r->ymax,
                     'w' => (float) $r->xmin, 'e' => (float) $r->xmax],
        'coords' => $coords,
    ];
}
echo "\\n@@JSON@@" . json_encode($out) . "@@END@@\\n";
`;

const tmp = "/tmp/claude-1000/-home-rswfire/traces-query.php";
writeFileSync(tmp, php);
const raw = execFileSync("php", ["artisan", "tinker", tmp], {
    cwd: AUTONOMY, encoding: "utf8", maxBuffer: 128 * 1024 * 1024,
});
const m = raw.match(/@@JSON@@([\s\S]*?)@@END@@/);
if (!m) { console.error(raw.slice(-2000)); throw new Error("no JSON payload"); }
const traces = JSON.parse(m[1]);

for (const t of traces) {
    console.log(
        `  ${(t.started || "").slice(0, 10)}  ${t.visibility.padEnd(9)} ` +
        `${String(t.miles).padStart(6)} mi  ${String(t.points).padStart(5)} pts  ` +
        `${((t.bounds.s + t.bounds.n) / 2).toFixed(4)},${((t.bounds.w + t.bounds.e) / 2).toFixed(4)}  ` +
        `${(t.started || "").slice(11, 16)}-${(t.finished || "").slice(11, 16)}  ${t.name}`
    );
}
if (!WRITE) { console.log("\n(dry run — pass --write to emit data/traces.ts)"); process.exit(0); }

// Normalise each path into a 0..1 box, y flipped for SVG, aspect corrected
// for latitude so the shape is not stretched.
for (const t of traces) {
    const { s, n, w, e } = t.bounds;
    const latSpan = Math.max(n - s, 1e-9);
    const lonSpan = Math.max(e - w, 1e-9) * Math.cos(((n + s) / 2) * Math.PI / 180);
    const span = Math.max(latSpan, lonSpan);
    t.path = t.coords.map(([lon, lat]) => [
        +(((lon - w) * Math.cos(((n + s) / 2) * Math.PI / 180)) / span).toFixed(5),
        +((n - lat) / span).toFixed(5),
    ]);
    t.aspect = +(lonSpan / span).toFixed(4);
    t.height = +(latSpan / span).toFixed(4);
    // Real geometry as [lat, lng] for a Leaflet polyline on a Mapbox basemap.
    t.line = t.coords.map(([lon, lat]) => [+lat.toFixed(5), +lon.toFixed(5)]);
    delete t.coords;
}

const header = `// data/traces.ts
//
// GPS traces from the realm, normalised for drawing. Generated — do not
// hand-edit:
//
//     node scripts/make-traces.mjs --write
//
// \`path\` is the simplified track projected into a unit box with y already
// flipped for SVG, so a page can draw it with no map library and no tile
// server. \`bounds\` keeps the real latitude and longitude so the track can be
// checked against any map.

export interface TraceRecord {
    id: string;
    name: string;
    about: string | null;
    visibility: string;
    started: string | null;
    finished: string | null;
    miles: number;
    points: number;
    bounds: { s: number; n: number; w: number; e: number };
    path: [number, number][];
    line: [number, number][];
    aspect: number;
    height: number;
}

export const REALM_TRACES: TraceRecord[] = `;

const OUT = resolve("data/traces.ts");
writeFileSync(OUT, header + JSON.stringify(traces, null, 1) + ";\n");
console.log(`\nwrote ${OUT}`);

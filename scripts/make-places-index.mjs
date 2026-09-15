// scripts/make-places-index.mjs
//
// Builds data/places.ts — the places named in the testimony, with
// what the realm knows about each one: where it is, when he was there, and
// which public recordings were made on that ground.
//
// The source is the realm's own places table, read through a Tinker script
// against prod. Run it from the repo root:
//
//     node scripts/make-places-index.mjs
//
// It writes the index and prints what it found. A place that resolves to
// nothing is reported rather than silently dropped, because a citation that
// cannot be checked is worse than no citation.
import { execFileSync } from "node:child_process";
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";

const AUTONOMY = "/home/rswfire/www/autonomy";
const OUT = resolve("data/places.ts");

// The names the testimony actually cites. Kept explicit: the realm holds
// hundreds of places and this page only speaks for the ones it names.
const WANTED = [
    "Cape Blanco", "Humbug Mountain", "Pistol River", "Brookings",
    "Cape Sebastian", "Whaleshead", "Bandon", "Port Orford",
    "Eel Lake", "William M. Tugman State Park", "Tugman",
    "Umpqua Lighthouse", "Siltcoos", "Honeyman", "Lagoon",
    "Beverly Beach", "Driftwood", "Tahkenitch", "Wax Myrtle", "Carter Lake",
    "Barren River Lake", "Land Between the Lakes", "Chimney Rock",
    "Mammoth Cave", "Smith Ridge",
];

const php = `<?php
use Illuminate\\Support\\Facades\\DB;
$c = DB::connection('pgsql_prod');
$rid = $c->table('realms')->where('realm_slug','rswfire')->value('realm_id');
$wanted = ${JSON.stringify(WANTED)};

$out = [];
foreach ($c->table('places')->where('realm_id', $rid)->get() as $p) {
    $keep = false;
    foreach ($wanted as $w) { if (stripos($p->place_name, $w) !== false) { $keep = true; break; } }
    if (!$keep) continue;

    // center is a PostGIS point; ask the database for the numbers rather
    // than decoding WKB here.
    $pt = $c->selectOne('select ST_Y(center::geometry) lat, ST_X(center::geometry) lon from places where place_id = ?', [$p->place_id]);

    $sigs = $c->table('signals')->where('place_id', $p->place_id)
        ->where('signal_visibility', 'PUBLIC')
        ->orderBy('stamp_created')
        ->get(['signal_id','signal_title','stamp_created']);

    $out[] = [
        'id'    => $p->place_id,
        'name'  => $p->place_name,
        'lat'   => $pt->lat ?? null,
        'lon'   => $pt->lon ?? null,
        'about' => $p->place_description ? mb_substr($p->place_description, 0, 600) : null,
        'first' => $sigs->first()->stamp_created ?? null,
        'last'  => $sigs->last()->stamp_created ?? null,
        'count' => $sigs->count(),
        'recordings' => $sigs->take(12)->map(fn ($s) => [
            'u' => $s->signal_id,
            'd' => substr($s->stamp_created, 0, 10),
            't' => $s->signal_title,
        ])->values(),
    ];
}
echo "\\n@@JSON@@" . json_encode($out) . "@@END@@\\n";
`;

const tmp = "/tmp/claude-1000/-home-rswfire/places-query.php";
mkdirSync(dirname(tmp), { recursive: true });
writeFileSync(tmp, php);

const raw = execFileSync("php", ["artisan", "tinker", tmp], {
    cwd: AUTONOMY,
    encoding: "utf8",
    maxBuffer: 64 * 1024 * 1024,
});

const m = raw.match(/@@JSON@@([\s\S]*?)@@END@@/);
if (!m) {
    console.error(raw.slice(-2000));
    throw new Error("no JSON payload returned");
}
const places = JSON.parse(m[1]);
places.sort((a, b) => a.name.localeCompare(b.name));

const header = `// data/places.ts
//
// The places the testimony names, as the realm knows them: the point, the
// span he was there, and the public recordings attached to that ground.
// Generated — do not hand-edit:
//
//     node scripts/make-places-index.mjs
//
// Only PUBLIC recordings are listed, so citing a place can never surface
// something that is not already open.

export interface PlaceRecording {
    u: string;   // ULID
    d: string;   // YYYY-MM-DD
    t: string;   // title
}

export interface PlaceRecord {
    id: string;
    name: string;
    lat: number | null;
    lon: number | null;
    about: string | null;
    first: string | null;
    last: string | null;
    count: number;
    recordings: PlaceRecording[];
}

export const REALM_PLACES: PlaceRecord[] = `;

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, header + JSON.stringify(places, null, 4) + ";\n");

console.log(`places: ${places.length}`);
for (const p of places) {
    console.log(
        `  ${p.name.padEnd(38)} ${p.count.toString().padStart(3)} public  ` +
        `${p.first ? p.first.slice(0, 10) : "—"} → ${p.last ? p.last.slice(0, 10) : "—"}  ` +
        `${p.lat ? `${(+p.lat).toFixed(4)},${(+p.lon).toFixed(4)}` : "no point"}`
    );
}
const missing = WANTED.filter((w) => !places.some((p) => p.name.toLowerCase().includes(w.toLowerCase())));
if (missing.length) console.log(`\nno place record for: ${missing.join(", ")}`);

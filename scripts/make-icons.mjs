// Draws the site's icons from its emblem, Lucide's park, the icon in the
// header: the favicon (SVG and ICO), the touch icon, and the image a shared
// link shows (Open Graph, 1200 by 630). Run by hand when the emblem or the
// header's lines change; the images are committed. The share image's
// lettering needs Open Sans installed where it runs.
//
//   node scripts/make-icons.mjs

import { writeFile } from "node:fs/promises";
import sharp from "sharp";

const EMERALD = "#047857";
const INK = "#0f172a";
const SLATE = "#475569";

// park, on its 24-unit grid.
const EMBLEM = (stroke, width) => `
    <g fill="none" stroke="${stroke}" stroke-width="${width}" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 18h10"/>
        <path d="M13.248 9.998A4.5 4.5 0 0 0 11.75 8.6V8a1 1 0 0 0-7.5 0 4.9 4.9 0 0 0 2.25 9H8"/>
        <path d="m15 14-2 6"/>
        <path d="m19 14 2 6"/>
        <path d="M21 14h-8"/>
        <path d="M8 20v-5.922a2 2 0 0 0-.586-1.414L6.5 11.75"/>
        <path d="M9.205 12.795 8 14"/>
        <circle cx="19" cy="6" r="2"/>
    </g>`;

// The emblem in white on an emerald tile, so it holds at sixteen pixels on any tab.
const tile = (size) => `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 32 32">
    <rect width="32" height="32" rx="7" fill="${EMERALD}"/>
    <g transform="translate(4 4)">${EMBLEM("#ffffff", 2)}</g>
</svg>`;

const og = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
    <rect width="1200" height="630" fill="#fafaf9"/>
    <rect y="606" width="1200" height="24" fill="${EMERALD}"/>
    <g transform="translate(96 175)">
        <rect width="240" height="240" rx="48" fill="${EMERALD}"/>
        <g transform="translate(36 36) scale(7)">${EMBLEM("#ffffff", 1.6)}</g>
    </g>
    <g font-family="Open Sans" fill="${INK}">
        <text x="392" y="252" font-size="56" font-weight="700" letter-spacing="1.5">OPRD VOLUNTEER ABUSE</text>
        <text x="394" y="300" font-size="27" font-weight="600" fill="${SLATE}">Oregon Parks &amp; Recreation Department</text>
        <text x="394" y="338" font-size="25" fill="${SLATE}">Under Director Lisa Sumption’s Stewardship</text>
        <text x="394" y="412" font-size="23" font-weight="700" letter-spacing="3" fill="${INK}">INDEPENDENTLY VERIFIABLE.</text>
        <text x="394" y="448" font-size="23" font-weight="700" letter-spacing="3" fill="${INK}">NEVER LEGALLY CHALLENGED.</text>
        <text x="394" y="484" font-size="23" font-weight="700" letter-spacing="3" fill="${INK}">NOT GOING AWAY.</text>
        <text x="394" y="560" font-size="24" font-weight="600" fill="${EMERALD}">oprdvolunteerabuse.org</text>
    </g>
</svg>`;

await writeFile("public/favicon.svg", tile(32));
await sharp(Buffer.from(tile(180))).png().toFile("public/apple-touch-icon.png");
await sharp(Buffer.from(tile(512))).png().toFile("public/icon-512.png");
await sharp(Buffer.from(og)).png().toFile("public/og.png");
console.log("public/favicon.svg, apple-touch-icon.png, icon-512.png, og.png");

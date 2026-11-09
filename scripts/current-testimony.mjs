// scripts/current-testimony.mjs
//
// The testimony's PDF at one address that never changes,
// /testimony-of-robert-samuel-white.pdf, always the current version: a copy
// of public/testimony-of-robert-samuel-white-v<version>.pdf for the first
// version in data/testimonyVersions.ts, made at every build. Other sites link
// here, so a new version reaches them the day it is deployed. The build
// stops if the current version has no PDF (npm run testimony:pdf makes it).

import { copyFileSync, existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const root = join(import.meta.dirname, "..");
const versions = readFileSync(join(root, "data", "testimonyVersions.ts"), "utf8");
const version = versions.match(/version:\s*"([^"]+)"/)?.[1];
if (!version) {
    console.error("current-testimony: no version in data/testimonyVersions.ts");
    process.exit(1);
}
const source = join(root, "public", `testimony-of-robert-samuel-white-v${version}.pdf`);
if (!existsSync(source)) {
    console.error(`current-testimony: version ${version} has no PDF; run npm run testimony:pdf`);
    process.exit(1);
}
copyFileSync(source, join(root, "public", "testimony-of-robert-samuel-white.pdf"));
console.log(`current-testimony: /testimony-of-robert-samuel-white.pdf is version ${version}`);

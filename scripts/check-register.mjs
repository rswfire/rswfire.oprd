// Register invariants, enforced at build time. A filing authored by the
// operator can never be a "letter" (Letter Received) — sent mail is "notice".
import { readFileSync } from "node:fs";
const s = readFileSync(new URL("../data/threads.ts", import.meta.url), "utf8");
const blocks = s.match(/\n {8}\{\n[\s\S]*?\n {8}\},/g) ?? [];
const bad = [];
for (const b of blocks) {
    if (/from: "Robert Samuel White"/.test(b) && /kind: "letter"/.test(b)) {
        bad.push(b.match(/id: "([^"]+)"/)?.[1]);
    }
}
if (bad.length) {
    console.error("REGISTER CHECK FAILED — sent filings marked as received:", bad.join(", "));
    process.exit(1);
}
console.log("register check: clean");

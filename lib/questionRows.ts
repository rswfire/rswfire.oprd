// Each agency's exchange, resolved from its question's register: the
// request, the acknowledgment, and every message after, oldest first. A ULID
// is its time, so sorting the ids sorts the messages.

import type { Letter } from "@/components/TrackerTable";
import type { StateAgency, TrackerEntry } from "@/data/tracker";
import { THREADS } from "@/data/threads";

export function rowsFor(slug: string, agencies: (StateAgency & { entry: TrackerEntry })[]) {
    const thread = THREADS.find((t) => t.slug === slug);
    if (!thread) throw new Error(`public questions: no register ${slug}`);
    const filings = new Map(thread.filings.map((f) => [f.ulid, f]));
    return agencies.map((a) => {
        const e = a.entry;
        const ids = [e.sent?.doc?.ulid, e.acknowledged?.doc?.ulid, ...(e.correspondence ?? [])]
            .filter((u): u is string => !!u);
        const letters: Letter[] = [...new Set(ids)].sort().map((u) => {
            const f = filings.get(u);
            if (!f) throw new Error(`public questions: ${a.slug} cites ${u}, not in ${slug}`);
            return { ulid: f.ulid, d: f.d, date: f.date, time: f.time, kind: f.kind, from: f.from, to: f.to, title: f.title, summary: f.summary };
        });
        return { ...a, letters };
    });
}

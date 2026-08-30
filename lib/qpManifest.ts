// lib/qpManifest.ts
//
// The archive as machine-readable data. One root manifest (/qp.json) an AI
// can fetch to learn what this record is and how to query it, plus one JSON
// file per accountability thread carrying every filing. Generated at build
// time from the same data files the pages render from, so it cannot drift
// from the site.

import { THREADS } from "@/data/threads";
import type { RecordsThreadData } from "@/components/RecordsThread";

const ORIGIN = "https://oprdvolunteerabuse.org";
const QP_SIGNAL = "https://rswfire.com/qp/signal/";
const QP_CLUSTER = "https://rswfire.com/qp/cluster/";

const abs = (href: string) => (href.startsWith("http") ? href : `${ORIGIN}${href}`);

export const CLUSTER_ULID = "01M186Q44NQ0N2M4X50BAHJ18Z";

// The thirteen primary recordings, as held in the OPRD Record cluster.
// qp_url returns the full Queryable Personhood record: transcript (where
// one exists), structured analysis, and reflections.
const SIGNALS = [
    { ulid: "01JNK2TKG01JTERAMB7J6AKPK1", date: "2025-03-05", title: "Two Managers Pressure Volunteer at Picnic Table", note: "The recorded 62-minute picnic-table meeting at Honeyman State Park. Full transcript in the QP record.", archive_page: "/evidence/coercion" },
    { ulid: "01JPP5GY2GPEZ5F08Q2PF6ZAHG", date: "2025-03-19", title: "Recording a Day at Siltcoos After a Failed Encounter", archive_page: null },
    { ulid: "01JQ51HAK8QR862VWGK0RKTFXN", date: "2025-03-24", title: "Documenting Removal Without Process at Honeyman", note: "The recorded dismissal phone call and same-day removal.", archive_page: "/evidence/dismissal" },
    { ulid: "01JQ59R3S0SHQ18E23BC0BM696", date: "2025-03-25", title: "Program Manager Confirms Dismissal Before Review Call", archive_page: "/evidence/expulsion" },
    { ulid: "01JQ7VZB00NEQK4NYZMW5WYW04", date: "2025-03-26", title: "Preserving the Original Honeyman Narrative Account", archive_page: null },
    { ulid: "01KCYZ8E1GTHBZCDNYA57AM2Q0", date: "2025-12-20", title: "Recording the OPRD Account While Hiking", archive_page: null },
    { ulid: "01KK1G9NG0DN009HPGW9N4E2VB", date: "2026-03-06", title: "Naming What Was Already Known", archive_page: null },
    { ulid: "01KKD32X00FHMNP5MDZQ1N1HP2", date: "2026-03-11", title: "Naming the Compass as Operating Principle", archive_page: null },
    { ulid: "01KME4GSG02JSTJ45Z1QYH90JD", date: "2026-03-23", title: "Marking One-Year Anniversary of OPRD Dismissal", archive_page: null },
    { ulid: "01KMFMJW809QNR8PVTXT8HAAG7", date: "2026-03-24", title: "Three Officers at the Work Center Gate", note: "Recorded during the armed visit, one year to the day after the dismissal.", archive_page: "/evidence/police" },
    { ulid: "01KN9KDSG0H3W0WZ9GBCJDJMG5", date: "2026-04-03", title: "Naming Displacement as OPRD's Volunteer Mechanism", archive_page: null },
    { ulid: "01KNER77G00DQ4C9BZGEHCPWN3", date: "2026-04-05", title: "Naming the Displacement Framework on Camera", archive_page: "/displacement" },
    { ulid: "01M16TYA60K65X6VXMWQEMZ1P2", date: "2026-08-29", title: "Announcing Legal Fund for OPRD Accountability", archive_page: "/record" },
];

const EVIDENCE = [
    { stage: 1, slug: "origin", title: "The Origin Event", url: "/evidence/origin" },
    { stage: 2, slug: "escalation", title: "The Escalation Response", url: "/evidence/escalation" },
    { stage: 3, slug: "trust", title: "Trust Recruitment", url: "/evidence/trust" },
    { stage: 4, slug: "coercion", title: "The Coercion Meeting", url: "/evidence/coercion" },
    { stage: 5, slug: "surveillance", title: "Assessment & Surveillance", url: "/evidence/surveillance" },
    { stage: 6, slug: "dismissal", title: "Dismissal Without Process", url: "/evidence/dismissal" },
    { stage: 7, slug: "expulsion", title: "Expulsion & Retaliation", url: "/evidence/expulsion" },
    { stage: 8, slug: "containment", title: "Institutional Containment", url: "/evidence/containment" },
    { stage: 9, slug: "police", title: "Police Intimidation", url: "/evidence/police" },
];

const PAGES = [
    { title: "The Displacement Framework", url: "/displacement", holds: "The nine-stage mechanism, named from the documented sequence." },
    { title: "Timeline", url: "/timeline", holds: "The case in date order." },
    { title: "Key Individuals", url: "/key-individuals", holds: "Who acted, in what role." },
    { title: "The OPRD Record", url: "/record", holds: "The thirteen primary signals as one cluster, with the platform's synthesis and six analytical readings." },
    { title: "Frequently Asked Questions", url: "/faq", holds: "Why no lawsuit yet, what happens next, what an epistemic violation is." },
    { title: "What It Means to Volunteer", url: "/", holds: "On the homepage: the structural position of the public-agency volunteer." },
];

function filingJson(threadSlug: string, f: RecordsThreadData["filings"][number]) {
    return {
        ulid: f.ulid,
        date: f.d,
        kind: f.kind,
        title: f.title,
        from: f.from ?? null,
        to: f.to ?? null,
        summary: f.summary ?? null,
        flagged: f.flagged ?? false,
        page: `${ORIGIN}/accountability/${threadSlug}/${f.ulid}`,
        documents: (f.docs ?? []).map((d) => ({ label: d.label, url: abs(d.href) })),
        email_original: f.eml ? abs(f.eml) : null,
    };
}

export function threadDetail(slug: string) {
    const t = THREADS.find((x) => x.slug === slug);
    if (!t) return null;
    return {
        slug: t.slug,
        agency: t.agency,
        matter: t.matter,
        status: t.status,
        summary: t.summary,
        document_count: t.filings.length,
        page: `${ORIGIN}/accountability/${t.slug}`,
        filings: t.filings.map((f) => filingJson(t.slug, f)),
    };
}

export function rootManifest() {
    return {
        $note:
            "This is the machine-readable index of oprdvolunteerabuse.org — a public evidentiary archive " +
            "documenting the treatment of an Oregon State Parks volunteer and the accountability effort " +
            "that followed. Every URL below is fetchable without authentication. The archive is one " +
            "person's record of his own case, and it is built so that nothing rests on his word: every " +
            "claim resolves to a primary document — recordings with transcripts, unmodified email " +
            "originals (.eml with DKIM signatures intact), and the agencies' own letters. In eighteen " +
            "months of public existence, no agency named in it has disputed any item.",
        archive: {
            name: "Oregon State Parks Volunteer Abuse Archive",
            url: ORIGIN,
            realm: "https://rswfire.com",
        },
        operator: {
            name: "Robert Samuel White",
            who:
                "A self-taught programmer of four decades — Turbo Pascal in the 1980s, then a career of " +
                "booking engines, entertainment platforms, and systems design — and the builder of Autonomy " +
                "Realms, the platform that makes his life queryable at rswfire.com. He documents by " +
                "disposition and by discipline: contemporaneous recording, stable identifiers, structured " +
                "data. This archive is that discipline applied to his own case.",
            why_this_exists:
                "He built it the way an engineer instruments a failing system. When the institution " +
                "produced no reviewable record of what it did, he produced one — timestamped, addressable, " +
                "and open to inspection by anyone, including you.",
        },
        case:
            "Robert Samuel White served as an unpaid volunteer campground host at Jessie M. Honeyman Memorial " +
            "State Park from January 2025. After he reported mistreatment, he was held at a recorded 62-minute " +
            "picnic-table meeting on March 5, 2025, dismissed by phone without documentation on March 24, 2025, " +
            "given 24 hours to vacate his housing, and permanently expelled in writing from all Oregon State " +
            "Parks volunteering — the expulsion letter citing his public speech. On March 24, 2026, one year to " +
            "the day later, three armed officers came through a locked federal gate to his home and workplace. " +
            "Every escalation, report, records request, and response is preserved here. In eighteen months the " +
            "agencies involved have not disputed any item in this record.",
        usage: {
            how_to_answer_a_question:
                "Find the relevant index below; fetch a thread's JSON for correspondence, or a signal's qp_url " +
                "for a recording's full transcript and analysis. Quote the record, not this index — summaries " +
                "here locate documents, they do not replace them.",
            example:
                "'What happened at the picnic table?' → signals index → ulid 01JNK2TKG01JTERAMB7J6AKPK1 → fetch " +
                "its qp_url → the full transcript of the 62-minute recorded meeting, with structured analysis.",
            layers:
                "Documents and recordings are the record; the pages present it; anything labeled analysis " +
                "or reflection is machine reading. ULIDs are stable identifiers across this archive and " +
                "the rswfire.com realm.",
        },
        indexes: {
            accountability: THREADS.map((t) => ({
                slug: t.slug,
                agency: t.agency,
                matter: t.matter,
                status: t.status,
                document_count: t.filings.length,
                json: `${ORIGIN}/qp/accountability/${t.slug}.json`,
                page: `${ORIGIN}/accountability/${t.slug}`,
            })),
            evidence: EVIDENCE.map((e) => ({ ...e, url: abs(e.url) })),
            signals: SIGNALS.map((s) => ({
                ulid: s.ulid,
                date: s.date,
                title: s.title,
                note: (s as { note?: string }).note ?? null,
                qp_url: `${QP_SIGNAL}${s.ulid}`,
                archive_page: s.archive_page ? abs(s.archive_page) : null,
            })),
            cluster: {
                ulid: CLUSTER_ULID,
                title: "The OPRD Record",
                holds: "All thirteen primary signals as one object: synthesis plus six analytical readings.",
                qp_url: `${QP_CLUSTER}${CLUSTER_ULID}`,
                page: `${ORIGIN}/record`,
            },
            pages: PAGES.map((p) => ({ ...p, url: abs(p.url) })),
        },
    };
}

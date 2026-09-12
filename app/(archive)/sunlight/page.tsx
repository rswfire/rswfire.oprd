// app/(archive)/sunlight/page.tsx
//
// sunlight: their words, next to the record.
//
// The section promised in the September 12, 2026 morning note. Their
// documents about the volunteer, placed next to the permanent record,
// one at a time. The first is the Timeline of Events. The content is
// generated from the published response document; the list of cited,
// unproduced sources is shared with the records tracker — one source
// of truth.
import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import SectionPage from "@/components/SectionPage";
import { SUNLIGHT_SECTIONS } from "@/data/sunlight";
import { TIMELINE_CITED_SOURCES } from "@/data/recordsRequests";

export const metadata: Metadata = {
    title: "sunlight: their words, next to the record",
    description:
        "The Timeline of Events, answered entry by entry against the permanent record, with a link for every fact.",
};

// Minimal inline-markdown renderer for the generated content: [text](url)
// links and **bold**. Everything else passes through as written.
function md(text: string): ReactNode[] {
    const out: ReactNode[] = [];
    const pattern = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*/g;
    let last = 0;
    let m: RegExpExecArray | null;
    let key = 0;
    while ((m = pattern.exec(text)) !== null) {
        if (m.index > last) out.push(text.slice(last, m.index));
        if (m[1] !== undefined) {
            const href = m[2];
            const external = href.startsWith("http") && !href.includes("oprdvolunteerabuse.org");
            const local = href.replace("https://oprdvolunteerabuse.org", "");
            out.push(
                external ? (
                    <a key={key++} href={href} target="_blank" rel="noopener noreferrer" className="text-emerald-800 underline decoration-emerald-300 hover:text-emerald-600">
                        {m[1]}
                    </a>
                ) : (
                    <Link key={key++} href={local} className="text-emerald-800 underline decoration-emerald-300 hover:text-emerald-600">
                        {m[1]}
                    </Link>
                ),
            );
        } else if (m[3] !== undefined) {
            out.push(<strong key={key++}>{m[3]}</strong>);
        }
        last = pattern.lastIndex;
    }
    if (last < text.length) out.push(text.slice(last));
    return out;
}

export default function SunlightPage() {
    return (
        <SectionPage
            title="SUNLIGHT"
            subtitle="Their words, next to the record."
        >
            <div className="mt-4">
                The State of Oregon wrote a story about me. It was written in secret, over ten months,
                by the program manager who expelled me. It was never shown to me. It was handed to the
                state police, and armed officers came to my door.
            </div>
            <div className="mt-4">
                I paid for it, read it, and answered it the same day. Every entry below is theirs, in
                quotation marks, exactly as written. Then the record: the emails, the recordings, a
                permanent public link for every fact. Timestamps open the recordings at the cited
                second.
            </div>
            <div className="mt-4">
                The file{"’"}s own properties tell you what it is. Created March 25, 2025, at 7:02 in
                the morning {"—"} the day of the review call. Twenty-three revisions. 193 minutes of
                editing. A last edit on January 21, 2026, five days after my notice of a federal claim.
                Inside the Oregon State Police six weeks later.
            </div>
            <div className="mt-4">
                Their story survives only in the dark. This is sunlight.
            </div>
            <div className="mt-4 text-sm text-gray-500">
                The document as produced:{" "}
                <Link href="/accountability/osp/01M1M4WF78XJPEJJ48D1JZ4SJ8" className="text-emerald-800 underline decoration-emerald-300 hover:text-emerald-600">
                    the September 3 production
                </Link>
                . The response as sent:{" "}
                <Link href="/accountability/oprd/01M2F4J1J8N250W0G69CAKQSRM" className="text-emerald-800 underline decoration-emerald-300 hover:text-emerald-600">
                    the September 11 letter
                </Link>
                .
            </div>

            <div className="mt-10 space-y-10">
                {SUNLIGHT_SECTIONS.map((section) => (
                    <section key={section.heading}>
                        <h2 className="text-lg font-bold text-gray-900">{section.heading}</h2>
                        <div className="mt-3 space-y-4">
                            {section.blocks.map((block, i) => {
                                if (block.t === "says") {
                                    return (
                                        <div key={i} className="border-l-2 border-amber-300 bg-amber-50/60 rounded-r-md px-4 py-3">
                                            <div className="text-[11px] uppercase tracking-widest text-amber-700 font-semibold mb-1">The document says</div>
                                            <div className="text-[15px] leading-relaxed text-gray-700">{md(block.md)}</div>
                                        </div>
                                    );
                                }
                                if (block.t === "record") {
                                    return (
                                        <div key={i} className="border-l-2 border-emerald-400 rounded-r-md px-4 py-3 bg-white">
                                            <div className="text-[11px] uppercase tracking-widest text-emerald-700 font-semibold mb-1">The record</div>
                                            <div className="text-[15px] leading-relaxed text-gray-800">{md(block.md)}</div>
                                        </div>
                                    );
                                }
                                if (block.t === "links") {
                                    return (
                                        <ul key={i} className="list-disc pl-6 text-[15px] leading-relaxed text-gray-800 space-y-1">
                                            {block.md.split("\n").map((line, j) => (
                                                <li key={j}>{md(line.replace(/^- /, ""))}</li>
                                            ))}
                                        </ul>
                                    );
                                }
                                return (
                                    <div key={i} className="text-[15px] leading-relaxed text-gray-800">
                                        {md(block.md)}
                                    </div>
                                );
                            })}
                        </div>
                    </section>
                ))}
            </div>

            {/* ── Awaiting production ── */}
            <div className="mt-14 border border-gray-200 rounded-lg p-6 bg-white">
                <div className="text-xs uppercase tracking-widest text-gray-400 font-semibold">Awaiting production</div>
                <div className="mt-3 text-[15px] leading-relaxed text-gray-800">
                    The Timeline cites its sources by filename. None have been produced. On September 11,
                    2026, every one of them was requested — with every version and revision of each, and
                    of the Timeline itself. The clocks run on the{" "}
                    <Link href="/records-requests" className="text-emerald-800 underline decoration-emerald-300 hover:text-emerald-600">
                        records page
                    </Link>
                    .
                </div>
                <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 text-sm text-gray-600 font-mono">
                    {TIMELINE_CITED_SOURCES.map((f) => (
                        <li key={f}>{f}</li>
                    ))}
                </ul>
                <div className="mt-4 text-sm text-gray-500">
                    The filenames are reproduced exactly as the Timeline cites them, including the
                    citations{"’"} own errors. What arrives will be placed here, next to the record. So
                    will what does not.
                </div>
            </div>
        </SectionPage>
    );
}

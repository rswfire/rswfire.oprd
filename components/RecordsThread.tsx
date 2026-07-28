// components/RecordsThread.tsx
//
// Renders one records-accountability thread from a single data object: a
// factual header, a Contents table jumping to each filing, and each filing as
// its own section (request, response, record, statement, letter, petition,
// supplement). Blockquotes are reserved for quoted agency text. A new
// development is one appended Filing, not a hand-written page section.

export type FilingKind =
    | "request"
    | "followup"
    | "response"
    | "record"
    | "statement"
    | "letter"
    | "petition"
    | "supplement";

// A paragraph is plain text, a bold sub-heading, or a quoted block (agency
// language, a received letter). A quote may be several paragraphs; pass an
// array to keep a letter's paragraph breaks intact.
export type Para = string | { heading: string } | { quote: string | string[] };

export interface FilingDoc {
    label: string;
    href: string;
}

export interface Filing {
    id: string; // anchor slug, unique within the thread
    date: string;
    kind: FilingKind;
    title: string;
    from?: string;
    to?: string;
    summary?: string;
    body?: Para[];
    docs?: FilingDoc[];
}

export interface RecordsThreadData {
    slug: string;
    title: string;
    agency: string;
    matter: string;
    status: string;
    summary: string[];
    filings: Filing[];
    note?: string[];
}

const KIND_LABEL: Record<FilingKind, string> = {
    request: "Public Records Request",
    followup: "Follow-Up to the Agency",
    response: "Agency Response",
    record: "Record Released",
    statement: "Public Statement",
    letter: "Letter Received",
    petition: "Petition to the Attorney General",
    supplement: "Supplemental Filing",
};

function Body({ body }: { body: Para[] }) {
    return (
        <div className="mt-4 space-y-4 text-base leading-relaxed text-gray-800">
            {body.map((p, i) => {
                if (typeof p === "string") return <p key={i}>{p}</p>;
                if ("heading" in p)
                    return <p key={i} className="font-semibold pt-2">{p.heading}</p>;
                return (
                    <blockquote
                        key={i}
                        className="border-l-4 border-emerald-600 pl-6 py-1 italic text-gray-700 space-y-3"
                    >
                        {(Array.isArray(p.quote) ? p.quote : [p.quote]).map((q, j) => (
                            <p key={j}>{q}</p>
                        ))}
                    </blockquote>
                );
            })}
        </div>
    );
}

function DocButtons({ docs }: { docs: FilingDoc[] }) {
    return (
        <div className="mt-5 flex flex-col sm:flex-row flex-wrap gap-3">
            {docs.map((d) => (
                <a
                    key={d.href}
                    href={d.href}
                    download
                    className="inline-block px-4 py-2 text-sm font-semibold text-emerald-700 border border-emerald-700 rounded-lg hover:bg-emerald-700 hover:text-white transition-colors"
                >
                    {d.label} &darr;
                </a>
            ))}
        </div>
    );
}

export default function RecordsThread({ thread }: { thread: RecordsThreadData }) {
    return (
        <div className="mt-8">
            <div className="text-sm">
                <span className="font-semibold uppercase tracking-widest text-emerald-800">
                    {thread.agency}
                </span>
                <span className="mx-2 text-gray-400">&middot;</span>
                <span className="text-gray-600">{thread.matter}</span>
            </div>
            <div className="mt-3 text-sm text-gray-700">
                <span className="font-semibold uppercase tracking-wide">Status:</span>{" "}
                {thread.status}
            </div>

            <div className="mt-8 p-6 bg-emerald-50 border-l-4 border-emerald-600 rounded-r-lg">
                <div className="text-base font-semibold mb-4">CONTENTS</div>
                <ul className="space-y-2">
                    {thread.filings.map((f) => (
                        <li key={f.id}>
                            <a
                                href={`#${f.id}`}
                                className="text-emerald-700 hover:text-emerald-600 hover:underline"
                            >
                                <span className="text-gray-500 mr-2">{f.date}</span>
                                {f.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="mt-12 space-y-8">
                {thread.filings.map((f, i) => (
                    <div key={f.id}>
                        {i > 0 && <hr className="border-t border-gray-300 mb-8" />}
                        <section id={f.id} className="scroll-mt-48">
                            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
                                <span className="text-xs font-mono text-emerald-700 uppercase tracking-widest">
                                    {f.date}
                                </span>
                                <span className="text-xs font-mono text-gray-400 uppercase tracking-widest">
                                    {KIND_LABEL[f.kind]}
                                </span>
                            </div>
                            <h2 className="text-xl font-semibold text-gray-900">{f.title}</h2>
                            {(f.from || f.to) && (
                                <div className="mt-1 text-sm text-gray-500">
                                    {f.from && <span>From: {f.from}</span>}
                                    {f.from && f.to && <span> &middot; </span>}
                                    {f.to && <span>To: {f.to}</span>}
                                </div>
                            )}
                            {f.summary && (
                                <p className="mt-4 text-base leading-relaxed text-gray-800">{f.summary}</p>
                            )}
                            {f.body && <Body body={f.body} />}
                            {f.docs && <DocButtons docs={f.docs} />}
                        </section>
                    </div>
                ))}
            </div>

            {thread.note && (
                <>
                    <hr className="my-8 border-t border-gray-300" />
                    <div className="space-y-3 text-base leading-relaxed text-gray-700">
                        {thread.note.map((n, i) => (
                            <p key={i}>{n}</p>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}

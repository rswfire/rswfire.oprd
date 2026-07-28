// components/RecordsThread.tsx
//
// One records register: an agency, the matter, its status, and the
// communications table. Each filing is one document row; flagged filings
// stand out and show their note. A new development is one appended Filing.

import RecordsTable from "@/components/RecordsTable";

export type FilingKind =
    | "request"
    | "followup"
    | "response"
    | "record"
    | "statement"
    | "notice"
    | "letter"
    | "petition"
    | "supplement";

export interface FilingDoc {
    label: string;
    href: string;
}

export interface Filing {
    id: string; // anchor slug, unique within the thread
    date: string; // display date
    d: string; // ISO date for sorting/filtering
    kind: FilingKind;
    title: string;
    flagged?: boolean; // important: stands out in the table, note shown
    from?: string;
    to?: string;
    summary?: string;
    docs?: FilingDoc[];
    eml?: string; // unmodified email original
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

export const KIND_LABEL: Record<FilingKind, string> = {
    request: "Public Records Request",
    followup: "Follow-Up",
    response: "Agency Response",
    record: "Record",
    statement: "Public Statement",
    notice: "Letter Sent",
    letter: "Letter Received",
    petition: "Petition",
    supplement: "Supplemental Filing",
};

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

            <div className="mt-8">
                <RecordsTable filings={thread.filings} />
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

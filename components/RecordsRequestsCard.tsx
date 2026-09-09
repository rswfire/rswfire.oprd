// Homepage door to the records-request tracker: the three agencies, their
// status, and what each is withholding, condensed to a row apiece.

import Link from "next/link";
import { RECORDS_REQUESTS } from "@/data/recordsRequests";

export default function RecordsRequestsCard() {
    return (
        <div className="mt-4 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-gray-100 px-6 pt-5 pb-4">
                <div>
                    <span className="text-xs font-semibold uppercase tracking-widest text-gray-400">Records Requests</span>
                    <h2 className="mt-1 text-xl font-bold text-gray-900">Asked. Claimed. Withheld.</h2>
                </div>
                <Link
                    href="/records-requests"
                    className="whitespace-nowrap text-sm font-medium text-emerald-700 hover:text-emerald-600 hover:underline"
                >
                    The full tracker &rarr;
                </Link>
            </div>

            <div className="divide-y divide-gray-100">
                {RECORDS_REQUESTS.map((a) => {
                    const silence = a.withheld.filter((w) => w.basis === "silence").length;
                    const statute = a.withheld.filter((w) => w.basis === "statute").length;
                    const fee = a.withheld.filter((w) => w.basis === "fee").length;
                    return (
                        <Link
                            key={a.slug}
                            href="/records-requests"
                            className="group flex min-h-[56px] flex-wrap items-center justify-between gap-x-4 gap-y-1 px-6 py-3 transition-colors hover:bg-gray-50"
                        >
                            <div className="min-w-0">
                                <div className="text-sm font-semibold text-gray-900 group-hover:text-emerald-800">{a.agency}</div>
                                <div className="text-[11px] font-mono uppercase tracking-widest text-gray-400">{a.refs}</div>
                            </div>
                            <div className="flex items-center gap-2 text-right">
                                {statute > 0 && (
                                    <span className="rounded-full border border-amber-300 bg-amber-50 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-amber-800">
                                        {statute} by statute
                                    </span>
                                )}
                                {fee > 0 && (
                                    <span className="rounded-full border border-sky-300 bg-sky-50 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-sky-800">
                                        {fee} by fee
                                    </span>
                                )}
                                {silence > 0 && (
                                    <span className="rounded-full border border-red-300 bg-red-50 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-red-800">
                                        {silence} by silence
                                    </span>
                                )}
                                <span className="text-sm text-gray-700">{a.status}</span>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}

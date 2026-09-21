// What stands between him and the records about him, agency by agency.
//
// Two columns, because the two agencies withhold differently. OPRD names a
// price. OSP names the documents in its own production and then does not
// include them. Both figures and the OSP list are read from the records
// tracker rather than typed here, so this card cannot drift from it.
import Link from "next/link";
import Icon from "@/components/Icon";
import { RECORDS_REQUESTS } from "@/data/recordsRequests";

export default function PriceOfTheRecord() {
    const oprd = RECORDS_REQUESTS.find((a) => a.agency === "Oregon Parks & Recreation Department");
    const osp = RECORDS_REQUESTS.find((a) => a.agency === "Oregon State Police");
    if (!oprd || !osp) return null;

    return (
        <div className="mt-4 overflow-hidden rounded-2xl border border-red-200 bg-white shadow-sm">
            <div className="border-b border-red-200 bg-red-50 px-6 py-5 sm:px-8">
                <div className="inline-flex items-center gap-2">
                    <Icon name="FileText" size={20} strokeWidth={2} className="shrink-0 text-red-600" />
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                        The price of the record.
                    </h2>
                </div>
                <p className="mt-2 max-w-3xl text-[15px] leading-relaxed text-gray-800">
                    Two agencies hold records about me. Neither has refused them outright. One
                    named a price. The other named a price, accepted a payment, named the documents
                    itself, and then did not send them.
                </p>
            </div>

            <div className="grid grid-cols-1 divide-y divide-gray-200 sm:grid-cols-2 sm:divide-x sm:divide-y-0">
                {/* ── OPRD: a number, and whose records they are ── */}
                <div className="px-6 py-6 sm:px-8">
                    <div className="text-[11px] font-bold uppercase tracking-widest text-red-700">
                        Oregon Parks &amp; Recreation
                    </div>
                    {oprd.demanded && (
                        <>
                            <div className="mt-2 font-mono text-3xl font-bold leading-none tracking-tight text-red-700 min-[400px]:text-4xl">
                                {oprd.demanded.total}
                            </div>
                            <p className="mt-3 text-[15px] leading-relaxed text-gray-800">
                                OPRD demands this amount to produce the Director&rsquo;s and Deputy
                                Director&rsquo;s communications, notes and calendar entries, and every
                                version of the Timeline of Events.
                            </p>
                            <p className="mt-3 text-[15px] leading-relaxed text-gray-800">
                                Under <span className="font-mono text-[13px]">OAR 736-001-0030</span>,
                                the Director decides whether to waive the fee. The Director is also
                                the subject of the request.
                            </p>
                        </>
                    )}
                </div>

                {/* ── OSP: the documents it named and did not send ── */}
                <div className="px-6 py-6 sm:px-8">
                    <div className="text-[11px] font-bold uppercase tracking-widest text-red-700">
                        Oregon State Police
                    </div>
                    <div className="mt-2 font-mono text-3xl font-bold leading-none tracking-tight text-red-700 min-[400px]:text-4xl">
                        Unanswered
                    </div>
                    <p className="mt-4 text-[15px] leading-relaxed text-gray-800">
                        Records showing how the March 24 visit was planned, what information OSP
                        gathered about me, what the involved personnel said by phone and text, and
                        what happened during the contact remain undisclosed.
                    </p>
                    <p className="mt-3 text-[15px] leading-relaxed text-gray-800">
                        OSP has cited an exemption only for the body-camera video; for the rest, it
                        has given no exemption or disposition.
                    </p>
                </div>
            </div>

            <div className="border-t border-gray-100 px-6 py-5 text-center sm:px-8">
                <Link
                    href="/records-requests"
                    className="font-mono text-[13px] font-bold uppercase tracking-wide text-red-800 underline decoration-red-300 hover:text-red-600"
                >
                    The public records: Asked. Claimed. Withheld.
                </Link>
            </div>
        </div>
    );
}

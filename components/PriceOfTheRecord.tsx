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

    // Named in their own production and then not included: no exemption, no
    // denial, no disposition at all.
    const named = osp.withheld.filter((w) => w.basis === "silence");
    const byStatute = osp.withheld.filter((w) => w.basis === "statute");
    const byFee = osp.withheld.filter((w) => w.basis === "fee");

    return (
        <div className="mt-4 overflow-hidden rounded-2xl border border-red-200 bg-white shadow-sm">
            <div className="border-b border-red-200 bg-red-50 px-6 py-5 sm:px-8">
                <div className="inline-flex items-center gap-2">
                    <Icon name="FileText" size={20} strokeWidth={2} className="shrink-0 text-red-600" />
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                        The price of the record
                    </h2>
                </div>
                <p className="mt-2 max-w-3xl text-[15px] leading-relaxed text-gray-800">
                    Two agencies hold records about me. Neither has refused them outright. One
                    named a price. The other named the documents itself and then did not send them.
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
                            <div className="mt-2 font-mono text-4xl font-bold leading-none tracking-tight text-red-700">
                                {oprd.demanded.total}
                            </div>
                            <p className="mt-3 text-[15px] leading-relaxed text-gray-800">
                                {oprd.demanded.note}
                            </p>
                        </>
                    )}
                    <div className="mt-5 rounded-xl border border-gray-200 bg-gray-50 p-4">
                        <div className="text-[11px] font-bold uppercase tracking-widest text-gray-500">
                            Whose records they are
                        </div>
                        <p className="mt-2 text-[15px] leading-relaxed text-gray-800">
                            The request names two custodians: the Director and the Deputy Director.
                            Under the Department&rsquo;s own rule,{" "}
                            <span className="font-mono text-[13px]">OAR 736-001-0030</span>, the
                            officer who grants or denies a fee waiver is the Director or her
                            designee. She is the subject of the records and the person who decides
                            whether the public pays to see them.
                        </p>
                    </div>
                </div>

                {/* ── OSP: the documents it named and did not send ── */}
                <div className="px-6 py-6 sm:px-8">
                    <div className="text-[11px] font-bold uppercase tracking-widest text-red-700">
                        Oregon State Police
                    </div>
                    {osp.demanded && (
                        <>
                            <div className="mt-2 font-mono text-4xl font-bold leading-none tracking-tight text-red-700">
                                {osp.demanded.total}
                            </div>
                            <p className="mt-3 text-[15px] leading-relaxed text-gray-800">
                                {byFee[0]?.item}
                            </p>
                        </>
                    )}
                    <div className="mt-5 rounded-xl border border-gray-200 bg-gray-50 p-4">
                        <div className="text-[11px] font-bold uppercase tracking-widest text-gray-500">
                            Named in their own production, not included
                        </div>
                        <ul className="mt-2 space-y-2">
                            {named.map((w) => (
                                <li key={w.item} className="flex items-start gap-2.5">
                                    <span
                                        aria-hidden
                                        className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-red-500"
                                    />
                                    <span className="text-[15px] leading-relaxed text-gray-800">
                                        {w.item}
                                    </span>
                                </li>
                            ))}
                        </ul>
                        <p className="mt-3 text-[14px] leading-relaxed text-gray-600">
                            No exemption cited, no denial, no disposition of any kind.
                        </p>
                    </div>
                    {byStatute.map((w) => (
                        <p key={w.item} className="mt-4 text-[15px] leading-relaxed text-gray-800">
                            <span className="font-semibold">{w.item}</span> is withheld under{" "}
                            {w.detail}
                        </p>
                    ))}
                </div>
            </div>

            <div className="border-t border-gray-100 px-6 py-5 text-center sm:px-8">
                <Link
                    href="/records-requests"
                    className="font-mono text-[13px] font-bold uppercase tracking-wide text-red-800 underline decoration-red-300 hover:text-red-600"
                >
                    Every request, what they claim, and what they are holding
                </Link>
            </div>
        </div>
    );
}

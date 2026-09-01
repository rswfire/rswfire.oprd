// app/(archive)/fund/page.tsx

import type { Metadata } from "next";
import SectionPage from "@/components/SectionPage";
import { EXPENDITURES, GOAL, MATCH_CAP, RAISED, matched, total, usd, spent } from "@/lib/fund";

export const metadata: Metadata = {
    title: "The Legal Fund, Accounted For",
    description: "Every dollar into and out of the legal fund, stated publicly.",
};

function Tile({ label, value }: { label: string; value: string }) {
    return (
        <div className="rounded-lg border border-slate-200 bg-white px-4 py-3">
            <div className="text-[11px] font-bold uppercase tracking-widest text-gray-500">{label}</div>
            <div className="mt-1 text-xl font-bold text-gray-900">{value}</div>
        </div>
    );
}

export default function FundPage() {
    return (
        <SectionPage
            title="THE LEGAL FUND"
            subtitle="EVERY DOLLAR, ACCOUNTED FOR"
            previousPage={{ href: "/", label: "Overview" }}
        >
            <div className="mb-6 space-y-4 text-base">
                <div>
                    This page is the fund&rsquo;s public accounting. Funds go to two things only:
                    the retained lawyer, and technical costs of the case such as public records fees,
                    internet and server costs, and archive infrastructure. Every expenditure is recorded here when it happens, with what it paid
                    for and who received it.
                </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <Tile label="Donated" value={usd(RAISED)} />
                <Tile label="Matched" value={usd(matched)} />
                <Tile label="Spent" value={usd(spent)} />
                <Tile label="Remaining" value={usd(total - spent)} />
            </div>

            <div className="mt-2 text-xs text-gray-500">
                Goal {usd(GOAL)}. A former client matches the first {usd(MATCH_CAP)} donated, dollar for dollar.
            </div>

            <div className="mt-8">
                <h2 className="font-bold text-lg tracking-wide">EXPENDITURES</h2>
                {EXPENDITURES.length === 0 ? (
                    <div className="mt-3 rounded-lg border border-slate-200 bg-white px-4 py-6 text-sm text-gray-600">
                        No funds have been spent. The fund is untouched.
                    </div>
                ) : (
                    <div className="mt-3 rounded-lg overflow-hidden border border-slate-200 bg-white divide-y divide-slate-100">
                        {EXPENDITURES.map((w, i) => (
                            <div key={i} className="px-4 py-3 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6 text-sm">
                                <span className="text-gray-400 whitespace-nowrap">{w.date}</span>
                                <span className="font-semibold text-gray-900 whitespace-nowrap">{usd(w.amount)}</span>
                                <span className="text-gray-700 min-w-0">{w.purpose} &rarr; {w.to}</span>
                                {w.document && (
                                    <a href={w.document} className="text-emerald-700 underline hover:text-emerald-600 whitespace-nowrap">
                                        receipt
                                    </a>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </SectionPage>
    );
}

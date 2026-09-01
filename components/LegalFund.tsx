// The legal fund, one card: the announcement still on the left, the
// thermometer on the right, one door to the GoFundMe. All numbers are
// variables below — update RAISED as contributions land.
//
// The thermometer's geometry carries the match mechanics: the column runs
// 0 → GOAL. The bottom MATCH_CAP of it is the match zone — a former client
// matches the first MATCH_CAP of donations dollar for dollar, so the match
// zone fills in lockstep as the donation fill above it grows, and every
// dollar given below the cap moves the total by two.

import Link from "next/link";
import { GOAL, MATCH_CAP, RAISED, matched, total, usd } from "@/lib/fund";

const usdK = (n: number) => (n >= 1000 ? `$${n / 1000}k` : `$${n}`);

// Column geometry, as percentages of GOAL.
const matchZonePct = (MATCH_CAP / GOAL) * 100;
const matchFillPct = (matched / GOAL) * 100;
const donationFillPct = (Math.min(RAISED, GOAL - MATCH_CAP) / GOAL) * 100;

export default function LegalFund() {
    return (
        <div className="mt-4 rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-white">
            <div className="grid grid-cols-1 sm:grid-cols-5">

                {/* The announcement — left column */}
                <a
                    href="https://gofund.me/87331061f"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block sm:col-span-3 bg-slate-950"
                >
                    <img
                        src="/legal-fund.jpg"
                        alt="Announcing the legal fund v. Oregon State Parks"
                        className="w-full h-full object-cover object-left block group-hover:opacity-90 transition-opacity"
                    />
                </a>

                {/* The fund — right column */}
                <div className="sm:col-span-2 flex flex-col px-5 py-4 border-t sm:border-t-0 sm:border-l border-slate-200">
                    <div className="text-[11px] font-bold uppercase tracking-widest text-red-700">The Legal Fund</div>
                    <div className="mt-1 flex items-baseline gap-2">
                        <span className="text-3xl font-bold text-gray-900">{usd(total)}</span>
                        <span className="text-xs text-gray-500">of {usd(GOAL)}</span>
                    </div>
                    <div className="text-[11px] uppercase tracking-wider text-gray-400">donations + match</div>

                    <div className="mt-4 flex-1 flex gap-4 min-h-[230px]">
                        {/* The column: 0 at the bottom, GOAL at the top. */}
                        <div className="relative w-12 rounded-full overflow-hidden bg-slate-100 border border-slate-200 shadow-inner">
                            {/* Donations stack upward from the match line */}
                            <div
                                className="absolute inset-x-0"
                                style={{
                                    bottom: `${matchZonePct}%`,
                                    height: `${donationFillPct}%`,
                                    background: "linear-gradient(180deg, #ef4444, #b91c1c)",
                                }}
                            />
                            {/* The match fills the bottom zone in lockstep */}
                            <div
                                className="absolute inset-x-0 bottom-0"
                                style={{
                                    height: `${matchFillPct}%`,
                                    background: "linear-gradient(180deg, #fbbf24, #d97706)",
                                }}
                            />
                            {/* Match line */}
                            <div
                                className="absolute inset-x-0 border-t-2 border-dashed border-amber-500"
                                style={{ bottom: `${matchZonePct}%` }}
                            />
                        </div>

                        {/* Scale + legend, aligned to the column */}
                        <div className="flex-1 flex flex-col justify-between text-xs leading-snug">
                            <div>
                                <div className="font-semibold text-gray-900">{usdK(GOAL)} — the goal</div>
                                <div className="mt-0.5 text-gray-500">legal and technical costs of the case</div>
                            </div>
                            <div>
                                <div className="font-semibold text-red-700">{usd(RAISED)} donated</div>
                            </div>
                            <div>
                                <div className="font-semibold text-amber-600">{usd(matched)} matched</div>
                                <div className="mt-0.5 text-gray-500">
                                    a former client doubles the first {usdK(MATCH_CAP)} donated
                                </div>
                            </div>
                        </div>
                    </div>

                    <a
                        href="https://gofund.me/87331061f"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 block rounded-lg bg-red-700 hover:bg-red-800 transition-colors px-4 py-2.5 text-center text-sm font-semibold uppercase tracking-widest text-white"
                    >
                        Contribute &rarr;
                    </a>
                </div>
            </div>

            {/* The terms of the fund, stated plainly. */}
            <div className="px-5 py-4 border-t border-slate-200">
                <div className="text-[11px] font-bold uppercase tracking-widest text-gray-500">How this fund operates</div>
                <ul className="mt-2 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
                    <li>I will reach out to relevant constitutional lawyers when the fund reaches $10,000.</li>
                    <li>The $25,000 goal is an AI estimate; the right lawyer will give me the real number.</li>
                    <li>This is a &sect;1983 case against the institution. The only individual defendants are the director and her deputy.</li>
                    <li>&sect;1983 carries a fee-shifting statute (42 U.S.C. &sect;1988): if the case prevails, the state pays the attorney&rsquo;s fees.</li>
                    <li>The Oregon State Police matters may be treated as a separate case; how that one is constructed, including whether officers are named individually, is for the lawyers to decide.</li>
                    <li>Funds go to two things only: the retained lawyer, and technical costs of the case such as public records fees, internet and server costs, and archive infrastructure. <Link href="/fund" className="underline text-emerald-800 hover:text-emerald-600">Every dollar spent is accounted for publicly.</Link></li>
                </ul>
            </div>
        </div>
    );
}

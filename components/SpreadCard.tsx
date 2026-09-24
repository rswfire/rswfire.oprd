// How it spread. One diagram, top to bottom: a job application, an invented
// reason, a removal, the referral that carried it out of the agency, the four
// institutions it reached, the door it arrived at, and the county it went to
// afterward. Every node is dated and every date is in the register.

import Link from "next/link";

const NODE = "rounded-xl border bg-white px-4 py-3.5 shadow-sm";
const DATE = "font-mono text-[10px] font-bold uppercase tracking-widest";
const LINE = "mx-auto w-px bg-rose-300";

function Stem({ h = 28 }: { h?: number }) {
    return <div className={LINE} style={{ height: h }} aria-hidden />;
}

function Stage({ label }: { label: string }) {
    return (
        <div className="flex items-center justify-center gap-3 py-1">
            <span className="h-px w-8 bg-rose-200" aria-hidden />
            <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-rose-500">
                {label}
            </span>
            <span className="h-px w-8 bg-rose-200" aria-hidden />
        </div>
    );
}

const BRANCHES = [
    {
        agency: "Oregon Department of Justice",
        unit: "TITAN Fusion Center",
        date: "March 11, 2026",
        body: "An OPRD employee carries my activities to the fusion center. Its analyst writes that my actions “border on harassment due to the volume of emails.”",
        href: "/records/doj",
    },
    {
        agency: "FBI",
        unit: "Task force officer",
        date: "March 11 – 13, 2026",
        body: "“Just OSP it is not an FBI case.” Two days later my DMV record and a report on me are sent from an fbi.gov address into the state file.",
        href: "/records/osp",
    },
    {
        agency: "Oregon State Police",
        unit: "Dispatch",
        date: "March 23, 2026",
        body: "A dispatch event names me a suspect. The basis it gives is “concerning emails to former supervisors in parks department and publicly airing grievances.”",
        href: "/records/osp",
    },
    {
        agency: "U.S. Forest Service",
        unit: "Law enforcement",
        date: "March 22, 2026",
        body: "My schedule, duties, and vehicles are sent on, with two hunting-app screenshots showing a waypoint pinned on the work center where I live.",
        href: "/records/usfs",
    },
];

export default function SpreadCard() {
    return (
        <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

            {/* ── Title ── */}
            <div className="border-b border-slate-200 bg-gradient-to-b from-rose-50 to-white px-6 py-7 sm:px-10">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                    How it spread
                </h2>
                <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-gray-700 sm:text-base">
                    It began with a job application. Nothing below it began with a crime. The state&rsquo;s
                    own report concludes there is no evidence I committed any.
                </p>
            </div>

            <div className="px-4 py-8 sm:px-10">

                {/* ── Origin ── */}
                <div className="mx-auto max-w-md">
                    <div className={`${NODE} border-emerald-300`}>
                        <div className={`${DATE} text-emerald-700`}>February 12, 2025</div>
                        <div className="mt-1 text-base font-bold text-gray-900">A job application</div>
                        <p className="mt-1.5 text-sm leading-relaxed text-gray-600">
                            I applied to become a park ranger assistant, and then I withdrew the
                            application.
                        </p>
                    </div>
                </div>

                <Stem />

                {/* ── The invention ── */}
                <div className="mx-auto max-w-md">
                    <div className={`${NODE} border-amber-300`}>
                        <div className={`${DATE} text-amber-700`}>Oregon Parks &amp; Recreation</div>
                        <div className="mt-1 text-base font-bold text-gray-900">
                            A supervisor invented a reason for the withdrawal
                        </div>
                        <p className="mt-1.5 text-sm leading-relaxed text-gray-600">
                            It was written into an internal{" "}
                            <Link href="/sunlight" className="font-semibold text-emerald-800 underline decoration-emerald-300 underline-offset-2 hover:text-emerald-600">
                                Timeline of Events
                            </Link>{" "}
                            as an entry dated 02/12/25, with quotations attributed to me, on a date
                            that cannot be true. Ten months. Twenty-three revisions. Never shown to me.
                        </p>
                    </div>
                </div>

                <Stem />

                {/* ── Removal ── */}
                <div className="mx-auto max-w-md">
                    <div className={`${NODE} border-amber-300`}>
                        <div className={`${DATE} text-amber-700`}>March 24 &ndash; 26, 2025</div>
                        <div className="mt-1 text-base font-bold text-gray-900">
                            Dismissed, then permanently excluded
                        </div>
                        <p className="mt-1.5 text-sm leading-relaxed text-gray-600">
                            Dismissed by phone six days before I completed my service, with
                            twenty-four hours to leave the park where I lived. Two days later,{" "}
                            <Link href="/records/oprd" className="font-semibold text-emerald-800 underline decoration-emerald-300 underline-offset-2 hover:text-emerald-600">
                                excluded from every volunteer program the institution runs
                            </Link>
                            , for my public comments about staff.
                        </p>
                    </div>
                </div>

                <Stem />

                {/* ── The referral: where it leaves the agency ── */}
                <Stage label="The referral" />
                <Stem h={20} />

                <div className="mx-auto max-w-lg">
                    <div className="rounded-xl border-2 border-rose-400 bg-rose-50 px-4 py-4 shadow-sm">
                        <div className={`${DATE} text-rose-700`}>March 6, 2026</div>
                        <div className="mt-1 text-base font-bold text-gray-900 sm:text-lg">
                            The agency sent me to the police
                        </div>
                        <p className="mt-1.5 text-sm leading-relaxed text-gray-700">
                            OPRD gave the Oregon State Police its Timeline and my dismissal letter.
                            The substance of the referral was a document written about me over ten
                            months and never shown to me. What I had done was write to them about it.
                        </p>
                    </div>
                </div>

                <Stem h={20} />

                {/* ── The fan ── */}
                <Stage label="Where it went" />
                <Stem h={16} />
                <div className="mx-auto h-px w-2/3 bg-rose-300" aria-hidden />

                <div className="mt-0 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
                    {BRANCHES.map((b) => (
                        <div key={b.agency + b.unit} className="flex flex-col items-center">
                            <Stem h={18} />
                            <Link
                                href={b.href}
                                className={`${NODE} block w-full border-rose-200 transition-colors hover:border-rose-400 hover:bg-rose-50`}
                            >
                                <div className={`${DATE} text-rose-600`}>{b.date}</div>
                                <div className="mt-1 text-[13px] font-bold leading-snug text-gray-900 sm:text-sm">
                                    {b.agency}
                                </div>
                                <div className="text-[11px] font-semibold uppercase tracking-wide text-gray-400">
                                    {b.unit}
                                </div>
                                <p className="mt-1.5 text-[12px] leading-relaxed text-gray-600 sm:text-[13px]">
                                    {b.body}
                                </p>
                            </Link>
                        </div>
                    ))}
                </div>

                <Stem h={18} />
                <div className="mx-auto h-px w-2/3 bg-rose-300" aria-hidden />
                <Stem h={18} />

                {/* ── Arrival: where I live ── */}
                <Stage label="Where I live" />
                <Stem h={20} />

                <div className="mx-auto max-w-lg">
                    <div className="overflow-hidden rounded-xl border-2 border-rose-500 bg-slate-950 shadow-sm">
                        <div className="px-5 py-5">
                            <div className={`${DATE} text-rose-400`}>
                                March 24, 2026 &middot; one year to the day
                            </div>
                            <div className="mt-1.5 text-lg font-bold text-white">
                                Three armed officers at the door
                            </div>
                            <p className="mt-2 text-sm leading-relaxed text-slate-300">
                                They came through a locked federal gate onto restricted federal land,
                                to the Siltcoos Work Center. I said I would not speak without an
                                attorney, said it a second time, and shut the door.
                            </p>
                        </div>
                        <div className="border-t border-slate-800 bg-slate-900/70 px-5 py-4">
                            <div className="font-mono text-[10px] font-bold uppercase tracking-widest text-slate-500">
                                The square at the end of the line
                            </div>
                            <div className="mt-1 text-[15px] font-bold text-white">
                                Me. Caretaker, Siltcoos Work Center.
                            </div>
                            <p className="mt-1 text-sm leading-relaxed text-slate-400">
                                The gate they came through is the gate to where I live and work.
                            </p>
                        </div>
                    </div>
                </div>

                <Stem h={20} />

                {/* ── Onward ── */}
                <Stage label="Three days later" />
                <Stem h={20} />

                <div className="mx-auto max-w-lg">
                    <Link
                        href="/record/osp/01M1M4WF78XJPEJJ48D1JZ4SJ8/"
                        className="block rounded-xl border-2 border-rose-400 bg-rose-50 px-4 py-4 shadow-sm transition-colors hover:bg-rose-100"
                    >
                        <div className={`${DATE} text-rose-700`}>March 27, 2026</div>
                        <div className="mt-1 text-base font-bold text-gray-900 sm:text-lg">
                            My file went to the county where I live
                        </div>
                        <p className="mt-1.5 text-sm leading-relaxed text-gray-700">
                            Three days after being told I was not in trouble, a federal agent emailed
                            a Lane County sheriff&rsquo;s deputy, copying two state police detectives,
                            and sent my name, date of birth, driver&rsquo;s license number, residence,
                            work schedule, duties, correspondence, and text messages, with a
                            commitment to &ldquo;keep you up to date.&rdquo;
                        </p>
                        <p className="mt-2 text-sm font-semibold leading-relaxed text-rose-900">
                            Those are the deputies who patrol where I live.
                        </p>
                    </Link>
                </div>
            </div>

            {/* ── The floor ── */}
            <div className="border-t border-slate-200 bg-slate-50 px-6 py-6 sm:px-10">
                <p className="max-w-3xl text-[15px] leading-relaxed text-gray-700 sm:text-base">
                    Nine institutions now hold records about me. Not one of them opened a file because
                    I committed an offense. It started with a job application I withdrew, and a
                    supervisor who wrote down a reason that was not true.
                </p>
            </div>
        </div>
    );
}

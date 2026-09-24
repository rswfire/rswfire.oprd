// How it spread. One diagram, top to bottom: the misunderstanding, the
// supervisor's word, the removal, the year of asking, the referral that
// carried it out of the agency, the five institutions it reached, the door it
// arrived at, and the county it went to.
//
// Third person throughout, as the testimony is. Every node is dated and every
// date is in the register.

import Link from "next/link";
import Icon from "@/components/Icon";

const NODE = "rounded-xl border bg-white px-4 py-3.5 shadow-sm";
const DATE = "font-mono text-[10px] font-bold uppercase tracking-widest";
const LINE = "mx-auto w-px bg-rose-300";

function Stem({ h = 28 }: { h?: number }) {
    return <div className={LINE} style={{ height: h }} aria-hidden />;
}

function Stage({ label, note }: { label: string; note?: string }) {
    return (
        <div className="py-1">
            <div className="flex items-center justify-center gap-3">
                <span className="h-px w-8 bg-rose-200" aria-hidden />
                <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-rose-500">
                    {label}
                </span>
                <span className="h-px w-8 bg-rose-200" aria-hidden />
            </div>
            {note && (
                <p className="mx-auto mt-2 max-w-lg text-center text-sm leading-relaxed text-gray-600">
                    {note}
                </p>
            )}
        </div>
    );
}

const BRANCHES = [
    {
        agency: "Oregon State Police",
        unit: "Criminal Investigations",
        date: "March 4 – 24, 2026",
        body: "A threat assessment is ordered on March 4 and handed down a captain, a lieutenant, a sergeant, to a detective. On March 23 a dispatch event names him a suspect for “concerning emails to former supervisors in parks department and publicly airing grievances.”",
        href: "/records/osp",
    },
    {
        agency: "FBI",
        unit: "Task force officer",
        date: "March 6 – 24, 2026",
        body: "On the first day he has it, the task force officer forwards it to his own fbi.gov address and asks FBI personnel for a date of birth. On March 11: “Just OSP it is not an FBI case.” On March 13 a DMV record and a report come back out of that address into the state file.",
        href: "/records/osp",
    },
    {
        agency: "Oregon Department of Justice",
        unit: "TITAN Fusion Center",
        date: "March 2026",
        body: "An OPRD employee shares his activities with the fusion center. Its analyst is “documenting this activity for our internal awareness” because his actions “border on harassment due to the volume of emails.”",
        href: "/records/doj",
    },
    {
        agency: "U.S. Forest Service",
        unit: "Law enforcement",
        date: "March 17 – 22, 2026",
        body: "A special agent coordinates with the task force officer, then sends two hunting-app screenshots with a waypoint on where he lives, plus his schedule, his duties, and his vehicles.",
        href: "/records/usfs",
    },
    {
        agency: "The knock and talk",
        unit: "Planned together",
        date: "March 23, 2026",
        body: "Twelve minutes after the dispatch event opens: “Please see attached Hasty Plan for Robert White knock and talk.” The Forest Service special agent goes with them.",
        href: "/records/usfs",
    },
];

export default function SpreadCard() {
    return (
        <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

            {/* ── Title ── */}
            <div className="border-b border-slate-200 bg-gradient-to-b from-rose-50 to-white px-6 py-7 sm:px-10">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                    How it spread.
                </h2>
                <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-gray-700 sm:text-base">
                    There was no mechanism to stop any of it. Each institution took what the one
                    before it sent and added to it.
                </p>
            </div>

            <div className="px-4 py-8 sm:px-10">

                {/* ── Origin ── */}
                <div className="mx-auto max-w-md">
                    <div className={`${NODE} border-emerald-300`}>
                        <div className={`${DATE} text-emerald-700`}>February 2025</div>
                        <div className="mt-1 text-base font-bold text-gray-900">
                            It began with a misunderstanding.
                        </div>
                        <p className="mt-1.5 text-sm leading-relaxed text-gray-600">
                            A local disagreement at one state park, between one volunteer and one
                            supervisor.
                        </p>
                    </div>
                </div>

                <Stem />

                {/* ── The invention ── */}
                <div className="mx-auto max-w-md">
                    <div className={`${NODE} border-amber-300`}>
                        <div className={`${DATE} text-amber-700`}>Oregon Parks &amp; Recreation</div>
                        <div className="mt-1 text-base font-bold text-gray-900">
                            The supervisor&rsquo;s word is the only word.
                        </div>
                        <p className="mt-1.5 text-sm leading-relaxed text-gray-600">
                            There are no written standards, no notice, no hearing, and no appeal.
                            What a supervisor writes down becomes the account, and there is no
                            mechanism by which it can be questioned. Everything below this{" "}
                            <Link href="/sunlight" className="font-semibold text-emerald-800 underline decoration-emerald-300 underline-offset-2 hover:text-emerald-600">
                                rests on that account
                            </Link>
                            .
                        </p>
                    </div>
                </div>

                <Stem />

                {/* ── Removal ── */}
                <div className="mx-auto max-w-md">
                    <div className={`${NODE} border-amber-300`}>
                        <div className={`${DATE} text-amber-700`}>March 24 &ndash; 26, 2025</div>
                        <div className="mt-1 text-base font-bold text-gray-900">
                            Dismissed, then permanently excluded.
                        </div>
                        <p className="mt-1.5 text-sm leading-relaxed text-gray-600">
                            He was dismissed by phone six days before he completed his service, with
                            twenty-four hours to leave the park where he lived. Two days later he was{" "}
                            <Link href="/record/oprd/01JQA2WM60RX7MSJQ5QPFD8AR2/" className="font-semibold text-emerald-800 underline decoration-emerald-300 underline-offset-2 hover:text-emerald-600">
                                excluded from every volunteer program the institution runs
                            </Link>
                            , for his public comments about staff.
                        </p>
                    </div>
                </div>

                <Stem />

                {/* ── The year in between ── */}
                <div className="mx-auto max-w-md">
                    <div className={`${NODE} border-slate-300`}>
                        <div className={`${DATE} text-slate-500`}>May 2025 &ndash; February 2026</div>
                        <div className="mt-1 text-base font-bold text-gray-900">
                            He asked for a year.
                        </div>
                        <p className="mt-1.5 text-sm leading-relaxed text-gray-600">
                            In May he named the surveillance encounter to the program manager. In
                            August he put it to the Director with three direct questions, and filed a
                            public records request the same week. Nothing was answered, and the
                            request sat for ninety days. So he published the record and started
                            copying the Governor.
                        </p>
                    </div>
                </div>

                <Stem />

                {/* ── The referral: where it leaves the agency ── */}
                <Stage label="The referral" />
                <Stem h={20} />

                <div className="mx-auto max-w-lg">
                    <Link
                        href="/record/osp/01M1M4WF78XJPEJJ48D1JZ4SJ8/"
                        className="block rounded-xl border-2 border-rose-400 bg-rose-50 px-4 py-4 shadow-sm transition-colors hover:bg-rose-100"
                    >
                        <div className={`${DATE} text-rose-700`}>March 3 &ndash; 4, 2026</div>
                        <div className="mt-1 text-base font-bold text-gray-900 sm:text-lg">
                            The agency sent the police his website.
                        </div>
                        <p className="mt-1.5 text-sm leading-relaxed text-gray-700">
                            OPRD&rsquo;s emergency manager emailed a link to this archive to the
                            Oregon State Police captain for Government and Media Relations. The
                            reason given: &ldquo;he is now including the Governor as well as our
                            Director.&rdquo; The next afternoon that media relations captain asked
                            that &ldquo;a threat assessment be conducted asap.&rdquo;
                        </p>
                    </Link>
                </div>

                <Stem h={20} />

                {/* ── The fan ── */}
                <Stage
                    label="The next three weeks"
                    note="Four institutions went through his information and mapped where he lives, preparing for the visit."
                />
                <Stem h={18} />

                {/* The five run in parallel over the same three weeks, and the
                    grid wraps at every breakpoint. A panel groups them; drop
                    lines into a wrapping grid cannot stay attached. */}
                <div className="rounded-2xl border border-rose-200 bg-rose-50/40 p-3 sm:p-4">
                    <div className="grid grid-cols-2 items-stretch gap-3 sm:gap-4 lg:grid-cols-3">
                        {BRANCHES.map((b) => (
                            <Link
                                key={b.agency + b.unit}
                                href={b.href}
                                className={`${NODE} flex h-full flex-col border-rose-200 transition-colors hover:border-rose-400 hover:bg-rose-50`}
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
                        ))}
                    </div>
                </div>

                <Stem h={18} />

                {/* ── Arrival: where he lives ── */}
                <Stage label="Where he lives" />
                <Stem h={20} />

                <div className="mx-auto max-w-lg">
                    <div className="overflow-hidden rounded-xl border-2 border-rose-500 bg-slate-950 shadow-sm">
                        <div className="px-5 py-5">
                            <div className={`${DATE} text-rose-400`}>
                                March 24, 2026 &middot; one year to the day
                            </div>
                            <div className="mt-1.5 text-lg font-bold text-white">
                                Three armed officers at the door.
                            </div>
                            <p className="mt-2 text-sm leading-relaxed text-slate-300">
                                They came through a locked federal gate onto restricted federal land,
                                to where he lives and works. He said he would not speak without an
                                attorney, said it a second time, and shut the door.
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
                            His file went to the county where he lives.
                        </div>
                        <p className="mt-1.5 text-sm leading-relaxed text-gray-700">
                            Three days after being told he was not in trouble, a federal agent emailed
                            a sheriff&rsquo;s deputy, copying two state police detectives,
                            and sent his name, date of birth, driver&rsquo;s license number, residence,
                            work schedule, duties, correspondence, and text messages, with a
                            commitment to &ldquo;keep you up to date.&rdquo;
                        </p>
                        <p className="mt-2 text-sm font-semibold leading-relaxed text-rose-900">
                            Those are the deputies who patrol where he lives.
                        </p>
                    </Link>
                </div>

                <Stem h={22} />

                {/* ── What he did with it ── */}
                <div className="mx-auto max-w-lg">
                    <Link
                        href="/records"
                        className="block rounded-xl border-2 border-emerald-400 bg-emerald-50 px-4 py-4 shadow-sm transition-colors hover:bg-emerald-100"
                    >
                        <div className={`${DATE} text-emerald-700`}>March &ndash; September 2026</div>
                        <div className="mt-1 text-base font-bold text-gray-900 sm:text-lg">
                            He built the record that proves all of it.
                        </div>
                        <p className="mt-1.5 text-sm leading-relaxed text-gray-700">
                            He filed public records requests with every institution in this diagram,
                            and petitioned the Attorney General when the state police withheld. What
                            they produced is published here in full.
                        </p>
                    </Link>
                </div>

            </div>

            {/* ── The door out: the same line the testimony PDF opens with ── */}
            <Link
                href="/volunteers"
                className="group flex items-center gap-4 border-t border-red-200 bg-red-50 px-6 py-6 transition-colors hover:bg-red-100 sm:gap-5 sm:px-10 sm:py-7"
            >
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-red-700 shadow-sm sm:h-16 sm:w-16">
                    <Icon name="Shield" className="h-7 w-7 text-white sm:h-8 sm:w-8" size={32} strokeWidth={1.5} />
                </span>
                <div className="min-w-0">
                    <div className="text-lg font-bold leading-snug text-gray-900 sm:text-xl">
                        If this happened to you, it has a name.
                    </div>
                    <div className="mt-1 inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-red-800 transition-colors group-hover:text-red-600">
                        For Volunteers
                        <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
                            &rarr;
                        </span>
                    </div>
                </div>
            </Link>
        </div>
    );
}

// The testimony's door on the index page. The welcome, the name, the
// dimensions of the record under it, and every chapter reachable directly.
//
// The chapter list mirrors the Part headers in
// components/testimony/TestimonyBody.tsx; slugs use the same rule as its
// partId(). When a part is added or retitled there, update this list.

import Link from "next/link";
import { Sprout } from "lucide-react";
import { CURRENT_VERSION } from "@/data/testimonyVersions";
import { TESTIMONY_META } from "@/data/testimonyMeta";
import TestimonyPdfButton from "@/components/testimony/TestimonyPdfButton";

const CHAPTERS = [
    "THE SHEDDING",
    "THE CROSSING",
    "THE COAST",
    "WHY HE VOLUNTEERED",
    "HE WENT AND LOOKED AT HONEYMAN FIRST",
    "THE PICNIC TABLE",
    "DISPLACEMENT",
    "THE DIRECTOR AND HER DEPUTY",
    "THE THREE MEN WITH GUNS",
    "THE GOVERNOR'S SILENCE",
];

export default function TestimonyCard() {
    return (
        <div className="mb-4 overflow-hidden rounded-2xl border border-emerald-200 bg-white shadow-sm">
            <div className="px-6 pt-8 sm:px-8">
                <div className="flex flex-col items-center text-xs font-bold uppercase tracking-widest text-emerald-700">
                    <Sprout size={24} strokeWidth={1.75} className="mb-2 text-emerald-600" aria-hidden />
                    <span>Welcome</span>
                </div>

                <Link href="/testimony" className="mt-2 block text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        The Testimony of
                        <span className="block">Robert Samuel White</span>
                    </h2>
                </Link>

                <div
                    aria-hidden
                    className="mx-auto mt-7 h-[3px] w-20 rounded-full bg-gradient-to-r from-emerald-200 via-emerald-600 to-emerald-200"
                />

                <div className="mt-7 space-y-4 text-lg leading-relaxed text-gray-800">
                    <p>
                        I&rsquo;m Sam. I was a Boy Scout in my youth. I have lived by what it taught
                        me ever since, and I brought that to a state park that claims to be the same
                        thing. I was a volunteer park host for the Oregon Parks &amp; Recreation
                        Department, and it is not that.
                    </p>
                    <p>
                        This archive answers the question: what happens if something goes wrong?{" "}
                        The record&rsquo;s answer: there is no process. A supervisor&rsquo;s account
                        is the only account, and there is no mechanism by which it can be questioned.
                    </p>
                    <p>
                        Volunteers serve with no written standards, no notice, no hearing, no appeal,
                        no protection from retaliation. There are accusations never put in writing.
                        There are characterizations never substantiated with facts. There is a permanent statewide ban. And
                        where there is contemporaneous documentation the institution cannot disappear,
                        there is force: investigation, intimidation, police at the door.
                    </p>
                    <p>
                        Director Lisa Sumption has stewarded this agency for more than a decade.
                        I wrote her a letter{" "}
                        <a
                            href="https://rswfire.com/library/signal/01M1YH9QSRTJYYQCC4QKX81T7N"
                            target="_blank"
                            rel="noopener"
                            className="text-emerald-800 underline hover:text-emerald-600"
                        >
                            documenting her choices
                        </a>, past and future. She is the one who can protect
                        you. She is the one{" "}
                        <a
                            href="/#what-every-volunteer-deserves"
                            className="text-emerald-800 underline hover:text-emerald-600"
                        >
                            choosing not to
                        </a>
                        .
                    </p>
                </div>

                <div className="mt-5 border-t border-gray-200 pt-5">
                    <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-[13px] text-gray-600">
                        <span><span className="font-bold text-gray-900">{TESTIMONY_META.paragraphs}</span> numbered paragraphs</span>
                        <span><span className="font-bold text-gray-900">{TESTIMONY_META.documents}</span> documents</span>
                        <span><span className="font-bold text-gray-900">{TESTIMONY_META.recordings}</span> recordings</span>
                        <span><span className="font-bold text-gray-900">{TESTIMONY_META.moments}</span> cited moments</span>
                        <Link
                            href="/testimony/#version-meta"
                            className="font-mono text-gray-400 underline decoration-gray-300 underline-offset-2 hover:text-emerald-700"
                        >
                            v{CURRENT_VERSION.version}
                        </Link>
                    </div>
                </div>
            </div>

            {/* ── The chapters ── */}
            <div className="mt-6 px-6 pb-6 sm:px-8">
                <div className="space-y-1">
                    {CHAPTERS.map((title, i) => (
                        <Link
                            key={title}
                            href={`/testimony/#c${i + 1}`}
                            className="group flex items-baseline gap-3 rounded-lg px-2 py-1.5 hover:bg-emerald-50"
                        >
                            <span className="w-6 shrink-0 font-mono text-[11px] text-emerald-600">
                                {String(i + 1).padStart(2, "0")}
                            </span>
                            <span className="font-mono text-[13px] font-bold text-emerald-800 underline decoration-emerald-300 underline-offset-2 group-hover:text-emerald-600">
                                {title}
                            </span>
                        </Link>
                    ))}
                    <Link
                        href="/testimony/#c11"
                        className="group flex items-baseline gap-3 rounded-lg px-2 py-1.5 hover:bg-emerald-50"
                    >
                        <span className="w-6 shrink-0 font-mono text-[11px] text-emerald-600">11</span>
                        <span className="font-mono text-[13px] font-bold text-emerald-800 underline decoration-emerald-300 underline-offset-2 group-hover:text-emerald-600">
                            ADDENDUM: ON THE END OF THE WORLD
                        </span>
                    </Link>
                </div>
                <div className="mt-4 flex flex-wrap items-center gap-2 px-2">
                    <TestimonyPdfButton variant="homepage" />
                </div>
            </div>
        </div>
    );
}

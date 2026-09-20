// What every volunteer deserves, and what Oregon State Parks does not have.
//
// The five were asked for in the Open Letter of August 24, 2025, and not one
// of them was asked for him. They are not a remedy. They are the conditions
// under which unpaid labour can be accepted at all, and the boxes are empty
// because the agency has not built them.
//
// The boxes are empty on purpose and there is no way to check them from here.
// They are checked by the Director, or they are not.
import Link from "next/link";
import Icon from "@/components/Icon";

const CONDITIONS = [
    "An investigation when misconduct is documented.",
    "Consequences for managers who coerce volunteers.",
    "Protection from retaliation for volunteers who report.",
    "A grievance process that does not run through the people causing the harm.",
    "Training and oversight for the people who supervise volunteers.",
];

export default function WhatVolunteersDeserve() {
    return (
        <div className="mt-4 overflow-hidden rounded-2xl border border-amber-300 bg-white shadow-sm">
            <div className="border-b border-amber-200 bg-amber-50 px-6 py-5 sm:px-8">
                <div className="inline-flex items-center gap-2">
                    <Icon name="Shield" size={20} strokeWidth={2} className="shrink-0 text-amber-600" />
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                        What every volunteer deserves
                    </h2>
                </div>
                <p className="mt-2 max-w-3xl text-[15px] leading-relaxed text-gray-800">
                    These five were asked for on August 24, 2025, in{" "}
                    <a
                        href="https://www.reddit.com/r/volunteer/comments/1mzropa/an_open_letter_to_oregon_parks_recreation/"
                        target="_blank"
                        rel="noreferrer"
                        className="underline decoration-amber-400 hover:text-amber-700"
                    >
                        an open letter
                    </a>{" "}
                    to the Director of Oregon State Parks. Not one of them was asked for me.
                </p>
            </div>

            <ul className="divide-y divide-gray-100 px-6 py-2 sm:px-8">
                {CONDITIONS.map((c) => (
                    <li key={c} className="flex items-start gap-3 py-3">
                        <span
                            aria-hidden
                            className="mt-[4px] h-4 w-4 shrink-0 rounded-[3px] border-2 border-gray-400 bg-white"
                        />
                        <span className="sr-only">Not done.</span>
                        <span className="text-[15px] leading-relaxed text-gray-800">{c}</span>
                    </li>
                ))}
            </ul>

            <div className="border-t border-gray-100 px-6 py-5 sm:px-8">
                <p className="max-w-3xl text-[15px] leading-relaxed text-gray-800">
                    None of these is a remedy. They are the conditions under which unpaid labour
                    can be accepted at all. Their absence is not an oversight in one park. It is a
                    structural failure of the institution, and every volunteer working in Oregon
                    State Parks today is working without them.
                </p>
                <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-gray-800">
                    The boxes have been empty since August 24, 2025. They are checked by the
                    Director, or they are not checked at all.
                </p>
                <div className="mt-4 flex flex-wrap justify-center gap-x-6 gap-y-2 text-[13px]">
                    <Link
                        href="/for-volunteers"
                        className="font-mono font-bold uppercase tracking-wide text-amber-800 underline decoration-amber-300 hover:text-amber-600"
                    >
                        For volunteers
                    </Link>
                    <Link
                        href="/testimony/#the-director-and-her-deputy"
                        className="font-mono font-bold uppercase tracking-wide text-amber-800 underline decoration-amber-300 hover:text-amber-600"
                    >
                        The Director and Her Deputy
                    </Link>
                </div>
            </div>
        </div>
    );
}

// What every volunteer deserves, and what Oregon State Parks does not have.
//
// The five were asked for in the Open Letter of August 24, 2025, and not one
// of them was asked for him. They are not a remedy. They are the conditions
// under which unpaid labour can be accepted at all, and the boxes are empty
// because the agency has not built them.
//
// The boxes are empty on purpose and there is no way to check them from here.
// They are checked by the Director, or they are not.
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
        <div id="what-every-volunteer-deserves" className="mt-4 overflow-hidden rounded-2xl border border-amber-300 bg-white shadow-sm lg:scroll-mt-28">
            <div className="border-b border-amber-200 bg-amber-50 px-6 py-5 sm:px-8">
                <div className="mx-auto w-full max-w-4xl">
                <div className="inline-flex items-center gap-2">
                    <Icon name="Shield" size={20} strokeWidth={2} className="shrink-0 text-amber-600" />
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                        What every volunteer deserves.
                    </h2>
                </div>
                <p className="mt-2 text-[15px] leading-relaxed text-gray-800">
                    These five protections were requested for every Oregon State Parks volunteer in{" "}
                    <a
                        href="https://www.reddit.com/r/volunteer/comments/1mzropa/an_open_letter_to_oregon_parks_recreation/"
                        target="_blank"
                        rel="noreferrer"
                        className="underline decoration-amber-400 hover:text-amber-700"
                    >
                        an open letter
                    </a>{" "}
                    to the Director on August 24, 2025. She claimed to take concerns about the
                    volunteer program seriously. More than a year later, she has neither directly
                    acknowledged nor implemented any of them.
                </p>
                </div>
            </div>

            <ul className="mx-auto w-full max-w-4xl divide-y divide-gray-100 px-6 py-2 sm:px-8">
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

        </div>
    );
}

// components/CadRecord.tsx
//
// CAD record SP26097765, laid out as HTML. The released PDF is a two-page
// dispatch printout; this rendering puts its two load-bearing fields — the
// officer identified and the reason for the visit — where they cannot be
// missed. The note on the stated reason sits directly under it. The source
// documents remain one click away.

import Link from "next/link";
import { findDoc, registerHref } from "@/components/AccountabilityRecord";

function Field({ label, value, note }: { label: string; value: string; note?: string }) {
    return (
        <div className="px-5 py-2.5">
            <dt className="text-xs uppercase tracking-wider text-gray-400">{label}</dt>
            <dd className="mt-0.5 text-sm text-gray-900">{value || "—"}</dd>
            {note && <dd className="mt-0.5 text-xs text-gray-500 leading-snug">{note}</dd>}
        </div>
    );
}

export default function CadRecord() {
    const release = findDoc("osp", "The record released");
    const statement = findDoc("usfs", "Forest Service Statement");

    return (
        <div className="my-8 border border-gray-300 rounded-lg bg-white overflow-hidden">
            {/* document header */}
            <div className="px-5 py-4 bg-gray-50 border-b border-gray-300">
                <div className="text-xs uppercase tracking-wider text-gray-500">
                    Oregon State Police &middot; Central Records Section
                </div>
                <div className="mt-1 text-base font-semibold text-gray-900">
                    Dispatch from CAD Details &mdash; SP26097765
                </div>
                <div className="mt-1 text-xs text-gray-500">
                    Event of March 24, 2026 &middot; Printed April 13, 2026 &middot; Released July 14, 2026
                    under PR27478
                </div>
            </div>

            {/* the two fields that matter */}
            <div className="grid sm:grid-cols-2 border-b border-gray-200">
                <div className="px-5 py-4 border-b sm:border-b-0 sm:border-r border-gray-200">
                    <div className="text-xs uppercase tracking-wider text-gray-400">The officer identified</div>
                    <div className="mt-1 text-2xl font-bold text-gray-900">Jake Hyde</div>
                    <div className="mt-1 text-sm text-gray-700">
                        Badge 56397 &middot; Unit 9452 &middot; Primary unit &middot; Unit type:{" "}
                        <span className="font-semibold text-red-700">Criminal</span>
                    </div>
                </div>
                <div className="px-5 py-4">
                    <div className="text-xs uppercase tracking-wider text-gray-400">The reason for the visit, as entered</div>
                    <div className="mt-1 font-mono text-base font-bold text-gray-900 leading-snug break-words">
                        FOR THE FOREST SERVICE // FOLLOWUP INTERVIEW W/ ROBERT WHITE
                    </div>
                    {statement && (
                        <div className="mt-2 text-sm text-gray-700 leading-relaxed">
                            This characterization did not survive the District Ranger&rsquo;s letter: the Forest
                            Service did not initiate the interview, and its involvement was limited to unlocking
                            the gate and guiding Oregon State Police to the work center.{" "}
                            <Link
                                href={registerHref(statement)}
                                className="underline text-emerald-800 hover:text-emerald-600"
                            >
                                The Forest Service Statement, July 24, 2026
                            </Link>
                        </div>
                    )}
                </div>
            </div>

            {/* the rest of the record */}
            <dl className="grid grid-cols-1 min-[480px]:grid-cols-2 lg:grid-cols-3">
                <Field label="CAD event #" value="2026-00097765" />
                <Field label="Priority" value="Low" />
                <Field label="Source" value="Officer Initiated" />
                <Field label="Event type" value="No Call Type Selected" />
                <Field
                    label="Created by"
                    value="DPSST #48454"
                    note="Identity requested July 15, 2026. Not produced."
                />
                <Field
                    label="Caller"
                    value="WHITE, ROBERT"
                    note="My name, in the caller field of an officer-initiated event."
                />
                <Field label="Created / dispatched" value="March 24, 2026, 8:41 AM" />
                <Field label="Arrival" value="9:50 AM" />
                <Field label="Closed" value="10:18 AM" />
                <Field
                    label="Dispatch address"
                    value="Siltcoos Work Center, OR"
                    note="Restricted federal land, behind a locked gate."
                />
                <Field label="Person role" value="Other" />
                <Field label="Unit disposition" value="1 — No Action Taken" />
            </dl>

            {/* source */}
            {release && (
                <div className="bg-gray-50 border-t border-gray-300 px-5 py-3">
                    <Link
                        href={registerHref(release)}
                        className="text-sm underline text-emerald-800 hover:text-emerald-600"
                    >
                        The record, as released July 14, 2026 &rarr;
                    </Link>
                </div>
            )}
        </div>
    );
}

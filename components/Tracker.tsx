// components/Tracker.tsx
"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface TrackedEvent {
    label: string;
    date: string;
    context?: string;
    link?: string;
}

interface LegalDeadline {
    label: string;
    date: string;
    statute?: string;
    link?: string;
}

interface PendingClaim {
    label: string;
    statute: string;
    context: string;
    link?: string;
}

const SILENCE_EVENTS: TrackedEvent[] = [
    {
        label: "Permanent Statewide Ban from Oregon State Parks",
        date: "2025-03-27",
        context: "Status: No investigation initiated.",
        link: "/evidence/expulsion"
    },
    {
        label: "Open Letter to Director",
        date: "2025-08-25",
        context: "Status: Communication closed by director.",
        link: "/lisa-sumption/open-letter"
    }
];

const LEGAL_DEADLINE: LegalDeadline = {
    label: "First Amendment Filing Deadline",
    date: "2027-03-27",
    statute: "Statute of Limitations (42 U.S.C. § 1983)"
};

const PENDING_CLAIMS: PendingClaim[] = [
    {
        label: "First Amendment Retaliation",
        statute: "42 U.S.C. § 1983",
        context: "Violation ongoing.",
        link: "/evidence/expulsion"
    },
    {
        label: "Public Records Violation",
        statute: "ORS 192.324",
        context: "90+ days of silence. Portal obstruction documented.",
        link: "/lisa-sumption/public-records-request"
    },
    {
        label: "Identity-Based Targeting",
        statute: "42 U.S.C. § 1983 / ORS 659A",
        context: "Sexuality mocked on recording. Disclosures weaponized.",
        link: "/evidence/betrayal"
    }
];

function calculateDaysSince(dateString: string): number {
    const targetDate = new Date(dateString);
    targetDate.setHours(0, 0, 0, 0);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const diffTime = Math.abs(today.getTime() - targetDate.getTime());
    return Math.floor(diffTime / (1000 * 60 * 60 * 24));
}

function calculateDaysUntil(dateString: string): number {
    const targetDate = new Date(dateString);
    const today = new Date();
    const diffTime = targetDate.getTime() - today.getTime();
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}

export default function Tracker() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <div className="mt-6 w-full p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="text-center text-sm text-slate-500">Loading...</div>
            </div>
        );
    }

    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    });

    return (
        <div className="mt-6 w-full rounded-2xl bg-white border border-slate-200 shadow-sm overflow-hidden">

            <div className="bg-emerald-50 px-4 py-2.5 border-b border-slate-200">
                <div className="text-sm font-bold text-slate-900 uppercase tracking-wide">
                    Accountability Tracker
                </div>
                <div className="text-xs text-slate-600 mt-0.5">
                    Last Updated:<br />{formattedDate}
                </div>
            </div>

            <div className="p-4 space-y-4">

                {/* DAYS SINCE */}
                <div>
                    <h3 className="text-xs font-semibold text-slate-700 mb-2 uppercase tracking-wide">
                        Days Since
                    </h3>
                    <div className="space-y-2">
                        {SILENCE_EVENTS.map((event, index) => {
                            const days = calculateDaysSince(event.date);
                            return (
                                <div key={index} className="bg-slate-50 p-2.5 rounded">
                                    <div className="flex justify-between items-center mb-1">
                                        {event.link ? (
                                            <Link
                                                href={event.link}
                                                className="text-sm font-medium text-slate-900 hover:text-emerald-700 underline"
                                            >
                                                {event.label}
                                            </Link>
                                        ) : (
                                            <div className="text-sm font-medium text-slate-900">
                                                {event.label}
                                            </div>
                                        )}
                                        <div className="text-2xl font-bold text-slate-900 tabular-nums">
                                            {days}
                                        </div>
                                    </div>
                                    {event.context && (
                                        <div className="text-xs text-slate-600 leading-snug">
                                            {event.context}
                                        </div>
                                    )}
                                    <div className="text-xs text-slate-500 mt-1">
                                        {new Date(event.date).toLocaleDateString('en-US', {
                                            month: 'long',
                                            day: 'numeric',
                                            year: 'numeric'
                                        })}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* PENDING CLAIMS */}
                <div className="pt-2 border-t border-slate-200">
                    <h3 className="text-xs font-semibold text-slate-700 mb-2 uppercase tracking-wide">
                        Pending Claims
                    </h3>
                    <div className="text-xs text-slate-500 mb-2 italic">
                        Violation ongoing. Days at filing: 0.
                    </div>
                    <div className="space-y-2">
                        {PENDING_CLAIMS.map((claim, index) => (
                            <div key={index} className="bg-slate-50 p-2.5 rounded">
                                <div className="flex justify-between items-center mb-1">
                                    <div className="text-sm font-medium text-slate-900">
                                        {claim.link ? (
                                            <Link href={claim.link} className="underline hover:text-emerald-700">
                                                {claim.label}
                                            </Link>
                                        ) : claim.label}
                                    </div>
                                    <div className="text-2xl font-bold text-slate-300 tabular-nums">
                                        0
                                    </div>
                                </div>
                                <div className="text-xs text-slate-500 leading-snug">
                                    {claim.statute}
                                </div>
                                <div className="text-xs text-slate-600 leading-snug mt-1">
                                    {claim.context}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* STATUTORY TIMEFRAME */}
                <div className="pt-2 border-t border-slate-200">
                    <h3 className="text-xs font-semibold text-slate-600 mb-2 uppercase tracking-wide">
                        Statutory Timeframe
                    </h3>
                    <div className="bg-slate-50 p-2.5 rounded">
                        <div className="flex justify-between items-baseline mb-1">
                            <div className="text-xs font-medium text-slate-700 leading-snug pr-2">
                                {LEGAL_DEADLINE.label}
                            </div>
                            <div className="text-xl font-semibold text-slate-700 tabular-nums">
                                {calculateDaysUntil(LEGAL_DEADLINE.date)}
                            </div>
                        </div>
                        {LEGAL_DEADLINE.statute && (
                            <div className="text-xs text-slate-500 leading-snug mt-1">
                                {LEGAL_DEADLINE.statute}
                            </div>
                        )}
                        <div className="text-xs text-slate-500 mt-1">
                            {new Date(LEGAL_DEADLINE.date).toLocaleDateString('en-US', {
                                month: 'long',
                                day: 'numeric',
                                year: 'numeric'
                            })}
                        </div>
                    </div>
                </div>

            </div>

            <div className="bg-slate-50 px-4 py-3 border-t border-slate-200">
                <div className="text-xs text-slate-700 text-center leading-snug">
                    Every day of silence is a choice.<br />Every choice is documented.
                </div>
            </div>
        </div>
    );
}

// components/archive/SilenceTracker.tsx
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
}

const SILENCE_EVENTS: TrackedEvent[] = [
    {
        label: "Permanently Banned from Oregon State Parks",
        date: "2025-03-27",
        context: "No investigation conducted.",
        link: "/expulsion"
    },
    {
        label: "Director Sumption",
        date: "2025-12-08",
        context: "Communication Closed, Documentation Reframed as Emotional Processing",
        link: "/lisa-sumption"
    },
    {
        label: "Governor Kotek",
        date: "2025-11-17",
        context: "First Contact with Governor's Office, No Acknowledgement",
        link: "/governor-kotek"
    }
];

const LEGAL_DEADLINE: LegalDeadline = {
    label: "First Amendment Filing Deadline",
    date: "2027-03-27",
    statute: "Statute of Limitations (42 U.S.C. § 1983)"
};


function calculateDaysSince(dateString: string): number {
    const targetDate = new Date(dateString);
    const today = new Date();
    const diffTime = Math.abs(today.getTime() - targetDate.getTime());
    return Math.floor(diffTime / (1000 * 60 * 60 * 24));
}

function calculateDaysUntil(dateString: string): number {
    const targetDate = new Date(dateString);
    const today = new Date();
    const diffTime = targetDate.getTime() - today.getTime();
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}

export default function SilenceTracker() {
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
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    });

    return (
        <div className="mt-6 w-full rounded-2xl bg-white border border-slate-200 shadow-sm overflow-hidden">

            <div className="bg-slate-50 px-4 py-2.5 border-b border-slate-200">
                <div className="text-sm font-bold text-slate-900 uppercase tracking-wide">
                    Accountability Tracker
                </div>
                <div className="text-xs text-slate-600 mt-0.5">
                    Last Updated: {formattedDate}
                </div>
            </div>

            <div className="p-4 space-y-4">

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
                    Every day of silence is a choice.<br/>Every choice is documented.
                </div>
            </div>
        </div>
    );
}
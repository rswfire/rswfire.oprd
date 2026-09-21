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
        context: "Status: Director closed communication with no investigation initiated.",
        link: "/lisa-sumption"
    }
];

const LEGAL_DEADLINE: LegalDeadline = {
    label: "First Amendment Filing Deadline",
    date: "2027-03-27",
    statute: "Statute of Limitations (42 U.S.C. § 1983)"
};

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
            <div className="w-full p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="text-center text-sm text-slate-500">Loading...</div>
            </div>
        );
    }

    return (
        <div className="w-full rounded-2xl bg-white border border-slate-200 shadow-sm overflow-hidden">

            <div className="bg-emerald-50 px-4 py-2.5 border-b border-slate-200">
                <div className="text-sm font-bold text-slate-900 uppercase tracking-wide">
                    Days Since
                </div>
            </div>

            <div className="p-4 space-y-4">

                <div>
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

            </div>

        </div>
    );
}

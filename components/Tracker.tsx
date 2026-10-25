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
        context: "Status: No protections for volunteers.",
        link: "/lisa-sumption"
    },
    {
        label: "Oregon State Police Received the Email",
        date: "2026-03-03",
        context: "Status: Partial acknowledgment, asserted privileges.",
        link: "/evidence/police"
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

export default function Tracker({ compact = false }: { compact?: boolean }) {
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

    if (compact) {
        // The mobile menu's width: the counts side by side, each its number over its event.
        return (
            <div className="w-full rounded-2xl bg-white border border-slate-200 shadow-sm overflow-hidden">
                <div className="bg-emerald-50 px-3 py-2 border-b border-slate-200">
                    <div className="text-[11px] font-bold text-slate-900 uppercase tracking-wide">Days Since</div>
                </div>
                <div className="grid grid-cols-2 gap-2 p-2">
                    {SILENCE_EVENTS.map((event, index) => {
                        const days = calculateDaysSince(event.date);
                        const label = event.link ? (
                            <Link href={event.link} className="underline hover:text-emerald-700">
                                {event.label}
                            </Link>
                        ) : (
                            event.label
                        );
                        return (
                            <div key={index} className="flex flex-col rounded bg-slate-50 p-2.5">
                                <div className="text-3xl font-bold leading-none text-slate-900 tabular-nums">{days}</div>
                                <div className="mt-2 text-xs font-medium leading-snug text-slate-900">{label}</div>
                                {event.context && (
                                    <div className="mt-1 text-[11px] leading-snug text-slate-600">{event.context}</div>
                                )}
                                <div className="mt-auto pt-1.5 text-[11px] text-slate-500">
                                    {new Date(event.date).toLocaleDateString("en-US", {
                                        month: "long",
                                        day: "numeric",
                                        year: "numeric",
                                    })}
                                </div>
                            </div>
                        );
                    })}
                </div>
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

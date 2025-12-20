// components/SectionNav.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Icon from "@/components/Icon";
import SilenceTracker from "@/components/archive/SilenceTracker";

type Section = {
    href: string;
    label: string;
    separator?: boolean;
    subsections?: { href: string; label: string }[];
};

export default function SectionNav({ sections }: { sections: Section[] }) {
    const pathname = usePathname();
    const [mobileNavOpen, setMobileNavOpen] = useState(false);

    return (
        <>
            <div className="lg:hidden mb-6">
                <button
                    onClick={() => setMobileNavOpen(!mobileNavOpen)}
                    className="w-full flex items-center justify-between rounded-lg border border-slate-200 bg-white p-4 text-left shadow-sm"
                >
                    <span className="font-semibold text-sm">Archive Navigation</span>
                    <Icon name={mobileNavOpen ? "ChevronUp" : "ChevronDown"} size="20" />
                </button>

                {mobileNavOpen && (
                    <div className="mt-2 space-y-3">
                        <nav className="rounded-lg border border-slate-200 bg-white shadow-sm p-3">
                            <ul className="space-y-1">
                                {sections.map((s) => {
                                    if (s.separator) {
                                        return (
                                            <li key={s.href} className="my-2">
                                                <div className="border-t border-slate-200" />
                                            </li>
                                        );
                                    }

                                    const hasActiveSubsection = s.subsections?.some(sub => pathname === sub.href);
                                    const active = s.href === "/"
                                        ? pathname === "/"
                                        : pathname === s.href || pathname.startsWith(s.href + "/") || hasActiveSubsection;

                                    return (
                                        <li key={s.href}>
                                            <Link
                                                href={s.href}
                                                onClick={() => setMobileNavOpen(false)}
                                                className={`block rounded-md px-3 py-2 text-sm transition ${
                                                    active
                                                        ? "bg-emerald-50 text-emerald-900 font-semibold border border-emerald-200"
                                                        : "text-slate-700 hover:bg-slate-50"
                                                }`}
                                            >
                                                {s.label}
                                            </Link>

                                            {s.subsections && (
                                                <ul className="ml-4 mt-1 space-y-1">
                                                    {s.subsections.map((sub) => {
                                                        const subActive = pathname === sub.href || pathname === sub.href + '/';
                                                        return (
                                                            <li key={sub.href}>
                                                                <Link
                                                                    href={sub.href}
                                                                    onClick={() => setMobileNavOpen(false)}
                                                                    className={`block rounded-md px-3 py-1.5 text-xs transition ${
                                                                        subActive
                                                                            ? "bg-emerald-100 text-emerald-900 font-semibold border border-emerald-200"
                                                                            : "text-slate-600 hover:bg-slate-50"
                                                                    }`}
                                                                >
                                                                    {sub.label}
                                                                </Link>
                                                            </li>
                                                        );
                                                    })}
                                                </ul>
                                            )}
                                        </li>
                                    );
                                })}
                            </ul>
                        </nav>

                        <SilenceTracker />
                    </div>
                )}
            </div>

            <div className="hidden md:block space-y-3">
            <nav className="rounded-2xl border border-slate-200 bg-white/90 backdrop-blur shadow-sm p-3 text-sm">
                    <ul className="space-y-1">
                        {sections.map((s) => {
                            if (s.separator) {
                                return (
                                    <li key={s.href} className="my-2">
                                        <div className="border-t border-slate-200" />
                                    </li>
                                );
                            }

                            const hasActiveSubsection = s.subsections?.some(sub => pathname === sub.href);
                            const active = s.href === "/"
                                ? pathname === "/"
                                : pathname === s.href || pathname.startsWith(s.href + "/") || hasActiveSubsection;

                            return (
                                <li key={s.href}>
                                    <Link
                                        href={s.href}
                                        className={`block rounded-md px-3 py-2 transition ${
                                            active
                                                ? "bg-emerald-50 text-emerald-900 font-semibold border border-emerald-200"
                                                : "text-slate-700 hover:bg-slate-50"
                                        }`}
                                    >
                                        {s.label}
                                    </Link>

                                    {s.subsections && (
                                        <ul className="ml-4 mt-1 space-y-1">
                                            {s.subsections.map((sub) => {
                                                const subActive = pathname === sub.href || pathname === sub.href + '/';
                                                return (
                                                    <li key={sub.href}>
                                                        <Link
                                                            href={sub.href}
                                                            className={`block rounded-md px-2 py-1.5 text-xs transition ${
                                                                subActive
                                                                    ? "bg-emerald-50 text-emerald-900 font-semibold border border-emerald-200"
                                                                    : "text-slate-600 hover:bg-slate-50"
                                                            }`}
                                                        >
                                                            {sub.label}
                                                        </Link>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    )}
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                <SilenceTracker />

                {/* CORRESPONDENCE SECTION */}
                <div className="mt-6 rounded-2xl border border-slate-200 bg-white shadow-sm p-4">
                    <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-3 pb-2 border-b border-slate-200">
                        Correspondence
                    </h3>
                    <ul className="space-y-2 list-disc list-inside">
                        <Link
                            href="/correspondence/general"
                            className="block text-xs text-slate-700 hover:text-emerald-700 hover:underline"
                        >
                            <li>General Correspondence</li>
                        </Link>
                        <Link
                            href="/correspondence/institution"
                            className="block text-xs text-slate-700 hover:text-emerald-700 hover:underline"
                        >
                            <li>State Officials</li>
                        </Link>
                        <Link
                            href="/correspondence/press"
                            className="block text-xs text-slate-700 hover:text-emerald-700 hover:underline"
                        >
                            <li>Press Communications</li>
                        </Link>
                        <Link
                            href="/correspondence/complaints"
                            className="block text-xs text-slate-700 hover:text-emerald-700 hover:underline"
                        >
                            <li>Formal Complaints</li>
                        </Link>



                    </ul>
                </div>

            </div>
        </>
    );
}
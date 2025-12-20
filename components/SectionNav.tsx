// components/SectionNav.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Icon from "@/components/Icon";

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
            {/* Mobile: Collapsible Nav */}
            <div className="lg:hidden mb-6">
                <button
                    onClick={() => setMobileNavOpen(!mobileNavOpen)}
                    className="w-full flex items-center justify-between rounded-lg border border-slate-200 bg-white p-4 text-left shadow-sm"
                >
                    <span className="font-semibold text-sm">Archive Navigation</span>
                    <Icon name={mobileNavOpen ? "ChevronUp" : "ChevronDown"} size="20" />
                </button>

                {mobileNavOpen && (
                    <nav className="mt-2 rounded-lg border border-slate-200 bg-white shadow-sm p-3">
                        <ul className="space-y-1">
                            {sections.map((s) => {
                                if (s.separator) {
                                    return (
                                        <li key={s.href} className="my-2">
                                            <div className="border-t border-slate-200" />
                                        </li>
                                    );
                                }

                                const active = s.href === "/"
                                    ? pathname === "/"
                                    : pathname.startsWith(s.href);

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
                                                    const subActive = pathname === sub.href;
                                                    return (
                                                        <li key={sub.href}>
                                                            <Link
                                                                href={sub.href}
                                                                onClick={() => setMobileNavOpen(false)}
                                                                className={`block rounded-md px-3 py-1.5 text-xs transition ${
                                                                    subActive
                                                                        ? "bg-emerald-50 text-emerald-800 font-medium"
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
                )}
            </div>

            {/* Desktop: Sticky Sidebar */}
            <div className="hidden md:block sticky top-33 space-y-3">
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

                            const active = s.href === "/"
                                ? pathname === "/"
                                : pathname.startsWith(s.href);

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
                                                const subActive = pathname === sub.href;
                                                return (
                                                    <li key={sub.href}>
                                                        <Link
                                                            href={sub.href}
                                                            className={`block rounded-md px-2 py-1.5 text-xs transition ${
                                                                subActive
                                                                    ? "bg-emerald-50 text-emerald-800 font-medium border border-emerald-100"
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
            </div>
        </>
    );
}
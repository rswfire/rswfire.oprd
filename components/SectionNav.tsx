// components/SectionNav.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Tracker from "@/components/Tracker";
import Permanence from "@/components/Permanence";

type Section = {
    href: string;
    label: string;
    separator?: boolean;
    subsections?: { href: string; label: string }[];
};

export default function SectionNav({ sections }: { sections: Section[] }) {
    const pathname = usePathname();

    return (
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

            <Tracker />
            <Permanence />
        </div>
    );
}

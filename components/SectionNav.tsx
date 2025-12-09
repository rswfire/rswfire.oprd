// components/SectionNav.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Section = {
    href: string;
    label: string;
};

export default function SectionNav({ sections }: { sections: Section[] }) {
    const pathname = usePathname();

    return (
        <div className="sticky top-24 space-y-3">
            <nav className="rounded-2xl border border-slate-200 bg-white/90 backdrop-blur shadow-sm p-3 text-sm">
                <ul className="space-y-1">
                    {sections.map((s) => {
                        // Exact match for home, prefix match for others
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
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </div>
    );
}
"use client";

import { useState } from "react";
import Link from "next/link";
import Icon from "@/components/Icon";
import { archiveSections } from "@/lib/sections";

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/95 backdrop-blur">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 py-3">
                <div className="flex items-start justify-between w-full">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center flex-shrink-0">
                            <Icon name="TreeDeciduous" size="30" className="text-emerald-700"/>
                        </div>
                        <div className="leading-tight space-y-0.5">
                            <h1 className="text-base sm:text-xl font-bold tracking-wide uppercase text-slate-900">
                                OPRD VOLUNTEER ABUSE
                            </h1>
                            <h2 className="text-xs sm:text-sm tracking-tighter text-slate-600 font-semibold">
                                OREGON PARKS &amp; RECREATION DEPARTMENT
                            </h2>
                            <h3 className="text-xs tracking-tightest text-slate-500 hidden sm:block">
                                UNDER DIRECTOR LISA SUMPTION
                            </h3>
                            <div className="font-bold text-emerald-700 text-xs sm:hidden">
                                INDEPENDENT DOCUMENTATION
                            </div>
                        </div>
                    </Link>

                    <div className="hidden sm:flex flex-col items-end gap-2">
                        <div className="font-bold text-emerald-700 text-sm whitespace-nowrap">
                            INDEPENDENT DOCUMENTATION
                        </div>
                        <nav className="flex gap-4 text-xs font-medium text-slate-600">
                            <Link href="/" className="hover:text-black">
                                OVERVIEW
                            </Link>
                            <Link href="/key-individuals" className="hover:text-black">
                                KEY INDIVIDUALS
                            </Link>
                            <Link href="/timeline" className="hover:text-black">
                                TIMELINE
                            </Link>
                            <Link href="/lisa-sumption" className="hover:text-black">
                                THE DIRECTOR'S DECISIONS
                            </Link>
                            <Link href="/lessons-learned" className="hover:text-black">
                                LESSONS LEARNED
                            </Link>
                        </nav>
                    </div>

                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="sm:hidden p-2 text-slate-600 hover:text-black"
                        aria-label="Toggle menu"
                    >
                        <Icon name={mobileMenuOpen ? "X" : "Menu"} size="24" />
                    </button>
                </div>

                {/* Mobile Nav Dropdown - Full Archive */}
                {mobileMenuOpen && (
                    <nav className="mobile-menu-scroll sm:hidden mt-3 pb-3 border-t border-slate-200 pt-3 max-h-[70vh] overflow-y-auto">
                        <ul className="space-y-1">
                            {archiveSections.map((section) => (
                                <li key={section.href}>
                                    <Link
                                        href={section.href}
                                        className="block px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {section.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                )}
            </div>
        </header>
    );
}
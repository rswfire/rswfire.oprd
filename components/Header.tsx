"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Icon from "@/components/Icon";
import { archiveSections } from "@/lib/sections";

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 py-4">
                <div className="flex items-center justify-between gap-4">

                    {/* Brand */}
                    <Link href="/" className="flex items-start gap-3">
                        <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-md bg-emerald-50">
                            <Icon
                                name="TreeDeciduous"
                                size="26"
                                className="text-emerald-700"
                            />
                        </div>

                        <div className="leading-tight">
                            <h1 className="text-sm sm:text-lg font-bold tracking-wide uppercase text-slate-900">
                                OPRD Volunteer Abuse
                            </h1>

                            <h2 className="text-xs sm:text-sm font-semibold tracking-tight text-slate-600">
                                Oregon Parks &amp; Recreation Department
                            </h2>

                            <p className="hidden sm:block text-xs tracking-tight text-slate-500">
                                Under Director Lisa Sumption
                            </p>

                            <p className="mt-1 text-xs font-semibold text-emerald-700 lg:hidden">
                                Independent Documentation
                            </p>
                        </div>
                    </Link>

                    {/* Desktop Right Callout */}
                    <div className="hidden lg:flex flex-col items-end text-right">
                        <span className="text-sm font-bold text-emerald-700">
                            Independent Documentation
                        </span>
                        <span className="text-xs tracking-wide text-slate-600">
                            Not disputed. Not investigated. Not addressed.
                        </span>
                    </div>

                    {/* Mobile Menu Toggle - Only render after mount */}
                    {mounted && (
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="lg:hidden rounded-md p-2 text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                            aria-label="Toggle menu"
                        >
                            <Icon name={mobileMenuOpen ? "X" : "Menu"} size="22" />
                        </button>
                    )}
                </div>

                {/* Mobile Nav - Only render after mount */}
                {mounted && mobileMenuOpen && (
                    <nav className="lg:hidden mt-4 border-t border-slate-200 pt-3">
                        <ul className="space-y-1">
                            {archiveSections.map((section) => (
                                <li key={section.href}>
                                    <Link
                                        href={section.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="block rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-900"
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
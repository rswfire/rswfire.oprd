"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Icon from "@/components/Icon";
import Tracker from "@/components/Tracker";
import Permanence from "@/components/Permanence";
import { archiveSections } from "@/lib/sections";

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [mobileMenuOpen]);

    return (
        <header className="relative z-20 border-b border-stone-200 bg-white lg:sticky lg:top-0">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 py-4">
                <div className="flex items-center justify-between gap-4">

                    <Link href="/" className="flex items-start gap-3">
                        <div className="leading-tight">
                            <h1 className="text-sm sm:text-lg font-bold tracking-wide uppercase text-slate-900">
                                OPRD Volunteer Abuse
                            </h1>

                            <h2 className="text-xs sm:text-sm font-semibold tracking-tight text-slate-600">
                                Oregon Parks &amp; Recreation Department
                            </h2>

                            <p className="text-xs sm:text-sm tracking-tight text-slate-500">
                                <span className="hidden sm:inline">Under </span>Director Lisa Sumption's Stewardship
                            </p>

                            <p className="hidden sm:block mt-1 text-xs font-semibold text-emerald-700 lg:hidden">
                                Independently verifiable. Never legally challenged. Not going away.
                            </p>
                        </div>
                    </Link>

                    <div className="hidden lg:flex flex-col items-end text-right gap-0.5">
                        <span className="text-xs font-bold tracking-widest uppercase text-slate-800">Independently verifiable.</span>
                        <span className="text-xs font-bold tracking-widest uppercase text-slate-800">Never legally challenged.</span>
                        <span className="text-xs font-bold tracking-widest uppercase text-slate-800">Not going away.</span>
                    </div>

                </div>

                {/* Floating menu button — the header itself scrolls away on
                    mobile; this stays. */}
                {mounted && (
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                        className="lg:hidden fixed top-3 right-3 z-50 flex flex-col items-center gap-0.5 rounded-xl border border-stone-200 bg-white/95 px-3 py-2 shadow-md backdrop-blur hover:shadow-lg transition-shadow"
                    >
                        <Icon
                            name={mobileMenuOpen ? "X" : "TreeDeciduous"}
                            size="24"
                            className="text-emerald-700"
                        />
                        <span className="text-[9px] font-bold uppercase tracking-widest text-slate-600">
                            {mobileMenuOpen ? "Close" : "Menu"}
                        </span>
                    </button>
                )}

                {mounted && mobileMenuOpen && (
                    <nav className="lg:hidden fixed inset-0 z-40 overflow-y-auto bg-white px-4 pt-4 pb-8">
                        <Link
                            href="/"
                            onClick={() => setMobileMenuOpen(false)}
                            className="block border-b border-slate-200 pb-3 pr-24 leading-tight"
                        >
                            <h1 className="text-sm font-bold tracking-wide uppercase text-slate-900">
                                OPRD Volunteer Abuse
                            </h1>
                            <h2 className="text-xs font-semibold tracking-tight text-slate-600">
                                Oregon Parks &amp; Recreation Department
                            </h2>
                            <p className="text-xs tracking-tight text-slate-500">
                                Director Lisa Sumption's Stewardship
                            </p>
                        </Link>
                        <ul className="mt-2 space-y-0">
                            {archiveSections.map((section, index) => {
                                if (section.separator) {
                                    return (
                                        <li key={section.href} className="my-2">
                                            <hr className="border-slate-300" />
                                        </li>
                                    );
                                }

                                return (
                                    <li key={section.href}>
                                        <Link
                                            href={section.href}
                                            onClick={() => setMobileMenuOpen(false)}
                                            className="block px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                                        >
                                            {section.label}
                                        </Link>

                                        {section.subsections && (
                                            <ul className="ml-4 border-l-2 border-slate-200">
                                                {section.subsections.map((subsection) => (
                                                    <li key={subsection.href}>
                                                        <Link
                                                            href={subsection.href}
                                                            onClick={() => setMobileMenuOpen(false)}
                                                            className="block px-3 py-1.5 text-xs text-slate-600 hover:bg-slate-50 hover:text-slate-900 border-b border-slate-100 last:border-b-0"
                                                        >
                                                            {subsection.label}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </li>
                                );
                            })}
                        </ul>

                        {/* Sidebar content the desktop aside can't show on mobile.
                            Closes the menu when a link inside is tapped. */}
                        <div
                            className="mt-2 border-t border-slate-200 pt-2"
                            onClick={(e) => {
                                if ((e.target as HTMLElement).closest("a")) {
                                    setMobileMenuOpen(false);
                                }
                            }}
                        >
                            <Tracker />
                            <Permanence />
                        </div>
                    </nav>
                )}
            </div>
        </header>
    );
}

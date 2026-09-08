"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Icon from "@/components/Icon";
import AccountabilityStatus from "@/components/AccountabilityStatus";
import NewsletterSignup from "@/components/NewsletterSignup";
import Tracker from "@/components/Tracker";
import VolunteerShield from "@/components/VolunteerShield";
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

                            <p className="text-xs sm:text-sm tracking-tight text-slate-500 md:hidden lg:block">
                                <span className="hidden sm:inline">Under </span>Director Lisa Sumption's Stewardship
                            </p>

                            <p className="hidden sm:block mt-1 text-xs font-semibold text-emerald-700 md:hidden">
                                Independently verifiable. Never legally challenged. Not going away.
                            </p>
                        </div>
                    </Link>

                    <div className="hidden md:flex items-center gap-4">
                        <div className="hidden xl:flex flex-col items-end text-right gap-0.5">
                            <span className="text-xs font-bold tracking-widest uppercase text-slate-800">Independently verifiable.</span>
                            <span className="text-xs font-bold tracking-widest uppercase text-slate-800">Never legally challenged.</span>
                            <span className="text-xs font-bold tracking-widest uppercase text-slate-800">Not going away.</span>
                        </div>

                        {/* The shield, compact, routing every page to the reason for the archive */}
                        <Link
                            href="/for-volunteers"
                            className="group flex items-center gap-3 rounded-xl border border-red-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden"
                        >
                            <div className="flex h-14 w-12 items-center justify-center bg-red-700 group-hover:bg-red-800 transition-colors">
                                <Icon name="Shield" className="text-white w-6 h-6" size={24} strokeWidth={1.5} />
                            </div>
                            <div className="py-1.5 pr-4 leading-tight">
                                <div className="text-[11px] font-bold uppercase tracking-widest text-red-900">For Volunteers</div>
                                <div className="text-[11px] text-gray-600">If this happened to you,<br/>it has a name.</div>
                            </div>
                        </Link>

                        {/* The one place he makes public statements, and the one
                            place he can be found. Same weight as the shield. */}
                        <a
                            href="https://x.com/rswfire"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-3 rounded-xl border border-slate-300 shadow-sm hover:shadow-md transition-shadow overflow-hidden"
                        >
                            <div className="flex h-14 w-12 items-center justify-center bg-slate-900 group-hover:bg-black transition-colors">
                                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white" aria-hidden="true">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.451-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117l11.966 15.644z" />
                                </svg>
                            </div>
                            <div className="py-1.5 pr-4 leading-tight">
                                <div className="text-[11px] font-bold uppercase tracking-widest text-slate-900">Public Statements</div>
                                <div className="text-[11px] text-gray-600">@rswfire &mdash; the one<br/>place to find me.</div>
                            </div>
                        </a>
                    </div>

                </div>
            </div>

            {/* On phones the shield becomes a full-width bar under the header. */}
            <Link
                href="/for-volunteers"
                className="md:hidden flex items-center gap-2 border-t border-red-200 bg-red-700 px-4 py-2 text-white active:bg-red-800"
            >
                <Icon name="Shield" className="w-4 h-4 shrink-0" size={16} strokeWidth={1.75} />
                <span className="text-[11px] font-bold uppercase tracking-widest">For Volunteers</span>
                <span className="text-[11px] text-red-100">&mdash; if this happened to you, it has a name.</span>
            </Link>

            {/* And the one place he speaks publicly, same treatment. */}
            <a
                href="https://x.com/rswfire"
                target="_blank"
                rel="noopener noreferrer"
                className="md:hidden flex items-center gap-2 border-t border-slate-700 bg-slate-900 px-4 py-2 text-white active:bg-black"
            >
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 shrink-0 fill-white" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.451-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117l11.966 15.644z" />
                </svg>
                <span className="text-[11px] font-bold uppercase tracking-widest">@rswfire</span>
                <span className="text-[11px] text-slate-300">&mdash; public statements. The one place to find me.</span>
            </a>

            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                {/* Floating menu button — the header itself scrolls away on
                    mobile; this stays. */}
                {mounted && (
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                        className="md:hidden fixed top-3 right-3 z-50 flex flex-col items-center gap-0.5 rounded-xl border border-stone-200 bg-white/95 px-3 py-2 shadow-md backdrop-blur hover:shadow-lg transition-shadow"
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
                    <nav className="md:hidden fixed inset-0 z-40 overflow-y-auto bg-white px-4 pt-4 pb-8">
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
                            <VolunteerShield />
                            <NewsletterSignup />
                            <Tracker />
                            <AccountabilityStatus />
                            <Permanence />
                        </div>
                    </nav>
                )}
            </div>
        </header>
    );
}

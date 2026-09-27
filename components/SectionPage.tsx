// components/SectionPage.tsx
import type { ReactNode } from 'react';
import Link from 'next/link';
import Icon from '@/components/Icon';

type SystemMapLink = {
    href: string;
    label: string;
    blurb?: string;
};

/**
 * A page's colour, carried by its icon and its rule. The colours are the
 * ones the nav already gives each section in lib/sections.ts, so a page
 * header answers the nav item that reached it. Subpages take their
 * parent's colour.
 *
 * The classes are written out rather than built from the key: Tailwind
 * reads source text, so an interpolated class name produces no CSS.
 */
const TONES = {
    emerald: { icon: "text-emerald-600", eyebrow: "text-emerald-700", rule: "from-emerald-200 via-emerald-600 to-emerald-200" },
    indigo:  { icon: "text-indigo-600", eyebrow: "text-indigo-700",  rule: "from-indigo-200 via-indigo-600 to-indigo-200" },
    sky:     { icon: "text-sky-600", eyebrow: "text-sky-700",     rule: "from-sky-200 via-sky-600 to-sky-200" },
    blue:    { icon: "text-blue-600", eyebrow: "text-blue-700",    rule: "from-blue-200 via-blue-600 to-blue-200" },
    amber:   { icon: "text-amber-500", eyebrow: "text-amber-700",   rule: "from-amber-200 via-amber-500 to-amber-200" },
    rose:    { icon: "text-rose-600", eyebrow: "text-rose-700",    rule: "from-rose-200 via-rose-600 to-rose-200" },
    fuchsia: { icon: "text-fuchsia-600", eyebrow: "text-fuchsia-700", rule: "from-fuchsia-200 via-fuchsia-600 to-fuchsia-200" },
    cyan:    { icon: "text-cyan-600", eyebrow: "text-cyan-700",    rule: "from-cyan-200 via-cyan-600 to-cyan-200" },
    violet:  { icon: "text-violet-600", eyebrow: "text-violet-700",  rule: "from-violet-200 via-violet-600 to-violet-200" },
    teal:    { icon: "text-teal-600", eyebrow: "text-teal-700",    rule: "from-teal-200 via-teal-600 to-teal-200" },
} as const;

export type SectionTone = keyof typeof TONES;

type SectionPageProps = {
    title?: string;
    subtitle?: string;
    supplemental?: string;
    summary?: string;
    /** Lucide icon name, centered above the eyebrow. */
    emblem?: string;
    /** The page's colour, carried by the icon and the rule under the title. */
    tone?: SectionTone;
    /** A quieter third line under the subtitle. */
    tagline?: ReactNode;
    systemMap?: SystemMapLink | SystemMapLink[];
    children: ReactNode;
    previousPage?: {
        href: string;
        label: string;
    };
    nextPage?: {
        href: string;
        label: string;
    };
};

export default function SectionPage({
                                        title,
                                        subtitle,
                                        supplemental,
                                        emblem,
                                        tone = "emerald",
                                        tagline,
                                        summary,
                                        systemMap,
                                        children,
                                        previousPage,
                                        nextPage
                                    }: SectionPageProps) {
    const systemMapLinks = systemMap ? (Array.isArray(systemMap) ? systemMap : [systemMap]) : [];
    const hue = TONES[tone] ?? TONES.emerald;
    const hasHeader = Boolean(title?.trim() || subtitle || supplemental || emblem);
    const hasNavigation = Boolean(previousPage || nextPage);

    const NavigationLinks = () => (
        <div className="flex flex-col gap-2 sm:flex-row sm:justify-between sm:items-center text-base">
            {previousPage && (
                <Link
                    href={previousPage.href}
                    className="text-emerald-700 hover:underline"
                >
                    ← {previousPage.label}
                </Link>
            )}

            {nextPage && (
                <Link
                    href={nextPage.href}
                    className="text-emerald-700 hover:underline sm:text-right"
                >
                    {nextPage.label} →
                </Link>
            )}
        </div>
    );


    return (
        <div className="w-full p-4 sm:p-8 rounded-2xl bg-white/90 border border-gray-300 text-base">
            <div className="prose max-w-none pt-6">

                {hasHeader && (
                    <header className="pb-6">
                        {/* Icon, eyebrow, title: the testimony card's header, on
                            every page. The subtitle is the eyebrow and sits above
                            the title, so a page announces what it is before it
                            announces its name. */}
                        {(emblem || subtitle) && (
                            <div className={`flex flex-col items-center text-xs font-bold uppercase tracking-widest ${hue.eyebrow}`}>
                                {emblem && (
                                    <Icon name={emblem as never} className={`mb-2 ${hue.icon}`} size={24} strokeWidth={1.75} aria-hidden />
                                )}
                                {subtitle && <span>{subtitle}</span>}
                            </div>
                        )}

                        {title?.trim() && (
                            <h1 className="mt-2 mb-0 text-3xl font-bold text-center tracking-widest text-gray-900">
                                {title}
                            </h1>
                        )}

                        {title?.trim() && (
                            <div
                                aria-hidden
                                className={`mx-auto mt-5 h-[3px] w-20 rounded-full bg-gradient-to-r ${hue.rule}`}
                            />
                        )}

                        {supplemental && (
                            <div className="mt-2 text-center text-gray-700">{supplemental}</div>
                        )}

                        {tagline && (
                            <div className="mt-2 text-center text-[11px] uppercase tracking-[0.18em] text-slate-400 sm:text-xs">
                                {tagline}
                            </div>
                        )}
                    </header>
                )}

                {summary && (
                    <div className="mt-4 p-4 bg-gray-50 border-l-4 border-emerald-600 text-sm">
                        <div className="font-semibold">
                            {summary}
                        </div>
                    </div>
                )}

                {systemMapLinks.length > 0 && (
                    <div className="mt-6 pt-6 border-t border-gray-300 text-sm tracking-wide opacity-60 hover:opacity-100 transition-opacity text-center">
                        <span className="uppercase text-xs font-semibold tracking-widest">See the pattern</span>
                        <span className="mx-2">—</span>
                        {systemMapLinks.map((link, i) => (
                            <span key={link.href}>
                                {i > 0 && <span className="mx-1">&</span>}
                                <Link href={link.href} className="underline hover:text-emerald-700">
                                    {link.label}
                                </Link>
                            </span>
                        ))}
                        {systemMapLinks.some(l => l.blurb) && (
                            <div className="mt-2 italic text-xs">
                                {systemMapLinks.filter(l => l.blurb).map(l => l.blurb).join(' ')}
                            </div>
                        )}
                    </div>
                )}

                {(hasHeader || summary) && (
                    <hr className="my-6 border-t border-gray-300" />
                )}

                {hasNavigation && (
                    <div className="mb-6">
                        <NavigationLinks />
                    </div>
                )}

                <div className={hasHeader ? "space-y-1 mt-4" : "space-y-1"}>
                    {children}
                </div>

                {hasNavigation && (
                    <div className="mt-8 pt-6 border-t border-gray-300">
                        <NavigationLinks />
                    </div>
                )}

            </div>
        </div>
    );
}

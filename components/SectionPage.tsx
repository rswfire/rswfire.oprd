// components/SectionPage.tsx
import type { ReactNode } from 'react';
import Link from 'next/link';

type SectionPageProps = {
    title?: string;
    subtitle?: string;
    supplemental?: string;
    summary?: string;
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
                                        summary,
                                        children,
                                        previousPage,
                                        nextPage
                                    }: SectionPageProps) {
    const hasHeader = Boolean(title?.trim() || subtitle || supplemental);
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
        <div className="w-full p-8 rounded-2xl bg-white/90 border border-gray-300 text-base">
            <div className="prose max-w-none pt-6">

                {hasHeader && (
                    <header className="pb-6">
                        {title?.trim() && (
                            <h1 className="text-3xl font-bold mb-2 text-center tracking-widest">
                                {title}
                            </h1>
                        )}

                        {(subtitle || supplemental) && (
                            <div className="text-gray-700 space-y-0 text-center">
                                {subtitle && <div>{subtitle}</div>}
                                {supplemental && <div>{supplemental}</div>}
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

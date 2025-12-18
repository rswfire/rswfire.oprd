// components/SectionPage.tsx
import type { ReactNode } from 'react';

type SectionPageProps = {
    title?: string;
    subtitle?: string;
    supplemental?: string;
    children: ReactNode;
};

export default function SectionPage({
                                        title,
                                        subtitle,
                                        supplemental,
                                        children
                                    }: SectionPageProps) {
    const hasHeader = Boolean(title?.trim() || subtitle || supplemental);

    return (
        <div className="w-full p-8 rounded-xl bg-gray-50 border border-gray-300 text-base">
            <div className="prose max-w-none pt-6">

                {hasHeader && (
                    <header className="pb-6 border-b border-gray-300">
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

                <div className={hasHeader ? "space-y-1 mt-4" : "space-y-1"}>
                    {children}
                </div>

            </div>
        </div>
    );
}

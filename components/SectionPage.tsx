// components/SectionPage.tsx
import type { ReactNode } from 'react';

type SectionPageProps = {
    title: string;
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
    return (
        <div className="w-full p-8 rounded-xl bg-gray-50 border border-gray-300 text-base">
            <div className="prose prose-slate max-w-none">
                <header className="mb-8 border-b border-slate-200 pb-6">

                    <h1 className="text-3xl font-bold mb-2">{title}</h1>

                    {(subtitle || supplemental) && (
                        <div className="italic text-gray-600 space-y-0">
                            {subtitle && <div>{subtitle}</div>}
                            {supplemental && <div>{supplemental}</div>}
                        </div>
                    )}
                </header>

                <div className="space-y-1">
                    {children}
                </div>
            </div>
        </div>
    );
}
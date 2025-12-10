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
            <div className="prose max-w-none">
                <header className="pb-4 border-b border-gray-300">

                    <h1 className="text-3xl font-bold mb-2 text-center tracking-widest">{title}</h1>

                    {(subtitle || supplemental) && (
                        <div className="text-gray-700 space-y-0 text-center">
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
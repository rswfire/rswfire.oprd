// components/SunlightTabs.tsx
//
// One tab per agency document placed next to the record. The first is
// "Timeline." Each document that arrives gets its own tab here.
'use client';

import { useState } from 'react';
import type { ReactNode } from 'react';

export type SunlightTab = {
    id: string;
    label: string;
    panel: ReactNode;
};

export default function SunlightTabs({ tabs }: { tabs: SunlightTab[] }) {
    const [active, setActive] = useState(tabs[0]?.id);

    return (
        <div className="mt-10">
            <div role="tablist" className="flex border-b border-gray-300">
                {tabs.map((t) => (
                    <button
                        key={t.id}
                        role="tab"
                        type="button"
                        aria-selected={active === t.id}
                        aria-controls={`sunlight-tab-${t.id}`}
                        onClick={() => setActive(t.id)}
                        className={`px-4 py-2 text-sm font-mono uppercase tracking-wider border-b-2 -mb-px transition-colors ${
                            active === t.id
                                ? 'border-amber-500 text-amber-700'
                                : 'border-transparent text-gray-500 hover:text-gray-800'
                        }`}
                    >
                        {t.label}
                    </button>
                ))}
            </div>

            {tabs.map((t) =>
                active === t.id ? (
                    <div key={t.id} role="tabpanel" id={`sunlight-tab-${t.id}`} className="mt-6">
                        {t.panel}
                    </div>
                ) : null,
            )}
        </div>
    );
}

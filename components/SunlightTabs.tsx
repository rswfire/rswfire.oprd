// components/SunlightTabs.tsx
//
// One tab per agency document placed next to the record. The first is
// "Timeline." Each document that arrives gets its own tab here.
'use client';

import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';

export type SunlightTab = {
    id: string;
    label: string;
    panel: ReactNode;
};

export default function SunlightTabs({ tabs }: { tabs: SunlightTab[] }) {
    const [active, setActive] = useState(tabs[0]?.id);

    // A citation elsewhere in the archive lands here as /sunlight/#<entry>.
    // Select the tab that holds the entry, then put it under the reader's eye
    // rather than under the sticky header. Also answers a hash change, so a
    // second citation clicked from this page still moves.
    useEffect(() => {
        const go = () => {
            const id = decodeURIComponent(window.location.hash.replace(/^#/, ''));
            if (!id) return;
            const owner = tabs.find((t) => t.id === id);
            if (owner) setActive(owner.id);
            // The entry lives inside a panel that may have just been shown, so
            // wait a frame for it to exist before measuring.
            requestAnimationFrame(() => {
                const el = document.getElementById(id);
                if (!el) return;
                const y = el.getBoundingClientRect().top + window.scrollY - 96;
                window.scrollTo({ top: y, behavior: 'smooth' });
                el.classList.add('sunlight-landed');
                window.setTimeout(() => el.classList.remove('sunlight-landed'), 2400);
            });
        };
        go();
        window.addEventListener('hashchange', go);
        return () => window.removeEventListener('hashchange', go);
    }, [tabs]);

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

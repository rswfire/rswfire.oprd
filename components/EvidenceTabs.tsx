// components/EvidenceTabs.tsx
'use client';

import { useState } from 'react';
import Icon from '@/components/Icon';
import ExploitationSection from '@/components/ExploitationSection';
import DisplacementStage from '@/components/DisplacementStage';
import type { ExploitationContent } from '@/data/exploitation';

type Props = {
    exploitation: ExploitationContent;
    stage: string;
};

type TabId = 'exploitation' | 'framework';

export default function EvidenceTabs({ exploitation, stage }: Props) {
    const [active, setActive] = useState<TabId>('exploitation');

    const tabClass = (id: TabId, accent: 'emerald' | 'red') => {
        const isActive = active === id;
        const activeColor = accent === 'emerald'
            ? 'border-emerald-700 text-emerald-700'
            : 'border-red-700 text-red-700';
        return `flex items-center gap-2 px-4 py-2 text-sm font-mono uppercase tracking-wider border-b-2 -mb-px transition-colors ${
            isActive ? activeColor : 'border-transparent text-gray-500 hover:text-gray-800'
        }`;
    };

    return (
        <>
        <div className="my-8">
            <div role="tablist" className="flex border-b border-gray-300">
                <button
                    role="tab"
                    type="button"
                    aria-selected={active === 'exploitation'}
                    aria-controls="evidence-tab-exploitation"
                    onClick={() => setActive('exploitation')}
                    className={tabClass('exploitation', 'emerald')}
                >
                    <Icon name="TreeDeciduous" size={18} />
                    <span className="sr-only">Exploitation</span>
                </button>
                <button
                    role="tab"
                    type="button"
                    aria-selected={active === 'framework'}
                    aria-controls="evidence-tab-framework"
                    onClick={() => setActive('framework')}
                    className={tabClass('framework', 'red')}
                >
                    Framework
                </button>
            </div>

            <div className="mt-6">
                {active === 'exploitation' ? (
                    <div
                        role="tabpanel"
                        id="evidence-tab-exploitation"
                    >
                        <ExploitationSection content={exploitation} noDivider />
                    </div>
                ) : (
                    <div
                        role="tabpanel"
                        id="evidence-tab-framework"
                    >
                        <DisplacementStage stage={stage} />
                    </div>
                )}
            </div>
        </div>
        <hr className="my-6 border-t border-gray-300" />
        </>
    );
}

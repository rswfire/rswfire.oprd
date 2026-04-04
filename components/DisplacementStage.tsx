// components/DisplacementStage.tsx
import Link from 'next/link'
import { displacementFraming } from '@/lib/displacementFraming'

export default function DisplacementStage({ stage }: { stage: string }) {
    const entry = displacementFraming[stage]
    if (!entry) return null

    return (
        <div className="border border-gray-200 rounded-lg overflow-hidden my-8">
            <div className="border-l-4 border-red-700 bg-red-50 px-6 py-5">
                <Link
                    href={`/displacement#${stage}`}
                    className="text-xs font-mono uppercase tracking-widest text-red-700 hover:underline mb-2 block"
                >
                    Displacement Framework — {entry.stage}
                </Link>
                <p className="text-base text-gray-800 leading-relaxed">
                    {entry.connection}
                </p>
            </div>
            <div className="px-6 py-5 bg-white">
                <p className="text-xs font-mono uppercase tracking-widest text-red-700 mb-3">
                    For Volunteers
                </p>
                <p className="text-base text-gray-700 leading-relaxed mb-4">
                    <Link
                        href={`/resources/volunteers#stage-${entry.stage.split('.')[0]}`}
                        className="text-sm font-mono text-red-700 hover:underline mr-4"
                    >
                        Stage {entry.stage.split('.')[0]} →
                    </Link>
                    {entry.volunteer.body}
                </p>
                <div className="flex flex-wrap gap-2">
                    <Link href="/displacement" className="text-xs font-mono border border-red-700 text-red-700 px-3 py-1.5 hover:bg-red-700 hover:text-white transition-colors">
                        The Displacement Framework
                    </Link>
                    <Link href="/displacement#requires" className="text-xs font-mono border border-red-700 text-red-700 px-3 py-1.5 hover:bg-red-700 hover:text-white transition-colors">
                        What It Requires
                    </Link>
                    <Link href="/displacement#breaks" className="text-xs font-mono border border-red-700 text-red-700 px-3 py-1.5 hover:bg-red-700 hover:text-white transition-colors">
                        What Breaks It
                    </Link>
                </div>
            </div>
        </div>
    )
}

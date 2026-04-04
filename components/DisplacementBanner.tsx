// components/DisplacementBanner.tsx
import { displacementFraming } from '@/lib/displacementFraming'

export default function DisplacementBanner({ stage }: { stage: string }) {
    const entry = displacementFraming[stage]
    if (!entry) return null

    return (
        <div className="border-l-4 border-red-700 bg-red-50 px-6 py-5 my-8">
            <p className="text-xs font-mono uppercase tracking-widest text-red-700 mb-2">
                Displacement Framework — {entry.stage}
            </p>
            <p className="text-base text-gray-800 leading-relaxed">
                {entry.connection}
            </p>
            <p className="mt-4 text-xs text-gray-500 italic">
                &ldquo;The threat of displacement is the institution&rsquo;s ultimate weapon. It is why volunteers stay silent. It is why abuse goes undocumented. It is why this problem persists.&rdquo; — Robert Samuel White
            </p>
        </div>
    )
}

// components/ForVolunteersCallout.tsx
import Link from 'next/link'

interface ForVolunteersCalloutProps {
    stage: number
    summary: string
}

export default function ForVolunteersCallout({ stage, summary }: ForVolunteersCalloutProps) {
    return (
        <div className="border border-gray-200 px-6 py-5 my-8">
            <p className="text-xs font-mono uppercase tracking-widest text-red-700 mb-3">
                For Volunteers
            </p>
            <p className="text-base text-gray-700 leading-relaxed mb-4">
                {summary}
            </p>
            <Link
                href={`/resources/volunteers#stage-${stage}`}
                className="text-sm text-red-700 hover:underline font-mono"
            >
                If this happened to you, start here →
            </Link>
        </div>
    )
}

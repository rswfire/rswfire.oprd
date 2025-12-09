// components/archive/EvidenceCard.tsx
import Link from 'next/link';
import Icon, { IconName } from '@/components/Icon';

type EvidenceType = 'audio' | 'video' | 'document' | 'email';

type EvidenceCardProps = {
    type: EvidenceType;
    title: string;
    description: string;
    href?: string;
    date?: string;
};

const iconMap: Record<EvidenceType, IconName> = {
    audio: 'Mic',
    video: 'Video',
    document: 'FileText',
    email: 'Mail',
};

const colorMap: Record<EvidenceType, string> = {
    audio: 'text-blue-600',
    video: 'text-purple-600',
    document: 'text-slate-600',
    email: 'text-green-600',
};

export default function EvidenceCard({
                                         type,
                                         title,
                                         description,
                                         href,
                                         date
                                     }: EvidenceCardProps) {
    const iconName = iconMap[type];
    const iconColor = colorMap[type];

    const card = (
        <div className="border border-slate-300 rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
                <div className={iconColor}>
                    <Icon name={iconName} size={28} />
                </div>
                <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">{title}</h3>
                    {date && (
                        <p className="text-xs text-slate-500 uppercase tracking-wide mb-2">
                            {date}
                        </p>
                    )}
                    <p className="text-sm text-slate-700">{description}</p>
                </div>
            </div>
        </div>
    );

    return href ? (
        <Link href={href} className="block hover:no-underline">
            {card}
        </Link>
    ) : (
        card
    );
}
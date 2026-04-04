// components/Icon.tsx
import { LucideProps } from 'lucide-react';
import {
    AlertTriangle,
    ChevronDown,
    ChevronUp,
    Eye,
    FileText,
    HelpCircle,
    Landmark,
    Mail,
    Map,
    Menu,
    MessageSquare,
    Mic,
    Newspaper,
    Repeat,
    Scale,
    Share2,
    TreeDeciduous,
    Users,
    Video,
    Wrench,
    X,
    Shield,
} from 'lucide-react';

const iconMap = {
    AlertTriangle,
    ChevronDown,
    ChevronUp,
    Eye,
    FileText,
    HelpCircle,
    Landmark,
    Mail,
    Map,
    Menu,
    MessageSquare,
    Mic,
    Newspaper,
    Repeat,
    Scale,
    Shield,
    Share2,
    TreeDeciduous,
    Users,
    Video,
    Wrench,
    X,
} as const;

export type IconName = keyof typeof iconMap;

type IconProps = Omit<LucideProps, 'ref'> & {
    name: IconName;
    className?: string;
};

export default function Icon({
                                 name,
                                 className = '',
                                 size = 20,
                                 strokeWidth = 2,
                                 ...props
                             }: IconProps) {
    const IconComponent = iconMap[name];

    if (!IconComponent) {
        console.warn(`Icon "${name}" not found in whitelist.`);
        return <HelpCircle className={className} size={size} strokeWidth={strokeWidth} {...props} />;
    }

    return <IconComponent className={className} size={size} strokeWidth={strokeWidth} {...props} />;
}
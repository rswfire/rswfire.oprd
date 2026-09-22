// components/Icon.tsx
import { LucideProps } from 'lucide-react';
import {
    AlertTriangle,
    BookOpenText,
    Bot,
    ChartNoAxesGantt,
    ChevronDown,
    ChevronUp,
    CircleQuestionMark,
    Combine,
    Download,
    Eraser,
    Eye,
    FileText,
    Gavel,
    GraduationCap,
    HelpCircle,
    Image,
    Landmark,
    Layers,
    Lighthouse,
    Mail,
    Map,
    Menu,
    MessageSquare,
    Mic,
    Newspaper,
    Park,
    Repeat,
    Scale,
    ScrollText,
    Share2,
    Sprout,
    TreeDeciduous,
    Trees,
    UserRound,
    Users,
    Video,
    Wrench,
    X,
    Shield,
    Sun,
    MapPin,
    Route,
    Check,
    Globe,
} from 'lucide-react';

const iconMap = {
    AlertTriangle,
    BookOpenText,
    Bot,
    ChartNoAxesGantt,
    ChevronDown,
    ChevronUp,
    CircleQuestionMark,
    Combine,
    Download,
    Eraser,
    Eye,
    FileText,
    Gavel,
    GraduationCap,
    HelpCircle,
    Image,
    Landmark,
    Layers,
    Lighthouse,
    Mail,
    Map,
    Menu,
    MessageSquare,
    Mic,
    Newspaper,
    Park,
    Repeat,
    Scale,
    ScrollText,
    Shield,
    Share2,
    Sprout,
    TreeDeciduous,
    Trees,
    UserRound,
    Users,
    Video,
    Wrench,
    X,
    Sun,
    MapPin,
    Route,
    Check,
    Globe,
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

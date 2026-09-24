import type { IconName } from "@/components/Icon";

export type ArchiveSection = {
    href: string;
    label: string;
    icon?: IconName;
    iconClass?: string;
    separator?: boolean;
    // No section uses these today. The nav, the header, and the 404 page all
    // still render them, so the shape stays available.
    subsections?: { href: string; label: string }[];
};

export const archiveSections: ArchiveSection[] = [
    { href: "/", label: "Home", icon: "TreeDeciduous" as const, iconClass: "text-emerald-700" },
    { href: "#separator-accountability", label: "", separator: true },
    { href: "/ethics", label: "Ethics", icon: "Scale" as const, iconClass: "text-indigo-700" },
    { href: "/records", label: "Public Records", icon: "Landmark" as const, iconClass: "text-emerald-700" },
    { href: "/outreach", label: "Institutional Outreach", icon: "ScrollText" as const, iconClass: "text-sky-700" },
    { href: "/records-requests", label: "Records Requests", icon: "HandPlatter" as const, iconClass: "text-sky-700" },
    { href: "#separator-3", label: "", separator: true },
    { href: "/timeline", label: "Timeline", icon: "ChartNoAxesGantt" as const, iconClass: "text-blue-700" },
    { href: "/testimony", label: "Testimony", icon: "Sprout" as const, iconClass: "text-violet-700" },
    { href: "/sunlight", label: "Sunlight", icon: "Sun" as const, iconClass: "text-amber-500" },
    { href: "/evidence", label: "Evidence", icon: "Gavel" as const, iconClass: "text-rose-700" },
    { href: "/synthesis", label: "Synthesis", icon: "Combine" as const, iconClass: "text-fuchsia-700" },
    { href: "#separator-4", label: "", separator: true },
    { href: "/volunteers", label: "For Volunteers", icon: "Shield" as const },
    { href: "/lisa-sumption", label: "The Director's Decisions", icon: "UserRound" as const, iconClass: "text-emerald-700" },
    { href: "/governor-kotek", label: "The Governor's Silence", icon: "GraduationCap" as const, iconClass: "text-purple-700" },
    { href: "/faq", label: "Frequently Asked Questions", icon: "Ghost" as const, iconClass: "text-cyan-700" },
    { href: "/reading", label: "Selected Reading", icon: "BookOpenText" as const, iconClass: "text-amber-700" },
];

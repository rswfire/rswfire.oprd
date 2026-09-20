// lib/sections.ts
export const archiveSections = [
    { href: "/", label: "Home", icon: "TreeDeciduous" as const, iconClass: "text-emerald-700" },
    { href: "/ethics", label: "A Note About Ethics", icon: "Scale" as const, iconClass: "text-slate-600" },
    { href: "#separator-accountability", label: "", separator: true },
    {
        href: "/records",
        label: "The Records",
        icon: "Landmark" as const,
        iconClass: "text-emerald-700",
        subsections: [
            { href: "/records/governor", label: "Office of the Governor" },
            { href: "/records/osp", label: "Oregon State Police" },
            { href: "/records/lane-county", label: "Lane County Sheriff’s Office" },
            { href: "/records/oprd", label: "Oregon Parks & Recreation Dept." },
        ]
    },
    { href: "#separator-3", label: "", separator: true },
    { href: "/testimony", label: "Testimony", icon: "Sprout" as const, iconClass: "text-violet-700" },
    { href: "/sunlight", label: "Sunlight", icon: "Sun" as const, iconClass: "text-amber-500" },
    {

        href: "/evidence",
        label: "Evidence",
        icon: "Gavel" as const,
        iconClass: "text-slate-600",
        subsections: [
            { href: "/evidence/origin", label: "1. Origin" },
            { href: "/evidence/escalation", label: "2. Escalation" },
            { href: "/evidence/trust", label: "3. Trust" },
            { href: "/evidence/coercion", label: "4. Coercion" },
            { href: "/evidence/surveillance", label: "5. Assessment" },
            { href: "/evidence/dismissal", label: "6. Dismissal" },
            { href: "/evidence/expulsion", label: "7. Retaliation" },
            { href: "/evidence/containment", label: "8. Containment" },
            { href: "/evidence/police", label: "9. Intimidation" }
        ]
    },
    {
        href: "/key-individuals",
        label: "Key Individuals",
        icon: "Users" as const,
        iconClass: "text-slate-600",
    },
    { href: "/timeline", label: "Timeline", icon: "ChartNoAxesGantt" as const, iconClass: "text-slate-600" },
    { href: "#separator-4", label: "", separator: true },
    {
        // The Director's pages are shells now. What she did is told in the
        // testimony, in the chapter that carries her, and that chapter is the
        // authoritative account. The old addresses keep resolving from
        // public/lisa-sumption/**, which bounce to the same anchor.
        href: "/testimony/#the-director-and-her-deputy",
        label: "The Director's Decisions",
        icon: "UserRound" as const,
        iconClass: "text-slate-600",
    },
    { href: "#separator-5", label: "", separator: true },
    { href: "/governor-kotek", label: "The Governor's Silence", icon: "GraduationCap" as const, iconClass: "text-slate-600" },
    { href: "#separator-7", label: "", separator: true },
    { href: "/for-volunteers", label: "For Volunteers", icon: "Shield" as const },
    { href: "/records-requests", label: "Records Requests", icon: "FileText" as const, iconClass: "text-sky-700" },
    { href: "/faq", label: "Frequently Asked Questions", icon: "CircleQuestionMark" as const, iconClass: "text-slate-600" },
    { href: "/displacement", label: "Displacement Framework", icon: "Eraser" as const, iconClass: "text-slate-600" },
    { href: "/synthesis", label: "The Synthesis", icon: "Combine" as const, iconClass: "text-slate-600" },
    { href: "/reading", label: "Selected Reading", icon: "BookOpenText" as const, iconClass: "text-slate-600" },
];

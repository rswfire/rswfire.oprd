// lib/sections.ts
export const archiveSections = [
    { href: "/", label: "Home" },
    { href: "/ethics", label: "A Note About Ethics" },
    { href: "/displacement", label: "The Displacement Framework" },
    { href: "#separator-accountability", label: "", separator: true },
    { href: "/records-requests", label: "Records Requests", icon: "FileText" as const, iconClass: "text-sky-700" },
    { href: "#separator-records", label: "", separator: true },
    {
        href: "/records",
        label: "The Records",
        subsections: [
            { href: "/records/governor", label: "Office of the Governor" },
            { href: "/records/osp", label: "Oregon State Police" },
            { href: "/records/lane-county", label: "Lane County Sheriff’s Office" },
            { href: "/records/oprd", label: "Oregon Parks & Recreation Dept." },
        ]
    },
    { href: "#separator-3", label: "", separator: true },
    { href: "/sunlight", label: "Sunlight", icon: "Sun" as const, iconClass: "text-amber-500" },
    { href: "/timeline", label: "Timeline" },
    {
        href: "/key-individuals",
        label: "Key Individuals",
    },
    {

        href: "/evidence",
        label: "Evidence",
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
    { href: "#separator-4", label: "", separator: true },
    {
        href: "/lisa-sumption",
        label: "The Director's Decisions",
        subsections: [
            { href: "/lisa-sumption/open-letter", label: "The Open Letter" },
            { href: "/lisa-sumption/public-records-request", label: "The Public Records Request" },
            { href: "/lisa-sumption/closure", label: "The Closure" }
        ]
    },
    { href: "#separator-5", label: "", separator: true },
    { href: "/governor-kotek", label: "The Governor's Silence" },
    { href: "#separator-7", label: "", separator: true },
    { href: "/for-volunteers", label: "For Volunteers", icon: "Shield" as const },
    { href: "/synthesis", label: "The Synthesis", icon: "TreeDeciduous" as const, iconClass: "text-emerald-700" },
    { href: "/faq", label: "Frequently Asked Questions" },
    { href: "/reading", label: "Selected Reading" },
];

// lib/sections.ts
export const archiveSections = [
    { href: "/", label: "Home" },
    { href: "/ethics", label: "A Note About Ethics" },
    { href: "/displacement", label: "The Displacement Framework" },
    { href: "#separator-accountability", label: "", separator: true },
    {
        href: "/accountability",
        label: "Accountability",
        subsections: [
            { href: "/accountability/oprd", label: "Oregon Parks & Recreation" },
            { href: "/accountability/osp", label: "Oregon State Police" },
            { href: "/accountability/governor", label: "Office of the Governor" },
        ]
    },
    { href: "#separator-3", label: "", separator: true },
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
    { href: "/record", label: "The OPRD Record" },
    { href: "/faq", label: "Frequently Asked Questions" },
    { href: "/reading", label: "Selected Reading" },
];

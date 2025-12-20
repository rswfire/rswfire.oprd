// lib/sections.ts
export const archiveSections = [
    { href: "/", label: "Home" },
    { href: "/ethics", label: "A Note About Ethics" },
    { href: "/faq", label: "Frequently Asked Questions" },
    { href: "#separator-1", label: "", separator: true },
    { href: "/key-individuals", label: "Key Individuals" },
    { href: "/timeline", label: "Timeline" },
    { href: "#separator-2", label: "", separator: true },
    {

        href: "/evidence",
        label: "Evidence",
        subsections: [
            { href: "/evidence/confrontation", label: "1. Confrontation" },
            { href: "/evidence/compliance", label: "2. Compliance" },
            { href: "/evidence/betrayal", label: "3. Betrayal" },
            { href: "/evidence/coercion", label: "4. Coercion" },
            { href: "/evidence/surveillance", label: "5. Surveillance" },
            { href: "/evidence/dismissal", label: "6. Dismissal" },
            { href: "/evidence/expulsion", label: "7. Expulsion" }
        ]
    },
    { href: "#separator-3", label: "", separator: true },
    {
        href: "/lisa-sumption",
        label: "The Director's Decisions",
        subsections: [
            { href: "/lisa-sumption/open-letter", label: "The Open Letter" },
            { href: "/lisa-sumption/public-records-request", label: "The Public Records Request" },
            { href: "/lisa-sumption/closure", label: "The Closure" }
        ]
    },
    { href: "#separator-4", label: "", separator: true },
    { href: "/governor-kotek", label: "The Governor's Silence" },
];
// lib/sections.ts
export const archiveSections = [
    { href: "/", label: "Home" },
    { href: "/ethics", label: "A Note About Ethics" },
    { href: "/displacement", label: "The Displacement Framework" },
    { href: "#separator-1", label: "", separator: true },
    { href: "/timeline", label: "Timeline" },
    { href: "#separator-2", label: "", separator: true },
    {
        href: "/key-individuals",
        label: "Key Individuals",
        subsections: [
            { href: "/key-individuals/logan-bliss", label: "Logan Bliss" },
            { href: "/key-individuals/kati-baker", label: "Kati Baker" },
            { href: "/key-individuals/ryan-warren", label: "Ryan Warren" },
            { href: "/key-individuals/allison-watson", label: "Allison Watson" },
            { href: "/key-individuals/lisa-sumption", label: "Lisa Sumption" }
        ]
    },
    { href: "#separator-3", label: "", separator: true },
    {

        href: "/evidence",
        label: "Evidence",
        subsections: [
            { href: "/evidence/origin", label: "1. The Origin Event" },
            { href: "/evidence/escalation", label: "2. The Escalation Response" },
            { href: "/evidence/trust", label: "3. Trust Recruitment" },
            { href: "/evidence/coercion", label: "4. The Coercion Meeting" },
            { href: "/evidence/surveillance", label: "5. Assessment & Surveillance" },
            { href: "/evidence/dismissal", label: "6. Dismissal Without Process" },
            { href: "/evidence/expulsion", label: "7. Expulsion & Retaliation" },
            { href: "/evidence/containment", label: "8. Institutional Containment" },
            { href: "/evidence/police", label: "9. Police Intimidation" }
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
    { href: "#separator-6", label: "", separator: true },
    { href: "/final-statement", label: "A Final Statement" },
    { href: "#separator-7", label: "", separator: true },
    {
        href: "/resources",
        label: "Resources",
        subsections: [
            { href: "/resources/advocates", label: "For Advocates" },
            { href: "/resources/lawyers", label: "For Lawyers" },
            { href: "/resources/legislators", label: "For Legislators" },
            { href: "/resources/press", label: "For Press" },
            { href: "/resources/volunteers", label: "For Volunteers" }
        ]
    },
    { href: "#separator-8", label: "", separator: true },
    { href: "/faq", label: "Frequently Asked Questions" },
    { href: "/reading", label: "Selected Reading" },
];

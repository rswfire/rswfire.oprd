// lib/sections.ts
export const archiveSections = [
    { href: "/", label: "Home" },
    { href: "/ethics", label: "A Note About Ethics" },
    { href: "/faq", label: "Frequently Asked Questions" },
    { href: "#separator-1", label: "", separator: true },
    { href: "/key-individuals", label: "Key Individuals" },
    { href: "/timeline", label: "Timeline" },
    { href: "/how-it-started", label: "How It Started" },
    { href: "/trust-broken", label: "Trust Broken" },
    { href: "/coercion", label: "Coercion" },
    { href: "/dismissal", label: "Dismissal" },
    { href: "/expulsion", label: "Expulsion" },
    { href: "#separator-2", label: "", separator: true },
    {
        href: "/correspondence", label: "Correspondence",
        subsections: [
            {href: "/correspondence/complaints", label: "Formal Complaints"},
            {href: "/correspondence/institution", label: "Institutional Dialogue"},
            {href: "/correspondence/press", label: "Press Communications"},
            {href: "/correspondence/general", label: "General Correspondence"}
        ]
    },
    { href: "#separator-3", label: "", separator: true },
    {
        href: "/lisa-sumption",
        label: "The Director's Decisions",
        subsections: [
            { href: "/lisa-sumption/covert-encounter", label: "The Covert Encounter" },
            { href: "/lisa-sumption/open-letter", label: "The Open Letter" },
            { href: "/lisa-sumption/public-records-request", label: "The Public Records Request" },
            { href: "/lisa-sumption/closure", label: "The Closure" }
        ]
    },
    { href: "#separator-4", label: "", separator: true },
    { href: "/governor-kotek", label: "The Governor's Silence" },
];
// app/(archive)/layout.tsx
import SectionNav from "@/components/SectionNav";

const sections = [
    { href: "/", label: "Overview" },
    { href: "/key-individuals", label: "Key Individuals" },
    { href: "/ethics", label: "A Note About Ethics" },
    { href: "/executive-summary", label: "Executive Summary" },
    { href: "/timeline", label: "Timeline" },
    { href: "/testimonial", label: "The Story of Honeyman" },
    { href: "/how-it-started", label: "How It Started" },
    { href: "/logan", label: "Logan" },
    { href: "/day-use-meeting", label: "Day-Use Meeting" },
    { href: "/unidentified-man", label: "The Unidentified Man" },
    { href: "/final-hours", label: "Final Hours" },
    { href: "/permanent-dismissal", label: "Permanent Dismissal" },
    { href: "/naming-the-harm", label: "Naming the Harm" },
    { href: "/institutional-pattern", label: "Institutional Pattern" },
    { href: "/lessons-learned", label: "Lessons Learned" },
    { href: "/i-held-my-shape", label: "I Held My Shape" },
];

export default function ArchiveLayout({
                                          children,
                                      }: {
    children: React.ReactNode;
}) {
    return (
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8">
                {/* Persistent sidebar - hidden on mobile, sticky on desktop */}
                <aside className="hidden lg:block">
                    <SectionNav sections={sections} />
                </aside>

                {/* Main content area */}
                <article className="min-w-0 max-w-6xl">
                    {children}
                </article>
            </div>
        </div>
    );
}
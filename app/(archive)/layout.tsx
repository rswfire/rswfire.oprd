// app/(archive)/layout.tsx
import SectionNav from "@/components/SectionNav";
import { archiveSections } from "@/lib/sections";

export default function ArchiveLayout({
                                          children,
                                      }: {
    children: React.ReactNode;
}) {
    return (
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8">
                <aside className="hidden lg:block">
                    <SectionNav sections={archiveSections} />
                </aside>
                <article className="min-w-0 max-w-6xl">
                    {children}
                </article>
            </div>
        </div>
    );
}
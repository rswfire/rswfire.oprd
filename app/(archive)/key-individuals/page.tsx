// app/(archive)/key-individuals/page.tsx
//
// Key Individuals: the seats from the empty one at the top down to the
// volunteer, each with its implied role and its real one, and what passed
// between them.
import type { Metadata } from "next";
import Link from "next/link";
import Icon from "@/components/Icon";
import SectionPage from "@/components/SectionPage";
import SystemDiagram from "@/components/system/SystemDiagram";

export const metadata: Metadata = {
    title: "Key Individuals",
    description: "The seats of the State of Oregon in this record, each with its implied role and its real one, and what passed between them. From its own documents.",
};

export default function Page() {
    return (
        <SectionPage
            emblem="Users"
            tone="emerald"
            title="KEY INDIVIDUALS"
        >
            <Link
                href="/system"
                className="not-prose group mb-10 flex items-center gap-4 rounded-2xl border border-gray-200 bg-white px-5 py-5 no-underline shadow-sm transition-colors hover:border-emerald-300 hover:bg-emerald-50/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 sm:mb-12 sm:gap-6 sm:px-8 sm:py-6"
            >
                <Icon name="Map" className="shrink-0 text-emerald-600" size={32} strokeWidth={1.5} aria-hidden />
                <span className="min-w-0 flex-1">
                    <span className="block font-mono text-[12px] font-bold uppercase tracking-[0.2em] text-emerald-700">System</span>
                    <span className="mt-1 block text-[20px] font-semibold uppercase leading-tight tracking-wide text-gray-900 sm:text-[24px]">The State of Oregon</span>
                    <span className="mt-1 block font-mono text-[12px] font-bold uppercase tracking-[0.2em] text-gray-500 sm:text-[13px]">Mapped as a system</span>
                </span>
                <span aria-hidden className="shrink-0 text-[24px] text-emerald-700 transition-transform group-hover:translate-x-1">&rarr;</span>
            </Link>

            <div className="not-prose">
                <SystemDiagram />
            </div>
        </SectionPage>
    );
}

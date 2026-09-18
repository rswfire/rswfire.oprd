// app/(archive)/testimony/draft/page.tsx
//
// The working copy. Every edit to the testimony lands in TestimonyDraft.tsx
// and is read here; /testimony does not move until a release copies the
// draft over the published body. Not indexed, and marked on the page, so a
// reader who arrives at it cannot mistake it for the record.
import type { Metadata } from "next";
import TestimonyDraft from "@/components/testimony/TestimonyDraft";
import { CURRENT_VERSION } from "@/data/testimonyVersions";

export const metadata: Metadata = {
    title: "The Testimony — draft",
    robots: { index: false, follow: false },
};

export default function Page() {
    return (
        <>
            <div className="fixed inset-x-0 top-0 z-[80] bg-amber-500 px-4 py-1.5 text-center text-[11px] font-bold uppercase tracking-widest text-white">
                Draft · not the record · published version is v{CURRENT_VERSION.version}
            </div>
            <TestimonyDraft version="draft" isCurrent />
        </>
    );
}

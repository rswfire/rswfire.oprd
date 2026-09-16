// app/(archive)/testimony/page.tsx
//
// The current testimony. /testimony always renders the most recent version.
// Frozen versions live at /testimony/v<version> (see [version]/page.tsx).
import type { Metadata } from "next";
import TestimonyBody from "@/components/testimony/TestimonyBody";
import { CURRENT_VERSION } from "@/data/testimonyVersions";

export const metadata: Metadata = {
    title: "The Testimony",
    description:
        "He sold everything, crossed the country, and chose the Oregon coast. This is what he did here, in his own record, and what one agency did about it.",
};

export default function Page() {
    return <TestimonyBody version={CURRENT_VERSION.version} isCurrent />;
}

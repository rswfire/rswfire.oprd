// app/(archive)/testimony/[version]/page.tsx
//
// A version of the testimony, frozen at its address. Every version in
// TESTIMONY_VERSIONS is built as a static page (/testimony/v1.0, /testimony/v1.1,
// …), so a bookmark carrying a version always resolves to the text that was
// there when it was made. The current version renders the live body; an older
// version renders its frozen body from the registry. When the current version
// is not the most recent, TestimonyBody flags it in the table of contents.
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import TestimonyBody from "@/components/testimony/TestimonyBody";
import { FROZEN_BODIES } from "@/components/testimony/versions";
import { TESTIMONY_VERSIONS, CURRENT_VERSION } from "@/data/testimonyVersions";

export function generateStaticParams() {
    return TESTIMONY_VERSIONS.map((v) => ({ version: `v${v.version}` }));
}

export const metadata: Metadata = {
    title: "The Testimony",
    description:
        "He sold everything, crossed the country, and chose the Oregon coast. This is what he did here, in his own record, and what one agency did about it.",
};

export default async function Page({
    params,
}: {
    params: Promise<{ version: string }>;
}) {
    const { version } = await params;
    const ver = version.replace(/^v/, "");
    const known = TESTIMONY_VERSIONS.find((v) => v.version === ver);
    if (!known) notFound();

    const isCurrent = ver === CURRENT_VERSION.version;

    // Older versions render their frozen body; the current version renders live.
    const Frozen = FROZEN_BODIES[ver];
    if (!isCurrent && Frozen) {
        return <Frozen version={ver} isCurrent={false} />;
    }
    return <TestimonyBody version={ver} isCurrent={isCurrent} />;
}

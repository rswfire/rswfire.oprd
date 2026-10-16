// app/(archive)/system/[version]/page.tsx
//
// A version of System at its permanent address. Until a second version is
// cut, every version renders the live body; when one is, the earlier body is
// frozen here as the Testimony's are.
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SystemBody from "@/components/system/SystemBody";
import { MAP_VERSIONS, CURRENT_MAP_VERSION } from "@/data/mapVersions";

export function generateStaticParams() {
    return MAP_VERSIONS.map((v) => ({ version: `v${v.version}` }));
}

export const metadata: Metadata = {
    title: "System",
    description:
        "The State of Oregon, mapped as a system: its seats, implied and real; the patterns they share; the tactics side by side. From its own documents.",
};

export default async function Page({ params }: { params: Promise<{ version: string }> }) {
    const { version } = await params;
    const ver = version.replace(/^v/, "");
    if (!MAP_VERSIONS.some((v) => v.version === ver)) notFound();
    return <SystemBody version={ver} isCurrent={ver === CURRENT_MAP_VERSION.version} />;
}

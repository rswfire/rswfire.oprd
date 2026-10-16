// app/(archive)/system/page.tsx
//
// System, current version. Frozen versions live at /system/v<version>.
import type { Metadata } from "next";
import SystemBody from "@/components/system/SystemBody";
import { CURRENT_MAP_VERSION } from "@/data/mapVersions";

export const metadata: Metadata = {
    title: "System",
    description:
        "The State of Oregon, mapped as a system: its seats, implied and real; the patterns they share; the tactics side by side. From its own documents.",
};

export default function Page() {
    return <SystemBody version={CURRENT_MAP_VERSION.version} isCurrent />;
}

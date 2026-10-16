// app/(archive)/map/page.tsx
//
// The Map, current version. Frozen versions live at /map/v<version>.
import type { Metadata } from "next";
import MapBody from "@/components/systembackup/MapBody";
import { CURRENT_MAP_VERSION } from "@/data/mapVersions";

export const metadata: Metadata = {
    title: "The Map",
    description:
        "The shape of what five Oregon institutions did with one volunteer's letters, and what they did when he asked for the records. From their own documents, so the next person can find where they are.",
};

export default function Page() {
    return <MapBody version={CURRENT_MAP_VERSION.version} isCurrent />;
}

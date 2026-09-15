"use client";

// components/sunlight/SunCite.tsx
//
// A citation to what the department wrote: dark orange, with a sun, so a
// claim sourced to their own document is never mistaken for a claim sourced
// to his. Points at one entry of the sunlight document by its anchor.
//
// Desktop and tablet open the entry in the sunlight overlay. Phones follow the
// link to /sunlight, which selects the tab and scrolls to the entry.
import Link from "next/link";
import Icon from "@/components/Icon";
import { useSunlight } from "@/components/sunlight/SunlightProvider";

export default function SunCite({
    entry,
    children,
}: {
    /** Anchor id from public/sunlight/index.json, e.g. "03-05-25-the-meeting". */
    entry: string;
    children: React.ReactNode;
}) {
    const { openEntry } = useSunlight();

    return (
        <Link
            href={`/sunlight/#${entry}`}
            onClick={(e) => {
                if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
                if (openEntry(entry)) e.preventDefault();
            }}
            className="text-orange-800 underline decoration-orange-300 underline-offset-2 hover:text-orange-600"
        >
            <Icon
                name="Sun"
                className="mr-0.5 inline-block -mt-0.5 text-orange-600"
                size={14}
                strokeWidth={2}
                aria-hidden
            />
            {children}
        </Link>
    );
}

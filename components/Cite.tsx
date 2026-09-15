"use client";

// components/Cite.tsx
//
// A citation to a document in the registers: a blue link with a document
// mark, so a reader can tell at a glance that a claim rests on paper rather
// than on a recording. The ULID is the identity everywhere in the archive, so
// a citation carries nothing else.
//
// On desktop and tablet it opens the document in the viewer, in place, so a
// reader following an account does not lose their paragraph. On a phone, and
// with JavaScript off, it is an ordinary link to the document's own page.
import Link from "next/link";
import Icon from "@/components/Icon";
import { useDocViewer } from "@/components/DocViewerProvider";

export type RegisterSlug =
    | "oprd" | "osp" | "usfs" | "governor" | "das" | "lane-county" | "legislation";

export default function Cite({
    ulid,
    thread = "oprd",
    children,
}: {
    ulid: string;
    thread?: RegisterSlug;
    children: React.ReactNode;
}) {
    const { openDoc } = useDocViewer();

    return (
        <Link
            href={`/record/${thread}/${ulid}`}
            onClick={(e) => {
                if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
                if (openDoc(ulid)) e.preventDefault();
            }}
            className="text-sky-800 underline decoration-sky-300 underline-offset-2 hover:text-sky-600"
        >
            <Icon
                name="FileText"
                className="mr-0.5 inline-block -mt-0.5 text-sky-700"
                size={14}
                strokeWidth={2}
                aria-hidden
            />
            {children}
        </Link>
    );
}

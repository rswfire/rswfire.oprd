// components/TimelineBody.tsx
//
// Renders a timeline entry's segment array. Shared by the /timeline page
// and the homepage walker so both surfaces show identical text. Plain
// component with no server-only dependencies; safe inside client trees.
import Link from "next/link";
import type { TimelineSegment } from "@/data/timeline";

export default function TimelineBody({ body }: { body: TimelineSegment[] }) {
    return (
        <>
            {body.map((seg, i) => {
                if (typeof seg === "string") return <span key={i}>{seg}</span>;
                if ("person" in seg) return <span key={i}>{seg.label ?? seg.person}</span>;
                if (seg.external) {
                    return (
                        <a key={i} href={seg.href} target="_blank" rel="noopener"
                           className="underline text-emerald-800 hover:text-emerald-600">
                            {seg.t}
                        </a>
                    );
                }
                return (
                    <Link key={i} href={seg.href}
                          className="underline text-emerald-800 hover:text-emerald-600">
                        {seg.t}
                    </Link>
                );
            })}
        </>
    );
}

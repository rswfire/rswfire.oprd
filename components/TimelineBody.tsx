"use client";
// components/TimelineBody.tsx
//
// Renders a timeline entry's segment array. Shared by the /timeline page
// and the homepage walker so both surfaces show identical text.
//
// A claim here cites the same way a claim in the testimony cites, with the
// same components and the same marks, so a reader can tell at a glance
// whether a line rests on a document, a recording, their own file, a
// photograph, ground, a walk, or a period. Every provider these need is
// mounted at the root layout, so both surfaces work unchanged.
import Link from "next/link";
import type { TimelineSegment } from "@/data/timeline";
import Cite from "@/components/Cite";
import Moment from "@/components/player/Moment";
import SunCite from "@/components/sunlight/SunCite";
import PhotoCite from "@/components/photos/PhotoCite";
import PlaceCite from "@/components/places/PlaceCite";
import TraceCite from "@/components/traces/TraceCite";
import ClusterCite from "@/components/reflections/ClusterCite";

export default function TimelineBody({ body }: { body: TimelineSegment[] }) {
    return (
        <>
            {body.map((seg, i) => {
                if (typeof seg === "string") return <span key={i}>{seg}</span>;
                if ("person" in seg) return <span key={i}>{seg.label ?? seg.person}</span>;

                if ("doc" in seg) {
                    return <Cite key={i} ulid={seg.doc} thread={seg.thread}>{seg.t}</Cite>;
                }
                if ("rec" in seg) {
                    return <Moment key={i} ulid={seg.rec} t={seg.at}>{seg.t}</Moment>;
                }
                if ("sun" in seg) {
                    return <SunCite key={i} entry={seg.sun}>{seg.t}</SunCite>;
                }
                if ("photo" in seg) {
                    return (
                        <PhotoCite key={i} signal={seg.signal} photo={seg.photo}
                                   caption={seg.caption} taken={seg.taken}>
                            {seg.t}
                        </PhotoCite>
                    );
                }
                if ("place" in seg) {
                    return <PlaceCite key={i} name={seg.place}>{seg.t}</PlaceCite>;
                }
                if ("trace" in seg) {
                    return <TraceCite key={i} ulid={seg.trace}>{seg.t}</TraceCite>;
                }
                if ("cluster" in seg) {
                    return <ClusterCite key={i} id={seg.cluster}>{seg.t}</ClusterCite>;
                }

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

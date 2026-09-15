"use client";

// components/traces/TraceCite.tsx
//
// A citation to a walk: indigo, with a route mark. Opens the recorded track.
//
//   <TraceCite ulid="01JBW1S5H07QFZ00KDG2AHD193">he climbed it</TraceCite>
//
// If the realm has no public trace for the ULID, it renders as plain text. A
// citation that cannot be checked should not look like one.
import Icon from "@/components/Icon";
import { useTraces } from "@/components/traces/TraceProvider";

export default function TraceCite({
    ulid,
    children,
}: {
    ulid: string;
    children: React.ReactNode;
}) {
    const { openTrace, hasTrace } = useTraces();

    if (!hasTrace(ulid)) return <>{children}</>;

    return (
        <button
            type="button"
            onClick={() => openTrace(ulid)}
            className="text-left text-indigo-800 underline decoration-indigo-300 underline-offset-2 hover:text-indigo-600"
        >
            <Icon
                name="Route"
                className="mr-0.5 inline-block -mt-0.5 text-indigo-600"
                size={14}
                strokeWidth={2}
                aria-hidden
            />
            {children}
        </button>
    );
}

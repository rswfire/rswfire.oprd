"use client";

// components/reflections/ClusterCite.tsx
//
// A citation that points at a whole period, not a single second. Where the
// prose draws on how the record understands a chapter — the crossing, the
// caretaker year — this opens that chapter's analysis and reflection, fetched
// live from the realm.
//
//   <ClusterCite id="01M1A774AEAFPZNHT7KB8Q6E6A">the life he built</ClusterCite>
//
// It always renders as a link; whether the period is public is decided by the
// realm when the panel fetches it.
import Icon from "@/components/Icon";
import { useReflections } from "@/components/reflections/ReflectionProvider";

export default function ClusterCite({
    id,
    children,
    variant = "link",
}: {
    id: string;
    children: React.ReactNode;
    variant?: "link" | "button";
}) {
    const { openCluster } = useReflections();
    if (variant === "button") {
        return (
            <a
                href={`https://rswfire.com/library/cluster/${id}`}
                target="_blank"
                rel="noreferrer"
                title="The testimony cluster in his realm, with the platform's analysis and reflections"
                className="inline-flex w-28 cursor-pointer flex-col items-center gap-1 rounded-xl border border-sky-200 bg-sky-50 px-3 py-2 font-mono text-[9px] font-bold uppercase leading-none tracking-[0.18em] text-sky-700 hover:border-sky-300 hover:bg-sky-100"
            >
                <Icon name="Layers" className="text-sky-700" size={22} strokeWidth={1.75} aria-hidden />
                {children}
            </a>
        );
    }

    return (
        <button
            type="button"
            onClick={() => openCluster(id)}
            title="How the record reads this period"
            className="inline cursor-pointer text-left align-baseline font-[inherit] text-sky-800 underline decoration-sky-300 underline-offset-2 hover:text-sky-600"
        >
            <Icon
                name="Layers"
                className="mr-0.5 inline-block -mt-0.5 text-sky-700"
                size={14}
                strokeWidth={2}
                aria-hidden
            />
            {children}
        </button>
    );
}

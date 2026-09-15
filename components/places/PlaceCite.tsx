"use client";

// components/places/PlaceCite.tsx
//
// A citation to ground: rose, with a map mark. The name in the prose is the
// link, the way a ULID is the link elsewhere in this archive.
//
//   <PlaceCite name="Humbug Mountain" />
//   <PlaceCite name="Cape Blanco">the cape</PlaceCite>
//
// If the realm has no record for the name, it renders as plain text. A
// citation that cannot be checked should not look like one.
import Icon from "@/components/Icon";
import { usePlaces } from "@/components/places/PlaceProvider";

export default function PlaceCite({
    name,
    children,
}: {
    name: string;
    children?: React.ReactNode;
}) {
    const { openPlace, hasPlace } = usePlaces();

    if (!hasPlace(name)) return <>{children ?? name}</>;

    return (
        <button
            type="button"
            onClick={() => openPlace(name)}
            className="text-left text-rose-800 underline decoration-rose-300 underline-offset-2 hover:text-rose-600"
        >
            <Icon
                name="MapPin"
                className="mr-0.5 inline-block -mt-0.5 text-rose-600"
                size={14}
                strokeWidth={2}
                aria-hidden
            />
            {children ?? name}
        </button>
    );
}

"use client";

// components/photos/PhotoCite.tsx
//
// A citation to a photograph: violet, with a picture mark. Same rule as the
// others — the claim in the prose, and next to it the thing it rests on.
import Icon from "@/components/Icon";
import { usePhotos } from "@/components/photos/PhotoProvider";

export default function PhotoCite({
    signal,
    photo,
    caption,
    taken,
    children,
}: {
    signal: string;
    photo: string;
    caption?: string;
    taken?: string;
    children: React.ReactNode;
}) {
    const { openPhoto } = usePhotos();

    return (
        <button
            type="button"
            onClick={() => openPhoto({ signal, photo, caption, taken })}
            className="text-left text-violet-800 underline decoration-violet-300 underline-offset-2 hover:text-violet-600"
        >
            <Icon
                name="Image"
                className="mr-0.5 inline-block -mt-0.5 text-violet-600"
                size={14}
                strokeWidth={2}
                aria-hidden
            />
            {children}
        </button>
    );
}

// A page's share card: its own title and description on the Open Graph
// card, with the site's share image, so a shared link previews as the page.
import type { Metadata } from "next";

const SITE = "oprdvolunteerabuse.org";
export const SHARE_IMAGE = { url: "/og.png", width: 1200, height: 630, alt: "OPRD Volunteer Abuse: oprdvolunteerabuse.org" };

export function withShare(meta: Metadata): Metadata {
    const title = typeof meta.title === "string" ? meta.title : undefined;
    return {
        ...meta,
        openGraph: {
            type: "website",
            siteName: SITE,
            title: title ? `${title} | ${SITE}` : SITE,
            description: meta.description ?? undefined,
            images: [SHARE_IMAGE],
            ...(meta.openGraph ?? {}),
        },
    };
}

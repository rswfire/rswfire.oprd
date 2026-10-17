"use client";

// components/system/RecordingLink.tsx
//
// A drawer line resting on a recording: it opens the player at the cited
// second, the way a moment in the testimony does, and stays a real link to
// the page that presents the recording when JavaScript is gone.
import type { ReactNode } from "react";
import { usePlayer } from "@/components/player/PlayerProvider";
import { parseTimestamp, recordingByPage, recordingByUlid } from "@/lib/recordings";

/** The recording and second a link points at, if it points at one. */
function resolve(href: string): { ulid: string; t: number | null } | null {
    const u = new URL(href, "https://oprdvolunteerabuse.org");
    const t = parseTimestamp(u.searchParams.get("t"));
    const lib = u.pathname.match(/\/library\/signal\/([0-9A-Za-z]{26})/);
    const rec = lib ? recordingByUlid(lib[1]) : recordingByPage(u.pathname);
    return rec ? { ulid: rec.ulid, t } : null;
}

export default function RecordingLink({ href, className, children }: { href: string; className?: string; children: ReactNode }) {
    const { open } = usePlayer();
    const target = resolve(href);
    return (
        <a
            href={href}
            className={className}
            onClick={(e) => {
                if (!target || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
                e.preventDefault();
                open({ ulid: target.ulid, t: target.t });
            }}
        >
            {children}
        </a>
    );
}

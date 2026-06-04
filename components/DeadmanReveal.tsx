// components/DeadmanReveal.tsx
"use client";

import { useEffect, useState } from "react";
import PrimaryTransmission, { TransmissionData } from "@/components/PrimaryTransmission";

// Full status-endpoint URL on Autonomy, e.g.
//   https://rswfire.com/deadman/<slug>/status
// Inlined at build (NEXT_PUBLIC_*). Until it's set, this component is
// inert and renders nothing — safe to ship hidden.
const STATUS_URL = process.env.NEXT_PUBLIC_DEADMAN_STATUS_URL;

// Poll cadence. The switch can fire at any minute boundary; an open
// tab reveals within a minute without a manual refresh.
const POLL_MS = 60_000;

interface RevealData {
    fired: boolean;
    framing?: { intro?: string } | null;
    transmission?: TransmissionData | null;
}

export default function DeadmanReveal() {
    const [reveal, setReveal] = useState<RevealData | null>(null);

    useEffect(() => {
        if (!STATUS_URL) return;
        let alive = true;

        const poll = async () => {
            try {
                const res = await fetch(STATUS_URL, { cache: "no-store" });
                if (!res.ok) return;
                const data: RevealData = await res.json();
                if (alive && data?.fired) setReveal(data);
            } catch {
                /* network hiccup — try again next interval */
            }
        };

        poll();
        const id = setInterval(poll, POLL_MS);
        return () => {
            alive = false;
            clearInterval(id);
        };
    }, []);

    // Hidden until fired AND the server has handed us a transmission. The
    // content lives server-side (system_deadman.reveal_payload) and only
    // arrives in the response after the switch fires — never in this build.
    if (!STATUS_URL || !reveal?.fired || !reveal.transmission) return null;

    const intro = reveal.framing?.intro;

    return (
        <section className="mb-6" aria-label="Dead Man's Switch">
            {/* Framing — kicker + intro. Border matches the transmission's own
                and omits the bottom edge so the two read as one bordered unit. */}
            <div
                className="rounded-t-xl bg-red-50 px-4 py-5 sm:px-6"
                style={{ borderColor: "rgba(26,58,74,0.2)", borderStyle: "solid", borderWidth: "1px 1px 0 1px" }}
            >
                <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-red-700 mb-2">
                    Dead Man&apos;s Switch
                </div>
                {intro && (
                    <p className="text-base leading-relaxed text-red-950/80 max-w-3xl">{intro}</p>
                )}
            </div>

            {/* Same component the archive uses. Its outer div carries my-6;
                zero it so it butts flush against the framing above. */}
            <div className="[&>div]:!my-0">
                <PrimaryTransmission
                    transmission={reveal.transmission}
                    defaultExpanded
                    videoErrorLabel="Video unreleased"
                />
            </div>
        </section>
    );
}

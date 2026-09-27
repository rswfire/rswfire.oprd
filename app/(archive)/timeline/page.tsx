// app/(archive)/timeline/page.tsx
import type { Metadata } from "next";
import SectionPage from "@/components/SectionPage";
import TimelineBody from "@/components/TimelineBody";
import { TIMELINE } from "@/data/timeline";

export const metadata: Metadata = {
    title: "Timeline",
    description: "The record in date order, February 2025 — ongoing, with each event linked to its document.",
};

export default function TimelinePage() {
    return (
        <SectionPage
            title="TIMELINE"
            subtitle="FEBRUARY 9, 2025 — ONGOING"
            previousPage={{ href: "/records-requests", label: "Records Requests" }}
            nextPage={{ href: "/evidence", label: "Evidence" }}
        >
            {TIMELINE.map((section, si) => (
                <div key={section.heading}>
                    {si > 0 && <hr className="my-6 border-t border-gray-300" />}
                    <h2 className="text-xl font-semibold"><strong>{section.heading}</strong></h2>
                    <ul className="space-y-6 border-l-2 border-emerald-600 ml-6 pl-6 mt-4">
                        {section.entries.map((entry, ei) => (
                            <li key={`${entry.d}-${ei}`}>
                                <div className="font-semibold">{entry.date}</div>
                                <div className="mt-2 text-sm">
                                    <TimelineBody body={entry.body} />
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </SectionPage>
    );
}

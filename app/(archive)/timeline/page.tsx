// app/(archive)/timeline/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import SectionPage from "@/components/SectionPage";
import TimelineBody from "@/components/TimelineBody";
import Icon from "@/components/Icon";
import { TIMELINE } from "@/data/timeline";

export const metadata: Metadata = {
    title: "Timeline",
    description: "The record in date order, February 2025 — ongoing, with each event linked to its document.",
};

export default function TimelinePage() {
    return (
        <SectionPage
            emblem="ChartNoAxesGantt" tone="blue"
            title="TIMELINE"
            subtitle="FEBRUARY 9, 2025 — ONGOING"
            tagline={
                <Link
                    href="/sunlight"
                    className="inline-flex items-center gap-1.5 text-orange-800 underline decoration-orange-300 underline-offset-2 hover:text-orange-600"
                >
                    <Icon name="Sun" size={14} strokeWidth={2} className="text-orange-600" aria-hidden />
                    Compare to their timeline
                </Link>
            }
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

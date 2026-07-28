import type { Metadata } from "next";
import Link from "next/link";
import SectionPage from "@/components/SectionPage";
import { THREADS } from "@/data/threads";

export const metadata: Metadata = {
    title: "Accountability",
    description:
        "The public records requests, agency responses, and petitions to the Oregon Attorney General this matter has produced, tracked by agency.",
};

export default function AccountabilityPage() {
    return (
        <SectionPage
            title="ACCOUNTABILITY"
            subtitle="THE PUBLIC RECORD"
            previousPage={{ href: "/evidence/police", label: "Police Intimidation" }}
            nextPage={{ href: "/lisa-sumption", label: "The Director's Decisions" }}
        >
            <div className="mt-6 space-y-6">
                {THREADS.map((t) => (
                    <div key={t.slug} className="p-5 border border-gray-300 rounded-xl bg-white">
                        <Link
                            href={`/accountability/${t.slug}`}
                            className="text-lg font-semibold text-emerald-700 hover:underline"
                        >
                            {t.title}
                        </Link>
                        <div className="mt-1 text-xs font-semibold uppercase tracking-widest text-emerald-800">
                            {t.matter}
                        </div>
                        <div className="mt-3 text-sm text-gray-700">{t.summary[0]}</div>
                        <div className="mt-3 text-sm">
                            <span className="font-semibold uppercase tracking-wide">Status:</span> {t.status}
                        </div>
                        <div className="mt-4">
                            <Link
                                href={`/accountability/${t.slug}`}
                                className="inline-block px-4 py-2 text-sm font-semibold text-emerald-700 border border-emerald-700 rounded-lg hover:bg-emerald-700 hover:text-white transition-colors"
                            >
                                View the record &rarr;
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

        </SectionPage>
    );
}

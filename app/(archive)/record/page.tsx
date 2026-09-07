// app/(archive)/record/page.tsx

import type { Metadata } from "next";
import SectionPage from "@/components/SectionPage";
import ClusterRecord from "@/components/ClusterRecord";

export const metadata: Metadata = {
    title: "The OPRD Record",
    description:
        "The fourteen primary signals of this archive, clustered on Autonomy Realms and read together across six analytical lenses.",
};

const CLUSTER_ULID = "01M186Q44NQ0N2M4X50BAHJ18Z";

export default function RecordPage() {
    return (
        <SectionPage
            title="THE OPRD RECORD"
            subtitle="RECORDED IN REAL TIME, READ AS ONE"
            previousPage={{ href: "/", label: "Overview" }}
        >
            <div className="mb-6 flex items-start gap-3 rounded-lg border border-amber-300 bg-amber-50 px-4 py-3">
                <span aria-hidden className="mt-0.5 shrink-0 text-amber-600">
                    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-2" aria-hidden>
                        <path d="M12 9v4M12 17h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </span>
                <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-amber-800">Experimental</div>
                    <p className="mt-1 text-sm leading-relaxed text-amber-900">
                        This page reads a live cluster from Autonomy Realms and is still in development.
                        Its layout and machine readings may change or break. The primary recordings and
                        the accountability registers are the stable record.
                    </p>
                </div>
            </div>

            <div className="mb-6 space-y-4 text-base">
                <div>
                    Every primary recording this archive cites lives permanently on{" "}
                    <a href="https://rswfire.com" className="underline text-emerald-800 hover:text-emerald-600">Autonomy Realms</a>{" "}
                    as a signal &mdash; transcribed, analyzed, and independently addressable. This page holds fourteen of those
                    signals as one cluster: the record from the recorded picnic-table meeting of March 5,
                    2025 through the final letter to the department&rsquo;s director on September 5, 2026.
                </div>
                <div>
                    The platform reads the cluster as a whole &mdash; a synthesis, and six analytical readings of the
                    span. The readings are machine analysis and are labeled as such. The recordings are the record.
                </div>
            </div>

            <ClusterRecord ulid={CLUSTER_ULID} />
        </SectionPage>
    );
}

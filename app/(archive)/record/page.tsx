// app/(archive)/record/page.tsx

import type { Metadata } from "next";
import SectionPage from "@/components/SectionPage";
import ClusterRecord from "@/components/ClusterRecord";

export const metadata: Metadata = {
    title: "The OPRD Record",
    description:
        "The ten primary evidentiary signals of this archive, clustered on Autonomy Realms and read together across six analytical lenses.",
};

const CLUSTER_ULID = "01M186Q44NQ0N2M4X50BAHJ18Z";

export default function RecordPage() {
    return (
        <SectionPage
            title="THE OPRD RECORD"
            subtitle="TEN SIGNALS, READ TOGETHER"
            previousPage={{ href: "/", label: "Overview" }}
        >
            <div className="mb-6 space-y-4 text-base">
                <div>
                    Every primary recording this archive cites lives permanently on{" "}
                    <a href="https://rswfire.com" className="underline text-emerald-800 hover:text-emerald-600">Autonomy Realms</a>{" "}
                    as a signal &mdash; transcribed, analyzed, and independently addressable. This page holds ten of those
                    signals — the evidentiary core — as one cluster: the record from the recorded picnic-table meeting of March 5,
                    2025 through the legal fund announcement of August 29, 2026.
                </div>
                <div>
                    The platform reads the cluster as a whole &mdash; a synthesis, and six analytical readings of the
                    span. The readings are machine analysis and are labeled as such. The recordings are the evidence.
                </div>
            </div>

            <ClusterRecord ulid={CLUSTER_ULID} />
        </SectionPage>
    );
}

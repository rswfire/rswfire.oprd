// A doorway to /record, styled to read as what it is: the one place the
// archive hands its evidence to a machine and publishes what comes back.
// Borrows the Autonomy chrome (mono type, the orange accent) against the
// site's own palette so it registers as a different kind of object.

import Link from "next/link";

export default function RecordFeature() {
    return (
        <Link
            href="/record"
            className="group mb-4 block rounded-xl overflow-hidden border shadow-sm hover:shadow-md transition-shadow"
            style={{
                borderColor: "rgba(6,78,59,0.45)",
                background: "linear-gradient(130deg, #0b241b 0%, #10382a 60%, #155c40 100%)",
            }}
        >
            <div className="px-5 py-4 flex flex-col gap-2">
                <div className="flex items-center justify-between gap-4">
                    <span
                        className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest"
                        style={{ fontFamily: "var(--font-dm-mono), monospace", color: "#6ee7b7" }}
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60" style={{ backgroundColor: "#34d399" }} />
                            <span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: "#34d399" }} />
                        </span>
                        Queryable
                    </span>
                    <span
                        className="text-[10px] uppercase tracking-widest"
                        style={{ fontFamily: "var(--font-dm-mono), monospace", color: "#8a9ba8" }}
                    >
                        Autonomy Realms
                    </span>
                </div>

                <div className="text-lg font-bold tracking-wide text-white uppercase">
                    The OPRD Record
                </div>

                <div className="text-sm leading-relaxed" style={{ color: "#b8c7d0" }}>
                    This archive runs on structured data. Every primary recording is an independently
                    addressable signal on Autonomy Realms; this is all thirteen as one queryable object,
                    with a synthesis and six analytical passes computed from the evidence &mdash; inspectable,
                    regenerable, and labeled as analysis.
                </div>

                <div className="mt-1 flex justify-end">
                    <span
                        className="text-xs font-semibold uppercase tracking-widest group-hover:translate-x-0.5 transition-transform"
                        style={{ fontFamily: "var(--font-dm-mono), monospace", color: "#6ee7b7" }}
                    >
                        Open the record &rarr;
                    </span>
                </div>
            </div>
        </Link>
    );
}

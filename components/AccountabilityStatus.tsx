// The registers and their statuses, sidebar-sized. Same data as the
// accountability pages; the status line is the operator's characterization.
import Link from "next/link";
import { THREADS } from "@/data/threads";

export default function AccountabilityStatus() {
    return (
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50/60 shadow-sm p-3">
            <div className="px-1 pb-2 text-[10px] font-bold uppercase tracking-widest text-emerald-900">
                Accountability
            </div>
            <div className="rounded-lg overflow-hidden border border-emerald-200 divide-y divide-emerald-100 bg-white">
                {THREADS.map((t) => (
                    <Link
                        key={t.slug}
                        href={`/accountability/${t.slug}`}
                        className="group block px-3 py-2.5 hover:bg-emerald-50 transition-colors"
                    >
                        <span className="block text-xs font-semibold text-emerald-900 group-hover:text-emerald-700 transition-colors">{t.title}</span>
                        <span className="mt-0.5 block text-xs text-gray-700">
                            {t.status}
                            <span className="ml-1 text-emerald-700 group-hover:translate-x-0.5 inline-block transition-transform">&rarr;</span>
                        </span>
                        <span className="mt-0.5 block text-[10px] uppercase tracking-wider text-gray-400">{t.filings.length} documents</span>
                    </Link>
                ))}
            </div>
        </div>
    );
}

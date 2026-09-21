import Link from "next/link";
import { OUTREACH_GROUPS } from "@/data/outreach";

export default function OutreachDispatchLedger({ homepage = false }: { homepage?: boolean }) {
    const entries = OUTREACH_GROUPS.flatMap((group) => group.entries);
    const anchor = (entryAnchor: string) => homepage ? `/outreach/#${entryAnchor}` : `#${entryAnchor}`;

    return (
        <section
            id="dispatch-ledger"
            className={homepage
                ? "mt-4 overflow-hidden rounded-2xl border border-slate-300 bg-white shadow-sm"
                : "scroll-mt-4 lg:scroll-mt-28"
            }
        >
            <div className={homepage ? "border-b border-slate-200 px-6 py-5 sm:px-8" : "border-b-2 border-slate-300 pb-3"}>
                <div className="flex flex-wrap items-end justify-between gap-3">
                    <div>
                        <h2 className={homepage ? "text-xl font-bold text-slate-900" : "text-2xl font-bold text-slate-900"}>Dispatch ledger</h2>
                        <p className="mt-2 text-sm text-slate-600">The quick overview. Full exchanges and attachments remain under the relevant entries.</p>
                    </div>
                    {homepage && <Link href="/outreach/" className="text-sm font-semibold text-emerald-800 underline decoration-emerald-300 underline-offset-2 hover:text-emerald-600">Open the correspondence tracker</Link>}
                </div>
            </div>
            <div className={homepage ? "overflow-x-auto" : "mt-5 overflow-x-auto rounded-2xl border border-slate-200"}>
                <table className="w-full min-w-[920px] border-collapse text-left text-sm">
                    <thead className="bg-slate-100 font-mono text-[10px] uppercase tracking-wider text-slate-600">
                        <tr><th className="px-4 py-3">ID</th><th className="px-4 py-3">Institution / recipient</th><th className="px-4 py-3">Date sent</th><th className="px-4 py-3">Material / version</th><th className="px-4 py-3">Response date</th><th className="px-4 py-3">Response / link</th><th className="px-4 py-3">Next action</th><th className="px-4 py-3">Status</th></tr>
                    </thead>
                    <tbody>
                        {entries.map((entry) => (
                            <tr key={entry.id} className="border-t border-slate-200">
                                <td className="px-4 py-3 font-mono text-xs"><a href={anchor(entry.anchor)} className="text-emerald-800 underline">{entry.id}</a></td>
                                <td className="px-4 py-3 font-medium text-slate-800">{entry.title}</td>
                                <td className="px-4 py-3" />
                                <td className="px-4 py-3" />
                                <td className="px-4 py-3" />
                                <td className="px-4 py-3" />
                                <td className="px-4 py-3" />
                                <td className="px-4 py-3 text-xs font-semibold text-amber-800">{entry.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}

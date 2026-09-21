import Link from "next/link";
import { OUTREACH_GROUPS } from "@/data/outreach";

export default function OutreachNavigation({ homepage = false }: { homepage?: boolean }) {
    const href = (anchor: string) => homepage ? `/outreach/#${anchor}` : `#${anchor}`;

    const navigation = (
        <div className="grid gap-x-8 gap-y-5 md:grid-cols-2">
            {OUTREACH_GROUPS.map((group) => (
                <div key={group.id}>
                    <a href={href(group.id)} className="font-semibold text-emerald-800 underline decoration-emerald-300 underline-offset-2">{group.title}</a>
                    <ul className="mt-2 space-y-1 text-sm text-slate-600">
                        {group.entries.map((entry) => (
                            <li key={entry.id}>
                                <a href={href(entry.anchor)} className="hover:text-emerald-700">
                                    <span className="mr-2 font-mono text-[10px] text-slate-400">{entry.id}</span>
                                    {entry.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );

    if (homepage) {
        return (
            <section className="mt-4 overflow-hidden rounded-2xl border border-sky-200 bg-white shadow-sm">
                <div className="border-b border-sky-200 bg-sky-50 px-6 py-5 sm:px-8">
                    <div className="flex flex-wrap items-end justify-between gap-3">
                        <div>
                            <div className="font-mono text-[10px] font-bold uppercase tracking-widest text-sky-700">Institutional outreach</div>
                            <h2 className="mt-1 text-xl font-bold text-slate-900">Making the record available to institutions</h2>
                        </div>
                        <Link href="/outreach/" className="text-sm font-semibold text-emerald-800 underline decoration-emerald-300 underline-offset-2 hover:text-emerald-600">Open the correspondence tracker</Link>
                    </div>
                </div>
                <div className="px-6 py-5 sm:px-8 sm:py-6">{navigation}</div>
            </section>
        );
    }

    return (
        <section className="rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-900">Navigation</h2>
            <div className="mt-4">{navigation}</div>
            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 border-t border-slate-200 pt-4 text-sm">
                <a href="#other-audiences" className="text-emerald-800 underline">Other audiences</a>
                <a href="#dispatch-ledger" className="text-emerald-800 underline">Dispatch ledger</a>
                <a href="#sources-and-scope" className="text-emerald-800 underline">Sources and scope</a>
            </div>
        </section>
    );
}

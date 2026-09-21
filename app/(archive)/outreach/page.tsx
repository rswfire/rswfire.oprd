import type { Metadata } from "next";
import SectionPage from "@/components/SectionPage";
import OutreachDispatchLedger from "@/components/OutreachDispatchLedger";
import OutreachNavigation from "@/components/OutreachNavigation";
import {
    OTHER_AUDIENCES,
    OUTREACH_GROUPS,
    OUTREACH_SOURCES,
    type OutreachEntry,
} from "@/data/outreach";

export const metadata: Metadata = {
    title: "Institutions and Correspondence Tracker",
    description: "A working contact and response log for making the archive available to institutions with distinct public responsibilities.",
};

function ExternalLink({ href, label }: { href: string; label: string }) {
    return (
        <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined} className="underline decoration-emerald-300 underline-offset-2 hover:text-emerald-700">
            {label}
        </a>
    );
}

function TrackingFields({ fields, status }: { fields: string[]; status: string }) {
    return (
        <div className="mt-5 overflow-hidden rounded-xl border border-slate-200 bg-slate-50/70">
            {fields.map((field) => (
                <div key={field} className="grid min-h-10 grid-cols-1 border-b border-slate-200 px-4 py-2.5 sm:grid-cols-[13rem_1fr] sm:gap-4">
                    <div className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-500">{field}</div>
                    <div className="mt-2 border-b border-dotted border-slate-300 sm:mt-0" aria-label={`${field}: blank`} />
                </div>
            ))}
            <div className="grid grid-cols-1 px-4 py-3 sm:grid-cols-[13rem_1fr] sm:gap-4">
                <div className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-500">Status</div>
                <div className="text-sm font-semibold text-amber-800">{status}</div>
            </div>
        </div>
    );
}

function InstitutionCard({ entry }: { entry: OutreachEntry }) {
    return (
        <article id={entry.anchor} className="scroll-mt-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm lg:scroll-mt-28 sm:p-6">
            <div className="flex flex-col gap-2 border-b border-slate-200 pb-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                    <div className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-emerald-700">{entry.id}</div>
                    <h3 className="mt-1 text-xl font-semibold leading-tight text-slate-900">{entry.title}</h3>
                </div>
                <a href={`#${entry.anchor}`} className="shrink-0 font-mono text-sm font-semibold text-slate-500 hover:text-emerald-700" aria-label={`Link to ${entry.id}`}>#{entry.anchor}</a>
            </div>
            <div className="mt-4 text-[11px] font-bold uppercase tracking-widest text-slate-500">Audience</div>
            <p className="mt-1 leading-relaxed text-slate-800">{entry.audience}</p>
            {entry.context && <p className="mt-3 rounded-lg border-l-4 border-amber-400 bg-amber-50 px-4 py-3 text-sm leading-relaxed text-slate-700">{entry.context}</p>}
            <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm text-slate-600">
                {entry.startingPoints.map((link) => <ExternalLink key={link.href} {...link} />)}
            </div>
            <TrackingFields fields={entry.fields} status={entry.status} />
        </article>
    );
}

export default function OutreachPage() {
    return (
        <SectionPage title="ARCHIVE RELEASE: INSTITUTIONS AND CORRESPONDENCE TRACKER" subtitle="WORKING CONTACT AND RESPONSE LOG" previousPage={{ href: "/", label: "Overview" }}>
            <div className="space-y-10">
                <section className="rounded-2xl border border-emerald-200 bg-emerald-50/60 p-5 sm:p-6">
                    <div className="grid gap-4 text-sm sm:grid-cols-[7rem_1fr]">
                        <div className="font-mono text-[10px] font-bold uppercase tracking-widest text-emerald-800">Purpose</div>
                        <div>Make the archive available to institutions with distinct responsibilities for volunteer policy, Oregon agency oversight, public accountability, and federal civil-rights concerns.</div>
                    </div>
                    <blockquote className="mt-5 border-l-4 border-emerald-600 pl-4 text-base leading-relaxed text-slate-800">
                        This archive tells two connected stories: what happens when something goes wrong in a public volunteer program, and how an institution responds to a persistent, independently documented record. Its purpose is to educate volunteers about the apparatus they are embedded in and give institutions primary material they can examine themselves.
                    </blockquote>
                </section>

                <OutreachNavigation />

                {OUTREACH_GROUPS.map((group) => (
                    <section key={group.id} id={group.id} className="scroll-mt-4 space-y-5 lg:scroll-mt-28">
                        <div className="border-b-2 border-slate-300 pb-3">
                            <h2 className="text-2xl font-bold text-slate-900">{group.title}</h2>
                            {group.introduction && <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-600">{group.introduction}</p>}
                        </div>
                        {group.entries.map((entry) => <InstitutionCard key={entry.id} entry={entry} />)}
                    </section>
                ))}

                <section id="other-audiences" className="scroll-mt-4 space-y-5 lg:scroll-mt-28">
                    <div className="border-b-2 border-slate-300 pb-3">
                        <h2 className="text-2xl font-bold text-slate-900">Other audiences discussed</h2>
                    </div>
                    {OTHER_AUDIENCES.map((audience) => (
                        <article key={audience.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
                            <h3 className="text-xl font-semibold text-slate-900">{audience.title}</h3>
                            <div className="mt-4 text-[11px] font-bold uppercase tracking-widest text-slate-500">Audience</div>
                            <p className="mt-1 leading-relaxed text-slate-800">{audience.audience}</p>
                            <TrackingFields fields={audience.fields} status="Not contacted" />
                        </article>
                    ))}
                </section>

                <OutreachDispatchLedger />

                <section id="sources-and-scope" className="scroll-mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-5 lg:scroll-mt-28 sm:p-6">
                    <h2 className="text-2xl font-bold text-slate-900">Sources and scope</h2>
                    <p className="mt-2 text-sm text-slate-600">Official pages checked September 20, 2026.</p>
                    <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-700">
                        {OUTREACH_SOURCES.map((source) => <li key={source.href}><ExternalLink {...source} /></li>)}
                    </ul>
                </section>
            </div>
        </SectionPage>
    );
}

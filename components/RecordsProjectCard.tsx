// components/RecordsProjectCard.tsx
//
// The card that sends a reader from this archive to OpenRecordsOregon.org,
// where Public Questions moved. One card, so every page that points there
// looks the same.

import Icon from "@/components/Icon";

/** The site's name as it renders itself: OpenRecordsOregon.org, Records in sky blue, .org light. */
export function SiteName({ bold = true }: { bold?: boolean }) {
    const w = bold ? "font-bold" : "";
    return (
        <span className="whitespace-nowrap">
            <span className={`${w} text-gray-900`}>Open</span><span className={`${w} text-sky-700`}>Records</span><span className={`${w} text-gray-900`}>Oregon</span><span className="font-light text-slate-500">.org</span>
        </span>
    );
}

export default function RecordsProjectCard({
    href,
    label,
    cta,
    children,
}: {
    href: string;
    label: string;
    cta: React.ReactNode;
    children: React.ReactNode;
}) {
    return (
        <a
            href={href}
            className="not-prose group block rounded-2xl border border-sky-300 bg-gradient-to-br from-sky-50 to-white p-6 sm:p-8 shadow-sm transition-shadow hover:shadow-md"
        >
            <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-sky-700 text-white">
                    <Icon name="LibraryBig" size={28} strokeWidth={1.75} aria-hidden />
                </div>
                <div className="min-w-0">
                    <div className="text-[10px] font-bold uppercase tracking-widest text-sky-700">{label}</div>
                    <div className="mt-1 whitespace-nowrap text-xl sm:text-2xl leading-tight text-gray-900"><SiteName /></div>
                    <p className="mt-3 text-sm leading-relaxed text-gray-700">{children}</p>
                    <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-sky-800 group-hover:underline">
                        {cta}
                        <Icon name="ChevronDown" size={16} className="-rotate-90" aria-hidden />
                    </div>
                </div>
            </div>
        </a>
    );
}

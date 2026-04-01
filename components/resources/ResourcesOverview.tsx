// components/resources/ResourcesOverview.tsx
import Link from "next/link";
import Icon from "@/components/Icon";

const resources = [
    {
        href: "/resources/advocates",
        icon: "Users" as const,
        title: "For Advocates",
        description: "Share this with your network. This situation belongs in your awareness.",
    },
    {
        href: "/resources/press",
        icon: "Newspaper" as const,
        title: "For Press",
        description: "The story, the questions to ask, and who to ask them to.",
    },
    {
        href: "/resources/lawyers",
        icon: "Scale" as const,
        title: "For Lawyers",
        description: "The case prepared in public. White v Watson. White v Oregon State Parks.",
    },
    {
        href: "/resources/legislators",
        icon: "Landmark" as const,
        title: "For Legislators",
        description: "The structural gap in volunteer protections and how to close it.",
    },
];

export default function ResourcesOverview() {
    return (
        <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-white">
            <div className="p-4 border-b border-slate-200">
                <h2 className="text-xs font-semibold uppercase tracking-widest text-emerald-700">Resources</h2>
                <div className="text-sm text-gray-600 mt-1">I have reached out to every channel available to me. These pages are for the people who can help.</div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2">
                {resources.map((r, i) => (
                    <Link
                        key={r.href}
                        href={r.href}
                        className={`block p-4 hover:bg-emerald-50 transition-colors ${
                            i % 2 === 0 ? "sm:border-r border-slate-200" : ""
                        } ${i < 2 ? "border-b border-slate-200" : ""} ${
                            i === 2 ? "border-b sm:border-b-0 border-slate-200 sm:border-r" : ""
                        }`}
                    >
                        <div className="flex items-center gap-3">
                            <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-emerald-700 shrink-0">
                                <Icon name={r.icon} className="text-white" size={18} strokeWidth={1.5} />
                            </div>
                            <div>
                                <div className="text-sm font-semibold text-emerald-900">{r.title}</div>
                                <div className="text-xs text-gray-500 mt-0.5">{r.description}</div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

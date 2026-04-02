// components/resources/ResourcesOverview.tsx
import Link from "next/link";
import Icon from "@/components/Icon";

const resources = [
    {
        href: "/resources/advocates",
        icon: "Users" as const,
        title: "For Advocates",
        description: "Become part of the solution.",
    },
    {
        href: "/resources/press",
        icon: "Newspaper" as const,
        title: "For Press",
        description: "The questions to ask, and who to ask them to.",
    },
    {
        href: "/resources/lawyers",
        icon: "Scale" as const,
        title: "For Lawyers",
        description: "The case prepared in public.",
    },
    {
        href: "/resources/legislators",
        icon: "Landmark" as const,
        title: "For Legislators",
        description: "The structural gap in volunteer protections.",
    },
];

export default function ResourcesOverview() {
    return (
        <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-white">
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

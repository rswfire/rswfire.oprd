// app/(archive)/resources/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import SectionPage from "@/components/SectionPage";
import Icon from "@/components/Icon";

export const metadata: Metadata = {
    title: "Resources",
    description: "Resources for advocates, press, lawyers, and legislators. Oregon State Parks permanently expelled a volunteer for speaking publicly about documented abuse.",
};

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

export default function ResourcesPage() {
    return (
        <SectionPage
            title="RESOURCES"
            previousPage={{ href: "/", label: "Home" }}
            nextPage={{ href: "/faq", label: "Frequently Asked Questions" }}
        >

            <div className="mt-6 text-base leading-relaxed space-y-4">
                <p>I have reached out to every channel available to me. Every institution failed. Every mechanism of accountability was used to shield the people accountability was built to reach.</p>
                <p>These pages are for the people who can help.</p>
            </div>

            <Link
                href="/resources/volunteers"
                className="mt-8 block p-6 border border-red-200 rounded-lg bg-white shadow-sm hover:bg-red-50 transition-colors"
            >
                <div className="flex items-center gap-3 mb-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-red-700">
                        <Icon name="Shield" className="text-white" size={20} strokeWidth={1.5} />
                    </div>
                    <div className="text-sm font-semibold uppercase tracking-widest text-red-900">For Volunteers</div>
                </div>
                <div className="text-sm text-gray-700">If this happened to you, it has a name.</div>
            </Link>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                {resources.map((r) => (
                    <Link
                        key={r.href}
                        href={r.href}
                        className="block p-6 border border-slate-200 rounded-lg bg-white shadow-sm hover:bg-emerald-50 transition-colors"
                    >
                        <div className="flex items-center gap-3 mb-3">
                            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-emerald-700">
                                <Icon name={r.icon} className="text-white" size={20} strokeWidth={1.5} />
                            </div>
                            <div className="text-sm font-semibold uppercase tracking-widest text-emerald-900">{r.title}</div>
                        </div>
                        <div className="text-sm text-gray-700">{r.description}</div>
                    </Link>
                ))}
            </div>

        </SectionPage>
    );
}

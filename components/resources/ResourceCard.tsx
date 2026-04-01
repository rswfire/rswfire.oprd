// components/resources/ResourceCard.tsx
import Link from "next/link";
import Icon, { IconName } from "@/components/Icon";
import { ReactNode } from "react";

type ResourceCardProps = {
    icon: IconName;
    title: string;
    description?: string;
    children?: ReactNode;
    href?: string;
    placeholder?: boolean;
};

export default function ResourceCard({ icon, title, description, children, href, placeholder }: ResourceCardProps) {
    const content = (
        <div className={`border border-slate-200 rounded-lg p-6 bg-white shadow-sm ${href ? "hover:shadow-md transition-shadow" : ""} ${placeholder ? "opacity-50" : ""}`}>
            <div className="flex items-center gap-3 mb-3">
                <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-emerald-700">
                    <Icon name={icon} className="text-white" size={18} strokeWidth={1.5} />
                </div>
                <div className="text-sm font-semibold uppercase tracking-widest text-emerald-900">{title}</div>
                {placeholder && <span className="text-xs text-gray-400 uppercase tracking-wider">(Coming Soon)</span>}
            </div>
            {children ? children : description ? (
                <div className="text-sm text-gray-700 leading-relaxed">{description}</div>
            ) : null}
        </div>
    );

    if (href) {
        return <Link href={href} className="block">{content}</Link>;
    }

    return content;
}

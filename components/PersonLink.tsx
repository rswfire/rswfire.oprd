// components/PersonLink.tsx
import Link from "next/link";
import { User } from "lucide-react";

const people: Record<string, string> = {
    "volunteer services lead": "/key-individuals/volunteer-services-lead",
    "park supervisor": "/key-individuals/park-supervisor",
    "park manager": "/key-individuals/park-manager",
    "program manager": "/key-individuals/program-manager",
    "Lisa Sumption": "/key-individuals/lisa-sumption",
    "Tina Kotek": "/key-individuals/tina-kotek",
};

type PersonName = keyof typeof people;

interface PersonLinkProps {
    name: string;
    label?: string;
}

export default function PersonLink({ name, label }: PersonLinkProps) {
    const href = people[name];
    if (!href) {
        return <span>{label ?? name}</span>;
    }
    return (
        <Link href={href} className="inline-flex items-baseline gap-1 text-emerald-800 hover:text-emerald-600 underline decoration-emerald-300">
            <User size={13} strokeWidth={1.5} className="relative top-[2px] shrink-0" />
            <span>{label ?? name}</span>
        </Link>
    );
}

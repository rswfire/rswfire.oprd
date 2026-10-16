// components/PersonLink.tsx
//
// A person or role named in running text, opening their drawer from Key
// Individuals in place. The timeline and the evidence pages call it by
// name; a name with no seat renders as plain text.
import { DrawerLink, SEAT_LINK } from "@/components/system/DrawerHost";

const SEATS: Record<string, string> = {
    "park supervisor": "supervisor",
    "park manager": "manager",
    "program manager": "program",
    "volunteer services lead": "lead",
    "Lisa Sumption": "director",
};

interface PersonLinkProps {
    name: string;
    label?: string;
    /** The seat to open, where the name alone does not say. */
    seat?: string;
}

export default function PersonLink({ name, label, seat }: PersonLinkProps) {
    const to = seat ?? SEATS[name];
    if (!to) return <span>{label ?? name}</span>;
    return <DrawerLink to={`seat-${to}`} className={SEAT_LINK}>{label ?? name}</DrawerLink>;
}

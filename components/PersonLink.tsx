// components/PersonLink.tsx
//
// A person or role named in running text, opening their drawer from Key
// Individuals in place, with the face their card wears there: a person, a
// records office, or a building. The timeline and the evidence pages call
// it by name; a name with no seat renders as plain text.
import { Building2, Newspaper, UserRound } from "lucide-react";
import { DrawerLink } from "@/components/system/DrawerHost";
import { SEAT_LINK } from "@/lib/seatLink";
import { RUNGS, type Seat } from "@/data/system";

const SEATS: Record<string, string> = {
    "park supervisor": "supervisor",
    "park manager": "manager",
    "program manager": "program",
    "volunteer services lead": "lead",
    "Lisa Sumption": "director",
};

type Face = "person" | "office" | "building";

// Every seat on Key Individuals, by id, for the face its card wears.
const FACES: Record<string, Face> = {};
for (const r of RUNGS) {
    const all: Seat[] = [...r.seats, ...(r.branch?.seats ?? [])];
    for (const s of all) FACES[s.id] = s.building ? "building" : s.office ? "office" : "person";
}

const ICON = { person: UserRound, office: Newspaper, building: Building2 } as const;

interface PersonLinkProps {
    name: string;
    label?: string;
    /** The seat to open, where the name alone does not say. */
    seat?: string;
}

export default function PersonLink({ name, label, seat }: PersonLinkProps) {
    const to = seat ?? SEATS[name];
    if (!to) return <span>{label ?? name}</span>;
    const I = ICON[FACES[to] ?? "person"];
    return (
        <DrawerLink to={to} className={`${SEAT_LINK} inline-flex items-baseline gap-1`}>
            <I aria-hidden size={13} strokeWidth={2.25} className="relative top-[1.5px] shrink-0 text-emerald-700" />
            <span>{label ?? name}</span>
        </DrawerLink>
    );
}

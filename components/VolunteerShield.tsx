// The For Volunteers shield, sized for the sidebar rail. The first thing
// the archive offers is shelter for the next volunteer.
import Link from "next/link";
import Icon from "@/components/Icon";

export default function VolunteerShield() {
    return (
        <Link
            href="/for-volunteers"
            className="group flex w-full flex-col rounded-2xl border border-red-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden"
        >
            <div className="flex w-full items-center justify-center bg-red-700 group-hover:bg-red-800 transition-colors py-5">
                <Icon name="Shield" className="text-white w-10 h-10" size={40} strokeWidth={1.5} />
            </div>
            <div className="flex w-full flex-col items-center justify-center bg-white px-4 py-3 text-center">
                <div className="text-sm font-bold uppercase tracking-widest text-red-900 leading-tight">For Volunteers</div>
                <div className="mt-1 text-xs leading-snug text-gray-600">If this happened to you,<br/>it has a name.</div>
            </div>
        </Link>
    );
}

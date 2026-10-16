// components/map/MapBody.tsx
//
// The Map. The overview map is the index: every arrow is a move and opens its
// screen. Each move is one screen: the words it arrives in, who sent it, what
// was behind it, what came next, and the figure. Versioned like the Testimony.
import Link from "next/link";
import SectionPage from "@/components/SectionPage";
import StateMap from "@/components/systembackup/StateMap";
import MapTabs from "@/components/systembackup/MapTabs";
import MoveScreen from "@/components/systembackup/MoveScreen";
import Playbook from "@/components/systembackup/Playbook";
import { MOVES } from "@/components/systembackup/moves";
import { MAP_VERSIONS, CURRENT_MAP_VERSION } from "@/data/mapVersions";

export default function MapBody({ version, isCurrent }: { version: string; isCurrent: boolean }) {
    const viewed = MAP_VERSIONS.find((v) => v.version === version) ?? CURRENT_MAP_VERSION;

    return (
        <SectionPage
            emblem="Map"
            tone="teal"
            title="The Map"
            subtitle="FOR THE NEXT PERSON"
            supplemental="HOW THE STATE OPERATES"
            tagline="AUGUST 2025 — PRESENT"
            previousPage={{ href: "/sunlight", label: "Sunlight" }}
            nextPage={{ href: "/evidence", label: "Evidence" }}
        >
            <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-1 text-[13px] text-slate-600">
                <span>
                    <span className="font-bold uppercase tracking-widest text-slate-400">v</span>
                    <a href={`/map/v${viewed.version}/`} className="ml-1 font-mono text-slate-900 underline decoration-slate-300 underline-offset-2 hover:text-teal-700">{viewed.version}</a>
                    {!isCurrent ? <span className="ml-2 rounded bg-amber-500 px-1.5 py-0.5 text-[11px] font-bold uppercase text-white">superseded</span> : null}
                </span>
                <span>{viewed.date}</span>
                <span className="text-slate-500">{viewed.note}</span>
                {!isCurrent ? <Link href="/map" className="text-teal-800 underline">Current version</Link> : null}
            </div>

            <div id="top" className="-mx-4 mt-6 scroll-mt-24 bg-slate-950 px-5 py-6 text-white sm:mx-0 sm:rounded-2xl sm:px-8 sm:py-8">
                <p className="text-[22px] font-semibold leading-snug sm:text-[28px]">
                    The State of Oregon sent police to a man over letters to his government. It kept the file. Then it
                    charged him to see it.
                </p>
                <p className="mt-4 text-[15px] text-slate-300">
                    Every document is here, in full, from the state&rsquo;s own files and his.
                </p>
            </div>

            <nav aria-label="Index" className="-mx-4 mt-6 divide-y divide-slate-200 border-y border-slate-200 sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-2 sm:divide-y-0 sm:border-0">
                {MOVES.map((m, i) => (
                    <a
                        key={m.id}
                        href={`#${m.id}`}
                        className="block bg-white px-4 py-3 text-[17px] font-semibold leading-snug text-gray-900 no-underline hover:bg-teal-50 sm:rounded-xl sm:border sm:border-slate-300 sm:hover:border-teal-600"
                    >
                        <span className="mr-2 font-mono text-[13px] font-normal text-teal-700">{i + 1}</span>
                        {m.label}
                    </a>
                ))}
            </nav>

            <MapTabs
                tabs={[
                    ...MOVES.map((m, i) => ({ id: m.id, name: m.label, sentence: m.arrives, panel: <MoveScreen m={m} n={i + 1} /> })),
                    { id: "playbook", name: "All of them, side by side", panel: <Playbook /> },
                    { id: "map", name: "The map", panel: <StateMap /> },
                ]}
            />
        </SectionPage>
    );
}

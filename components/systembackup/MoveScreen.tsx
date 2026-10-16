// components/map/MoveScreen.tsx
//
// One move: the sentence it arrives in, then every instance of it in the
// record as a row (institution, their words, the document), then the figure.
import Cite from "@/components/Cite";
import type { Move } from "@/components/systembackup/moves";

export default function MoveScreen({ m, n }: { m: Move; n: number }) {
    return (
        <article id={m.id} className="scroll-mt-24">
            <h2 className="flex gap-3 text-[22px] font-semibold leading-snug text-gray-900 sm:text-[26px]">
                <span className="shrink-0 font-mono text-[15px] font-normal leading-[1.9] text-teal-700">{n}</span>
                <span>{m.label}</span>
            </h2>
            <blockquote className="mt-3 border-l-4 border-teal-600 pl-4 text-[17px] leading-snug text-gray-800">{m.arrives}</blockquote>

            <ul className="-mx-4 mt-6 divide-y divide-slate-200 border-y border-slate-200 bg-white sm:mx-0 sm:rounded-xl sm:border">
                {m.senders.map((s, i) => (
                    <li key={i} className="grid grid-cols-1 gap-x-4 px-4 py-3 sm:grid-cols-[14rem_1fr]">
                        <div className="text-[13px] font-bold text-slate-700">{s.who}</div>
                        <div className="text-[15px] leading-relaxed text-gray-900">
                            <Cite ulid={s.ulid} thread={s.thread} subtle>{s.said}</Cite>
                        </div>
                    </li>
                ))}
            </ul>

            {m.figure ? <div className="mt-8">{m.figure}</div> : null}
        </article>
    );
}

// components/map/MapP.tsx
//
// A numbered paragraph of The Map. The element id is the number (`p12`), and
// the number links to the versioned address, so a citation copied from any
// version points at the words that were there.
import type { ReactNode } from "react";

export default function MapP({
    n,
    version,
    children,
}: {
    n: number;
    version: string;
    children: ReactNode;
}) {
    return (
        <p id={`p${n}`} className="scroll-mt-24">
            <a
                href={`/map/v${version}/#p${n}`}
                aria-label={`Paragraph ${n}`}
                title="The permanent address of this paragraph"
                className="mr-2 select-none align-baseline font-mono text-[13px] text-slate-400 no-underline hover:text-teal-700"
            >
                {n}
            </a>
            {children}
        </p>
    );
}

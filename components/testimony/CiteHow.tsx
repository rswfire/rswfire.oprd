"use client";

// components/testimony/CiteHow.tsx
//
// "How to cite this record", inside the citation key. Collapsed to one link;
// opened, it gives the format: version plus paragraph. The versioning system
// is what makes this possible — every version is frozen at a permanent
// address, so a citation to a version and a paragraph number can never drift.
import { useState } from "react";
import Icon from "@/components/Icon";
import { TESTIMONY_VERSIONS } from "@/data/testimonyVersions";
import { useTestimonyVersion } from "@/components/testimony/versionContext";

export default function CiteHow() {
    const [open, setOpen] = useState(false);
    const { version } = useTestimonyVersion();
    const v = TESTIMONY_VERSIONS.find((x) => x.version === version) ?? TESTIMONY_VERSIONS[0];

    return (
        <div className="mt-2">
            <button
                onClick={() => setOpen((o) => !o)}
                aria-expanded={open}
                className="inline-flex items-center gap-1 text-[13px] font-semibold text-gray-900 underline decoration-gray-300 underline-offset-2 hover:decoration-gray-500"
            >
                How to cite this record
                <Icon name={open ? "ChevronUp" : "ChevronDown"} size={14} strokeWidth={2} aria-hidden />
            </button>
            {open && (
                <div className="mt-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 text-[13px] leading-relaxed text-slate-700">
                    <p>
                        Every version of this testimony is frozen at its own permanent address,
                        so a citation to a version and a paragraph can never drift. The number
                        on any paragraph opens its sharing: the permanent address, and a
                        citation ready to copy.
                    </p>
                </div>
            )}
        </div>
    );
}

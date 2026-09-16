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
                        Cite the version and the paragraph. Every version of this testimony is
                        frozen at a permanent address, so the citation can never drift.
                    </p>
                    <p className="mt-2 break-words rounded bg-white px-2.5 py-2 font-mono text-[12px] text-slate-800">
                        Testimony of Robert Samuel White, v{v.version} ({v.date}), &para;1.
                        <br />
                        https://oprdvolunteerabuse.org/testimony/v{v.version}/#p1
                    </p>
                    <p className="mt-2">
                        The number on any paragraph opens sharing for it: the permanent
                        address, and the citation ready to copy.
                    </p>
                </div>
            )}
        </div>
    );
}

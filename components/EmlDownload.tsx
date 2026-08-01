// components/EmlDownload.tsx
//
// The unmodified original is never handed over silently: the disclosure comes
// first, wherever the download is offered. This is the button for pages that
// are otherwise server-rendered.
"use client";

import { useState } from "react";
import EmlNotice, { requestEml } from "@/components/EmlNotice";

export default function EmlDownload({ href }: { href: string }) {
    const [open, setOpen] = useState<string | null>(null);
    return (
        <>
            <button
                type="button"
                onClick={() => requestEml(href, setOpen)}
                title="The unmodified email original"
                className="cursor-pointer text-xs font-semibold uppercase tracking-wider text-emerald-700 border border-emerald-700 rounded px-2.5 py-1 hover:bg-emerald-700 hover:text-white transition-colors"
            >
                The unmodified original (EML)
            </button>
            <EmlNotice key={open ?? "none"} href={open} onClose={() => setOpen(null)} />
        </>
    );
}

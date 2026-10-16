"use client";

// components/system/DocSheet.tsx
//
// The documents behind a seat or a connection on the diagram. A sheet from
// the bottom on a phone, a panel from the right above that. The document
// viewer opens above it.
import { useEffect, useRef } from "react";
import type { ReactNode } from "react";
import Icon from "@/components/Icon";
import type { Act, Doc } from "@/data/system";
import { ActList, DocList } from "@/components/system/Docs";

export interface SheetContent {
    /** One line each; never wrapped together. */
    eyebrow?: string | string[];
    title: string;
    head?: ReactNode;
    docs: Doc[];
    acts?: Act[];
    /** Lines shown above the acts, for a connection whose acts are the letters it names. */
    lead?: Doc[];
}

export default function DocSheet({ content, onClose }: { content: SheetContent | null; onClose: () => void }) {
    const closeRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if (!content) return;
        const prev = document.activeElement as HTMLElement | null;
        closeRef.current?.focus();
        const overflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        const onKey = (e: KeyboardEvent) => {
            if (e.key !== "Escape") return;
            // The document viewer, when open above the sheet, closes first.
            if (document.querySelector(".fixed.inset-0.z-50")) return;
            onClose();
        };
        window.addEventListener("keydown", onKey);
        return () => {
            window.removeEventListener("keydown", onKey);
            document.body.style.overflow = overflow;
            prev?.focus();
        };
    }, [content, onClose]);

    if (!content) return null;

    return (
        <div className="not-prose fixed inset-0 z-40 flex items-end justify-center bg-slate-950/50 sm:items-stretch sm:justify-end" onClick={onClose}>
            <div
                role="dialog"
                aria-modal="true"
                aria-label={content.title}
                onClick={(e) => e.stopPropagation()}
                className="sys-sheet @container relative flex max-h-[88vh] w-full flex-col overflow-hidden border-l-4 border-emerald-600 bg-white shadow-2xl sm:max-h-none sm:w-[36rem]"
            >
                <div className="flex items-start gap-4 border-b border-emerald-100 bg-emerald-50/70 px-5 py-5 sm:px-7 sm:py-6">
                    <span aria-hidden className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-emerald-700 shadow-sm ring-1 ring-emerald-200">
                        <Icon name="Park" size={28} strokeWidth={1.5} />
                    </span>
                    <div className="min-w-0 flex-1 pt-0.5">
                        {content.eyebrow ? (
                            <div className="text-[11px] font-semibold uppercase leading-snug tracking-[0.14em] text-emerald-800/80">
                                {(Array.isArray(content.eyebrow) ? content.eyebrow : [content.eyebrow]).map((l) => (
                                    <div key={l} className="truncate">{l}</div>
                                ))}
                            </div>
                        ) : null}
                        <h2 className="m-0 mt-1 text-[22px] font-semibold leading-tight tracking-tight text-gray-900">{content.title}</h2>
                    </div>
                    <button
                        ref={closeRef}
                        type="button"
                        onClick={onClose}
                        aria-label="Close"
                        className="-mr-2 -mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-gray-500 hover:bg-white hover:text-gray-900 focus-visible:outline-2 focus-visible:outline-emerald-600"
                    >
                        <Icon name="X" size={22} strokeWidth={2} aria-hidden />
                    </button>
                </div>
                <div className="overflow-y-auto overscroll-contain px-5 pb-10 pt-6 sm:px-7">
                    {content.head ? <div className="mb-8">{content.head}</div> : null}
                    {content.lead?.length ? <div className="mb-10"><DocList docs={content.lead} /></div> : null}
                    {content.acts?.length ? <ActList acts={content.acts} /> : <DocList docs={content.docs} />}
                </div>
            </div>
        </div>
    );
}

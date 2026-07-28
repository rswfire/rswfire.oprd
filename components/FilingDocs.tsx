// components/FilingDocs.tsx
//
// Document list for one filing. Each row is one file: its name on the left, a
// format chip on the right, the whole row a download target. The unmodified
// .eml original is its own row and opens the disclosure modal before download.
"use client";

import { useState } from "react";
import type { FilingDoc } from "@/components/RecordsThread";

function ext(href: string): string {
    const m = href.toLowerCase().match(/\.([a-z0-9]+)$/);
    return m ? m[1].toUpperCase() : "FILE";
}

function Chip({ label }: { label: string }) {
    return (
        <span className="shrink-0 text-xs font-semibold uppercase tracking-wider text-emerald-700 border border-emerald-700 rounded px-2 py-0.5 group-hover:bg-emerald-700 group-hover:text-white transition-colors">
            {label}
        </span>
    );
}

export default function FilingDocs({ docs, eml }: { docs: FilingDoc[]; eml?: string }) {
    const [open, setOpen] = useState(false);

    return (
        <div className="mt-5">
            <div className="border border-gray-300 rounded-lg divide-y divide-gray-200 overflow-hidden bg-white sm:max-w-md">
                {docs.map((d) => (
                    <a
                        key={d.href}
                        href={d.href}
                        download
                        className="group flex items-center justify-between gap-4 px-4 py-2.5 hover:bg-emerald-50 transition-colors"
                    >
                        <span className="text-sm font-medium text-gray-800">{d.label}</span>
                        <Chip label={ext(d.href)} />
                    </a>
                ))}
                {eml && (
                    <button
                        type="button"
                        onClick={() => setOpen(true)}
                        className="group flex w-full items-center justify-between gap-4 px-4 py-2.5 hover:bg-emerald-50 transition-colors text-left"
                    >
                        <span className="text-sm text-gray-600">Unmodified email original</span>
                        <Chip label="EML" />
                    </button>
                )}
            </div>

            {open && eml && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
                    onClick={() => setOpen(false)}
                >
                    <div
                        className="w-full max-w-lg rounded-2xl bg-white border border-gray-300 p-6 sm:p-8"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h2 className="text-base font-semibold uppercase tracking-widest text-gray-900">
                            Unmodified Email Original
                        </h2>

                        <div className="mt-4 space-y-3 text-sm leading-relaxed text-gray-700">
                            <p>
                                This is a raw email file, exactly as sent or received. Its full
                                headers, addresses, and authentication signatures can be examined
                                with{" "}
                                <a
                                    href="https://toolbox.googleapps.com/apps/messageheader/"
                                    target="_blank"
                                    className="underline text-emerald-700 hover:text-emerald-600"
                                >
                                    standard tools
                                </a>
                                . Nothing in it has been altered.
                            </p>
                            <p>
                                This archive refers to the local staff by role. That is a choice
                                about emphasis, not concealment.
                            </p>
                            <p>
                                In an unmodified record, identity is not protected, because it
                                cannot be.{" "}
                                <a
                                    href="https://github.com/rswfire/rswfire.oprd"
                                    target="_blank"
                                    className="underline text-emerald-700 hover:text-emerald-600"
                                >
                                    Everything here is public
                                </a>
                                , including the open-source repository this archive is published
                                from.
                            </p>
                        </div>

                        <div className="mt-6 flex flex-col sm:flex-row gap-3">
                            <a
                                href={eml}
                                download
                                onClick={() => setOpen(false)}
                                className="inline-block px-4 py-2 text-center text-sm font-semibold uppercase tracking-wider text-white bg-emerald-700 border border-emerald-700 rounded-lg hover:bg-emerald-800 transition-colors"
                            >
                                Download the Original
                            </a>
                            <button
                                type="button"
                                onClick={() => setOpen(false)}
                                className="inline-block px-4 py-2 text-sm font-semibold uppercase tracking-wider text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

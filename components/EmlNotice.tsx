// components/EmlNotice.tsx
//
// The disclosure shown before an unmodified email original is downloaded:
// raw emails carry full headers and signatures, identity in them is not
// protected because it cannot be, and everything here is public. One shared
// modal for every EML download in the archive; suppression persists only
// when the download proceeds.
"use client";

import { useState } from "react";

/** Route an EML download through the notice unless the user suppressed it. */
export function requestEml(href: string, open: (href: string) => void) {
    if (typeof window !== "undefined" && window.localStorage.getItem("eml-notice-suppressed") === "1") {
        const a = document.createElement("a");
        a.href = href;
        a.download = "";
        a.click();
        return;
    }
    open(href);
}

export default function EmlNotice({ href, onClose }: { href: string | null; onClose: () => void }) {
    const [suppress, setSuppress] = useState(false);
    if (!href) return null;
    return (
        <div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 p-4"
            onClick={(e) => {
                e.stopPropagation();
                onClose();
            }}
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
                        This archive refers to four OPRD staff by role. That is a choice
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
                        href={href}
                        download
                        onClick={() => {
                            if (suppress) window.localStorage.setItem("eml-notice-suppressed", "1");
                            onClose();
                        }}
                        className="cursor-pointer inline-block px-4 py-2 text-center text-sm font-semibold uppercase tracking-wider text-white bg-emerald-700 border border-emerald-700 rounded-lg hover:bg-emerald-800 transition-colors"
                    >
                        Download the Original
                    </a>
                    <button
                        type="button"
                        onClick={onClose}
                        className="cursor-pointer inline-block px-4 py-2 text-sm font-semibold uppercase tracking-wider text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                        Cancel
                    </button>
                </div>
                <label className="cursor-pointer mt-4 flex items-center gap-2 text-sm text-gray-600 select-none">
                    <input
                        type="checkbox"
                        checked={suppress}
                        onChange={(e) => setSuppress(e.target.checked)}
                        className="cursor-pointer h-4 w-4 accent-emerald-700"
                    />
                    Don&apos;t show this notice again
                </label>
            </div>
        </div>
    );
}

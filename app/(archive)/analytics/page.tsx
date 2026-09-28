// app/(archive)/analytics/page.tsx
//
// Linked from the sidebar foot. Shows whether this browser on this
// device is counted by analytics, and toggles the flag the Umami
// tracker honors (localStorage umami.disabled).

"use client";

import { useEffect, useState } from "react";

export default function SelfPage() {
    const [off, setOff] = useState<boolean | null>(null);

    useEffect(() => {
        try {
            setOff(localStorage.getItem("umami.disabled") === "1");
        } catch {
            setOff(false);
        }
    }, []);

    const toggle = () => {
        try {
            if (off) {
                localStorage.removeItem("umami.disabled");
                setOff(false);
            } else {
                localStorage.setItem("umami.disabled", "1");
                setOff(true);
            }
        } catch { /* leave state as is */ }
    };

    return (
        <main className="mx-auto flex min-h-[60vh] max-w-md flex-col items-center justify-center px-6 text-center">
            {off === null ? (
                <p className="text-gray-500">Reading the flag.</p>
            ) : (
                <>
                    <p className="text-lg font-semibold text-gray-900">
                        {off ? "This device is not counted." : "This device is counted."}
                    </p>
                    <p className="mt-2 text-sm text-gray-500">
                        {off
                            ? "Analytics are off for this site in this browser, on this device."
                            : "This browser sends ordinary analytics on this site."}
                    </p>
                    <button onClick={toggle} className="mt-6 text-sm text-gray-400 underline hover:text-gray-600">
                        {off ? "Count this device again" : "Stop counting this device"}
                    </button>
                </>
            )}
        </main>
    );
}

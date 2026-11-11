// app/(archive)/analytics/page.tsx
//
// Linked from the sidebar foot. Shows whether this browser on this
// device is counted by analytics, and toggles the flag lib/analytics
// honors before it sends anything to Matomo.

"use client";

import { useEffect, useState } from "react";
import { analyticsOff, setAnalyticsOff } from "@/lib/analytics";

// The layout's error reporter sends one named event, whatever the flag says.
const report = (name: string) => (window as unknown as { __report?: (n: string, d: object, k: string) => void }).__report?.(name, {}, "analytics");

export default function SelfPage() {
    const [off, setOff] = useState<boolean | null>(null);

    useEffect(() => {
        setOff(analyticsOff());
    }, []);

    const toggle = () => {
        try {
            if (off) {
                setAnalyticsOff(false);
                setOff(false);
                report("analytics-on");
            } else {
                // One event marks that the switch was used; nothing is sent after it.
                report("analytics-off");
                setAnalyticsOff(true);
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

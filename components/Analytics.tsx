"use client";

// components/Analytics.tsx
//
// A page view each time the address changes (lib/analytics), counted once the
// new page has its title.

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { trackPage } from "@/lib/analytics";

export default function Analytics() {
    const path = usePathname();
    useEffect(() => {
        const t = window.setTimeout(trackPage, 0);
        return () => window.clearTimeout(t);
    }, [path]);
    return null;
}

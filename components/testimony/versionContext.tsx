"use client";

// components/testimony/versionContext.tsx
//
// The version the reader is looking at. /testimony renders the current
// version; /testimony/v1.0 renders that version, frozen. Every bookmark link
// carries the version it was copied from, so a citation stays pinned to the
// text that was there when it was made, and a page that is not the most recent
// version can say so.
import { createContext, useContext } from "react";

export interface TestimonyVersion {
    version: string; // e.g. "1.0"
    isCurrent: boolean;
}

const TestimonyVersionCtx = createContext<TestimonyVersion>({
    version: "",
    isCurrent: true,
});

export function TestimonyVersionProvider({
    version,
    isCurrent,
    children,
}: TestimonyVersion & { children: React.ReactNode }) {
    return (
        <TestimonyVersionCtx.Provider value={{ version, isCurrent }}>
            {children}
        </TestimonyVersionCtx.Provider>
    );
}

export function useTestimonyVersion() {
    return useContext(TestimonyVersionCtx);
}

// The path a bookmark points at: always the versioned page, so the link is
// pinned to the text it was copied from.
export function versionedHref(version: string, id: string) {
    return `/testimony/v${version}/#${id}`;
}

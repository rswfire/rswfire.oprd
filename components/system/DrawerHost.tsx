"use client";

// components/system/DrawerHost.tsx
//
// The drawer, for the whole archive. It lives in the address (#seat-…,
// #line-…, #branch-…) on whatever page the reader is on, so a role named
// anywhere opens its drawer in place, Back from a document returns to the
// same drawer, and Back with a drawer open closes it. The drawers themselves
// load only when one is first asked for.
import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import DocSheet from "@/components/system/DocSheet";
import type { SheetContent } from "@/components/system/DocSheet";

const ADDRESS = /^(seat|line|branch)-[a-z0-9-]+$/;

type Sheets = Map<string, () => SheetContent>;
let loaded: Sheets | null = null;
function loadSheets(): Promise<Sheets> {
    if (loaded) return Promise.resolve(loaded);
    return import("@/components/system/Sheets").then((m) => (loaded = m.SHEETS));
}

/** The current history state, less the drawer's scroll, so a new drawer opens at its top. */
function withoutScroll() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { sheetScroll, ...rest } = window.history.state ?? {};
    return rest;
}

const DrawerContext = createContext<{ open: (key: string) => void } | null>(null);

export function useDrawer() {
    const ctx = useContext(DrawerContext);
    if (!ctx) throw new Error("useDrawer must be used inside <DrawerHost>");
    return ctx;
}

export default function DrawerHost({ children }: { children: ReactNode }) {
    const [key, setKey] = useState<string | null>(null);
    const [sheets, setSheets] = useState<Sheets | null>(loaded);
    const pushed = useRef(false);
    const pathname = usePathname();

    // A page change inside the archive fires neither popstate nor
    // hashchange, so the address is read again on every one: following a
    // document out of the drawer closes it, and Back reopens it.
    useEffect(() => {
        const read = () => {
            const h = decodeURIComponent(window.location.hash.slice(1));
            if (!ADDRESS.test(h)) {
                setKey(null);
                pushed.current = false;
                return;
            }
            setKey(h);
            void loadSheets().then(setSheets);
        };
        read();
        window.addEventListener("popstate", read);
        window.addEventListener("hashchange", read);
        return () => {
            window.removeEventListener("popstate", read);
            window.removeEventListener("hashchange", read);
        };
    }, [pathname]);

    const open = useCallback((k: string) => {
        if (window.location.hash !== `#${k}`) {
            window.history.pushState(withoutScroll(), "", `#${k}`);
            pushed.current = true;
        }
        setKey(k);
        void loadSheets().then(setSheets);
    }, []);

    const close = useCallback(() => {
        if (pushed.current) {
            pushed.current = false;
            window.history.back();
        } else {
            window.history.replaceState(withoutScroll(), "", window.location.pathname + window.location.search);
        }
        setKey(null);
    }, []);

    // One object per drawer, so the sheet's effects run when it opens, not on every render.
    const sheet = useMemo(() => (key && sheets ? sheets.get(key)?.() ?? null : null), [key, sheets]);
    const api = useMemo(() => ({ open }), [open]);

    return (
        <DrawerContext.Provider value={api}>
            {children}
            <DocSheet content={sheet} onClose={close} />
        </DrawerContext.Provider>
    );
}

/** How a name that opens a drawer reads in running text. */
export const SEAT_LINK = "text-inherit underline decoration-gray-300 underline-offset-2 hover:text-emerald-800 hover:decoration-emerald-500";

/** A link that opens a drawer where the reader is; a new tab gets the page it lives on. */
export function DrawerLink({ to, className, children }: { to: string; className?: string; children: ReactNode }) {
    const { open } = useDrawer();
    return (
        <a
            href={`/key-individuals#${to}`}
            className={className}
            onClick={(e) => {
                if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
                e.preventDefault();
                open(to);
            }}
        >
            {children}
        </a>
    );
}

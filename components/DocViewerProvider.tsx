"use client";

// components/DocViewerProvider.tsx
//
// One document viewer for the whole archive, mounted in the root layout next
// to the player. A citation anywhere in the prose carries only a ULID; this
// resolves it against public/records/index.json, fetched once on first use,
// and opens the same modal the registers use.
//
// On a phone it does nothing and the citation stays an ordinary link: a modal
// over a 375px screen is worse than the document's own page, which is built
// for reading and keeps the back button honest.
import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import DocViewer, { type ViewDoc } from "@/components/DocViewer";

const PREFIX = process.env.NEXT_PUBLIC_ASSET_PREFIX ?? "";

interface DocViewerApi {
    /** Opens the viewer. Returns false when the caller should navigate instead. */
    openDoc: (ulid: string) => boolean;
    inline: boolean;
}

const Ctx = createContext<DocViewerApi | null>(null);

export function useDocViewer(): DocViewerApi {
    return useContext(Ctx) ?? { openDoc: () => false, inline: false };
}

export default function DocViewerProvider({ children }: { children: React.ReactNode }) {
    const [doc, setDoc] = useState<ViewDoc | null>(null);
    const inline = true;
    const index = useRef<Record<string, ViewDoc> | null>(null);
    const pending = useRef<string | null>(null);

    // The viewer opens over the page on every screen; on a phone it fills it.
    // Opening it adds a history step, so Back closes it and keeps the page.
    // The step carries a token: the viewer only ever steps back over its own
    // entry, and the drawer is told to ignore that one Back.
    const token = useRef<string | null>(null);
    const open = useCallback((d: ViewDoc) => {
        if (!token.current) {
            token.current = Math.random().toString(36).slice(2);
            window.history.pushState({ ...(window.history.state ?? {}), __doc: token.current }, "");
        }
        setDoc(d);
    }, []);
    const close = useCallback(() => {
        pending.current = null;
        setDoc(null);
        const t = token.current;
        token.current = null;
        if (t && (window.history.state as { __doc?: string } | null)?.__doc === t) {
            (window as { __docBack?: boolean }).__docBack = true;
            window.history.back();
        }
    }, []);
    const leave = useCallback(() => {
        pending.current = null;
        setDoc(null);
        token.current = null;
        const st = window.history.state as { __doc?: boolean } | null;
        if (st?.__doc) {
            const rest = { ...st };
            delete rest.__doc;
            window.history.replaceState(rest, "");
        }
    }, []);
    useEffect(() => {
        const onPop = () => {
            if (!(window.history.state as { __doc?: string } | null)?.__doc) {
                pending.current = null;
                token.current = null;
                setDoc(null);
            }
        };
        window.addEventListener("popstate", onPop);
        return () => window.removeEventListener("popstate", onPop);
    }, []);

    const load = useCallback(async () => {
        if (index.current) return index.current;
        // no-store: a cached index from before a deploy is missing every
        // record added since, and the miss path navigates away instead of
        // opening the viewer.
        const res = await fetch(`${PREFIX}/records/index.json`, { cache: "no-store" });
        if (!res.ok) throw new Error(`index ${res.status}`);
        index.current = (await res.json()) as Record<string, ViewDoc>;
        return index.current;
    }, []);

    const openDoc = useCallback((ulid: string) => {
        if (!inline) return false;
        const hit = index.current?.[ulid];
        if (hit) {
            open(hit);
            return true;
        }
        // First citation clicked on this page load: fetch the index, then
        // open. If it fails, the caller has already navigated nowhere, so
        // send the reader to the document's page instead of doing nothing.
        pending.current = ulid;
        load()
            .then((idx) => {
                if (pending.current !== ulid) return;
                const found = idx[ulid];
                if (found) open(found);
                else window.location.href = `/record/oprd/${ulid}`;
            })
            .catch(() => {
                if (pending.current === ulid) window.location.href = `/record/oprd/${ulid}`;
            });
        return true;
    }, [inline, load, open]);

    // Every record link already written into the archive, upgraded in place:
    // the generated citations in the sunlight document, the evidence pages,
    // anything pointing at /record/<register>/<ULID>. Capture phase, because
    // Next's <Link> claims the click in its own handler.
    useEffect(() => {
        if (!inline) return;
        const onClick = (event: MouseEvent) => {
            if (event.button !== 0) return;
            if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
            const anchor = (event.target as HTMLElement | null)?.closest?.("a");
            const href = anchor?.getAttribute("href");
            if (!href) return;
            // A link that names the full page as its purpose is never
            // intercepted: the ULID links exist to leave the viewer.
            if (anchor?.dataset.fullpage !== undefined) return;
            let url: URL;
            try { url = new URL(href, window.location.origin); } catch { return; }
            if (url.origin !== window.location.origin) return;
            const m = /^\/record\/[a-z-]+\/([0-9A-HJKMNP-TV-Z]{26})\/?$/.exec(url.pathname);
            if (!m) return;
            if (openDoc(m[1])) {
                event.preventDefault();
                event.stopPropagation();
            }
        };
        document.addEventListener("click", onClick, true);
        return () => document.removeEventListener("click", onClick, true);
    }, [inline, openDoc]);

    const api = useMemo(() => ({ openDoc, inline }), [openDoc, inline]);

    return (
        <Ctx.Provider value={api}>
            {children}
            <DocViewer doc={doc} onClose={close} onLeave={leave} />
        </Ctx.Provider>
    );
}

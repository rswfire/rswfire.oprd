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
    const [inline, setInline] = useState(false);
    const index = useRef<Record<string, ViewDoc> | null>(null);
    const pending = useRef<string | null>(null);

    // Desktop and tablet get the modal; phones keep the link. Tracked live so
    // a rotation or a resized window changes behaviour without a reload.
    useEffect(() => {
        const mq = window.matchMedia("(min-width: 768px)");
        const sync = () => setInline(mq.matches);
        sync();
        mq.addEventListener("change", sync);
        return () => mq.removeEventListener("change", sync);
    }, []);

    const load = useCallback(async () => {
        if (index.current) return index.current;
        const res = await fetch(`${PREFIX}/records/index.json`);
        if (!res.ok) throw new Error(`index ${res.status}`);
        index.current = (await res.json()) as Record<string, ViewDoc>;
        return index.current;
    }, []);

    const openDoc = useCallback((ulid: string) => {
        if (!inline) return false;
        const hit = index.current?.[ulid];
        if (hit) {
            setDoc(hit);
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
                if (found) setDoc(found);
                else window.location.href = `/record/oprd/${ulid}`;
            })
            .catch(() => {
                if (pending.current === ulid) window.location.href = `/record/oprd/${ulid}`;
            });
        return true;
    }, [inline, load]);

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
            <DocViewer doc={doc} onClose={() => { pending.current = null; setDoc(null); }} />
        </Ctx.Provider>
    );
}

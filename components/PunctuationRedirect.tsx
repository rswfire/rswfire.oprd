// components/PunctuationRedirect.tsx
//
// Mail clients linkify a URL written at the end of a sentence and swallow the
// punctuation that follows it, so a recipient clicking a link from a letter
// lands on /records/legislation, or /records/osp. and gets the
// not-found page. This recovers those: on the 404, strip trailing punctuation
// and go to the page the sender meant.
//
// It also recovers the singular and plural of the register paths. A register
// lives at /records/<register> and one document at /record/<register>/<ULID>,
// which is one letter apart, so either form typed at the wrong address lands
// on the page the reader meant.
"use client";

import { useEffect } from "react";

// Punctuation a sentence can leave attached to a URL.
const TRAILING = /[.,;:!?)\]}'"»›]+$/;

const ULID = /^[0-9A-HJKMNP-TV-Z]{26}$/;

// /records/<register>/<ULID> -> /record/…, and /record/<register> -> /records/…
function singularPlural(pathname: string): string | null {
    const parts = pathname.replace(/[?#].*$/, "").replace(/^\/+|\/+$/g, "").split("/");
    if (parts.length === 3 && parts[0] === "records" && ULID.test(parts[2].toUpperCase())) {
        return `/record/${parts[1]}/${parts[2]}/`;
    }
    if (parts.length === 2 && parts[0] === "record") {
        return `/records/${parts[1]}/`;
    }
    return null;
}

function intended(pathname: string): string | null {
    const stripped = pathname
        .replace(/[?#].*$/, "")
        .replace(/\/+$/, "")
        .replace(TRAILING, "")
        .replace(/\/+$/, "");
    if (!stripped || stripped === pathname.replace(/\/+$/, "")) return null;
    // One leading slash, no doubles: a path like //example.com. must not
    // become a protocol-relative URL pointing off the site.
    return "/" + stripped.replace(/^\/+/, "").replace(/\/{2,}/g, "/") + "/";
}

export default function PunctuationRedirect() {
    useEffect(() => {
        const path = window.location.pathname;
        const to = singularPlural(path) ?? intended(path);
        if (!to || to === path) return;
        window.location.replace(to + window.location.search + window.location.hash);
    }, []);

    return null;
}

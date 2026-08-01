// components/PunctuationRedirect.tsx
//
// Mail clients linkify a URL written at the end of a sentence and swallow the
// punctuation that follows it, so a recipient clicking a link from a letter
// lands on /accountability/legislation, or /accountability/osp. and gets the
// not-found page. This recovers those: on the 404, strip trailing punctuation
// and go to the page the sender meant.
"use client";

import { useEffect } from "react";

// Punctuation a sentence can leave attached to a URL.
const TRAILING = /[.,;:!?)\]}'"»›]+$/;

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
        const to = intended(window.location.pathname);
        if (!to) return;
        window.location.replace(to + window.location.search + window.location.hash);
    }, []);

    return null;
}

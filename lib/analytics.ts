// lib/analytics.ts
//
// Visits are counted by Matomo, on web, through this site's own /v.js and /v
// (nginx passes both to it). The layout loads the tracker with cookies off;
// it sends nothing on its own. What it sends is sent from here: a page view
// for each address the reader opens, and named events. Neither goes out while
// this browser's flag is set, the switch on the analytics page.

const KEY = "analytics.off";
// The flag Umami read, kept for the browsers that set it.
const OLD = "umami.disabled";

/** Fired on window when the flag changes, so every label reading it follows. */
export const FLAG_EVENT = "analytics-flag";

const paq = () => (window as unknown as { _paq?: unknown[][] })._paq;

export function analyticsOff(): boolean {
    try {
        return localStorage.getItem(KEY) === "1" || localStorage.getItem(OLD) === "1";
    } catch {
        return false;
    }
}

export function setAnalyticsOff(off: boolean): void {
    if (off) localStorage.setItem(KEY, "1");
    else {
        localStorage.removeItem(KEY);
        localStorage.removeItem(OLD);
    }
    window.dispatchEvent(new Event(FLAG_EVENT));
}

let last: string | null = null;

/** A page view for the address the reader is on, the one before it as its referrer. */
export function trackPage(): void {
    const q = paq();
    if (!q || analyticsOff() || location.href === last) return;
    if (last) q.push(["setReferrerUrl", last]);
    q.push(["setCustomUrl", location.href]);
    q.push(["setDocumentTitle", document.title]);
    q.push(["trackPageView"]);
    last = location.href;
}

/** A named event on the page the reader is on. */
export function trackEvent(category: string, action: string, name?: string): void {
    const q = paq();
    if (!q || analyticsOff()) return;
    q.push(name === undefined ? ["trackEvent", category, action] : ["trackEvent", category, action, name]);
}

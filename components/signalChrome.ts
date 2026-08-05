// Shared chrome for the Autonomy Realms surfaces in the archive.
//
// The archive styles inline rather than through utility classes, so the
// palette and the two type treatments live here instead of being retyped in
// each component. Values match the surrounding archive, not the platform's
// own gateway: this is the record's house style, showing platform data.

export const INK = "#1a3a4a";        // headings, structural lines
export const BODY = "#4a6475";       // prose
export const MUTED = "#8a9ba8";      // labels, metadata
export const ACCENT = "#c4622d";     // links, active state
export const RULE = "rgba(26,58,74,0.1)";
export const RULE_STRONG = "rgba(26,58,74,0.2)";
export const TINT = "rgba(26,58,74,0.03)";
export const TINT_STRONG = "rgba(26,58,74,0.06)";

export const MONO = "var(--font-dm-mono), monospace";

/** Mono-caps label. Size varies by context; everything else is fixed. */
export const label = (size = 10) => ({
    fontFamily: MONO,
    fontSize: `${size}px`,
    letterSpacing: "0.15em",
    color: MUTED,
    textTransform: "uppercase" as const,
});

export const value = (size = 11) => ({
    fontFamily: MONO,
    fontSize: `${size}px`,
    color: BODY,
});

export const prose = {
    fontSize: "14px",
    lineHeight: 1.75,
    color: BODY,
    margin: 0,
};

/**
 * Each reflection type gets one accent so a reader who has seen the four on
 * the platform recognises them here. Deliberately muted against the archive's
 * palette — these mark a reading of the record, and must not outrank the
 * record's own accent.
 */
export const REFLECTION_CHROME: Record<string, { tint: string; border: string; ink: string }> = {
    NARRATIVE: { tint: "rgba(46,105,79,0.07)", border: "rgba(46,105,79,0.35)", ink: "#2e694f" },
    SYMBOLIC: { tint: "rgba(92,74,132,0.07)", border: "rgba(92,74,132,0.35)", ink: "#5c4a84" },
    LINEAGE: { tint: "rgba(150,105,42,0.07)", border: "rgba(150,105,42,0.35)", ink: "#96692a" },
    MIRROR: { tint: "rgba(42,94,130,0.07)", border: "rgba(42,94,130,0.35)", ink: "#2a5e82" },
};

export const reflectionChrome = (type: string) =>
    REFLECTION_CHROME[type] ?? { tint: TINT, border: RULE_STRONG, ink: INK };

/** ISO timestamp to the archive's date form. Returns null when absent. */
export function formatDate(iso?: string | null): string | null {
    if (!iso) return null;
    const d = new Date(iso);
    if (Number.isNaN(d.getTime())) return null;
    return d.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
        timeZone: "UTC",
    });
}

// The six reflection lenses, defined once. What each reflection TYPE is — the
// operation it performs on the record — not a description of any particular
// record's content. Used by the homepage door card and by the definition card
// above each reading on /record, so the two never drift.

export type LensType = "NARRATIVE" | "SYMBOLIC" | "LINEAGE" | "MIRROR" | "SHAPE" | "SYSTEMIC";

export const LENSES: { type: LensType; label: string; blurb: string }[] = [
    { type: "NARRATIVE", label: "Narrative", blurb: "The record told as a story: its events in order, read for what they mean." },
    { type: "SYMBOLIC", label: "Symbolic", blurb: "The record read through archetype and symbol, for the recurring pattern beneath the particulars." },
    { type: "LINEAGE", label: "Lineage", blurb: "The record as heritage and continuity: what it descends from, and what it hands to those who come after." },
    { type: "MIRROR", label: "Mirror", blurb: "The record turned back on the one who kept it, showing him what it shows about himself." },
    { type: "SHAPE", label: "Shape", blurb: "The form the whole record takes when narrative and mirror are held together, and what moved within it." },
    { type: "SYSTEMIC", label: "Systemic", blurb: "The record described strictly as a system: its inputs, constraints, control laws, and failure modes." },
];

export function lensBlurb(type: string): string | null {
    return LENSES.find((l) => l.type === type.toUpperCase())?.blurb ?? null;
}

export function lensLabel(type: string): string {
    return LENSES.find((l) => l.type === type.toUpperCase())?.label ?? type;
}

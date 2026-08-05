// The Queryable Personhood record for a signal, fetched at read time.
//
// The archive is a static export, so this runs in the browser: each
// transmission asks rswfire.com for its own signal and renders what comes
// back. Nothing about the analysis is stored here — the platform is the
// single source, and the page shows whatever it currently says.
//
// The endpoint is public, unauthenticated and sends
// `Access-Control-Allow-Origin: *`, so no credentials are ever attached.

export interface SignalEntity {
    name: string;
    context?: string | null;
}

export interface SignalReflection {
    type: string;
    content: string;
    created?: string | null;
    model?: string | null;
}

export interface SignalChapter {
    start: number;
    end?: number | null;
    title: string;
    summary?: string | null;
}

export interface Provenance {
    model?: string | null;
    generated?: string | null;
}

export interface SignalActions {
    performed: string[];
    referenced: string[];
    planned: string[];
}

export interface SignalRecord {
    ulid: string;
    title?: string | null;
    summary?: string | null;
    canonicalUrl?: string | null;
    temperature?: number | null;
    density?: number | null;
    energy?: string | null;
    state?: string | null;
    orientation?: string | null;
    environment?: string | null;
    substrate?: string | null;
    ontologicalStates: string[];
    subsystems: string[];
    tags: string[];
    dominantLanguage: string[];
    symbolicElements: string[];
    entities: Record<string, SignalEntity[]>;
    actions: SignalActions;
    chapters: SignalChapter[];
    reflections: SignalReflection[];
    /** What produced the structured analysis, and when. */
    provenance?: Provenance | null;
}

// Separate from the media origin on purpose. Media is served from wherever
// the signals physically live; the analysis can be read from a development
// host without dragging video playback along with it.
const QP_ORIGIN =
    process.env.NEXT_PUBLIC_QP_ORIGIN ||
    process.env.NEXT_PUBLIC_MEDIA_ORIGIN ||
    "https://rswfire.com";

const REFLECTION_ORDER = ["narrative", "symbolic", "lineage", "mirror"];

function num(v: unknown): number | null {
    const n = typeof v === "string" ? parseFloat(v) : typeof v === "number" ? v : NaN;
    return Number.isFinite(n) ? n : null;
}

function strings(v: unknown): string[] {
    return Array.isArray(v) ? v.filter((x): x is string => typeof x === "string") : [];
}

/**
 * The payload prunes empty keys, so every field here is optional on the wire
 * and normalised to a present-but-empty value.
 */
export function mapPayload(ulid: string, payload: Record<string, unknown>): SignalRecord {
    const meta = (payload.metadata ?? {}) as Record<string, unknown>;
    const rawEntities = (payload.entities ?? {}) as Record<string, unknown>;
    const rawActions = (payload.actions ?? {}) as Record<string, unknown>;
    const rawReflections = (payload.reflections ?? {}) as Record<string, Record<string, unknown>>;

    const entities: Record<string, SignalEntity[]> = {};
    for (const [group, items] of Object.entries(rawEntities)) {
        if (!Array.isArray(items)) continue;
        const list = items
            .filter((i): i is Record<string, unknown> => Boolean(i) && typeof i === "object")
            .filter((i) => typeof i.name === "string")
            .map((i) => ({ name: i.name as string, context: (i.context as string) ?? null }));
        if (list.length) entities[group] = list;
    }

    const kinds = [
        ...REFLECTION_ORDER.filter((k) => k in rawReflections),
        ...Object.keys(rawReflections).filter((k) => !REFLECTION_ORDER.includes(k)),
    ];

    const reflections: SignalReflection[] = kinds
        .map((kind) => {
            const r = rawReflections[kind] ?? {};
            return {
                type: kind.toUpperCase(),
                content: typeof r.content === "string" ? r.content : "",
                created: (r.created as string) ?? null,
                model: (r.model as string) ?? null,
            };
        })
        .filter((r) => r.content.trim() !== "");

    return {
        ulid,
        title: (payload.title as string) ?? null,
        summary: (payload.summary as string) ?? null,
        canonicalUrl: (meta.canonical_url as string) ?? null,
        temperature: num(meta.temperature),
        density: num(meta.density),
        energy: (meta.energy as string) ?? null,
        state: (meta.state as string) ?? null,
        orientation: (meta.orientation as string) ?? null,
        environment: (payload.environment as string) ?? null,
        substrate: (payload.substrate as string) ?? null,
        ontologicalStates: strings(payload.ontological_states),
        subsystems: strings(payload.subsystems),
        tags: strings(meta.tags),
        dominantLanguage: strings(meta.dominant_language),
        symbolicElements: strings(meta.symbolic_elements),
        entities,
        chapters: Array.isArray(payload.chapters)
            ? (payload.chapters as Record<string, unknown>[])
                  .filter((c) => typeof c?.title === "string" && typeof c?.start === "number")
                  .map((c) => ({
                      start: c.start as number,
                      end: typeof c.end === "number" ? c.end : null,
                      title: c.title as string,
                      summary: (c.summary as string) ?? null,
                  }))
            : [],
        provenance: (payload.analysis_provenance as Provenance) ?? null,
        actions: {
            performed: strings(rawActions.performed),
            referenced: strings(rawActions.referenced),
            planned: strings(rawActions.planned),
        },
        reflections,
    };
}

export async function fetchSignal(ulid: string, signal?: AbortSignal): Promise<SignalRecord> {
    const res = await fetch(`${QP_ORIGIN}/qp/signal/${ulid}`, {
        signal,
        credentials: "omit",
        headers: { Accept: "application/json" },
    });
    if (!res.ok) throw new Error(`qp ${res.status}`);
    return mapPayload(ulid, await res.json());
}

/** True when the record carries enough to fill the analysis panel. */
export function hasAnalysis(record: SignalRecord): boolean {
    return Boolean(
        record.energy || record.state || record.orientation ||
        record.temperature !== null || record.density !== null ||
        record.environment || record.ontologicalStates.length || record.subsystems.length ||
        record.tags.length || record.symbolicElements.length || record.dominantLanguage.length ||
        Object.keys(record.entities).length ||
        record.actions.performed.length || record.actions.referenced.length || record.actions.planned.length
    );
}

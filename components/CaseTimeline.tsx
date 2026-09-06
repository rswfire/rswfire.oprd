// components/CaseTimeline.tsx
//
// The homepage entry point: a horizontally-scrolling chronology of the
// case, told through the documents themselves. Document cards show an
// image of the document's first page and open it in the document viewer;
// recording cards show the Autonomy Realms poster frame and play in place
// through the media proxy. Arrow buttons and a dotted rail navigate the
// strip — one stop per panel, intro and outro included; every card is
// deep-linkable as #case-<id>.
"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { Map } from "lucide-react";
import DocViewer, { type ViewDoc } from "@/components/DocViewer";
import { KIND_LABEL } from "@/components/RecordsThread";
import type { Filing } from "@/components/RecordsThread";
import { THREADS } from "@/data/threads";
import { CASE_CARDS, type CaseCard, type CaseAuthor } from "@/data/case";
import { FAQ_QUESTIONS } from "@/data/faq";

const PREFIX = process.env.NEXT_PUBLIC_ASSET_PREFIX ?? "";

// Same media proxy the evidence pages stream from: /media/{signalId}/{item}
// 302s to a freshly-signed URL and enforces the signal's visibility floor.
const MEDIA_ORIGIN = process.env.NEXT_PUBLIC_MEDIA_ORIGIN || "https://rswfire.com";
const mediaUrl = (signalId: string, item: "video" | "thumbnail") =>
    `${MEDIA_ORIGIN}/media/${signalId}/${item}`;

// The three authorship classes. The State of Oregon and the volunteer are
// the parties; the Forest Service is a third party whose written account
// contradicts the state record, and is never dressed as either.
const AUTHOR_STYLE: Record<CaseAuthor, { band: string; label: string; quote: string }> = {
    state: { band: "bg-slate-800 text-slate-100", label: "The State of Oregon", quote: "border-slate-400" },
    recorded: { band: "bg-slate-800 text-slate-100", label: "Their Own Words", quote: "border-slate-400" },
    federal: { band: "bg-stone-600 text-stone-50", label: "A Federal Third Party", quote: "border-stone-400" },
    volunteer: { band: "bg-emerald-800 text-emerald-50", label: "The Volunteer", quote: "border-emerald-600" },
};

// ─── Register lookup ─────────────────────────────────────────────────────────

interface Resolved {
    slug: string;
    filing: Filing;
}

const BY_ULID: Record<string, Resolved> = {};
for (const thread of THREADS) {
    for (const filing of thread.filings) {
        BY_ULID[filing.ulid] = { slug: thread.slug, filing };
    }
}

function counterparty(f: Filing): string | undefined {
    const me = (s?: string) => s?.includes("Robert");
    if (me(f.from) && f.to) return `To ${f.to}`;
    if (f.from && !me(f.from)) return `From ${f.from}`;
    return undefined;
}

function toViewDoc(r: Resolved): ViewDoc {
    const f = r.filing;
    return {
        slug: r.slug,
        id: f.id,
        title: f.title,
        date: f.date,
        time: f.time,
        kindLabel: KIND_LABEL[f.kind],
        counterparty: counterparty(f),
        ulid: f.ulid,
        docs: f.docs ?? [],
        eml: f.eml,
    };
}


// #2: a sticky bottom fade + chevron inside every vertical scroller; the
// effect in CaseTimeline shows it only while there is more below the fold.
const ScrollHint = () => (
    <div aria-hidden data-scroll-hint className="pointer-events-none sticky bottom-0 -mt-8 flex h-8 items-end justify-center bg-gradient-to-t from-white via-white/75 to-transparent opacity-0 transition-opacity duration-300">
        <svg viewBox="0 0 24 24" className="mb-0.5 h-4 w-4 fill-none stroke-current stroke-2 text-gray-400" aria-hidden>
            <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    </div>
);

// ─── The recording, played in place ──────────────────────────────────────────

function CardMedia({ card, onOpenDoc }: { card: CaseCard; onOpenDoc: () => void }) {
    const [playing, setPlaying] = useState(false);
    const [failed, setFailed] = useState(false);

    if (card.signalId) {
        return (
            <div className="relative h-44 bg-slate-900 overflow-hidden">
                <span className="absolute top-2 left-2 z-10 font-mono text-[9px] tracking-tight text-white/60 pointer-events-none">
                    {card.signalId}
                </span>
                {playing && !failed ? (
                    <video
                        src={mediaUrl(card.signalId, "video")}
                        poster={mediaUrl(card.signalId, "thumbnail")}
                        controls
                        autoPlay
                        playsInline
                        onError={() => setFailed(true)}
                        className="w-full h-full object-contain"
                    />
                ) : (
                    <button
                        type="button"
                        onClick={() => {
                            setFailed(false);
                            setPlaying(true);
                        }}
                        className="group/media block w-full h-full cursor-pointer"
                        aria-label={`Play recording: ${card.title}`}
                    >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={mediaUrl(card.signalId, "thumbnail")}
                            alt={`Poster frame — ${card.title}`}
                            loading="lazy"
                            className="w-full h-full object-cover opacity-90 group-hover/media:opacity-100 transition-opacity"
                        />
                        <span className="absolute inset-0 flex items-center justify-center">
                            <span className="flex items-center gap-2 rounded-full bg-black/60 px-4 py-2 text-white text-[11px] uppercase tracking-widest group-hover/media:bg-black/75 transition-colors">
                                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current" aria-hidden>
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                                {failed ? "Retry" : `Play · ${card.duration}`}
                            </span>
                        </span>
                    </button>
                )}
            </div>
        );
    }

    if (card.ulid) {
        return (
            <div className="relative border-b border-gray-200">
                <button
                    type="button"
                    onClick={onOpenDoc}
                    className="group/media relative block w-full h-44 overflow-hidden bg-gray-100 cursor-pointer text-left"
                    aria-label={`Open document: ${card.title}`}
                >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={`${PREFIX}/case/${card.ulid}.jpg`}
                        alt={`First page — ${card.title}`}
                        loading="lazy"
                        className="w-full object-cover object-top group-hover/media:scale-[1.02] transition-transform duration-300"
                    />
                    <span className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-white/90 to-transparent" />
                    <span className="absolute bottom-2 right-2 rounded bg-gray-900/80 px-2.5 py-1 text-[10px] uppercase tracking-widest text-white group-hover/media:bg-gray-900 transition-colors">
                        Read the document
                    </span>
                </button>
                <Link
                    href={`/accountability/${BY_ULID[card.ulid]?.slug}/${card.ulid}`}
                    className="absolute bottom-2 left-2 font-mono text-[9px] tracking-tight text-gray-500 hover:text-emerald-700 transition-colors"
                >
                    {card.ulid}
                </Link>
            </div>
        );
    }

    return null;
}

// ─── One card ────────────────────────────────────────────────────────────────

function Card({
    card,
    active,
    onOpenDoc,
    onNext,
}: {
    card: CaseCard;
    active: boolean;
    onOpenDoc: (card: CaseCard) => void;
    onNext: () => void;
}) {
    const style = AUTHOR_STYLE[card.author];
    return (
        <article
            id={`case-${card.id}`}
            data-case-stop
            className={`snap-center shrink-0 w-[82vw] sm:w-[85vw] max-w-[420px] h-[520px] lg:h-auto lg:max-h-[42rem] flex flex-col rounded-lg border overflow-hidden bg-white transition-shadow ${
                active ? "border-gray-400 shadow-md" : "border-gray-200 shadow-sm"
            }`}
        >
            {/* Authorship band — the point of the whole exercise */}
            <div className={`px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest ${style.band}`}>
                {style.label}
                <span className="font-normal normal-case tracking-normal opacity-80"> — {card.authorLabel}</span>
            </div>

            <CardMedia card={card} onOpenDoc={() => onOpenDoc(card)} />

            <div className="flex-1 min-h-0 flex flex-col p-4 pb-3">
                <div className="flex items-baseline justify-between gap-3">
                    <div className="text-base font-semibold text-gray-900">{card.date}</div>
                    <div className="text-[10px] uppercase tracking-widest text-gray-500 whitespace-nowrap">
                        {card.typeLabel}
                    </div>
                </div>
                <h3 className="mt-1 text-lg font-semibold tracking-tight text-gray-900">{card.title}</h3>
                {/* Only the document's text scrolls; the date, title and
                    link hold still. */}
                <div data-vscroll className="case-scroll mt-2 flex-1 min-h-0 overflow-y-auto space-y-2">
                    {card.body.split("\n\n").map((para, i) => (
                        <p key={i} className="text-sm leading-relaxed text-gray-700">{para}</p>
                    ))}
                    {card.quote && (
                        <blockquote className={`mt-3 border-l-2 pl-3 ${style.quote}`}>
                            <p className="font-serif italic text-[15px] leading-relaxed text-gray-800">
                                {card.quote.startsWith("…") || card.quote.startsWith("FOR") ? card.quote : `“${card.quote}”`}
                            </p>
                        </blockquote>
                    )}
                    <ScrollHint />
                </div>
                <div className="pt-3">
                    <Link
                        href={card.href}
                        className="block border-t border-gray-200 pt-3 text-center text-sm font-semibold uppercase tracking-widest text-emerald-800 hover:text-emerald-600"
                    >
                        {card.hrefLabel} →
                    </Link>
                    <button
                        type="button"
                        onClick={onNext}
                        className="lg:hidden mx-auto mt-2 block text-[10px] uppercase tracking-widest text-gray-400 hover:text-emerald-700 cursor-pointer"
                    >
                        Next slide →
                    </button>
                </div>
            </div>
        </article>
    );
}

// ─── The timeline ────────────────────────────────────────────────────────────

// Numbers under one hundred are spelled out in the site's prose.
const ONES = ["zero","one","two","three","four","five","six","seven","eight","nine","ten",
    "eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];
const TENS = ["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];
function spell(n: number): string {
    if (n < 20) return ONES[n];
    if (n < 100) return TENS[Math.floor(n / 10)] + (n % 10 ? "-" + ONES[n % 10] : "");
    return String(n);
}
const capitalize = (w: string) => w.charAt(0).toUpperCase() + w.slice(1);

// Rail stops: the intro panel, every card, the outro panel.
const STOP_COUNT = CASE_CARDS.length + 2;
const stopLabel = (stop: number): string => {
    if (stop <= 0) return "Start — what this is";
    if (stop >= STOP_COUNT - 1) return "The full record";
    const c = CASE_CARDS[stop - 1];
    return `${c.date} — ${c.title}`;
};

export default function CaseTimeline() {
    const scrollerRef = useRef<HTMLDivElement>(null);
    const [stop, setStop] = useState(0);
    // Rapid arrow clicks arrive before the scroll listener updates state;
    // the ref always holds the latest settled-or-requested stop.
    const stopRef = useRef(0);
    // The last stop written into the URL hash.
    const hashStop = useRef(-1);
    const [view, setView] = useState<ViewDoc | null>(null);
    const interacted = useRef(false);
    // #3: the right-edge scrim retires only on real horizontal movement or
    // arrow use — never on a touch that is just page-scrolling past.
    const [hasInteracted, setHasInteracted] = useState(false);
    const cueRetired = useRef(false);
    const nudging = useRef(false);

    const stateCount = useMemo(
        () => CASE_CARDS.filter((c) => c.author === "state" || c.author === "recorded").length,
        [],
    );

    // Documents only, for viewer prev/next — the reader walks the paper trail.
    const docCards = useMemo(() => CASE_CARDS.filter((c) => c.ulid), []);

    const openDoc = useCallback((card: CaseCard) => {
        const r = card.ulid ? BY_ULID[card.ulid] : undefined;
        if (r) setView(toViewDoc(r));
    }, []);

    const viewerStep = useCallback(
        (dir: 1 | -1) => {
            setView((v) => {
                if (!v) return v;
                const i = docCards.findIndex((c) => c.ulid === v.ulid);
                const next = docCards[i + dir];
                if (!next?.ulid) return v;
                const r = BY_ULID[next.ulid];
                return r ? toViewDoc(r) : v;
            });
        },
        [docCards],
    );

    const stopEls = useCallback(
        () => Array.from(scrollerRef.current?.querySelectorAll<HTMLElement>("[data-case-stop]") ?? []),
        [],
    );

    const scrollToStop = useCallback(
        (i: number) => {
            interacted.current = true;
            cueRetired.current = true;
            setHasInteracted(true);
            const els = stopEls();
            const clamped = Math.max(0, Math.min(i, els.length - 1));
            stopRef.current = clamped;
            const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
            els[clamped]?.scrollIntoView({ behavior: reduced ? "auto" : "smooth", inline: "center", block: "nearest" });
        },
        [stopEls],
    );

    // Which stop owns the center of the strip right now.
    const computeStop = useCallback(() => {
        const scroller = scrollerRef.current;
        if (!scroller) return;
        if (!cueRetired.current && !nudging.current && scroller.scrollLeft > 8) {
            cueRetired.current = true;
            setHasInteracted(true);
        }
        const mid = scroller.scrollLeft + scroller.clientWidth / 2;
        const els = stopEls();
        let best = 0;
        let bestDist = Infinity;
        els.forEach((el, i) => {
            const center = el.offsetLeft + el.offsetWidth / 2;
            const dist = Math.abs(center - mid);
            if (dist < bestDist) {
                bestDist = dist;
                best = i;
            }
        });
        setStop(best);
        stopRef.current = best;
        // Only touch the History API when the stop actually changes —
        // Firefox rate-limits replaceState and throws past the limit,
        // which killed the page under rapid clicking.
        if (interacted.current && best !== hashStop.current) {
            hashStop.current = best;
            const card = CASE_CARDS[best - 1];
            const hash = card ? `case-${card.id}` : best === 0 ? "case-start" : "case-record";
            try {
                history.replaceState(null, "", `#${hash}`);
            } catch {
                // rate-limited: the next change will catch up
            }
        }
    }, [stopEls]);

    useEffect(() => {
        const scroller = scrollerRef.current;
        if (!scroller) return;
        let raf = 0;
        const onScroll = () => {
            cancelAnimationFrame(raf);
            raf = requestAnimationFrame(computeStop);
        };
        scroller.addEventListener("scroll", onScroll, { passive: true });
        return () => {
            scroller.removeEventListener("scroll", onScroll);
            cancelAnimationFrame(raf);
        };
    }, [computeStop]);

    // #case-<id> deep link — the intro and outro panels included. The
    // browser's own anchor scroll runs before hydration, so no scroll event
    // reaches the listener; the stop is computed directly afterwards.
    useEffect(() => {
        const m = window.location.hash.match(/^#case-(.+)$/);
        if (m) {
            const els = stopEls();
            const stopIndex =
                m[1] === "start" ? 0 :
                m[1] === "record" ? els.length - 1 :
                CASE_CARDS.findIndex((c) => c.id === m[1]) + 1;
            if (stopIndex >= 1 || m[1] === "start") {
                els[stopIndex]?.scrollIntoView({ behavior: "auto", inline: "center", block: "nearest" });
            }
        }
        computeStop();
    }, [stopEls, computeStop]);

    const onKeyDown = (e: React.KeyboardEvent) => {
        if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
        e.preventDefault();
        scrollToStop(stopRef.current + (e.key === "ArrowRight" ? 1 : -1));
    };

    // On mobile the cards are near-full-width, so the arrows hug the screen
    // edges and go translucent; sm+ keeps the solid floating buttons.
    const arrowCls =
        "absolute top-1/2 -translate-y-1/2 z-10 hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-white/95 border border-gray-300 shadow-md text-gray-700 hover:text-emerald-800 hover:border-emerald-600 transition-colors cursor-pointer disabled:opacity-0 disabled:pointer-events-none";


    // #2: show each scroller's bottom hint only while content remains below.
    useEffect(() => {
        const scroller = scrollerRef.current;
        if (!scroller) return;
        const updateHints = () => {
            scroller.querySelectorAll<HTMLElement>("[data-vscroll]").forEach((el) => {
                const hint = el.querySelector<HTMLElement>("[data-scroll-hint]");
                if (!hint) return;
                const scrollable = el.scrollHeight > el.clientHeight + 4;
                const atEnd = el.scrollTop + el.clientHeight >= el.scrollHeight - 8;
                hint.style.opacity = scrollable && !atEnd ? "1" : "0";
            });
        };
        updateHints();
        const t = setTimeout(updateHints, 600);
        scroller.addEventListener("scroll", updateHints, true);
        window.addEventListener("resize", updateHints);
        return () => {
            clearTimeout(t);
            scroller.removeEventListener("scroll", updateHints, true);
            window.removeEventListener("resize", updateHints);
        };
    }, []);

    // #5: a one-time nudge the first time the strip is seen this session.
    useEffect(() => {
        const scroller = scrollerRef.current;
        if (!scroller) return;
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        try { if (sessionStorage.getItem("case-nudged")) return; } catch { return; }
        const t1 = setTimeout(() => {
            if (cueRetired.current || scroller.scrollLeft > 4) return;
            nudging.current = true;
            scroller.scrollTo({ left: 28, behavior: "smooth" });
            setTimeout(() => scroller.scrollTo({ left: 0, behavior: "smooth" }), 420);
            setTimeout(() => (nudging.current = false), 1100);
            try { sessionStorage.setItem("case-nudged", "1"); } catch {}
        }, 900);
        return () => clearTimeout(t1);
    }, []);

    return (
        <div className="rounded-xl overflow-hidden border border-slate-200 bg-white shadow-sm">
            <div className="relative">
                {/* Prev / next — the visible way through */}
                <button
                    type="button"
                    onClick={() => scrollToStop(stopRef.current - 1)}
                    disabled={stop <= 0}
                    aria-label="Previous"
                    className={`${arrowCls} left-2`}
                >
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-2" aria-hidden>
                        <path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
                <button
                    type="button"
                    onClick={() => scrollToStop(stopRef.current + 1)}
                    disabled={stop >= STOP_COUNT - 1}
                    aria-label="Next"
                    className={`${arrowCls} right-2`}
                >
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-2" aria-hidden>
                        <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>

                <div
                    ref={scrollerRef}
                    tabIndex={0}
                    onKeyDown={onKeyDown}
                    onPointerDown={() => (interacted.current = true)}
                    aria-label="The case, in their documents — scroll right through the chronology"
                    className="flex items-stretch gap-4 overflow-x-auto overscroll-x-contain snap-x snap-mandatory px-4 py-6 pb-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 [scrollbar-width:thin]"
                >
                    {/* Intro panel: what this is, for a reader arriving cold */}
                    <div id="case-start" data-case-stop data-vscroll className="snap-center shrink-0 w-[82vw] sm:w-[85vw] max-w-[460px] h-[520px] lg:h-auto lg:max-h-[42rem] case-scroll overflow-y-auto flex flex-col px-2"><div className="flex min-h-full flex-col">
                        <h2 className="text-xl lg:text-3xl font-semibold tracking-tight text-gray-900 leading-tight">
                            The case, in their documents.
                        </h2>
                        <p className="mt-2 lg:mt-3 text-[13px] lg:text-sm leading-snug lg:leading-relaxed text-gray-700">
                            In early 2025, I served as an unpaid volunteer at{" "}
                            <Link
                                href="https://rswfire.com/?center=43.92593%2C-124.11341&zoom=15"
                                target="_blank"
                                className="inline-flex items-baseline gap-1 text-emerald-800 hover:text-emerald-600 underline decoration-emerald-300"
                            >
                                <span>Honeyman State Park</span>
                                <Map size={13} strokeWidth={1.5} className="relative top-[2px] shrink-0" />
                            </Link>. What happened over the next eighteen months is told here in
                            order. {capitalize(spell(stateCount))} of the{" "}
                            {spell(CASE_CARDS.length)} that follow are the state’s own words.
                        </p>
                        <p className="mt-2 lg:mt-3 text-[13px] lg:text-sm leading-snug lg:leading-relaxed text-gray-700">
                            This archive is not a story about me. It is a story about <em>them</em> — the choices
                            they made when given evidence of abuse, when given the opportunity to stop, when
                            given time to self-correct.
                        </p>
                        <p className="mt-2 lg:mt-3 text-[13px] lg:text-sm leading-snug lg:leading-relaxed text-gray-700">
                            Every mechanism of accountability was used to shield themselves.
                        </p>
                        <div className="mt-2 lg:mt-3 pl-3 lg:pl-4 border-l-4 border-emerald-700 space-y-0.5 lg:space-y-1 text-[13px] lg:text-sm leading-snug lg:leading-relaxed text-gray-700">
                            <div>
                                <strong>Why I built this archive</strong>: to correct an{" "}
                                <Link href="/faq#epistemic" className="text-emerald-700 underline hover:text-emerald-600">
                                    <em>epistemic violation</em>
                                </Link>
                                .
                            </div>
                            <div>It is not designed to <em>win attention</em>.</div>
                            <div>It is designed to <em className="font-bold">outlast denial</em>.</div>
                        </div>
                        <div className="my-auto py-3">
                        <div className="mt-2">
                            <a
                                href="/the-case-in-their-documents.pdf"
                                download
                                className="group relative block w-full max-w-sm"
                            >
                                <div className="absolute inset-0 translate-x-2 translate-y-2 rotate-[1.2deg] rounded-sm bg-white border border-gray-300 shadow-sm" aria-hidden="true" />
                                <div className="absolute inset-0 translate-x-1 translate-y-1 rotate-[0.6deg] rounded-sm bg-white border border-gray-300 shadow-sm" aria-hidden="true" />
                                <div className="relative rounded-sm bg-white border border-gray-300 shadow-md group-hover:shadow-xl group-hover:-translate-y-1 transition-all px-5 py-4 lg:px-6 lg:py-6">
                                    <div className="text-[9px] lg:text-[10px] font-mono uppercase tracking-[0.2em] text-red-700">oprdvolunteerabuse.org</div>
                                    <div className="mt-1.5 lg:mt-2 font-serif text-xl lg:text-2xl leading-tight text-gray-900">The Case,<br/>In Their Documents.</div>
                                    <div className="mt-1.5 lg:mt-2 text-[10px] lg:text-[11px] uppercase tracking-wider text-gray-400">Independently verifiable</div>
                                    <div className="absolute -right-3 -bottom-3 rotate-[-6deg] rounded border-2 border-red-700 bg-white/95 px-2.5 py-1 text-[10px] lg:px-3 lg:py-1.5 lg:text-xs font-bold uppercase tracking-widest text-red-700 shadow-sm group-hover:rotate-[-2deg] transition-transform">
                                        Download &darr;
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="mt-3 lg:mt-5">
                            <a
                                href="/the-choices-are-still-yours.pdf"
                                download
                                className="group relative block w-full max-w-sm"
                            >
                                <div className="relative rounded-sm bg-white border border-gray-300 shadow-md group-hover:shadow-xl group-hover:-translate-y-1 transition-all px-5 py-3.5 lg:px-6 lg:py-5">
                                    <div className="text-[9px] lg:text-[10px] font-mono uppercase tracking-[0.2em] text-gray-500">September 5, 2026</div>
                                    <div className="mt-1.5 lg:mt-2 font-serif text-lg lg:text-xl leading-tight text-gray-900">Director Sumption,</div>
                                    <div className="mt-1.5 lg:mt-2 text-[10px] lg:text-[11px] uppercase tracking-wider text-gray-400">The Choices Are Still Yours.</div>
                                    <div className="absolute -right-3 -bottom-3 rotate-[-6deg] rounded border-2 border-slate-700 bg-white/95 px-2.5 py-1 text-[10px] lg:px-3 lg:py-1.5 lg:text-xs font-bold uppercase tracking-widest text-slate-700 shadow-sm group-hover:rotate-[-2deg] transition-transform">
                                        Download &darr;
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="mt-3 lg:mt-5">
                            <a
                                href="/notice-of-tort-claim.pdf"
                                download
                                className="group relative block w-full max-w-sm"
                            >
                                <div className="relative rounded-sm bg-white border border-gray-300 shadow-md group-hover:shadow-xl group-hover:-translate-y-1 transition-all px-5 py-3.5 lg:px-6 lg:py-5">
                                    <div className="text-[9px] lg:text-[10px] font-mono uppercase tracking-[0.2em] text-gray-500">September 3, 2026</div>
                                    <div className="mt-1.5 lg:mt-2 font-serif text-lg lg:text-xl leading-tight text-gray-900">Formal Notice of Tort Claim.</div>
                                    <div className="mt-1.5 lg:mt-2 text-[10px] lg:text-[11px] uppercase tracking-wider text-gray-400">42 U.S.C. &sect;1983</div>
                                    <div className="absolute -right-3 -bottom-3 rotate-[-6deg] rounded border-2 border-gray-800 bg-white/95 px-2.5 py-1 text-[10px] lg:px-3 lg:py-1.5 lg:text-xs font-bold uppercase tracking-widest text-gray-800 shadow-sm group-hover:rotate-[-2deg] transition-transform">
                                        Download &darr;
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="mt-3 lg:mt-5">
                            <a
                                href="/final-statement-to-oprd.pdf"
                                download
                                className="group relative block w-full max-w-sm"
                            >
                                <div className="relative rounded-sm bg-white border border-gray-300 shadow-md group-hover:shadow-xl group-hover:-translate-y-1 transition-all px-5 py-3.5 lg:px-6 lg:py-5">
                                    <div className="text-[9px] lg:text-[10px] font-mono uppercase tracking-[0.2em] text-gray-500">May 4, 2026</div>
                                    <div className="mt-1.5 lg:mt-2 font-serif text-lg lg:text-xl leading-tight text-gray-900">A Final Statement to Oregon Parks.</div>
                                    <div className="mt-1.5 lg:mt-2 text-[10px] lg:text-[11px] uppercase tracking-wider text-gray-400">After the police intimidation</div>
                                    <div className="absolute -right-3 -bottom-3 rotate-[-6deg] rounded border-2 border-emerald-700 bg-white/95 px-2.5 py-1 text-[10px] lg:px-3 lg:py-1.5 lg:text-xs font-bold uppercase tracking-widest text-emerald-700 shadow-sm group-hover:rotate-[-2deg] transition-transform">
                                        Download &darr;
                                    </div>
                                </div>
                            </a>
                        </div>
                        <button
                            type="button"
                            onClick={() => scrollToStop(1)}
                            className="lg:hidden mx-auto mt-3 block text-[10px] uppercase tracking-widest text-gray-400 hover:text-emerald-700 cursor-pointer"
                        >
                            Next slide →
                        </button>
                        </div>
                        </div>
                        <ScrollHint />
                    </div>

                    {CASE_CARDS.map((card, i) => (
                        <Card key={card.id} card={card} active={i + 1 === stop} onOpenDoc={openDoc} onNext={() => scrollToStop(i + 2)} />
                    ))}

                    {/* Outro panel: common questions, then the way deeper */}
                    <div id="case-record" data-case-stop data-vscroll className="snap-center shrink-0 w-[82vw] sm:w-[85vw] max-w-[420px] h-[520px] lg:h-auto lg:max-h-[42rem] case-scroll overflow-y-auto flex flex-col px-2"><div className="my-auto">
                        <h2 className="text-xl font-semibold tracking-tight text-gray-900 leading-tight">
                            Common questions, answered.
                        </h2>
                        <div className="mt-3 grid grid-cols-1 gap-y-2 text-sm">
                            {FAQ_QUESTIONS.map((q) => (
                                <Link
                                    key={q.id}
                                    href={`/faq#${q.id}`}
                                    className="block text-emerald-700 underline decoration-emerald-200 hover:text-emerald-600 hover:decoration-emerald-500 transition-colors"
                                >
                                    {q.question}
                                </Link>
                            ))}
                        </div>
                        <p className="mt-5 pt-4 border-t border-gray-200 text-sm leading-relaxed text-gray-700">
                            The full record is hundreds of documents across five accountability pages — every
                            original preserved, every one readable and downloadable.
                        </p>
                        <div className="mt-3 mb-2 flex flex-col gap-1.5">
                            <Link href="/accountability/oprd" className="text-[11px] font-semibold uppercase tracking-widest text-emerald-800 hover:text-emerald-600">
                                The accountability pages →
                            </Link>
                            <Link href="/evidence" className="text-[11px] font-semibold uppercase tracking-widest text-emerald-800 hover:text-emerald-600">
                                The evidence pages →
                            </Link>
                            <Link href="/for-volunteers" className="text-[11px] font-semibold uppercase tracking-widest text-red-700 hover:text-red-600">
                                For volunteers →
                            </Link>
                        </div>
                        <ScrollHint />
                        </div>
                    </div>
                </div>
                {!hasInteracted && (
                    <div aria-hidden className="pointer-events-none absolute inset-y-6 right-0 w-10 bg-gradient-to-l from-white to-transparent lg:hidden" />
                )}
            </div>

            {/* Progress rail — one dot per stop, ends included. On small
                screens prev/next flank the rail; the floating arrows would
                cover the card. */}
            <div className="px-4 pb-4">
                <div className="flex items-center gap-2">
                    <button
                        type="button"
                        onClick={() => scrollToStop(stopRef.current - 1)}
                        disabled={stop <= 0}
                        aria-label="Previous"
                        className="md:hidden shrink-0 flex items-center justify-center w-8 h-8 rounded-full border border-gray-300 text-gray-600 disabled:opacity-30 cursor-pointer"
                    >
                        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-2" aria-hidden>
                            <path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                    <div className="relative h-8 flex-1">
                    <div className="absolute left-0 right-0 top-[13px] h-px bg-gray-200" />
                    <div
                        className="absolute left-0 top-[13px] h-px bg-emerald-700 transition-[width] duration-300"
                        style={{ width: `${(stop / (STOP_COUNT - 1)) * 100}%` }}
                    />
                    <div className="absolute inset-0 flex justify-between">
                        {Array.from({ length: STOP_COUNT }, (_, i) => (
                            <button
                                key={i}
                                type="button"
                                onClick={() => scrollToStop(i)}
                                aria-label={stopLabel(i)}
                                title={stopLabel(i)}
                                className="group relative flex items-start justify-center w-7 h-8 cursor-pointer"
                            >
                                <span
                                    className={`mt-2 rounded-full border transition-all ${
                                        i === stop
                                            ? "w-3 h-3 bg-emerald-700 border-emerald-700"
                                            : i < stop
                                              ? "w-2.5 h-2.5 bg-emerald-200 border-emerald-400 group-hover:bg-emerald-400"
                                              : "w-2.5 h-2.5 bg-white border-gray-400 group-hover:border-emerald-600"
                                    }`}
                                />
                            </button>
                        ))}
                    </div>
                    </div>
                    <button
                        type="button"
                        onClick={() => scrollToStop(stopRef.current + 1)}
                        disabled={stop >= STOP_COUNT - 1}
                        aria-label="Next"
                        className="md:hidden shrink-0 flex items-center justify-center w-8 h-8 rounded-full border border-gray-300 text-gray-600 disabled:opacity-30 cursor-pointer"
                    >
                        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-2" aria-hidden>
                            <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
                <div className="flex items-center justify-between text-[10px] uppercase tracking-widest text-gray-400">
                    <span>March 2025</span>
                    <span className="flex min-h-[2.1rem] flex-col items-center justify-center text-center leading-tight">
                        {CASE_CARDS[stop - 1] ? (
                            <>
                                <span className="text-gray-600 font-semibold">{CASE_CARDS[stop - 1].date}</span>
                                <span className="hidden sm:block text-gray-500">{CASE_CARDS[stop - 1].title}</span>
                            </>
                        ) : (
                            <span className="text-xs tracking-[0.25em] text-gray-600 font-semibold">
                                {stop === 0 ? "Start" : "End"}
                            </span>
                        )}
                        <span className="md:hidden text-[9px] tracking-widest text-gray-400">{stop + 1} / {CASE_CARDS.length + 2}</span>
                    </span>
                    <span>August 2026</span>
                </div>
            </div>

            <DocViewer
                doc={view}
                onClose={() => setView(null)}
                onPrev={() => viewerStep(-1)}
                onNext={() => viewerStep(1)}
            />
        </div>
    );
}

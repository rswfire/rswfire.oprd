"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";

// ─── Types ───────────────────────────────────────────────────────────────────

export interface TransmissionEntry {
    timestamp: string;      // e.g. "[0:01 — 0:28]"
    quote?: string;         // direct quoted words from the transmission
    commentary: string;     // contextual analysis
}

export interface TransmissionData {
    // Identity
    ulid: string;
    signalUrl: string;
    date: string;           // e.g. "March 24, 2025"
    duration: string;       // e.g. "16:47"

    // Video (optional — omit for audio-only or text transmissions)
    s3Url?: string;

    // Realm metadata
    energeticSignature: string;
    fieldState: string;
    orientation: string;

    // Content
    label: string;          // e.g. "Transmission — March 24, 2025"
    preview: string;        // always-visible opening paragraph
    entries: TransmissionEntry[];
    closing?: string;       // optional closing, double-newline separated paragraphs
}

export interface TransmissionDisclosureProps {
    transmission: TransmissionData;
    defaultExpanded?: boolean;
}

// ─── Sub-components ──────────────────────────────────────────────────────────

function MetadataTag({ label, value }: { label: string; value: string }) {
    return (
        <div className="flex flex-col gap-0.5">
      <span style={{
          fontFamily: 'var(--font-dm-mono), monospace',
          fontSize: '10px',
          letterSpacing: '0.15em',
          color: '#8a9ba8',
          textTransform: 'uppercase' as const,
      }}>
        {label}
      </span>
            <span style={{
                fontFamily: 'var(--font-dm-mono), monospace',
                fontSize: '11px',
                color: '#4a6475',
            }}>
        {value}
      </span>
        </div>
    );
}

const MAX_RETRIES = 3;

async function fetchVideoUrl(s3Url: string): Promise<string | null> {
    try {
        const res = await fetch(`https://rswfire.com/api/video-url/?url=${encodeURIComponent(s3Url)}`);
        const data = await res.json();
        return data.url ?? null;
    } catch {
        return null;
    }
}

function TransmissionVideo({ s3Url }: { s3Url: string }) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [videoUrl, setVideoUrl] = useState<string | null>(null);
    const [posterUrl, setPosterUrl] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [retries, setRetries] = useState(0);

    const thumbnailS3Url = s3Url.replace(/video\.mp4$/, "thumbnail");

    useEffect(() => {
        function probeImage(url: string): Promise<string | null> {
            return new Promise((resolve) => {
                const img = new Image();
                img.onload = () => resolve(url);
                img.onerror = () => resolve(null);
                img.src = url;
            });
        }

        async function load() {
            const [vidUrl, pngUrl, jpgUrl] = await Promise.all([
                fetchVideoUrl(s3Url),
                fetchVideoUrl(thumbnailS3Url + ".png"),
                fetchVideoUrl(thumbnailS3Url + ".jpg"),
            ]);
            if (vidUrl) setVideoUrl(vidUrl);
            else setError(true);

            const validPoster = pngUrl ? await probeImage(pngUrl) : null;
            if (validPoster) {
                setPosterUrl(validPoster);
            } else {
                const validJpg = jpgUrl ? await probeImage(jpgUrl) : null;
                if (validJpg) setPosterUrl(validJpg);
            }
            setLoading(false);
        }
        load();
    }, [s3Url, thumbnailS3Url]);

    const onVideoError = useCallback(async (event: React.SyntheticEvent<HTMLVideoElement>) => {
        const code = (event.target as HTMLVideoElement)?.error?.code;
        // Code 3 = MEDIA_ERR_DECODE, Code 4 = MEDIA_ERR_SRC_NOT_SUPPORTED — permanent errors
        if (code === 3 || code === 4) { setError(true); return; }
        if (retries >= MAX_RETRIES) { setError(true); return; }

        const nextRetry = retries + 1;
        setRetries(nextRetry);
        await new Promise(r => setTimeout(r, nextRetry * 500));

        const fresh = await fetchVideoUrl(s3Url);
        if (fresh && videoRef.current) {
            setError(false);
            setVideoUrl(fresh);
            videoRef.current.src = fresh;
            videoRef.current.load();
        } else {
            setError(true);
        }
    }, [s3Url, retries]);

    const manualRetry = useCallback(async () => {
        setError(false);
        setLoading(true);
        setRetries(0);
        const fresh = await fetchVideoUrl(s3Url);
        if (fresh) {
            setVideoUrl(fresh);
            if (videoRef.current) {
                videoRef.current.src = fresh;
                videoRef.current.load();
            }
        } else {
            setError(true);
        }
        setLoading(false);
    }, [s3Url]);

    const monoStyle = {
        fontFamily: 'var(--font-dm-mono), monospace',
        fontSize: '11px',
        letterSpacing: '0.15em',
        color: '#8a9ba8',
        textTransform: 'uppercase' as const,
    };

    return (
        <div className="aspect-video bg-slate-900">
            {loading ? (
                <div className="w-full h-full flex items-center justify-center" style={monoStyle}>
                    Loading transmission...
                </div>
            ) : error || !videoUrl ? (
                <div className="w-full h-full flex flex-col items-center justify-center gap-3">
                    <span style={monoStyle}>Failed to load transmission</span>
                    <button
                        onClick={manualRetry}
                        className="px-4 py-1.5 transition-opacity hover:opacity-70"
                        style={{
                            ...monoStyle,
                            color: '#c4622d',
                            border: '1px solid rgba(196,98,45,0.4)',
                            cursor: 'pointer',
                            background: 'transparent',
                        }}
                    >
                        Retry
                    </button>
                </div>
            ) : (
                <video
                    ref={videoRef}
                    src={videoUrl}
                    controls
                    preload="metadata"
                    className="w-full h-full"
                    onError={onVideoError}
                    {...(posterUrl ? { poster: posterUrl } : {})}
                    style={{ objectFit: "cover" }}
                >
                    Your browser does not support the video tag.
                </video>
            )}
        </div>
    );
}


function Entry({ entry }: { entry: TransmissionEntry }) {
    return (
        <div className="pl-5 py-1 space-y-2">
            <div style={{
                fontFamily: 'var(--font-dm-mono), monospace',
                fontSize: '11px',
                letterSpacing: '0.1em',
                color: '#8a9ba8',
            }}>
                {entry.timestamp}
            </div>
            {entry.quote && (
                <blockquote style={{ borderLeft: '2px solid rgba(196,98,45,0.4)', margin: 0 }} className="pl-4 ml-1">
                    <p style={{
                        fontFamily: 'var(--font-dm-mono), monospace',
                        fontSize: '12px',
                        lineHeight: '1.7',
                        color: '#2d4a5a',
                        fontStyle: 'italic',
                        margin: 0,
                    }}>
                        {entry.quote}
                    </p>
                </blockquote>
            )}
            <p style={{ fontSize: '14px', lineHeight: '1.75', color: '#4a6475', margin: 0 }}>
                {entry.commentary}
            </p>
        </div>
    );
}

// ─── Main Component ──────────────────────────────────────────────────────────

export default function TransmissionDisclosure({ transmission, defaultExpanded = false }: TransmissionDisclosureProps) {
    const [expanded, setExpanded] = useState(defaultExpanded);
    const {
        ulid, signalUrl, date, duration, s3Url,
        energeticSignature, fieldState, orientation,
        label, preview, entries, closing,
    } = transmission;

    return (
        <div className="my-6" style={{ border: '1px solid rgba(26,58,74,0.2)', overflow: 'hidden' }}>

            {/* ── Header bar ── */}
            <div className="flex items-center justify-between px-3 py-1.5" style={{ backgroundColor: 'rgba(26,58,74,0.06)' }}>
                <Link
                    href="https://autonomyrealms.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontFamily: 'DM Serif Display, serif', fontSize: '20px', color: '#c4622d', textDecoration: 'none' }}
                    className="hover:opacity-70 transition-opacity flex items-center gap-1.5"
                >
                    <img src="https://autonomyrealms.com/favicon.ico" alt="" width={14} height={14} className="inline-block" />
                    Autonomy Realms
                </Link>
                <span style={{
                    fontFamily: 'var(--font-dm-mono), monospace',
                    fontSize: '10px',
                    letterSpacing: '0.15em',
                    color: '#8a9ba8',
                    textTransform: 'uppercase',
                }}>
          Transmission Record
        </span>
            </div>

            {/* ── Identity metadata ── */}
            <div className="flex flex-wrap gap-x-8 gap-y-3 px-3 py-3" style={{ borderBottom: '1px solid rgba(26,58,74,0.1)' }}>
                <MetadataTag label="Date" value={date} />
                <MetadataTag label="Duration" value={duration} />
                <MetadataTag label="ULID" value={ulid} />
            </div>

            {/* ── Video (if present) ── */}
            {s3Url ? <TransmissionVideo s3Url={s3Url} /> : null}

            {/* ── Label + signal link ── */}
            <div className="flex items-start justify-between gap-4 px-3 py-3" style={{ borderBottom: '1px solid rgba(26,58,74,0.1)' }}>
                <h3 style={{
                    fontFamily: 'var(--font-dm-mono), monospace',
                    fontSize: '12px',
                    letterSpacing: '0.15em',
                    color: '#1a3a4a',
                    textTransform: 'uppercase',
                    fontWeight: 600,
                    margin: 0,
                }}>
                    {label}
                </h3>
                <Link
                    href={signalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        fontFamily: 'var(--font-dm-mono), monospace',
                        fontSize: '10px',
                        letterSpacing: '0.15em',
                        color: '#c4622d',
                        textTransform: 'uppercase',
                        textDecoration: 'none',
                        whiteSpace: 'nowrap',
                    }}
                    className="hover:opacity-70 transition-opacity"
                >
                    Signal: {ulid} →
                </Link>
            </div>

            {/* ── Realm analysis ── */}
            <div className="px-3 py-3" style={{ borderBottom: '1px solid rgba(26,58,74,0.1)', backgroundColor: 'rgba(26,58,74,0.03)' }}>
                <div style={{
                    fontFamily: 'var(--font-dm-mono), monospace',
                    fontSize: '10px',
                    letterSpacing: '0.15em',
                    color: '#8a9ba8',
                    textTransform: 'uppercase',
                    marginBottom: '10px',
                }}>
                    Realm Analysis
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <MetadataTag label="Energetic Signature" value={energeticSignature} />
                    <MetadataTag label="Field State" value={fieldState} />
                    <MetadataTag label="Orientation" value={orientation} />
                </div>
            </div>

            {/* ── Preview ── */}
            <div className="px-3 py-4">
                <p style={{ fontSize: '14px', lineHeight: '1.75', color: '#4a6475', margin: 0 }}>
                    {preview}
                </p>
            </div>

            {/* ── Expanded transcript ── */}
            {expanded && (
                <div className="px-3 py-4 space-y-8" style={{ borderTop: '1px solid rgba(26,58,74,0.1)' }}>
                    {entries.map((entry, i) => (
                        <Entry key={i} entry={entry} />
                    ))}
                    {closing && (
                        <div className="space-y-4 pt-6" style={{ borderTop: '1px solid rgba(26,58,74,0.1)' }}>
                            {closing.split("\n\n").map((para, i) => (
                                <p key={i} style={{ fontSize: '14px', lineHeight: '1.75', color: '#4a6475', margin: 0 }}>
                                    {para}
                                </p>
                            ))}
                        </div>
                    )}
                    <div className="flex items-center justify-between pt-4" style={{ borderTop: '1px solid rgba(26,58,74,0.1)' }}>
            <span style={{
                fontFamily: 'var(--font-dm-mono), monospace',
                fontSize: '10px',
                letterSpacing: '0.15em',
                color: '#8a9ba8',
                textTransform: 'uppercase',
            }}>
              Source
            </span>
                        <Link
                            href={signalUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ fontFamily: 'var(--font-dm-mono), monospace', fontSize: '10px', letterSpacing: '0.1em', color: '#c4622d', textDecoration: 'none' }}
                            className="hover:opacity-70 transition-opacity"
                        >
                            {signalUrl} →
                        </Link>
                    </div>
                </div>
            )}

            {/* ── Toggle ── */}
            <button
                onClick={() => setExpanded(!expanded)}
                className="w-full flex items-center justify-between px-3 py-2 hover:opacity-70 transition-opacity"
                style={{ borderTop: '1px solid rgba(26,58,74,0.1)', backgroundColor: 'rgba(26,58,74,0.03)', cursor: 'pointer' }}
            >
        <span style={{
            fontFamily: 'var(--font-dm-mono), monospace',
            fontSize: '10px',
            letterSpacing: '0.2em',
            color: '#4a6475',
            textTransform: 'uppercase',
        }}>
          {expanded ? "Collapse Transcript" : "Read Full Transcript"}
        </span>
                <svg
                    style={{
                        width: '14px',
                        height: '14px',
                        color: '#8a9ba8',
                        transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.2s ease',
                    }}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                </svg>
            </button>

        </div>
    );
}

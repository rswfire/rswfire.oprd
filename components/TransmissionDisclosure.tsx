"use client";

import { useState, useEffect } from "react";
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

function TransmissionVideo({ s3Url }: { s3Url: string }) {
    const [videoUrl, setVideoUrl] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const encodedUrl = encodeURIComponent(s3Url);
        fetch(`https://rswfire.autonomyrealms.com/api/video-url/?url=${encodedUrl}`)
            .then(res => res.json())
            .then(data => {
                if (data.url) setVideoUrl(data.url);
            })
            .catch(err => console.error('Failed to load video URL:', err))
            .finally(() => setLoading(false));
    }, [s3Url]);

    return (
        <div className="aspect-video bg-slate-900">
            {loading ? (
                <div className="w-full h-full flex items-center justify-center" style={{
                    fontFamily: 'var(--font-dm-mono), monospace',
                    fontSize: '11px',
                    letterSpacing: '0.15em',
                    color: '#8a9ba8',
                    textTransform: 'uppercase',
                }}>
                    Loading transmission...
                </div>
            ) : videoUrl ? (
                <video src={videoUrl} controls preload="metadata" className="w-full h-full">
                    Your browser does not support the video tag.
                </video>
            ) : (
                <div className="w-full h-full flex items-center justify-center" style={{
                    fontFamily: 'var(--font-dm-mono), monospace',
                    fontSize: '11px',
                    letterSpacing: '0.15em',
                    color: '#8a9ba8',
                    textTransform: 'uppercase',
                }}>
                    Transmission unavailable
                </div>
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
            {s3Url && <TransmissionVideo s3Url={s3Url} />}

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

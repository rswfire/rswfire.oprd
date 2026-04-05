// components/archive/VideoEmbed.tsx
'use client'

import { useEffect, useState, useRef, useCallback } from "react";
import { RELEASE_BASE_URL } from "@/lib/videos";
import Link from "next/link";

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

type VideoEmbedProps = {
    title?: string;
    description?: string;
    s3Url: string;
    filename?: string;
    time?: string;
    size?: string;
    signalUrl?: string;
};

export default function VideoEmbed({
                                       title,
                                       description,
                                       s3Url,
                                       filename,
                                       time,
                                       size,
                                       signalUrl,
                                   }: VideoEmbedProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [videoUrl, setVideoUrl] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [retries, setRetries] = useState(0);

    useEffect(() => {
        fetchVideoUrl(s3Url)
            .then(url => {
                if (url) setVideoUrl(url);
                else setError(true);
            })
            .finally(() => setLoading(false));
    }, [s3Url]);

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

    // Extract ULID from s3Url for display
    const ulid = s3Url.match(/\/transmissions\/([A-Z0-9]+)\//)?.[1] ?? null;

    const monoStyle = {
        fontFamily: 'var(--font-dm-mono), monospace',
        fontSize: '11px',
        letterSpacing: '0.15em',
        color: '#8a9ba8',
        textTransform: 'uppercase' as const,
    };

    return (
        <div className="my-2" style={{ border: '1px solid rgba(26,58,74,0.2)', overflow: 'hidden' }}>

            {/* Top bar */}
            <div className="flex items-center justify-between px-3 py-1.5"
                 style={{ backgroundColor: 'rgba(26,58,74,0.06)' }}>
                <Link
                    href="https://autonomyrealms.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        fontFamily: 'DM Serif Display, serif',
                        fontSize: '20px',
                        color: '#c4622d',
                        textDecoration: 'none',
                    }}
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
                    Signal Archive
                </span>
            </div>

            {/* Video */}
            <div className="aspect-video bg-slate-900">
                {loading ? (
                    <div className="w-full h-full flex items-center justify-center" style={monoStyle}>
                        Loading video...
                    </div>
                ) : error || !videoUrl ? (
                    <div className="w-full h-full flex flex-col items-center justify-center gap-3">
                        <span style={monoStyle}>Failed to load video</span>
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
                    >
                        Your browser does not support the video tag.
                    </video>
                )}
            </div>

            {/* Bottom bar */}
            <div className="text-right px-3 py-1.5"
                 style={{ backgroundColor: 'rgba(26,58,74,0.06)' }}>


            {signalUrl && (
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
                    }}
                    className="hover:opacity-70 transition-opacity"
                >
                    {(ulid ? 'Signal: ' + ulid : 'View Signal')} →
                </Link>
            )}
        </div>

            {/* Description */}
            {description && (
                <p className="px-3 py-2 text-sm text-slate-600 italic">{description}</p>
            )}

            {/* Download row */}
            {filename && time && size && (
                <div className="flex items-center justify-between px-3 py-2"
                     style={{ borderTop: '1px solid rgba(26,58,74,0.1)' }}>
                    <div className="text-xs text-slate-700">
                        <span className="font-medium">Source Recording</span>
                        <span className="text-slate-500 ml-2">({time} • {size})</span>
                    </div>

                    <a href={`${RELEASE_BASE_URL}/${filename}`}
                    download
                    className="px-4 py-1.5 bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-medium transition-colors"
                    >
                    Download
                </a>
                </div>
                )}

</div>
);
}

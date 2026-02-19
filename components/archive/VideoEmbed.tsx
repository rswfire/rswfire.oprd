// components/archive/VideoEmbed.tsx
'use client'

import { useEffect, useState } from "react";
import { RELEASE_BASE_URL } from "@/lib/videos";
import Link from "next/link";

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
    const [videoUrl, setVideoUrl] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const encodedUrl = encodeURIComponent(s3Url);
        fetch(`https://rswfire.autonomyrealms.com/api/video-url/?url=${encodedUrl}`)
            .then(res => res.json())
            .then(data => {
                if (data.url) {
                    setVideoUrl(data.url);
                }
            })
            .catch(err => console.error('Failed to load video URL:', err))
            .finally(() => setLoading(false));
    }, [s3Url]);

    // Extract ULID from s3Url for display
    const ulid = s3Url.match(/\/transmissions\/([A-Z0-9]+)\//)?.[1] ?? null;

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
                        fontFamily: 'var(--font-dm-serif), serif',
                        fontSize: '18px',
                        letterSpacing: '0.05em',
                        color: '#c4622d',
                        textDecoration: 'underline',
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
                    <div className="w-full h-full flex items-center justify-center text-white">
                        Loading video...
                    </div>
                ) : videoUrl ? (
                    <video
                        src={videoUrl}
                        controls
                        preload="metadata"
                        className="w-full h-full"
                    >
                        Your browser does not support the video tag.
                    </video>
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-white">
                        Video unavailable
                    </div>
                )}
            </div>

            {/* Bottom bar */}
            <div className="flex items-center justify-between px-3 py-1.5"
                 style={{ backgroundColor: 'rgba(26,58,74,0.06)' }}>
                <span style={{
                    fontFamily: 'var(--font-dm-mono), monospace',
                    fontSize: '10px',
                    letterSpacing: '0.1em',
                    color: '#8a9ba8',
                }}>
                    {''}
                </span>
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

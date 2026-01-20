// components/archive/VideoEmbed.tsx
'use client'

import { useEffect, useState } from "react";
import { RELEASE_BASE_URL } from "@/lib/videos";

type VideoEmbedProps = {
    title?: string;
    description?: string;
    s3Url: string;
    filename?: string;
    time?: string;
    size?: string;
};

export default function VideoEmbed({
                                       title,
                                       description,
                                       s3Url,
                                       filename,
                                       time,
                                       size
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

    return (
        <div className="m-2">
            {/* Autonomy Realms badge */}
            <div className="mb-2 flex items-center gap-2 text-xs text-slate-600">
                <svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">autonomyrealms</span>
            </div>

            <div className="aspect-video bg-slate-900 rounded-lg overflow-hidden shadow-lg">
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

            {description && (
                <p className="mt-3 text-sm text-slate-600 italic">{description}</p>
            )}

            {filename && time && size && (
                <div className="mt-2 flex items-center justify-between p-3 bg-slate-50 border border-slate-200 rounded-md">
                    <div className="text-xs text-slate-700">
                        <span className="font-medium">Source Recording</span>
                        <span className="text-slate-500 ml-2">({time} • {size})</span>
                    </div>


                    <a href={`${RELEASE_BASE_URL}/${filename}`}
                    download
                    className="px-4 py-1.5 bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-medium rounded-md transition-colors"
                    >
                    Download
                </a>
                </div>
                )}
</div>
);
}

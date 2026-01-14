// components/archive/VideoEmbed.tsx
import { getVideoByYouTubeId, RELEASE_BASE_URL } from "@/lib/videos";

type VideoEmbedProps = {
    title: string;
    description?: string;
    youtubeId?: string;
    vimeoId?: string;
};

export default function VideoEmbed({
                                       title,
                                       description,
                                       youtubeId,
                                       vimeoId
                                   }: VideoEmbedProps) {
    const embedUrl = youtubeId
        ? `https://www.youtube.com/embed/${youtubeId}?rel=0&modestbranding=1&showinfo=0`
        : `https://player.vimeo.com/video/${vimeoId}`;

    const archiveVideo = youtubeId ? getVideoByYouTubeId(youtubeId) : null;

    return (
        <div className="m-2">
            <div className="aspect-video bg-slate-900 rounded-lg overflow-hidden shadow-lg">
                <iframe
                    src={embedUrl}
                    title={title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                />
            </div>
            {description && (
                <p className="mt-3 text-sm text-slate-600 italic">{description}</p>
            )}
            {archiveVideo && (
                <div className="mt-2 px-4 flex items-center justify-between p-2 bg-slate-50 border border-slate-200 rounded-sm">
                    <div className="text-xs text-slate-700">
                        <span className="font-medium">Download:</span> Source Recording
                        <span className="text-slate-500 ml-2">({archiveVideo.time + " - " + archiveVideo.size})</span>
                    </div>

                    <div className="flex gap-2 ml-4">
                        {archiveVideo.analysisUrl && (
                            <a href={archiveVideo.analysisUrl}
                               target="_blank"
                               rel="noopener noreferrer"
                               className="px-4 py-1 bg-slate-700 hover:bg-slate-600 text-white text-xs font-medium rounded-md transition-colors"
                            >
                                Analysis
                            </a>
                        )}
                        <a href={`${RELEASE_BASE_URL}/${archiveVideo.filename}`}
                           download
                           className="px-4 py-1 bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-medium rounded-md transition-colors"
                        >
                            Download
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
}

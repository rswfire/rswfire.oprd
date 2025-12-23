// components/archive/VideoEmbed.tsx
type VideoEmbedProps = {
    title: string;
    description?: string;
    youtubeId?: string;
    vimeoId?: string;
};

const RELEASE_BASE_URL = "https://github.com/rswfire/rswfire.oprd/releases/download/permanent-accountability";

const ARCHIVE_VIDEOS: Record<string, { filename: string; size: string }> = {
    "M82aVVW4mNI": {
        filename: "2025-12-20_what-happened.mkv",
        size: "633 MB"
    },
    "iOuaufCH_I8": {
        filename: "2025-03-05_coercion-meeting.mkv",
        size: "78.5 MB"
    },
    "EwecWXvc8DE": {
        filename: "2025-03-18_surveillance-encounter.mkv",
        size: "53 MB"
    },
    "B1oe-qvjmMI": {
        filename: "2025-03-24_dismissal-recording.mkv",
        size: "189 MB"
    },
    "Px_pCUo78w4": {
        filename: "2025-03-25_expulsion-recording.mkv",
        size: "92.7 MB"
    },
    "j7awLxjn4_4": {
        filename: "2025-03-27_public-record.mkv",
        size: "140 MB"
    }
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

    // Check if this video has an archive download
    const archiveVideo = youtubeId ? ARCHIVE_VIDEOS[youtubeId] : null;

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
                <div className="mt-3 flex items-center justify-between p-3 bg-slate-50 border border-slate-200 rounded-lg">
                    <div className="text-sm text-slate-700">
                        <span className="font-medium">Archive Download:</span> High-quality source recording
                        <span className="text-slate-500 ml-2">({archiveVideo.size})</span>
                    </div>
                    <a
                        href={`${RELEASE_BASE_URL}/${archiveVideo.filename}`}
                        download
                        className="ml-4 px-4 py-2 bg-emerald-700 hover:bg-emerald-600 text-white text-sm font-medium rounded-md transition-colors"
                    >
                        Download
                    </a>
                </div>
            )}
        </div>
    );
}

// components/archive/VideoEmbed.tsx
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
        </div>
    );
}
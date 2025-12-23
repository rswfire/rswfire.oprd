// components/ArchiveVideos.tsx
import Link from "next/link";
import { videos, RELEASE_BASE_URL } from "@/lib/videos";

export default function ArchiveVideos() {
    return (
        <div className="mt-8 p-6 bg-slate-50 border border-slate-300 rounded-xl">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                <h2 className="text-xl font-bold text-slate-900">Archive Videos</h2>
                <Link href="https://github.com/rswfire/rswfire.oprd/releases/tag/permanent-accountability" target="_blank" className="text-sm text-emerald-700 hover:text-emerald-600 underline">View on GitHub →</Link>
            </div>

            <div className="text-sm text-slate-700">All evidence videos are permanently archived and available for direct download.</div>
            <div className="text-sm text-slate-700">These recordings document institutional abuse at Oregon State Parks.</div>

            <div className="mt-4 space-y-3">
                {videos.map((video) => (
                    <div
                        key={video.filename}
                        className="flex flex-col sm:flex-row sm:items-center gap-3 p-3 bg-white border border-slate-200 rounded-lg hover:border-emerald-300 transition-colors"
                    >
                        <div className="flex-1 min-w-0">
                            <div className="font-semibold text-slate-900 break-words">
                                <a href={`https://www.youtube.com/watch?v=${video.url}`} target="_blank" className="hover:text-emerald-700">{video.title}</a>
                            </div>
                            <div className="text-xs text-slate-600 mt-1">{video.date} &bull; {video.time} &bull; {video.size}</div>
                        </div>
                        <div className="flex justify-start sm:justify-end">
                            <a href={`${RELEASE_BASE_URL}/${video.filename}`}
                               download
                               className="px-4 py-2 bg-emerald-700 hover:bg-emerald-600 text-white text-sm font-medium rounded-md transition-colors text-center whitespace-nowrap"
                            >
                                Download
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-4 pt-4 border-t border-slate-300">
                <p className="text-xs text-slate-600">
                    Total archive size: 1.19 GB &bull; Format: MKV (Matroska Video) &bull; Hosted on GitHub Releases for permanent availability.
                </p>
            </div>
        </div>
    );
}

// components/ArchiveVideos.tsx

import Link from "next/link";

interface Video {
    title: string;
    filename: string;
    size: string;
    date: string;
    time: string;
    url: string;
}

const videos: Video[] = [
    {
        title: "Coercion Meeting",
        filename: "2025-03-05_coercion-meeting.mkv",
        size: "78.5 MB",
        date: "March 5, 2025",
        time: "1h 2m 12s",
        url: "iOuaufCH_I8"
    },
    {
        title: "Surveillance Encounter",
        filename: "2025-03-18_surveillance-encounter.mkv",
        size: "53 MB",
        date: "March 18, 2025",
        time: "9m 22s",
        url: "EwecWXvc8DE"
    },
    {
        title: "Dismissal Recording",
        filename: "2025-03-24_dismissal-recording.mkv",
        size: "189 MB",
        date: "March 24, 2025",
        time: "16m 46s",
        url: "B1oe-qvjmMI"
    },
    {
        title: "Expulsion Recording",
        filename: "2025-03-25_expulsion-recording.mkv",
        size: "92.7 MB",
        date: "March 25, 2025",
        time: "30m 55s",
        url: "Px_pCUo78w4"
    },
    {
        title: "Public Record",
        filename: "2025-03-27_public-record.mkv",
        size: "140 MB",
        date: "March 27, 2025",
        time: "6m 20s",
        url: "j7awLxjn4_4"
    },
    {
        title: "What Happened to Me at Oregon State Parks",
        filename: "2025-12-20_what-happened.mkv",
        size: "633 MB",
        date: "December 20, 2025",
        time: "21m 22s",
        url: "M82aVVW4mNI"
    }
];

const RELEASE_BASE_URL = "https://github.com/rswfire/rswfire.oprd/releases/download/permanent-accountability";

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
                                <a href={"https://www.youtube.com/watch?v=" + video.url} target="_blank" className="hover:text-emerald-700">{video.title}</a>
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

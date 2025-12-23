// components/ArchiveVideos.tsx

import Link from "next/link";

interface Video {
    title: string;
    filename: string;
    size: string;
    date: string;
}

const videos: Video[] = [
    {
        title: "Coercion Meeting",
        filename: "2025-03-05_coercion-meeting.mkv",
        size: "78.5 MB",
        date: "March 5, 2025"
    },
    {
        title: "Surveillance Encounter",
        filename: "2025-03-18_surveillance-encounter.mkv",
        size: "53 MB",
        date: "March 18, 2025"
    },
    {
        title: "Dismissal Recording",
        filename: "2025-03-24_dismissal-recording.mkv",
        size: "189 MB",
        date: "March 24, 2025"
    },
    {
        title: "Expulsion Recording",
        filename: "2025-03-25_expulsion-recording.mkv",
        size: "92.7 MB",
        date: "March 25, 2025"
    },
    {
        title: "Public Record",
        filename: "2025-03-27_public-record.mkv",
        size: "140 MB",
        date: "March 27, 2025"
    },
    {
        title: "What Happened to me at Oregon State Parks",
        filename: "2025-12-20_what-happened.mkv",
        size: "633 MB",
        date: "December 20, 2025"
    }
];

const RELEASE_BASE_URL = "https://github.com/rswfire/rswfire.oprd/releases/download/permanent-accountability";

export default function ArchiveVideos() {
    return (
        <div className="mt-8 p-6 bg-slate-50 border border-slate-300 rounded-xl">
            <div className="flex items-start justify-between mb-4">
                <h2 className="text-xl font-bold text-slate-900">Archive Videos</h2>
                <Link
                    href="https://github.com/rswfire/rswfire.oprd/releases/tag/permanent-accountability"
                    target="_blank"
                    className="text-sm text-emerald-700 hover:text-emerald-600 underline"
                >
                    View on GitHub →
                </Link>
            </div>

            <p className="text-sm text-slate-700 mb-4">
                All evidence videos are permanently archived and available for direct download.
                These recordings document institutional abuse at Oregon State Parks.
            </p>

            <div className="space-y-3">
                {videos.map((video) => (
                    <div
                        key={video.filename}
                        className="flex items-center justify-between p-3 bg-white border border-slate-200 rounded-lg hover:border-emerald-300 transition-colors"
                    >
                        <div className="flex-1">
                            <div className="font-semibold text-slate-900">{video.title}</div>
                            <div className="text-xs text-slate-600">{video.date} • {video.size}</div>
                        </div>
                        <a
                            href={`${RELEASE_BASE_URL}/${video.filename}`}
                            download
                            className="ml-4 px-4 py-2 bg-emerald-700 hover:bg-emerald-600 text-white text-sm font-medium rounded-md transition-colors"
                        >
                            Download
                        </a>
                    </div>
                ))}
            </div>

            <div className="mt-4 pt-4 border-t border-slate-300">
                <p className="text-xs text-slate-600">
                    Total archive size: 1.19 GB • Format: MKV (Matroska Video) •
                    Hosted on GitHub Releases for permanent availability
                </p>
            </div>
        </div>
    );
}

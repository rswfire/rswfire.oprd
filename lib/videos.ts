// lib/videos.ts

export interface Video {
    title: string;
    filename: string;
    size: string;
    date: string;
    time: string;
    s3Url: string;
}

export const RELEASE_BASE_URL = "https://github.com/rswfire/rswfire.oprd/releases/download/permanent-accountability";

export const videos: Video[] = [
    {
        title: "Coercion Meeting",
        filename: "2025-03-05_coercion-meeting.mkv",
        size: "78.5 MB",
        date: "March 5, 2025",
        time: "1h 2m 12s",
        s3Url: "YOUR_SIGNAL_ID_HERE"
    },
    {
        title: "Surveillance Encounter",
        filename: "2025-03-18_surveillance-encounter.mkv",
        size: "53 MB",
        date: "March 18, 2025",
        time: "9m 22s",
        s3Url: "YOUR_SIGNAL_ID_HERE"
    },
    {
        title: "Dismissal Recording",
        filename: "2025-03-24_dismissal-recording.mkv",
        size: "189 MB",
        date: "March 24, 2025",
        time: "16m 46s",
        s3Url: "YOUR_SIGNAL_ID_HERE"
    },
    {
        title: "Expulsion Recording",
        filename: "2025-03-25_expulsion-recording.mkv",
        size: "92.7 MB",
        date: "March 25, 2025",
        time: "30m 55s",
        s3Url: "YOUR_SIGNAL_ID_HERE"
    },
    {
        title: "Public Record",
        filename: "2025-03-27_public-record.mkv",
        size: "140 MB",
        date: "March 27, 2025",
        time: "6m 20s",
        s3Url: "YOUR_SIGNAL_ID_HERE"
    },
    {
        title: "My Testimony",
        filename: "2025-12-20_what-happened.mkv",
        size: "633 MB",
        date: "December 20, 2025",
        time: "21m 22s",
        s3Url: "https://hel1.your-objectstorage.com/autonomyrealms/01KE634HWNGQBK7D0CVDFYEFK0/transmissions/01KCYZ8E1GTHBZCDNYA57AM2Q0/video.mp4"
    }
];

export function getVideoBySignalId(signalId: string): Video | undefined {
    return videos.find(v => v.realmSignalId === signalId);
}

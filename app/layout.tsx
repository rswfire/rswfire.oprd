// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";
import Footer from "@/components/Footer";
import Icon from "@/components/Icon";
import Link from "next/link";

export const metadata: Metadata = {
    title: {
        default: "OPRD Volunteer Abuse Archive",
        template: "%s | OPRD Volunteer Abuse Archive",
    },
    description:
        "Permanent public record of volunteer abuse and institutional response inside the Oregon Parks & Recreation Department.",
};

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
});

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body className="{`${inter.className} bg-stone-50 text-stone-900`">
        <div className="min-h-screen flex flex-col">
            {/* Header */}
            <header className="border-b border-slate-200 bg-white/95 backdrop-blur">
                <div className="mx-auto max-w-6xl px-4 sm:px-6 py-3 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center">
                            <Icon name="TreeDeciduous" size="30" className="text-emerald-700"/>
                        </div>
                        <div className="leading-tight">
                            <div className="text-sm font-semibold tracking-widest uppercase">
                                OPRD VOLUNTEER ABUSE .ORG
                            </div>
                            <div className="text-sm tracking-tight">
                                <span className="font-semibold text-emerald-700">INDEPENDENT DOCUMENTATION</span>
                                <span className="text-slate-500"> &bull; </span>
                                <span className="text-slate-600">OREGON PARKS &amp; RECREATION DEPARTMENT</span>
                            </div>
                        </div>
                    </Link>

                    <nav className="hidden sm:flex gap-4 text-xs font-medium text-slate-600">
                        <Link href="/" className="hover:text-black">
                            OVERVIEW
                        </Link>
                        <Link href="/key-individuals" className="hover:text-black">
                            KEY INDIVIDUALS
                        </Link>
                        <Link href="/timeline" className="hover:text-black">
                            TIMELINE
                        </Link>
                        <Link href="/lessons-learned" className="hover:text-black">
                            LESSONS LEARNED
                        </Link>
                    </nav>
                </div>
            </header>

            {/* Main content */}
            <main className="flex-1">{children}</main>

            {/* Footer */}
            <Footer />
        </div>
        </body>
        </html>
    );
}

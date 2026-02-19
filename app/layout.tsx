// app/layout.tsx
import type { Metadata } from "next";
import { Open_Sans, DM_Mono } from 'next/font/google'

import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Script from 'next/script'

const openSans = Open_Sans({
    weight: '400',
    subsets: ['latin'],
    variable: '--font-open-sans',
})

const dmMono = DM_Mono({
    weight: ['400', '500'],
    subsets: ['latin'],
    variable: '--font-dm-mono',
})

export const metadata: Metadata = {
    title: {
        default: "Oregon State Parks Volunteer Abuse Archive | oprdvolunteerabuse.org",
        template: "%s | Oregon State Parks Volunteer Abuse Archive | oprdvolunteerabuse.org",
    },
    description:
        "Permanent public record of volunteer abuse and institutional response inside the Oregon Parks & Recreation Department.",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${openSans.variable} ${dmMono.variable}`}>
        <head>
            {process.env.NODE_ENV === "production" && (
                <Script
                    src="https://analytics.rswfire.online/script.js"
                    data-website-id="927ceff2-deef-49ad-8e3d-b33b999c2b92"
                    strategy="afterInteractive"
                />
            )}
        </head>
        <body className={openSans.className}>
        <div className="min-h-screen flex flex-col bg-stone-50 text-stone-900">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
        </div>
        </body>
        </html>
    );
}

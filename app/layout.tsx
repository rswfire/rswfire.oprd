// app/layout.tsx
import type { Metadata } from "next";
import { Open_Sans } from 'next/font/google'

import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Script from 'next/script'

const roboto = Open_Sans({
    weight: '400',
    subsets: ['latin'],
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
        <html lang="en">
        <head>
            <Script
                src="https://www.googletagmanager.com/gtag/js?id=G-5K6H8GR1Q7"
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-5K6H8GR1Q7');
              `}
            </Script>
        </head>
        <body className={roboto.className}>
        <div className="min-h-screen flex flex-col bg-stone-50 text-stone-900">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
        </div>
        </body>
        </html>
    );
}
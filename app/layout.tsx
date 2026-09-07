// app/layout.tsx
import type { Metadata } from "next";
import {Open_Sans, DM_Mono, DM_Serif_Display} from 'next/font/google'

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

const dmSerif = DM_Serif_Display({
    weight: ['400'],
    subsets: ['latin'],
    variable: '--font-dm-serif-display',
})

export const metadata: Metadata = {
    // Absolute canonical and Open Graph URLs are built from this.
    metadataBase: new URL("https://oprdvolunteerabuse.org"),
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
            {/* Deploy-window recovery. A deploy replaces every content-hashed
                chunk; a viewer holding cached HTML (browser or Pages edge)
                then 404s on script load, hydration throws, and React blanks
                the page. When any /_next/ script fails to load, force one
                cache-busted reload; the sessionStorage guard prevents loops
                when the failure is real (offline, adblock). */}
            <script
                dangerouslySetInnerHTML={{
                    __html: `window.addEventListener("error",function(e){var t=e.target;if(!t||t.tagName!=="SCRIPT"||!t.src||t.src.indexOf("/_next/")===-1)return;try{var k="chunk-reload-at",n=Date.now(),l=+sessionStorage.getItem(k)||0;if(n-l<3e4)return;sessionStorage.setItem(k,String(n))}catch(x){}location.reload()},true);`,
                }}
            />
            {process.env.NODE_ENV === "production" && (
                <Script
                    src="https://analytics.rswfire.online/script.js"
                    data-website-id="927ceff2-deef-49ad-8e3d-b33b999c2b92"
                    data-domains="oprdvolunteerabuse.org"
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

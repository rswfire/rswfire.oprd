// app/layout.tsx
import type { Metadata } from "next";
import {Open_Sans, DM_Mono, DM_Serif_Display} from 'next/font/google'

import "./globals.css";
import { SHARE_IMAGE } from "@/lib/share";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PlayerProvider from "@/components/player/PlayerProvider";
import DrawerHost from "@/components/system/DrawerHost";
import DocViewerProvider from "@/components/DocViewerProvider";
import SunlightProvider from "@/components/sunlight/SunlightProvider";
import PhotoProvider from "@/components/photos/PhotoProvider";
import PlaceProvider from "@/components/places/PlaceProvider";
import TraceProvider from "@/components/traces/TraceProvider";
import ReflectionProvider from "@/components/reflections/ReflectionProvider";
import Script from 'next/script'

const openSans = Open_Sans({
    weight: '400',
    subsets: ['latin'],
    variable: '--font-open-sans',
})

// The same face at its narrow widths, for the few lines set condensed.
const openSansCondensed = Open_Sans({
    subsets: ['latin'],
    axes: ['wdth'],
    variable: '--font-open-sans-condensed',
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
    icons: { icon: [{ url: "/favicon.svg", type: "image/svg+xml" }, { url: "/favicon.ico" }], apple: "/apple-touch-icon.png" },
    openGraph: {
        type: "website",
        siteName: "oprdvolunteerabuse.org",
        title: "OPRD Volunteer Abuse | oprdvolunteerabuse.org",
        description: "Permanent public record of volunteer abuse and institutional response inside the Oregon Parks & Recreation Department.",
        images: [SHARE_IMAGE],
    },
    twitter: { card: "summary_large_image" },
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${openSans.variable} ${openSansCondensed.variable} ${dmMono.variable}`}>
        <head>
            {/* Error reporting and deploy-window recovery. Every script error,
                unhandled rejection, failed resource load, and page that is
                still blank eight seconds after load is sent to Umami as an
                event (js-error, js-rejection, load-error, blank-page) with
                the URL and the failed resource, so a blank page on a phone
                can be read in the dashboard. Then: when any /_next/ script
                fails to load, force one reload; the sessionStorage guard
                prevents loops when the failure is real (offline, adblock). */}
            <script
                dangerouslySetInnerHTML={{
                    __html: '(function(){var W="927ceff2-deef-49ad-8e3d-b33b999c2b92",U="https://rswfire.com/api/send";function c(v){return String(v==null?"":v).slice(0,400)}function s(n,d){try{fetch(U,{method:"POST",headers:{"Content-Type":"application/json"},keepalive:true,body:JSON.stringify({type:"event",payload:{website:W,hostname:location.hostname,screen:screen.width+"x"+screen.height,language:navigator.language,title:document.title,url:location.pathname+location.search,referrer:document.referrer,name:n,data:d}})})}catch(x){}}window.__report=s;window.addEventListener("error",function(e){var t=e.target;if(t&&t!==window&&(t.src||t.href)){s("load-error",{tag:t.tagName,src:c(t.src||t.href),url:c(location.href)});return}s("js-error",{message:c(e.message),source:c(e.filename)+":"+e.lineno+":"+e.colno,stack:c(e.error&&e.error.stack),url:c(location.href)})},true);window.addEventListener("unhandledrejection",function(e){var r=e.reason;s("js-rejection",{message:c(r&&(r.message||r)),stack:c(r&&r.stack),url:c(location.href)})});window.addEventListener("vite:preloadError",function(e){s("preload-error",{message:c(e.payload&&e.payload.message),url:c(location.href)})});setTimeout(function(){try{var b=document.body;if(!b||b.innerText.trim().length>0)return;var f=[];performance.getEntriesByType("resource").forEach(function(r){if(r.responseStatus&&r.responseStatus>=400)f.push(r.name+" "+r.responseStatus)});s("blank-page",{url:c(location.href),ready:document.readyState,failed:c(f.join(" | ")),nav:c((performance.getEntriesByType("navigation")[0]||{}).type)})}catch(x){}},8000);})();window.addEventListener("error",function(e){var t=e.target;if(!t||t.tagName!=="SCRIPT"||!t.src||t.src.indexOf("/_next/")===-1)return;try{var k="chunk-reload-at",n=Date.now(),l=+sessionStorage.getItem(k)||0;if(n-l<3e4)return;sessionStorage.setItem(k,String(n))}catch(x){}location.reload()},true);',
                }}
            />
            {process.env.NODE_ENV === "production" && (
                <Script
                    src="https://rswfire.com/script.js"
                    data-host-url="https://rswfire.com"
                    data-website-id="927ceff2-deef-49ad-8e3d-b33b999c2b92"
                    data-domains="oprdvolunteerabuse.org"
                    strategy="afterInteractive"
                />
            )}
        </head>
        <body className={openSans.className}>
        <PlayerProvider>
            <DocViewerProvider>
                <SunlightProvider>
                    <PhotoProvider>
                        <PlaceProvider>
                        <TraceProvider>
                        <ReflectionProvider>
                        <DrawerHost>
                        <div className="min-h-screen flex flex-col bg-stone-50 text-stone-900">
                            <Header />
                            <main className="flex-1">{children}</main>
                            <Footer />
                        </div>
                        </DrawerHost>
                        </ReflectionProvider>
                        </TraceProvider>
                        </PlaceProvider>
                    </PhotoProvider>
                </SunlightProvider>
            </DocViewerProvider>
        </PlayerProvider>
        </body>
        </html>
    );
}

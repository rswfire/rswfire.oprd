"use client";

// components/traces/TraceMap.tsx
//
// A recorded walk, drawn on the same map his realm uses. Leaflet with the
// realm's Mapbox style (outdoors), so the terrain, the trails, and the roads
// under the track are visible. The line is the recorder's own points; the
// basemap is fetched from Mapbox at view time with the realm's public token.
//
// Leaflet is loaded only in the browser, inside the effect, so the static
// export never runs map code at build time. invalidateSize fires after the
// panel reveals, because Leaflet renders grey in a container that was hidden
// when the map was made.
import { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";
import type { TraceRecord } from "@/data/traces";

// Mapbox public token (pk.*): url-restricted, meant to be embedded in the
// client, the same token the realm ships in its own atlas JS.
const TOKEN = "pk.eyJ1IjoicnN3ZmlyZSIsImEiOiJjbXBiczhqM2kwMG80MnFvYjlpeXN0bm41In0.N_YgVCCJbrtROb6jlY-0MA";
const STYLE = "mapbox/outdoors-v12"; // the realm's map style

export default function TraceMap({ trace }: { trace: TraceRecord }) {
    const el = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        let map: import("leaflet").Map | null = null;
        let cancelled = false;
        const timers: number[] = [];

        (async () => {
            const L = (await import("leaflet")).default;
            if (cancelled || !el.current) return;

            map = L.map(el.current, {
                zoomControl: true,
                attributionControl: true,
                scrollWheelZoom: false,
            });

            if (TOKEN) {
                L.tileLayer(
                    `https://api.mapbox.com/styles/v1/${STYLE}/tiles/512/{z}/{x}/{y}@2x?access_token=${TOKEN}`,
                    {
                        tileSize: 512,
                        zoomOffset: -1,
                        maxZoom: 22,
                        attribution:
                            '&copy; <a href="https://www.mapbox.com/about/maps/">Mapbox</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
                    }
                ).addTo(map);
            } else {
                L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                    maxZoom: 19,
                    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                }).addTo(map);
            }

            const line = trace.line as [number, number][];
            if (line && line.length) {
                L.polyline(line, { color: "#4f46e5", weight: 3, opacity: 0.5, lineJoin: "round", lineCap: "round" }).addTo(map);
                L.polyline(line, { color: "#6366f1", weight: 1.75, opacity: 1, lineJoin: "round", lineCap: "round" }).addTo(map);

                const start = line[0];
                const end = line[line.length - 1];
                L.circleMarker(start, { radius: 5, color: "#059669", weight: 2, fillColor: "#34d399", fillOpacity: 1 }).addTo(map);
                L.circleMarker(end, { radius: 5, color: "#f59e0b", weight: 2, fillColor: "none", fillOpacity: 0 }).addTo(map);
            }

            const { s, n, w, e } = trace.bounds;
            map.fitBounds([[s, w], [n, e]], { padding: [24, 24] });

            // Leaflet measured the container while the panel was still opening.
            // Recompute after the reveal so the tile grid matches the final size.
            const fix = () => { try { map && map.invalidateSize(); map && map.fitBounds([[s, w], [n, e]], { padding: [24, 24] }); } catch {} };
            requestAnimationFrame(fix);
            timers.push(window.setTimeout(fix, 120), window.setTimeout(fix, 320));
        })();

        return () => {
            cancelled = true;
            timers.forEach(clearTimeout);
            if (map) { map.remove(); map = null; }
        };
    }, [trace.id]);

    return (
        <div className="relative">
            <div ref={el} className="h-[52vh] w-full bg-slate-200" aria-label={`Recorded track: ${trace.name}`} />
            <div className="pointer-events-none absolute right-3 bottom-2 z-[500] rounded bg-white/70 px-1.5 font-mono text-[10px] text-slate-600">
                {trace.points.toLocaleString()} points · {trace.miles} mi
            </div>
        </div>
    );
}

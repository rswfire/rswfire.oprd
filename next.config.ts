import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["oprdvolunteerabuse.local", "192.168.1.149"],
  output: "export",
  reactCompiler: true,
  // Four build workers, not one per core: thirty-one froze the workstation (2026-10-30).
  experimental: { cpus: 4 },
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // Served at the root of its own domain, so assets resolve relatively by
  // default — the same build works on the apex, a test subdomain, and a
  // local `serve` of out/. Set ASSET_PREFIX to pin assets to an absolute
  // origin (e.g. a CDN) if ever needed.
  assetPrefix: process.env.ASSET_PREFIX || "",
  env: { NEXT_PUBLIC_ASSET_PREFIX: process.env.ASSET_PREFIX || "" },
};

export default nextConfig;

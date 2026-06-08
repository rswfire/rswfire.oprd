import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["oprdvolunteerabuse.local"],
  output: "export",
  reactCompiler: true,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // Served at the root of its own domain, so assets resolve relatively by
  // default — the same build works on the apex, a test subdomain, and a
  // local `serve` of out/. Set ASSET_PREFIX to pin assets to an absolute
  // origin (e.g. a CDN) if ever needed.
  assetPrefix: process.env.ASSET_PREFIX || "",
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["oprdvolunteerabuse.local"],
  output: "export",
  reactCompiler: true,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  assetPrefix: process.env.NODE_ENV === "production" ? "https://oprdvolunteerabuse.org" : "",

};

export default nextConfig;

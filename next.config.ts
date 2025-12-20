import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["oprdvolunteerabuse.local"],
  output: "export",
  reactCompiler: true,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
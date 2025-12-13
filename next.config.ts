import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["oprdvolunteerabuse.local"],
  output: "export",
  reactCompiler: true,
};

export default nextConfig;
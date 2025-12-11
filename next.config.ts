import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  reactCompiler: true,
  allowedDevOrigins: ["oprdvolunteerabuse.local"],
};

export default nextConfig;
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/trust-broken/supplemental",
        destination: "/trust-broken",
        permanent: true,
      },
    ]
  },
  allowedDevOrigins: ["oprdvolunteerabuse.local"],
  output: "export",
  reactCompiler: true,
};

export default nextConfig;
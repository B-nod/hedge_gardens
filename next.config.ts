import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "picsum.photos" },
      { protocol: "https", hostname: "graph.instagram.com" },
      { protocol: "https", hostname: "scontent.cdninstagram.com" },
    ],
  },
  output: "standalone",
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
<<<<<<< HEAD
    remotePatterns: [
      { protocol: "https", hostname: "picsum.photos" },
      { protocol: "https", hostname: "graph.instagram.com" },
      { protocol: "https", hostname: "scontent.cdninstagram.com" },
    ],
  },
  output: "standalone",
=======
    domains: [
      "picsum.photos",
      "graph.instagram.com",
      "scontent.cdninstagram.com",
      "picsum.photos",
    ],
  },
>>>>>>> 058d73a796481a7533eeced7aa3c9a4d72162dae
};

export default nextConfig;

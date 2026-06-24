import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Enable static HTML exports
  images: {
    unoptimized: true, // Required for static export
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d1xyiu62afh9lb.cloudfront.net",
      },
    ],
  },
};

export default nextConfig;

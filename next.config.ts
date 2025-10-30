import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co", // ✅ Correct one
      },
      {
        protocol: "https",
        hostname: "thanksfortoday.studio",
      },
      {
        protocol: "https",
        hostname: "**", // optional: allows all HTTPS domains
      },
    ],
  },
};

export default nextConfig;

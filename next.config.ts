import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      "uploads-ssl.webflow.com",
      "cdn.prod.website-files.com",
      "via.placeholder.com",
      "images.blush.design", // Add your image host here
      // You can add more domains if needed
    ],
  },
};

export default nextConfig;

import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "4000",
        pathname: "/public/static/**",
      },
      {
        protocol: "https",
        pathname: "images.pexels.com/**",
        hostname: "images.pexels.com",
      },
    ],
  },
};

export default withNextIntl(nextConfig);

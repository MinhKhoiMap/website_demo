import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  output: "standalone",
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
        hostname: "mutt-faithful-macaque.ngrok-free.app",
        pathname: "/**",
        search: "",
        port: "",
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

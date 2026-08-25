import { PHASE_DEVELOPMENT_SERVER } from "next/constants.js";

/** @type {import('next').NextConfig} */
const createNextConfig = (phase) => ({
  // Keep development assets separate so a production build cannot invalidate
  // the manifests and chunks used by a running `next dev` process.
  distDir: phase === PHASE_DEVELOPMENT_SERVER ? ".next-dev" : ".next",
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "itexpertsagency.com",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
});

export default createNextConfig;

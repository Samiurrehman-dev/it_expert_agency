/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
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
};

export default nextConfig;

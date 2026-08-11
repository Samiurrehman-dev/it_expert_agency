/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/managed-it-solutions-toronto",
        destination: "/managed-it-services",
        permanent: true,
      },
      {
        source: "/manage-it-services",
        destination: "/managed-it-services",
        permanent: true,
      },
    ];
  },
  images: {
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

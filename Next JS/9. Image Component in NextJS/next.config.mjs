/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: ["google.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.google.com",
      },
    ],
  },
};

export default nextConfig;

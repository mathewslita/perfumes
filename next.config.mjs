/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: [
    '*.trycloudflare.com',
    'readily-flexible-reviews-recently.trycloudflare.com',
    'localhost:3000'
  ],
};

export default nextConfig;

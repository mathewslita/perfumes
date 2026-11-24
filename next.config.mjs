/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compress: true,
  images: {
    unoptimized: true,
  },
  experimental: {
    agentUpgrade: 'security',
    optimizePackageImports: ['lucide-react'],
    inlineCss: true,
  },
  turbopack: {
    resolveAlias: {
      '../build/polyfills/polyfill-module': './src/utils/emptyPolyfill.js',
      'next/dist/build/polyfills/polyfill-module': './src/utils/emptyPolyfill.js',
      '@next/polyfill-module': './src/utils/emptyPolyfill.js',
    },
  },
  async headers() {
    return [
      {
        source: '/assets/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
  allowedDevOrigins: [
    '*.trycloudflare.com',
    'readily-flexible-reviews-recently.trycloudflare.com',
    'localhost:3000'
  ],
};

export default nextConfig;

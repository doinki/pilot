/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  compress: process.env.NODE_ENV === 'development',
  eslint: { ignoreDuringBuilds: true },
  experimental: { scrollRestoration: true, typedRoutes: true },
  images: {
    domains: ['raw.githubusercontent.com'],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 30 * 24 * 60 * 60,
  },
  output: 'standalone',
  poweredByHeader: false,
  typescript: { tsconfigPath: 'tsconfig.build.json' },
};

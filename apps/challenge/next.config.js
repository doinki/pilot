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
  },
  output: 'standalone',
  poweredByHeader: false,
  typescript: { tsconfigPath: 'tsconfig.build.json' },
};

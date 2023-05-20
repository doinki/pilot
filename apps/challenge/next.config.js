/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  eslint: { ignoreDuringBuilds: true },
  experimental: { scrollRestoration: true, typedRoutes: true },
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 30 * 24 * 60 * 60,
  },
  modularizeImports: {
    '@pilot/ui': { transform: '@pilot/ui/dist/{{member}}/{{member}}' },
  },
  output: 'standalone',
  poweredByHeader: false,
  typescript: { tsconfigPath: 'tsconfig.build.json' },
};

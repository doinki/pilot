/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  compress: process.env.NODE_ENV === 'development',
  eslint: { ignoreDuringBuilds: true },
  experimental: { scrollRestoration: true, typedRoutes: true },
  output: 'standalone',
  poweredByHeader: false,
  typescript: { tsconfigPath: 'tsconfig.build.json' },
};

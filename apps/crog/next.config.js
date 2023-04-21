/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  compress: process.env.NODE_ENV === 'development',
  eslint: { ignoreDuringBuilds: true },
  experimental: { scrollRestoration: true },
  output: 'standalone',
  poweredByHeader: false,
  reactStrictMode: true,
  transpilePackages: ['@pilot/ui'],
  typescript: { tsconfigPath: 'tsconfig.build.json' },
};

/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  eslint: { ignoreDuringBuilds: true },
  experimental: { scrollRestoration: true },
  output: 'standalone',
  poweredByHeader: false,
  reactStrictMode: true,
  transpilePackages: ['@pilot/hooks', '@pilot/ui', '@pilot/utils'],
  typescript: { tsconfigPath: 'tsconfig.build.json' },
};

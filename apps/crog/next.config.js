const { withSentryConfig } = require('@sentry/nextjs');

let distDir = '.next';
let tsconfigPath = 'tsconfig.build.json';

if (process.env.NODE_ENV === 'development') {
  switch (process.env.TARGET) {
    case 'mobile':
      distDir = '.next-mobile';
      tsconfigPath = 'tsconfig.mobile.json';
      break;
    case 'desktop':
      distDir = '.next-desktop';
      tsconfigPath = 'tsconfig.desktop.json';
      break;
    default:
      console.error('Invalid TARGET');
      process.exit(1);
  }
}

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  compress: process.env.NODE_ENV === 'development',
  distDir,
  eslint: { ignoreDuringBuilds: true },
  output: 'standalone',
  poweredByHeader: false,
  typescript: { tsconfigPath },
  webpack: (config, { isServer, webpack }) => {
    if (process.env.TARGET === 'mobile') {
      config.module.rules.push({
        test: /desktop\./,
        use: require.resolve('./loader'),
      });
      config.plugins.push(
        new webpack.DefinePlugin({
          __SENTRY_DEBUG__: false,
          __SENTRY_TRACING__: false,
          'process.env.TARGET': JSON.stringify('mobile'),
        })
      );
    } else if (process.env.TARGET === 'desktop') {
      config.module.rules.push({
        test: /mobile\./,
        use: require.resolve('./loader'),
      });
      config.plugins.push(
        new webpack.DefinePlugin({
          __SENTRY_DEBUG__: false,
          __SENTRY_TRACING__: false,
          'process.env.TARGET': JSON.stringify('desktop'),
        })
      );
    }

    if (!isServer) {
      config.resolve.fallback.fs = false;
      config.resolve.fallback.path = false;
    }

    return config;
  },
};

module.exports = withSentryConfig(
  nextConfig,
  { org: 'sentry', project: 'crog', silent: true },
  {
    disableLogger: true,
    hideSourceMaps: true,
    transpileClientSDK: true,
    tunnelRoute: '/monitoring',
    widenClientFileUpload: true,
  }
);

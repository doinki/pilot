let distDir = '.next';
let tsconfigPath = 'tsconfig.build.json';

if (process.env.NODE_ENV === 'development') {
  if (process.env.TARGET === 'mobile') {
    distDir = '.next-mobile';
    tsconfigPath = 'tsconfig.mobile.json';
  } else if (process.env.TARGET === 'desktop') {
    distDir = '.next-desktop';
    tsconfigPath = 'tsconfig.desktop.json';
  }
}

/**
 * @type {import('next').NextConfig}
 */
module.exports = {
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

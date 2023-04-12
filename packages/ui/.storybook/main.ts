import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-links',
    {
      name: '@storybook/addon-postcss',
      options: { postcssLoaderOptions: { implementation: require('postcss') } },
    },
  ],
  docs: { autodocs: 'tag' },
  framework: { name: '@storybook/react-webpack5', options: {} },
  refs: (config, { configType }) =>
    !process.env.URL
      ? config
      : configType === 'DEVELOPMENT'
      ? { icons: { title: 'Icons', url: 'http://localhost:6007' } }
      : { icons: { title: 'Icons', url: process.env.URL! } },
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(j|t)s?(x)'],
};

export default config;

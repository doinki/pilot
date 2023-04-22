import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-essentials',
    '@storybook/addon-links',
    '@storybook/addon-storysource',
    'storybook-addon-swc',
  ],
  docs: { autodocs: 'tag' },
  framework: { name: '@storybook/react-webpack5', options: {} },
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(j|t)sx'],
};

export default config;

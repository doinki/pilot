import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-essentials',
    '@storybook/addon-links',
    '@storybook/addon-storysource',
  ],
  docs: { autodocs: 'tag' },
  framework: { name: '@storybook/react-vite', options: {} },
  stories: ['../stories/**/*.mdx', '../stories/**/*.stories.@(j|t)s?(x)'],
};

export default config;

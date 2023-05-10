import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-essentials',
    '@storybook/addon-links',
    '@storybook/addon-storysource',
    { name: '@storybook/addon-styling', options: { postCss: true } },
  ],
  docs: { autodocs: 'tag' },
  framework: { name: '@storybook/react-vite', options: {} },
  stories: [
    '../../icons/src/**/*.stories.@(j|t)sx',
    '../src/**/*.mdx',
    '../src/**/*.stories.@(j|t)sx',
  ],
};

export default config;

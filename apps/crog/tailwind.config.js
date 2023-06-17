const tailwindConfig = require('@pilot/tailwindcss/tailwind.config');
const defaultTheme = require('tailwindcss/defaultTheme');

/**
 * @type {import('tailwindcss').Config}
 */
module.exports = {
  ...tailwindConfig,
  content: [
    '../../packages/ui/src/**/*.@(j|t)s?(x)',
    '!../../packages/ui/src/**/*.stories.@(j|t)s?(x)',
    '!../../packages/ui/src/**/*.test.@(j|t)s?(x)',
    'src/**/*.@(j|t)s?(x)',
    process.env.TARGET === 'mobile' && '!src/**/*.desktop.@(j|t)s?(x)',
    process.env.TARGET === 'desktop' && '!src/**/*.mobile.@(j|t)s?(x)',
  ].filter(Boolean),
  darkMode: 'class',
  theme: {
    ...tailwindConfig.theme,
    extend: {
      ...tailwindConfig.theme.extend,
      fontFamily: {
        sans: ['var(--font-noto-sans-kr)', ...defaultTheme.fontFamily.sans],
      },
    },
  },
};

const tailwindConfig = require('@pilot/tailwindcss/tailwind.config');
const defaultTheme = require('tailwindcss/defaultTheme');

/**
 * @type {import('tailwindcss').Config}
 */
module.exports = {
  ...tailwindConfig,
  content: ['../../packages/ui/src/**/*.@(j|t)s?(x)', 'src/**/*.@(j|t)s?(x)'],
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

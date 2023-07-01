const tailwindConfig = require('@pilot/tailwindcss/tailwind.config');
const defaultTheme = require('tailwindcss/defaultTheme');

/**
 * @type {import('tailwindcss').Config}
 */
module.exports = {
  content: [
    '../../packages/ui/src/**/*.@(j|t)s?(x)',
    '!../../packages/ui/src/**/*.stories.@(j|t)s?(x)',
    '!../../packages/ui/src/**/*.test.@(j|t)s?(x)',
    'src/**/*.@(j|t)s?(x)',
  ],
  darkMode: 'class',
  presets: [tailwindConfig],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-noto-sans-kr)', ...defaultTheme.fontFamily.sans],
      },
    },
  },
};

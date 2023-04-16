const tailwindConfig = require('@pilot/ui/tailwind.config');

/**
 * @type {import('tailwindcss').Config}
 */
module.exports = {
  ...tailwindConfig,
  content: ['../../packages/ui/src/**/*.@(j|t)s?(x)', 'src/**/*.@(j|t)s?(x)'],
  darkMode: 'class',
};

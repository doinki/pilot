/* eslint-disable */

/**
 * @type {import('tailwindcss').Config}
 */
module.exports = {
  presets: [require('@pilot/tailwindcss/tailwind.config')],
  content: ['src/**/*.@(j|t)s?(x)', 'stories/**/*.@(j|t)s?(x)'],
};

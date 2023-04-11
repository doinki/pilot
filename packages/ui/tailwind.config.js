/* eslint-disable */

/**
 * @type {import('tailwindcss').Config}
 */
module.exports = {
  content: ['src/**/*.@(j|t)s?(x)', 'stories/**/*.@(j|t)s?(x)'],
  plugins: [require('@pilot/tailwindcss/plugins/child')],
  theme: { extend: require('@pilot/tailwindcss/theme/extend') },
};

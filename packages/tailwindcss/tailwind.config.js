/**
 * @type {import('tailwindcss').Config}
 */
module.exports = {
  plugins: [require('@tailwindcss/typography'), require('./plugins/child')],
  theme: { extend: require('./theme/extend') },
};

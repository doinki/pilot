/**
 * @type {import('tailwindcss').Config}
 */
module.exports = {
  plugins: [require('./plugins/child')],
  theme: { extend: require('./theme/extend') },
};

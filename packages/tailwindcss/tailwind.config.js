/**
 * @type {import('tailwindcss').Config}
 */
module.exports = {
  corePlugins: { aspectRatio: false },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('./plugins/child'),
  ],
  theme: { extend: require('./theme/extend') },
};

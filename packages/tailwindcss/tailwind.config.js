/**
 * @type {import('tailwindcss').Config}
 */
module.exports = {
  corePlugins: { aspectRatio: false },
  future: { hoverOnlyWhenSupported: true },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/container-queries'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('./plugins/child'),
    require('./plugins/tap-highlight-color'),
    require('./plugins/theme'),
  ],
  theme: { extend: require('./theme/extend') },
};

const plugin = require('tailwindcss/plugin');

module.exports = plugin(({ addUtilities }) => {
  addUtilities({ '.dark': { 'color-scheme': 'dark' } });
});

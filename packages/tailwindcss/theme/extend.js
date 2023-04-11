/**
 * @type {import('tailwindcss').Config['theme']}
 */
module.exports = {
  animation: {
    'skeleton-pulse': 'skeleton-pulse 1.5s ease-in-out 0.5s infinite',
  },
  content: { nbsp: '"\u00A0"' },
  keyframes: {
    'skeleton-pulse': {
      '0%, 100%': { opacity: '1' },
      '50%': { opacity: '0.4' },
    },
  },
  scale: { 60: '0.6' },
};

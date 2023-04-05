/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  extends: 'pilot/react',
  parserOptions: { project: require.resolve('./tsconfig.eslint.json') },
  root: true,
  rules: {
    '@typescript-eslint/ban-types': [
      'error',
      { extendDefaults: true, types: { '{}': false } },
    ],
    '@typescript-eslint/no-explicit-any': 'off',
  },
  settings: {
    tailwindcss: { config: require.resolve('./tailwind.config.js') },
  },
};

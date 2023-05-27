/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  extends: 'pilot/next',
  parserOptions: { project: require.resolve('./tsconfig.json') },
  root: true,
  settings: {
    'import/resolver': {
      typescript: { project: require.resolve('./tsconfig.json') },
    },
    tailwindcss: { config: require.resolve('./tailwind.config.js') },
  },
};

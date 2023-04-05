/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  extends: 'pilot/next',
  parserOptions: { project: require.resolve('./tsconfig.json') },
  settings: {
    'import/resolver': {
      typescript: { project: require.resolve('./tsconfig.json') },
    },
  },
};

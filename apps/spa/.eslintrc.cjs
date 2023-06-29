/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  extends: 'pilot/react',
  parserOptions: { project: require.resolve('./tsconfig.json') },
  root: true,
  settings: {
    'import/resolver': {
      typescript: { project: require.resolve('./tsconfig.json') },
    },
  },
};

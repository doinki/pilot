/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  extends: 'pilot/base',
  parserOptions: { project: require.resolve('./tsconfig.json') },
  root: true,
  settings: {
    'import/resolver': {
      typescript: { project: require.resolve('./tsconfig.json') },
    },
  },
};

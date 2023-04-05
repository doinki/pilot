/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  extends: 'pilot/react',
  parserOptions: { project: require.resolve('./tsconfig.eslint.json') },
  root: true,
};

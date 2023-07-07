/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  extends: 'pilot/react',
  ignorePatterns: ['dist', 'lib'],
  parserOptions: { project: require.resolve('./tsconfig.json') },
  root: true,
};

/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  env: { browser: true },
  extends: 'pilot/base',
  parserOptions: { project: require.resolve('./tsconfig.json') },
  root: true,
};

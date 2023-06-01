/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  env: { browser: true },
  extends: 'pilot/base',
  parserOptions: { project: require.resolve('./tsconfig.json') },
  root: true,
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
  },
};

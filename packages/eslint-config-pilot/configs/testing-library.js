require('@rushstack/eslint-patch/modern-module-resolution');

/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  overrides: [
    {
      extends: ['plugin:testing-library/react'],
      files: ['**/?(*.)+test.@(j|t)s?(x)'],
    },
  ],
};

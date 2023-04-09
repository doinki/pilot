require('@rushstack/eslint-patch/modern-module-resolution');

/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  ignorePatterns: ['dist', 'public', 'storybook-static'],
  rules: {
    '@typescript-eslint/no-shadow': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/*.test.ts?(x)',
          '**/jest.setup.ts',
          '**/next.config.js',
          '**/rollup.config.mjs',
          '**/scripts/**/*',
        ],
      },
    ],
    'import/prefer-default-export': 'off',
    'no-shadow': 'off',
    'no-underscore-dangle': 'off',
  },
};

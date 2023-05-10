require('@rushstack/eslint-patch/modern-module-resolution');

/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  ignorePatterns: ['coverage', 'dist', 'public', 'storybook-static'],
  rules: {
    '@typescript-eslint/no-shadow': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/*.config.*',
          '**/*.test.ts?(x)',
          '**/jest.setup.ts',
          '**/scripts/**/*',
        ],
      },
    ],
    'import/prefer-default-export': 'off',
    'no-console': ['warn', { allow: ['error'] }],
    'no-nested-ternary': 'off',
    'no-shadow': 'off',
    'no-underscore-dangle': 'off',
  },
};

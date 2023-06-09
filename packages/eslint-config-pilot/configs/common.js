require('@rushstack/eslint-patch/modern-module-resolution');

/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  ignorePatterns: ['coverage', 'dist', 'public', 'storybook-static'],
  rules: {
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/no-misused-promises': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-shadow': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    'consistent-return': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/*.config.*',
          '**/*.spec.ts?(x)',
          '**/*.test.ts?(x)',
          '**/jest.setup.ts',
          '**/scripts/**/*',
        ],
      },
    ],
    'import/prefer-default-export': 'off',
    'no-console': ['warn', { allow: ['error'] }],
    'no-nested-ternary': 'off',
    'no-param-reassign': 'off',
    'no-shadow': 'off',
    'no-underscore-dangle': 'off',
    'no-void': 'off',
  },
};

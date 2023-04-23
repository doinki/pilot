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
          '**/*.test.ts?(x)',
          '**/jest.setup.ts',
          '**/next.config.js',
          '**/rollup.config.mjs',
          '**/scripts/**/*',
        ],
      },
    ],
    'import/prefer-default-export': 'off',
    'no-console': ['warn', { allow: ['error'] }],
    'no-shadow': 'off',
    'no-underscore-dangle': 'off',
  },
};

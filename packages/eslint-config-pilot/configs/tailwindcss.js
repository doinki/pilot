require('@rushstack/eslint-patch/modern-module-resolution');

/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  extends: ['plugin:tailwindcss/recommended'],
  settings: {
    tailwindcss: {
      callees: ['noop', 'twJoin', 'twMerge'],
      classRegex: '^(?:c|\\w+C)lassName$',
    },
  },
};

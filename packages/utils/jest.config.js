/**
 * @type {import('jest').Config}
 */
module.exports = {
  collectCoverageFrom: ['src/**/*.ts', '!src/**/index.ts'],
  testEnvironment: 'jsdom',
  transform: { '\\.(j|t)s$': '@swc/jest' },
};

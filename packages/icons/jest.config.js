/**
 * @type {import('jest').Config}
 */
module.exports = {
  collectCoverageFrom: ['src/**/*.ts?(x)', '!src/**/index.ts'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testEnvironment: 'jsdom',
  transform: {
    '\\.m?(j|t)sx?$': [
      '@swc/jest',
      { jsc: { transform: { react: { runtime: 'automatic' } } } },
    ],
  },
};

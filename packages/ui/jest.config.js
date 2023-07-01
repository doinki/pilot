/**
 * @type {import('jest').Config}
 */
module.exports = {
  collectCoverageFrom: [
    'src/**/*.@(j|t)s?(x)',
    '!src/**/*.stories.@(j|t)s?(x)',
    '!src/**/index.@(j|t)s?(x)',
  ],
  moduleNameMapper: { '\\.css$': 'identity-obj-proxy' },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testEnvironment: 'jsdom',
  testMatch: ['<rootDir>/src/**/*.test.@(j|t)s?(x)'],
  transform: {
    '\\.(j|t)sx?$': [
      '@swc/jest',
      { jsc: { transform: { react: { runtime: 'automatic' } } } },
    ],
  },
};

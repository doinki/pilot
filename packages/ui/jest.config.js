/**
 * @type {import('jest').Config}
 */
module.exports = {
  collectCoverageFrom: [
    'src/**/*.ts?(x)',
    '!src/**/*.stories.ts?(x)',
    '!src/**/index.ts',
  ],
  moduleNameMapper: { '\\.css$': 'identity-obj-proxy' },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testEnvironment: 'jsdom',
  transform: {
    '\\.(j|t)sx?$': [
      '@swc/jest',
      { jsc: { transform: { react: { runtime: 'automatic' } } } },
    ],
  },
};

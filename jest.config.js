// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html
require('dotenv').config();

module.exports = {
  globalSetup: './src/tests/globalSetup.ts',
  globalTeardown: './src/tests/globalTeardown.ts',
  verbose: true,
  testTimeout: parseInt(process.env.RETRY_TIMEOUT),
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: true,
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['src/**/*.{js,ts}', '!<rootDir>/node_modules/'],
};

/* eslint-disable array-element-newline */
module.exports = {
  automock: false,
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
    '!src/index.js',
    '!src/components/index.js',
    '!src/hocs/index.js',
    '!src/middlewares/index.js',
    '!src/utils/index.js'
  ],

  setupFiles: ['<rootDir>/jest.setup.js'],

  preset: 'jest-puppeteer',


  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/node_modules/',
    '<rootDir>/__tests__/config/test-helpers.js'
  ],
}

module.exports = {
  name: 'Arubaito-Test',
  clearMocks: true,
  testRegex: '((\\.|/*.)(test))\\.js?$',
  setupFilesAfterEnv: [
    '<rootDir>/jest.setup.js',
    '<rootDir>/scripts/throw-on-prop-type-error.js',
  ],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
  ],
  transform: {
    '^.+\\.js?$': 'babel-jest',
  },
  transformIgnorePatterns: [
    '<rootDir>/dist/?!(variables.js)',
    '<rootDir>/dist/?!(variables.scss)',
  ],
  modulePaths: ['src/arubaito'],
  moduleNameMapper: {
    // eslint-disable-next-line max-len
    '\\.(jpg|jpeg|png|gif|ico|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/src/arubaito/__mocks__/fileMock.js',
    '\\.(svg)$': '<rootDir>/src/arubaito/__mocks__/svgMock.js',
    '\\.(css|less|scss)$': '<rootDir>/src/arubaito/__mocks__/styleMock.js',
  },
};

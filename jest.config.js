module.exports = {
  verbose: true,
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json',
    },
  },
  collectCoverage: false,
  coverageReporters: ['json', 'html', 'text'],
  coverageDirectory: 'coverage',
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(tsx?)$',
  coveragePathIgnorePatterns: ['<rootDir>/test/', '<rootDir>/node_modules'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  testURL: 'http://localhost/', // https://github.com/facebook/jest/issues/6769
}

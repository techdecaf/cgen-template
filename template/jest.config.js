// this file is managed by a cgen template (typescript-project)

module.exports = {
  roots: ['src'],
  testEnvironment: 'node',
  setupFiles: [],
  coverageReporters: ['text'],
  reporters: ['default', 'jest-junit'],
  collectCoverageFrom: [
    '**/*.{ts,tsx}',
    '!**/_*.{ts,tsx}', // ignore any files starting with an "_" as non-production.
    '!**/*.test.{ts,tsx}', // ignore any files starting with an "_" as non-production.
    '!src/{index,app.module,lambda}.ts',
    '!src/**/*.{migration,entity}.ts',
  ],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  globals: {
    'ts-jest': {
      isolatedModules: true,
    },
  },
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: -10,
    },
  },
  bail: true,
};

import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  clearMocks: true,
  rootDir: '../',
  modulePaths: ['../src'],
  moduleNameMapper: {
    'src/(.*)$': '<rootDir>/src/$1'
  },
  transform: {
    '^.+\\.yaml$': 'yaml-jest'
  },
  collectCoverageFrom: [
    "<rootDir>/src/**/*.ts",
  ],
};

export default config;

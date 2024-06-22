module.exports = {
    preset: 'ts-jest', // tells Jest to use ts-jest as the preset
    testEnvironment: 'node', // specifies that the test environment will be node
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'], // specifies which extensions Jest will process
    transform: {
      '^.+\\.ts$': ['ts-jest',{ // tells Jest to use ts-jest for all .ts files
        tsconfig: 'tsconfig.json' // passes configuration option to ts-jest
      }]
    },
    testMatch: ['**/__tests__/**/*.ts', '**/?(*.)+(spec|test).ts'], // specifies for testing the tests directory or files with test.ts or spec.ts suffixes
  };
  
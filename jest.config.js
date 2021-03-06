module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!/node_modules/',
    '!src/**/index.tsx',
    '!src/index.tsx',

  ],
  setupFilesAfterEnv: ['<rootDir>/enzymeSetUp.ts'],
  snapshotSerializers: ['enzyme-to-json/serializer'],

  moduleNameMapper: {
    '^components/(.*)': '<rootDir>/src/components/$1',
    '^.+\\.scss$': 'identity-obj-proxy',
  },
};

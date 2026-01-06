    // jest.config.js
    export default {
      testEnvironment: 'jsdom',
      setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
      transform: {
        '^.+\\.jsx?$': 'babel-jest', // Use babel-jest for JavaScript files
      },
    };
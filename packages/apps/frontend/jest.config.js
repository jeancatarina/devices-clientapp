module.exports = {
  projects: [
    {
      testEnvironment: 'node',
      displayName: '@devices/frontend',
      setupFilesAfterEnv: ['./src/App/config/setupTests.ts']
    }
  ]
}

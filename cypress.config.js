const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: '4ufobx',
  watchForFileChanges: false,
  eyesIsDisabled: false,
  eyesBrowser:
    '[{"width":800,"height":600,"name":"chrome"},{"width":700,"height":500,"name":"firefox"},{"deviceName":"Pixel 2","screenOrientation":"portrait"}]',
  eyesFailCypressOnDiff: true,
  eyesDisableBrowserFetching: false,
  eyesTestConcurrency: 1,
  eyesIsGlobalHooksSupported: false,
  eyesPort: 40959,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
  },
})

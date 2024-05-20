const { defineConfig } = require("cypress");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const { default: createEsbuildPlugin } = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor')

module.exports = defineConfig({
  e2e: {
    specPattern: '**/*.feature',

    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);

      on('file:preprocessor', createBundler({ plugins: [createEsbuildPlugin(config)] }));


      return config

    },
  },
});
import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  env: {
    dashboard: 'http://localhost:5173',
    settings: 'http://localhost:5173/settings',
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
});

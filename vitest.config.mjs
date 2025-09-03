import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    browser: {
      provider: "playwright",
      enabled: true,
      enableUI: true,
      instances: [{ browser: "chromium" }],
      testerHtmlPath: "./__mocks__/index.html"
    },
    css: true,
  }
})
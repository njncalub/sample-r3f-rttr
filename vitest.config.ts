import { configDefaults, defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "url";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "~": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  test: {
    environment: "jsdom",
    setupFiles: "./vitest.setup.ts",
    exclude: [...configDefaults.exclude, "**/e2e/**"],
    coverage: {
      all: true,
      include: ["src/**/*.{ts,tsx}"],
      exclude: ["src/**/*.test.{ts,tsx}", "src/types/**/*", "src/**/index.ts"],
      provider: "c8",
      reporter: ["text", "html", "text-summary"],
    },
  },
});

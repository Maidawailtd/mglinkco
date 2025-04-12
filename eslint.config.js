import coreWebVitals from "eslint-config-next/core-web-vitals.js";
import typescriptConfig from "eslint-config-next/typescript.js";
import recommendedConfig from "eslint/lib/configs/eslint-recommended.js";

export default [
  coreWebVitals,
  typescriptConfig,
  recommendedConfig,
  {
    files: ["**/*.js", "**/*.ts"],
    env: {
      browser: true,
      node: true
    },
    parserOptions: {
      ecmaVersion: 2021
    },
    rules: {
      semi: ["error", "always"],
      quotes: ["error", "double"]
    }
  }
];

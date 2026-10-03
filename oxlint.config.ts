import solid from "eslint-plugin-solid"
import { defineConfig } from "oxlint"

export default defineConfig({
  plugins: ["typescript", "oxc", "import"],
  jsPlugins: ["eslint-plugin-solid"],
  options: { typeAware: true },
  rules: {
    "no-unused-vars": "off",
    "import/no-cycle": "error",
    "import/no-duplicates": "error",
    "import/consistent-type-specifier-style": ["error", "prefer-top-level"],

    ...solid.configs["flat/recommended"].rules,
    ...solid.configs["flat/typescript"].rules,
  },
})

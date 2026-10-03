import { defineConfig } from "oxfmt"

export default defineConfig({
  printWidth: 85,
  tabWidth: 2,
  useTabs: false,
  semi: false,
  singleQuote: false,
  jsxSingleQuote: false,
  trailingComma: "all",
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: "always",
  quoteProps: "as-needed",
  objectWrap: "collapse",
  insertFinalNewline: true,
  sortImports: {
    newlinesBetween: false,
    groups: [
      ["side_effect", "side_effect_style", "style"],
      { newlinesBetween: true },
      "type-import",
      ["type-parent", "type-sibling", "type-index", "type-internal"],
      { newlinesBetween: true },
      "value-builtin",
      "value-external",
      ["value-internal", "value-subpath"],
      ["value-parent", "value-sibling", "value-index"],
      "unknown",
    ],
  },
})

import { defineConfig, presetWind3 } from "unocss"

export default defineConfig({
  presets: [presetWind3({ dark: "class" })],
  theme: { colors: { bg: "var(--color-bg)", text: "#f5f5f7" } },
})

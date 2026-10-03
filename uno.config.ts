import { defineConfig, presetWind3, presetIcons } from "unocss"

export default defineConfig({
  presets: [presetWind3({ dark: "class" }), presetIcons({ scale: 1.2, warn: true })],
  theme: {
    colors: {
      bg: "var(--color-bg)",
      surface: "#141416",
      elevated: "#1c1c1f",
      edge: "#232327",
      text: "#f5f5f7",
      "text-dim": "#8a8a92",
      accent: "#ffdfa8",
      "on-accent": "#0a0a0b",
      danger: "#ef4444",
      success: "#22c55e",
    },
  },
})

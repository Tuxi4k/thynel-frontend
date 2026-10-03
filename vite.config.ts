import unoCSS from "unocss/vite"
import { defineConfig } from "vite"
import solid from "vite-plugin-solid"

export default defineConfig({
  plugins: [unoCSS(), solid()],
  resolve: { tsconfigPaths: true },
})

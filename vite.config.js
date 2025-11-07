import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  // For GitHub Pages, uncomment next line and set repo name:
  // base: '/<repo-name>/'
})

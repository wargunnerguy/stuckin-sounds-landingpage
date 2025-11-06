// vite.config.ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
export default defineConfig({
  base: '/',                    // custom domain → root
  plugins: [vue()],
})

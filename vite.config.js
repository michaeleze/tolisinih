import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import viteCompress from 'vite-plugin-compression'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    viteCompress({
      algorithm: 'brotliCompress',
      deleteOriginFile: true
    }),
    react()
  ],
  resolve: {
    alias: {
      '@': '/src'
    }
  }
})

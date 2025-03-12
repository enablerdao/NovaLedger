import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [],
  server: {
    host: '0.0.0.0',
    cors: true,
    port: 3000
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
})
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@/', replacement: '/src' },
      { find: '@/Assets', replacement: '/src/assets' },
      { find: '@/Components', replacement: '/src/components' },
    ],
  }
})

/*
 Vite used to translate higher level code to lower level code (DOM).
 Browser can understand
 - Webpack competitior/alternative (But do not have building application
  from scratch)
  - React APP Does what Vite does
  - Next.JS - Project for start up (Production ready code)
  - Vite popular since fast to build (more control of configuration)
 */
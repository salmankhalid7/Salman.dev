import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'  // Add this

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {  // Add this section
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
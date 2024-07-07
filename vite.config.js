import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), visualizer()],
  build: {
    chunkSizeWarningLimit: 2000, // Adjust this value as needed
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
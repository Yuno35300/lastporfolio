import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    host: true,
    port: 5173,
    open: true,
    hmr: {
      timeout: 30000,
      clientPort: 443,
      path: 'hmr-ws'
    }
  },
  preview: {
    port: 5173,
    host: true
  }
});
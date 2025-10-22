import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 5173,
    host: '0.0.0.0',
    strictPort: true,
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
});

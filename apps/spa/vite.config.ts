import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        assetFileNames: 'static/[hash:16].[ext]',
        chunkFileNames: 'static/[hash:16].js',
        entryFileNames: 'static/[hash:16].js',
      },
    },
  },
  plugins: [react()],
  resolve: { alias: [{ find: '@', replacement: 'src' }] },
});

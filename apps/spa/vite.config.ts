import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: { output: { entryFileNames: 'static/[hash:16].js' } },
  },
  plugins: [react()],
});

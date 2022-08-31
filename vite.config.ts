import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
const viteConfig = defineConfig({
  build: {
    // https://rollupjs.org/guide/en/#big-list-of-options
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react'],
          reactDom: ['react-dom/client'],
          apollo: ['@apollo/client'],
          chakra: ['@chakra-ui/react'],
        },
      },
    },
  },
  clearScreen: false,
  envPrefix: 'REACT_APP_',
  plugins: [react()],
  resolve: {
    alias: [{ find: 'src', replacement: path.resolve(__dirname, '/src') }],
  },
});

export default viteConfig;

import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
const viteConfig = defineConfig({
  clearScreen: false,
  envPrefix: 'REACT_APP_',
  plugins: [react()],
  resolve: {
    alias: [{ find: 'src', replacement: path.resolve(__dirname, '/src') }],
  },
});

export default viteConfig;

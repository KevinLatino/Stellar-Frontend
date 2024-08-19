import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/Components'),
      '@screens': path.resolve(__dirname, './src/Screens'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@api': path.resolve(__dirname, './src/Api'),
      '@utils': path.resolve(__dirname, './src/Utils'),
      '@context': path.resolve(__dirname, './src/Context'),
      '@public': path.resolve(__dirname, "./public")
    },
  },
});

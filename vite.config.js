import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@Components', replacement: '/src/Components' },
      { find: '@Screens', replacement: '/src/Screens' },
      { find: '@Api', replacement: '/src/Api' },
      { find: '@Utils', replacement: '/src/Utils' },
      { find: '@Context', replacement: '/src/Context' },
    ],
  },
});

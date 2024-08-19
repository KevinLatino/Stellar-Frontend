import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@components', replacement: '/src/Components' },
      { find: '@screens', replacement: '/src/Screens' },
      { find: '@hooks', replacement: '/src/Hooks' },
      { find: '@api', replacement: '/src/Api' },
      { find: '@utils', replacement: '/src/Utils' },
      { find: '@context', replacement: '/src/Context' },
    ],
  },
});

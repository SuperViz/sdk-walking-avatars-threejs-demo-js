import { fileURLToPath } from 'url';

import { defineConfig } from 'vite';
import vue2 from '@vitejs/plugin-vue2';
import vue2Jsx from '@vitejs/plugin-vue2-jsx';

export default defineConfig({
  plugins: [vue2(), vue2Jsx()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});

// vite.config.ts
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  build: {
    // Elimina 'ssr: 'src/entry-server.ts',' y cualquier otra configuración SSR
    rollupOptions: {
      // Puedes mantener o ajustar las opciones según necesites
      // Si habías añadido 'external' o 'output', puedes simplificarlo
    },
  },
});

// render.js
import fs from 'fs';
import path from 'path';
import { createSSRApp } from 'vue';
import { renderToString } from '@vue/server-renderer';
import { createServer } from 'vite';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

(async () => {
  // Crear el servidor de Vite en modo middleware
  const vite = await createServer({
    server: { middlewareMode: 'ssr' },
    appType: 'custom',
  });

  try {
    // Utilizar Vite para cargar el componente
    const { default: CustomBlock } = await vite.ssrLoadModule('/src/components/CustomBlock.vue');

    // Crear la aplicación SSR
    const app = createSSRApp(CustomBlock);

    // Renderizar la aplicación a una cadena de HTML
    const html = await renderToString(app);

    // Envolver el HTML en una plantilla si es necesario
    const template = `<div id="app">${html}</div>`;

    // Escribir el HTML en un archivo
    fs.writeFileSync(path.resolve(__dirname, 'dist', 'custom-block.html'), template);

    console.log('Archivo custom-block.html generado exitosamente.');
  } catch (err) {
    console.error('Error al renderizar el componente:', err);
    process.exit(1);
  } finally {
    // Cerrar el servidor de Vite
    await vite.close();
  }
})();

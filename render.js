// render.js
import { readFileSync, writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { renderToString } from '@vue/server-renderer';
import { createSSRApp } from 'vue';

// Obtener __dirname en módulos ES
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Importar el componente que deseas renderizar
import CustomBlock from './src/components/CustomBlock.vue';

// Crear la aplicación SSR
const app = createSSRApp(CustomBlock);

// Renderizar la aplicación a una cadena de HTML
renderToString(app).then((html) => {
  // Opcionalmente, puedes envolver el HTML en una plantilla básica
  const template = `<div id="app">${html}</div>`;

  // Escribir el HTML en un archivo
  writeFileSync(resolve(__dirname, 'dist', 'custom-block.html'), template);

  console.log('Archivo custom-block.html generado exitosamente.');
}).catch((err) => {
  console.error('Error al renderizar el componente:', err);
  process.exit(1);
});

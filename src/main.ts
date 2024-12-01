import { createApp } from 'vue';
import App from './App.vue';

// Inicializar la aplicación Vue
const app = createApp(App);

// Inicializar el SDK de Content Block
declare global {
  interface Window {
    CustomElement: any;
  }
}

if (window.location !== window.parent.location) {
  // Estamos en el iframe de Marketing Cloud
  window.CustomElement.init((element: any) => {
    // Aquí puedes manejar los datos y métodos de guardado
    // element.value contiene el valor actual del bloque

    // Escuchar el evento de guardado
    window.CustomElement.onSave(() => {
      // Obtener el contenido HTML que deseas guardar
      const contentToSave = document.getElementById('app')?.innerHTML;

      // Guardar el contenido
      window.CustomElement.setValue(contentToSave);
    });
  });
}

app.mount('#app');


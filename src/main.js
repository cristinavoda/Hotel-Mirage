import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router/index.js'; // Asegúrate de que la ruta es correcta
import './style.css';

const app = createApp(App);

app.use(router); // Usa el enrutador en la aplicación

app.mount('#app');

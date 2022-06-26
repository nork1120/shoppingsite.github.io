import { createApp } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Loading from 'vue3-loading-overlay';
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';
import App from './App.vue'
import router from './router'
import '../node_modules/aos/dist/aos.css'

const app = createApp(App);
app.use(router);
app.use(VueAxios,axios);
app.component('LoadIng',Loading);
app.mount('#app');

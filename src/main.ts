import {createApp} from 'vue'
import App from './App.vue'
import './style.css'

import setupPrimeVue from "./plugins/primevue.ts";
import router from "./router/index.ts";

const app = createApp(App)
app.use(router)
setupPrimeVue(app)
app.mount('#app')

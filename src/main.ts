import {createApp} from 'vue'
import App from './App.vue'
import './style.css'
import './example'

import setupPrimeVue from "./plugins/primevue.ts";
import router from "./router/index.ts";
import {createPinia} from 'pinia'

const app = createApp(App)
app.use(router)
app.use(createPinia())
setupPrimeVue(app)
app.mount('#app')

import {createApp} from 'vue'
import setupPrimeVue  from "./plugins/primevue.ts";


import './style.css'
import App from './App.vue'

const app = createApp(App)
setupPrimeVue(app)
app.mount('#app')

import type {App} from 'vue'
import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'
import InputText from 'primevue/inputtext'
import InputNumber from 'primevue/inputnumber'
import Button from 'primevue/button';
import FloatLabel from 'primevue/floatlabel'
import Panel from 'primevue/panel';

export default function setupPrimeVue(app: App) {
    app.use(PrimeVue, {
        theme: {
            preset: Aura,
            options: {
                darkModeSelector: '.app-dark',
            }
        }
    })
    app.component('InputText', InputText)
    app.component('InputNumber', InputNumber)
    app.component('FloatLabel', FloatLabel)
    app.component('Button', Button)
    app.component('Panel', Panel)
}

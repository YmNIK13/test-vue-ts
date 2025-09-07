import {fileURLToPath, URL as NodeURL} from 'node:url'
import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        extensions: ['.ts', '.js', '.vue', '.json'], // порядок важливий для пріорітету пошуку index.*
        alias: {
            '@': fileURLToPath(new NodeURL('./src', import.meta.url)),
        }
    }
})

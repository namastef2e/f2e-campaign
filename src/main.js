import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

const pinia = createPinia()
import './style.css'
import './index.css'
import './assets/fonts/font.css'

const app = createApp(App)

app.use(pinia)
app.mount('#app')

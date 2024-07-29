import './assets/style.css'

import PhosphorIcons from "@phosphor-icons/vue"
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(PhosphorIcons)

app.use(router)

app.mount('#app')

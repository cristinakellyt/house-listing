import './assets/base.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import HouseCard from './components/ui/HouseCard.vue'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component('house-card', HouseCard)

app.mount('#app')

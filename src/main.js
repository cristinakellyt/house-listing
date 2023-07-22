import './assets/base.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import HouseCard from './components/ui/HouseCard.vue'
import BaseModal from './components/ui/BaseModal.vue'
import BaseCard from './components/ui/BaseCard.vue'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component('base-card', BaseCard)
app.component('house-card', HouseCard)
app.component('base-modal', BaseModal)

app.mount('#app')

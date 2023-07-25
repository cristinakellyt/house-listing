// import '@/assets/base.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import HouseCard from '@/components/houses/HouseCard.vue'
import BaseModal from '@/components/ui/BaseModal.vue'
import BaseCard from '@/components/ui/BaseCard.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import EditDeleteBtns from '@/components/ui/EditDeleteBtns.vue'
import SearchBar from '@/components/ui/SearchBar.vue'

import App from '@/App.vue'
import router from '@/router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component('base-card', BaseCard)
app.component('house-card', HouseCard)
app.component('base-modal', BaseModal)
app.component('base-button', BaseButton)
app.component('edit-delete-btns', EditDeleteBtns)
app.component('search-bar', SearchBar)

app.mount('#app')

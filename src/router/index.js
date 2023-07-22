import { createRouter, createWebHistory } from 'vue-router'
import AboutPage from './../views/AboutPage.vue'
import HousesPage from './../views/HousesPage.vue'
import HouseDetails from './../views/HouseDetails.vue'
import HousesHome from './../views/HousesHome.vue'
import HouseCreate from './../views/HouseCreate.vue'
import HouseEdit from './../views/HouseEdit.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/houses'
    },
    {
      path: '/houses',
      component: HousesHome,
      children: [
        {
          path: '',
          component: HousesPage
        },
        {
          path: 'create',
          component: HouseCreate
        },
        {
          name: 'edit',
          path: 'edit/:houseId',
          component: HouseEdit,
          props: true
        },
        {
          name: 'detail',
          path: 'detail/:houseId',
          component: HouseDetails,
          props: true
        }
      ]
    },
    {
      path: '/about',
      component: AboutPage
    },
    { path: '/:notFound(.*)', component: null }
  ]
})

export default router

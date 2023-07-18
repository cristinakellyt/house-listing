import { createRouter, createWebHistory } from 'vue-router'
import AboutPage from './../views/AboutPage.vue'
import HousesPage from './../views/HousesPage.vue'
import HouseDetails from './../views/HouseDetails.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/houses'
    },
    // {
    //   path: '/details',
    //   component: HouseDetails
    // },
    {
      path: '/houses',
      component: HousesPage
      // children: [
      // {
      //   path: 'search',
      //   component: null
      // },
      // {
      //   path: 'create',
      //   component: null
      // },
      // {
      //   path: ':id',
      //   component: null,
      //   children: [
      //     {
      //       path: 'edit',
      //       component: null
      //     }
      //   ]
      // },
      // {
      //   name: 'house-detail',
      //   path: ':houseId',
      //   component: HouseDetails,
      //   props: true
      // }
      // ]
    },

    {
      path: '/about',
      component: AboutPage
    },
    {
      name: 'house-detail',
      path: '/houses-detail/:houseId',
      component: HouseDetails,
      props: true
    },
    { path: '/:notFound(.*)', component: null }
  ]
})

export default router

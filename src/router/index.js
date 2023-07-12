import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/houses'
    },
    {
      path: '/houses',
      component: null,
      children: [
        {
          path: 'search',
          component: null
        },
        {
          path: 'create',
          component: null
        },
        {
          path: ':id',
          component: null,
          children: [
            {
              path: 'edit',
              component: null
            }
          ]
        }
      ]
    },
    {
      path: '/about',
      component: null
    },
    { path: '/:notFound(.*)', component: null }
  ]
})

export default router

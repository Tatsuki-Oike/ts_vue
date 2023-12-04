import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/user/:id',
      name: 'user',
      component:  () => import('@/views/User.vue'),
      props: (routes) => {
        const idNum = Number(routes.params.id)
        return { id: idNum }
      }
    },
    {
      path: '/page1',
      name: 'page1',
      component: () => import('@/views/Page1.vue')
    },
    {
      path: '/Page2/:param1/:param2/:param3?',
      name: 'page2',
      component: () => import('@/views/Page2.vue'),
      props: (routes) => {
        return {
          param1: Number(routes.params.param1),
          param2: Number(routes.params.param2),
          param3: Number(routes.params.param3),
        };
      }
    },
  ]
})

export default router

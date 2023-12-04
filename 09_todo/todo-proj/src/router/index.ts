import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/active',
      name: 'active',
      component: () => import('../views/Active.vue')
    },
    {
      path: '/done',
      name: 'done',
      component: () => import('../views/Done.vue')
    }
  ]
})

export default router

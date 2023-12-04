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
      path: '/child',
      name: 'child',
      component: () => import('@/views/ChildView.vue'),
      children: [
        {
          path: "child1",
          name: "child1",
          component: () => import('@/views/child/Child1.vue')
        },
        {
          path: "child2",
          name: "child2",
          component: () => import('@/views/child/Child2.vue')
        },
      ]
    },
    {
      path: '/multi',
      name: 'multi',
      component: () => import('@/views/multiView.vue'),
      children: [
        {
          path: "multi1",
          name: "multi1",
          components: {
            default: () => import('@/views/multi/Child11.vue'),
            sub: () => import('@/views/multi/Child12.vue')
          }
        },
        {
          path: "multi2",
          name: "multi2",
          components: {
            default: () => import('@/views/multi/Child21.vue'),
            sub: () => import('@/views/multi/Child22.vue')
          }
        },
      ]
    },
  ]
})

export default router

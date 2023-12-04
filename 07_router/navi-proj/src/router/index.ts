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
      path: '/about/:param',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      props: (routes) => {
        return { param: routes.params.param }
      },
      beforeEnter: (to, from) => {
        console.log("beforeEnter")
        console.log(from)
        console.log(to)
      }
    }
  ]
})

router.beforeEach(
  (to, from) => {
    console.log("----------------------------------")
    console.log("beforeEach:", to.fullPath)
  }
)
router.afterEach(
  (to, from) => {
    console.log("afterEach:", to.fullPath)
    console.log("----------------------------------")
  }
)

export default router

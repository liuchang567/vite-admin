
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  { path: '/login', component: () => import('/@/view/Login.vue') },
  { path: '/', name: 'layout', component: () => import('/@/view/Layout.vue') }
]


const createRoute = () => createRouter({
  history: createWebHashHistory(),
  routes
})

const router = createRoute()

// reset router
export function resetRouter () {
  const newRouter = createRoute()
  router.matcher = newRouter.matcher
}

export default router
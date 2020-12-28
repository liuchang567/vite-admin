
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'layout', component: () => import('/@/view/Layout.vue') }
]


const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
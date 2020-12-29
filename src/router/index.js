
import { createRouter, createWebHashHistory } from 'vue-router'


import Layout from '/@/view/Layout.vue'
const Home = () => import('/@/view/Home/index.vue')
const MenuList = () => import('/@/view/Menu/index.vue')
const Test = () => import('/@/view/Test/index.vue')

const routes = [
  { path: '/login', name: 'login', component: () => import('/@/view/Login.vue') },
  { path: '/', name: 'home', redirect: '/home', component: Layout, children: [{ path: '/home', component: Home }] }
]

export const components = {
  MenuList,
  Test
}


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
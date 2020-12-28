import router from './router'
import store from './store'
import { getLocalStorage } from './utils/utils'

const whiteList = ['/login']

router.beforeEach((to, from, next) => {
  const TOKEN = getLocalStorage('TOKEN')
  if (TOKEN) {
    if (to.path === '/login') {
      next({ path: '/' })
    } else {
      if (store.state.user.userMenus.length === 0) {
        store.dispatch('user/getUserMenus').then(() => {
          next({ ...to, replace: true })
        })
      } else {
        next()
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next('/login')
    }
  }
})

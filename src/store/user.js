import router, { resetRouter } from '/@/router/index'
import { getLocalStorage, setLocalStorage, remLocalStorage } from '/@/utils/utils'
import API from '/@/api/index'

export default {
  namespaced: true,
  state: {
    userId: getLocalStorage('userId') || '',
    username: getLocalStorage('username') || '',
    userMenus: []
  },
  mutations: {
    SET_USERID (state, userId = '') {
      setLocalStorage('userId', userId)
      state.userId = userId
    },
    SET_USERNAME (state, username = '') {
      setLocalStorage('username', username)
      state.username = username
    },
    SET_MENUS (state, userMenus = []) {
      state.userMenus = userMenus
    }
  },
  actions: {
    login ({ commit }, data) {
      return API.user.login(data).then(resp => {
        setLocalStorage('TOKEN', resp.data.token)
        commit('SET_USERID', resp.data.userId)
        commit('SET_USERNAME', resp.data.userName)
        router.replace('/').catch(() => {})
        return resp
      })
    },
    logout ({ commit }) {
      remLocalStorage('TOKEN')
      commit('SET_USERID')
      commit('SET_USERNAME')
      commit('SET_MENUS')
      resetRouter()
      router.replace('/login')
    },
    getUserMenus ({ commit }) {
      return API.user.getUserMenus().then(resp => {
        const asyncRoutes = generateRoutes(resp.data)
        router.addRoute([
          ...asyncRoutes
        ])
        commit('SET_MENUS', asyncRoutes)
      })
    }
  }
}

function generateRoutes (list = []) {
  list = list.map(item => {
    const _item = {
      id: item.id,
      parentId: item.parentId,
      path: item.path || '',
      meta: { title: item.menuName },
      component: item.component,
      name: item.name,
      orderNum: item.orderNum,
      icon: item.icon
    }
    return _item
  })

  const treeData = list.filter(father => {
    const branchArr = list.filter(child => {
      // 返回每一项的子级数组
      return father.id === child.parentId
    })
    if (branchArr.length > 0) {
      branchArr.sort((a, b) => {
        return a.orderNum - b.orderNum
      })
      father.children = branchArr
    }
    // 返回第一层
    return father.parentId === 0
  })
  treeData.sort((a, b) => {
    return a.orderNum - b.orderNum
  })
  return treeData !== '' ? treeData : []
}
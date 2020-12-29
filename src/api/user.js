

function login (data) {
  return http({
    data: {
      userId: data.password,
      userName: data.username,
      token: data.password + data.username
    }
  })
}

function getUserMenus () {
  return http({
    data: [
      {
        id: 111,
        menuName: '首页',
        name: 'home',
        path: '/home',
        parentId: 0,
        orderNum: 1,
        isSingle: true,
        component: 'Layout',
        icon: 'el-icon-message',
      },
      {
        id: 112,
        menuName: '菜单',
        name: 'menu',
        path: '',
        parentId: 0,
        orderNum: 2,
        isSingle: false,
        component: 'Layout',
        icon: 'el-icon-s-open',
      },
      {
        id: 1121,
        menuName: '菜单列表',
        name: 'menulist',
        path: 'menulist',
        parentId: 112,
        orderNum: 1,
        isSingle: false,
        component: 'MenuList',
      },
      {
        id: 1122,
        menuName: 'test',
        name: 'test',
        path: 'test',
        parentId: 112,
        orderNum: 2,
        isSingle: false,
        component: 'Test',
      }
    ]
  })
}

function http(response) {
  return Promise.resolve(
    {data: response.data}
  )
}

export default {
  login,
  getUserMenus
}
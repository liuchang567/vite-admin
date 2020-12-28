

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
        menuName: '菜单管理',
        name: 'menu',
        menuType: 'M',
        path: 'menu',
        parentId: 0,
        orderNum: 1,
        component: 'layout',
        icon: 'el-icon-message',
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
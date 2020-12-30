<template>
  <el-container class="container">
    <el-aside class="aside" width="200">
      <el-menu :default-active="currentRoutePath" unique-opened router>
        <template v-for="route in menus">
          <el-menu-item v-if="route.meta.isSingle" :key="route.path" :index="route.path">
            <template #title><i :class="route.icon"></i>{{route.meta.title}}</template>
          </el-menu-item>

          <el-submenu v-else :key="route.path" :index="route.path">
            <template #title><i :class="route.icon"></i>{{route.meta.title}}</template>
            <el-menu-item v-for="sub in route.children" :key="route.path + '/' + sub.path" :index="route.path + '/' + sub.path">{{ sub.meta.title }}</el-menu-item>
          </el-submenu>
        </template>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header class="header">
        <h1>Vite Admin</h1>
        <div>
          <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item @click.native="logout">退出</el-dropdown-item>
            </el-dropdown-menu>
          </template>
          </el-dropdown>
          <span>{{ username }}</span>
        </div>
      </el-header>
      <el-main class="main">
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from "vue-router"

export default {
  name: 'layout',
  components: {},
  setup() {
    const currentR = useRouter()
    const currentRoutePath  = ref(currentR.currentRoute.value.path)
    const store = useStore()
    const username = computed(() => store.state.user.username)
    const menus = computed(() => store.state.user.userMenus)

    const logout = () => {
      store.dispatch('user/logout')
    }

    return {
      currentRoutePath,
      username,
      menus,
      logout
    }
  }
}
</script>

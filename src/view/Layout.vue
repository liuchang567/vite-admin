<template>
  <el-container class="container">
    <el-aside class="aside" width="200">
      <el-menu default-active="1" unique-opened router>
        <el-submenu index="1">
          <template #title><i class="el-icon-message"></i>导航一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
          <el-menu-item index="1-3">选项3</el-menu-item>
          <el-menu-item index="1-4">选项4</el-menu-item>
        </el-submenu>
        <el-submenu index="2">
          <template #title><i class="el-icon-message"></i>导航二</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
          <el-menu-item index="2-4">选项4</el-menu-item>
        </el-submenu>
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
          <span>{{ $store.state.user.username }}</span>
        </div>
      </el-header>
      <el-main class="main">
        3
      </el-main>
    </el-container>
  </el-container>
</template>

<script>

export default {
  name: 'layout',
  components: {},
  methods: {
    logout () {
      this.$store.dispatch('user/logout')
    }
  }
}
</script>

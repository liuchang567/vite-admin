<template>
  <div class="login">
    <el-form ref="form" :model="form" :rules="rules" class="login-form">
      <el-form-item label="" prop="username">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="" prop="password">
        <el-input v-model="form.password" show-password @keypress.enter.native="onSubmit"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="login-btn" type="primary" @click="onSubmit">登 录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>

export default {
  name: 'login',
  data() {
      return {
        form: {
          username: '',
          password: ''
        },
        rules: {
          username: [
            { required: true, message: '请输入账号', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' }
          ]
        }
      }
  },
  methods: {
    onSubmit () {
      this.$refs.form.validate(async (valid, rules) => {
        if (valid) {
          this.$store.dispatch('user/login', this.form)
        }
      })
    }
  }
}
</script>

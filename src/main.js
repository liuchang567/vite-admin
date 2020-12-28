import { createApp } from 'vue'

import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'

import store from './store'
import router from './router'

import './permission'

import App from './App.vue'

import './style/index.css'

const app = createApp(App)
app.use(store)
app.use(router)
app.use(ElementPlus)

app.mount('#app')

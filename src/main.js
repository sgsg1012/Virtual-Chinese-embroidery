import { createApp } from 'vue'
import App from './App.vue'
import { routes } from './routes.js'
import { createRouter, createWebHistory } from 'vue-router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import axios from 'axios'
const app = createApp(App)
const router = createRouter({
  history: createWebHistory(),
  routes,
})
app.use(router).use(ElementPlus)
app.mount('#app')

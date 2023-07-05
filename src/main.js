import {createApp} from 'vue'
import ElementPlus from 'element-plus'
import {createWebHashHistory, createRouter} from 'vue-router'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'
import './style.css'
import App from './App.vue'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import 'element-plus/theme-chalk/dark/css-vars.css'

const app = createApp(App)

const routes = [
    {path: '/', component: () => import('./Views/Info.vue')},
    {path: '/Access', component: () => import('./Views/Access.vue')},
    {path: '/Class', component: () => import('./Views/Class.vue')},
    {path: '/Friend', component: () => import('./Views/Friend.vue')},
    {path: '/Setting', component: () => import('./Views/Setting.vue')},
    {path: '/Start', component: () => import('./Views/Start.vue')},
]
const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

app.use(router)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.use(ElementPlus, {
    locale: zhCn
})
app.mount('#app')

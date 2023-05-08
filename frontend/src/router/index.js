import {createRouter, createWebHistory} from 'vue-router'
import routes from './routes'

// 这里配置路由守卫吧

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
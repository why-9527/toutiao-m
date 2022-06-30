import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/Login')
    },
    {
        path: '/',
        // name: 'layout',
        component: () => import('@/views/Layout'),
        children: [
            {
                path: '',
                name: 'home',
                component: () => import('@/views/Home')
            },
            {
                path: 'qa',
                name: 'qa',
                component: () => import('@/views/QA')
            },
            {
                path: 'video',
                name: 'video',
                component: () => import('@/views/Video')
            },
            {
                path: 'my',
                name: 'my',
                component: () => import('@/views/My')
            },
        ]
    }
]

const router = new VueRouter({
    routes
})

export default router

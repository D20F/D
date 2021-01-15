import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/component',
        redirect: '/component/directive',
        name: 'component',
        meta: { title: '组件', icon: 'el-icon-s-help' },
        children: [
            {
                path: 'directive',
                // name: 'directive',
                component: () => import('@/views/404.vue'),
                // component: () => import('@/views/component/directive/index'),
                // meta: { title: '指令', icon: 'table' }
            },
            // {
            //     path: 'login',
            //     name: 'login',
            //     component: () => import('@/views/component/login/index'),
            //     meta: { title: '登录', icon: 'table' }
            // },
            // {
            //     path: 'card',
            //     name: 'card',
            //     component: () => import('@/views/component/card/index'),
            //     meta: { title: '卡片', icon: 'table' }
            // },
            // {
            //     path: 'success',
            //     name: 'success',
            //     component: () => import('@/views/component/success/index'),
            //     meta: { title: '成功页面', icon: 'table' }
            // }
        ]
    },
    {
        path: "/",
        name: "main",
        explain: "主页面",
        component: () => import("@/views/404.vue")
    },
]


const router = new VueRouter({
    base: __dirname,
    routes
})

router.beforeEach((to, from, next) => {
    next()
})

export default router
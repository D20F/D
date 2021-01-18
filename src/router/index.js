import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [



    {
        path: "/",
        name: "main",
        explain: "主页面",
        component: () => import("@/views/directive/copy")
    },
]


const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes
})

router.beforeEach((to, from, next) => {
    next()
})

export default router
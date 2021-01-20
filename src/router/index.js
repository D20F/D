import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    
    //介绍
    {
        path: "/",
        component: () => import("@/views/introduction")
    },
    
    //vue
    {
        path: "/vue/doubt",
        component: () => import("@/views/vue/doubt")
    },

    //react
    {
        path: "/react/doubt",
        component: () => import("@/views/react/doubt")
    },
    
    //指令
    {
        path: "/directive/copy",
        component: () => import("@/views/directive/copy")
    },
    {
        path: "/directive/antiShake",
        component: () => import("@/views/directive/anti-shake")
    },

    //组件
    {
        path: "/ui/card",
        component: () => import("@/views/ui/card")
    },

    //样式
    {
        path: "/style/layout",
        component: () => import("@/views/style/layout")
    },
    
    //JS 
    {
        path: "/js/doubt",
        component: () => import("@/views/js/doubt")
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
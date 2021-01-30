
//指令
const routes = [


    {
        path: "/directive/copy",
        component: () => import("@/views/directive/copy")
    },
    {
        path: "/directive/antiShake",
        component: () => import("@/views/directive/anti-shake")
    },
    {
        path: "/directive/tooltips",
        component: () => import("@/views/directive/tooltips")
    },
    {
        path: "/directive/regular",
        component: () => import("@/views/directive/regular")
    },

]


export default routes
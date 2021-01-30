import Vue from 'vue'
import VueRouter from 'vue-router'

import vue from './vue'
import component from './component'
import directive from './directive'
import introduction from './introduction'
import js from './js'
import react from './react'
import style from './style'

Vue.use(VueRouter)

const routes = [
    ...vue,
    ...component,
    ...directive,
    ...introduction,
    ...js,
    ...react,
    ...style,
]


const router = new VueRouter({
    // mode: 'history',
    base: __dirname,
    routes
})

router.beforeEach((to, from, next) => {
    next()
})

export default router
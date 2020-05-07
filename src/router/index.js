import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import register from '@/views/sh/register'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            redirect: '/zc'
        },
        {
            path: '/zc',
            name: 'register',
            component: register
        }
    ]
})
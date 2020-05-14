import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import register from '@/views/sh/register'
import shouye from '@/views/sh/shouye'
import fabuxuqiu from '@/views/sh/fabuxuqiu'
import xuqiushuli from '@/views/sh/xuqiushuli'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            redirect: '/sy'
        },
        {
            path: '/zc',
            name: 'register',
            component: register
        },
        {
            path: '/sy',
            name: 'shouye',
            component: shouye
        },
        {
            path: '/fb',
            name: 'fabuxuqiu',
            component: fabuxuqiu
        },
        {
            path: '/sl',
            name: 'xuqiushuli',
            component: xuqiushuli
        }

    ]
})
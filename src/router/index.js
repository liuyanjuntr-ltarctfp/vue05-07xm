import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import denglu from '@/views/sh/denglu'
// import bzone from '@/views/sh/bzone'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            redirect: '/denglu'
        },
        {
            path: '/denglu',
            name: 'denglu',
            component: denglu
        }
        // {
        //     path: '/bzone',
        //     name: 'bzone',
        //     component: bzone
        // }
    ]
})
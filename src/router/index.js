import Vue from 'vue'
import Router from 'vue-router'

import RegisterUser from '@/components/RegisterUser'
import LoginComponent from '@/components/Login'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: {
                name: 'login'
            }
        },
        {
            path: '/register',
            name: 'register',
            component: RegisterUser
        },
        {
            path: '/login',
            name: 'login',
            component: LoginComponent
        },
    ]
})

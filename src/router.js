import Vue from 'vue'
import Router from 'vue-router'
import store from './store'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'login',
            component: () => import('./views/Login')
        },
        {
            path: '/register',
            name: 'register',
            component: () => import('./views/Register')
        },
        {
            path: '/manifestations',
            name: 'manifestations',
            component: () => import('./views/Manifestations')
        },
        {
            path: '/manifestation/:id',
            name: 'view_manifestation',
            component: () => import('./views/ViewManifestation')
        },
        {
            path: '/reservations',
            name: 'reservations',
            component: () => import('./views/Reservations'),
            beforeEnter: requireAuth
        },
        {
            path: '/setavis',
            name: 'set-avis',
            component: () => import('./views/SetAvis'),
            beforeEnter: requireAuth
        }
    ]
})

function requireAuth(to, from, next) {
    if (store.getters.getUserStatus) {
        next()
    } else {
        next('/')
    }
}
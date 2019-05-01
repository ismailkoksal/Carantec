import Vue from 'vue'
import Router from 'vue-router'

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
      component: () => import('./views/Reservations')
    }
  ]
})

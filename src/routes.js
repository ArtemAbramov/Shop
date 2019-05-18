// default
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// Pages

import Home from '@/pages/Home'
import NotFound from '@/pages/404'
import Shop from '@/pages/Shop'

//  Routering
export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/shop',
      name: 'shop',
      component: Shop
    },
    {
      path: '*',
      name: 'notFound',
      component: NotFound
    }
  ]
})
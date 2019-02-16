import Vue from 'vue'
import Router from 'vue-router'

import homeRoute from './homeRoute'
import categoryRoute from './categoryRoute'
import mineRoute from './mineRoute'
import recommendRoute from './recommendRoute'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    homeRoute,
    categoryRoute,
    mineRoute,
    recommendRoute,
    {
      path: '/search',
      component: () => import('../common/components/search/search')
    },
    {
      path: '/shopbag',
      component: () => import('../common/components/shopbag/shopbag')
    },
    {
<<<<<<< HEAD
      path:'/details',
      component:()=>import('../common/components/details/details')
    },
    {
      path:'/login',
      component:()=>import('../common/components/users/login')
    },
    {
      path:'/register',
      component:()=>import('../common/components/users/register')
    },
    {
=======
>>>>>>> 2bdca882b6e47a1b094212921aa786b3d61039dd
      path:'/',
      redirect:'/home'
    }
  ]
})
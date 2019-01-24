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
      path:'/',
      redirect:'/home'
    }
  ]
})


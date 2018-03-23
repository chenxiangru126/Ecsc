/*
路由器模块
*/

import Vue from "vue"
import VueRouter from 'vue-router'

import Msite from  '../pages/Msite/Msite.vue'
import Sort from  '../pages/Sort/Sort.vue'
import ShopCart from  '../pages/ShopCart/ShopCart.vue'
import Profile from '../pages/Profile/Profile.vue'


Vue.use(VueRouter)

export default new VueRouter({
  routes:[
    {
      path:'/',
      redirect:'/msite'
    },
    {
      path:'/msite',
      component:Msite,
    },
    {
      path:'/sort',
      component:Sort,
    },
    {
      path:'/shopCart',
      component:ShopCart,
    },
    {
      path:'/profile',
      component:Profile,
    }
  ]
})

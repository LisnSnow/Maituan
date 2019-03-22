import Vue from 'vue'
import Router from 'vue-router'

import Goods from './components/content/goods'
import Ratings from './components/content/ratings'
import Seller from './components/content/seller'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {path:'/goods',component:Goods},
    {path:'/ratings',component:Ratings},
    {path:'/seller',component:Seller},
    {path:'*',redirect:'/goods'}
  ]
})

import Vue from 'vue'
import VueRouter from 'vue-router'

import home from '../views/home/Home.vue'
import city from '../views/City/City.vue'
import detail from '../views/Detail/Detail'

Vue.use(VueRouter)


const routes = [
  {
    path: '/', redirect: '/home'
  },
  {
    path: '/home', component: home
  },
  {
    path: '/City', component: city
  }, {
    path: '/detail/:id', component: detail
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router

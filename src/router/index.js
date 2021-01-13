import Vue from 'vue'
import VueRouter from 'vue-router'
import Community from '../views/Community.vue'
import Login from '../views/Login.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Community',
    component: Community
  },
  
  {
    path: '/boards',
    name: 'Boards',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Boards.vue')
  },
  
  {
  path: '/login',
  name: 'Login',
  component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import Community from '../views/Community.vue'
import store from '../plugins/store'



Vue.use(VueRouter)

const routes = [
  {
    // w
    path: '/',
    name: 'Community',
    component: Community
  },

  {
    path: '/boards',
    name: 'Boards',
    component: () => import('../views/Boards.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/Profile.vue')
  },
  {
    path: '/chatroom',
    name: 'ChatRoom',
    component: () => import('../views/ChatRoom.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import('../views/Settings.vue')
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('../views/Search.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name !== 'Login' && !store.state.user) {
    to = ({ name: 'Login', query: { redirect: to.path } })
    next(to)
  }
  else next()
})

export default router


import Vue from 'vue'
import VueRouter from 'vue-router'
import Community from '../views/Community.vue'
import Login from '../views/Login.vue'
import ChatRoom from '../views/ChatRoom.vue'
import Profile from '../views/Profile.vue'
import Search from '../views/Search.vue'
import Settings from '../views/Settings.vue'
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
    component: Profile
  },
  {
    path: '/chatroom',
    name: 'ChatRoom',
    component: ChatRoom
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    beforeEnter: (to, from, next) => {
      if (store.state.loggedIn) next({ name: 'Community' })
      next()
    }
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings
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
  if (to.name !== 'Login' && !store.state.loggedIn) next({ name: 'Login' })
  else next()
})

export default router

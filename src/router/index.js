import Vue from 'vue'
import VueRouter from 'vue-router'
import Community from '../views/Community.vue'
import ChatRoom from '../views/ChatRoom.vue'
import Profile from '../views/Profile.vue'
import Search from '../views/Search.vue'
import Settings from '../views/Settings.vue'
import LoginSignup from '../views/LoginSignup.vue'


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
    component: () => import('../views/Boards.vue')
  },
  {
    path:'/profile',
    name: 'Profile',
    component:Profile
  },
  {
    path:'/chatroom',
    name:'ChatRoom',
    component:ChatRoom
  },
  {
    path:'/login signup',
    name:'LoginSignup',
    component:LoginSignup
    },
  {
    path:'/search',
    name: 'Search',
    component:Search
  },
  {
    path:'/settings',
    name:'Settings',
    component:Settings
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

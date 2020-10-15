import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Subscription from '../views/Subscription.vue'
import Game from '../views/Game.vue'
import History from '../views/History.vue'
import Login from '@/views/Login'
import Profile from '@/views/Profile'
import Register from '@/views/Register'
import EmailConfirm from '@/views/EmailConfirm'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/game',
    name: 'Game',
    component: Game
  },
  {
    path: '/subscription',
    name: 'Subscription',
    component: Subscription
  },
  {
    path: '/history',
    name: 'History',
    component: History
  },
  {
    path: '/history/:game_id/:case_id',
    name: 'History Game',
    component: Game
  },
  {
    path: '/history/:game_id',
    name: 'History Game',
    component: Game
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/Profile',
    name: 'History Game',
    component: Profile
  },
  {
    path: '/email_confirm',
    name: 'Email Confirm',
    component: EmailConfirm
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

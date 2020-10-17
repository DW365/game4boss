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
import store from '@/store/index'
import api from '@/client'

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
    component: Login,
    meta: { requiresAuth: false }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: { requiresAuth: false }
  },
  {
    path: '/Profile',
    name: 'History Game',
    component: Profile
  },
  {
    path: '/email_confirm',
    name: 'Email Confirm',
    component: EmailConfirm,
    meta: { requiresAuth: false }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  if (JSON.stringify(store.state.user) === '{}' && to.meta.requiresAuth !== false) {
    api.init()
      .then(client => client.getUserInfo(null, null, { withCredentials: true }))
      .then(res => {
        store.commit('setUser', res.data)
        next()
      })
      .catch(res => {
        next('/login')
      })
  } else {
    next()
  }
})

export default router

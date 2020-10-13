import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Subscription from '../views/Subscription.vue'
import Game from '../views/Game.vue'
import History from '../views/History.vue'

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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

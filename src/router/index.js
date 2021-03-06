import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contact-us',
    name: 'Contactus',
    component: () => import(/* webpackChunkName: "about" */ '../views/ContactUs.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "about" */ '../views/Register.vue')
  },
  {
    path: '/getjob',
    name: 'Getjob',
    component: () => import(/* webpackChunkName: "about" */ '../views/Getjob.vue')
  },
  {
    path: '/forgot-password',
    name: 'Password',
    component: () => import(/* webpackChunkName: "about" */ '../views/Forgotpassword.vue')
  },
  {
    path: '/verify-code',
    name: 'verify',
    component: () => import(/* webpackChunkName: "about" */ '../views/verifycode.vue')
  },
  {
    path: '/my-account',
    name: 'Account',
    component: () => import(/* webpackChunkName: "about" */ '../views/Userprofile.vue')
  },
  {
    path: '/my-settings',
    name: 'Settings',
    component: () => import(/* webpackChunkName: "about" */ '../views/UserSettings.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

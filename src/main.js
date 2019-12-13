import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'


import HomePage from './pages/HomePage'
import Login from './pages/Login'
import ListUser from './pages/ListUser'

import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import NotFound from './pages/NotFound'

import './plugins'  // Tự động tìm tới file index.js

Vue.use(VueRouter)

const routes = [
  { 
    path: '/', 
    component: HomePage,
    children: [
      {
        path: '',
        component: Home
      },
      {
        path: 'about-us',
        component: AboutUs
      }
    ]
  },
  { 
    path: '/login', 
    component: Login 
  },
  { 
    path: '/user/:id?', 
    component: ListUser 
  },
  { 
    path: '*', 
    component: NotFound 
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

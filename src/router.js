// import Vue from 'vue'
// import VueRouter from 'vue-router'

// import HomePage from './pages/HomePage'
// import Login from './pages/Login'
// import ListUser from './pages/ListUser'

// import Home from './pages/Home'
// import AboutUs from './pages/AboutUs'
// import NotFound from './pages/NotFound'

// Vue.use(VueRouter)

// let isLogin = true

// const routes = [
//   { 
//     path: '/', 
//     component: HomePage,
//     children: [
//       {
//         path: '',
//         component: Home
//       },
//       {
//         path: 'about-us',
//         component: AboutUs
//       }
//     ]
//   },
//   { 
//     path: '/login', 
//     component: Login 
//   },
//   { 
//     path: '/user/:id?', 
//     component: ListUser,
//     beforeEnter: (to, from, next) => {
//       if(isLogin) next();
//       else {
//         next('/login')
//       }
//     }
//   },
//   { 
//     path: '*', 
//     component: NotFound 
//   }
// ]

// const router = new VueRouter({
//   mode: 'history',
//   routes
// })

// export default router

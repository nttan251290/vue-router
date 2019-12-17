import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins'  // Tự động tìm tới file index.js

import blogs from './mock/blogs'

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

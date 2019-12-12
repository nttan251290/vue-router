<template>
  <div id="app">
    <comp-menu />
    <slider />
    <h1>Component App.vue</h1>
    <router-view></router-view>
  </div>
</template>

<script>

import CompMenu from './components/CompMenu'
import Slider from './components/Slider'

export default {
  name: 'app',
  components: {
    CompMenu,
    Slider
  },

  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

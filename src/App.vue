<template>
  <div id="app">
    <!-- <comp-menu /> -->
    <!-- <transition name="slide-fade" mode="out-in">
      <router-view></router-view>
    </transition> -->
    <h1>Hello</h1>
  </div>
</template>

<script>

// import CompMenu from './components/CompMenu'

export default {
  name: 'app',
  components: {
    // CompMenu
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

/* .v-enter-active, .v-leave-active {
  transition: all .3s ease
}
.v-enter {
  opacity: 0;
  transform: scale(1.1)
}
.v-enter-to {
  opacity: 1;
  transform: scale(1)
}
.v-leave {
  opacity: 1;
  transform: scale(1)
}
.v-leave-to {
  opacity: 0;
  transform: scale(1.1)
} */

</style>

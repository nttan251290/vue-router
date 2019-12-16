<template>
  <div id="app">
    <navigation />
    <router-view />
    <comp-footer />
  </div>
</template>

<script>

import Navigation from './components/Navigation'
import CompFooter from './components/CompFooter'

export default {
  name: 'app',
  components: {
    Navigation,
    CompFooter
  },

  data () {
    return {
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

<template>
  <div>
    <img src="https://merahputih.com/media/c0/0e/d2/c00ed25b79766b3cafca6962d62714ad.png" />
    <button class="btn btn-info" v-on:click="goBackHome">Back to home page</button>
  </div>
</template>

<script>

export default {
  name: "not-found",

  methods: {
    goBackHome() {
      this.$router.push('/')
    }
  }
}

</script>

<style>

</style>

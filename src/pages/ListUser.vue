<template>
  <b-container class="pt-5 pb-5">
    <b-row>
      <b-col sm="4">
        <b-list-group>

          <router-link
            v-for="(user, index) in listUser"
            v-bind:key="index"
            v-bind:to="`/user/${index + 1}`"
            tag="b-list-group-item" 
            exactActiveClass="active">
            {{user.fullName}}
          </router-link>

        </b-list-group>
      </b-col>

      <b-col sm="8">
        <h3 v-if="!currentId">Vui lòng chọn vào một User bất kì</h3>
        <template v-else-if="getCurrentUser">
          <p>Tên: {{getCurrentUser.fullName}}</p>
          <p>Email: {{getCurrentUser.email}}</p>
          <p>Active: {{getCurrentUser.isActive}}</p>
        </template>
        <h3 v-else>Id user không hợp lệ</h3>
      </b-col>
    </b-row>
    
  </b-container>
</template>

<script>

import listUser from '../mocks/list-user'

export default {
  name: 'list-user',
  data() {
    return {
      listUser,
      currentId: null
    }
  },

  watch: {
    $route(to, from) {
      this.currentId = this.$route.params.id
    }
  },

  created() {
    this.currentId = this.$route.params.id
  },

  computed: {
    getCurrentUser() {
      let id = parseInt(this.currentId)
      if(id > this.listUser.length) return null
      return this.listUser[id - 1]
    }
  }
}
</script>

<style>

</style>

<template>
  <b-container class="pt-5 pb-5">
    <b-row>
      <b-col sm="4">
        <b-list-group>
          <b-list-group-item 
            v-for="(user, index) in listUser" 
            v-bind:key="index">{{user.fullName}}
          </b-list-group-item>
        </b-list-group>
      </b-col>

      <b-col sm="8">
        <template v-if="getCurrentUser">
          <p>Tên: {{getCurrentUser.fullName}}</p>
          <p>Email: {{getCurrentUser.email}}</p>
          <p>Active: {{getCurrentUser.isActive}}</p>
        </template>
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

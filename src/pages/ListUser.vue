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
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec quam gravida, semper mauris id, dignissim nunc. Praesent vel varius justo, a vehicula risus. Fusce in lectus dolor. Maecenas bibendum ornare ipsum congue sodales. Duis eu tristique ex, eu auctor leo. Nunc eu luctus lorem. Sed dapibus dolor nec tincidunt sagittis. Quisque interdum est viverra, porttitor leo quis, tempus ipsum. Nullam sit amet lorem interdum, scelerisque massa in, feugiat ipsum. Nam eget nulla sit amet quam rhoncus vulputate vel ut mi. Integer mollis est leo, ut accumsan tortor elementum ut. Duis mollis accumsan nisi, et scelerisque dolor convallis ut. Ut diam quam, tempus et ipsum sed, porttitor facilisis ex. Vestibulum suscipit bibendum libero ac eleifend. Nullam dui nunc, varius eget viverra at, ultricies quis magna. Morbi laoreet nunc mauris, eu vehicula nisl imperdiet vitae.</p>
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
      listUser
    }
  }
}
</script>

<style>

</style>

<template>
  <v-card
    class="mx-auto"
    max-width="400"
    tile
  >
    <v-list-item v-for="(user) in users" :key="user.name">
      <v-list-item-content>
        <v-list-item-title>{{ user.name }} : {{ user.age }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>

  </v-card>
</template>
<script>
import axios from 'axios'

export default {
  data () {
    return {
      users: []
    }
  },
  mounted () {
    axios.get('http://172.16.7.66:3000/api/user')
      .then((r) => {
        this.users = r.data.users
        console.log(r)
      })
      .catch((e) => {
        console.error(e.message)
      })
  }
}
</script>

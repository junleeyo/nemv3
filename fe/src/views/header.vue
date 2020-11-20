<template>
  <v-container>
    <v-btn @click="headerSend">헤더 전송</v-btn>
  </v-container>
</template>
<script>
import axios from 'axios'

export default {
  methods: {
    headerSend () {
      axios.get(`${this.$apiRootPath}test`, { headers: { Authorization: 'fake token!' } })
        .then(r => console.log(r))
        .catch(e => console.log(e))
    }
  }
}
</script>
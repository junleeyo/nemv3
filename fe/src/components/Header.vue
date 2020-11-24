<template>
    <v-row
        align="center"
        justify="space-around"
    >
        <v-btn text v-if="!$store.state.token" @click="$router.push('/sign')">
        로그인
        </v-btn>
        <v-btn text v-if="$store.state.token" @click="signOut">
        로그아웃
        </v-btn>
    </v-row>
</template>

<script>
export default {
  data () {
  },
  mounted () {
  },
  methods: {
    signOut () {
      // localStorage.removeItem('token')
      this.$store.commit('delToken')
      this.$router.push('/')
    }
  }
}
</script>

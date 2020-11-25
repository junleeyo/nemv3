<template>
    <v-row
        align="center"
        justify="space-around"
    >
        <template v-if="!$store.state.token">
          <v-btn text @click="$router.push('/sign')">
          로그인
          </v-btn>
          <v-btn text @click="$router.push('/register')">
          회원가입
          </v-btn>
        </template>
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

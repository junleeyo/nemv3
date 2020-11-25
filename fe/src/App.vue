<template>
  <v-app :dark="siteDark">
    <v-app-bar app>
      <Header />
    </v-app-bar>

    <v-navigation-drawer app>
      <NavLeft />
    </v-navigation-drawer>

    <!-- Sizes your content based upon application components -->
    <v-main>

      <!-- Provides the application the proper gutter -->
      <v-container fluid>

        <!-- If using vue-router -->
        <router-view>

        </router-view>
      </v-container>
    </v-main>

    <v-footer app>
     <span>&copy; {{siteCopyright}}</span>
    </v-footer>
  </v-app>
</template>

<script>
import Header from './components/Header'
import NavLeft from './components/NavLeft'

export default {
  name: 'App',
  data () {
    return {
      siteCopyright: '기다리는중',
      siteDark: false
    }
  },
  components: {
    NavLeft,
    Header
  },
  mounted () {
    this.getSite()
  },
  methods: {
    getSite () {
      this.$axios.get('/site')
        .then(r => {
          console.log(r.data.d)
          this.siteCopyright = r.data.d.copyright
          this.siteDark = r.data.d.dark
        })
        .catch(e => console.error(e.message))
    }
  }
}
</script>

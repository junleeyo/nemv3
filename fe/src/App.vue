<template>
  <v-app>
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
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>
import Header from './components/Header'
import NavLeft from './components/NavLeft'

export default {
  name: 'App',
  components: {
    NavLeft
    ,Header
  },
  data: () => ({
  })
}
</script>

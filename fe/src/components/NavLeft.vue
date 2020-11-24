<template>
  <v-card
    height="400"
    width="256"
    class="mx-auto"
  >
    <v-navigation-drawer permanent>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Vue
          </v-list-item-title>
          <v-list-item-subtitle>
           {{ this.$apiNodeEnv }} : {{ this.$apiRootPath }}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          router :to="item.route"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
export default {
  data () {
    return {
      items: [
        { title: 'lv0', icon: 'home', route: '/' },
        { title: 'lv1', icon: 'home', route: '/lv1' },
        { title: 'lv2', icon: 'home', route: '/lv2' },
        { title: 'lv3', icon: 'home', route: '/lv3' },
        { title: 'user', icon: 'face', route: '/user' },
        { title: 'page', icon: 'face', route: '/page' }
        /*{ title: 'About', icon: 'mdi-home', route: '/about' },
        { title: 'help', icon: 'mdi-help', route: '/help' },        
        { title: 'header', icon: 'face', route: '/header' },
        { title: 'sign', icon: 'face', route: '/sign' }*/
      ],
      right: null
    }
  },
  mounted () {
  },
  methods: {  
  }
}
</script>

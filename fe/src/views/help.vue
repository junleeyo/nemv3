<template>
  <div class="about">
    <h1>{{title}}</h1>
    <v-btn :color="btnColor" @click="test">test</v-btn>
  </div>
</template>
<script>
export default {
  name: 'help',
  data () {
    return {
      title: 'help',
      btnColor: 'success'
    }
  },
  methods: {
    test () {
      this.title = 'help-click'
      this.btnColor = 'warning'
    }
  }
}
</script>

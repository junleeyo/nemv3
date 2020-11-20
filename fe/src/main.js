import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import '@babel/polyfill'

Vue.config.productionTip = false
Vue.prototype.$apiNodeEnv = process.env.NODE_ENV
Vue.prototype.$apiRootPath = process.env.NODE_ENV !== 'production' ? 'http://172.16.7.83:3000/api/' : '/api/'

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

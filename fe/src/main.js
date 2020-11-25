import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VeeValidate from 'vee-validate'
import vuetify from './plugins/vuetify'
import '@babel/polyfill'

Vue.config.productionTip = false
Vue.prototype.$apiNodeEnv = process.env.NODE_ENV
Vue.prototype.$apiRootPath = process.env.NODE_ENV !== 'production' ? 'http://192.168.1.175:3000/api/' : '/api/'

Vue.use(VeeValidate)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

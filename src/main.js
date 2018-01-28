import Vue from 'vue'

// vue-router
import VueRouter from 'vue-router'
import router from '@/router/router'

// Vuetify
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'

import App from './App.vue'

// Plugins
Vue.use(VueRouter)
Vue.use(Vuetify)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

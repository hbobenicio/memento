import Vue from 'vue'
import VueRouter from 'vue-router'

// Vuetify
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'

import App from './App.vue'

// Plugins
Vue.use(VueRouter)
Vue.use(Vuetify)

new Vue({
  el: '#app',
  render: h => h(App)
})

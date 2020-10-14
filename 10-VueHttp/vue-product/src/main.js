import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import routes from './routes/index'

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.use(VueRouter)
Vue.use(VueResource)

const router = new VueRouter({
  mode: 'history', 
  routes
})


new Vue({
  el: '#app',
  
  router,
  render: h => h(App)
})

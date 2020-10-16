import Vue from 'vue'
import App from './App.vue'
import router from './assets/routes/index'
import store from './assets/store/index'


new Vue({
  el: '#app',
  router,
  store,
   render: h => h(App)
})

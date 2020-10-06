import Vue from 'vue'
import store from './store'
import App from './App.vue'
import router from './router'
import {auth} from './firebase'
import { BootstrapVue } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

Vue.use(BootstrapVue)

let app
auth.onAuthStateChanged(user => {
  store.dispatch("auth/setUser", user);

  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
import Vue from "vue";
import store from "./store";
import App from "./App.vue";
import router from "./router";
import { auth} from "./firebase";
import { BootstrapVue } from "bootstrap-vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.config.productionTip = false;

Vue.use(BootstrapVue);

let app;
auth.onAuthStateChanged(async (result) => {
  // Fetch logged in user details from databasae and set in the store
  if (result) {
    store.dispatch("user/getLoggedInUser", result.uid);
  } else {
    store.dispatch("user/unsetUser");
  }

  if (!app) {
    app = new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount("#app");
  }
});

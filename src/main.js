import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  router, // Add router to the Vue instance
  store, // Add store to the Vue instance
  render: (h) => h(App),
}).$mount("#app");

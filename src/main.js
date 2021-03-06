import Vue from "vue";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import router from "./router";
import VueCookies from "vue-cookies";
import "vue2-animate/dist/vue2-animate.css";

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

Vue.use(VueCookies);
Vue.$cookies.config("7d");

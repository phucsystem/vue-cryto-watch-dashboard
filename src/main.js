import Vue from 'vue'
import App from './App.vue'
import router from "@/router";
import store from './store'
import {BootstrapVue, IconsPlugin} from "bootstrap-vue";
import "./assets/vendor/font-awesome/css/font-awesome.css";
import "./assets/app.scss"


Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

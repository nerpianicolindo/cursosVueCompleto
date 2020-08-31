import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import "./filters.js";
import "./index.js";
import "./directives.js";

Vue.config.productionTip = false

new Vue({
  router,
  //el: '#app',
  //components: {App},
  //template: '<App/>',
  render: el => el(App),
}).$mount('#app')

/* new Vue({
  router,
  el: '#app',
  components: {App},
  template: '<App/>',
  render: h => h(App),
}).$mount('#app')
 */

 /*  new Vue({
  router,
  render: h => h(App),
}).$mount('#app')*/
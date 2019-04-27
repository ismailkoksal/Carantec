import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import Axios from 'axios'
import i18n from './i18n'

Vue.config.productionTip = false;
Vue.prototype.$http = Axios;
const accessToken = localStorage.getItem('access_token');

if (accessToken) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = accessToken
}

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app');

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import common from './common'
import iView from 'iview';

Vue.use(common);
Vue.use(iView);

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

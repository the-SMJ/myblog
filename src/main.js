/*
 * @Author: FX
 * @Date: 2021-08-09 10:37:35
 * @Description: 
 * @FilePath: \myblog\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Vuex from 'vuex'
import store from './store';
import myAxios from './axios'

import '../src/assets/css/reset.css'


Vue.prototype.myAxios = myAxios
Vue.use(ElementUI);
Vue.use(Vuex)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

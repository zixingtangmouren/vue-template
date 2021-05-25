/**
 * @Author: tangzhicheng
 * @Date: 2021-03-23 16:45:50
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-04-02 11:51:59
 * @Description: file content
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import HttpPlugin from './http'
import APIPlugin from './api'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(HttpPlugin)
Vue.use(APIPlugin)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

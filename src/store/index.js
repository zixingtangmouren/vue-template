/**
 * @Author: tangzhicheng
 * @Date: 2021-03-23 16:45:50
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-03-23 21:31:19
 * @Description: file content
 */
import Vue from 'vue'
import Vuex from 'vuex'
import userModule from './modules/user'
import appModule from './modules/app'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user: userModule,
    app: appModule
  }
})
